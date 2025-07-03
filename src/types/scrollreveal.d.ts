declare module 'scrollreveal' {
  interface RevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    scale?: number;
    easing?: string;
    reset?: boolean;
    viewFactor?: number;
  }

  interface ScrollRevealObject {
    reveal(selector: string | Element | NodeList | HTMLElement[], options?: RevealOptions): void;
  }

  export default function ScrollReveal(): ScrollRevealObject;
}
