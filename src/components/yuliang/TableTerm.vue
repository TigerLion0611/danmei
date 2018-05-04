<template>
  <div>
    <div style="width: 100%; overflow: auto;">
      <table :style="{width: width}">
        <thead>
          <tr>
            <td v-for="th in thead" :key="th.key" :style="{width: getWidthByWords(th.value)}">
              {{ th.value }}
            </td>
          </tr>
        </thead>
        <tbody v-if="tbody">
        <tr v-for="(tr,i) in tbody" :key="tr.datetime">
          <td v-for="td in tr" :key="td.content.key"
              @click="clickTd(tableTerm.tbody.trs[i],td)"
              :style="tableTerm.tdStyle? (tableTerm.tdStyle[td.content.key]? tableTerm.tdStyle[td.content.key] : {}) : {}">
            <div style="overflow: auto">
              {{ td.content.value }}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
table {
  border: none;
}
table,th,td {
  border-collapse: collapse;
  border-spacing: inherit;
}
td {
  color: white;
  border: 1px solid darkgray;
  white-space: nowrap;
  padding: 1vh 1vw;
}
thead td {
  background-color: aqua;
}
</style>
<script>
import yuliangUtils from '../../utils/yuliangUtils'
export default {
  name: 'TableTerm',
  props: ['tableTerm'],
  data () {
    return {
      width: yuliangUtils.getTableWidth(this.tableTerm.thead.ths)
    }
  },
  computed: {
    thead: function () {
      let thead = []
      let ths = this.tableTerm.thead.ths
      let styles = this.tableTerm.thead.thStyles
      for (let i in ths) {
        if (styles) ths[i].style = styles[i]
        thead.push(ths[i])
      }
      return thead
    },
    tbody: function () {
      let newTbody = []
      let ths = this.tableTerm.thead.ths
      let trs = this.tableTerm.tbody.trs
      let tdStyles = this.tableTerm.tbody.tdStyles
      for (let i in trs) {
        let tr = []
        for (let j in ths) {
          let td = {}
          let content = {}
          let key = ths[j].key
          if (key !== 'style') {
            content.key = key
            content.value = trs[i][key]
          }
          if (tdStyles) {
            let style = tdStyles[j]
            td.style = style
          }
          td.content = content
          tr.push(td)
        }
        newTbody.push(tr)
      }
      return newTbody
    }
  },
  methods: {
    clickTd: function (tr, td) {
      if (this.tableTerm.tdFunction[td.content.key]) {
        this.tableTerm.tdFunction[td.content.key](tr, td)
      }
    },
    getWidthByWords: function (words) {
      return yuliangUtils.getWidthByWords(words) + window.innerWidth / 1440 * 20 + 'px'
    }
  }
}
</script>
