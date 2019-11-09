<template>
  <div>ceshi</div>
</template>

<script>
import Vue from 'vue'
import URL from '../http/url.js'

export default Vue.extend({
  data() {
    return {}
  },
  destroyed() {
    this.$axios.post(URL.LOGOUT).then()
  },
  methods: {}
})
</script>

<style lang="scss" scoped></style>
