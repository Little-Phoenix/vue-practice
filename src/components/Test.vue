<template>
  <span>Message is: {{message}}</span>
  <br>
  <input type="text" v-model="message" placeholder="edit me">
</template>
<script>
  export default {
    data () {
      return {
        message: 'Hello World!'
      }
    }
  }
</script>
