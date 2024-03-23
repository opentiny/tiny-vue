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
import { renderless, api } from "@opentiny/vue-renderless/button/vue";
import { S as Svg, u as useVm, a as useSetup, v as vc, I as If, C as Component, b as Slot } from "./index-9774bad5.mjs";
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
import "@vue/runtime-core";
import "react";
import "@opentiny/vue-theme/base/index.less";
import { ReactComponent } from "@opentiny/vue-theme/svgs/loading.svg";
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
var IconLoading = Svg({
  name: "IconLoading",
  component: ReactComponent
});
var define_props$2 = ["children", "text", "loading", "autofocus", "plain", "round", "circle", "icon", "size", "type", "nativeType", "resetTime", /^on/];
function Button$3(props) {
  var children = props.children, text = props.text, loading = props.loading, autofocus = props.autofocus, round = props.round, circle = props.circle, icon = props.icon, size = props.size, tabindex = props.tabindex, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, _props$nativeType = props.nativeType, nativeType = _props$nativeType === void 0 ? "button" : _props$nativeType, _props$resetTime = props.resetTime, resetTime = _props$resetTime === void 0 ? 1e3 : _props$resetTime, ghost = props.ghost;
  var defaultProps = Object.assign({
    type,
    nativeType,
    resetTime
  }, props);
  var _useVm = useVm(), ref = _useVm.ref, parent = _useVm.parent, vm = _useVm.current;
  var _useSetup = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  }), handleClick = _useSetup.handleClick, state = _useSetup.state, a = _useSetup.a;
  var $attrs = a(props, define_props$2, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    ref,
    className: vc(["tiny-button", type ? "tiny-button--" + type : "", size ? "tiny-button--" + size : "", {
      "is-disabled": state.buttonDisabled,
      "is-loading": loading,
      "is-plain": state.plain,
      "is-ghost": ghost,
      "is-round": round,
      "is-circle": circle,
      "is-icon": icon && !loading && (text || (children == null ? void 0 : children.length)),
      "is-only-icon": icon && !loading && !(text || children != null && children.length)
    }]),
    onClick: handleClick,
    disabled: state.buttonDisabled || loading,
    autoFocus: autofocus,
    type: nativeType,
    tabIndex: tabindex
  }, a($attrs, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
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
  var _useVm2 = useVm(), ref = _useVm2.ref, parent = _useVm2.parent, vm = _useVm2.current;
  var _useSetup2 = useSetup({
    props: defaultProps,
    renderless,
    api,
    parent,
    vm
  }), handleClick = _useSetup2.handleClick, state = _useSetup2.state, a = _useSetup2.a;
  var $attrs = a(props, define_props$1, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    ref,
    onClick: handleClick,
    disabled: state.buttonDisabled || loading,
    type: nativeType,
    className: vc(["tiny-mobile-button", type ? "tiny-mobile-button--" + type : "", size ? "tiny-mobile-button--" + size : "", {
      "is-disabled": state.buttonDisabled,
      "is-loading": loading,
      "is-plain": state.plain,
      "is-round": round
    }])
  }, a($attrs, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
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
  var _useVm3 = useVm(), ref = _useVm3.ref, parent = _useVm3.parent, vm = _useVm3.current;
  var _useSetup3 = useSetup({
    api,
    renderless,
    props: defaultProps,
    classes,
    ref,
    parent,
    vm
  }), handleClick = _useSetup3.handleClick, state = _useSetup3.state, a = _useSetup3.a, m = _useSetup3.m, gcls = _useSetup3.gcls;
  var $attrs = a(props, define_props, false);
  return /* @__PURE__ */ React.createElement("button", _extends({
    "data-tag": "tiny-button",
    onClick: handleClick,
    disabled: state.buttonDisabled || loading,
    autoFocus: autofocus,
    type: nativeType,
    className: m(gcls("button"), gcls("size-" + (size || "default")), gcls("type-" + (type || "default") + (icon ? "-icon" : state.plain ? "-plain" : "") + "\n          " + (state.buttonDisabled ? "-disabled" : "")), gcls(round ? "is-round" : "no-round"), gcls(circle ? "is-circle" : "no-circle"), gcls({
      "is-border": circle || !(type === "text" || icon)
    }), gcls({
      "button-link": href
    }), buttonClass),
    tabIndex: tabindex
  }, a($attrs, ["class", "style"], true)), /* @__PURE__ */ React.createElement(If, {
    "v-if": loading
  }, /* @__PURE__ */ React.createElement(IconLoading, {
    className: gcls("loading-svg")
  })), /* @__PURE__ */ React.createElement(Component, {
    "v-if": icon && !loading,
    is: icon,
    className: vc([gcls("button-icon"), gcls("button-icon-" + (state.buttonDisabled ? "disabled" : "default"))])
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
export {
  Button as B
};
