<template>
  <div>
    <!-- <Form :model="form" label-position="left" class="v-form">
      <FormItem label="类别">
        <RadioGroup v-model="form.type">
          <Radio label="child">少儿美术</Radio>
          <Radio label="adult">成人美术</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Input
          v-model="form.parentName"
          size="large"
          placeholder="请输入您的姓名"
        >
          <Icon slot="prepend" type="ios-person-outline"></Icon
        ></Input>
      </FormItem>
      <FormItem>
        <Input v-model="form.childName" placeholder="请输入小朋友姓名"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="form.age" placeholder="请输入小朋友年龄"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="form.catalog" placeholder="请选择感兴趣的科目"></Input>
      </FormItem>
      <FormItem>
        <Input v-model="form.tel" placeholder="请输入您的联系方式"></Input>
      </FormItem>
      <FormItem label="学习类目">
        <div class="catalogs"></div>
      </FormItem>
    </Form> -->
    <div class="form-wrapper">
      <div class="form-title">预约体验</div>
      <div class="form-com popup-form">
        <div>
          <input id="1" type="radio" value="2" name="少儿美术" />
          <input id="1" type="radio" value="1" name="成人美术" />
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe60c;</i>
          <input
            v-model="form.parentName"
            type="text"
            placeholder="请输入您的姓名"
          />
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe613;</i>
          <input
            v-model="form.tel"
            type="text"
            placeholder="请输入您的联系方式"
          />
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe66e;</i>
          <input
            v-model="form.childName"
            type="text"
            placeholder="请输入小朋友姓名"
          />
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe730;</i>
          <input
            v-model="form.age"
            type="text"
            placeholder="请输入小朋友年龄"
          />
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe601;</i>
          <input
            v-model="form.catalog"
            type="text"
            placeholder="请选择感兴趣的科目"
          />
        </div>

        <div class="btn-wrapper">
          <div class="submit" @click="submit">
            立即预约
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        type: 'child',
        parentName: '',
        tel: '',
        age: '',
        childName: '',
        catalog: ''
      }
    }
  },
  methods: {
    validate(item) {},
    submit() {}
  }
})
</script>
<style lang="scss">
.v-form {
  .ivu-form-item-label {
    font-size: 36px;
  }
  .ivu-icon {
    font-size: 32px;
  }
  .ivu-input {
    font-size: 32px;
    height: 48px;
  }
}
</style>

<style lang="scss" scoped>
.form-title {
  text-align: center;
  font-size: 0.36rem;
  color: #2e2e33;
  line-height: 0.54rem;
  margin-bottom: 0.24rem;
}
.form-wrapper {
  padding: 40px;
  background: white;
  border-radius: 10px;
  width: 640px;
}
.form-com {
  // width: 438px;
  margin: 0 auto;
  text-align: left;

  .input-wrapper {
    margin-bottom: 20px;
    line-height: 0;
    position: relative;
  }

  input {
    width: 100%;
    height: 90px;
    color: #888899;
    font-size: 16px;
    padding: 30px;
    box-sizing: border-box;
    // margin-bottom: 30px;
    background: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 32px;
    font-weight: 300;
    outline: none;
    border: none;
  }

  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: rgba(255, 255, 255, 0.7);
  }

  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, 0.7);
  }

  input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &.popup-form {
    input {
      background: #f5f5f5;
      border-radius: 6px;
      color: black;
      padding-left: 72px;
    }

    .icon {
      position: absolute;
      left: 18px;
      top: 45px;
      font-size: 32px;
    }

    input::-webkit-input-placeholder {
      color: #888899;
    }
  }
}

.btn-wrapper {
  text-align: center;
  line-height: 0;
}

.submit {
  display: inline-block;
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  font-size: 36px;
  font-weight: 400;
  background: #e60000;
  border-radius: 100px;
  color: white;
}
</style>
