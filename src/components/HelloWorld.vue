<template>
  <div>
    <page-head></page-head>
    <yuliang-shadow-box>
      <div style="border-bottom: 1px solid grey" :style="{padding: '1vh 2vw'}">
        <excel-upload></excel-upload>
      </div>
      <div style="border-bottom: 1px solid grey;" :style="{padding: '1vh 2vw'}">
        <search-block @returnFilter="changeFilter"></search-block>
      </div>
    </yuliang-shadow-box>
    <customer-information-list :filter="filter"></customer-information-list>
  </div>
</template>
<style>
</style>
<script>
import ExcelUpload from './danmei/ExcelUpload'
import PageHead from './danmei/PageHead'
import CustomerInformationList from './danmei/CustomerInformationList'
import YuliangShadowBox from './yuliang/YuliangShadowBox'
import YuliangInputTerm from './yuliang/YuliangInputTerm'
import SearchBlock from './danmei/SearchBlock'
export default {
  name: 'HomePage',
  components: {SearchBlock, YuliangInputTerm, YuliangShadowBox, CustomerInformationList, PageHead, ExcelUpload},
  data () {
    return {
      filter: {}
    }
  },
  methods: {
    changeFilter: function (obj) {
      for (let i in obj) {
        this.$set(this.filter, i, obj[i])
      }
    }
  }
}
</script>
