import CodeBlock from '@tiptap/extension-code-block-lowlight';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import { lowlight } from 'lowlight';
lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
import BaseHeading, { type Level } from '@tiptap/extension-heading';
import { mergeAttributes, Extension, Editor } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { hasCodeTag, render } from './fn';
import type { EditorOptions } from '@tiptap/core';
import { imageCard } from './extention/command-tools';

const classes = {
  1: 'text-4xl heading',
  2: 'text-3xl heading',
  3: 'text-2xl heading',
  4: 'text-1xl heading',
  5: '',
  6: '',
};

const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
  name: 'anchor',
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level: Level = hasLevel ? node.attrs.level : this.options.levels[0];
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level] ?? ''}`,
      }),
      0,
    ];
  },
  addCommands() {
    return {
      onTab:
        () =>
        ({ chain }) => {
          return !!chain().insertContent('   ');
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      // ↓ your new keyboard shortcut
      Tab: (props) => {
        let selection = window.getSelection()?.focusNode as any;
        let enterCommand = false;
        let canTab = false;
        const lastChar =
          selection?.data && selection?.data[selection?.data?.length - 1];
        if (selection?.innerText === '/' || lastChar === '/') {
          canTab = true;
          enterCommand = true;
        } else {
          while (selection) {
            if (selection?.classList?.contains('ProseMirror')) {
              break;
            }
            if (hasCodeTag(selection)) {
              canTab = true;
              break;
            }
            selection = selection?.parentElement || selection.parentElement;
          }
        }

        if (enterCommand) {
          return false;
        }

        if (canTab && enterCommand === false) {
          this.editor.commands.deleteRange;
          return this.editor.commands.onTab();
        } else {
          this.editor.commands.sinkListItem('listItem');
          this.editor.commands.focus('end');
        }
        return true;
      },
    };
  },
});

const CustomExtension = (target: Element) => {
  const targetEl = target;
  return Extension.create({
    addKeyboardShortcuts() {
      return {
        '/': () => {
          render(targetEl, imageCard);
          // _vm.showCommandContainer = true;
          // _vm.showCommand = true;
          // this.editor.commands.insertContent('<p class="command_spot"> </p>');
          return true;
        },
      };
    },
  });
};
interface EditorOption extends Omit<Partial<EditorOptions>, 'element'> {
  element: Element;
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
        placeholder: 'Write something …',
      }),
      ...(options.extensions ?? []),
    ],
    editable,
    // onCreate(props) {},
    // onUpdate: ({ transaction }) => {
    //   // _vm.cursorPos = transaction.curSelection.$anchor.pos;
    //   // _vm.onPressSlash();
    //   // if (this.editable && this.isMounted) {
    //   //   this.createAnchor();
    //   // }
    // },
    ...options,
  });
  return editor;
};
