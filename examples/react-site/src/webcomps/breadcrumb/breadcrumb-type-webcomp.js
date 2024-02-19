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
import { Breadcrumb, BreadcrumbItem } from "@pe-3/react";
import ReactDOM from "react-dom/client";
function App(props) {
  return /* @__PURE__ */ React.createElement("div", null, props.children);
}
var breadcrumbTypeWebcomp = /* @__PURE__ */ function(_HTMLElement) {
  _inheritsLoose(breadcrumbTypeWebcomp2, _HTMLElement);
  function breadcrumbTypeWebcomp2() {
    return _HTMLElement.apply(this, arguments) || this;
  }
  var _proto = breadcrumbTypeWebcomp2.prototype;
  _proto.connectedCallback = function connectedCallback() {
    ReactDOM.createRoot(this).render(/* @__PURE__ */ React.createElement(App, null, /* @__PURE__ */ React.createElement(Breadcrumb, null, /* @__PURE__ */ React.createElement(BreadcrumbItem, {
      to: {
        path: "/"
      },
      label: "首页"
    }), /* @__PURE__ */ React.createElement(BreadcrumbItem, {
      to: {
        path: "/"
      },
      label: "首页2"
    }))));
  };
  return breadcrumbTypeWebcomp2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
export {
  breadcrumbTypeWebcomp as default
};
