<template>
  <div class="dialog-wrapper" v-if="show">
    <div
      class="dialog-popup"
      :class="{
        showIcon: warning,
        show: show && !enableAnimation,
        showAni: show && enableAnimation,
        hide: !show && !enableAnimation,
        hideAni: !show && enableAnimation
      }"
    >
      <span v-show="warning">i</span>
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 1500
    },
    title: {
      type: String,
      default: ''
    },
    enableAnimation: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.showit();
  },
  methods: {
    showit() {
      this.show = true;
      this.clearTimer();
      this.$nextTick(() => {
        this.timer = setTimeout(() => {
          this.hide();
        }, this.duration);
      });
    },
    hide() {
      this.show = false;
      this.clearTimer();
    },
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
};
</script>
<style lang="scss">
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  .dialog-popup {
    width: 210px;
    padding: 5px 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &.showIcon {
      padding: 15px 0;
    }
    &.show {
      display: flex;
    }
    &.showAni {
      animation: show 0.5s;
    }
    &.hide {
      display: hide;
    }
    &.hideAni {
      animation: hide 0.5s;
    }
    span {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 12px;
      display: block;
      border: 1.5px solid white;
      font-size: 24px;
      font-family: PingFangSC-Regular;
      color: white;
      text-align: center;
      line-height: 30px;
    }
    p {
      font-size: 15px;
      font-family: PingFangSC-Regular;
      color: white;
    }
  }
}
@keyframes show {
  0% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
    display: none;
  }
  5% {
    transform: rotate(2deg);
  }
  10%,
  20%,
  30% {
    transform: rotate(-4deg);
  }
  15%,
  25%,
  35% {
    transform: rotate(4deg);
  }
  40% {
    transform: rotate(-2deg);
  }
  45% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
    display: flex;
  }
}
@keyframes hide {
  0% {
    display: flex;
    opacity: 1;
  }
  100% {
    display: none;
    opacity: 0;
  }
}
</style>
