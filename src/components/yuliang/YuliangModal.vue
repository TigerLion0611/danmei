<template>
  <div class="modal">
    <div class="content">
      <div class="head">
        <slot name="headtitle">
          <span class="title">疑似骚扰详情</span>
        </slot>
        <span @click="hideModal" class="yuliang-closeBtn" style="color:#93969f;padding-right: 10px;line-height: 12px;" >
          X
        </span>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <!--<div v-if="canConfirm" :style="foot">-->
        <!--<button type="button" @click="confirm">确认</button>-->
        <!--<button type="button" @click="cancel">取消</button>-->
      <!--</div>-->
    </div>
    <div class="mask" @click="hideModal"></div>
  </div>
</template>
<style scoped>
div.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
div.mask {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
  /* 兼容IE8及以下版本浏览器 */
  filter: alpha(opacity=30);
}
div.content {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 90vw;
  height: 90vh;
  background-color: white;
  z-index: 999;
}

div.head {
  height: 30px;
  border-bottom: 1px solid #e6e6e6;
  text-align: right;
  padding: 1vh 3px 1vh 20px;
}
div.body {
  height: 100%;
}
span.title {
  float: left;
  display: inline-block;
  /*color: #fefefe;*/
}
span.yuliang-closeBtn {
  cursor: pointer;
}
</style>
<script>
export default {
  name: 'YuliangModal',
  data () {
    return {
      foot: {
        height: '50px',
        borderTop: '1px solid grey',
        textAlign: 'right',
        paddingTop: '12px',
        paddingRight: '1em',
        backgroundColor: 'grey'
      }
    }
  },
  props: ['modal'],
  computed: {
    headStyle: function () {

    }
  },
  methods: {
    confirm: function () {
      this.$emit('confirm')
    },
    hideModal: function () {
      this.$emit('hideModal')
    }
  }
}
</script>
<style>
.modal-show {

}
</style>
