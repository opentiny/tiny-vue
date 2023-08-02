<template>
  <div>
    <div
      v-if="listType === 'text'"
      ref="upload-list"
      class="border-dashed border-color-border"
      :class="[files.length ? 'sm:border-0' : 'sm:border-t']"
    >
      <ul v-if="files.length">
        <li
          ref="upload-list-li"
          class="group relative sm:inline-block min-w-full sm:min-w-[26.25rem] p-3 mb-2 mr-2 border-0.5 sm:border border-color-border-separator rounded hover:bg-color-bg-2"
          :class="{ 'sm:border-color-brand border-color-border-separator': file.uid === (selected && selected.uid) }"
          v-for="file in files"
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
                  class="absolute w-16 h-16 top-1/2 right-0 bg-black origin-right opacity-50"
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
                  class="absolute w-16 h-16 top-1/2 left-0 bg-black origin-left opacity-50"
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
            <div class="inline-block w-[calc(100%-2.8rem)] text-xs">
              <div class="flex h-4 mr-12 sm:mr-0">
                <div
                  class="flex-1 sm:mr-6 text-sm sm:text-xs leading-[0.875rem] sm:leading-3 text-color-text-primary overflow-hidden text-ellipsis whitespace-nowrap"
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
                </div>
                <div class="sm:invisible absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
                  <icon-ellipsis
                    v-if="~['success', 'downloading'].indexOf(file.status)"
                    @click="showOperatePanel({ file })"
                    class="fill-color-text-primary"
                  />
                  <icon-error
                    v-if="!displayOnly && ~['uploading', 'fail'].indexOf(file.status)"
                    class="fill-color-none-hover"
                    @click.stop="remove({ file })"
                  ></icon-error>
                </div>
              </div>
              <div class="flex h-4 leading-5 mr-12 sm:mr-0">
                <span
                  :class="[
                    'font-light sm:font-normal',
                    ~['fail'].indexOf(file.status) ? 'text-color-error-hover' : 'text-color-text-placeholder'
                  ]"
                  >{{
                    ~['fail'].indexOf(file.status)
                      ? t('ui.uploadList.uploadFailed')
                      : `${
                          ~['uploading'].indexOf(file.status)
                            ? `${Math.round(((file.size * file.percentage) / 100 / 1024 / 1024) * 10) / 10}M/`
                            : ''
                        }${Math.round((file.size / 1024 / 1024) * 10) / 10}M`
                  }}</span
                >
                <slot
                  name="assist-content"
                  class="flex-1 ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-right text-color-none"
                >
                </slot>
              </div>
            </div>
          </slot>
        </li>
      </ul>
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
        <ul class="h-full" v-else>
          <li v-for="file in files" :key="file.uid" tabindex="0">
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
                      class="absolute w-16 h-16 top-1/2 right-0 bg-black origin-right opacity-50"
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
                      class="absolute w-16 h-16 top-1/2 left-0 bg-black origin-left opacity-50"
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
                <div class="mt-3 mb-2">
                  {{ file.name }}
                </div>
                <div>
                  <span class="text-color-brand cursor-pointer" @click.stop="remove({ file })">{{
                    t('ui.uploadList.delete')
                  }}</span>
                </div>
              </div>
            </slot>
          </li>
        </ul>
      </div>
    </div>
    <ul
      v-else
      :class="[
        { 'grid grid-cols-3 gap-x-4 sm:grid-cols-[repeat(auto-fit,6rem)]': listType === 'picture-card' },
        showName ? 'gap-y-8' : 'gap-y-4'
      ]"
    >
      <li
        :class="[
          'group relative',
          { 'hidden': listType === 'picture-single' && index },
          listType === 'picture-single' ? `w-24 h-24 sm:w-[${5 * scale}rem] sm:h-[5rem]` : 'w-full pt-[100%]'
        ]"
        v-for="(file, index) in files"
        :key="file.uid"
        tabindex="0"
        @keydown.delete="!disabled && remove({ file })"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <slot :file="file">
            <icon-error
              v-if="!displayOnly && (file.status !== 'uploading' || ~['video', 'audio'].indexOf(sourceType))"
              class="absolute w-5 h-5 -top-1.5 fill-color-none-hover hover:cursor-pointer z-[1]"
              :class="[
                { 'sm:hidden -top-1.5': !~['video', 'audio'].indexOf(sourceType) },
                listType === 'picture-single' ? '-right-1.5' : '-right-1.5'
              ]"
              @click.stop="remove({ file })"
            ></icon-error>
            <div
              class="relative w-full h-full after:absolute after:w-full after:h-full after:left-0 after:top-0 after:rounded after:bg-black after:opacity-50"
              :class="[
                !~['uploading', 'fail'].indexOf(file.status) ? 'after:hidden sm:after:group-hover:block' : '',
                { 'mb-7': listType === 'picture-card' && showName },
                ~['video', 'audio'].indexOf(sourceType) ? 'after:opacity-0' : 'after:opacity-50'
              ]"
            >
              <video
                v-if="sourceType === 'video'"
                :ref="'video' + (file.uid || index)"
                class="w-full h-full border rounded"
              >
                <source :src="file.url" type="video/mp4" />
                <source :src="file.url" type="video/ogg" />
                <source :src="file.url" type="video/webm" />
              </video>
              <div
                v-else-if="sourceType === 'audio'"
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
                    class="inline-block w-[calc(100%-2.8rem)]"
                    :percentage="parsePercentage(file.percentage)"
                    :show-text="false"
                    :stroke-width="4"
                    color="#fff"
                  />
                  <div class="mt-3 text-white text-xs">
                    {{
                      ~['video', 'audio'].indexOf(sourceType)
                        ? t('ui.uploadList.uploading')
                        : t('ui.uploadList.pictureUploading')
                    }}
                  </div>
                </div>
                <div v-else-if="~['fail'].indexOf(file.status)">
                  <span class="block sm:group-hover:hidden">
                    <icon-cue-l class="w-6 h-6 fill-white" />
                    <div class="mt-1 text-white text-xs">{{ t('ui.uploadList.uploadFailed') }}</div>
                  </span>
                  <span class="hidden sm:group-hover:block">
                    <icon-refres
                      v-if="isEdm ? true : handleReUpload"
                      class="w-6 h-6 mr-2 fill-white"
                      @click="reUpload(file)"
                    />
                    <icon-del
                      v-if="!displayOnly && listType !== 'picture-single'"
                      class="w-6 h-6 fill-white"
                      @click.stop="remove({ file })"
                    />
                  </span>
                </div>
                <div v-else>
                  <div :class="['hidden', { 'sm:group-hover:block': !~['video', 'audio'].indexOf(sourceType) }]">
                    <icon-eyeopen v-if="handlePreview" class="w-6 h-6 mr-2 fill-white" @click="handlePreview(file)" />
                    <icon-download
                      v-if="handleDownloadFile"
                      class="w-6 h-6 mr-2 fill-white"
                      @click="handleDownloadFile(file)"
                    />
                    <icon-del v-if="!displayOnly" class="w-6 h-6 fill-white" @click.stop="remove({ file })" />
                  </div>
                  <div
                    v-if="sourceType === 'video'"
                    class="inline-block w-8 h-8 text-center bg-black rounded-full group-hover:bg-opacity-30"
                    :class="!file.isPlay ? 'bg-opacity-30' : ' bg-opacity-0'"
                  >
                    <icon-right
                      v-show="!file.isPlay"
                      class="w-4 h-4 mt-2 fill-white"
                      @click="play({ file, index, type: 'video' })"
                    />
                    <icon-pause
                      v-show="file.isPlay"
                      class="w-6 h-6 hidden sm:group-hover:inline-block mt-1 fill-white"
                      @click="pause({ file, index, type: 'video' })"
                    />
                  </div>
                  <div v-if="sourceType === 'audio'">
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
      </li>
      <li
        class="relative"
        :class="[
          listType === 'picture-single' ? `w-24 h-24 sm:w-[${5 * scale}rem] sm:h-[5rem]` : 'pt-[100%]',
          { 'hidden': displayOnly && files.length },
          { 'hidden': !displayOnly && listType === 'picture-single' && files.length }
        ]"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <slot name="upload"></slot>
        </div>
      </li>
    </ul>
    <tiny-action-sheet
      :show-header="false"
      :visible="state.showPanel"
      @update:visible="state.showPanel = $event"
      custom-class="min-h-[0%] py-0"
    >
      <template>
        <ul class="text-center">
          <li
            v-if="handleDownloadFile"
            class="h-[3.75rem] leading-[3.75rem] border-b border-color-border-separator cursor-pointer"
            @click="
              () => {
                state.showPanel = false
                handleDownloadFile(state.currentFile)
              }
            "
          >
            {{ t('ui.uploadList.download') }}
          </li>
          <li
            v-if="handlePreview"
            class="h-[3.75rem] leading-[3.75rem] border-b border-color-border-separator cursor-pointer"
            @click="
              () => {
                state.showPanel = false
                handlePreview(state.currentFile)
              }
            "
          >
            {{ t('ui.uploadList.preview') }}
          </li>
          <li
            v-if="!displayOnly"
            class="h-[3.75rem] leading-[3.75rem] cursor-pointer"
            @click.stop="
              () => {
                state.showPanel = false
                remove({ file: state.currentFile })
              }
            "
          >
            {{ t('ui.uploadList.delete') }}
          </li>
          <li class="h-2 bg-color-bg-2"></li>
          <li class="h-[3.75rem] leading-[3.75rem] cursor-pointer" @click="state.showPanel = false">
            {{ t('ui.uploadList.cancel') }}
          </li>
        </ul>
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/upload-list/vue'
import Progress from '@opentiny/vue-progress'
import ActionSheet from '@opentiny/vue-action-sheet'
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
    IconCloudUpload: IconCloudUpload()
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
    'sourceType',
    'edm',
    'displayOnly',
    'handleDownloadFile',
    'handleReUpload',
    'isDragover',
    'selected'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { Modal } })
  }
})
</script>
