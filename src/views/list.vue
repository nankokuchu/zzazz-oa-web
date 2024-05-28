<template>
  <div class="container">
    <van-nav-bar
        title="認証リスト"
    />
    <van-tabs v-model="activeIndex" @click="tabSwitch">
      <van-tab
          v-for="(item,key) in tabList"
          :key="key"
          :title="item.title"
      >
      </van-tab>
    </van-tabs>

    <div class="list-wrap">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="以上です!!!!"
            @load="onLoad"
            :immediate-check="false"
        >
          <van-cell v-for="item in list" :key="item.id" @click="info(item.id, item.taskId)">
            <template slot="default">
              <div class="item-wrap">
                <div class="item-header">
                  <img src="https://static.dingtalk.com/media/lALOnahFD80CgM0CgA_640_640.png_450x10000q90.jpg" alt="">
                  <h3>{{ item.title }}</h3>
                  <span>{{ item.createTime }}</span>
                </div>
                <div class="item-block">
                  <p v-for="(value,key) in item.formValues.formShowData" v-if="key !== '图片'">{{ key }}：<span
                      v-html="value"></span></p>
                </div>
                <div class="item-status">
                  <span :class="item.status === 1 ? '承認中' : item.status === 2 ? 'pass' : 'refused'">{{
                      item.status === 1 ? '承認中' : item.status === 2 ? '承認' : '否認'
                    }}</span>
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import api from '@/api/process'

export default {
  name: "process",

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,

      pageNo: 1,
      pageSize: 10,
      pages: 1,

      activeIndex: 0,
      tabList: [
        {title: "承認待ち",},
        {title: "承認済み",},
        {title: "承認申請",}
      ]
    };
  },

  created() {
    this.activeIndex = parseInt(this.$route.params.activeIndex);
    this.onLoad()
  },

  methods: {
    tabSwitch() {
      //tabの切り替え
      this.list = []
      this.pageNo = 1
      this.finished = false

      setTimeout(() => {
        if (!this.finished) {
          this.onLoad();
        }
      }, 500);
    },

    onLoad() {
      if (this.activeIndex === 0) {
        this.findPending()
      }
      if (this.activeIndex === 1) {
        this.findProcessed()
      }
      if (this.activeIndex === 2) {
        this.findStarted()
      }
    },

    onRefresh() {
      this.finished = false;
      this.pageNo = 1;
      this.loading = true;
      this.onLoad();
    },

    findPending() {
      api.findPending(this.pageNo, this.pageSize).then(response => {
        console.log(response.data);
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i=0;i<response.data.records.length;i++) {
          let item = response.data.records[i]
          item.formValues = JSON.parse(item.formValues)
          this.list.push(item);
        }
        this.pages = response.data.pages;

        this.loading = false;
        if(this.pageNo >= this.pages) {
          this.finished = true;
        }

        this.pageNo++;
      });
    },


    findProcessed() {
      api.findProcessed(this.pageNo, this.pageSize).then(response => {
        console.log(response.data);
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i=0;i<response.data.records.length;i++) {
          let item = response.data.records[i]
          item.formValues = JSON.parse(item.formValues)
          this.list.push(item);
        }
        this.pages = response.data.pages;

        this.loading = false;
        if(this.pageNo >= this.pages) {
          this.finished = true;
        }

        this.pageNo++;
      });
    },

    findStarted() {
      console.log(this.pageNo)
      api.findStarted(this.pageNo, this.pageSize).then(response => {
        console.log(response.data);
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i=0;i<response.data.records.length;i++) {
          let item = response.data.records[i]
          item.formValues = JSON.parse(item.formValues)
          this.list.push(item);
        }
        this.pages = response.data.pages;

        this.loading = false;
        if(this.pageNo >= this.pages) {
          this.finished = true;
        }

        this.pageNo++;
      });
    },

    info(id, taskId) {
      this.$router.push({path: '/show/' + id + '/' + taskId})
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-nav-bar {
  background: #1D1E20;
}

/deep/ .van-nav-bar__title {
  color: #fff;
}

.container {
  padding-bottom: 50px;

  .list-wrap {
    margin-top: 4px;
    border-top: 1px solid #ebedf0;
  }

  .item-wrap {
    font-size: 12px;
    color: #A7A8A9;

    .item-header {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin-right: 4px;
      }

      h3 {
        flex: 1;
        font-size: 15px;
        color: #000;
        padding: 0;
        margin: 0;
      }

    }

    .item-block {
      padding: 4px 0;
      font-size: 14px;

      p {
        padding: 0;
        margin: 0;
        line-height: 20px;
      }
    }

    .item-status {
      .pass {
        color: #4CB971;
      }

      .refused {
        color: #EB8473;
      }
    }
  }
}
</style>
