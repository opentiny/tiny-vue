import React from 'react'
import { renderless, api } from "@opentiny/vue-renderless/col/vue";
import { u as useVm, a as useSetup, C as Component, v as vc } from "./index-3d3bc6e4.mjs";
function Col$1(props) {
  var span = props.span, offset = props.offset, no = props.no, move = props.move, xs = props.xs, sm = props.sm, md = props.md, lg = props.lg, xl = props.xl, _props$tag = props.tag, tag = _props$tag === void 0 ? "div" : _props$tag, children = props.children;
  var defaultProps = {
    span,
    offset,
    no,
    move,
    xs,
    sm,
    md,
    lg,
    xl,
    tag
  };
  var _useVm = useVm(), _ref = _useVm.ref, vm = _useVm.current, parent = _useVm.parent;
  var _useSetup = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  }), _ = _useSetup._, state = _useSetup.state;
  return /* @__PURE__ */ React.createElement(Component, {
    is: tag,
    className: vc([state.className, "tiny-col"]),
    style: state.style,
    ref: function ref(ins) {
      _ref.current = ins;
      _.ref.current = ins;
    }
  }, children);
}
function Col(props) {
  var _props$tiny_mode = props.tiny_mode, tiny_mode = _props$tiny_mode === void 0 ? "pc" : _props$tiny_mode;
  var S = {
    pc: Col$1
    // mobile,
    // 'mobile-first': mobileFirst
  }[tiny_mode];
  return S(props);
}
export {
  Col as C
};
