<template>
  <div>
    <div>IDを切り替えテスト</div>
    <button @click="admin()" type="default" size="mini">admin</button>
    <button @click="tanaka()" type="default" size="mini">tanaka</button>
    <button @click="boss()" type="default" size="mini">BOSS</button>
    <button @click="test1()" type="default" size="mini">test1</button>
    <div>現在のtoken：{{ token }}</div>
  </div>
</template>

<script>
export default {
  name: "Test",

  data() {
    return {
      token: ''
    };
  },

  created(){
    this.token = window.localStorage.getItem('token')
  },

  methods: {
    admin() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDexMLY0M7Kw0FEqLU4t8kwBikGYeYm5qUAtiSm5mXlKtQCVvanxQgAAAA.sHQSuozujoDzGlU9N9HqYkt17yfX4LVY4xs17jXJlFGdiX4E5YoFtWfO65EuSVs6JjxkivMdM-_oHV-3DL6R8Q'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    },

    tanaka() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDexMLY0MzYx1lEqLU4t8kxRsjKFMPMSc1OBWkoS8xKzE5VqAeD4Ix1DAAAA.-oQLRDiZWA7AqmUlZ378sZpF2Px_wjNQO7_9os_N8JoiuOx30Tg0WBZeP1brLxSE0yAB751RnaTLPXnx85921A'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    },

    boss() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDexMLY0MzEy0VEqLU4t8kxRsjKDMPMSc1OBWpLyi4uVagFntgRFQQAAAA.BTmaifhbJhaSPu7JLCkFFQM-yK0MgZPCRTwwqdRL-gGzINBrzsmqllsBrYMEIP2tsjdn0CxZcfcloLsqWXGUlA'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    },

    test1() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDexMLY0A1I6SqXFqUWeKUpWUGZeYm4qUEtJanGJoVItAHQ7U4tCAAAA.DK5k_UAegv2yWlHNY9YtbiCRW3OMF3Yt6nrk8p_RpPmDG4hyikX22ValQj3vgSAUXqXogJ9Ivbx1BYWQzxvLpw'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    }
  }
}
</script>
