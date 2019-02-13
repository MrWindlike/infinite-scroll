import Vue from 'vue';
import DemoBlock from '@components/demo-block';
import 'highlight.js/styles/color-brewer.css';
import '@gs-ui/elf/lib/style/github-markdown-css.css';
import '@components/demo-block/lib/style/index.css';

import InfiniteScroll from 'src/index.js';
import Demo from './demo.vue';
import './style.scss';

Vue.component('demo-block', DemoBlock);
Vue.component('infinite-scroll', InfiniteScroll);

new Vue({
  el: '#root',
  render(h) {
    return h(Demo);
  }
});
