import type { NeactNode, Render, createElementFn, createElementNode } from 'nottie'
import type { Editor } from '@tiptap/core'
export const hasCodeTag = (node: Node) => {
  return node?.parentElement?.localName === 'code'
}

export const createElement: createElementFn = (node) => {
  const { className: classNames, children, type, ...restOptions } = node
  const target = document.createElement(type)

  if (classNames?.length) {
    classNames.map((cls) => target.classList.add(cls))
  }
  const keys = Object.keys(restOptions) as (keyof typeof restOptions)[]
  keys.forEach((key) => {
    if (key === 'attributes') {
      restOptions.attributes?.forEach((attribute) => {
        target.setAttribute(attribute.key, attribute.value)
      })
    } else {
      target[key] = restOptions[key] as any
    }

    if (restOptions.innerValue) {
      target.innerHTML = restOptions.innerValue
    }
  })

  let returnNode: createElementNode = {
    type,
    className: classNames,
    target,
  }
  if (children?.length) {
    returnNode.children = children.map((node) => {
      const child = createElement(node)
      target.appendChild(child.target)
      return child
    })
  }

  return returnNode
}
export const render: Render = (targetEl, node) => {
  targetEl.appendChild(node.target)
  return {
    target: node.target,
  }
}

export type bindEditor = (editor: Editor) => NeactNode
