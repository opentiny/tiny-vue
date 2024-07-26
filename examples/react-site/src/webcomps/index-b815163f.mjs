import React from 'react'
var _excluded = ["tag", "slots"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
import { renderless, api } from "@opentiny/vue-renderless/layout/vue";
import { u as useVm, a as useSetup, g as useProvide, C as Component, b as Slot, v as vc } from "./index-3d3bc6e4.mjs";
import { renderless as renderless$1, api as api$1 } from "@opentiny/vue-renderless/row/vue";
function Layout$1(props) {
  var _props$tag = props.tag, tag = _props$tag === void 0 ? "div" : _props$tag, _props$slots = props.slots, slots = _props$slots === void 0 ? {} : _props$slots, restProps = _objectWithoutPropertiesLoose(props, _excluded);
  var _useVm = useVm(), _ref = _useVm.ref, vm = _useVm.current, parent = _useVm.parent;
  var _useSetup = useSetup({
    props: _extends({
      tag
    }, restProps),
    renderless,
    api,
    vm,
    parent
  }), _ = _useSetup._;
  useProvide(_.vm, "layout", {
    cols: props.cols
  });
  return /* @__PURE__ */ React.createElement(Component, {
    is: tag,
    className: "tiny-layout",
    ref: function ref(ins) {
      _ref.current = ins;
      _.ref.current = ins;
    }
  }, /* @__PURE__ */ React.createElement(Slot, {
    slots,
    parent_children: props.children
  }));
}
function Layout(props) {
  var _props$tiny_mode = props.tiny_mode, tiny_mode = _props$tiny_mode === void 0 ? "pc" : _props$tiny_mode;
  var S = {
    pc: Layout$1
    // mobile,
    // 'mobile-first': mobileFirst
  }[tiny_mode];
  return S(props);
}
function Row$1(props) {
  var flex = props.flex, _props$gutter = props.gutter, gutter = _props$gutter === void 0 ? 0 : _props$gutter, _props$justify = props.justify, justify = _props$justify === void 0 ? "start" : _props$justify, _props$align = props.align, align = _props$align === void 0 ? "top" : _props$align, order = props.order, _props$tag2 = props.tag, tag = _props$tag2 === void 0 ? "div" : _props$tag2, _props$noSpace = props.noSpace, noSpace = _props$noSpace === void 0 ? false : _props$noSpace;
  var defaultProps = {
    flex,
    gutter,
    justify,
    align,
    order,
    tag,
    noSpace
  };
  var _useVm2 = useVm(), _ref2 = _useVm2.ref, vm = _useVm2.current, parent = _useVm2.parent;
  var _useSetup2 = useSetup({
    props: defaultProps,
    renderless: renderless$1,
    api: api$1,
    vm,
    parent
  }), _ = _useSetup2._, state = _useSetup2.state;
  return /* @__PURE__ */ React.createElement(Component, {
    is: tag,
    className: vc(["tiny-row", state.className, props.className]),
    style: state.style,
    ref: function ref(ins) {
      _ref2.current = ins;
      _.ref.current = ins;
    }
  }, /* @__PURE__ */ React.createElement(Slot, {
    slots: props.slots,
    parent_children: props.children
  }));
}
function Row(props) {
  var _props$tiny_mode2 = props.tiny_mode, tiny_mode = _props$tiny_mode2 === void 0 ? "pc" : _props$tiny_mode2;
  var S = {
    pc: Row$1
    // mobile,
    // 'mobile-first': mobileFirst
  }[tiny_mode];
  return S(props);
}
export {
  Layout as L,
  Row as R
};
