import React from 'react'
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
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
import ReactDOM from "react-dom/client";
import React$1, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from "react";
import { renderless, api } from "@opentiny/vue-renderless/button/vue";
import { nextTick, readonly, watchEffect, watchPostEffect, watchSyncEffect, watch, isRef, unref, toValue as toValue$1, toRefs, isProxy, isReactive, isReadonly, triggerRef, shallowReadonly, toRaw, markRaw, effectScope, getCurrentScope, onScopeDispose, reactive, ref, computed, toRef, shallowRef, customRef, shallowReactive } from "@vue/runtime-core";
import "@opentiny/vue-theme/base/index.less";
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
import { ReactComponent } from "@opentiny/vue-theme/svgs/close.svg";
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
import { ReactComponent as ReactComponent$1 } from "@opentiny/vue-theme/svgs/error.svg";
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
import { ReactComponent as ReactComponent$2 } from "@opentiny/vue-theme/svgs/fullscreen-left.svg";
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
import { ReactComponent as ReactComponent$3 } from "@opentiny/vue-theme/svgs/help-solid.svg";
import "@opentiny/vue-theme/svgs/helpful.svg";
import "@opentiny/vue-theme/svgs/hide-left.svg";
import "@opentiny/vue-theme/svgs/hide-right.svg";
import "@opentiny/vue-theme/svgs/hide-topleft.svg";
import "@opentiny/vue-theme/svgs/history-record.svg";
import "@opentiny/vue-theme/svgs/image-add.svg";
import "@opentiny/vue-theme/svgs/import.svg";
import "@opentiny/vue-theme/svgs/info.svg";
import "@opentiny/vue-theme/svgs/info-circle.svg";
import { ReactComponent as ReactComponent$4 } from "@opentiny/vue-theme/svgs/info-solid.svg";
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
import { ReactComponent as ReactComponent$5 } from "@opentiny/vue-theme/svgs/loading.svg";
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
import { ReactComponent as ReactComponent$6 } from "@opentiny/vue-theme/svgs/minscreen-left.svg";
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
import { ReactComponent as ReactComponent$7 } from "@opentiny/vue-theme/svgs/success.svg";
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
import { ReactComponent as ReactComponent$8 } from "@opentiny/vue-theme/svgs/warning.svg";
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
import { renderless as renderless$1, api as api$1 } from "@opentiny/vue-renderless/modal/vue";
import "@opentiny/vue-theme/modal/index.less";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var classnames = {
  exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes2 = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes2 = appendClass(classes2, parseValue(arg));
        }
      }
      return classes2;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes2 = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes2 = appendClass(classes2, key);
        }
      }
      return classes2;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
var classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function If(props) {
  if (props["v-if"]) {
    return props.children;
  } else {
    return "";
  }
}
function defaultVIfAsTrue(props) {
  if (typeof props === "object" && Object.hasOwnProperty.call(props, "v-if")) {
    return props["v-if"];
  } else {
    return true;
  }
}
function cssStringToObject(cssString) {
  var reactStyle = {};
  var cssProperties = cssString.split(";").filter(Boolean);
  cssProperties.forEach(function(property) {
    var _property$split$map = property.split(":").map(function(item) {
      return item.trim();
    }), key = _property$split$map[0], value = _property$split$map[1];
    if (key && value) {
      var camelCaseKey = key.replace(/-([a-z])/g, function(g) {
        return g[1].toUpperCase();
      });
      reactStyle[camelCaseKey] = value;
    }
  });
  return reactStyle;
}
var Component = forwardRef(function Component2(props, ref2) {
  var Is = props.is || function() {
    return "";
  };
  return /* @__PURE__ */ React.createElement(If, {
    "v-if": defaultVIfAsTrue(props)
  }, /* @__PURE__ */ React.createElement(Is, {
    ref: ref2,
    className: props.className,
    style: typeof props.style === "string" ? cssStringToObject(props.style) : props.style
  }, props.children));
});
function Slot(props) {
  var _props$name = props.name, name = _props$name === void 0 ? "default" : _props$name, _props$slots = props.slots, slots = _props$slots === void 0 ? {} : _props$slots, parent_children = props.parent_children;
  var EmptySlot = function EmptySlot2() {
    return "";
  };
  var S = slots[name] || EmptySlot;
  return /* @__PURE__ */ React.createElement(If, {
    "v-if": defaultVIfAsTrue(props)
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": name === "default"
  }, parent_children || props.children), /* @__PURE__ */ React.createElement(If, {
    "v-if": name !== "default"
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": S !== EmptySlot
  }, /* @__PURE__ */ React.createElement(S, _extends({}, props))), /* @__PURE__ */ React.createElement(If, {
    "v-if": S === EmptySlot
  }, props.children)));
}
var compWhiteList = ["If", "Component", "Slot", "For", "Transition"];
var Svg = function Svg2(_ref6) {
  var _funcObj;
  var _ref6$name = _ref6.name, name = _ref6$name === void 0 ? "Icon" : _ref6$name, Icon = _ref6.component;
  var funcObj = (_funcObj = {}, _funcObj[name] = function(props) {
    var className = classNames("icon", "tiny-svg", props.className);
    var v_if = typeof props["v-if"] === "boolean" ? props["v-if"] : true;
    var defaultProps = _extends({}, props);
    delete defaultProps["v-if"];
    return /* @__PURE__ */ React.createElement(If, {
      "v-if": v_if
    }, /* @__PURE__ */ React.createElement(Icon, _extends({}, defaultProps, {
      className
    })));
  }, _funcObj);
  return funcObj[name];
};
function useExcuteOnce(cb) {
  var isExcuted = useRef(false);
  var result = useRef();
  if (!isExcuted.current) {
    isExcuted.current = true;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    result.current = cb.apply(void 0, args);
  }
  return result.current;
}
function useReload() {
  var _useState = useState(0), _ = _useState[0], reload = _useState[1];
  return function() {
    return reload(function(pre) {
      return pre + 1;
    });
  };
}
function useOnceResult(func) {
  var result = useRef();
  if (!result.current) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    result.current = func.apply(void 0, args);
  }
  return result.current;
}
var vmContext = /* @__PURE__ */ new Map();
var useProvide = function useProvide2(vm, key, value) {
  useEffect(function() {
    for (var _iterator = _createForOfIteratorHelperLoose(vmContext.keys()), _step; !(_step = _iterator()).done; ) {
      var _vm$$el;
      var candidateVm = _step.value;
      if ((_vm$$el = vm.$el) != null && _vm$$el.contains(candidateVm.$el)) {
        var context = vmContext.get(candidateVm);
        if (!context) {
          return;
        }
        for (var subKey in value) {
          context[key][subKey] = value[subKey];
        }
      }
    }
  }, [key, value]);
};
var getInject = function getInject2(_ref7) {
  var vm = _ref7.vm;
  return function(key, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = {};
    }
    if (!vmContext.get(vm)) {
      vmContext.set(vm, reactive({}));
    }
    var context = vmContext.get(vm);
    if (!context[key]) {
      var _Object$assign;
      Object.assign(context, (_Object$assign = {}, _Object$assign[key] = defaultValue, _Object$assign));
    }
    return context[key];
  };
};
var provide = function provide2() {
};
function generateVueHooks(_ref8) {
  var $bus = _ref8.$bus, vm = _ref8.vm;
  var reload = function reload2() {
    return $bus.emit("event:reload");
  };
  function toPageLoad(reactiveHook, reload2) {
    return function() {
      var result = reactiveHook.apply(void 0, arguments);
      nextTick(function() {
        watch(result, function() {
          typeof reload2 === "function" && reload2();
        }, {
          flush: "sync"
        });
      });
      return result;
    };
  }
  return {
    // 响应式：核心
    ref: toPageLoad(ref, reload),
    computed: toPageLoad(computed, reload),
    reactive: toPageLoad(reactive, reload),
    readonly,
    watchEffect,
    watchPostEffect,
    watchSyncEffect,
    watch,
    // 响应式：工具
    isRef,
    unref,
    toRef: toPageLoad(toRef, reload),
    toValue: toValue$1,
    toRefs,
    isProxy,
    isReactive,
    isReadonly,
    // 响应式：进阶
    shallowRef: toPageLoad(shallowRef, reload),
    triggerRef,
    customRef: toPageLoad(customRef, reload),
    shallowReactive: toPageLoad(shallowReactive, reload),
    shallowReadonly,
    toRaw,
    markRaw,
    effectScope,
    getCurrentScope,
    onScopeDispose,
    // 依赖注入
    inject: getInject({
      vm
    }),
    provide,
    // 生命周期函数
    onBeforeUnmount: function onBeforeUnmount() {
      $bus.on("hook:onBeforeUnmount");
    },
    onMounted: function onMounted() {
      $bus.on("hook:onMounted");
    },
    onUpdated: function onUpdated() {
      $bus.on("hook:onUpdated");
    },
    onUnmounted: function onUnmounted() {
      $bus.on("hook:onUnmounted");
    },
    onBeforeMount: function onBeforeMount() {
      $bus.on("hook:onBeforeMount");
    },
    onBeforeUpdate: function onBeforeUpdate() {
      $bus.on("hook:onBeforeUpdate");
    },
    onErrorCaptured: function onErrorCaptured() {
      $bus.on("hook:onErrorCaptured");
    },
    onRenderTracked: function onRenderTracked() {
      $bus.on("hook:onRenderTracked");
    },
    onRenderTriggered: function onRenderTriggered() {
      $bus.on("hook:onRenderTriggered");
    },
    onActivated: function onActivated() {
      $bus.on("hook:onActivated");
    },
    onDeactivated: function onDeactivated() {
      $bus.on("hook:onDeactivated");
    },
    onServerPrefetch: function onServerPrefetch() {
      $bus.on("hook:onServerPrefetch");
    }
  };
}
function useVueLifeHooks($bus) {
  $bus.emit("hook:onBeforeUpdate");
  nextTick(function() {
    $bus.emit("hook:onUpdated");
  });
  useExcuteOnce(function() {
    $bus.emit("hook:onBeforeMount");
  });
  useEffect(function() {
    $bus.emit("hook:onMounted");
    return function() {
      $bus.emit("hook:onBeforeUnmount");
      nextTick(function() {
        $bus.emit("hook:onUnmounted");
      });
    };
  }, []);
}
var filterAttrs = function filterAttrs2(attrs, filters, include) {
  var props = {};
  var _loop = function _loop2(name2) {
    var find = filters.some(function(r) {
      return new RegExp(r).test(name2);
    });
    if (include && find || !include && !find) {
      props[name2] = attrs[name2];
    }
  };
  for (var name in attrs) {
    _loop(name);
  }
  return props;
};
var eventBus = function eventBus2() {
  var $bus = {};
  var on3 = function on4(eventName, callback) {
    if (!callback) {
      return;
    }
    if (!$bus[eventName]) {
      $bus[eventName] = [];
    }
    $bus[eventName].push(callback);
  };
  var off3 = function off4(eventName, callback) {
    if (!$bus[eventName]) {
      return;
    }
    $bus[eventName] = $bus[eventName].filter(function(subscriber) {
      return subscriber !== callback;
    });
  };
  var emit3 = function emit4(eventName) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    if (!$bus[eventName]) {
      return;
    }
    $bus[eventName].forEach(function(subscriber) {
      return subscriber.apply(void 0, args);
    });
  };
  var once3 = function once4(eventName, callback) {
    var onceCallBack = function onceCallBack2() {
      callback.apply(void 0, arguments);
      off3(eventName, onceCallBack2);
    };
    on3(eventName, onceCallBack);
  };
  return {
    on: on3,
    emit: emit3,
    off: off3,
    once: once3
  };
};
function VueClassName(className) {
  if (typeof className === "string") {
    return className;
  } else if (Array.isArray(className)) {
    return className.reduce(function(pre, cur, index) {
      if (typeof cur === "string") {
        return "" + pre + (index === 0 ? "" : " ") + cur;
      } else {
        return "" + pre + (index === 0 ? "" : " ") + VueClassName(cur);
      }
    }, "");
  } else if (typeof className === "object") {
    return Object.keys(className).reduce(function(pre, key, index) {
      if (className[key]) {
        return "" + pre + (index === 0 ? "" : " ") + key;
      } else {
        return pre;
      }
    }, "");
  }
}
var vc = VueClassName;
var getElementCssClass = function getElementCssClass2(classes2, key) {
  if (classes2 === void 0) {
    classes2 = {};
  }
  if (typeof key === "object") {
    var keys = Array.isArray(key) ? key : Object.keys(key).filter(function(k) {
      return key[k];
    });
    var cls = "";
    keys.forEach(function(k) {
      if (classes2[k])
        cls += classes2[k] + " ";
    });
    return cls;
  } else {
    return classes2[key] || "";
  }
};
function getPropByPath(obj, path) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");
  var keyArr = path.split(".");
  var len = keyArr.length;
  for (var i = 0; i < len - 1; i++) {
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      return;
    }
  }
  return tempObj[keyArr[keyArr.length - 1]];
}
var $busMap = /* @__PURE__ */ new Map();
var emit = function emit2(props) {
  return function(evName) {
    var reactEvName = "on" + evName.substr(0, 1).toUpperCase() + evName.substr(1);
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    if (props[reactEvName] && typeof props[reactEvName] === "function") {
      props[reactEvName].apply(props, args);
    } else {
      var $bus = $busMap.get(props);
      if ($bus) {
        $bus.emit.apply($bus, [evName].concat(args));
      }
    }
  };
};
var on = function on2(props) {
  return function(evName, callback) {
    if ($busMap.get(props)) {
      var $bus = $busMap.get(props);
      $bus.on(evName, callback);
    } else {
      var _$bus = eventBus();
      _$bus.on(evName, callback);
      $busMap.set(props, _$bus);
    }
  };
};
var off = function off2(props) {
  return function(evName, callback) {
    var $bus = $busMap.get(props);
    if (!$bus)
      return;
    $bus.off(evName, callback);
  };
};
var once = function once2(props) {
  return function(evName, callback) {
    var $bus = null;
    var onceCallback = function onceCallback2() {
      callback.apply(void 0, arguments);
      $bus && $bus.off(evName, onceCallback2);
    };
    if ($busMap.get(props)) {
      $bus = $busMap.get(props);
      $bus.on(evName, onceCallback);
    } else {
      $bus = eventBus();
      $bus.on(evName, onceCallback);
      $busMap.set(props, $bus);
    }
  };
};
var emitEvent = function emitEvent2(vm) {
  var _broadcast = function broadcast(vm2, componentName, eventName) {
    for (var _len6 = arguments.length, args = new Array(_len6 > 3 ? _len6 - 3 : 0), _key6 = 3; _key6 < _len6; _key6++) {
      args[_key6 - 3] = arguments[_key6];
    }
    var children = vm2.$children;
    Array.isArray(children) && children.forEach(function(child) {
      var name = child.$options && child.$options.componentName;
      var component = child;
      if (name === componentName) {
        component.emit.apply(component, [eventName].concat(args));
      } else {
        _broadcast.apply(void 0, [child, componentName, eventName].concat(args));
      }
    });
  };
  return {
    dispatch: function dispatch(componentName, eventName) {
      var parent = vm.$parent;
      if (parent.type === null)
        return;
      var name = parent.$options && parent.$options.componentName;
      while (parent && parent.type && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent)
          name = parent.$options && parent.$options.componentName;
      }
      if (parent) {
        var _parent;
        for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
          args[_key7 - 2] = arguments[_key7];
        }
        (_parent = parent).emit.apply(_parent, [eventName].concat(args));
      }
    },
    broadcast: function broadcast(componentName, eventName) {
      for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
        args[_key8 - 2] = arguments[_key8];
      }
      _broadcast.apply(void 0, [vm, componentName, eventName].concat(args));
    }
  };
};
function getFiberByDom(dom) {
  var key = Object.keys(dom).find(function(key2) {
    return key2.startsWith("__reactFiber$") || // react 17+
    key2.startsWith("__reactInternalInstance$");
  });
  return dom[key];
}
function defaultBreaker(_ref9) {
  var type = _ref9.type;
  if (type && typeof type !== "string") {
    return !compWhiteList.includes(type.name);
  }
}
function traverseFiber(fiber, handler, breaker) {
  if (breaker === void 0) {
    breaker = defaultBreaker;
  }
  if (!fiber)
    return;
  typeof handler === "function" && handler(fiber);
  Array.isArray(handler) && handler.forEach(function(task) {
    typeof task === "function" && task(fiber);
  });
  traverseFiber(fiber.sibling, handler, breaker);
  breaker(fiber) || traverseFiber(fiber.child, handler, breaker);
}
var parentMap = /* @__PURE__ */ new WeakMap();
function getParentFiber(fiber, isFirst, child) {
  if (isFirst === void 0) {
    isFirst = true;
  }
  if (child === void 0) {
    child = fiber;
  }
  if (!fiber || !fiber.return)
    return null;
  if (parentMap.has(child))
    return parentMap.get(child);
  if (fiber.type && typeof fiber.type !== "string" && !isFirst) {
    parentMap.set(child, fiber);
    return fiber;
  }
  return getParentFiber(fiber.return, false, fiber);
}
var fiberMap = /* @__PURE__ */ new WeakMap();
function creatFiberCombine(fiber) {
  if (!fiber)
    return;
  if (fiberMap.has(fiber)) {
    return fiberMap.get(fiber);
  }
  var refs = {};
  var children = [];
  traverseFiber(fiber.child, [function(fiber2) {
    if (typeof fiber2.type === "string" && fiber2.stateNode.getAttribute("v_ref")) {
      refs[fiber2.stateNode.getAttribute("v_ref")] = fiber2.stateNode;
    } else if (fiber2.memoizedProps.v_ref) {
      refs[fiber2.memoizedProps.v_ref] = fiber2;
    }
  }, function(fiber2) {
    if (fiber2.type && typeof fiber2.type !== "string") {
      children.push(fiber2);
    }
  }]);
  var fiberCombine = {
    fiber,
    refs,
    children
  };
  fiberMap.set(fiber, fiberCombine);
  return fiberCombine;
}
function useFiber() {
  var ref2 = useRef();
  var _useState2 = useState(), parent = _useState2[0], setParent = _useState2[1];
  var _useState3 = useState(), current = _useState3[0], setCurrent = _useState3[1];
  useEffect(function() {
    if (ref2.current) {
      var current_fiber = getFiberByDom(ref2.current);
      setParent(getParentFiber(current_fiber.return));
      setCurrent(current_fiber.return);
    }
  }, []);
  return {
    ref: ref2,
    parent: creatFiberCombine(parent),
    current: creatFiberCombine(current)
  };
}
var reactEventPrefix = /^on[A-Z]/;
function getEventByReactProps(props) {
  var $listeners2 = {};
  Object.keys(props).filter(function(propName) {
    return reactEventPrefix.test(propName) && typeof props[propName] === "function";
  }).map(function(reactEvName) {
    return {
      reactEvName,
      vueEvName: reactEvName.substr(2).toLowerCase()
    };
  }).forEach(function(_ref10) {
    var _Object$assign2;
    var reactEvName = _ref10.reactEvName, vueEvName = _ref10.vueEvName;
    Object.assign($listeners2, (_Object$assign2 = {}, _Object$assign2[vueEvName] = props[reactEvName], _Object$assign2));
  });
  return $listeners2;
}
function getAttrsByReactProps(props) {
  var $attrs2 = {};
  Object.keys(props).filter(function(propName) {
    return !reactEventPrefix.test(propName) && !["children"].includes(propName);
  }).forEach(function(attr) {
    $attrs2[attr] = props[attr];
  });
  return $attrs2;
}
function Reactive(obj) {
  var _this = this;
  Object.keys(obj).forEach(function(key) {
    _this[key] = obj[key];
  });
}
var vmProxy = {
  $parent: function $parent(_ref11) {
    var fiber = _ref11.fiber;
    var parentFiber = getParentFiber(fiber);
    if (!parentFiber)
      return null;
    return createVmProxy(creatFiberCombine(parentFiber));
  },
  $el: function $el(_ref12) {
    var _fiber$child;
    var fiber = _ref12.fiber;
    return (_fiber$child = fiber.child) == null ? void 0 : _fiber$child.stateNode;
  },
  $refs: function $refs(_ref13) {
    var refs = _ref13.refs, fiber = _ref13.fiber;
    return createRefsProxy(refs, fiber.constructor);
  },
  $children: function $children(_ref14) {
    var children = _ref14.children;
    return children.map(function(fiber) {
      return createVmProxy(creatFiberCombine(getParentFiber(fiber)));
    });
  },
  $listeners: function $listeners(_ref15) {
    var fiber = _ref15.fiber;
    return getEventByReactProps(fiber.memoizedProps);
  },
  $attrs: function $attrs(_ref16) {
    var fiber = _ref16.fiber;
    return getAttrsByReactProps(fiber.memoizedProps);
  },
  $slots: function $slots(_ref17) {
    var fiber = _ref17.fiber;
    return fiber.memoizedProps.slots;
  },
  $scopedSlots: function $scopedSlots(_ref18) {
    var fiber = _ref18.fiber;
    return fiber.memoizedProps.slots;
  },
  $options: function $options(_ref19) {
    var fiber = _ref19.fiber;
    return {
      componentName: fiber.type.name
    };
  },
  $constants: function $constants(_ref20) {
    var fiber = _ref20.fiber;
    return fiber.memoizedProps._constants;
  },
  $template: function $template(_ref21) {
    var fiber = _ref21.fiber;
    return fiber.memoizedProps.tiny_template;
  },
  $renderless: function $renderless(_ref22) {
    var fiber = _ref22.fiber;
    return fiber.memoizedProps.tiny_renderless;
  },
  $mode: function $mode() {
    return "pc";
  },
  state: function state(_ref23) {
    var fiber = _ref23.fiber;
    return findStateInHooks(fiber.memoizedState);
  },
  $type: function $type(_ref24) {
    var fiber = _ref24.fiber;
    return fiber.type;
  },
  $service: function $service(_, vm) {
    var _vm$state;
    return (_vm$state = vm.state) == null ? void 0 : _vm$state.$service;
  },
  $emit: function $emit(_ref25) {
    var fiber = _ref25.fiber;
    return emit(fiber.memoizedProps);
  },
  $on: function $on(_ref26) {
    var fiber = _ref26.fiber;
    return on(fiber.memoizedProps);
  },
  $once: function $once(_ref27) {
    var fiber = _ref27.fiber;
    return once(fiber.memoizedProps);
  },
  $off: function $off(_ref28) {
    var fiber = _ref28.fiber;
    return off(fiber.memoizedProps);
  },
  $set: function $set() {
    return function(target, propName, value) {
      return target[propName] = value;
    };
  }
};
var vmProxyMap = /* @__PURE__ */ new WeakMap();
function createVmProxy(fiberCombine) {
  if (!vmProxyMap.has(fiberCombine)) {
    vmProxyMap.set(fiberCombine, new Proxy(fiberCombine, {
      get: function get(target, property, receiver) {
        if (!vmProxy[property]) {
          return target.fiber.memoizedProps[property];
        }
        return vmProxy[property](target, receiver);
      },
      set: function set() {
        return true;
      }
    }));
  }
  return vmProxyMap.get(fiberCombine);
}
function createEmptyProxy() {
  return new Proxy({}, {
    get: function get() {
      return void 0;
    },
    set: function set() {
      return true;
    }
  });
}
function createRefsProxy(refs, FiberNode) {
  return new Proxy(refs, {
    get: function get(target, property) {
      if (target[property] instanceof FiberNode) {
        return createVmProxy(creatFiberCombine(target[property]));
      } else {
        return target[property];
      }
    }
  });
}
function findStateInHooks(hookStart) {
  var curHook = hookStart;
  while (curHook) {
    var refCurrent = curHook.memoizedState && curHook.memoizedState.current;
    if (refCurrent instanceof Reactive)
      break;
    curHook = curHook.next;
  }
  return curHook && curHook.memoizedState && curHook.memoizedState.current;
}
function useVm() {
  var _useFiber = useFiber(), ref2 = _useFiber.ref, current = _useFiber.current, parent = _useFiber.parent;
  if (!ref2.current) {
    return {
      ref: ref2,
      current: createEmptyProxy(),
      parent: createEmptyProxy()
    };
  }
  return {
    ref: ref2,
    current: (current == null ? void 0 : current.fiber) && createVmProxy(current),
    parent: (parent == null ? void 0 : parent.fiber) && createVmProxy(parent)
  };
}
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  var resolvedValue;
  var string = "";
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _classPartObject$vali;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_classPartObject$vali = classPartObject.validators.find(function(_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })) == null ? void 0 : _classPartObject$vali.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  var theme = config.theme, prefix = config.prefix;
  var classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function(_ref2) {
    var classGroupId = _ref2[0], classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function(classDefinition) {
    if (typeof classDefinition === "string") {
      var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function(_ref3) {
      var key = _ref3[0], classGroup2 = _ref3[1];
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function(_ref4) {
    var classGroupId = _ref4[0], classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function(classDefinition) {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
          var key = _ref5[0], value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return void 0;
      },
      set: function set() {
      }
    };
  }
  var cacheSize = 0;
  var cache = /* @__PURE__ */ new Map();
  var previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  var separator = config.separator || ":";
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function(modifier) {
    var isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return _extends({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  var classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(":");
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter(function(parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function(parsed) {
    return parsed.originalClassName;
  }).join(" ");
}
function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  var themeGetter = function themeGetter2(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function getDefaultConfig() {
  var colors = fromTheme("colors");
  var spacing = fromTheme("spacing");
  var blur = fromTheme("blur");
  var brightness = fromTheme("brightness");
  var borderColor = fromTheme("borderColor");
  var borderRadius = fromTheme("borderRadius");
  var borderSpacing = fromTheme("borderSpacing");
  var borderWidth = fromTheme("borderWidth");
  var contrast = fromTheme("contrast");
  var grayscale = fromTheme("grayscale");
  var hueRotate = fromTheme("hueRotate");
  var invert = fromTheme("invert");
  var gap = fromTheme("gap");
  var gradientColorStops = fromTheme("gradientColorStops");
  var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  var inset = fromTheme("inset");
  var margin = fromTheme("margin");
  var opacity = fromTheme("opacity");
  var padding = fromTheme("padding");
  var saturate = fromTheme("saturate");
  var scale = fromTheme("scale");
  var sepia = fromTheme("sepia");
  var skew = fromTheme("skew");
  var space = fromTheme("space");
  var translate = fromTheme("translate");
  var getOverscroll = function getOverscroll2() {
    return ["auto", "contain", "none"];
  };
  var getOverflow = function getOverflow2() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary2() {
    return ["auto", isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary2() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty2() {
    return ["", isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary2() {
    return ["auto", isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions2() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  };
  var getLineStyles = function getLineStyles2() {
    return ["solid", "dashed", "dotted", "double", "none"];
  };
  var getBlendModes = function getBlendModes2() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  };
  var getAlign = function getAlign2() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  };
  var getZeroAndEmpty = function getZeroAndEmpty2() {
    return ["", "0", isArbitraryValue];
  };
  var getBreaks = function getBreaks2() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  };
  var getNumber = function getNumber2() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary2() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(getAlign(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(getAlign(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(getLineStyles(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(getLineStyles(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
var stringifyCssClassObject = function stringifyCssClassObject2(cssClassObject) {
  var allCssClass = [];
  Object.keys(cssClassObject).forEach(function(cssClass) {
    return cssClassObject[cssClass] && allCssClass.push(cssClass);
  });
  return allCssClass.join(" ");
};
var stringifyCssClassArray = function stringifyCssClassArray2(cssClassArray) {
  var allCssClass = [];
  cssClassArray.forEach(function(cssClass) {
    if (typeof cssClass === "string") {
      allCssClass.push(cssClass);
    } else if (typeof cssClass === "object") {
      allCssClass.push(stringifyCssClassObject(cssClass));
    }
  });
  return allCssClass.join(" ");
};
var stringifyCssClass = function stringifyCssClass2(cssClasses) {
  if (!cssClasses || Array.isArray(cssClasses) && !cssClasses.length)
    return "";
  var allCssClass = [];
  cssClasses.forEach(function(cssClass) {
    if (cssClass) {
      if (typeof cssClass === "string") {
        allCssClass.push(cssClass);
      } else if (Array.isArray(cssClass)) {
        allCssClass.push(stringifyCssClassArray(cssClass));
      } else if (typeof cssClass === "object") {
        allCssClass.push(stringifyCssClassObject(cssClass));
      }
    }
  });
  return allCssClass.join(" ");
};
var renderStack = [];
var getParent = function getParent2() {
  return renderStack[renderStack.length - 1] || {};
};
var getRoot = function getRoot2() {
  return {};
};
var collectRefs = function collectRefs2(rootEl, $children2) {
  var refs = {};
  if (!rootEl)
    return refs;
  var rootFiber = getFiberByDom(rootEl);
  traverseFiber(rootFiber, function(fiber) {
    if (typeof fiber.type === "string" && fiber.stateNode.getAttribute("v-ref")) {
      refs[fiber.stateNode.getAttribute("v-ref")] = fiber.stateNode;
    }
  });
  $children2.forEach(function(child) {
    if (child.$props["v-ref"]) {
      refs[child.$props["v-ref"]] = child;
    }
  });
  return refs;
};
function useCreateVueInstance(_ref29) {
  var $bus = _ref29.$bus, props = _ref29.props;
  var ref2 = useRef();
  var vm = useOnceResult(function() {
    return reactive({
      $el: void 0,
      $options: props.$options || {},
      $props: props,
      $parent: getParent().vm || {},
      $root: getRoot().vm || {},
      $slots: props.slots,
      $scopedSlots: props.slots,
      $listeners: props.$listeners,
      $attrs: props.$attrs,
      // 通过 fiber 计算
      $children: [],
      $refs: computed(function() {
        return collectRefs(vm.$el, vm.$children);
      }),
      // 方法
      $set: function $set2(target, property, value) {
        return target[property] = value;
      },
      $delete: function $delete(target, property) {
        return delete target[property];
      },
      $watch: function $watch(expression, callback, options) {
        if (typeof expression === "string") {
          watch(function() {
            return getPropByPath(vm, expression);
          }, callback, options);
        } else if (typeof expression === "function") {
          watch(expression, callback, options);
        }
      },
      $on: function $on2(event, callback) {
        return $bus.on(event, callback);
      },
      $once: function $once2(event, callback) {
        return $bus.once(event, callback);
      },
      $off: function $off2(event, callback) {
        return $bus.off(event, callback);
      },
      $emit: function $emit2(event) {
        for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          args[_key9 - 1] = arguments[_key9];
        }
        return $bus.emit.apply($bus, [event].concat(args));
      },
      $forceUpdate: function $forceUpdate() {
        return $bus.emit("event:reload");
      },
      $nextTick: nextTick,
      $destroy: function $destroy() {
      },
      $mount: function $mount() {
      }
    });
  });
  useExcuteOnce(function() {
    var $listeners2 = props.$listeners;
    if ($listeners2) {
      Object.keys($listeners2).forEach(function(eventName) {
        $bus.on(eventName, $listeners2[eventName]);
      });
    }
    var parent = vm.$parent;
    if (Array.isArray(parent.$children)) {
      parent.$children.push(vm);
    }
    nextTick(function() {
      vm.$el = ref2.current;
    });
  });
  return {
    ref: ref2,
    vm
  };
}
var mergeClass = function mergeClass2() {
  for (var _len10 = arguments.length, cssClasses = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    cssClasses[_key10] = arguments[_key10];
  }
  return twMerge(stringifyCssClass(cssClasses));
};
var setup = function setup2(_ref30) {
  var props = _ref30.props, renderless2 = _ref30.renderless, api2 = _ref30.api, _ref30$extendOptions = _ref30.extendOptions, extendOptions = _ref30$extendOptions === void 0 ? {} : _ref30$extendOptions, _ref30$classes = _ref30.classes, classes2 = _ref30$classes === void 0 ? {} : _ref30$classes, constants = _ref30.constants, vm = _ref30.vm, parent = _ref30.parent, $bus = _ref30.$bus;
  var render = typeof props.tiny_renderless === "function" ? props.tiny_renderless : renderless2;
  var _emitEvent = emitEvent(vm), dispatch = _emitEvent.dispatch, broadcast = _emitEvent.broadcast;
  var utils = {
    vm,
    parent,
    emit: vm.$emit,
    // FIXME: fix the modal renderless types
    emitter: function emitter() {
      return {
        emit: vm.$emit
      };
    },
    constants,
    nextTick,
    dispatch,
    broadcast,
    t: function t() {
    },
    mergeClass,
    mode: props.tiny_mode
  };
  var sdk = render(props, _extends({}, generateVueHooks({
    $bus,
    vm
  })), utils, extendOptions);
  var attrs = {
    a: filterAttrs,
    m: mergeClass,
    vm: utils.vm,
    gcls: function gcls(key) {
      return getElementCssClass(classes2, key);
    }
  };
  if (Array.isArray(api2)) {
    api2.forEach(function(name) {
      var value = sdk[name];
      if (typeof value !== "undefined") {
        attrs[name] = value;
      }
    });
  }
  return attrs;
};
var useSetup = function useSetup2(_ref31) {
  var props = _ref31.props, renderless2 = _ref31.renderless, api2 = _ref31.api, _ref31$extendOptions = _ref31.extendOptions, extendOptions = _ref31$extendOptions === void 0 ? {} : _ref31$extendOptions, _ref31$classes = _ref31.classes, classes2 = _ref31$classes === void 0 ? {} : _ref31$classes, constants = _ref31.constants, parent = _ref31.parent;
  var $bus = useOnceResult(function() {
    return eventBus();
  });
  var reload = useReload();
  useExcuteOnce(function() {
    $bus.on("event:reload", reload);
  });
  var scope = useOnceResult(function() {
    return effectScope();
  });
  useExcuteOnce(function() {
    $bus.on("hook:onBeforeUnmount", function() {
      return scope.stop();
    });
  });
  var reactiveProps = useOnceResult(function() {
    return reactive(props);
  });
  Object.assign(reactiveProps, props);
  var reactiveParent = useOnceResult(function() {
    return reactive({
      $parent: parent
    });
  });
  Object.assign(reactiveParent, {
    $parent: parent
  });
  var _useCreateVueInstance = useCreateVueInstance({
    $bus,
    props
  }), ref2 = _useCreateVueInstance.ref, vm = _useCreateVueInstance.vm;
  var setupResult = useExcuteOnce(function() {
    var result;
    scope.run(function() {
      result = setup({
        props: reactiveProps,
        renderless: renderless2,
        api: api2,
        constants,
        extendOptions,
        classes: classes2,
        vm,
        parent: reactiveParent,
        $bus
      });
    });
    return result;
  });
  useVueLifeHooks($bus);
  Object.keys(setupResult).forEach(function(key) {
    vm[key] = setupResult[key];
  });
  return _extends({}, setupResult, {
    _: {
      ref: ref2,
      vm
    }
  });
};
var IconClose = Svg({
  name: "IconClose",
  component: ReactComponent
});
var IconError = Svg({
  name: "IconError",
  component: ReactComponent$1
});
var IconFullscreenLeft = Svg({
  name: "IconFullscreenLeft",
  component: ReactComponent$2
});
var IconHelpSolid = Svg({
  name: "IconHelpSolid",
  component: ReactComponent$3
});
var IconInfoSolid = Svg({
  name: "IconInfoSolid",
  component: ReactComponent$4
});
var IconLoading = Svg({
  name: "IconLoading",
  component: ReactComponent$5
});
var IconMinscreenLeft = Svg({
  name: "IconMinscreenLeft",
  component: ReactComponent$6
});
var IconSuccess = Svg({
  name: "IconSuccess",
  component: ReactComponent$7
});
var IconWarning = Svg({
  name: "IconWarning",
  component: ReactComponent$8
});
var define_props$2 = ["children", "text", "loading", "autofocus", "plain", "round", "circle", "icon", "size", "type", "nativeType", "resetTime", /^on/];
function Button$3(props) {
  var children = props.children, text = props.text, loading = props.loading, autofocus = props.autofocus, round = props.round, circle = props.circle, icon = props.icon, size = props.size, tabindex = props.tabindex, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, _props$nativeType = props.nativeType, nativeType = _props$nativeType === void 0 ? "button" : _props$nativeType, _props$resetTime = props.resetTime, resetTime = _props$resetTime === void 0 ? 1e3 : _props$resetTime, ghost = props.ghost;
  var defaultProps = Object.assign({
    type,
    nativeType,
    resetTime,
    $listeners: {
      click: props.onClick
    }
  }, props);
  var _useVm = useVm(), ref2 = _useVm.ref, parent = _useVm.parent, vm = _useVm.current;
  var _useSetup = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  }), handleClick = _useSetup.handleClick, state2 = _useSetup.state, a = _useSetup.a;
  var $attrs2 = a(props, define_props$2, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    ref: ref2,
    className: vc(["tiny-button", type ? "tiny-button--" + type : "", size ? "tiny-button--" + size : "", {
      "is-disabled": state2.buttonDisabled,
      "is-loading": loading,
      "is-plain": state2.plain,
      "is-ghost": ghost,
      "is-round": round,
      "is-circle": circle,
      "is-icon": icon && !loading && (text || (children == null ? void 0 : children.length)),
      "is-only-icon": icon && !loading && !(text || children != null && children.length)
    }]),
    onClick: handleClick,
    disabled: state2.buttonDisabled || loading,
    autoFocus: autofocus,
    type: nativeType,
    tabIndex: tabindex
  }, a($attrs2, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
    "v-if": loading
  }, /* @__PURE__ */ React.createElement(IconLoading, {
    className: "tiny-icon-loading tiny-svg-size"
  })), /* @__PURE__ */ React.createElement(Component, {
    "v-if": icon && !loading,
    is: icon,
    className: text || children ? "is-text" : ""
  }), /* @__PURE__ */ React.createElement("span", null, children || text));
}
var define_props$1 = ["children", "text", "loading", "autofocus", "plain", "round", "circle", "icon", "size", "type", "nativeType", "resetTime", /^on/];
function Button$2(props) {
  var text = props.text, loading = props.loading, round = props.round, icon = props.icon, size = props.size, _props$type2 = props.type, type = _props$type2 === void 0 ? "default" : _props$type2, _props$nativeType2 = props.nativeType, nativeType = _props$nativeType2 === void 0 ? "button" : _props$nativeType2, _props$resetTime2 = props.resetTime, resetTime = _props$resetTime2 === void 0 ? 1e3 : _props$resetTime2;
  var defaultProps = Object.assign({
    type,
    nativeType,
    resetTime
  }, props);
  var _useVm2 = useVm(), ref2 = _useVm2.ref, parent = _useVm2.parent, vm = _useVm2.current;
  var _useSetup2 = useSetup({
    props: defaultProps,
    renderless,
    api,
    parent,
    vm
  }), handleClick = _useSetup2.handleClick, state2 = _useSetup2.state, a = _useSetup2.a;
  var $attrs2 = a(props, define_props$1, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    ref: ref2,
    onClick: handleClick,
    disabled: state2.buttonDisabled || loading,
    type: nativeType,
    className: vc(["tiny-mobile-button", type ? "tiny-mobile-button--" + type : "", size ? "tiny-mobile-button--" + size : "", {
      "is-disabled": state2.buttonDisabled,
      "is-loading": loading,
      "is-plain": state2.plain,
      "is-round": round
    }])
  }, a($attrs2, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
    "v-if": loading
  }, /* @__PURE__ */ React.createElement(IconLoading, {
    class: "tiny-icon-loading"
  })), /* @__PURE__ */ React.createElement(Component, {
    "v-if": icon && !loading,
    is: icon,
    class: "tiny-icon is-icon"
  }), /* @__PURE__ */ React.createElement(Slot, {
    slots: props.slots,
    parent_children: props.children
  }, /* @__PURE__ */ React.createElement("span", {
    style: {
      marginLeft: text && (icon || loading) ? "4px" : 0
    }
  }, text)));
}
var classes = {
  "button": "inline-block sm:max-w-[9rem] text-center overflow-hidden overflow-ellipsis whitespace-nowrap transition-button duration-300 delay-[0ms]",
  "size-default": "h-10 text-sm sm:h-7 sm:text-xs",
  "size-medium": "h-10 text-sm sm:h-8 sm:text-xs",
  "size-small": "h-8 text-sm sm:h-7 sm:text-xs",
  "size-mini": "h-7 sm:h-6 sm:text-xs",
  "type-default": "text-black border-color-border hover:border-color-border-hover active:border-color-border-active sm:cursor-pointer",
  "type-primary": "text-white border-color-brand bg-color-brand hover:border-color-brand-hover hover:bg-color-brand-hover active:border-color-brand-active active:bg-color-brand-active sm:cursor-pointer",
  "type-success": "text-white border-color-success bg-color-success hover:border-color-success-hover hover:bg-color-success-hover active:border-color-success-active active:bg-color-success-active sm:cursor-pointer",
  "type-info": "text-white border-color-info-secondary bg-color-info-secondary hover:border-color-info-secondary-hover hover:bg-color-info-secondary-hover active:border-color-info-secondary-active active:bg-color-info-secondary-active sm:cursor-pointer",
  "type-warning": "text-white border-color-warning bg-color-warning hover:border-color-warning-hover hover:bg-color-warning-hover active:border-color-warning-active active:bg-color-warning-active sm:cursor-pointer",
  "type-danger": "text-white border-color-error bg-color-error hover:border-color-error-hover hover:bg-color-error-hover active:border-color-error-active active:bg-color-error-active sm:cursor-pointer",
  "type-text": "border-none bg-transparent cursor-pointer text-color-text-placeholder active:text-color-text-primary sm:hover:text-color-text-primary sm:active:!text-color-brand-active",
  "type-default-disabled": "text-color-text-disabled bg-color-bg-3 border-transparent hover:cursor-not-allowed",
  "type-primary-disabled": "text-white bg-color-brand-disabled border-transparent hover:cursor-not-allowed",
  "type-success-disabled": "text-white bg-color-success-disabled border-transparent hover:cursor-not-allowed",
  "type-info-disabled": "text-white bg-color-info-secondary-disabled border-transparent hover:cursor-not-allowed",
  "type-warning-disabled": "text-white bg-color-alert-disabled border-transparent hover:cursor-not-allowed",
  "type-danger-disabled": "text-white bg-color-error-disabled border-transparent hover:cursor-not-allowed",
  "type-text-disabled": "text-color-text-disabled hover:cursor-not-allowed",
  "type-default-plain": "text-black border-color-border hover:border-color-border-hover active:border-color-border-active sm:cursor-pointer",
  "type-primary-plain": "text-color-brand border-color-brand hover:text-color-brand-hover hover:border-color-brand-hover active:text-color-brand-active active:border-color-brand-active bg-white sm:cursor-pointer",
  "type-success-plain": "text-color-success border-color-success hover:text-color-success-hover hover:border-color-success-hover active:text-color-success-active active:border-color-success-active bg-white sm:cursor-pointer",
  "type-info-plain": "text-color-info-secondary border-color-info-secondary hover:text-color-info-secondary-hover hover:border-color-info-secondary-hover active:text-color-info-secondary-active active:border-color-info-secondary-active bg-white sm:cursor-pointer",
  "type-warning-plain": "text-color-warning border-color-warning hover:text-color-warning-hover hover:border-color-warning-hover active:text-color-warning-active active:border-color-warning-active bg-white sm:cursor-pointer",
  "type-danger-plain": "text-color-error border-color-error hover:text-color-error-hover hover:border-color-error-hover active:text-color-error-active active:border-color-error-active bg-white sm:cursor-pointer",
  "type-text-plain": "text-color-brand hover:text-color-brand-hover active:text-color-brand-active",
  "type-default-plain-disabled": "text-color-text-disabled bg-white border-color-text-disabled hover:cursor-not-allowed",
  "type-primary-plain-disabled": "text-color-brand-disabled bg-white border-color-brand-disabled hover:cursor-not-allowed",
  "type-success-plain-disabled": "text-color-success-disabled bg-white border-color-success-disabled hover:cursor-not-allowed",
  "type-info-plain-disabled": "text-color-info-secondary-disabled bg-white border-color-info-secondary-disabled hover:cursor-not-allowed",
  "type-warning-plain-disabled": "text-color-alert-disabled bg-white border-color-alert-disabled hover:cursor-not-allowed",
  "type-danger-plain-disabled": "text-color-error-disabled bg-white border-color-error-disabled hover:cursor-not-allowed",
  "type-text-plain-disabled": "text-color-text-disabled hover:cursor-not-allowed",
  "no-round": "rounded-sm",
  "is-round": "rounded-full",
  "is-border": "border-0.5 sm:border",
  "no-circle": "sm:min-w-[4.5rem] pl-3 pr-3",
  "is-circle": "sm:min-w-[0.4375rem] sm:rounded-full sm:pl-2 sm:pr-2",
  "button-icon": "-mt-0.5 sm:text-base fill-current",
  "button-icon-default": "text-color-icon-primary hover:text-color-icon-hover active:text-color-icon-active",
  "button-icon-disabled": "text-color-icon-disabled hover:cursor-not-allowed",
  "loading-svg": "animate-spin-2 mr-1 fill-current -inset-0.5",
  "button-link": "text-color-link hover:text-color-link-hover active:color-link-hover active:hover:text-color-link-hover sm:hover:text-color-link-hover"
};
var define_props = ["children", "text", "loading", "autofocus", "plain", "round", "circle", "icon", "size", "type", "nativeType", "resetTime", /^on/];
function Button$1(props) {
  var loading = props.loading, autofocus = props.autofocus, size = props.size, icon = props.icon, round = props.round, circle = props.circle, href = props.href, buttonClass = props.buttonClass, tabindex = props.tabindex, text = props.text, type = props.type, _props$nativeType3 = props.nativeType, nativeType = _props$nativeType3 === void 0 ? "button" : _props$nativeType3, _props$resetTime3 = props.resetTime, resetTime = _props$resetTime3 === void 0 ? 1e3 : _props$resetTime3;
  var defaultProps = Object.assign({
    nativeType,
    resetTime
  }, props);
  var _useVm3 = useVm(), ref2 = _useVm3.ref, parent = _useVm3.parent, vm = _useVm3.current;
  var _useSetup3 = useSetup({
    api,
    renderless,
    props: defaultProps,
    classes,
    ref: ref2,
    parent,
    vm
  }), handleClick = _useSetup3.handleClick, state2 = _useSetup3.state, a = _useSetup3.a, m = _useSetup3.m, gcls = _useSetup3.gcls;
  var $attrs2 = a(props, define_props, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    "data-tag": "tiny-button",
    onClick: handleClick,
    disabled: state2.buttonDisabled || loading,
    autoFocus: autofocus,
    type: nativeType,
    className: m(gcls("button"), gcls("size-" + (size || "default")), gcls("type-" + (type || "default") + (icon ? "-icon" : state2.plain ? "-plain" : "") + "\n          " + (state2.buttonDisabled ? "-disabled" : "")), gcls(round ? "is-round" : "no-round"), gcls(circle ? "is-circle" : "no-circle"), gcls({
      "is-border": circle || !(type === "text" || icon)
    }), gcls({
      "button-link": href
    }), buttonClass),
    tabIndex: tabindex
  }, a($attrs2, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
    "v-if": loading
  }, /* @__PURE__ */ React.createElement(IconLoading, {
    className: gcls("loading-svg")
  })), /* @__PURE__ */ React.createElement(Component, {
    "v-if": icon && !loading,
    is: icon,
    className: vc([gcls("button-icon"), gcls("button-icon-" + (state2.buttonDisabled ? "disabled" : "default"))])
  }), /* @__PURE__ */ React.createElement(Slot, {
    slots: props.slots,
    parent_children: props.children
  }, /* @__PURE__ */ React.createElement("span", null, text)));
}
function Button(props) {
  var _props$tiny_mode = props.tiny_mode, tiny_mode = _props$tiny_mode === void 0 ? "pc" : _props$tiny_mode;
  var S = {
    pc: Button$3,
    mobile: Button$2,
    "mobile-first": Button$1
  }[tiny_mode];
  return S(props);
}
var $constants2 = {
  MODAL_STATUS: {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    LOADING: "loading"
  },
  NODAL_TYPE: {
    ALERT: "alert",
    CONFIRM: "confirm",
    MESSAGE: "message"
  },
  STATUS_MAPPING_CLASSS: {
    INFO: "tiny-modal-svg__info",
    SUCCESS: "tiny-modal-svg__success",
    WARNING: "tiny-modal-svg__warning",
    ERROR: "tiny-modal-svg__error",
    LOADING: "tiny-modal-svg__refresh roll"
  },
  PC_SCROLL_LOCK_CLASS: "tiny-dialog-box__scroll-lock",
  MOBILE_FIRST_SCROLL_LOCK_CLASS: "tiny-modal-lockscroll",
  Mode: "pc",
  SCROLL_LOCK_CLASS: function SCROLL_LOCK_CLASS(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_FIRST_SCROLL_LOCK_CLASS;
  }
};
var pc = forwardRef(function Modal(props, fRef) {
  var _ref32;
  var _props$animat = props.animat, animat = _props$animat === void 0 ? true : _props$animat, beforeClose = props.beforeClose, _props$duration = props.duration, duration = _props$duration === void 0 ? 3e3 : _props$duration, escClosable = props.escClosable, events = props.events, fullscreen = props.fullscreen, height = props.height, id = props.id, _props$isFormReset = props.isFormReset, isFormReset = _props$isFormReset === void 0 ? true : _props$isFormReset, lockScroll = props.lockScroll, _props$lockView = props.lockView, lockView = _props$lockView === void 0 ? true : _props$lockView, _props$marginSize = props.marginSize, marginSize = _props$marginSize === void 0 ? 10 : _props$marginSize, _props$mask = props.mask, mask = _props$mask === void 0 ? true : _props$mask, maskClosable = props.maskClosable, message = props.message, minHeight = props.minHeight, minWidth = props.minWidth, modelValue = props.modelValue, resize = props.resize, showFooter = props.showFooter, showHeader = props.showHeader, _props$status = props.status, status = _props$status === void 0 ? "" : _props$status, title = props.title, _props$top = props.top, top = _props$top === void 0 ? 80 : _props$top, _props$type3 = props.type, type = _props$type3 === void 0 ? "alert" : _props$type3, vSize = props.vSize, width = props.width, zIndex = props.zIndex, showClose = props.showClose, messageClosable = props.messageClosable, confirmContent = props.confirmContent, cancelContent = props.cancelContent, confirmBtnProps = props.confirmBtnProps, cancelBtnProps = props.cancelBtnProps, footerDragable = props.footerDragable, tiny_theme = props.tiny_theme, _props$slots2 = props.slots, slots = _props$slots2 === void 0 ? {} : _props$slots2, _props$_constants = props._constants, _constants = _props$_constants === void 0 ? $constants2 : _props$_constants;
  var defaultProps = Object.assign({
    _constants,
    animat,
    isFormReset,
    duration,
    marginSize,
    lockView,
    mask,
    status,
    top,
    type,
    $listeners: {
      hide: events.hide
    }
  }, props);
  var _useVm4 = useVm(), vm = _useVm4.current, parent = _useVm4.parent;
  var _useSetup4 = useSetup({
    props: defaultProps,
    renderless: renderless$1,
    api: api$1,
    constants: _constants,
    vm,
    parent
  }), state2 = _useSetup4.state, scopedSlots = _useSetup4.scopedSlots, confirmEvent = _useSetup4.confirmEvent, cancelEvent = _useSetup4.cancelEvent, closeEvent = _useSetup4.closeEvent, toggleZoomEvent = _useSetup4.toggleZoomEvent, mouseEnterEvent = _useSetup4.mouseEnterEvent, mouseLeaveEvent = _useSetup4.mouseLeaveEvent, selfClickEvent = _useSetup4.selfClickEvent, mousedownEvent = _useSetup4.mousedownEvent, dragEvent = _useSetup4.dragEvent, open = _useSetup4.open, ref2 = _useSetup4._.ref;
  useImperativeHandle(fRef, function() {
    return {
      open
    };
  }, [open]);
  var STATUS_MAPPING_COMPONENT = {
    QUESTION: IconHelpSolid,
    INFO: IconInfoSolid,
    SUCCESS: IconSuccess,
    WARNING: IconWarning,
    ERROR: IconError,
    LOADING: IconLoading
  };
  var constants = $constants2;
  confirmContent || (confirmBtnProps == null ? void 0 : confirmBtnProps.text) || "Confirm";
  cancelContent || (cancelBtnProps == null ? void 0 : cancelBtnProps.text) || "Cancel";
  return /* @__PURE__ */ React.createElement("div", {
    className: vc(["tiny-modal", "tiny-modal__wrapper", "type__" + type, (_ref32 = {}, _ref32["size__" + vSize] = vSize, _ref32["status__" + status] = typeof status === "string", _ref32["is__animat"] = animat, _ref32["lock__scroll"] = lockScroll, _ref32["lock__view"] = lockView, _ref32["is__mask"] = mask, _ref32["is__maximize"] = state2.zoomLocat, _ref32["is__visible"] = state2.contentVisible, _ref32["active"] = state2.visible, _ref32)]),
    style: {
      zIndex: state2.modalZindex,
      top: state2.modalTop ? state2.modalTop + "px" : null
    },
    onClick: selfClickEvent,
    ref: ref2
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__box",
    style: state2.boxStyle,
    "v-ref": "modalBox"
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": showHeader
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__header",
    onMouseDown: mousedownEvent
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": status && state2.theme === "saas"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__status-wrapper"
  }, /* @__PURE__ */ React.createElement(Component, {
    is: STATUS_MAPPING_COMPONENT[status.toUpperCase()],
    className: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
  }))), /* @__PURE__ */ React.createElement("span", {
    className: "tiny-modal__title"
  }, title), /* @__PURE__ */ React.createElement(If, {
    "v-if": resize
  }, /* @__PURE__ */ React.createElement(Component, {
    is: state2.zoomLocat ? IconMinscreenLeft : IconFullscreenLeft,
    className: "tiny-modal__zoom-btn trigger__btn",
    onClick: toggleZoomEvent
  })), /* @__PURE__ */ React.createElement(IconClose, {
    className: "tiny-modal__close-btn trigger__btn",
    onClick: closeEvent
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__body"
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": status && (state2.theme !== "saas" || type === "message")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__status-wrapper"
  }, /* @__PURE__ */ React.createElement(Component, {
    is: STATUS_MAPPING_COMPONENT[status.toUpperCase()],
    className: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__content"
  }, /* @__PURE__ */ React.createElement(Slot, null, (scopedSlots == null ? void 0 : scopedSlots.default) || (slots == null ? void 0 : slots.default) || /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__text"
  }, message))), /* @__PURE__ */ React.createElement(If, {
    "v-if": messageClosable
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__close-wrapper"
  }, /* @__PURE__ */ React.createElement(IconClose, {
    className: "tiny-modal__close-btn",
    onClick: closeEvent
  })))), /* @__PURE__ */ React.createElement(If, {
    "v-if": showFooter
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-modal__footer",
    onMouseDown: footerDragable ? mousedownEvent : void 0
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "footer",
    slots
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": type === "confirm"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: cancelEvent
  }, cancelContent)), /* @__PURE__ */ React.createElement(Button, {
    type: "primary",
    onClick: confirmEvent
  }, confirmContent))))));
});
var types = ["alert", "confirm", "message", "popconfirm"];
var defOpts = {
  alert: {
    showFooter: true,
    type: "alert"
  },
  confirm: {
    showFooter: true,
    status: "question",
    type: "confirm"
  },
  message: {
    mask: false,
    lockView: false,
    showHeader: false,
    showClose: false,
    type: "message"
  },
  popconfirm: {}
};
types.forEach(function(type) {
  pc[type] = function(message, title, options) {
    var opts;
    if (typeof message === "object" && message !== null) {
      opts = message;
    } else if (title) {
      opts = {
        title
      };
    }
    if (message === void 0 || message === null) {
      message = "";
    }
    var modalContainer = document.createElement("div");
    document.body.appendChild(modalContainer);
    var instance = React$1.createElement(pc, _extends({
      message: message.toString()
    }, defOpts[type], opts, options, {
      ref: function ref2(_ref33) {
        _ref33.open();
      },
      events: {
        hide: function hide(_ref34) {
          var $modal = _ref34.$modal;
          if ($modal.beforeUnmouted) {
            $modal.beforeUnmouted();
          }
          document.body.removeChild(modalContainer);
        }
      }
    }));
    ReactDOM.createRoot(modalContainer).render(instance);
  };
});
export {
  Button as B,
  Component as C,
  If as I,
  Svg as S,
  useSetup as a,
  Slot as b,
  IconClose as c,
  IconSuccess as d,
  IconError as e,
  IconWarning as f,
  useProvide as g,
  pc as p,
  useVm as u,
  vc as v
};
