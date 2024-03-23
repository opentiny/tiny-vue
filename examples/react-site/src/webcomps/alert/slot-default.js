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
import { A as Alert } from "../index-b7fdd612.mjs";
import "../index-28717adb.mjs";
import "@vue/runtime-core";
import "react";
import "@opentiny/vue-theme/base/index.less";
import "@opentiny/vue-renderless/badge/vue";
import "@opentiny/vue-theme/badge/index.less";
import "@opentiny/vue-theme-mobile/badge/index.less";
import "@opentiny/vue-renderless/button/vue";
import "@opentiny/vue-theme/svgs/activation.svg";
import "@opentiny/vue-theme/svgs/add.svg";
import "@opentiny/vue-theme/svgs/add-circle.svg";
import "@opentiny/vue-theme/svgs/add-picture.svg";
import "@opentiny/vue-theme/svgs/administrator.svg";
import "@opentiny/vue-theme/svgs/administrator-o.svg";
import "@opentiny/vue-theme/svgs/agenda-view.svg";
import "@opentiny/vue-theme/svgs/align-baseline.svg";
import "@opentiny/vue-theme/svgs/align-center.svg";
import "@opentiny/vue-theme/svgs/align-flex-center.svg";
import "@opentiny/vue-theme/svgs/align-flex-end.svg";
import "@opentiny/vue-theme/svgs/align-flex-start.svg";
import "@opentiny/vue-theme/svgs/align-justify.svg";
import "@opentiny/vue-theme/svgs/align-left.svg";
import "@opentiny/vue-theme/svgs/align-right.svg";
import "@opentiny/vue-theme/svgs/align-stretch.svg";
import "@opentiny/vue-theme/svgs/angularjs.svg";
import "@opentiny/vue-theme/svgs/app.svg";
import "@opentiny/vue-theme/svgs/application.svg";
import "@opentiny/vue-theme/svgs/area-chart.svg";
import "@opentiny/vue-theme/svgs/arrow-bottom.svg";
import "@opentiny/vue-theme/svgs/arrow-down.svg";
import "@opentiny/vue-theme/svgs/arrow-left.svg";
import "@opentiny/vue-theme/svgs/arrow-right.svg";
import "@opentiny/vue-theme/svgs/arrow-up.svg";
import "@opentiny/vue-theme/svgs/ascending.svg";
import "@opentiny/vue-theme/svgs/association.svg";
import "@opentiny/vue-theme/svgs/attachment.svg";
import "@opentiny/vue-theme/svgs/audio.svg";
import "@opentiny/vue-theme/svgs/audit.svg";
import "@opentiny/vue-theme/svgs/bar-chart.svg";
import "@opentiny/vue-theme/svgs/batch-fill.svg";
import "@opentiny/vue-theme/svgs/befilter.svg";
import "@opentiny/vue-theme/svgs/boat.svg";
import "@opentiny/vue-theme/svgs/box-solid.svg";
import "@opentiny/vue-theme/svgs/busy.svg";
import "@opentiny/vue-theme/svgs/calculator.svg";
import "@opentiny/vue-theme/svgs/calendar.svg";
import "@opentiny/vue-theme/svgs/card-mode.svg";
import "@opentiny/vue-theme/svgs/check.svg";
import "@opentiny/vue-theme/svgs/check-out.svg";
import "@opentiny/vue-theme/svgs/checked-linear.svg";
import "@opentiny/vue-theme/svgs/checked-sur.svg";
import "@opentiny/vue-theme/svgs/checked-true.svg";
import "@opentiny/vue-theme/svgs/chevron-down.svg";
import "@opentiny/vue-theme/svgs/chevron-left.svg";
import "@opentiny/vue-theme/svgs/chevron-right.svg";
import "@opentiny/vue-theme/svgs/chevron-up.svg";
import "@opentiny/vue-theme/svgs/clear-filter.svg";
import "@opentiny/vue-theme/svgs/clock-work.svg";
import "@opentiny/vue-theme/svgs/close.svg";
import "@opentiny/vue-theme/svgs/close-circle.svg";
import "@opentiny/vue-theme/svgs/close-square.svg";
import "@opentiny/vue-theme/svgs/cloud-download.svg";
import "@opentiny/vue-theme/svgs/cloud-upload.svg";
import "@opentiny/vue-theme/svgs/code.svg";
import "@opentiny/vue-theme/svgs/coin.svg";
import "@opentiny/vue-theme/svgs/col-reverse.svg";
import "@opentiny/vue-theme/svgs/commission.svg";
import "@opentiny/vue-theme/svgs/conment-refresh.svg";
import "@opentiny/vue-theme/svgs/copy.svg";
import "@opentiny/vue-theme/svgs/copy-solid.svg";
import "@opentiny/vue-theme/svgs/course.svg";
import "@opentiny/vue-theme/svgs/crop.svg";
import "@opentiny/vue-theme/svgs/cue-l.svg";
import "@opentiny/vue-theme/svgs/cue-l-o.svg";
import "@opentiny/vue-theme/svgs/custom.svg";
import "@opentiny/vue-theme/svgs/customer-service.svg";
import "@opentiny/vue-theme/svgs/data-source.svg";
import "@opentiny/vue-theme/svgs/day-view.svg";
import "@opentiny/vue-theme/svgs/default.svg";
import "@opentiny/vue-theme/svgs/defined-filtration.svg";
import "@opentiny/vue-theme/svgs/del.svg";
import "@opentiny/vue-theme/svgs/delete-page.svg";
import "@opentiny/vue-theme/svgs/deleted.svg";
import "@opentiny/vue-theme/svgs/delta-down.svg";
import "@opentiny/vue-theme/svgs/delta-down-o.svg";
import "@opentiny/vue-theme/svgs/delta-left.svg";
import "@opentiny/vue-theme/svgs/delta-left-o.svg";
import "@opentiny/vue-theme/svgs/delta-right.svg";
import "@opentiny/vue-theme/svgs/delta-right-o.svg";
import "@opentiny/vue-theme/svgs/delta-up.svg";
import "@opentiny/vue-theme/svgs/delta-up-o.svg";
import "@opentiny/vue-theme/svgs/derive.svg";
import "@opentiny/vue-theme/svgs/descending.svg";
import "@opentiny/vue-theme/svgs/desktop-view.svg";
import "@opentiny/vue-theme/svgs/dialog.svg";
import "@opentiny/vue-theme/svgs/dialog2.svg";
import "@opentiny/vue-theme/svgs/direction-col.svg";
import "@opentiny/vue-theme/svgs/direction-row.svg";
import "@opentiny/vue-theme/svgs/done.svg";
import "@opentiny/vue-theme/svgs/done-mini.svg";
import "@opentiny/vue-theme/svgs/dot-chart.svg";
import "@opentiny/vue-theme/svgs/dot-download.svg";
import "@opentiny/vue-theme/svgs/dot-ipv4.svg";
import "@opentiny/vue-theme/svgs/double-left.svg";
import "@opentiny/vue-theme/svgs/double-right.svg";
import "@opentiny/vue-theme/svgs/down.svg";
import "@opentiny/vue-theme/svgs/down-o.svg";
import "@opentiny/vue-theme/svgs/down-ward.svg";
import "@opentiny/vue-theme/svgs/download.svg";
import "@opentiny/vue-theme/svgs/download-cloud.svg";
import "@opentiny/vue-theme/svgs/download-link.svg";
import "@opentiny/vue-theme/svgs/draft.svg";
import "@opentiny/vue-theme/svgs/earth-lined.svg";
import "@opentiny/vue-theme/svgs/edit.svg";
import "@opentiny/vue-theme/svgs/editor-align-center.svg";
import "@opentiny/vue-theme/svgs/editor-align-left.svg";
import "@opentiny/vue-theme/svgs/editor-align-right.svg";
import "@opentiny/vue-theme/svgs/editor-background.svg";
import "@opentiny/vue-theme/svgs/editor-bold.svg";
import "@opentiny/vue-theme/svgs/editor-code.svg";
import "@opentiny/vue-theme/svgs/editor-deleteline.svg";
import "@opentiny/vue-theme/svgs/editor-eraser.svg";
import "@opentiny/vue-theme/svgs/editor-eraser-filled.svg";
import "@opentiny/vue-theme/svgs/editor-italic.svg";
import "@opentiny/vue-theme/svgs/editor-left-border.svg";
import "@opentiny/vue-theme/svgs/editor-list.svg";
import "@opentiny/vue-theme/svgs/editor-list-dot.svg";
import "@opentiny/vue-theme/svgs/editor-list-num.svg";
import "@opentiny/vue-theme/svgs/editor-menu-left.svg";
import "@opentiny/vue-theme/svgs/editor-menu-right.svg";
import "@opentiny/vue-theme/svgs/editor-quote.svg";
import "@opentiny/vue-theme/svgs/editor-redo.svg";
import "@opentiny/vue-theme/svgs/editor-right-border.svg";
import "@opentiny/vue-theme/svgs/editor-sub.svg";
import "@opentiny/vue-theme/svgs/editor-subtitle.svg";
import "@opentiny/vue-theme/svgs/editor-super.svg";
import "@opentiny/vue-theme/svgs/editor-tab.svg";
import "@opentiny/vue-theme/svgs/editor-table.svg";
import "@opentiny/vue-theme/svgs/editor-textcolor.svg";
import "@opentiny/vue-theme/svgs/editor-title.svg";
import "@opentiny/vue-theme/svgs/editor-underline.svg";
import "@opentiny/vue-theme/svgs/editor-undo.svg";
import "@opentiny/vue-theme/svgs/editor-video.svg";
import "@opentiny/vue-theme/svgs/ellipsis.svg";
import "@opentiny/vue-theme/svgs/email-add.svg";
import "@opentiny/vue-theme/svgs/email-circle.svg";
import "@opentiny/vue-theme/svgs/end.svg";
import "@opentiny/vue-theme/svgs/error.svg";
import "@opentiny/vue-theme/svgs/espace.svg";
import "@opentiny/vue-theme/svgs/espace-auto.svg";
import "@opentiny/vue-theme/svgs/excel.svg";
import "@opentiny/vue-theme/svgs/excel-type.svg";
import "@opentiny/vue-theme/svgs/exception.svg";
import "@opentiny/vue-theme/svgs/exception-mini-o.svg";
import "@opentiny/vue-theme/svgs/exception-o.svg";
import "@opentiny/vue-theme/svgs/exclamation.svg";
import "@opentiny/vue-theme/svgs/execution-phase.svg";
import "@opentiny/vue-theme/svgs/expand.svg";
import "@opentiny/vue-theme/svgs/export.svg";
import "@opentiny/vue-theme/svgs/express-search.svg";
import "@opentiny/vue-theme/svgs/eyeclose.svg";
import "@opentiny/vue-theme/svgs/eyeopen.svg";
import "@opentiny/vue-theme/svgs/file.svg";
import "@opentiny/vue-theme/svgs/file-cloudupload.svg";
import "@opentiny/vue-theme/svgs/file-excel.svg";
import "@opentiny/vue-theme/svgs/file-type.svg";
import "@opentiny/vue-theme/svgs/files.svg";
import "@opentiny/vue-theme/svgs/files-circle.svg";
import "@opentiny/vue-theme/svgs/filetext.svg";
import "@opentiny/vue-theme/svgs/fileupload.svg";
import "@opentiny/vue-theme/svgs/fileupload-pro.svg";
import "@opentiny/vue-theme/svgs/fillet-external-link.svg";
import "@opentiny/vue-theme/svgs/filtered.svg";
import "@opentiny/vue-theme/svgs/finish.svg";
import "@opentiny/vue-theme/svgs/flag.svg";
import "@opentiny/vue-theme/svgs/folder-closed.svg";
import "@opentiny/vue-theme/svgs/folder-opened.svg";
import "@opentiny/vue-theme/svgs/font-color.svg";
import "@opentiny/vue-theme/svgs/font-family.svg";
import "@opentiny/vue-theme/svgs/font-size.svg";
import "@opentiny/vue-theme/svgs/font-style.svg";
import "@opentiny/vue-theme/svgs/font-weight.svg";
import "@opentiny/vue-theme/svgs/freeze-left.svg";
import "@opentiny/vue-theme/svgs/freeze-right.svg";
import "@opentiny/vue-theme/svgs/frown.svg";
import "@opentiny/vue-theme/svgs/frown-o.svg";
import "@opentiny/vue-theme/svgs/fullscreen.svg";
import "@opentiny/vue-theme/svgs/fullscreen-left.svg";
import "@opentiny/vue-theme/svgs/generating.svg";
import "@opentiny/vue-theme/svgs/grade.svg";
import "@opentiny/vue-theme/svgs/group.svg";
import "@opentiny/vue-theme/svgs/group-transfer.svg";
import "@opentiny/vue-theme/svgs/halfchecked.svg";
import "@opentiny/vue-theme/svgs/halfselect.svg";
import "@opentiny/vue-theme/svgs/heartempty.svg";
import "@opentiny/vue-theme/svgs/help.svg";
import "@opentiny/vue-theme/svgs/help-circle.svg";
import "@opentiny/vue-theme/svgs/help-query.svg";
import "@opentiny/vue-theme/svgs/help-solid.svg";
import "@opentiny/vue-theme/svgs/helpful.svg";
import "@opentiny/vue-theme/svgs/hide-left.svg";
import "@opentiny/vue-theme/svgs/hide-right.svg";
import "@opentiny/vue-theme/svgs/hide-topleft.svg";
import "@opentiny/vue-theme/svgs/history-record.svg";
import "@opentiny/vue-theme/svgs/image-add.svg";
import "@opentiny/vue-theme/svgs/import.svg";
import "@opentiny/vue-theme/svgs/info.svg";
import "@opentiny/vue-theme/svgs/info-circle.svg";
import "@opentiny/vue-theme/svgs/info-solid.svg";
import "@opentiny/vue-theme/svgs/information.svg";
import "@opentiny/vue-theme/svgs/js.svg";
import "@opentiny/vue-theme/svgs/jusitfy-center.svg";
import "@opentiny/vue-theme/svgs/jusitfy-flex-end.svg";
import "@opentiny/vue-theme/svgs/jusitfy-space-around.svg";
import "@opentiny/vue-theme/svgs/jusitfy-space-between.svg";
import "@opentiny/vue-theme/svgs/justitfy-flex-start.svg";
import "@opentiny/vue-theme/svgs/language.svg";
import "@opentiny/vue-theme/svgs/leave.svg";
import "@opentiny/vue-theme/svgs/left.svg";
import "@opentiny/vue-theme/svgs/left-frozen.svg";
import "@opentiny/vue-theme/svgs/left-o.svg";
import "@opentiny/vue-theme/svgs/left-ward.svg";
import "@opentiny/vue-theme/svgs/left-ward-arrow.svg";
import "@opentiny/vue-theme/svgs/line-chart.svg";
import "@opentiny/vue-theme/svgs/line-height.svg";
import "@opentiny/vue-theme/svgs/line-throught.svg";
import "@opentiny/vue-theme/svgs/link.svg";
import "@opentiny/vue-theme/svgs/list-mode.svg";
import "@opentiny/vue-theme/svgs/loading.svg";
import "@opentiny/vue-theme/svgs/loading-shadow.svg";
import "@opentiny/vue-theme/svgs/lock.svg";
import "@opentiny/vue-theme/svgs/mail.svg";
import "@opentiny/vue-theme/svgs/mail-content.svg";
import "@opentiny/vue-theme/svgs/male.svg";
import "@opentiny/vue-theme/svgs/mark-on.svg";
import "@opentiny/vue-theme/svgs/material.svg";
import "@opentiny/vue-theme/svgs/meh.svg";
import "@opentiny/vue-theme/svgs/message-circle.svg";
import "@opentiny/vue-theme/svgs/mic.svg";
import "@opentiny/vue-theme/svgs/milestone.svg";
import "@opentiny/vue-theme/svgs/minscreen.svg";
import "@opentiny/vue-theme/svgs/minscreen-left.svg";
import "@opentiny/vue-theme/svgs/minscreen-right.svg";
import "@opentiny/vue-theme/svgs/minus.svg";
import "@opentiny/vue-theme/svgs/minus-circle.svg";
import "@opentiny/vue-theme/svgs/minus-square.svg";
import "@opentiny/vue-theme/svgs/mobile.svg";
import "@opentiny/vue-theme/svgs/mobile-checkbox.svg";
import "@opentiny/vue-theme/svgs/mobile-checkbox-half.svg";
import "@opentiny/vue-theme/svgs/mobile-checkbox-selected.svg";
import "@opentiny/vue-theme/svgs/mobile-error-white.svg";
import "@opentiny/vue-theme/svgs/mobile-radio.svg";
import "@opentiny/vue-theme/svgs/mobile-radio-selected.svg";
import "@opentiny/vue-theme/svgs/mobile-success-white.svg";
import "@opentiny/vue-theme/svgs/mobile-view.svg";
import "@opentiny/vue-theme/svgs/month-view.svg";
import "@opentiny/vue-theme/svgs/more.svg";
import "@opentiny/vue-theme/svgs/new.svg";
import "@opentiny/vue-theme/svgs/no-data.svg";
import "@opentiny/vue-theme/svgs/no-news.svg";
import "@opentiny/vue-theme/svgs/no-perm.svg";
import "@opentiny/vue-theme/svgs/no-premission.svg";
import "@opentiny/vue-theme/svgs/no-result.svg";
import "@opentiny/vue-theme/svgs/node.svg";
import "@opentiny/vue-theme/svgs/node-open.svg";
import "@opentiny/vue-theme/svgs/nodejs.svg";
import "@opentiny/vue-theme/svgs/none.svg";
import "@opentiny/vue-theme/svgs/not-started.svg";
import "@opentiny/vue-theme/svgs/not-started-mini.svg";
import "@opentiny/vue-theme/svgs/off-line.svg";
import "@opentiny/vue-theme/svgs/on-going.svg";
import "@opentiny/vue-theme/svgs/on-going-mini.svg";
import "@opentiny/vue-theme/svgs/on-line.svg";
import "@opentiny/vue-theme/svgs/operationfaild.svg";
import "@opentiny/vue-theme/svgs/operationfaild-l.svg";
import "@opentiny/vue-theme/svgs/other-type.svg";
import "@opentiny/vue-theme/svgs/outer-link.svg";
import "@opentiny/vue-theme/svgs/page-noperm.svg";
import "@opentiny/vue-theme/svgs/page-nothing.svg";
import "@opentiny/vue-theme/svgs/page-servererror.svg";
import "@opentiny/vue-theme/svgs/page-weaknet.svg";
import "@opentiny/vue-theme/svgs/pagelink.svg";
import "@opentiny/vue-theme/svgs/pager-first.svg";
import "@opentiny/vue-theme/svgs/pager-last.svg";
import "@opentiny/vue-theme/svgs/pager-next.svg";
import "@opentiny/vue-theme/svgs/pager-prev.svg";
import "@opentiny/vue-theme/svgs/panel-max.svg";
import "@opentiny/vue-theme/svgs/panel-mini.svg";
import "@opentiny/vue-theme/svgs/panel-normal.svg";
import "@opentiny/vue-theme/svgs/pause.svg";
import "@opentiny/vue-theme/svgs/pause-circle.svg";
import "@opentiny/vue-theme/svgs/pdf-type.svg";
import "@opentiny/vue-theme/svgs/picture.svg";
import "@opentiny/vue-theme/svgs/picture-type.svg";
import "@opentiny/vue-theme/svgs/pie-chart.svg";
import "@opentiny/vue-theme/svgs/plus.svg";
import "@opentiny/vue-theme/svgs/plus-circle.svg";
import "@opentiny/vue-theme/svgs/plus-square.svg";
import "@opentiny/vue-theme/svgs/popup.svg";
import "@opentiny/vue-theme/svgs/ppt-type.svg";
import "@opentiny/vue-theme/svgs/pre-checked.svg";
import "@opentiny/vue-theme/svgs/print-preview.svg";
import "@opentiny/vue-theme/svgs/processing.svg";
import "@opentiny/vue-theme/svgs/prompt.svg";
import "@opentiny/vue-theme/svgs/prompt-exclamation.svg";
import "@opentiny/vue-theme/svgs/public-home.svg";
import "@opentiny/vue-theme/svgs/public-notice.svg";
import "@opentiny/vue-theme/svgs/publish.svg";
import "@opentiny/vue-theme/svgs/pushpin.svg";
import "@opentiny/vue-theme/svgs/put-away.svg";
import "@opentiny/vue-theme/svgs/radio.svg";
import "@opentiny/vue-theme/svgs/radioselected.svg";
import "@opentiny/vue-theme/svgs/reactjs.svg";
import "@opentiny/vue-theme/svgs/redo.svg";
import "@opentiny/vue-theme/svgs/refres.svg";
import "@opentiny/vue-theme/svgs/renew.svg";
import "@opentiny/vue-theme/svgs/repeat.svg";
import "@opentiny/vue-theme/svgs/replace.svg";
import "@opentiny/vue-theme/svgs/replies.svg";
import "@opentiny/vue-theme/svgs/report-submission.svg";
import "@opentiny/vue-theme/svgs/rich-text-add-column-after.svg";
import "@opentiny/vue-theme/svgs/rich-text-add-column-before.svg";
import "@opentiny/vue-theme/svgs/rich-text-add-row-after.svg";
import "@opentiny/vue-theme/svgs/rich-text-add-row-before.svg";
import "@opentiny/vue-theme/svgs/rich-text-align-center.svg";
import "@opentiny/vue-theme/svgs/rich-text-align-left.svg";
import "@opentiny/vue-theme/svgs/rich-text-align-right.svg";
import "@opentiny/vue-theme/svgs/rich-text-bold.svg";
import "@opentiny/vue-theme/svgs/rich-text-code-block.svg";
import "@opentiny/vue-theme/svgs/rich-text-code-view.svg";
import "@opentiny/vue-theme/svgs/rich-text-color.svg";
import "@opentiny/vue-theme/svgs/rich-text-delete-column.svg";
import "@opentiny/vue-theme/svgs/rich-text-delete-row.svg";
import "@opentiny/vue-theme/svgs/rich-text-delete-table.svg";
import "@opentiny/vue-theme/svgs/rich-text-font-size.svg";
import "@opentiny/vue-theme/svgs/rich-text-format-clear.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-1.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-2.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-3.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-4.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-5.svg";
import "@opentiny/vue-theme/svgs/rich-text-h-6.svg";
import "@opentiny/vue-theme/svgs/rich-text-heading.svg";
import "@opentiny/vue-theme/svgs/rich-text-high-light.svg";
import "@opentiny/vue-theme/svgs/rich-text-image.svg";
import "@opentiny/vue-theme/svgs/rich-text-italic.svg";
import "@opentiny/vue-theme/svgs/rich-text-line-height.svg";
import "@opentiny/vue-theme/svgs/rich-text-link.svg";
import "@opentiny/vue-theme/svgs/rich-text-link-unlink.svg";
import "@opentiny/vue-theme/svgs/rich-text-list-ordered.svg";
import "@opentiny/vue-theme/svgs/rich-text-list-unordered.svg";
import "@opentiny/vue-theme/svgs/rich-text-merge-cells.svg";
import "@opentiny/vue-theme/svgs/rich-text-merge-cells-vertical.svg";
import "@opentiny/vue-theme/svgs/rich-text-node-delete.svg";
import "@opentiny/vue-theme/svgs/rich-text-paragraph.svg";
import "@opentiny/vue-theme/svgs/rich-text-quote-text.svg";
import "@opentiny/vue-theme/svgs/rich-text-redo.svg";
import "@opentiny/vue-theme/svgs/rich-text-split-cells-horizontal.svg";
import "@opentiny/vue-theme/svgs/rich-text-split-cells-vertical.svg";
import "@opentiny/vue-theme/svgs/rich-text-strikethrough.svg";
import "@opentiny/vue-theme/svgs/rich-text-subscript.svg";
import "@opentiny/vue-theme/svgs/rich-text-superscript.svg";
import "@opentiny/vue-theme/svgs/rich-text-table.svg";
import "@opentiny/vue-theme/svgs/rich-text-task-list.svg";
import "@opentiny/vue-theme/svgs/rich-text-underline.svg";
import "@opentiny/vue-theme/svgs/rich-text-undo.svg";
import "@opentiny/vue-theme/svgs/right.svg";
import "@opentiny/vue-theme/svgs/right-frozen.svg";
import "@opentiny/vue-theme/svgs/right-o.svg";
import "@opentiny/vue-theme/svgs/rightward.svg";
import "@opentiny/vue-theme/svgs/row-reverse.svg";
import "@opentiny/vue-theme/svgs/sandwich-collapse.svg";
import "@opentiny/vue-theme/svgs/sandwich-expand.svg";
import "@opentiny/vue-theme/svgs/save.svg";
import "@opentiny/vue-theme/svgs/scan.svg";
import "@opentiny/vue-theme/svgs/scissor.svg";
import "@opentiny/vue-theme/svgs/search.svg";
import "@opentiny/vue-theme/svgs/search-resource.svg";
import "@opentiny/vue-theme/svgs/select.svg";
import "@opentiny/vue-theme/svgs/sent.svg";
import "@opentiny/vue-theme/svgs/separate.svg";
import "@opentiny/vue-theme/svgs/setting.svg";
import "@opentiny/vue-theme/svgs/setting-data.svg";
import "@opentiny/vue-theme/svgs/share.svg";
import "@opentiny/vue-theme/svgs/share-arrow.svg";
import "@opentiny/vue-theme/svgs/shopping-card.svg";
import "@opentiny/vue-theme/svgs/smile.svg";
import "@opentiny/vue-theme/svgs/smile-o.svg";
import "@opentiny/vue-theme/svgs/sort.svg";
import "@opentiny/vue-theme/svgs/sort-default.svg";
import "@opentiny/vue-theme/svgs/sort-o.svg";
import "@opentiny/vue-theme/svgs/sort-triangle.svg";
import "@opentiny/vue-theme/svgs/sort-triangle-ascending.svg";
import "@opentiny/vue-theme/svgs/sort-triangle-descending.svg";
import "@opentiny/vue-theme/svgs/split.svg";
import "@opentiny/vue-theme/svgs/split-left.svg";
import "@opentiny/vue-theme/svgs/split-right.svg";
import "@opentiny/vue-theme/svgs/star-active.svg";
import "@opentiny/vue-theme/svgs/star-disable.svg";
import "@opentiny/vue-theme/svgs/star-o.svg";
import "@opentiny/vue-theme/svgs/start.svg";
import "@opentiny/vue-theme/svgs/start-circle.svg";
import "@opentiny/vue-theme/svgs/start-o.svg";
import "@opentiny/vue-theme/svgs/statistics.svg";
import "@opentiny/vue-theme/svgs/stop.svg";
import "@opentiny/vue-theme/svgs/stream-solid.svg";
import "@opentiny/vue-theme/svgs/stretch.svg";
import "@opentiny/vue-theme/svgs/subscript.svg";
import "@opentiny/vue-theme/svgs/success.svg";
import "@opentiny/vue-theme/svgs/successful.svg";
import "@opentiny/vue-theme/svgs/table-mode.svg";
import "@opentiny/vue-theme/svgs/tablet-view.svg";
import "@opentiny/vue-theme/svgs/task-cooperation.svg";
import "@opentiny/vue-theme/svgs/teams.svg";
import "@opentiny/vue-theme/svgs/telephone.svg";
import "@opentiny/vue-theme/svgs/telephone-circle.svg";
import "@opentiny/vue-theme/svgs/text.svg";
import "@opentiny/vue-theme/svgs/text-align.svg";
import "@opentiny/vue-theme/svgs/text-decoration.svg";
import "@opentiny/vue-theme/svgs/text-tab.svg";
import "@opentiny/vue-theme/svgs/text-type.svg";
import "@opentiny/vue-theme/svgs/time.svg";
import "@opentiny/vue-theme/svgs/total.svg";
import "@opentiny/vue-theme/svgs/transform.svg";
import "@opentiny/vue-theme/svgs/triangle-down.svg";
import "@opentiny/vue-theme/svgs/turn-on.svg";
import "@opentiny/vue-theme/svgs/undelete.svg";
import "@opentiny/vue-theme/svgs/underline.svg";
import "@opentiny/vue-theme/svgs/undo.svg";
import "@opentiny/vue-theme/svgs/unfilter.svg";
import "@opentiny/vue-theme/svgs/unfreeze.svg";
import "@opentiny/vue-theme/svgs/unknow.svg";
import "@opentiny/vue-theme/svgs/unknown.svg";
import "@opentiny/vue-theme/svgs/unlock.svg";
import "@opentiny/vue-theme/svgs/unsent.svg";
import "@opentiny/vue-theme/svgs/up.svg";
import "@opentiny/vue-theme/svgs/up-o.svg";
import "@opentiny/vue-theme/svgs/up-ward.svg";
import "@opentiny/vue-theme/svgs/upgrading.svg";
import "@opentiny/vue-theme/svgs/upload.svg";
import "@opentiny/vue-theme/svgs/user.svg";
import "@opentiny/vue-theme/svgs/versiontree.svg";
import "@opentiny/vue-theme/svgs/video-type.svg";
import "@opentiny/vue-theme/svgs/view.svg";
import "@opentiny/vue-theme/svgs/vuejs.svg";
import "@opentiny/vue-theme/svgs/warn.svg";
import "@opentiny/vue-theme/svgs/warning.svg";
import "@opentiny/vue-theme/svgs/warning-o.svg";
import "@opentiny/vue-theme/svgs/warning-triangle.svg";
import "@opentiny/vue-theme/svgs/weaknet.svg";
import "@opentiny/vue-theme/svgs/web-plus.svg";
import "@opentiny/vue-theme/svgs/word-type.svg";
import "@opentiny/vue-theme/svgs/work-package.svg";
import "@opentiny/vue-theme/svgs/writing.svg";
import "@opentiny/vue-theme/svgs/yes.svg";
import "@opentiny/vue-theme/svgs/zip-type.svg";
import "@opentiny/vue-theme/svgs/zoom-in.svg";
import "@opentiny/vue-theme/svgs/zoom-out.svg";
import "@opentiny/vue-theme/button/index.less";
import "@opentiny/vue-theme-mobile/button/index.less";
import "@opentiny/vue-renderless/layout/vue";
import "@opentiny/vue-renderless/row/vue";
import "@opentiny/vue-renderless/switch/vue";
import "@opentiny/vue-theme/switch/index.less";
import ReactDOM from "react-dom/client";
import "@opentiny/vue-renderless/alert/vue";
import "@opentiny/vue-theme/alert/index.less";
import "@opentiny/vue-theme-mobile/alert/index.less";
import "@opentiny/vue-renderless/modal/vue";
import "@opentiny/vue-theme/modal/index.less";
var scopeId = "scope-" + Math.random().toString(36).substr(2, 9);
function App(props) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("style", null, '\n          [data-v="' + scopeId + '"] .demo-alert .tiny-alert__opration {\n            margin-top: 6px;\n          }\n        '), /* @__PURE__ */ React.createElement("div", {
    "data-v": scopeId
  }, props.children));
}
var CustomElement = /* @__PURE__ */ function(_HTMLElement) {
  function CustomElement2() {
    return _HTMLElement.apply(this, arguments) || this;
  }
  _inheritsLoose(CustomElement2, _HTMLElement);
  var _proto = CustomElement2.prototype;
  _proto.connectedCallback = function connectedCallback() {
    ReactDOM.createRoot(this).render(/* @__PURE__ */ React.createElement(App, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Alert, {
      size: "large",
      title: "slot 自定义内容",
      className: "demo-alert"
    }, /* @__PURE__ */ React.createElement("span", null, "自定义内容")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Alert, {
      size: "large",
      title: "slot 自定义交互操作",
      className: "demo-alert"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "确定"), /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "取消")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Alert, {
      type: "success",
      size: "large",
      description: "提交结果页用于反馈一系列操作任务的处理结果。"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "继续提交"), /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "取消操作")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Alert, {
      type: "error",
      size: "large",
      description: "提交结果页用于反馈一系列操作任务的处理结果。"
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Alert, {
      type: "warning",
      size: "large",
      description: "提交结果页用于反馈一系列操作任务的处理结果。"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "继续提交"), /* @__PURE__ */ React.createElement("a", {
      href: "javascript: void(0);"
    }, "取消操作")))));
  };
  return CustomElement2;
}(/* @__PURE__ */ _wrapNativeSuper(HTMLElement));
export {
  CustomElement as default
};
