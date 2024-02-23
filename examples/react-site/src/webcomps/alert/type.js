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
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
import { Alert } from "@pe-3/react";
import ReactDOM from "react-dom/client";
function App(props) {
  return /* @__PURE__ */ React.createElement("div", null, props.children);
}
var type = /* @__PURE__ */ function(_HTMLElement) {
  _inheritsLoose(type2, _HTMLElement);
  function type2() {
    return _HTMLElement.apply(this, arguments) || this;
  }
  var _proto = type2.prototype;
  _proto.connectedCallback = function connectedCallback() {
    ReactDOM.createRoot(this).render(/* @__PURE__ */ React.createElement(App, null, /* @__PURE__ */ React.createElement(Alert, {
      description: "type 为默认值 success"
    }), /* @__PURE__ */ React.createElement(Alert, {
      type: "info",
      description: "type 为 info"
    }), /* @__PURE__ */ React.createElement(Alert, {
      type: "error",
      description: "type 为 error"
    }), /* @__PURE__ */ React.createElement(Alert, {
      type: "success",
      description: "type 为 success"
    }), /* @__PURE__ */ React.createElement(Alert, {
      type: "warning",
      description: "type 为 warning"
    })));
  };
  return type2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
export {
  type as default
};
