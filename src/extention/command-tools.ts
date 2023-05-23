import { MoveCommand, NeactNode, headingInfo } from '../types/nottie'
import { bindEditor, createElement, render } from '../helper/renderer'
import type { Editor } from '@tiptap/core'
import { KeyDownEvent, commandKeyType, pressedKeyType } from '../types/nottie'

// 첫 번째 커맨드 리스트
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
            onkeydown: (e: KeyDownEvent) => moveCommand(editor, e),
            children: [
              {
                type: 'li',
                className: ['command__list--item'],
                attributes: [
                  { key: 'tabindex', value: '0' },
                  { key: 'data-type', value: 'image' },
                ],
                onclick: () => executeCommand(editor, 'image'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'image'),
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
                onclick: () => executeCommand(editor, 'heading-1'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'heading-1'),
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
                onclick: () => executeCommand(editor, 'heading-2'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'heading-2'),
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
                onclick: () => executeCommand(editor, 'heading-3'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'heading-3'),
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
                onclick: () => executeCommand(editor, 'heading-4'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'heading-4'),
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
                onclick: () => executeCommand(editor, 'paragraph'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'paragraph'),
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
                onclick: () => executeCommand(editor, 'bullet'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'bullet'),
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
                onclick: () => executeCommand(editor, 'ordered'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') && executeCommand(editor, 'ordered'),
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
                onclick: () => executeCommand(editor, 'code-block'),
                onkeydown: (e: KeyDownEvent) =>
                  (e.code === 'Space' || e.code === 'Enter') &&
                  executeCommand(editor, 'code-block'),
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

// 두 번째 커맨드 리스트
const secondDepth = (editor: Editor): NeactNode => {
  return {
    type: 'div',
    className: ['command-container'],
    children: [
      {
        type: 'div',
        className: ['active', 'image', 'second-command-depth'],
        onkeydown: (e: KeyDownEvent) => onPressEscape(e, editor),
        children: [
          {
            type: 'div',
            className: ['image-header'],
            children: [
              {
                type: 'ul',
                className: ['header-list'],
                children: [
                  {
                    type: 'li',
                    className: ['active'],
                    attributes: [
                      { key: 'tabindex', value: '0' },
                      {
                        key: 'data-type',
                        value: 'file',
                      },
                    ],
                    onclick: changeUploadImageType,
                    onkeydown: (e: KeyDownEvent) =>
                      (e.code === 'Space' || e.code === 'Enter') && changeUploadImageType(e),
                    children: [
                      {
                        type: 'span',
                        innerValue: '이미지',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    attributes: [
                      { key: 'tabindex', value: '1' },
                      {
                        key: 'data-type',
                        value: 'link',
                      },
                    ],
                    onclick: changeUploadImageType,
                    onkeydown: (e: KeyDownEvent) =>
                      (e.code === 'Space' || e.code === 'Enter') && changeUploadImageType(e),
                    children: [
                      {
                        type: 'span',
                        innerValue: '링크링크링크',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    attributes: [
                      { key: 'tabindex', value: '0' },
                      {
                        key: 'data-type',
                        value: 'link',
                      },
                    ],
                    onclick: changeUploadImageType,
                    onkeydown: (e: KeyDownEvent) =>
                      (e.code === 'Space' || e.code === 'Enter') && changeUploadImageType(e),
                    children: [
                      {
                        type: 'span',
                        innerValue: '링크',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    attributes: [
                      { key: 'tabindex', value: '0' },
                      {
                        key: 'data-type',
                        value: 'link',
                      },
                    ],
                    onclick: changeUploadImageType,
                    onkeydown: (e: KeyDownEvent) =>
                      (e.code === 'Space' || e.code === 'Enter') && changeUploadImageType(e),
                    children: [
                      {
                        type: 'span',
                        innerValue: '링크',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'div',
                className: ['border'],
              },
            ],
          },
          {
            type: 'div',
            className: ['image-body'],
            children: [
              {
                type: 'div',
                className: ['upload_file', 'active'],
                attributes: [
                  {
                    key: 'data-type',
                    value: 'file',
                  },
                ],
                children: [
                  {
                    type: 'input',
                    className: ['fileInputRef'],
                    attributes: [
                      { key: 'type', value: 'file' },
                      { key: 'accept', value: 'image/*' },
                    ],
                    onchange: (e: Event) => onAddImageFile(e, editor),
                  },
                  {
                    type: 'button',
                    className: ['imageInputButton'],
                    onclick: showFilePicker,
                    innerValue: '이미지 업로드',
                  },
                ],
              },
              {
                type: 'div',
                className: ['embed-link'],
                attributes: [
                  {
                    key: 'data-type',
                    value: 'link',
                  },
                ],
                children: [
                  {
                    type: 'input',
                    className: ['embedImageInputRef'],
                    attributes: [
                      { key: 'type', value: 'text' },
                      { key: 'placeholder', value: '링크를 삽입하세요' },
                    ],
                  },
                  {
                    type: 'button',
                    onclick: () => embedImageLink(editor),
                    onkeydown: () => embedImageLink(editor),
                    innerValue: '이미지 추가',
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

// 커맨드 툴을 그리는 함수 작성
export const insertImageCard: bindEditor = (editor: Editor, depth: string) => {
  if (depth === 'first') return firstDepth(editor)
  else if (depth === 'second') return secondDepth(editor)
  // else return secondDepth(editor)
}

// 커맨드 리스트에서 방향키 컨트롤
let commandListFocused = false
export const moveCommand: MoveCommand = (editor, e) => {
  const commandList = document.querySelector('.command .command__list')

  let currentTab = commandList && commandList.querySelector('li[tabindex="0"]')
  let prevTab = currentTab?.previousElementSibling ?? null
  let nextTab = currentTab?.nextElementSibling ?? currentTab

  const execution: Partial<Record<pressedKeyType, () => void>> = {
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
        closeCommand(editor)
      }
    },
    Escape() {
      currentTab?.setAttribute('tabindex', '-1')
      editor.commands.focus()
      closeCommand(editor)
    },
    Enter() {
      if (e) {
        const type = (<HTMLElement>e.target).dataset.type

        currentTab?.setAttribute('tabindex', '-1')
        commandList?.firstElementChild?.setAttribute('tabindex', '0')

        // 다른 타입일 경우 Enter입력시 커맨드 선택 후 종료
        if (type !== 'image') closeCommand(editor)
      }
    },
  }

  if (e) {
    execution[e.code]?.()
  }

  currentTab ? commandListFocused : !commandListFocused
  currentTab && (currentTab as HTMLElement).focus()
}

export const onPressAnyKey = (editor: Editor) => {
  function onPressOtherKey(e: KeyDownEvent) {
    const commandContainer = document.querySelector('.command-container')

    if (!commandListFocused && commandContainer) {
      if (
        !(
          e.code === 'Enter' ||
          e.code === 'ArrowDown' ||
          e.code === 'ArrowUp' ||
          e.code === 'ArrowRight' ||
          e.code === 'ArrowLeft' ||
          e.code === 'Slash' ||
          e.code === 'Tab'
        )
      ) {
        editor.commands.focus()
        closeCommand(editor)
      }
    }

    window.removeEventListener('keydown', (e) => onPressOtherKey(e as KeyDownEvent))
  }
  window.addEventListener('keydown', (e) => onPressOtherKey(e as KeyDownEvent))
}

// 커맨드 선택시 마지막에 입력한 '/' 삭제
const deleteSlash = () => {
  const cursorPos = window.getSelection()?.focusOffset
  const s = window.getSelection()
  const range = s?.getRangeAt(0)

  // console.log(range?.startOffset - 1)
  if (cursorPos) {
    // range?.setStart(range.startContainer, cursorPos - 1)
    // console.log(range)
    // range?.deleteContents()
    // range?.detach()
  }
  // s?.removeAllRanges()
}

// 두 번째 커맨드 리스트 열기
const executeCommand = (editor: Editor, type: commandKeyType) => {
  // const myEvent = new CustomEvent('onSlashPress', {
  //   detail: { test: 123 },
  // })
  // if (editor.options.element.dispatchEvent(myEvent)) {
  //   editor.options.element.addEventListener('onSlashPress', (event) => {
  //     event.detail.test
  //   })
  // }
  const execution: Record<commandKeyType, () => void> = {
    image() {
      commandListFocused = true
      render(editor.options.element, createElement(insertImageCard(editor, 'second')))
      const activeMenu = document.querySelector(
        '.second-command-depth .header-list .active',
      ) as HTMLElement

      setTimeout(() => {
        locateCommandPos()
        if (activeMenu) {
          tabBorderAnimation(activeMenu)
          activeMenu.focus()
          console.log(activeMenu)
        }
      }, 0)

      // 바깥 영역 클릭시 커맨드 끄기
      const commandContainer = document.querySelector('.command-container')
      commandContainer?.addEventListener('click', (e) => {
        if ((<HTMLElement>e?.target).classList?.contains('command-container')) {
          closeCommand(editor)
        }
      })
    },
    'heading-1'() {
      editor.commands.toggleHeading({ level: 1 })
    },
    'heading-2'() {
      editor.commands.toggleHeading({ level: 2 })
    },
    'heading-3'() {
      editor.commands.toggleHeading({ level: 3 })
    },
    'heading-4'() {
      editor.commands.toggleHeading({ level: 4 })
    },
    paragraph() {
      editor.commands.setParagraph()
    },
    bullet() {
      editor.commands.toggleBulletList()
    },
    ordered() {
      editor.commands.toggleOrderedList()
    },
    'code-block'() {
      editor.commands.toggleCodeBlock()
    },
  }
  if (type in execution) {
    deleteSlash()
    closeCommand(editor)

    execution[type]()
  }
}

// SecondDepthCommand의 header 탭 border 애니메이션
const tabBorderAnimation = (target: HTMLElement) => {
  const RATIO = 0.7
  const border = document.querySelector<HTMLElement>('.second-command-depth .image-header .border')
  if (border) {
    border.style.left = `${target.offsetLeft + target.clientWidth * ((1 - RATIO) / 2)}px`
    border.style.width = `${target.clientWidth * RATIO}px`
  }
}

// 이미지 파일, 링크 선택시 해당 콘텐츠 변경
const changeUploadImageType = (e: KeyDownEvent | MouseEvent) => {
  const tabList = (<HTMLElement>e.currentTarget).parentElement
  const target = e.currentTarget as HTMLElement

  if (target) {
    const {
      dataset: { type },
    } = target

    ;(<HTMLElement>tabList).childNodes.forEach((li) => (<HTMLElement>li).classList.remove('active'))
    target?.classList.add('active')

    const contents = document.querySelector('.image-body')
    contents?.childNodes.forEach((content) => {
      if ((<HTMLElement>content).dataset.type === type) {
        ;(<HTMLElement>content).classList.add('active')
      } else {
        ;(<HTMLElement>content).classList.remove('active')
      }
    })
    tabBorderAnimation(target)
  }
}

// 이미지 파일 업로드
const onAddImageFile = async (e: any, editor: Editor) => {
  const file = e?.currentTarget.files[0]
  const reader = new FileReader()
  if (file?.type?.includes('image')) {
    reader.onload = (e) => {
      const result = e?.target?.result as string

      if (result) {
        // const b = new Blob([result], { type: file.type })
        // const src = URL.createObjectURL(b)
        editor.commands.setImage({ src: result })
      }
      closeCommand(editor)
    }
    reader.readAsDataURL(file)
  } else {
    alert('지원하지 않는 확장자입니다.')
  }
}

// Input 파일 선택 창 로드
const showFilePicker = () => {
  const fileInputRef: HTMLInputElement | null = document.querySelector('.fileInputRef')

  if (fileInputRef) fileInputRef.showPicker()
}

// 링크 이미지 업로드
const embedImageLink = (editor: Editor) => {
  const embedImageInputRef: HTMLInputElement | null = document.querySelector('.embedImageInputRef')

  if (embedImageInputRef?.value) {
    editor.commands.setImage({ src: embedImageInputRef.value })
    closeCommand(editor)
  }
}

const onPressEscape = (e: KeyDownEvent, editor: Editor) => {
  e.code === 'Escape' && closeCommand(editor)
}

// 커맨드 삭제
export const closeCommand = (editor: Editor) => {
  commandListFocused = false
  document.querySelector('.command-container')?.remove()
  console.log('close')
  editor.commands.focus()
}

// 커맨드를 그릴 위치 조정
export const locateCommandPos = () => {
  const selection = window.getSelection() // 현재 선택 영역 가져오기
  if (selection && selection?.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    const command =
      document.querySelector<HTMLElement>('.command-container .command') ??
      document.querySelector<HTMLElement>('.command-container .second-command-depth')

    if (command) {
      const commandWidth = command.offsetWidth
      const windowWidth = window.innerWidth
      const isExceedingRightBound = rect.left + commandWidth + 5 > windowWidth
      const isExceedingLeftBound = rect.left < commandWidth

      if (isExceedingRightBound) {
        isExceedingLeftBound
          ? (command.style.left = `${10}px`)
          : (command.style.left = `${rect.left - commandWidth}px`)
      } else {
        command.style.left = `${rect.left + 5}px`
      }
      command.style.top = `${rect.bottom + 5}px`
    }
  }
}

// 앵커 스크롤
const onScroll = (e) => {
  const targetClassName = e.target.className
  const scrollTarget = document.querySelector(`.${targetClassName}:not(span,li)`)
  console.log('scrollTarget', scrollTarget)
  if (scrollTarget) {
    scrollTarget.scrollIntoView()
  }
}

// 앵커
export const createAnchor = (editor: Editor) => {
  // 모든 h 태그
  const headings = [...editor.view.dom.querySelectorAll('h1,h2,h3,h4')]
  console.log('headings', headings)

  // 첫 번째 요소 태그가 h1일 때까지 앞 요소 삭제
  while (headings.length && headings[0].tagName !== 'H1') {
    headings.shift()
  }

  const headingInfo = headings.map((el): headingInfo => {
    const randomStr = Math.random().toString(36).substring(2, 12)
    const tagName = el.tagName.toLowerCase()
    const className = [tagName + randomStr]

    // 기존에 생성된 랜덤 클래스 제거후 재생성
    if (el.classList.length > 2) {
      el.classList.forEach((cl) => {
        if (cl.indexOf('h1') === 0) {
          el.classList.remove(cl)
        }
      })
    }
    el.classList.add(tagName + randomStr)
    ;(<HTMLElement>el).dataset.id = tagName + randomStr
    return {
      type: tagName,
      children: [],
      innerValue: `<span class="${className}">${(<HTMLElement>el).innerText}</span>`,
      className,
      dom: el,
      onclick: (e) => onScroll(e),
    }
  })

  const h1Idx: number[] = []
  headingInfo.forEach((el, idx) => {
    if (el.type === 'h1') {
      h1Idx.push(idx)
    }
  })

  // 가장 작은 타이틀
  const lastChilds = []
  for (let i = 1; i < h1Idx.length; i++) {
    // 작은 타이틀을 상위 타이틀의 children으로 push

    for (let j = h1Idx[i] - 1; j > h1Idx[i - 1]; j--) {
      const lastChild = headingInfo[j]
      // h태그 숫자가 1차이 날 때만
      if (Number(lastChild.type[1]) - Number(headingInfo[j - 1].type[1]) === 1) {
        headingInfo[j - 1].children.push({ ...lastChild })
      }
    }
  }

  // 가장 마지막 부터 뒤에서 가장 가까운 h1까지
  for (let i = headingInfo.length - 1; i > h1Idx[h1Idx.length - 1]; i--) {
    const lastChild = headingInfo[i]
    // h태그 숫자가 1차이 날 때만
    if (Number(lastChild.type[1]) - Number(headingInfo[i - 1].type[1]) === 1) {
      headingInfo[i - 1].children.push({ ...lastChild })
    }
  }
  lastChilds.push({ ...headingInfo[headingInfo.length - 1] })

  // h1 태그 기준으로 h2,h3,h4 순서대로 children에 넣은 배열
  const h1parents = headingInfo.filter((el) => el.type === 'h1')
  const changeTagNameToLi = (el: headingInfo) => {
    el.type = 'li'
    if (!el.children || !el.children.length) {
      return
    }
    console.log(el, ' <<< el')
    return el.children.forEach(changeTagNameToLi)
  }
  h1parents.forEach(changeTagNameToLi)

  console.log(h1parents)

  const anchors = h1parents.map((h) => createElement(h))
  // 기존 anchor 삭제 후 재생성
  document.querySelector('.anchor')?.remove()
  const anchor = document.createElement('div')
  anchor.setAttribute('class', 'anchor')

  const anchorList = document.createElement('ul')
  anchorList.setAttribute('class', 'anchor-list')
  anchor.append(anchorList)

  document.body.append(anchor)

  anchors.forEach((a) => {
    render(document.querySelector('.anchor-list'), a, 0)
  })

  // Observer
  setTimeout(() => {
    let previous: null | Element = null
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry)
          const anchorTarget = document.querySelector(`.anchor .${entry.target.className}`)
          if (!entry.isIntersecting && anchorTarget) {
            if (previous) {
              previous.classList.remove('active')
            }
            previous = anchorTarget
            anchorTarget.classList.add('active')
          } else {
            // console.log(anchorTarget)
          }
        })
      },
      {
        rootMargin: '-150px 0px -700px 0px',
      },
    )

    headingInfo.map((target) => observer.observe(target.dom))
  }, 0)
}

window.addEventListener('resize', () => {
  const activeItem = document.querySelector('li.active') as HTMLElement
  if (activeItem) tabBorderAnimation(activeItem)

  locateCommandPos()
})
