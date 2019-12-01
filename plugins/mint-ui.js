import Vue from 'vue'
import {
  Button,
  Radio,
  Swipe,
  SwipeItem,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem
} from 'mint-ui'
export default () => {
  Vue.component(Button.name, Button)
  Vue.component(Radio.name, Radio)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
  Vue.component(Navbar.name, Navbar)
  Vue.component(TabItem.name, TabItem)
}
