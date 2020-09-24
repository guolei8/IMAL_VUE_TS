<template>
    <div class="synchro">
    <div class="synchro_title">
       <el-button @click="MallMessage">应用商城</el-button>
    </div>
    <div class="synchro_list">
      <div class="synchro_list_btn">同步</div>
      <div class="synchro_list_table">
        <el-table :data="cardDataList" stripe>
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column property="repo" label="应用名称"></el-table-column>
          <el-table-column property="repo" label="边缘\云端" align="center" header-align="center">
            <template>
              <div>
                <span class='edge'></span>
                <span class='cloud'></span>
              </div>
            </template>
          </el-table-column>
          <el-table-column property="local_tag" label="本地 版本号" class='table-version' align="center" header-align="center"></el-table-column>
          <el-table-column prop="remote_tag" label="OSS 版本号" align="center" header-align="center">
          </el-table-column>
          <el-table-column property="removeing" label="操作" align="center" header-align="right">
            <template v-slot:default="row">
              <div class='table-right'>
                <div class='table-right_removeing' v-show="row.row.status === 0">
                  <div class="loading_whole"></div>
                  <span>同步中...</span>
                </div>
                <span v-show="row.row.status === 1">已同步</span>
                <i :class="['table-right_blue',{table_right_gray:row.row.status === 1}]" @click="clickRemove(row)"></i>
              </div>
            </template>
          </el-table-column>
      </el-table>
    </div>
      <!-- 分页 -->
      <div class="table-div">
          <el-pagination
          background
          :page-size='9'
          :current-page.sync="currentPage"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { SystemApi } from '@/api';
@Component({
  name: 'Synchro'
})
export default class extends Vue {
  private cardDataList: object[] = []

  private currentPage:number = 1
  private total:number = 1

  private MallMessage() {
    console.log('提示')
  }
  mounted() {
    this.getInfo(this.currentPage)
  }
  // 获取制品管理的信息
  private async getInfo(currentPage:number) {
    const data = await SystemApi.getInfo(currentPage)
    console.log(data)
    this.cardDataList = data.data.content
    this.total = data.data.pages
  }
  private handleCurrentChange(val:number) {
    this.currentPage = val
    this.getInfo(this.currentPage)
  }
  private clickRemove(rows: any) {
    let $index = rows.$index,
      item = rows.row
    if (item.status === 0 || item.status === 1) {
      // 0代表升级中 1代表已经升级 2 代表待升级
      return
    } else {
      //调接口 去升级
      // this.cardDataList[$index].status = 1
      //调取最新的list
    }
  }
}
</script>

<style lang='less'>
.synchro {
  font-size: 16px;
  color: #d0d0d0;
  .synchro_title {
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 27px;
    span {
      cursor: pointer;
    }
    .synchro_title_high_active {
      color: #404040;
      height: 30px;
      border-bottom: 4px solid #1792e5;
    }
  }
  .synchro_list {
    padding: 16px 16px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    .synchro_list_btn {
      width: 56px;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      text-align: center;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      cursor: pointer;
    }
    .synchro_list_table {
      .edge {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(../../assets/images/card/edge.png) no-repeat center;
        margin-right: 10px;
      }
      .cloud {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(../../assets/images/card/cloud.png) no-repeat center;
      }
      .table-right {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        .table-right_blue {
          width: 16px;
          height: 16px;
          padding-left: 16px;
          border-left: 1px solid #ccc;
          background: url(../../assets/images/list/B_loop.png) no-repeat center;
          margin-left: 16px;
        }
        .table_right_gray {
          width: 16px;
          height: 16px;
          padding-left: 16px;
          border-left: 1px solid #ccc;
          background: url(../../assets/images/list/G_loop.png) no-repeat center;
          margin-left: 16px;
        }
        .table-right_removeing {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .loading_whole {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border-left: 1px solid #1792e5;
            border-right: 1px solid #1792e5;
            border-top: 0px;
            border-bottom: 0px;
            animation: Loading 0.3s linear infinite;
          }
          @keyframes Loading {
            0% {
              -webkit-transform: rotate(0deg);
            }
            50% {
              -webkit-transform: rotate(180deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
        }
      }
    }
    .table-div {
      padding-top: 20px;
      text-align: right;
    }
  }
}
</style>
