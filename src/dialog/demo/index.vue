<template>
  <demo-section>
    <demo-block title="toast">
      <hd-button @click="showDialog" type="primary" style="margin: 15px;">
        title
      </hd-button>
      <hd-button style="margin: 15px;" @click="showDialog1"
        >enableAnimation</hd-button
      >
       <hd-button style="margin: 15px;" @click="showDialog2"
        >duration</hd-button
      >
      <hd-button style="margin: 15px;" @click="showDialog3"
        >warning</hd-button
      >
    </demo-block>

    <demo-block title="动画效果">
      
    </demo-block>
    <demo-block title="消失时间">
     
    </demo-block>
    <demo-block title="图标">
      
    </demo-block>
  </demo-section>
</template>
<script>
import dialog from '../index.js';
export default {
  methods: {
    showDialog() {
      dialog.toast({
        title: '课程未解锁'
      });
    },
    showDialog1() {
      dialog.toast({
        title: '课程未解锁',
        enableAnimation: true
      });
    },
    showDialog2() {
      dialog.toast({
        title: '课程未解锁',
        duration: 3000
      });
    },
    showDialog3() {
      dialog.toast({
        title: '课程未解锁',
        warning: true
      });
    }
  }
};
</script>
