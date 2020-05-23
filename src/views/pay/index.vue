<template>
  <div class="app-init pay-page scroll-box">
    <header-back title="关于"></header-back>

    <div class="padding-box">
      <p>本站图片数据来源来自于小米网站，仅是个人学习使用，如有侵权，请联系本人删除</p>
      <br>
      <h3>联系我</h3>
      <p>qq: 1035890653</p>
      <p>github: github.com/alexlxy</p>
      <p>个人博客: http://118.25.49.69</p>

      <br>
      <!-- <p>Update on 2019/01/15</p> -->

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import headerBack from '../../components/header-back'

  export default{
    name: 'pay',
    components: {
      headerBack
    }
  }
</script>

<style type="text/sass" lang="sass">
  .pay-page
    background-color: #fff
    .padding-box
      padding: 0.4rem
      color: #333
      .color
        color: orange
      ul
        padding-left: 0.8rem
      li
        list-style: disc
</style>
