import { NeactNode } from 'nottie'
import { bindEditor, createElement, render } from '../helper/renderer'
import type { Editor } from '@tiptap/core'

const firstDepth = (editor: Editor): NeactNode => {
  return {
    type: 'div',
    className: ['command-container'],
    children: [
      {
        type: 'div',
        className: ['command'],
        children: [
          {
            type: 'ul',
            className: ['command__list'],
            onkeydown: (e: KeyboardEvent) => moveCommand(e, editor),
            children: [
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '0' }],
                onclick: () => openSecondDepth(editor, 'image'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') && openSecondDepth(editor, 'image'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          // {
                          //   type: 'path',
                          //   attributes: [
                          //     { key: 'stroke-linecap', value: 'round' },
                          //     { key: 'stroke-linejoin', value: 'round' },
                          //     {
                          //       key: 'd',
                          //       value:
                          //         'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m'-1'.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                          //     },
                          //   ],
                          // },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: '이미지',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '파일 또는 링크를 통해 업로드하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'heading-1'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'heading-1'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: 'H1',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '제목을 생성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'heading-2'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'heading-2'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: 'H2',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '제목을 생성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'heading-3'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'heading-3'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: 'H3',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '제목을 생성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'heading-4'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'heading-4'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: 'H4',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '제목을 생성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'paragraph'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'paragraph'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: '단락',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '단락을 작성하세요.<br />마크업 단축키가 작동하지 않습니다',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'bullet'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') && openSecondDepth(editor, 'bullet'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: '불릿 리스트',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '불릿 리스트를 작성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'ordered'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') && openSecondDepth(editor, 'ordered'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: '숫자 리스트',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '숫자 리스트를 작성하세요',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [{ key: 'tabindex', value: '-1' }],
                onclick: () => openSecondDepth(editor, 'code-block'),
                onkeydown: (e) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  openSecondDepth(editor, 'code-block'),
                children: [
                  {
                    type: 'div',
                    className: ['iconBox'],
                    children: [
                      {
                        type: 'svg',
                        className: ['w-6', 'h-6', 'icon'],
                        attributes: [
                          { key: 'xmlns', value: 'http://www.w3.org/2000/svg' },
                          { key: 'fill', value: 'none' },
                          { key: 'viewBox', value: '0 0 24 24' },
                          { key: 'stroke-width', value: '1.5' },
                          { key: 'stroke', value: 'currentColor' },
                        ],
                        children: [
                          {
                            type: 'path',
                            attributes: [
                              { key: 'stroke-linecap', value: 'round' },
                              { key: 'stroke-linejoin', value: 'round' },
                              {
                                key: 'd',
                                value:
                                  'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'div',
                    className: ['description'],
                    children: [
                      {
                        type: 'span',
                        className: ['description-title'],
                        innerValue: '코드블럭',
                      },
                      {
                        type: 'span',
                        className: ['description-content'],
                        innerValue: '코드블럭에서 코드를 작성하세요',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
}
const secondDepth = (editor: Editor): NeactNode => {
  return {
    type: 'div',
    className: ['command-container'],
  }
}

// 커멘트 툴을 그리는 함수 작성

export const insertImageCard: bindEditor = (editor: Editor, depth: string) => {
  if (depth === 'first') return firstDepth(editor)
  else if (depth === 'second') return secondDepth(editor)
  else return secondDepth(editor)
}

type key =
  | 'image'
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'paragraph'
  | 'bullet'
  | 'ordered'
  | 'code-block'

type pressedType = string

export function moveCommand(code: string): void
export function moveCommand(e: KeyboardEvent, editor: Editor)
export function moveCommand(e: KeyboardEvent, editor: Editor, code: string) {
  const pressed = code ?? e?.code
  const commandList = document.querySelector('.command .command__list')

  let currentTab = commandList && (<Element>commandList).querySelector('li[tabindex="0"]')
  let prevTab = currentTab?.previousElementSibling ?? null
  let nextTab = currentTab?.nextElementSibling ?? currentTab

  const execution: Record<pressedType, () => void> = {
    ArrowDown() {
      prevTab = currentTab
      currentTab = nextTab
      prevTab?.setAttribute('tabindex', '-1')
      currentTab?.setAttribute('tabindex', '0')
    },
    ArrowUp() {
      if (prevTab) {
        nextTab = currentTab
        currentTab = prevTab
        nextTab?.setAttribute('tabindex', '-1')
        currentTab.setAttribute('tabindex', '0')
      } else {
        // 가상 상위 리스트일 경우 editor로 돌아감
        editor.commands.focus()
        currentTab = null
        // closeAllCommands()
        document.querySelector('.command-container')?.remove()
      }
    },
    Escape() {
      currentTab?.setAttribute('tabindex', '-1')
      // commandListFocused = false
      editor.commands.focus()
      // closeAllCommands()
      document.querySelector('.command-container')?.remove()
    },
    Enter() {
      currentTab?.setAttribute('tabindex', '-1')
      commandList?.firstElementChild?.setAttribute('tabindex', '0')
      // commandListFocused = false
      document.querySelector('.command-container')?.remove()
    },
  }

  if (pressed in execution) {
    console.log(pressed)
    execution[pressed]()
  }

  // currentTab ? (commandListFocused = true) : (commandListFocused = false)

  currentTab && (currentTab as HTMLElement).focus()
}

export const onPressAnyKey = () => {
  console.log('ANY KEY')
  function onPressOtherKey(e: KeyboardEvent) {
    console.log('Pressed: ', e.code)
    // if (e.code === 'Enter') {
    //   // 목록 선택 중인 경우 secondDepthCommand 끄지 않음
    //   // vm.commandListFocused || vm.closeAllCommands()
    // } else if (e.code === 'ArrowDown') {
    //   // moveCommand('ArrowDown')
    // } else if (e.code !== 'Slash' && e.code !== 'Tab' && e.code !== 'ArrowDown') {
    //   //  closeAllCommands()
    // }
    if (!(e.code === 'Enter' || e.code === 'ArrowDown' || e.code === 'Slash' || e.code === 'Tab')) {
      document.querySelector('.command-container')?.remove()
    }

    window.removeEventListener('keydown', onPressOtherKey)
  }
  window.addEventListener('keydown', onPressOtherKey)
}

const openSecondDepth = (editor: Editor, type: key) => {
  const execution: Record<key, () => void> = {
    image() {
      // editor.commands.toggleHeading({ level: 1 })
      editor.commands.focus('end')

      render(editor.options.element, createElement(insertImageCard(editor, 'second')))
      document.querySelector('.command-container')?.remove()
    },
    'heading-1'() {
      editor.commands.toggleHeading({ level: 1 })
      editor.commands.focus('end')
    },
    'heading-2'() {
      editor.commands.toggleHeading({ level: 2 })
      editor.commands.focus('end')
    },
    'heading-3'() {
      editor.commands.toggleHeading({ level: 3 })
      editor.commands.focus('end')
    },
    'heading-4'() {
      editor.commands.toggleHeading({ level: 4 })
      editor.commands.focus('end')
    },
    paragraph() {
      editor.commands.setParagraph()
      editor.commands.focus('end')
    },
    bullet() {
      editor.commands.toggleBulletList()
      editor.commands.focus('end')
    },
    ordered() {
      editor.commands.toggleOrderedList()
      editor.commands.focus('end')
    },
    'code-block'() {
      editor.commands.toggleCodeBlock()
      editor.commands.focus('end')
    },
  }
  if (type in execution) {
    execution[type]()
  }
}

// export const imageCard = createElement(insertImageCard)
