<template>

  <div class="modal-wrap">
    <div class="modal-main">
      <h1><i class="fas fa-exclamation-circle"></i>
      </h1>
      <p>
        * 이 사이트는 <b>스터디용으로 제작</b>되었으며, <b>리소스의 저작권은 원저작자</b>에게 있습니다.<br>
        * 해당 사이트와 관련한 문제가 있으면 <a href="mailto:kimhp1216@naver.com">여기</a>로 연락바랍니다.<br>
        * 본 사이트는 Chrome 에 최적화되어 있습니다.
      </p>

      <button class="modal-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>

</template>
<script>
import $ from 'jquery';
import {onMounted} from 'vue';
export default {  
    setup() {
      onMounted( () => {   
        $('html').css('overflow', 'hidden');
        let modalWrap = $('.modal-wrap');
        let modalClose = $('.modal-close');
        modalClose.click(function(){
          modalWrap.stop().fadeOut(100);
            $('html').css('overflow', 'auto');
          });

          let modalMain = $('.modal-main');
          modalMain.click(function(event){
            event.stopPropagation();
          });
          modalWrap.click(function(){
            modalWrap.stop().fadeOut(100);
            $('html').css('overflow', 'auto');
          });
  
      });
      return {      
      }
    }
}
</script>


<style>
  .modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99999;

  }

  .modal-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 530px;
    height: 300px;
    background-color: #f8f8f8;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }

  .modal-main h1 {
    font-size: 55px;
    font-weight: 500;
    text-align: center;
    color: #6e84ff;
    padding: 18px 0;
  }

  .modal-main p {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    color: #111;
    line-height: 2.2;
    padding-top: 22px;
  }

  .modal-main b {
    font-weight: 600;
    color: #6e84ff;
  }

  .modal-main a {
    color: #6e84ff;
    font-weight: 400;
    text-decoration: underline;
  }

  .modal-close {
    position: absolute;
    right: 20px;
    top: 15px;
    border: 0px;
    cursor: pointer;
    font-size: 24px;
    background-color: transparent;
    color: #999;
    transition: transform 0.3s;
  }

  .modal-close:hover {
    transform: rotate(90deg);
  }
</style>