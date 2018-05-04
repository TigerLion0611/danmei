<!-- 分页组件的模板 -->
<template>
  <div class="pagination">
    <!-- 总记录数 -->
    <span class="totalCount">共{{ pagination.totalCount }}条</span>&nbsp;&nbsp;&nbsp;&nbsp;

    <span class="optional">
      <!-- 跳到第一页 -->
      <span @click="skipToFirstPage">
        |&lt;
      </span>&nbsp;

      <!-- 上一页 -->
      <span @click="skipToPrevPage">
        &lt;
      </span>&nbsp;

      <!-- 页码 -->
      <span>
        <span class="page"
              v-if="pagination.totalCount > 0"
              v-for="p in pages"
              :key="p"
              @click="setPage(p)"
              :style="p === currPage ? { border: 'none', color: '#2c7dc8'} : {}">
          {{ p }}
        </span>
      </span>

      <!-- 下一页 -->
      &nbsp;<span @click="skipToAfterPage"> &gt; </span>

      <!-- 跳到最后一页 -->
      &nbsp;<span @click="skipToLastPage"> &gt;| </span>
    </span>

  </div>
</template>
<style>

/**分页组件的样式**/

div.pagination {/**整个分页模块**/
  /*text-align: right; !**让分页模块的内容居右展示**!*/
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding: 25px 0px;
}

span.totalCount {
  color: #0c7ce2;
}

span.optional>span {/**可点击操作的部分**/
  cursor: pointer; /**鼠标光标变成手指的图样提示可点击**/
  color: #d2d3d7;
}

span.page{
  /*display: flex;*/
  border: 1px solid #e2e2e2; /**页码加上边框**/
  padding: 5px;
  color: #ebedf1; /**页码的字体颜色**/
  text-align: center;
  width: 1.5vw;
  height: 1.5vw;
}

</style>
<script>
/**
 * 分页组件的脚本
 */
export default {
  name: 'YuliangPagination',
  props: ['pagination'], // 接收父级传过来分页对象
  data () {
    return {
      pages: undefined, // 当前展示页码, 例如[1，2，3，4，5]
      currPage: undefined // 当前选中的页码
    }
  },
  created: function () {
    let pages = []
    let totalPages = this.pagination.totalPages
    let pageSize = this.pagination.pageSize
    let total = 0
    if (pageSize > totalPages) {
      total = totalPages
    } else {
      total = pageSize
    }
    for (let i = 0; i < total; i++) {
      pages.push(i + 1)
    }
    this.pages = pages
    this.currPage = pages[0]
  },
  watch: {
    currPage: function (newPage, oldPage) {
      this.changePages()
      this.$emit('changePage', newPage)
    }
  },
  methods: {
    /**
     * 跳到第一页
     */
    skipToFirstPage: function () {
      this.currPage = 1
    },
    /**
     * 跳到上一页
     * 如果当前页不是第1页，那么当前页 - 1
     */
    skipToPrevPage: function () {
      this.currPage = this.currPage === 1 ? 1 : this.currPage - 1
    },
    setPage (page) {
      this.currPage = page
    },
    /**
     * 跳到下一页
     * 如果当前页不是最后1页，那么当前页 + 1
     */
    skipToAfterPage: function () {
      this.currPage = this.currPage === this.pagination.totalPages ? this.pagination.totalPages : this.currPage + 1
    },
    /**
     * 跳到最后一页
     */
    skipToLastPage: function () {
      this.currPage = this.pagination.totalPages
    },
    changePages: function () {
      let pages = []
      let startPage = this.currPage - Math.floor((this.pagination.pageSize / 2))
      startPage = startPage < 1 ? 1 : startPage
      let totalPages = this.pagination.totalPages
      for (let i = 0; i < this.pagination.pageSize; i++) {
        let page = startPage + i
        if (page > totalPages) break
        pages.push(page)
      }
      this.pages = pages
    }
  }
}
</script>
