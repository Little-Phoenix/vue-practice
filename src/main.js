import Vue from 'vue'
import Lucklist from './Lucklist'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Lucklist },
  method: {
    handleIt: function () {
      console.log('"handleId"')
    }
  },
  ready: function () {
    this.$dispatch('child-msg', 'dsd')
  }
})
