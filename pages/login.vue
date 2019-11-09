<template>
  <div class="login">
    <Form ref="formInline" inline class="form">
      <FormItem prop="user">
        <Input v-model="user" type="text" placeholder="Username">
          <Icon slot="prepend" type="ios-person-outline"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input v-model="password" type="password" placeholder="Password">
          <Icon slot="prepend" type="ios-lock-outline"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import Vue from 'vue'
import URL from '../http/url.js'
export default Vue.extend({
  data() {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios
        .post(URL.LOGIN, {
          user: this.user,
          password: this.password
        })
        .then(res => {
          if (res && res.data && res.data.code === 0) {
            console.log('test')
            this.$Message.success(res.data.message)
            this.$router.push('/config')
          }
        })
        .catch(() => {})
    },
    handleSubmit() {
      this.login()
    }
  }
})
</script>
<style lang="scss">
.login input {
  height: 39px !important;
}
</style>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000000;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    input {
      height: 30px;
    }
  }
}
</style>
