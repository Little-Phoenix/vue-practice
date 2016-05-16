<template>
  <div class="parent" id="todoList">
    <div class="title">
      todos
    </div>
    <div class="content">
      <div class="inputDiv">
        <div class="allOperateDiv">
        </div>
        <input type="text" autofocus autocomplete="off" placeholder="What needs to be done?" @keyup.enter="addTodo($event)"/>
      </div>

      <div class="listDiv">
        <div class="oneDiv" v-for="one in list">
          <div class="left">
            <input type="checkbox" :checked="!one.completed" id="{{$index}}" />
          </div>
          <div class="center" :class="one.completed?'':'complete'">
            {{one.title}}
          </div>
          <div class="right">
          </div>
        </div>
      </div>

      <div>
      </div>

      <div>
    </div>
    <div class="footer">
      <p>write by feng</p>
    </div>
  </div>
</template>

<script>
  var ls = window.localStorage
  var request = require('request')
  export default{
    data () {
      return {
        list: []
      }
    },
    methods: {
      addTodo: function ($event) {
        var value = $event.target.value
        var list = JSON.parse(ls.getItem('todoList') || '[]')
        list.push({'title': value, 'completed': true})
        this.list = list
        ls.setItem('todoList', JSON.stringify(list))
        $event.target.value = ''
      },
      init: function () {
        this.list = JSON.parse(ls.getItem('todoList') || '[]')
      },
      test: function () {
        var option = {
          url: 'https://api.cn.ronghub.com/user/tag/set.json',
          headers: {
            'App-Key': 'uwd1c0sxdlx2',
            nonce: 14314,
            timestamp: new Date().getTime(),
            signature: '890b422b75c1c5cb706e4f7921df1d94e69c17f4'
          },
          form: {
            userId: '31232',
            tags: ['bg', '男']
          }
        }
        console.log('ds')
        request.postAsync(option)
      }
    },
    ready: function () {
      this.init()
      this.test()
    }
  }
</script>

<style>
  #todoList {
    background-color: #F5F5F5;
    height: 400px;
    font-family: Microsoft YaHei;
  }

  #todoList .title{
    color: #EAD7D7;
    font-size: 76px;
    text-align: center;
    padding-top: 10px;
  }

  #todoList .content{
    margin-bottom: 30px;
  }

  #todoList .allOperateDiv, .left{
    width: 50px;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 50px;
  }

  #todoList .content .complete{
    color: #d9d9d9;
    text-decoration: line-through;
  }

  #todoList .content .left{
    width: 66px;
  }

  #todoList .content .center{

  }

  #todoList .content .inputDiv, .oneDiv{
    height: 50px;
    border: 1px solid #E6E6E6;
    background-color: #fff;
    margin: 0 20px;
    box-shadow: -5px 5px 40px #888;
    padding: 0;
  }

  #todoList .inputDiv input{
    border: none;
    margin: 0px;
    padding: 16px;
    width: 70%;
    font-size: 16px;
    outline: none;
  }

  #todoList .inputDiv input:focus{
    border: none;
  }

  #todoList .oneDiv{
    box-shadow: none;
    border-top: 0px;
    font-size: 16px;
    line-height: 50px;
  }

  #todoList input[type='checkbox']{
    height: 40px;
    width: 40px;
    border: none;
    border-radius: 10px;
    appearance: none;
    outline: none;
  }

  #todoList input[type='checkbox']:checked:after{
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')
  }

  #todoList input[type='checkbox']::after{
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>')
  }

  #todoList .footer{
    text-align: center;
    font-size: 8px;
  }

</style>
