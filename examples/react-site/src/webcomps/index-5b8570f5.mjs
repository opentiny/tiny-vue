import React from 'react'
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
import { renderless, api } from "@opentiny/vue-renderless/alert/vue";
import { S as Svg, u as useVm, a as useSetup, I as If, v as vc, C as Component, b as Slot, c as IconClose, d as IconSuccess, e as IconError, f as IconWarning } from "./index-3d3bc6e4.mjs";
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
import { ReactComponent } from "@opentiny/vue-theme/svgs/chevron-down.svg";
import "@opentiny/vue-theme/svgs/chevron-left.svg";
import "@opentiny/vue-theme/svgs/chevron-right.svg";
import "@opentiny/vue-theme/svgs/chevron-up.svg";
import "@opentiny/vue-theme/svgs/clear-filter.svg";
import "@opentiny/vue-theme/svgs/clock-work.svg";
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
import "@vue/runtime-core";
import "react";
import "@opentiny/vue-theme/base/index.less";
import { ReactComponent as ReactComponent$1 } from "@opentiny/vue-theme/svgs/help.svg";
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
import "@opentiny/vue-theme/alert/index.less";
import "@opentiny/vue-theme-mobile/alert/index.less";
var IconChevronDown = Svg({
  name: "IconChevronDown",
  component: ReactComponent
});
var IconHelp = Svg({
  name: "IconHelp",
  component: ReactComponent$1
});
var $constants$2 = {
  ICON_MAP: {
    success: IconSuccess,
    error: IconError,
    info: IconHelp,
    warning: IconWarning
  },
  TITLE_MAP: {
    success: "ui.alert.success",
    error: "ui.alert.error",
    info: "ui.alert.info",
    warning: "ui.alert.warning"
  },
  CONTENT_MAXHEUGHT: 252
};
function Alert$3(props) {
  var _props$type = props.type, type = _props$type === void 0 ? "info" : _props$type, _props$size = props.size, size = _props$size === void 0 ? "normal" : _props$size, _props$center = props.center, center = _props$center === void 0 ? false : _props$center, _props$showIcon = props.showIcon, showIcon = _props$showIcon === void 0 ? true : _props$showIcon, _props$description = props.description, description = _props$description === void 0 ? "" : _props$description, _props$slots = props.slots, slots = _props$slots === void 0 ? {} : _props$slots, _props$_constants = props._constants, _constants = _props$_constants === void 0 ? $constants$2 : _props$_constants, _props$closable = props.closable, closable = _props$closable === void 0 ? true : _props$closable, closeText = props.closeText, title = props.title, customClass = props.customClass, icon = props.icon;
  var defaultProps = {
    type,
    size,
    center,
    showIcon,
    description,
    slots,
    _constants,
    closable,
    closeText,
    title,
    customClass,
    icon
  };
  var _useVm = useVm(), ref = _useVm.ref, vm = _useVm.current, parent = _useVm.parent;
  var _useSetup = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  }), state = _useSetup.state, handleClose = _useSetup.handleClose;
  return /* @__PURE__ */ React.createElement("div", {
    className: "tiny-transition-alert-fade",
    ref
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": state.show
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc(["tiny-alert", "tiny-alert--" + type, "tiny-alert--" + size, center && "is-center", customClass])
  }, /* @__PURE__ */ React.createElement(Component, {
    "v-if": showIcon,
    is: state.getIcon,
    className: "tiny-svg-size tiny-alert__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "tiny-alert__content"
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-alert__title"
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "title",
    slots: props.slots
  }, state.getTitle))), /* @__PURE__ */ React.createElement("div", {
    className: vc(["tiny-alert__description", size === "large" && !description && !slots.description && "is-hide"])
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "description",
    slots: props.slots
  }, description)), /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "tiny-alert__opration"
  }, /* @__PURE__ */ React.createElement(Slot, {
    slots: props.slots,
    parent_children: props.children
  })))), /* @__PURE__ */ React.createElement(If, {
    "v-if": !closeText && closable
  }, /* @__PURE__ */ React.createElement(IconClose, {
    className: vc(["tiny-svg-size", "tiny-alert__icon", "tiny-alert__close"]),
    onClick: handleClose
  })), /* @__PURE__ */ React.createElement(If, {
    "v-if": closeText && closable
  }, /* @__PURE__ */ React.createElement("span", {
    className: "is-custom",
    onClick: handleClose
  }, closeText)))));
}
var $constants$1 = {
  ICON_MAP: {
    success: IconSuccess,
    error: IconError,
    info: IconHelp,
    warning: IconWarning
  },
  TITLE_MAP: {
    success: "ui.alert.success",
    error: "ui.alert.error",
    info: "ui.alert.info",
    warning: "ui.alert.warning"
  },
  CONTENT_MAXHEUGHT: 252
};
function Alert$2(props) {
  var _props$type2 = props.type, type = _props$type2 === void 0 ? "success" : _props$type2, _props$size2 = props.size, size = _props$size2 === void 0 ? "normal" : _props$size2, _props$showIcon2 = props.showIcon, showIcon = _props$showIcon2 === void 0 ? true : _props$showIcon2, _props$closable2 = props.closable, closable = _props$closable2 === void 0 ? true : _props$closable2, closeText = props.closeText, _props$_constants2 = props._constants, _constants = _props$_constants2 === void 0 ? $constants$1 : _props$_constants2, _props$description2 = props.description, description = _props$description2 === void 0 ? "" : _props$description2;
  var defaultProps = Object.assign({
    type,
    size,
    showIcon,
    closable,
    _constants
  }, props);
  var _useVm2 = useVm(), ref = _useVm2.ref, vm = _useVm2.current, parent = _useVm2.parent;
  var _useSetup2 = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    constants: _constants
  }), state = _useSetup2.state, handleClose = _useSetup2.handleClose;
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": state.show
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc(["tiny-mobile-alert", "tiny-mobile-alert--" + type, "tiny-mobile-alert--" + size, "is-center"])
  }, /* @__PURE__ */ React.createElement(Component, {
    "v-if": showIcon,
    is: state.getIcon,
    className: "tiny-mobile-alert__icon"
  }), /* @__PURE__ */ React.createElement("div", {
    className: vc([["tiny-mobile-alert__content", {
      "is-hideicon": !showIcon
    }]])
  }, /* @__PURE__ */ React.createElement(Slot, _extends({}, props), description)), /* @__PURE__ */ React.createElement(If, {
    "v-if": !closeText && closable
  }, /* @__PURE__ */ React.createElement(IconClose, {
    onClick: handleClose,
    className: "tiny-mobile-alert__icon tiny-mobile-alert__close"
  })), /* @__PURE__ */ React.createElement(If, {
    "v-if": closeText && closable
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: handleClose,
    className: "is-custom"
  }, closeText)))));
}
var $constants = {
  ICON_MAP: {
    success: IconSuccess,
    error: IconError,
    info: IconHelp,
    warning: IconWarning
  },
  TITLE_MAP: {
    success: "ui.alert.success",
    error: "ui.alert.error",
    info: "ui.alert.info",
    warning: "ui.alert.warning"
  },
  CONTENT_MAXHEUGHT: 252
};
function Alert$1(props) {
  var _props$type3 = props.type, type = _props$type3 === void 0 ? "success" : _props$type3, _props$size3 = props.size, size = _props$size3 === void 0 ? "normal" : _props$size3, _props$center2 = props.center, center = _props$center2 === void 0 ? false : _props$center2, _props$showIcon3 = props.showIcon, showIcon = _props$showIcon3 === void 0 ? true : _props$showIcon3, _props$description3 = props.description, description = _props$description3 === void 0 ? "" : _props$description3, _props$slots2 = props.slots, slots = _props$slots2 === void 0 ? {} : _props$slots2, _props$_constants3 = props._constants, _constants = _props$_constants3 === void 0 ? $constants : _props$_constants3, _props$closable3 = props.closable, closable = _props$closable3 === void 0 ? true : _props$closable3, closeText = props.closeText, title = props.title, _props$showFoldable = props.showFoldable, showFoldable = _props$showFoldable === void 0 ? true : _props$showFoldable, singleLine = props.singleLine, scrolling = props.scrolling;
  var defaultProps = {
    type,
    size,
    center,
    showIcon,
    description,
    slots,
    _constants,
    closable,
    closeText,
    title,
    showFoldable
  };
  var _useVm3 = useVm(), ref = _useVm3.ref, vm = _useVm3.current, parent = _useVm3.parent;
  var _useSetup3 = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  }), state = _useSetup3.state, handleHeaderClick = _useSetup3.handleHeaderClick;
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": state.show
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc(["min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal", {
      "bg-color-info-secondary-subtle": type === "info" || !type
    }, {
      "bg-color-error-subtler": type === "error"
    }, {
      "bg-color-warning-subtler": type === "warning"
    }, {
      "bg-color-success-subtler": type === "success"
    }, {
      "text-center": center
    }])
  }, /* @__PURE__ */ React.createElement(Component, {
    "v-if": showIcon,
    is: state.getIcon,
    className: vc(["h-4.5 w-4.5 mt-1 sm:mt-0.5 sm:h-6 sm:w-5 sm:h-5 fill-current", {
      "text-color-info-secondary": type === "info" || !type
    }, {
      "text-color-error": type === "error"
    }, {
      "text-color-warning": type === "warning"
    }, {
      "text-color-success": type === "success"
    }])
  }), /* @__PURE__ */ React.createElement(If, {
    "v-if": showFoldable
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc(["flex-1 leading-6 text-sm overflow-hidden cursor-pointer", showIcon ? "mx-2" : "mr-2"])
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large"
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: handleHeaderClick,
    className: "inline-flex cursor-pointer font-medium"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Slot, {
    name: "title",
    slots: props.slots
  }, state.getTitle)), /* @__PURE__ */ React.createElement("span", {
    className: "ml-2.5"
  }, /* @__PURE__ */ React.createElement(IconChevronDown, {
    className: vc(["transition-transform duration-300 align-top my-1 fill-color-icon-placeholder", state.contentVisible ? "rotate-180" : "rotate-0"])
  })))), /* @__PURE__ */ React.createElement("div", {
    v_ref: "ContentDescribe",
    className: vc(["transition-all duration-900 ease-linear", {
      "hidden": size === "large" && !description && !slots.description
    }, {
      "overflow-y-auto": state.scrollStatus
    }, state.contentVisible ? "max-h-[theme(spacing.72)]" : "max-h-0"])
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc([{
      "truncate": singleLine
    }, {
      "hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer": singleLine && scrolling
    }])
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "description",
    slots: props.slots
  }, description))), /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large" && (slots.default || props.children)
  }, /* @__PURE__ */ React.createElement("div", {
    v_ref: "ContentDefault",
    className: vc(["transition-all duration-900 ease-linear", {
      "pt-2": description && state.contentVisible
    }, {
      "overflow-y-auto": state.scrollStatus
    }, state.contentVisible ? "max-h-[theme(spacing.72)]" : "max-h-0"])
  }, /* @__PURE__ */ React.createElement(Slot, _extends({}, props)))))), /* @__PURE__ */ React.createElement(If, {
    "v-if": !showFoldable
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc(["flex-1 leading-6 text-sm overflow-hidden cursor-pointer", showIcon ? "mx-2" : "mr-2"])
  }, /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-medium"
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "title",
    slots: props.slots
  }, state.getTitle))), /* @__PURE__ */ React.createElement("div", {
    className: vc([{
      "hidden": size === "large" && !description && !slots.description
    }])
  }, /* @__PURE__ */ React.createElement("div", {
    className: vc([{
      "truncate": singleLine
    }, {
      "hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer": singleLine && scrolling
    }])
  }, /* @__PURE__ */ React.createElement(Slot, {
    name: "description",
    slots: props.slots
  }, description))), /* @__PURE__ */ React.createElement(If, {
    "v-if": size === "large" && slots.default
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-2"
  }, /* @__PURE__ */ React.createElement(Slot, {
    slots: props.slots
  }))))), /* @__PURE__ */ React.createElement(If, {
    "v-if": !closeText && closable
  }, /* @__PURE__ */ React.createElement(IconClose, {
    className: "h-4 w-4 mt-1 cursor-pointer fill-color-text-primary opacity-70",
    onClick: close
  })), /* @__PURE__ */ React.createElement(If, {
    "v-if": closeText && closable
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: close,
    className: "leading-6 text-sm cursor-pointer"
  }, closeText)))));
}
function Alert(props) {
  var _props$tiny_mode = props.tiny_mode, tiny_mode = _props$tiny_mode === void 0 ? "pc" : _props$tiny_mode;
  var S = {
    pc: Alert$3,
    mobile: Alert$2,
    "mobile-first": Alert$1
  }[tiny_mode];
  return S(props);
}
export {
  Alert as A
};
