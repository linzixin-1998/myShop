import Vue from 'vue'



import {
    Button,
    Header,
    Tabbar,
    TabItem,
    Swipe, SwipeItem,
    Badge,
    Popup,
    Search,
    Radio,
    Lazyload,
    Field,
} from '../node_modules/mint-ui';

Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Badge.name, Badge);
Vue.component(Popup.name, Popup);
Vue.component(Search.name, Search);
Vue.component(Radio.name, Radio);
Vue.use(Lazyload);
Vue.component(Field.name, Field);