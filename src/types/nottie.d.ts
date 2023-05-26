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
  export type TagName = keyof HTMLElementTagMap
}
export type pressedKeyType =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowRight'
  | 'ArrowLeft'
  | 'Escape'
  | 'Enter'
  | 'Space'
  | 'Slash'
  | 'Tab'
export type commandKeyType =
  | 'image'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'paragraph'
  | 'bullet'
  | 'ordered'
  | 'code-block'
  | 'blockquote'

export interface KeyDownEvent extends KeyboardEvent {
  code: pressedKeyType
}

export interface MoveCommand {
  (editor: Editor, e?: KeyDownEvent): void
}

export interface headingInfo {
  type: string
  children: headingInfo[]
  innerValue: string
  className: string[]
  dom: Element
  onclick: (e) => void
}
