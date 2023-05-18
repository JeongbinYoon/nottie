declare module 'nottie' {
  interface NodeOption {
    id?: string
    onkeydown?: GlobalEventHandlers['onkeydown']
    onclick?: GlobalEventHandlers['onclick']
    onchange?: GlobalEventHandlers['onchange']
  }

  export interface NeactNode extends NodeOption {
    type: TagName
    children?: NeactNode[]
    attributes?: {
      key: string
      value: string
    }[]
    className?: string[]
    innerValue?: string
  }
  export type HTMLElementTagMap = HTMLElementTagNameMap & SVGElementTagNameMap

  export interface createElementNode {
    type: TagName
    children?: createElementNode[]
    className?: string[]
    target: HTMLElement
    innerValue?: string
  }

  export interface EditorNode {
    target: Element
    children?: Element[]
  }

  export type createElementFn = (node: NeactNode) => createElementNode

  export type Render = (target: Element, node: createElementNode) => EditorNode
  export type TagName = keyof HTMLElementTagNameMap
}
