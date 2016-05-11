<template>
  <div id="example-1" class="parent">
    <span>
      Hello {{name}}!
    </span>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        name: 'Vue.js'
      }
    }
  }

</script>
<style>
  .parent{
    height: 100px;
    background-color: #FEFCA4;
    border-radius: 15px;
  }

  .parent span{
    display: block;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>
