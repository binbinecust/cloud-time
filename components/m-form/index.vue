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
      <div v-if="step === 1" class="step-1">
        <div class="type-input">
          <mt-radio
            v-model="form.type"
            title="请先选择您的预约类型"
            :options="options"
          >
          </mt-radio>
        </div>
        <div class="btn-wrapper">
          <div class="next-btn submit" @click="nextStep">
            下一步
          </div>
        </div>
      </div>
      <div v-else class="form-com popup-form">
        <div class="back-btn" @click="prevStep">
          <span class="iconfont back-icon">&#xe623;返回</span>
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe60c;</i>
          <input
            v-model.trim="form.name"
            type="text"
            maxlength="5"
            placeholder="请输入您的姓名"
            @change="validate('name')"
          />
          <i
            v-show="checkInfo.name"
            class="iconfont tip-icon"
            :class="checkInfo.name === 1 ? 'ok' : 'error'"
            >{{ checkInfo.name === 1 ? '&#xe62a;' : '&#xe609;' }}</i
          >
        </div>
        <div class="input-wrapper">
          <i class="iconfont icon">&#xe613;</i>
          <input
            v-model.trim="form.tel"
            type="number"
            max="99999999999"
            placeholder="请输入您的联系方式"
            @change="validate('tel')"
          />
          <i
            v-show="checkInfo.tel"
            class="iconfont tip-icon"
            :class="checkInfo.tel === 1 ? 'ok' : 'error'"
            >{{ checkInfo.tel === 1 ? '&#xe62a;' : '&#xe609;' }}</i
          >
        </div>
        <div v-if="form.type === 'child'" class="input-wrapper">
          <i class="iconfont icon">&#xe66e;</i>
          <input
            v-model.trim="form.childName"
            type="text"
            placeholder="请输入小朋友姓名"
            maxlength="5"
            @change="validate('childName')"
          />
          <i
            v-show="checkInfo.childName"
            class="iconfont tip-icon"
            :class="checkInfo.childName === 1 ? 'ok' : 'error'"
            >{{ checkInfo.childName === 1 ? '&#xe62a;' : '&#xe609;' }}</i
          >
        </div>
        <div v-if="form.type === 'child'" class="input-wrapper">
          <i class="iconfont icon">&#xe730;</i>
          <input
            v-model.trim="form.age"
            type="number"
            min="0"
            max="99"
            placeholder="请输入小朋友年龄"
            @change="validate('age')"
          />
          <i
            v-show="checkInfo.age"
            class="iconfont tip-icon"
            :class="checkInfo.age === 1 ? 'ok' : 'error'"
            >{{ checkInfo.age === 1 ? '&#xe62a;' : '&#xe609;' }}</i
          >
        </div>
        <!-- <div class="input-wrapper catalog">
          <span>类目：</span>
          <CheckboxGroup v-model="form.catalog">
            <Checkbox label="shuicai">水彩</Checkbox>
            <Checkbox label="guohua">国画</Checkbox>
            <Checkbox label="shuifen">水粉</Checkbox>
          </CheckboxGroup>
        </div> -->
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
        name: '',
        tel: '',
        age: '',
        childName: ''
      },
      checkInfo: {
        name: 0, // 0 初始值，1 正确 2 错误
        tel: 0,
        childName: 0,
        age: 0
      },
      options: [
        {
          label: '少儿美术（3-16岁）',
          value: 'child'
        },
        {
          label: '成人美术（>16岁 仅限女性）',
          value: 'adult'
        },
        {
          label: '博物馆课程（全年龄段）',
          value: 'museum'
        }
      ],
      step: 1
    }
  },
  methods: {
    validate(item) {
      if (item === 'tel') {
        if (this.form.tel && /^1[3-9]\d{9}$/.test(this.form.tel)) {
          this.checkInfo.tel = 1
          return true
        }
      } else {
        const res = !!this.form[item]
        this.checkInfo[item] = res ? 1 : 2
        return res
      }
      this.checkInfo[item] = 2
      return false
    },
    submit() {
      let isAllChecked = false
      if (this.form.type === 'child') {
        isAllChecked =
          this.validate('name') &&
          this.validate('tel') &&
          this.validate('childName') &&
          this.validate('age')
      } else {
        isAllChecked = this.validate('name') && this.validate('tel')
      }
      if (isAllChecked) {
        this.$emit('hideForm')
      }
    },
    nextStep() {
      this.step = 2
    },
    prevStep() {
      this.step = 1
    }
  }
})
</script>
<style lang="scss">
.form-wrapper {
  .mint-cell * {
    font-size: 32px;
  }
  .mint-radiolist-title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .mint-radiolist-label {
    margin-bottom: 10px;
  }
  .mint-radio-core {
    width: 28px;
    height: 28px;
    &::after {
      content: ' ';
      border-radius: 100%;
      top: 0.03rem;
      left: 0.03rem;
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
    }
  }
  .mint-cell {
    margin-bottom: 20px;
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
.step-1 {
  text-align: left;
  .type-input {
    margin-bottom: 40px;
  }
}
.form-wrapper {
  padding: 40px;
  background: white;
  border-radius: 10px;
  width: 640px;
}
.form-com {
  margin: 0 auto;
  text-align: left;

  .input-wrapper {
    margin-bottom: 20px;
    line-height: 0;
    position: relative;
  }

  .type-input {
    margin-bottom: 15px;
    font-size: 32px;
    & > span {
      vertical-align: middle;
    }
  }

  .catalog {
    margin-bottom: 40px;
    & > span {
      font-size: 30px;
    }
    .ivu-checkbox-group {
      display: inline-block;
    }
  }

  input {
    width: 100%;
    height: 90px;
    color: #888899;
    font-size: 16px;
    padding: 30px;
    box-sizing: border-box;
    background: #f5f5f5;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 32px;
    font-weight: 300;
    outline: none;
    border: none;
  }
  .tip-icon {
    position: absolute;
    right: 10px;
    top: 44px;
    font-size: 32px;
    &.ok {
      color: #51c51a;
    }
    &.error {
      color: #f14135;
    }
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
.back-btn {
  display: inline-block;
  margin-bottom: 20px;
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
