! function () {
  let duration = 10;
  let buttonGroup = document.querySelectorAll('.button');
  buttonGroup.forEach(i => {
    i.addEventListener('click', () => {
    buttonGroup.forEach(i => {
    i.classList.remove('active')
})
  i.classList.add('active');
  let speed = i.getAttribute('data-speed');
  switch (speed) {
    case 'slow':
      duration = 100;
      break;
    case 'normal':
      duration = 50;
      break;
    case 'fast':
      duration = 10;
      break;
  }
})
})

  function writeCode(code, fn) {
    let codeContainer = document.querySelector('#code');
    let pikaStyle = document.querySelector('#pikaStyle');
    let n = 0;
    let pika;

    // 用setTimeout模拟setInterval以实现速度控制
    let id = setTimeout(function pika() {
      n += 1;
      codeContainer.innerHTML = code.substring(0, n);
      pikaStyle.innerHTML = code.substring(0, n);
      codeContainer.scrollTop = codeContainer.scrollHeight;
      if (n < code.length) {
        id = setTimeout(pika, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }

  let code = `
    /*
     * 大家好，我是锐锐君～
     * 话不多说，来个皮卡吧~
     */

    /*
     * 首先得皮一下.
     */
    .preview {
      background: #FFE204;
      border-radius: 10vw 10vw 0 0;
    }
    #pika {
      position: relative;
      width: 340px;
      height: 200px;
    }
    
    /*
     * 接下来画个鼻子，不能太大..
     */
    .nose {
      position: absolute;
      top: 38px;
      left: 50%;
      margin-left: -16px;
      width: 0;
      height: 0;
      border-width: 13px 16px;
      border-style: solid;
      border-color: black transparent transparent;
      border-radius: 50%;
    }
    
    /*
     * 画对眼睛，要大大的，闪闪的那种...
     */
    .eye {
      position: absolute;
      background: #000;
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }
    
    /*
    * 习惯性先调整对齐.
    */
   .eye.right {
     left: 50%;
     margin-left: 66px;
   }
   .eye.left {
     right: 50%;
     margin-right: 66px;
   }
   
    /*
     * 此时画皮点睛，来点灵性..
     * 听说仰望45°是最可爱的..
     */
    .eye::after {
      content: '';
      position: absolute;
      display: block;
      left: 8px;
      top: 4px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
    }

    /*
     * 紧接是脸颊了
     */
    .cheek {
      position: absolute;
      top: 86px;
      width: 69px;
      height: 69px;
      border: 3px solid;
      border-radius: 50%;
      background: #FF0000;
    }
    
    /*
     * 调整左右对称 
     */
    .cheek.right {
      margin-left: 94px;
      left: 50%;
    }
    .cheek.left {
      margin-right: 94px;
      right: 50%;
    }
    
    /*
     * 给它添上上唇
     */
    .upper_lip {
      position: absolute;
      top: 66px;
      width: 66px;
      height: 16px;
      border: 2px solid;
      background: #FEE02E;
    }
    .upper_lip.right {
      left: 50%;
      transform: rotate(16deg);
      border-bottom-right-radius: 40px 25px;
      border-top: none;
      border-left: none;
    }
    .upper_lip.left {
      right: 50%;
      transform: rotate(-16deg);
      border-bottom-left-radius: 40px 25px;
      border-top: none;
      border-right: none;
    }
    
    /*
     * 再添下唇 
     */
    .lower_lip_wrapper {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      left: 50%;
      margin-left: -75px;
      width: 150px;
      height: 128px;
    }
    .lower_lip {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      width: 100%;
      height: 1000px;
      border: 2px solid;
      border-radius: 300px/1600px;
      background: #91000C;
    }
    
    /* 
    * 露出可爱的上唇
    */
    #pika> :not(:last-child) {
      z-index: 1;
    }
    
    /*
    * 差点什么？ 对了，加个舌头～ 
    */
    .lower_lip::after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 50%;
      margin-left: -50px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #FC4057;
    }
    
    /*
     * 来句台词～
     */
    .preview_wrapper::after {
      content: '祝大家新年快乐~皮卡皮卡';
      position: absolute;
      display: block;
      color: red;
      font-size: 1.5rem;
      width: 100%;
      bottom: 0;
      text-align: center;    
      font-weight: 900;
    }
    /*
     * 皮卡丘送给屏幕前的你，希望你喜欢。
     * 
     * (欢迎关注我的GayHub
     * https://github.com/HuangHongRui)
     * 
     */
    `
  writeCode(code);
}.call();
