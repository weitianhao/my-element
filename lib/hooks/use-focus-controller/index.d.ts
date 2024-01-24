import type { ShallowRef } from 'vue';
interface UseFocusControllerOptions {
    afterFocus?: () => void;
    /**
     * return true to cancel blur
     * @param event FocusEvent
     */
    beforeBlur?: (event: FocusEvent) => boolean | undefined;
    afterBlur?: () => void;
    isFull?: any;
}
export declare function useFocusController<T extends HTMLElement>(target: ShallowRef<T | undefined>, { afterFocus, beforeBlur, afterBlur, isFull }?: UseFocusControllerOptions): {
    wrapperRef: ShallowRef<HTMLElement | undefined>;
    isFocused: import("vue").Ref<boolean>;
    handleFocus: (event: FocusEvent) => void;
    handleBlur: (event: FocusEvent) => void;
};
export {};
