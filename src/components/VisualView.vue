<template>
      <!-- 비주얼 -->
    <section class="visual">
      <div class="inner">
        <h2 class="visual-title">
          BEST OF THE WORLD <br>
          STX Engineering & Construction
        </h2>
        <p class="visual-txt">
          세계최고를 향해 STX건설이 힘차게 질주합니다!
        </p>

        <button class="visual-bt">이동</button>
      </div>
    </section>
</template>

<script>
import $ from 'jquery';
import {onMounted} from 'vue';

export default {
setup(){
  onMounted(()=>{
    let visualBt = $('.visual-bt');
    let partY = $('.part').offset().top;

    visualBt.click(function () {
      $('html').animate({
        scrollTop: partY
      });
    });
  })
return{

}
}
}
</script>

<style>

</style>