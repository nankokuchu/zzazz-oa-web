<template>
  <div class="container">
    <van-nav-bar
      title="基本情報"
    />
    <div class="detail-wrap">
      <div class="item">
        <h5>氏名(カナ：{{ user.name }}</h5>
      </div>
      <div class="item">
        <h5>電話番号：{{ user.phone }}</h5>
      </div>
      <div class="item">
        <h5>所属拠点：{{ user.deptName }}</h5>
      </div>
      <div class="item">
        <h5>ポジション：{{ user.postName }}</h5>
      </div>
    </div>

  </div>
</template>

<script>
import api from '@/api/userInfo'
export default {
  name: "process",

  data() {
    return {
      user: {}
    };
  },

  created(){
    this.fetchData();
  },

  methods: {
    fetchData() {
      // debugger
      api.getCurrentUser().then(response => {
        this.user = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;

  .detail-wrap {
    .item {
      h5 {
        color: #838485;
        margin: 10px;
      }

      p {
        color: #1B1F22;
        margin: 0;
      }
    }
  }
}
</style>
