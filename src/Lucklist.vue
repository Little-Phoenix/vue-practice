<template>
  <div class="info-div">
    <div class="child" v-show="show" transition="bonuce">
      <ul>
        <li v-for="one in list">{{one.name}} 抽中 {{one.prize}}</li>
      </ul>
    </div>
  </div>
  <div>
    a = {{a}}, b={{b}}
  </div>
  <helloworld></helloworld>
  <guodu></guodu>
</template>

<script>
  import Helloworld from './components/Helloworld.vue'
  import Guodu from './components/Guodu.vue'
  export default{
    computed: {
      b: function () {
        return this.a + 1
      }
    },
    components: {
      helloworld: Helloworld,
      Guodu: Guodu
    },
    data () {
      return {
        toppx: 0,
        a: 1,
        show: true,
        newList: [],
        list: [{name: 'test', prize: 'prize1'},
                {name: 'name2', prize: 'prize2'},
                {name: 'name3', prize: 'prize3'},
                {name: 'name4', prize: 'prize41'},
                {name: 'name4', prize: 'prize42'},
                {name: 'name4', prize: 'prize43'},
                {name: 'name4', prize: 'prize44'},
                {name: 'name4', prize: 'prize45'},
                {name: 'name4', prize: 'prize46'},
                {name: 'name4', prize: 'prize47'},
                {name: 'name4', prize: 'prize48'},
                {name: 'name4', prize: 'prize49'},
                {name: 'name4', prize: 'prize411'},
                {name: 'name4', prize: 'prize412'},
                {name: 'name4', prize: 'prize413'},
                {name: 'name4', prize: 'prize414'},
                {name: 'name4', prize: 'prize415'},
                {name: 'name4', prize: 'prize416'},
                {name: 'name4', prize: 'prize417'},
                {name: 'name4', prize: 'prize418'},
                {name: 'name4', prize: 'prize419'},
                {name: 'name4', prize: 'prize420'},
                {name: 'name4', prize: 'prize421'},
                {name: 'name4', prize: 'prize422'},
                {name: 'name4', prize: 'prize423'},
                {name: 'name4', prize: 'prize424'},
                {name: 'name4', prize: 'prize425'},
                {name: 'name4', prize: 'prize426'},
                {name: 'name4', prize: 'prize427'},
                {name: 'name4', prize: 'prize428'},
                {name: 'name4', prize: 'prize429'},
                {name: 'name4', prize: 'prize430'},
                {name: 'name4', prize: 'prize431'},
                {name: 'name4', prize: 'prize432'},
                {name: 'name4', prize: 'prize433'},
                {name: 'name4', prize: 'prize434'}]
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
        beforeEnter: function (el) {
        },
        beforeLeave: function (el) {
        }
      }

    },
    ready: function () {
      setTimeout(this.add, 5000)
    }
  }
</script>
<style>
  .bonuce-transition{
    animation: mymove 5s linear;
    animation-iteration-count: 1;

  }

  .bonuce-enter{
    display: block;
  }
  .bonuce-leave{
    display: none;
  }

  @keyframes mymove {
    from {margin-top: 0px;}
    to {margin-top: -320px;}
  }

  .info-div{
    height: 100px;
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
