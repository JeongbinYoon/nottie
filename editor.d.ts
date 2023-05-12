declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    onTab: {
      /**
       * 아무거나 적으면.
       */
      onTab: () => ReturnType;
    };
  }
}

export declare const onTab: RawCommands['onTab'];
