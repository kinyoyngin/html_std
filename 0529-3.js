const $popup =document.querySelector("#popup");//# 아이디 /
$popup.children[1].addEventListener('click' ,aaa);
const $footer = document.querySelector("footer");
$footer.addEventListener( "click",bo);
//두번쨰방법 이벤트리스너 방식//
const $subMenu24 = document.querySelector("#blue");
$subMenu24.addEventListener("click" , blue);
const $subMenu42 = document.querySelector("#kim");
$subMenu42.addEventListener("click" , kim);

function aaa(){
  $popup.style.display='none';
}
function bo() {
  $popup.style.display='block';
}
const $submenu12 = document.querySelector("nav  li:first-child    a:last-child");

function red(){
    $submenu12.style.background = 'red';
}
function blue () {
  $subMenu24.style.background = 'blue'; 
}
 //id="kim42" onlick="아이디()"// const $아이디 = document,queryselector("아이디"); 펑션 아이디2(){$ 아이디 .스타일.컬러='색'}
 const $kim42 = document.querySelector("#kim42"); 

 function tr(){
  $kim42.style.color = 'red';
  $kim42.style.textDecoration = 'none';//d가 알파벳 대문자 밑줄을 지우는기능//
 }
  $popup.addEventListener("click" , tomato);//아이디//
  function tomato(){
    $popup.style.background='tomato';//색깔//
  }


  
 
   
     
    
    
    

