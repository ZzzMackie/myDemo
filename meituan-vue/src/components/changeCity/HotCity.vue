<template>
  <div class="m-hcity">
        <dl>
            <dt>{{title}}</dt>
            <dd v-for="(item, index) in list" :key="index">
                {{item}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String
        },
        list: {
            type: Array
        }
    },
  data () {
    return {
    }
  }

}
</script>
<style lang='scss' scoped>
@import "~css/changecity/hot.scss";
</style>
 