<template>
  <div class="system">
    <div class="system-title">
      欢迎使用 IMAL
    </div>
    <div class="system-line"></div>
    <div class="system-main">
      <div class="system-main_circle">
        <img src="../../assets/images/Index/machine.png" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
@Component({
  name: 'System'
})
export default class extends Vue {}
</script>

<style lang="less">
.system {
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .system-title {
    font-size: 40px;
    color: #404040;
    line-height: 40px;
  }
  .system-line {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.05);
    margin-top: 16px;
  }
  .system-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .system-main_circle {
      margin-top: 260px;
      img {
        width: 320px;
        height: 200px;
      }
    }
  }
}
</style>
