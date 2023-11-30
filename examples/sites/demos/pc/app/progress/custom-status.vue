<template>
  <div class="custom-status">
    <div class="error">
      <div class="tiny-progress-demo">
        <span class="tiny-progress-demo-title">失败:</span>
        <div class="tiny-progress-content">
          <div class="tiny-progress-content-des">
            <div class="tiny-progress-content-des-title">安装进度</div>
          </div>
          <tiny-progress class="progress" type="line" :percentage="percentage" status="exception"></tiny-progress>
          <div class="tiny-progress-demo-status">
            <icon-operationfaild-l class="tiny-progress-demo-status-icon"></icon-operationfaild-l>
            <div class="tiny-progress-demo-status-des">上传失败</div>
          </div>
        </div>
      </div>

      <div class="loading">
        <div class="tiny-progress-demo">
          <span class="tiny-progress-demo-title">上传中:</span>
          <div class="tiny-progress-content">
            <div class="tiny-progress-content-des">
              <div class="tiny-progress-content-des-title">安装进度</div>
              <div class="tiny-progress-content-des-loading">
                <div class="tiny-progress-content-des-stop" @click="stop">暂停</div>
                <div class="tiny-progress-content-des-on" @click="cancel">取消</div>
              </div>
            </div>
            <tiny-progress class="progress" type="line" :percentage="percentage1"></tiny-progress>
          </div>
        </div>
      </div>

      <div class="reloading">
        <div class="tiny-progress-demo">
          <span class="tiny-progress-demo-title">失败可重试:</span>
          <div class="tiny-progress-content">
            <div class="tiny-progress-content-des">
              <div class="tiny-progress-content-des-title">安装进度</div>
            </div>
            <tiny-progress class="progress" type="line" :percentage="percentage2" status="exception"></tiny-progress>
            <div class="tiny-progress-demo-status">
              <icon-operationfaild-l class="tiny-progress-demo-status-icon"></icon-operationfaild-l>
              <div class="tiny-progress-demo-status-des">
                安装失败，请<i class="tiny-progress-demo-status-des-again" @click="reload">重试</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="success">
        <div class="tiny-progress-demo">
          <span class="tiny-progress-demo-title">成功:</span>
          <div class="tiny-progress-content">
            <div class="tiny-progress-content-des">
              <div class="tiny-progress-content-des-title">安装进度</div>
            </div>
            <tiny-progress class="progress" type="line" :percentage="percentage3" status="success"></tiny-progress>
            <div class="tiny-progress-demo-status">
              <icon-successfull class="tiny-progress-demo-status-icon"></icon-successfull>
              <div class="tiny-progress-demo-status-des">安装成功</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from '@opentiny/vue'
import { iconOperationfaildL, iconSuccessful } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress: Progress,
    IconOperationfaildL: iconOperationfaildL(),
    IconSuccessfull: iconSuccessful()
  },
  data() {
    return {
      percentage: 50,
      percentage1: 0,
      process1: null,
      percentage2: 0,
      process2: null,
      percentage3: 100
    }
  },
  mounted() {
    this.getTimer1()
    this.getTimer2()
  },
  methods: {
    stop() {
      clearTimeout(this.process1)
    },
    cancel() {
      clearTimeout(this.process1)
      this.percentage1 = 0
    },
    getTimer1() {
      var that = this

      this.process1 = setInterval(() => {
        that.percentage1 += 5

        if (that.percentage1 === 100) {
          clearTimeout(that.process1)
        }
      }, 300)
    },
    reload() {
      this.percentage2 = 0
      location.reload()
    },
    getTimer2() {
      var that = this
      this.process2 = setInterval(() => {
        that.percentage2 += 5

        if (this.percentage2 == 50) {
          clearTimeout(this.process2)
        }
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
.error {
  .tiny-progress-demo {
    display: flex;
  }
  .tiny-progress-content {
    flex: 1;
  }
  .tiny-progress-demo-status {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .tiny-progress-demo-status-icon {
    fill: #e02128;
  }
  .tiny-progress-demo-status-des {
    display: inline-block;
    margin-left: 8px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-content-des {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .tiny-progress-content-des-title {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-demo-title {
    display: flex;
    margin-right: 40px;
    color: #aeaeae;
    align-items: center;
    font-size: 12px;
  }
}

.loading {
  margin-top: 20px;
  .tiny-progress-demo {
    display: flex;
  }
  .tiny-progress-content {
    flex: 1;
  }
  .tiny-progress-demo-status {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .tiny-progress-content-des {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .tiny-progress-content-des-title {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-demo-title {
    display: flex;
    margin-right: 40px;
    color: #aeaeae;
    align-items: center;
    font-size: 12px;
  }
  .tiny-progress-content-des-loading {
    display: flex;
    color: #0067d1;
    margin-right: 40px;
    cursor: pointer;
    font-size: 12px;
  }
  .tiny-progress-content-des-stop {
    display: inline-block;
    height: 20px;
    margin-right: 8px;
  }
  .tiny-progress-content-des-on {
    display: inline-block;
    height: 20px;
  }
}

.reloading {
  margin-top: 20px;
  .tiny-progress-demo {
    display: flex;
  }
  .tiny-progress-content {
    flex: 1;
  }
  .tiny-progress-demo-status {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .tiny-progress-demo-status-icon {
    fill: #e02128;
  }
  .tiny-progress-demo-status-des {
    display: inline-block;
    margin-left: 8px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-content-des {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .tiny-progress-content-des-title {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-demo-title {
    display: flex;
    margin-right: 40px;
    color: #aeaeae;
    align-items: center;
    font-size: 12px;
  }
  .tiny-progress-demo-status-des-again {
    margin-left: 4px;
    vertical-align: top;
    cursor: pointer;
    font-style: normal;
    color: #0067d1;
    font-size: 12px;
  }
}

.success {
  margin-top: 20px;
  .tiny-progress-demo {
    display: flex;
  }
  .tiny-progress-content {
    flex: 1;
  }
  .tiny-progress-demo-status {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
  .tiny-progress-demo-status-icon {
    fill: #09aa71;
  }
  .tiny-progress-demo-status-des {
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
  .tiny-progress-content-des {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .tiny-progress-content-des-title {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
  }
  .tiny-progress-demo-title {
    display: flex;
    margin-right: 40px;
    color: #aeaeae;
    align-items: center;
    font-size: 12px;
  }
}
</style>
