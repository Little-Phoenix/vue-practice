<template>
  <div class='parent' id="editor">
    <textarea v-model="input" debonuce="300"></textarea>
    <div v-html="input | marked">
    </div>
  </div>
</template>
<script>
  var marked = require('marked') // 此处需要采用npm install marked进行安装
  export default {
    data () {
      return {
        input: '# hello'
      }
    },
    filters: {
      marked: marked
    }
  }
</script>
<style>
  #editor{

    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }
  textarea, #editor div{
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    risize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
