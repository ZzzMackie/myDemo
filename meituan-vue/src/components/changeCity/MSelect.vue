<template>
  <div :class="['choose-wrap', disabled?'disbaled-wrap':'']" v-document-click="documentClick" @click="showWrapper" >
      <div :class="['choose', chooseClass+'-choose']">
          <span>{{value}}：</span>
          <i class="el-icon-caret-bottom"></i>
          <div :class="{'mt-content': true, 'active': showWrapperActive}">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col" v-for="(col, index) in colList" :key="index">
                        <span :class="{'mt-item': true, 'active': item.name == value}" v-for="(item, index) in col" :key="index" @click="changeValue(item)">{{item.name}}</span>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      value:{
          type: String
      },
      title: {
          type: String
      },
      list: {
          type: Array
      },
      disabled: {
          type: Boolean
      },
      chooseClass: {
          type: String
      },
      showWrapperActive: {
          type: Boolean
      }
  },
  data () {
    return {
    }
  },
  computed: {
        colList: function () {
            let col = Math.ceil(this.list.length / 12);
            let result = [];
            for (var i = 0; i < col; i++) {
                result.push(this.list.slice(i * 12, i * 12 + 12));
            }
            // console.log('===', result);
            return result;
        }
    },
    methods: {
        showWrapper (e) {
            if (this.disabled) {
                return false;
            }
            e.stopPropagation();
            // this.showWrapperActive = true;
            this.$emit('changeActive', true);
        },
        changeValue (item) {
            this.$emit('change' , item)
        },
        documentClick () {
            this.$emit('changeActive' , false)
            // console.log('document-click');
        }
    }

}
</script>
<style lang='scss' scoped>
@import '~css/changecity/select.scss';
.disbaled-wrap {
        cursor: not-allowed;
    }
    .choose-wrap.disbaled-wrap > .choose {
        cursor: not-allowed;
    }
</style>
 