function createTextNode(text) {
  console.log("heiheihei!!!!!!!");
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  console.log(children, 'dsf');
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        const isTextNode = typeof child === 'string' || typeof child === 'number'
        return isTextNode ? createTextNode(child) : child;
      }),
    },
  };
}

function render(el, container) {
  nextWorkOfUnit = {
    dom: container,
    props: {
      children: [el],
    },
  };
  root = nextWorkOfUnit
}
let root = null;
let nextWorkOfUnit = null;
function workLoop(deadline) {
  let shouldYield = false;
  while (!shouldYield && nextWorkOfUnit) {
    nextWorkOfUnit = performWorkOfUnit(nextWorkOfUnit);

    shouldYield = deadline.timeRemaining() < 1;
  }
  if (!nextWorkOfUnit && root) {
    commitRoot()
  }
  requestIdleCallback(workLoop);
}
function commitRoot() {
  commitWork(root.child)
  root = null
}
function commitWork(fiber) {
  if (!fiber) return
  let fiberParent = fiber.parent
  while (!fiberParent.dom) {
    fiberParent = fiberParent.parent
  }
  if (fiber.dom) {
    fiberParent.dom.append(fiber.dom)
  }
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}
function createDom(type) {
  console.log(type, 'type');
  return type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(type);
}

function updateProps(dom, props) {
  Object.keys(props).forEach((key) => {
    if (key !== "children") {
      dom[key] = props[key];
    }
  });
}

function initChildren(fiber, children) {
  // const children = fiber.props.children;
  let prevChild = null;
  children.forEach((child, index) => {
    console.log(children, 'ccc');
    const newFiber = {
      type: child.type,
      props: child.props,
      child: null,
      parent: fiber,
      sibling: null,
      dom: null,
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevChild.sibling = newFiber;
    }
    prevChild = newFiber;
  });
}
function updateFunctionComponent(fiber) {
  const children = [fiber.type(fiber.props)]
  initChildren(fiber, children)
};
function updateHostComponet(fiber) {
  if (!fiber.dom) {
    const dom = (fiber.dom = createDom(fiber.type));
    updateProps(dom, fiber.props);
  }
  const children = fiber.props.children;
  initChildren(fiber, children)
}
function performWorkOfUnit(fiber) {
  const isFunctionComponent = typeof fiber.type === 'function'
  if (isFunctionComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponet(fiber)
  }
  // // if(isFunctionComponent){
  // //   console.log(fiber.type());
  // // }
  // if (!isFunctionComponent) {
  //   if (!fiber.dom) {
  //     const dom = (fiber.dom = createDom(fiber.type));
  //     // fiber.parent.dom.append(dom);
  //     updateProps(dom, fiber.props);
  //   }
  // }
  // const children = isFunctionComponent ? [fiber.type(fiber.props)] : fiber.props.children;
  // initChildren(fiber, children)

  // 4. 返回下一个要执行的任务
  if (fiber.child) {
    return fiber.child;
  }

  // while
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
  // return fiber.parent?.sibling;
}

requestIdleCallback(workLoop);

const React = {
  render,
  createElement,
};

export default React;
