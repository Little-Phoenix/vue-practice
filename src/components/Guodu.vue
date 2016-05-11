<template>
  <div id="example-1" class="parent">
    <span>过渡1</span>
    <div v-if="show" transition="expand"></div>
    <button @click="testMethod">测试</botton>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        show: false
      }
    },
    methods: {
      testMethod: function () {
        this.show = !this.show
      }
    },
    transitions: {
      expand: {
        beforeEnter: function (el) {
          console.log('beforeEnter')
        },
        enter: function (el) {
          console.log('enter')
        },
        afterEnter: function (el) {
          console.log('afterEnter')
        },
        enterCancelled: function (el) {
          console.log('enterCancelled')
        },
        beforeLeave: function (el) {
          console.log('beforeLeave')
        },
        leave: function (el) {
          console.log('leave')
        },
        afterLeave: function (el) {
          console.log('afterLeave')
        },
        leaveCancelled: function (el) {
          console.log('leaveCancelled')
        }
      }
    }
  }

</script>
<style>
  .parent{
    margin-top: 10px;
  }
  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }

  .expand-enter, .expand-leave{
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

</style>
