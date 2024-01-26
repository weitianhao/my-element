import type { ComponentPublicInstance } from 'vue';
import type { MaybeRef } from '@vueuse/core';
import type { Modifier } from '@popperjs/core';
import type { Measurable } from './constants';
import type { PopperCoreConfigProps } from './content';
export declare const buildPopperOptions: (props: PopperCoreConfigProps, modifiers?: Modifier<any, any>[]) => {
    modifiers: (Modifier<any, any> | {
        name: string;
        options: {
            offset: number[];
            padding?: undefined;
            fallbackPlacements?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            padding: {
                top: number;
                bottom: number;
                left: number;
                right: number;
            };
            offset?: undefined;
            fallbackPlacements?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            padding: number;
            fallbackPlacements: import("@popperjs/core").Placement[] | undefined;
            offset?: undefined;
            gpuAcceleration?: undefined;
        };
    } | {
        name: string;
        options: {
            gpuAcceleration: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            offset?: undefined;
            padding?: undefined;
            fallbackPlacements?: undefined;
        };
    })[];
    placement: "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "auto" | "auto-start" | "auto-end";
    strategy: "absolute" | "fixed";
    onFirstUpdate?: ((arg0: Partial<import("@popperjs/core").State>) => void) | undefined;
};
export declare const unwrapMeasurableEl: ($el: MaybeRef<Measurable | undefined | ComponentPublicInstance>) => HTMLElement | undefined;
