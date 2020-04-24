/// <reference types="react" />
/**
 * Rerenders a component each time an Observable of props (propStream)
 * yields a new value
 */
export declare const Animate: ({ propStream, component, loop }: {
    propStream?: import("polyrhythm").AwaitableObservable | undefined;
    component: any;
    loop?: boolean | undefined;
}) => JSX.Element;
