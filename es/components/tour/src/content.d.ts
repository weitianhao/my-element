import type { ExtractPropTypes } from 'vue';
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom';
export declare const tourContentProps: {
    placement: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Placement & {}) | (() => Placement) | ((new (...args: any[]) => Placement & {}) | (() => Placement))[], "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end", unknown, string, boolean>;
    reference: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null) | ((new (...args: any[]) => HTMLElement | VirtualElement) | (() => HTMLElement | VirtualElement | null))[], unknown, unknown, null, boolean>;
    strategy: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => Strategy & {}) | (() => Strategy) | ((new (...args: any[]) => Strategy & {}) | (() => Strategy))[], "absolute" | "fixed", unknown, string, boolean>;
    offset: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
    showArrow: BooleanConstructor;
    zIndex: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, number, boolean>;
};
export declare type TourContentProps = ExtractPropTypes<typeof tourContentProps>;
export declare const tourContentEmits: {
    close: () => boolean;
};
export declare type TourContentEmits = typeof tourContentEmits;
