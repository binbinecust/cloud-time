import Vue from 'vue'
import { Button, Radio, Swipe, SwipeItem } from 'mint-ui'
export default () => {
  Vue.component(Button.name, Button)
  Vue.component(Radio.name, Radio)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
}
