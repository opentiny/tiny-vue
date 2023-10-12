<template>
  <div>
    <div
      v-if="listType === 'text'"
      ref="upload-list"
      class="border-dashed border-color-border"
      :class="[
        state.files.length || mode === 'bubble' ? 'sm:border-0' : 'sm:border-t',
        { 'sm:h-52 overflow-y-auto overflow-x-hidden': mode === 'bubble' }
      ]"
    >
      <div v-if="state.files.length" class="text-[0]">
        <div
          ref="upload-list-li"
          class="group relative sm:inline-block min-w-full sm:min-w-[theme(spacing.112)] p-3 mr-2 border-0.5 sm:border border-color-border-separator rounded hover:bg-color-bg-2"
          :class="{
            'sm:border-color-brand border-color-border-separator': file.uid === (selected && selected.uid),
            'mb-2': index !== state.files.length - 1
          }"
          v-for="(file, index) in state.files"
          :key="file.uid"
          tabindex="0"
          @click="$emit('click-file-list', file)"
        >
          <slot :file="file">
            <div class="relative inline-block w-8 h-8 mr-2 align-top">
              <div
                v-if="~['uploading'].indexOf(file.status)"
                class="w-1/2 h-full absolute top-0 left-0 rounded-l overflow-hidden"
              >
                <div
                  class="absolute w-16 h-16 top-1/2 right-0 origin-right bg-color-bg-7"
                  :style="{
                    transform: `translateY(-50%) rotate(${parsePercentage(
                      (Math.max(0, Math.min(file.percentage || 0, 100) - 50) / 50) * 180
                    )}deg)`
                  }"
                ></div>
              </div>
              <div
                v-if="~['uploading'].indexOf(file.status)"
                class="w-1/2 h-full absolute top-0 left-1/2 rounded-r overflow-hidden"
              >
                <div
                  class="absolute w-16 h-16 top-1/2 left-0 origin-left bg-color-bg-7"
                  :style="{
                    transform: `translateY(-50%) rotate(${parsePercentage(
                      (Math.min(50, file.percentage || 0) / 50) * 180
                    )}deg)`
                  }"
                ></div>
              </div>
              <component
                v-if="~['uploading', 'success', 'downloading'].indexOf(file.status)"
                custom-class="w-full h-full rounded-sm"
                :style="{ fill: getFileIcon({ type: getFileType({ file }) }).color }"
                :is="getFileIcon({ type: getFileType({ file }) }).name"
              />
              <div
                v-if="~['fail'].indexOf(file.status)"
                class="relative w-full h-full bg-color-error-subtler rounded-sm"
              >
                <icon-cue-l class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-color-error" />
              </div>
            </div>
            <div class="relative inline-block w-[calc(100%-theme(spacing.10))] text-xs pr-10 sm:pr-0">
              <div class="flex h-4">
                <div
                  class="flex-1 sm:mr-6 text-sm sm:text-xs leading-3 sm:leading-3 text-color-text-primary overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <span :title="file.name">{{
                    file.name
                      .split('.')
                      .filter((item, i, arr) => arr.length - 1 > i || arr.length === 1)
                      .join('.')
                  }}</span>
                  <span>.{{ file.name.split('.')[file.name.split('.').length - 1] }}</span>
                </div>
                <div
                  class="hidden sm:block sm:invisible sm:group-hover:visible min-w-fit text-color-brand-hover text-xs"
                >
                  <slot name="operate" :file="file">
                    <span
                      v-if="handlePreview && ~['success', 'downloading'].indexOf(file.status)"
                      class="mr-2 cursor-pointer"
                      @click="handlePreview(file)"
                      >{{ t('ui.uploadList.preview') }}</span
                    >
                    <span
                      v-if="handleDownloadFile && !~['fail', 'uploading'].indexOf(file.status)"
                      class="mr-2 cursor-pointer"
                      @click="handleDownloadFile(file)"
                      >{{ t('ui.uploadList.download') }}</span
                    >
                    <span
                      v-if="(isEdm ? true : handleReUpload) && ~['fail'].indexOf(file.status)"
                      class="mr-2 cursor-pointer"
                      @click="reUpload(file)"
                      >{{ t('ui.uploadList.reUpload') }}</span
                    >
                    <span v-if="!displayOnly" class="cursor-pointer" @click.stop="remove({ file })">{{
                      t('ui.uploadList.delete')
                    }}</span>
                  </slot>
                </div>
              </div>
              <div class="flex h-4 leading-5">
                <span class="overflow-hidden text-ellipsis whitespace-nowrap font-light sm:font-normal">
                  <span v-if="~['fail'].indexOf(file.status)" class="hidden sm:inline text-color-error-hover">{{
                    t('ui.uploadList.uploadFailed')
                  }}</span>
                  <span v-if="~['fail'].indexOf(file.status)" class="inline sm:hidden text-color-error-hover">{{
                    t('ui.uploadList.uploadFailedAndReupload')
                  }}</span>
                  <span v-else-if="~['uploading'].indexOf(file.status)" class="text-color-text-placeholder">{{
                    `${
                      ~['uploading'].indexOf(file.status)
                        ? `${Math.round(((file.size * file.percentage) / 100 / 1024 / 1024) * 10) / 10}M/`
                        : ''
                    }${Math.round((file.size / 1024 / 1024) * 10) / 10}M`
                  }}</span>
                </span>
                <span class="flex-1 ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-right text-color-none">
                  <slot name="assist-content" :file="file"></slot>
                </span>
              </div>
              <div class="sm:invisible absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer">
                <icon-ellipsis
                  v-if="~['success', 'downloading'].indexOf(file.status)"
                  @click="showOperatePanel(file)"
                  :class="'fill-color-text-primary'"
                />
                <icon-error
                  v-if="!displayOnly && ~['uploading', 'fail'].indexOf(file.status)"
                  class="fill-color-none-hover"
                  @click.stop="remove({ file })"
                ></icon-error>
              </div>
              <div
                class="absolute left-0 top-0 w-[calc(100%-theme(spacing.10))] h-full mr-10 sm:hidden sm:mr-0"
                @click="reUpload(file)"
              ></div>
            </div>
          </slot>
        </div>
      </div>
      <div v-else class="my-4 text-color-none text-xs">
        {{ t('ui.uploadList.noAttachments') }}
      </div>
    </div>
    <div v-else-if="listType === 'drag-single'" class="border-dashed border-color-border text-center">
      <slot name="upload"></slot>
      <div class="absolute w-full h-full top-0 left-0" :class="[files.length ? 'z-0' : 'z-[-1]']">
        <div v-if="!files.length">
          <icon-cloud-upload
            custom-class="w-12 h-12 mt-6"
            :class="[isDragover ? 'fill-color-brand' : 'fill-color-none-hover']"
          />
          <div class="mb-0.5 text-sm text-color-text-secondary" :class="isDragover ? 'mt-4' : 'mt-3'">
            {{ isDragover ? t('ui.uploadList.releaseAndUpload') : t('ui.uploadList.dragOrClickImport') }}
          </div>
          <slot v-if="!isDragover" name="tip"></slot>
        </div>
        <div class="h-full" v-else>
          <div v-for="file in files" :key="file.uid" tabindex="0">
            <slot :file="file">
              <div v-if="['fail'].includes(file.status)">
                <icon-cloud-upload
                  custom-class="w-12 h-12 mt-6"
                  :class="[isDragover ? 'fill-color-brand' : 'fill-color-none-hover']"
                />
                <div class="mt-4.5">
                  <icon-cue-l class="fill-color-error" />
                  <span class="mt-1 pl-1 align-middle text-color-error text-xs">{{
                    t('ui.uploadList.uploadFailed')
                  }}</span>
                </div>
              </div>
              <div v-else>
                <div class="relative inline-block w-12 h-12 mt-6 align-top">
                  <div
                    v-if="~['uploading'].indexOf(file.status)"
                    class="w-1/2 h-full absolute top-0 left-0 rounded-l overflow-hidden"
                  >
                    <div
                      class="absolute w-16 h-16 top-1/2 right-0 origin-right bg-color-bg-7"
                      :style="{
                        transform: `translateY(-50%) rotate(${parsePercentage(
                          (Math.max(0, Math.min(file.percentage || 0, 100) - 50) / 50) * 180
                        )}deg)`
                      }"
                    ></div>
                  </div>
                  <div
                    v-if="~['uploading'].indexOf(file.status)"
                    class="w-1/2 h-full absolute top-0 left-1/2 rounded-r overflow-hidden"
                  >
                    <div
                      class="absolute w-16 h-16 top-1/2 left-0 origin-left bg-color-bg-7"
                      :style="{
                        transform: `translateY(-50%) rotate(${parsePercentage(
                          (Math.min(50, file.percentage || 0) / 50) * 180
                        )}deg)`
                      }"
                    ></div>
                  </div>
                  <component
                    v-if="~['uploading', 'success', 'downloading'].indexOf(file.status)"
                    custom-class="w-full h-full rounded-sm"
                    :style="{ fill: getFileIcon({ type: getFileType({ file }) }).color }"
                    :is="getFileIcon({ type: getFileType({ file }) }).name"
                  />
                </div>
                <div class="mt-3 mb-2">{{ file.name }}</div>
                <div>
                  <span class="text-color-brand cursor-pointer" @click.stop="remove({ file })">{{
                    t('ui.uploadList.delete')
                  }}</span>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      :class="[
        { 'grid grid-cols-3 gap-x-4 sm:grid-cols-[repeat(auto-fit,theme(spacing.24))]': listType === 'picture-card' },
        showName ? 'gap-y-8' : 'gap-y-4'
      ]"
    >
      <div
        :class="[
          'group relative',
          { 'hidden': listType === 'picture-single' && index },
          listType === 'picture-single'
            ? `w-24 h-24 sm:w-[calc(${scale}*theme(spacing.20))] sm:h-20`
            : 'w-full pt-[100%]'
        ]"
        v-for="(file, index) in files"
        :key="file.uid"
        tabindex="0"
        @keydown.delete="!disabled && remove({ file })"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <slot :file="file">
            <icon-error
              v-if="!displayOnly && (file.status !== 'uploading' || ~['video', 'audio'].indexOf(file.type))"
              class="absolute w-5 h-5 -top-1.5 fill-color-none-hover hover:cursor-pointer z-[1]"
              :class="[
                { 'sm:hidden -top-1.5': !~['video', 'audio'].indexOf(file.type) },
                listType === 'picture-single' ? '-right-1.5' : '-right-1.5'
              ]"
              @click.stop="remove({ file })"
            ></icon-error>
            <div
              class="relative w-full h-full after:absolute after:w-full after:h-full after:left-0 after:top-0 after:rounded after:bg-color-bg-7"
              :class="[
                !~['uploading', 'fail'].indexOf(file.status) ? 'after:hidden sm:after:group-hover:block' : '',
                { 'mb-7': listType === 'picture-card' && showName },
                ~['video', 'audio'].indexOf(file.type) ? 'after:opacity-0' : 'after:opacity-50'
              ]"
            >
              <video
                v-if="file.type === 'video'"
                :ref="'video' + (file.uid || index)"
                class="w-full h-full border rounded object-cover"
              >
                <source :src="file.url" type="video/mp4" />
                <source :src="file.url" type="video/ogg" />
                <source :src="file.url" type="video/webm" />
              </video>
              <div
                v-else-if="file.type === 'audio'"
                class="flex w-full h-full justify-center items-center border rounded border-transparent bg-color-info-secondary-subtle"
              >
                <audio
                  :ref="'audio' + (file.uid || index)"
                  @loadedmetadata="
                    ($event) => {
                      handleLoadedmetadata({ e: $event, file })
                    }
                  "
                  @timeupdate="
                    ($event) => {
                      handleTimeupdate({ e: $event, file })
                    }
                  "
                >
                  <source :src="file.url" type="video/mp3" />
                  <source :src="file.url" type="video/ogg" />
                  <source :src="file.url" type="video/wav" />
                </audio>
              </div>
              <img v-else class="w-full h-full border rounded" :src="file.url" alt="" />
              <div
                :title="file.name"
                class="mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-color-text-primary text-xs"
                :class="{ 'hidden': !showName }"
              >
                {{ file.name }}
              </div>
              <div class="absolute w-full top-1/2 left-0 -translate-y-1/2 z-[1] text-center hover:cursor-pointer">
                <div v-if="~['uploading'].indexOf(file.status)">
                  <tiny-progress
                    class="inline-block w-[calc(100%-theme(spacing.10))]"
                    :percentage="parsePercentage(file.percentage)"
                    :show-text="false"
                    :stroke-width="4"
                    color="#fff"
                  />
                  <div class="mt-3 text-color-text-inverse text-xs">
                    {{
                      ~['video', 'audio'].indexOf(file.type)
                        ? t('ui.uploadList.uploading')
                        : t('ui.uploadList.pictureUploading')
                    }}
                  </div>
                </div>
                <div v-else-if="~['fail'].indexOf(file.status)">
                  <span class="block sm:group-hover:hidden">
                    <icon-cue-l class="w-6 h-6 fill-color-icon-inverse" />
                    <div class="mt-1 text-color-text-inverse text-xs">{{ t('ui.uploadList.uploadFailed') }}</div>
                  </span>
                  <span class="hidden sm:group-hover:block">
                    <icon-refres
                      v-if="isEdm ? true : handleReUpload"
                      class="w-6 h-6 mr-2 fill-color-icon-inverse"
                      @click="reUpload(file)"
                    />
                    <icon-del
                      v-if="!displayOnly && listType !== 'picture-single'"
                      class="w-6 h-6 fill-color-icon-inverse"
                      @click.stop="remove({ file })"
                    />
                  </span>
                </div>
                <div v-else>
                  <div :class="['hidden', { 'sm:group-hover:block': !~['video', 'audio'].indexOf(file.type) }]">
                    <slot name="operate" :file="file">
                      <icon-eyeopen
                        v-if="handlePreview"
                        class="w-6 h-6 mr-2 fill-color-icon-inverse"
                        @click="handlePreview(file)"
                      />
                      <icon-download
                        v-if="handleDownloadFile"
                        class="w-6 h-6 mr-2 fill-color-icon-inverse"
                        @click="handleDownloadFile(file)"
                      />
                      <icon-del
                        v-if="!displayOnly"
                        class="w-6 h-6 fill-color-icon-inverse"
                        @click.stop="remove({ file })"
                      />
                    </slot>
                  </div>
                  <div
                    v-if="file.type === 'video'"
                    class="inline-block w-8 h-8 text-center rounded-full group-hover:bg-color-bg-7"
                    :class="!file.isPlay ? 'bg-color-bg-7' : 'bg-opacity-0'"
                  >
                    <icon-right
                      v-show="!file.isPlay"
                      class="w-4 h-4 mt-2 fill-color-icon-inverse"
                      @click="play({ file, index, type: 'video' })"
                    />
                    <icon-pause
                      v-show="file.isPlay"
                      class="w-6 h-6 hidden group-hover:inline-block mt-1 fill-color-icon-inverse"
                      @click="pause({ file, index, type: 'video' })"
                    />
                  </div>
                  <div v-if="file.type === 'audio'">
                    <icon-audio class="w-6 h-6 fill-color-brand" @click="play({ file, index, type: 'audio' })" />
                    <div>{{ `${file.currentSecond || 0} / ${file.totalSecond || 0}` }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="handlePreview && ~['success'].indexOf(file.status)"
              class="absolute w-full h-full left-0 top-0 sm:hidden"
              @click="handlePreview(file)"
            ></div>
          </slot>
        </div>
      </div>
      <div
        v-for="(type, i) in types"
        :key="i"
        class="relative"
        :class="[
          listType === 'picture-single' ? `w-24 h-24 sm:w-[calc(${scale}*theme(spacing.20))] sm:h-20` : 'pt-[100%]',
          { 'hidden': displayOnly && files.length },
          { 'hidden': !displayOnly && listType === 'picture-single' && files.length }
        ]"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <slot name="upload" :type="type"></slot>
        </div>
      </div>
    </div>
    <tiny-action-sheet
      :show-header="false"
      :lock-scroll="lockScroll"
      :visible="state.showPanel"
      @update:visible="state.showPanel = $event"
      custom-class="!min-h-0 py-0"
    >
      <slot name="operate" :file="state.currentFile || {}">
        <div class="text-center">
          <div
            v-if="handleDownloadFile"
            class="h-12 flex items-center justify-center border-b border-color-border-separator cursor-pointer"
            @click="
              () => {
                state.showPanel = false
                handleDownloadFile(state.currentFile)
              }
            "
          >
            {{ t('ui.uploadList.download') }}
          </div>
          <div
            v-if="handlePreview"
            class="h-12 flex items-center justify-center border-b border-color-border-separator cursor-pointer"
            @click="
              () => {
                state.showPanel = false
                handlePreview(state.currentFile)
              }
            "
          >
            {{ t('ui.uploadList.preview') }}
          </div>
          <div
            v-if="!displayOnly"
            class="h-12 flex items-center justify-center cursor-pointer"
            @click.stop="
              () => {
                state.showPanel = false
                remove({ file: state.currentFile })
              }
            "
          >
            {{ t('ui.uploadList.delete') }}
          </div>
          <div class="h-2 bg-color-bg-2"></div>
          <div class="h-12 flex items-center justify-center cursor-pointer" @click="state.showPanel = false">
            {{ t('ui.uploadList.cancel') }}
          </div>
        </div>
      </slot>
    </tiny-action-sheet>
    <tiny-action-sheet
      :show-header="false"
      :lock-scroll="lockScroll"
      :visible="state.showTriggerPanel"
      @update:visible="state.showTriggerPanel = $event"
      custom-class="!min-h-0 py-0"
    >
      <div class="text-center">
        <div
          class="h-12 flex items-center justify-center cursor-pointer"
          @click="handleTriggerClick($event, state.triggerClickType === 'video' ? 3 : 2)"
        >
          {{ t('ui.uploadList.shoot') }}
        </div>
        <div class="h-12 flex items-center cursor-pointer" @click="handleTriggerClick($event, 1)">
          {{ t('ui.uploadList.selectFromAlbum') }}
        </div>
        <div class="h-2 bg-color-bg-2"></div>
        <div class="h-12 flex items-center cursor-pointer" @click="state.showTriggerPanel = false">
          {{ t('ui.uploadList.cancel') }}
        </div>
      </div>
    </tiny-action-sheet>
    <tiny-record :isHwh5="isHwh5" @trigger-click="handleTriggerClick" v-model="state.showAudioPanel"></tiny-record>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
