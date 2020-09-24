<template>
  <el-container class="index">
    <el-header>
      <div class="logo"></div>
      <div class="logout">
        <div class="logout_user"><span class='welcome'>欢迎光临,</span><span>{{uname}}</span></div>
        <div @click="logout" class="logout_btn">退出</div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="208px" class="menu-aside">
        <el-menu router :default-active="active" @select="selectMenu" class="el-menu-vertical-demo">
          <el-menu-item-group>
            <template slot="title">系统管理</template>
            <el-menu-item index="/system">
              <i class="menu_i i1"></i>
              <span slot="title">系统状态</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
             <el-menu-item index="/synchro">
              <i class="menu_i i3"></i>
              <span slot="title">制品管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
            <el-menu-item index="/project" disabled>
              <i class="menu_i i4"></i>
              <span slot="title" @click="projectClick">项目管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
            <el-menu-item index="/users" disabled>
              <i class="menu_i i5"></i>
              <span slot="title" @click="projectClick">用户管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="云端应用管理">
            <el-menu-item index="/appManage">
              <i class="menu_i i6"></i>
              <span slot="title">APP管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
            <el-menu-item index="/modelManage">
              <i class="menu_i i7"></i>
              <span slot="title">模型管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="边缘网关、应用管理">
            <el-menu-item index="/gateway">
              <i class="menu_i i2"></i>
              <span slot="title">网关管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
            <el-menu-item index="/tool">
              <i class="menu_i i8"></i>
              <span slot="title">边缘应用管理</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
            <el-menu-item index="/model">
              <i class="menu_i i9"></i>
              <span slot="title">模型</span>
              <span class="icon_arrow"></span>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { LoginModule } from '../store/index'

@Component({
  name: 'Index'
})
export default class extends Vue {
  private active: any = this.$route.path

  private uname: string = ''

  private selectMenu(index: any) {
    this.active = index
  }
  private async logout() {
    try {
      const res = await LoginModule.logout()
      this.$router.push({ path: '/login' })
    } catch (error) {
      this.$message.error('退出失败')
    }
  }
  private projectClick() {
    this.$message('功能正在开发中...')
  }
  private mounted() {
    this.uname = LoginModule.uname
  }
}
</script>

