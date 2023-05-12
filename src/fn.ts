interface NodeOption {
  id?: string;
  onkeydown?: GlobalEventHandlers['onkeydown'];
  onclick?: GlobalEventHandlers['onclick'];
}

export interface NeactNode extends NodeOption {
  type: TagName;
  children?: NeactNode[];
  className?: string[];
}
type HTMLElementTagMap = HTMLElementTagNameMap & SVGElementTagNameMap;

type T = HTMLElementTagMap['svg'];
export interface createElementNode {
  type: TagName;
  children?: createElementNode[];
  className?: string[];
  target: HTMLElement;
}

interface EditorNode {
  target: Element;
  children?: Element[];
}

type createElement = (node: NeactNode) => createElementNode;

type Render = (target: Element, node: createElementNode) => EditorNode;
type TagName = keyof HTMLElementTagNameMap;

export const hasCodeTag = (node: Node) => {
  return node?.parentElement?.localName === 'code';
};

export const createElement: createElement = (node) => {
  const { className: classNames, children, type, ...restOptions } = node;
  const target = document.createElement(type);

  if (classNames?.length) {
    classNames.map((cls) => target.classList.add(cls));
  }
  const keys = Object.keys(restOptions) as (keyof typeof restOptions)[];
  for (let i = 0; i < keys.length; i++) {
    if (restOptions[keys[i]]) {
      target[keys[i]] = restOptions[keys[i]] as any;
    }
  }
  let returnNode: createElementNode = {
    type,
    className: classNames,
    target,
  };
  if (children?.length) {
    returnNode.children = children.map((node) => {
      const child = createElement(node);
      target.appendChild(child.target);
      return child;
    });
  }

  return returnNode;
};
export const render: Render = (targetEl, node) => {
  targetEl.appendChild(node.target);
  return {
    target: node.target,
  };
};
