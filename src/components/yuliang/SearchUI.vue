<template>
  <div class="search-ui">
    <div>
      <input class="searchInput" v-model="queryString" :placeholder="placeholder" :style="{height:height + 'px'}"/>
    </div>
    <div class="searchBtn">
      <button class="searchBtn" type="button" @click="changeQueryString">查 找</button>
    </div>
  </div>
</template>
<style scoped>
  div.search-ui {
    display: flex;
    align-items: center;
  }
  input.searchInput {
    border: 1px solid #e8e8e8;
    border-top: none;
    border-bottom: none;
    height: 28px;
    width: 200px;
    padding: 5px;
  }

  input.searchInput::-webkit-input-placeholder {
    /*background-image: url("../../../assets/images/search.svg");*/
    /*background-repeat: no-repeat;*/
    /*background-position: 3%;*/
    color: #c6c6c6;
  }

  div.searchBtn {
    padding-left: 10px;
  }
  button.searchBtn {
    font: unset;
    background-color: #16cdba;
    color: white;
    border: none;
    border-radius: 3px;
    width: 50px;
    height: 24px;
    min-height: 18px;
    min-width: 63px;
  }

</style>
<script>
export default {
  name: 'SearchUI',
  props: ['placeholder'],
  data () {
    return {
      height: 0,
      queryString: ''
    }
  },
  mounted: function () {
    let parentNode = document.getElementsByClassName('search-ui')[0].parentNode.parentNode
    this.height = parentNode.clientHeight
  },
  watch: {
    queryString: function (newQ, oldQ) {
      this.$emit('changeQueryString', newQ)
    }
  },
  methods: {
    changeQueryString: function () {
      this.$emit('changeQueryString', this.queryString)
    }
  }
}
</script>
