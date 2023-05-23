import CodeBlock from '@tiptap/extension-code-block-lowlight'
import html from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import { lowlight } from 'lowlight'
lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
import { mergeAttributes, Extension, Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import BaseHeading, { type Level } from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import BubbleMenu from '@tiptap/extension-bubble-menu'
import { createElement, hasCodeTag, render } from './helper/renderer'
import type { EditorOptions } from '@tiptap/core'
import {
  closeCommand,
  createAnchor,
  insertImageCard,
  locateCommandPos,
  moveCommand,
  onPressAnyKey,
} from './extention/command-tools'
import { KeyDownEvent } from './types'

const classes = {
  1: 'text-4xl heading',
  2: 'text-3xl heading',
  3: 'text-2xl heading',
  4: 'text-1xl heading',
  5: '',
  6: '',
}

const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
  name: 'anchor',
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level)
    const level: Level = hasLevel ? node.attrs.level : this.options.levels[0]
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level] ?? ''}`,
      }),
      0,
    ]
  },
  addCommands() {
    return {
      onTab:
        () =>
        ({ chain }) => {
          return !!chain().insertContent('   ')
        },
    }
  },
  addKeyboardShortcuts() {
    return {
      // ↓ your new keyboard shortcut
      Tab: (props) => {
        // let selection = window.getSelection()?.focusNode as any
        // let enterCommand = false
        // let canTab = false
        // const lastChar = selection?.data && selection?.data[selection?.data?.length - 1]
        // console.log('lastChar', lastChar)
        // if (selection?.innerText === '/' || lastChar === '/') {
        //   canTab = true
        //   enterCommand = true
        // } else {
        //   while (selection) {
        //     if (selection?.classList?.contains('ProseMirror')) {
        //       break
        //     }
        //     if (hasCodeTag(selection)) {
        //       canTab = true
        //       break
        //     }
        //     selection = selection?.parentElement || selection.parentElement
        //   }
        // }
        // if (enterCommand) {
        //   return false
        // }
        // if (canTab && enterCommand === false) {
        //   this.editor.commands.deleteRange
        //   return this.editor.commands.onTab()
        // } else {
        //   this.editor.commands.sinkListItem('listItem')
        //   this.editor.commands.focus('end')
        // }
        // console.log('CanTab', canTab)
        // return true
      },
    }
  },
})

const CustomExtension = (target: Element) => {
  const targetEl = target
  return Extension.create({
    addKeyboardShortcuts(): any {
      const editor = this.editor
      return {
        '/': () => {
          closeCommand(editor)

          const imageCard = createElement(insertImageCard(this.editor, 'first'))
          render(targetEl, imageCard)

          // 커맨드를 그릴 위치 구하기
          locateCommandPos()

          // '/' > 'ArrowDown' 입력시 커맨드로 포커스 후 이벤트 삭제
          const onFocusCommand = () => {
            function onPressedNextKey(e: KeyDownEvent) {
              if (e.code === 'ArrowDown' || e.code === 'Tab') {
                moveCommand(editor)
                window.removeEventListener('keydown', (event) =>
                  onPressedNextKey(event as KeyDownEvent),
                )
              }
            }
            window.addEventListener('keydown', (e) => onPressedNextKey(e as KeyDownEvent))
          }
          onFocusCommand()
          // this.editor.commands.insertContent('<p class="command_spot"> </p>');

          // 바깥 영역 클릭시 커맨드 끄기
          const commandContainer = document.querySelector('.command-container')
          commandContainer?.addEventListener('click', (e) => {
            if ((<HTMLElement>e?.target).classList?.contains('command-container')) {
              closeCommand(editor)
            }
          })
        },
      }
    },
  })
}
interface EditorOption extends Omit<Partial<EditorOptions>, 'element'> {
  element: Element
}
export const createEditor = ({ editable = true, ...options }: EditorOption) => {
  const editor = new Editor({
    extensions: [
      StarterKit,
      Image,
      Heading,
      CustomExtension(options.element),
      CodeBlock.configure({
        languageClassPrefix: 'language-',
        exitOnTripleEnter: false,
        exitOnArrowDown: false,
        lowlight,
      }),
      Placeholder.configure({
        placeholder: '내용을 입력하세요...',
      }),
      BubbleMenu.configure({
        element: document.querySelector('.menu') as HTMLElement,
      }),
      ...(options.extensions ?? []),
    ],
    editable,
    // onCreate(props) {},
    onUpdate: ({ transaction }) => {
      onPressAnyKey(editor)

      if (editable) {
        createAnchor(editor)
      }
    },
    ...options,
  })
  return editor
}
