let left_sw=0, right_sw=0, count=1;
let minus,num,sum,total,aggregate,buy;
let left, right,pass1,pass2,pass3;
window.onload =function(){
    $(".top").on("click", function() {   
        $("html, body").animate({"scrollTop": "0"},500);
    })
    minus=document.querySelector(".minus");
    minus.innerHTML="-"
    num=document.querySelector(".num");
    num.innerHTML=count
    sum=document.querySelector(".sum");
    sum.innerHTML="+"
    total=document.querySelector(".total");
    total.innerHTML="10,900원"
    aggregate=document.querySelector(".aggregate");
    aggregate.innerHTML="10,900원"
    buy=document.querySelector(".buy");
    left=document.querySelector(".left");
    right=document.querySelector(".right");
    pass1=document.querySelector(".pass1");
    pass2=document.querySelector(".pass2");
    pass3=document.querySelector(".pass3");

    sum.addEventListener('click', () => {
        count += 1;
        price=count*10900;
        num.textContent = count;
        total.innerHTML= comma(price)+"원";
        aggregate.innerHTML =comma(price)+"원";
    });
    minus.addEventListener('click', () => {
        count -= 1;
        if(count == -1){
            count=0;
        }
        price=count*10900;
        total.innerHTML= comma(price)+"원";
        aggregate.innerHTML =comma(price)+"원";
        num.textContent = count;
    });
    buy.addEventListener("click",()=>{
        alert("테스트 입니다.")
    })

}
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
// 제이쿼리
$(function(){
    // 왼쪽버튼 눌렀을 때
    $(".le").on("click", function(){
        if(left_sw==0){
            $(".best_item_box").animate({"left":"-=100%"},100);
            $(".two").css("background","rgb(125, 124, 124)");
            $(".one").css("background","white");
            left_sw=1;
        }
        else{
            $(".best_item_box").animate({"left":"+=100%"},100);
            $(".one").css("background","rgb(125, 124, 124)");
            $(".two").css("background","white");
            left_sw=0;
        }
    })
    // 오른쪽버튼 눌렀을 때
    $(".ri").on("click", function(){
        if(left_sw==0){
            $(".best_item_box").animate({"left":"-=100%"},100);
            $(".two").css("background","rgb(125, 124, 124)");
            $(".one").css("background","white");
            left_sw=1;
        }
        else{
            $(".best_item_box").animate({"left":"+=100%"},100);
            $(".one").css("background","rgb(125, 124, 124)");
            $(".two").css("background","white");
            left_sw=0;
        }

    })
    $(".left").on("click", function(){
        if(left_sw==0){
            $(".mobile_img3").animate({"left":"-=70%"},100);
            left_sw=1;
            right_sw=1;
        }
        else if(left_sw==1){
            $(".mobile_img3").animate({"left":"-=70%"},100);
            left_sw=2;
            right_sw=2;
        }
        else{
            $(".mobile_img3").animate({"left":"-=0%"},100);
        }
    })
    $(".right").on("click", function(){
        if(right_sw==0){
            $(".mobile_img3").animate({"left":"-=0%"},100);
            left_sw=0;
        }
        else if(right_sw==1){
            $(".mobile_img3").animate({"left":"+=70%"},100);
            right_sw=0;
            left_sw=1;
        }
        else{
            $(".mobile_img3").animate({"left":"+=70%"},100);
            right_sw=1;
        }
    })


})


