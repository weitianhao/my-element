import type { ExtractPropTypes } from 'vue';
import type { Arrayable } from 'element-plus/es/utils';
export declare type CollapseActiveName = string | number;
export declare type CollapseModelValue = Arrayable<CollapseActiveName>;
export declare const emitChangeFn: (value: CollapseModelValue) => boolean;
export declare const collapseProps: {
    readonly accordion: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue) | ((new (...args: any[]) => CollapseModelValue & {}) | (() => CollapseModelValue))[], unknown, unknown, () => [], boolean>;
};
export declare type CollapseProps = ExtractPropTypes<typeof collapseProps>;
export declare const collapseEmits: {
    "update:modelValue": (value: CollapseModelValue) => boolean;
    change: (value: CollapseModelValue) => boolean;
};
export declare type CollapseEmits = typeof collapseEmits;
