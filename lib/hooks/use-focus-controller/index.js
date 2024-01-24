'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../utils/index.js');
var shared = require('@vue/shared');

function useFocusController(target, { afterFocus, beforeBlur, afterBlur, isFull } = {}) {
  const instance = vue.getCurrentInstance();
  const { emit, provides } = instance;
  const parentFocus = provides["PARENT_FOCUS"];
  const setFloat = provides["SET_FLOAT"];
  const isFloat = provides["IS_FLOAT"];
  const parentClear = provides["PARENT_CLEAR"];
  const wrapperRef = vue.shallowRef();
  const isFocused = vue.ref(false);
  if (parentFocus) {
    vue.watch(parentFocus, (val) => {
      if (isFloat && isFloat.value && setFloat)
        setFloat(isFull && isFull.value ? isFull.value : val);
    });
  }
  if (parentClear) {
    vue.watch(parentClear, () => {
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
    const cancelBlur = shared.isFunction(beforeBlur) ? beforeBlur(event) : false;
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
  vue.watch(wrapperRef, (el) => {
    if (el) {
      el.setAttribute("tabindex", "-1");
    }
  });
  core.useEventListener(wrapperRef, "click", handleClick);
  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  };
}

exports.useFocusController = useFocusController;
//# sourceMappingURL=index.js.map
