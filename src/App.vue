<template>
  <!-- 안내 -->
  <div>
    <ModalPop />

    <div class="wrap">
      <HeaderView />
      <VisualView />
      <PartView />
      <NewsView />
      <CsView />
      <AboutView />
      <FooterView />
    </div>

  </div>
</template>

<script>
  import HeaderView from '@/components/HeaderView.vue'
  import VisualView from '@/components/VisualView.vue'
  import PartView from '@/components/PartView.vue'
  import NewsView from '@/components/NewsView.vue'
  import CsView from '@/components/CsView.vue'
  import AboutView from '@/components/AboutView.vue'
  import FooterView from '@/components/FooterView.vue'
  import ModalPop from '@/components/ModalPop.vue'

  export default {
    name: 'App',
    components: {
      HeaderView,
      VisualView,
      PartView,
      NewsView,
      CsView,
      AboutView,
      FooterView,
      ModalPop
    },
    setup() {
      return {
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  /* 공통요소 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
  }


  .wrap {
    padding-top: 80px;
  }
</style>