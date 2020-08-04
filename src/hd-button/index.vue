<template>
  <button
    class="button"
    :class="{ primary: type == 'primary', default: type == 'default' }"
    @click="btnClick"
    :style="{ backgroundColor: backgroundColor, color: color }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'hd-button',

  props: {
    backgroundColor: String,
    color: String,
    type: {
      type: String,
      default: 'primary'
    }
  },

  methods: {
    btnClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss">
.button {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  min-width: 128px;
  height: 32px;
  line-height: 32px;
  border: none;
  border-radius: 16px;
  outline: none;
  background-color: white;
  &:active {
    outline: none;
  }
  &.default {
    color: rgb(102, 102, 102);
    background-color: rgb(248, 248, 248);
  }
  &.primary {
    color: rgb(51, 51, 51);
    background-color: rgb(253, 205, 0);
  }
}
</style>
