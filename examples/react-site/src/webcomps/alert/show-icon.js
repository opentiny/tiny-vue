import React from 'react'
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
import { A as Alert } from "../index-8dd18d54.mjs";
import "@vue/runtime-core";
import "react";
import "@opentiny/vue-theme/base/index.less";
import "@opentiny/vue-renderless/badge/vue";
import "@opentiny/vue-theme/badge/index.less";
import "@opentiny/vue-theme-mobile/badge/index.less";
import "@opentiny/vue-renderless/button/vue";
import "@opentiny/vue-theme/svgs/loading.svg";
import "@opentiny/vue-theme/svgs/add.svg";
import "@opentiny/vue-theme/svgs/check.svg";
import "@opentiny/vue-theme/svgs/chevron-down.svg";
import "@opentiny/vue-theme/svgs/close.svg";
import "@opentiny/vue-theme/svgs/error.svg";
import "@opentiny/vue-theme/svgs/halfselect.svg";
import "@opentiny/vue-theme/svgs/help.svg";
import "@opentiny/vue-theme/svgs/success.svg";
import "@opentiny/vue-theme/svgs/warning.svg";
import "@opentiny/vue-theme/svgs/boat.svg";
import "@opentiny/vue-theme/svgs/warning-triangle.svg";
import "@opentiny/vue-theme/button/index.less";
import "@opentiny/vue-theme-mobile/button/index.less";
import "@opentiny/vue-renderless/switch/vue";
import "@opentiny/vue-theme/switch/index.less";
import ReactDOM from "react-dom/client";
import "@opentiny/vue-renderless/alert/vue";
import "@opentiny/vue-theme/alert/index.less";
import "@opentiny/vue-theme-mobile/alert/index.less";
function App(props) {
  return /* @__PURE__ */ React.createElement("div", null, props.children);
}
var CustomElement = /* @__PURE__ */ function(_HTMLElement) {
  function CustomElement2() {
    return _HTMLElement.apply(this, arguments) || this;
  }
  _inheritsLoose(CustomElement2, _HTMLElement);
  var _proto = CustomElement2.prototype;
  _proto.connectedCallback = function connectedCallback() {
    ReactDOM.createRoot(this).render(/* @__PURE__ */ React.createElement(App, null, /* @__PURE__ */ React.createElement(Alert, {
      description: "show-icon 默认值为 true，显示图标"
    }), /* @__PURE__ */ React.createElement(Alert, {
      showIcon: false,
      description: "show-icon 设置为 false，不显示图标"
    })));
  };
  return CustomElement2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
export {
  CustomElement as default
};
