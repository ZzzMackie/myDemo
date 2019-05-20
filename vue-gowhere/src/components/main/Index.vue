<template>
    <div class="container-main">
        <el-row>
            <top-content></top-content>
        </el-row>
        <el-row>
            <center-content></center-content>
        </el-row>
        <el-row>
            <bottom-content></bottom-content>
        </el-row>
    </div>
</template>

<script>
import TopContent from './TopContent';
import CenterContent from './CenterContent';
import BottomContent from './BottomContent';
export default {
    name: 'Index',
    data () {
        return{}
    },
    components: {
        TopContent,
        CenterContent,
        BottomContent
    }
}
</script>

<style lang="scss" scoped>

</style>
