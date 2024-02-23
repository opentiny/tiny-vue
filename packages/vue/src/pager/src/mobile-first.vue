<script lang="tsx">
import { defineComponent, $props } from '@opentiny/vue-common'
import { IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  props: {
    ...$props,
    accurateJumper: {
      type: Boolean,
      default: () => true
    },
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    currentPage: {
      type: Number,
      default: () => 1
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    hideOnSinglePage: Boolean,
    isBeforePageChange: Boolean,
    layout: String,
    mode: String,
    nextText: String,
    pageCount: Number,
    pageSize: {
      type: Number,
      default: () => 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100]
    },
    pagerCount: {
      type: Number,
      validator: (value: number) => (value | 0) === value && value > 2 && value < 22 && value % 2 === 1,
      default: () => 7
    },
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    showTotalLoading: {
      type: Boolean,
      default: () => false
    },
    customTotal: {
      type: [Boolean, String],
      default: () => false
    },
    popperClass: String,
    prevText: String,
    total: Number
  },
  data() {
    return {
      internalCurrentPage: 0,
      internalPageCount: 0,
      internalPageSize: 0,
      internalTotal: 0
    }
  },
  watch: {
    total() {
      this.normalizeState()
    },
    pageSize() {
      this.normalizeState()
    },
    currentPage() {
      this.normalizeState()
    }
  },
  created() {
    this.normalizeState()
  },
  render() {
    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null

    const ChevronLeft = IconChevronLeft()
    const ChevronRight = IconChevronRight()
    const prevDisabled = this.disabled || this.internalCurrentPage <= 1
    const nextDisabled =
      this.disabled || this.internalCurrentPage === this.internalPageCount || this.internalPageCount === 0
    const prevText = this.prevText
    const nextText = this.nextText

    return (
      <div class="flex justify-end">
        <nav class="w-full my-1 mx-0 text-sm block w-fit">
          <ul class="inline-flex m-0 p-0 list-none w-fit">
            <li
              class={[
                'py-0 px-0 cursor-pointer box-border h-8 text-color-brand bg-color-bg-1 select-none flex items-center justify-center relative rounded',
                prevText ? 'w-fit' : 'w-8'
              ]}>
              <button
                type="button"
                class={[
                  'h-8 p-0 border border-solid rounded flex items-center justify-center group',
                  'cursor-pointer border-color-border bg-color-bg-1',
                  prevText ? 'w-fit' : 'w-8',
                  {
                    'disabled:cursor-not-allowed disabled:border-color-border disabled:bg-color-bg-3': prevDisabled,
                    'hover:border-color-brand sm:hover:border-color-border-hover sm:active:border-color-brand':
                      !prevDisabled,
                    'hover:bg-color-fill-6 sm:hover:bg-color-bg-1 sm:active:bg-color-fill-6': !prevDisabled
                  }
                ]}
                disabled={prevDisabled}
                onClick={this.toPrevPage}>
                {prevText ? (
                  <span
                    class={[
                      'inline-block w-fit mx-1 text-color-text-placeholder',
                      {
                        'disabled:text-color-text-primary': prevDisabled,
                        'group-hover:text-color-link sm:group-hover:text-color-text-primary sm:group-active:text-color-link':
                          !prevDisabled
                      }
                    ]}>
                    {prevText}
                  </span>
                ) : (
                  <ChevronLeft
                    class={[
                      'fill-color-fill-7',
                      {
                        'disabled:fill-color-fill-primary': prevDisabled,
                        'group-hover:fill-color-brand sm:group-hover:fill-color-fill-primary sm:group-active:fill-color-brand':
                          !prevDisabled
                      }
                    ]}
                  />
                )}
              </button>
            </li>
            <li class="h-8 text-color-text-primary flex items-center justify-center rounded !mx-4">
              <span class="inline-block my-0 mx-0">
                {this.internalCurrentPage}/{this.internalPageCount}
              </span>
            </li>
            <li
              class={[
                'py-0 px-0 cursor-pointer box-border h-8 text-color-brand bg-color-bg-1 select-none flex items-center justify-center relative rounded',
                nextText ? 'w-fit' : 'w-8'
              ]}>
              <button
                type="button"
                class={[
                  'h-8 p-0 border border-solid rounded flex items-center justify-center group',
                  'cursor-pointer border-color-border bg-color-bg-1',
                  nextText ? 'w-fit' : 'w-8',
                  {
                    'disabled:cursor-not-allowed disabled:border-color-border disabled:bg-color-bg-3': nextDisabled,
                    'hover:border-color-brand sm:hover:border-color-border-hover sm:active:border-color-brand':
                      !nextDisabled,
                    'hover:bg-color-fill-6 sm:hover:bg-color-bg-1 sm:active:bg-color-fill-6': !nextDisabled
                  }
                ]}
                disabled={nextDisabled}
                onClick={this.toNextPage}>
                {nextText ? (
                  <span
                    class={[
                      'inline-block w-fit mx-1 text-color-text-placeholder',
                      {
                        'disabled:text-color-text-primary': nextDisabled,
                        'group-hover:text-color-link sm:group-hover:text-color-text-primary sm:group-active:text-color-link':
                          !nextDisabled
                      }
                    ]}>
                    {nextText}
                  </span>
                ) : (
                  <ChevronRight
                    class={[
                      'fill-color-fill-7',
                      {
                        'disabled:fill-color-fill-primary': nextDisabled,
                        'group-hover:fill-color-brand sm:group-hover:fill-color-fill-primary sm:group-active:fill-color-brand':
                          !nextDisabled
                      }
                    ]}
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  },
  methods: {
    toPrevPage() {
      const callback = () => {
        if (this.internalCurrentPage > 1) {
          this.internalCurrentPage -= 1
          this.$emit('prev-click', this.internalCurrentPage)
          this.$emit('current-change', this.internalCurrentPage)
          this.$emit('update:current-page', this.internalCurrentPage)
          this.$emit('page-change', {
            currentPage: this.internalCurrentPage,
            pageSize: this.internalPageSize,
            total: this.internalTotal
          })
        }
      }

      if (this.isBeforePageChange && this.internalCurrentPage > 1) {
        const newPage = this.internalCurrentPage - 1
        const newPageSize = this.internalPageSize
        const currentPage = this.internalCurrentPage
        const currentPageSize = this.internalPageSize

        this.$emit('before-page-change', { newPage, newPageSize, currentPage, currentPageSize, callback })
      } else {
        callback()
      }
    },
    toNextPage() {
      const callback = () => {
        if (this.internalCurrentPage < this.internalPageCount) {
          this.internalCurrentPage += 1
          this.$emit('next-click', this.internalCurrentPage)
          this.$emit('current-change', this.internalCurrentPage)
          this.$emit('update:current-page', this.internalCurrentPage)
          this.$emit('page-change', {
            currentPage: this.internalCurrentPage,
            pageSize: this.internalPageSize,
            total: this.internalTotal
          })
        }
      }

      if (this.isBeforePageChange && this.internalCurrentPage < this.internalPageCount) {
        const newPage = this.internalCurrentPage + 1
        const newPageSize = this.internalPageSize
        const currentPage = this.internalCurrentPage
        const currentPageSize = this.internalPageSize

        this.$emit('before-page-change', { newPage, newPageSize, currentPage, currentPageSize, callback })
      } else {
        callback()
      }
    },
    normalizeState() {
      const total = this.total > 0 ? this.total : 0
      const pageSize = this.pageSize > 0 ? this.pageSize : 10
      const currentPage = this.currentPage > 0 ? this.currentPage : 1

      this.internalTotal = total
      this.internalPageSize = pageSize
      this.internalPageCount = Math.ceil(total / pageSize)
      this.internalCurrentPage = currentPage > this.internalPageCount ? 1 : currentPage
    }
  }
})
</script>
