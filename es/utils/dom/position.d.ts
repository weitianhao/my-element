export declare const isInContainer: (el?: Element | undefined, container?: Window | Element | undefined) => boolean;
export declare const getOffsetTop: (el: HTMLElement) => number;
export declare const getOffsetTopDistance: (el: HTMLElement, containerEl: HTMLElement) => number;
export declare const getClientXY: (event: MouseEvent | TouchEvent) => {
    clientX: number;
    clientY: number;
};
export declare const getChildPositionAndSize: (parentElement: any, childElement: any) => {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
