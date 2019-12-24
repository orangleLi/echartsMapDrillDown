<template>
    <div ref="chart" class="mapCls"></div>
</template>

<script>
import {MapDrillDown} from './js/echartMapOptions.js'
export default {
  name: 'echartMapShow',
  mounted () {
    new MapDrillDown(this.$refs.chart, this).init()
  }
}
</script>

<style scoped>
  .mapCls{
    width: 100%;
    height: 1000px;
    background-image: url(./bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
</style>