import Progress from '@opentiny/vue-progress'
import ActionSheet from '@opentiny/vue-action-sheet'
import Record from '@opentiny/vue-record'
import {
  IconError,
  IconCueL,
  IconEyeopen,
  IconDownload,
  IconDel,
  IconRefres,
  IconRight,
  IconPause,
  IconAudio,
  IconEllipsis,
  IconExcelType,
  IconFileType,
  IconOtherType,
  IconPdfType,
  IconPictureType,
  IconPptType,
  IconTextType,
  IconVideoType,
  IconWordType,
  IconZipType,
  IconCloudUpload
} from '@opentiny/vue-icon'
import Modal from '@opentiny/vue-modal'
import type { IUploadListApi } from '@opentiny/vue-renderless/types/upload-list.type'

export default defineComponent({
  name: $prefix + 'UploadList',
  components: {
    TinyProgress: Progress,
    IconError: IconError(),
    IconCueL: IconCueL(),
    IconEyeopen: IconEyeopen(),
    IconDownload: IconDownload(),
    IconDel: IconDel(),
    IconRefres: IconRefres(),
    IconRight: IconRight(),
    IconPause: IconPause(),
    IconAudio: IconAudio(),
    IconEllipsis: IconEllipsis(),
    TinyActionSheet: ActionSheet,
    IconExcelType: IconExcelType(),
    IconFileType: IconFileType(),
    IconOtherType: IconOtherType(),
    IconPdfType: IconPdfType(),
    IconPictureType: IconPictureType(),
    IconPptType: IconPptType(),
    IconTextType: IconTextType(),
    IconVideoType: IconVideoType(),
    IconWordType: IconWordType(),
    IconZipType: IconZipType(),
    IconCloudUpload: IconCloudUpload(),
    TinyRecord: Record
  },
  props: [
    ...props,
    'disabled',
    'display',
    'files',
    'filesIcon',
    'handlePreview',
    'isEdm',
    'isFolder',
    'listType',
    'openDownloadFile',
    'srcList',
    'isFolderTitle',
    'listOption',
    'maxNameLength',
    'scale',
    'showName',
    'types',
    'edm',
    'displayOnly',
    'handleDownloadFile',
    'handleReUpload',
    'isDragover',
    'selected',
    'triggerClick',
    'isHwh5',
    'triggerPlay',
    'mode',
    'lockScroll'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal } }) as unknown as IUploadListApi
  }
})
</script>
