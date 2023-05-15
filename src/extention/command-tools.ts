import { NeactNode } from 'nottie'
import { bindEditor, createElement } from '../helper/renderer'
import type { Editor } from '@tiptap/core'
// 커멘트 툴을 그리는 함수 작성
export const insertImageCard: bindEditor = (editor) => ({
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
          children: [
            {
              type: 'li',
              className: ['command__list--item'],
              attributes: [{ key: 'tabindex', value: '0' }],
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
})
const openSecondDepth = (editor: Editor, type: string) => {
  //   this.showCommand = false
  if (type === 'heading-1') {
    editor.commands.toggleHeading({ level: 1 })
    editor.commands.focus('end')
  } else if (type === 'heading-2') {
    editor.commands.toggleHeading({ level: 2 })
    editor.commands.focus('end')
  } else if (type === 'heading-3') {
    editor.commands.toggleHeading({ level: 3 })
    editor.commands.focus('end')
  } else if (type === 'heading-4') {
    editor.commands.toggleHeading({ level: 4 })
    editor.commands.focus('end')
  } else if (type === 'paragraph') {
    editor.commands.setParagraph()
    editor.commands.focus('end')
  } else if (type === 'bullet') {
    editor.commands.toggleBulletList()
    editor.commands.focus('end')
  } else if (type === 'ordered') {
    editor.commands.toggleOrderedList()
    editor.commands.focus('end')
  } else if (type === 'code-block') {
    editor.commands.toggleCodeBlock()
    editor.commands.focus('end')
  } else {
    // this.showCommandSecondDepth = true
    // console.log(this.showCommandSecondDepth)
  }
}

// export const imageCard = createElement(insertImageCard)
