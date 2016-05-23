<template>
  <div class="info-div">
    <div class="child" v-if="true" >
      <ul>
        <li v-for="one in list" id="{{$index}}" :transition="$index<30?'':transitionName">{{one.name}} 抽中 {{one.prize}}</li>
      </ul>
    </div>
  </div>
  <div>
    a = {{a}}, b={{b}}
  </div>
  <helloworld></helloworld>

  <guodu></guodu>

  <todolist><todolist>

  <huiqi></huiqi>
</template>

<script>
  import Helloworld from './components/Helloworld.vue'
  import Guodu from './components/Guodu.vue'
  import todolist from './components/todoList.vue'
  import huiqi from './components/huiqi.vue'

  export default{
    computed: {
      b: function () {
        return this.a + 1
      }
    },
    components: {
      helloworld: Helloworld,
      Guodu: Guodu,
      todolist: todolist,
      huiqi: huiqi
    },
    data () {
      return {
        toppx: 0,
        a: 1,
        transitionName: 'bonuce',
        show: true,
        newList: [],
        list: []
      }
    },
    methods: {
      add: function () {
        this.show = false
        var name1 = 'name1' + new Date().getTime()
        this.list.push({name: name1, prize: 'prize'})
        var name2 = 'name2' + new Date().getTime()
        this.list.push({name: name2, prize: 'prize'})

        setTimeout(this.add, 5000)
      }
    },
    transitions: {
      bonuce: {
        beforeEnter: function (el) {
          if (el.id <= 38) {

          }
        },
        enterCancelled: function (el) {
          el.id <= 30
        },
        beforeLeave: function (el) {
          console.log(el.id)
        },
        leaveCancelled: function (el) {
          el.id <= 30
        }
      }

    },
    ready: function () {
      this.show = true
      setTimeout(this.add, 5000)
    }
  }
</script>
<style>
  .bonuce-transition{
    transition: margin 3s;
    margin-top: -20px;
  }

  .bonuce-enter{
    margin-top: 0px;
  }
  .bonuce-leave{
    margin-top: 0px;
  }

  .info-div{
    height: 500px;
    border: 1px solid #ff0000;
    margin: 0 auto;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
  }

  .info-div .child{
    position: absolute;
    padding: 0 20px;
  }

  .info-div ul{
    padding: 0;
    margin: 0;
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

</style>
