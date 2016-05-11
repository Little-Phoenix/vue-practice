<template>
  <div class="info-div">
    <ul>
      <li v-for="one in list" transition="bonuce">{{one.name}} 抽中 {{one.prize}}</li>
    </ul>
  </div>
  <div>
    a = {{a}}, b={{b}}
  </div>

  <div class="parent">
    <div class="child" v-on:child-msg="handleIt">
    </div>
  </div>
</template>

<script>
  export default{
    computed: {
      b: function () {
        return this.a + 1
      }
    },
    data () {
      return {
        toppx: 0,
        a: 1,
        list: [{name: 'test', prize: 'prize1'},
                {name: 'name2', prize: 'prize2'},
                {name: 'name3', prize: 'prize3'},
                {name: 'name4', prize: 'prize4'}]
      }
    },
    methods: {
      add: function () {
        var name1 = 'name1' + new Date().getTime()
        this.list.push({name: name1, prize: 'prize'})
        var name2 = 'name2' + new Date().getTime()
        this.list.push({name: name2, prize: 'prize'})
        setTimeout(this.add, 5000)
      }
    },
    transitions: {
      bonuce: {
        afterEnter: function (el) {
          console.log('"afterEnter,,,"')
          var newList = this.list.splice(2)
          console.log(newList.length)
          newList.push(this.list[0])
          newList.push(this.list[1])
          this.list = newList
        },
        beforeLeave: function (el) {
          console.log('"beforeLeave..."')
        },
        afterLeave: function (el) {
          console.log('"afterLeave>>"')
        }
      }
    },
    ready: function () {
      setTimeout(this.add, 5000)
    },
    events: {
      childMsg: function () {
        console.log('"child-msg"')
      }
    }
  }
</script>
<style>
  .bonuce-transition{
    animation: mymove 3s;
  }

  .bonuce-enter{

  }

  .bonuce-leave{
    display: none;
  }

  @keyframes mymove {
    from {margin-top: 0px;}
    to {margin-top: -20px;}
  }

  .info-div{
    width: 90%;
    height: 300px;
    border: 1px solid #ff0000;
    margin: 0 auto;
    position: relative;
  }
  .info-div ul{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .info-div ul li{
    height: 20px;
    width: 50%;
    list-style: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    overflow: hidden;
  }

  .parent{
    width: 300px;
    height: 200px;
    background-color: red;
  }

  .child{
    width: 200px;
    height: 100px;
    background-color: blue;
  }
</style>
