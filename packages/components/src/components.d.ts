/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";

export namespace Components {
  interface MChat {}
  interface MIcon {
    name: string;
  }
}

declare global {
  interface HTMLMChatElement extends Components.MChat, HTMLStencilElement {}
  var HTMLMChatElement: {
    prototype: HTMLMChatElement;
    new (): HTMLMChatElement;
  };

  interface HTMLMIconElement extends Components.MIcon, HTMLStencilElement {}
  var HTMLMIconElement: {
    prototype: HTMLMIconElement;
    new (): HTMLMIconElement;
  };
  interface HTMLElementTagNameMap {
    "m-chat": HTMLMChatElement;
    "m-icon": HTMLMIconElement;
  }
}

declare namespace LocalJSX {
  interface MChat {}
  interface MIcon {
    name?: string;
  }

  interface IntrinsicElements {
    "m-chat": MChat;
    "m-icon": MIcon;
  }
}

export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "m-chat": LocalJSX.MChat & JSXBase.HTMLAttributes<HTMLMChatElement>;
      "m-icon": LocalJSX.MIcon & JSXBase.HTMLAttributes<HTMLMIconElement>;
    }
  }
}