<style lang="less">
.index {
  height: 100%;
  .el-header {
    background-color: #f0f0f0;
    display: flex;
    height: 48px;
    line-height: 48px;
    .logo {
      width: 153px;
      background: url('../assets/images/Index/logo.png') no-repeat center center /
        contain;
    }
    .logout {
      margin-left: auto;
      width: 180px;
      text-align: right;
      font-weight: 700;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: #404040;
      .logout_user {
        display: flex;
        flex-direction: row;
        margin-right: 16px;
      }
      .logout_btn {
        padding: 4px 4px;
        text-align: center;
        font-size: 14px;
        color: #404040;
        width: 40px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #a0a0a0;
        border-radius: 8px;
      }
    }
  }

  .el-aside {
    background-color: #f0f0f0;
  }

  .el-main {
    background-color: #f0f0f0;
  }

  .menu-aside {
    .menu_i {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    .i1 {
      background: url(../assets/images/nav/B1.svg) no-repeat center;
    }
    .is-active .i1 {
      background: url(../assets/images/nav/B1_w.png) no-repeat center;
    }
    .is-active .icon_arrow {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: url(../assets/images/nav/right_arrow_w.png) no-repeat center;
      position: absolute;
      right: 20px;
      top: 26px;
    }
    .is-active .is-active .icon_arrow_b {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: url(../assets/images/nav/right_arrow_b.png) no-repeat center;
      position: absolute;
      right: 15px;
      top: 24px;
    }
    .i2 {
      background: url(../assets/images/nav/B2.svg) no-repeat center;
    }
    .is-active .i2 {
      background: url(../assets/images/nav/B2_w.png) no-repeat center;
    }
    .i3 {
      background: url(../assets/images/nav/B3.svg) no-repeat center;
    }
    .is-active .i3 {
      background: url(../assets/images/nav/B3_w.png) no-repeat center;
    }
    // .el-submenu.is-active.is-opened .i3 {
    //   background: url(../assets/images/nav/B3_w.png) no-repeat center;
    // }
    .el-submenu.is-active.is-opened .el-submenu__title span {
      color: #fff;
    }
    .i4 {
      background: url(../assets/images/nav/B4.svg) no-repeat center;
    }
    .is-active .i4 {
      background: url(../assets/images/nav/B4_w.png) no-repeat center;
    }
    .i5 {
      background: url(../assets/images/nav/B5.svg) no-repeat center;
    }
    .is-active .i5 {
      background: url(../assets/images/nav/B5_w.png) no-repeat center;
    }
    .i6 {
      background: url(../assets/images/nav/B6.svg) no-repeat center;
    }
    .is-active .i6 {
      background: url(../assets/images/nav/B6_w.png) no-repeat center;
    }
    .i7 {
      background: url(../assets/images/nav/B7.svg) no-repeat center;
    }
    .is-active .i7 {
      background: url(../assets/images/nav/B7_w.png) no-repeat center;
    }
    .i8 {
      background: url(../assets/images/nav/B8.svg) no-repeat center;
    }
    .is-active .i8 {
      background: url(../assets/images/nav/B8_w.png) no-repeat center;
    }
    .i9 {
      background: url(../assets/images/nav/B7.svg) no-repeat center;
    }
    .is-active .i9 {
      background: url(../assets/images/nav/B7_w.png) no-repeat center;
    }
  }
  //  el-aside样式的调整
  /deep/ .el-header {
    padding: 0 16px;
  }
  /deep/ .el-main {
    padding: 16px;
  }
  /deep/ .el-aside {
    box-sizing: border-box;
    padding: 16px 8px 16px 16px;
  }
  /deep/ .el-menu {
    background-color: #f0f0f0;
    border-right: none;
  }
  /deep/ .el-menu-item {
    color: #303030;
    background-color: #fff;
    border-radius: 8px;
  }
  /deep/ .el-menu-item.is-active {
    background-color: #1792e5;
    border-radius: 8px;
    font-weight: bold;
    color: #f7f7f7;
  }
  /deep/ .el-submenu.is-active.is-opened .el-submenu__title {
    background-color: #1792e5;
    border-radius: 10px;
    font-weight: bold;
    color: #f7f7f7;
  }
  /deep/ .el-menu--inline .el-menu-item.is-active {
    background-color: #fff;
    color: #1792e5;
  }
  /deep/ .el-submenu > ul {
    background-color: #fff;
  }
  /deep/ .el-menu-item-group > ul {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  /deep/ .el-menu-item:hover {
    background-color: #1792e5;
    color: #f7f7f7;
    font-weight: bold;
  }
  /deep/ .el-submenu__title {
    color: #303030;
    border-radius: 8px;
  }
  /deep/ .el-menu--inline {
    // background-color: rgba(0, 0, 0, 0.2);
    background-color: #303030;
    overflow: hidden;
  }
  /deep/ .el-menu-item-group__title {
    font-size: 16px;
    color: #303030;
    font-weight: bold;
    padding-top: 16px;
  }
  /deep/ .el-submenu__title:hover {
    background-color: #1792e5;
  }
  /deep/ .el-submenu .el-menu-item {
    min-width: 100px;
  }
  /deep/ .el-submenu .el-submenu__title .el-submenu__icon-arrow:before {
    background: url(../assets/images/nav/right_arrow_w.png) no-repeat center;
    transform: rotateZ(10deg);
  }
  /deep/ .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
    background: url(../assets/images/nav/right_arrow_w.png) no-repeat center;
    transform: rotateZ(-90deg);
  }
  /deep/ .el-submenu__title i {
    color: transparent;
  }
}
</style>
