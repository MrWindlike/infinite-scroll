### 基本用法

::: demo
```html
<template>
  <div class="demo-wrapper" ref="wrapper">
    <infinite-scroll
    :item-height="396"
    :page-size="4"
    :total="28"
    :column-num="3"
    :border-num="1"
    :render-num="5"
    :list-props="listProps"
    :render-item="DemoCard"
    @load-more="loadMore"
    >
    </infinite-scroll>
  </div>
</template>
```
```js
<script>
  import DemoCard from './demo-card';

  export default {
    data() {
      return {
        data: [
          {
            img: 'https://images.unsplash.com/photo-1442606440995-d0be22c5f90f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=74f2449b464113e510fd9ee64c5a582b'
          },
          {
            img: 'https://images.unsplash.com/photo-1532540144748-25ccbc774faa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3dae9693698c2c7fc294c0037b58473e'
          },
          {
            img: 'https://images.unsplash.com/photo-1525541772710-c2482a2b6ff0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=62b3698ee8b6c6b61aee2c38022cf567'
          },
          {
            img: 'https://images.unsplash.com/photo-1526652663289-37f82061a0b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7a76f1717c18519a73ef08d3fbb4fc82'
          },
        ],
        page: 4,
        DemoCard,
      };
    },

    computed: {
      listProps() {
        let props = [];

        for(let i = 0; i < this.page; i++) {
          props = props.concat(this.data);
        }

        return props.map((item, i)=> ({
          ...item,
          i
        }));
      }
    },

    methods: {
      loadMore(page) {
        console.log(`page: ${page}`);

        setTimeout(()=> {
          this.page = page;
        }, 1500);
      }
    }
  };
</script>
```
:::

<script>
  import DemoCard from './demo-card';

  export default {
    data() {
      return {
        data: [
          {
            img: 'https://images.unsplash.com/photo-1442606440995-d0be22c5f90f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=74f2449b464113e510fd9ee64c5a582b'
          },
          {
            img: 'https://images.unsplash.com/photo-1532540144748-25ccbc774faa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3dae9693698c2c7fc294c0037b58473e'
          },
          {
            img: 'https://images.unsplash.com/photo-1525541772710-c2482a2b6ff0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=62b3698ee8b6c6b61aee2c38022cf567'
          },
          {
            img: 'https://images.unsplash.com/photo-1526652663289-37f82061a0b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7a76f1717c18519a73ef08d3fbb4fc82'
          },
        ],
        page: 4,
        DemoCard,
      };
    },

    computed: {
      listProps() {
        let props = [];

        for(let i = 0; i < this.page; i++) {
          props = props.concat(this.data);
        }

        return props.map((item, i)=> ({
          ...item,
          i
        }));
      }
    },

    methods: {
      loadMore(page) {
        console.log(`page: ${page}`);

        setTimeout(()=> {
          this.page = page;
        }, 1000);
      }
    }
  };
</script>


### InfiniteScroll props

| 参数   | 说明  | 类型  | 可选值  | 默认值  |
|----------|---------|---------|-----------|-----------|
| height | 总高度，优先级高于itemHeight | Number, String  | - | '' |
| columnNum | 一行中元素个数 | Number  | - | 1 |
| borderNum | 触发滚动事件的边界数值，默认为三行 | Number  | - | 3 |
| renderItem | 需要渲染的组件 | Object, String  | - | - |
| listProps | 传给每个元素组件的props数组 | Array  | - | [] |
| itemHeight | 每个元素的高度，会根据其计算总高度，但若设置height则无效 | Number  | - | 0 |
| renderNum | 渲染元素个数 | Number  | - | 10 |
| total | 元素总数 | Number  | - | 0 |
| isShowLoading | 是否显示加载提示 | Boolean  | - | true |
| loadingTip | 自定义加载提示组件 | Object  | - | null |

### InfiniteScroll events
| 事件名称   | 说明  | 回调参数  |
|----------|---------|---------|
| load-more | 加载更多 | page |

