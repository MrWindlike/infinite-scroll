<script>
import { Icon } from '@gs-ui/gs-ui';

export default {
  props: {
    container: {
      type: [Window],
      default: ()=> window
    },
    /** 
     * the all height of the scroller
     * if height is empty, it will computed by itemHeight and total
     */
    height: {
      type: [Number, String],
      default: ''
    },
    /**
     * the number of item in one row
     */
    columnNum: {
      type: Number,
      default: 1
    },
    /**
     * the number of item which out of sight
     */
    borderNum: {
      type: Number,
      default: 3
    },
    /**
     * the component of the rendered item
     */
    renderItem: {
      type: [Object, String],
      required: true
    },
    /** 
     * the props to each rendered item
     */
    listProps: {
      type: Array,
      default: ()=> []
    },
    /**
     * the height of each item
     */
    itemHeight: {
      type: Number,
      default: 0
    },
    /**
     * the number of rendered row
     */
    renderNum: {
      type: Number,
      default: 10
    },
    /**
     * if you want to use load more function
     * you must set pageSize
     * it will calculate the current page to you to load data
     */
    pageSize: {
      type: Number,
      default: 10
    },
    /**
     * the total number of item
     */
    total: {
      type: Number,
      default: 0
    },
    /**
     * is show loading tip
     */
    isShowLoading: {
      type: Boolean,
      default: true,
    },
    /**
     * loading tip component
     */
    loadingTip: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      /** 
       * the start index of row
       */
      startIndex: 0,
      /**
       * the end index of row
       */
      endIndex: this.renderNum,
      loading: false,
    }
  },

  methods: {
    handleScroll() {
      const container = this.container === window ? document.body : this.container;
      const scroller = this.$refs.scroll;
      const containerTop = container.getBoundingClientRect().top;
      const scrollerTop = scroller.getBoundingClientRect().top;
      const top = this.container.scrollY - (scrollerTop - containerTop);
      const startIndex = Math.floor(top / this.itemHeight) - this.borderNum;
      const endIndex = startIndex >= 0 ? startIndex + this.renderNum : this.renderNum;

      if(startIndex + this.renderNum <= Math.ceil(this.total / this.columnNum)) {
        /** 
         * if endIndex - startIndex <= total row number
         * ensure the item number is equal than this.renderNum
         */
        this.startIndex = startIndex >= 0 ? startIndex : 0;
        this.endIndex = endIndex;
      } else {
        this.startIndex = Math.ceil(this.total / this.columnNum) - this.renderNum;
        this.endIndex = this.startIndex + this.renderNum;
      }


      if(this.listProps.length < this.total && endIndex * this.columnNum > this.listProps.length) {
        const page = endIndex * this.columnNum <= this.total ? Math.ceil(endIndex * this.columnNum / this.pageSize) : this.total / this.pageSize;

        this.loading = true;
        this.$emit('load-more', page);
      }
      
    }
  },

  computed: {
    listHeight() {
      /** calculate list height base on item height, total number and column number */
      return this.itemHeight * Math.ceil(this.total / this.columnNum);
    }
  },

  watch: {
    listProps() {
      this.loading = false;
    }
  },

  mounted() {
    this.handleScroll();

    this.container.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    this.container.removeEventListener('scroll', this.handleScroll);
  },

  render(createElement) {
    let loadingTip = null;

    if(this.isShowLoading) {
      if(this.loadingTip) {
        loadingTip = createElement(
          this.loadingTip,
          {
            style: {
              transform: `translateY(${Math.ceil(this.listProps.length / this.columnNum) * this.itemHeight}px)`
            },
            class: 'gs-loading',
            directives: [
              {
                name: 'show',
                value: this.loading
              }
            ]
          }
        );
      } else {
        loadingTip = (
          <p 
          v-show={this.loading}
          style={{transform: `translateY(${Math.ceil(this.listProps.length / this.columnNum) * this.itemHeight}px)`}}
          class="gs-loading-tip">
            <gs-icon name="loading"></gs-icon> 加载中...
          </p>
        );
      }
    }

    return (
      <div 
      ref="scroll"
      style={{ 
        height: this.height ? this.height : `${this.listHeight}px`
      }}
      class="gs-infinite-scroll">
        { 
          this.listProps.slice(this.startIndex * this.columnNum, this.endIndex * this.columnNum).map((props, i)=> (
            createElement(
              this.renderItem,
              {
                props,
                class: props.class,
                style: {
                  ...props.style,
                  transform: `translateY(${this.startIndex * this.itemHeight}px)`
                },
                key: i,
              }
            )
          ))
        }
        { loadingTip }
      </div>
    );
  },

  components: {
    GsIcon: Icon
  }
};
</script>
