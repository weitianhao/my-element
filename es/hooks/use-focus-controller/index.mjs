import { getCurrentInstance, shallowRef, ref, watch } from 'vue';
import { useEventListener } from '@vueuse/core';
import '../../utils/index.mjs';
import { isFunction } from '@vue/shared';

function useFocusController(target, { afterFocus, beforeBlur, afterBlur, isFull } = {}) {
  const instance = getCurrentInstance();
  const { emit, provides } = instance;
  const parentFocus = provides["PARENT_FOCUS"];
  const setFloat = provides["SET_FLOAT"];
  const isFloat = provides["IS_FLOAT"];
  const parentClear = provides["PARENT_CLEAR"];
  const wrapperRef = shallowRef();
  const isFocused = ref(false);
  if (parentFocus) {
    watch(parentFocus, (val) => {
      if (isFloat && isFloat.value && setFloat)
        setFloat(isFull && isFull.value ? isFull.value : val);
    });
  }
  if (parentClear) {
    watch(parentClear, () => {
      isFocused.value = false;
    });
  }
  const handleFocus = (event) => {
    if (isFocused.value)
      return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
    if (!parentFocus && isFloat && isFloat.value && setFloat)
      setFloat(true);
  };
  const handleBlur = (event) => {
    var _a;
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false;
    if (cancelBlur || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget)))
      return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
    if (!parentFocus && isFloat && isFloat.value && setFloat)
      setFloat(isFull && isFull.value);
  };
  const handleClick = () => {
    var _a;
    (_a = target.value) == null ? void 0 : _a.focus();
  };
  watch(wrapperRef, (el) => {
    if (el) {
      el.setAttribute("tabindex", "-1");
    }
  });
  useEventListener(wrapperRef, "click", handleClick);
  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  };
}

export { useFocusController };
//# sourceMappingURL=index.mjs.map
