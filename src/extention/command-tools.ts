import { NeactNode } from '../types/nottie'
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
                onclick: () => openSecondDepth(editor, 'image'),
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
                onkeydown: (e: KeyDownEvent) =>
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
  else return secondDepth(editor)
}

// 커맨드 리스트에서 방향키 컨트롤
let commandListFocused = false
interface MoveCommand {
  (editor: Editor, e?: KeyDownEvent): void
}

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
const deleteSlash = (editor: Editor) => {
  const cursorPos = window.getSelection()?.focusOffset
  const s = window.getSelection()
  const range = s?.getRangeAt(0)

  // console.log(range?.startOffset - 1)
  if (cursorPos) {
    range?.setStart(range.startContainer, cursorPos - 1)
    console.log(range)
    range?.deleteContents()
    range?.detach()
  }
  // s?.removeAllRanges()

  // const cursorPos = window.getSelection()?.focusOffset
  // console.log(cursorPos)
  // if (cursorPos) {
  //   editor.commands.deleteRange({
  //     from: cursorPos,
  //     to: cursorPos + 1,
  //   })
  // }
}

// 두 번째 커맨드 리스트 열기
const openSecondDepth = (editor: Editor, type: commandKeyType) => {
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

      if (activeMenu) {
        tabBorderAnimation(activeMenu)
        activeMenu.focus()
      }
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
    closeCommand(editor)
    deleteSlash(editor)

    execution[type]()
  }
}

// SecondDepthCommand의 header 탭 border 애니메이션
const tabBorderAnimation = (target: HTMLElement) => {
  const RATIO = 0.8
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
  // const file = e?.target.files[0]
  // if (file?.type?.includes('image')) {
  //   // const fileData = await client.assets.upload('image', file)
  //   editor?.chain().focus().setImage({ src: fileData.url }).run()
  //   closeCommand(editor)
  // } else {
  //   alert('지원하지 않는 확장자')
  // }
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
const closeCommand = (editor: Editor) => {
  commandListFocused = false
  document.querySelector('.command-container')?.remove()
  console.log('close')
  editor.commands.focus()
}

window.addEventListener('resize', () => {
  const activeItem = document.querySelector('li.active') as HTMLElement
  if (activeItem) tabBorderAnimation(activeItem)
})
