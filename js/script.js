AOS.init();
$(".stories").owlCarousel();
// start of log in button
$(".index-btns .btn1").click(function(){
    $(".index-icon").css("display","none");
    $(".index-btns").css("display","none");
    $(".index-login").css("display","block");
    $(".index-login").css("margin-top","100px");
    $(".index-login").attr("data-aos","fade-down-right");
    $(".index-login").attr("data-aos-duration","1500");
    AOS.init();
});
// start of insid log in close button 
$(".index-login #login-btn-close").click(function(){
    $(".index-icon").css("display","block");
    $(".index-btns").css("display","inline-block");
    $(".index-login").css("display","none");
});
// @@@@@@@@ show password button @@@@@@@@
// @@@@@@@@ show password button @@@@@@@@
// @@@@@@@@ show password button @@@@@@@@

$(".index-login .div2 #show").click(function () {
    if ($(".index-login .div2 i").attr("class","far fa-eye")) {
        $(".index-login .div2 input").attr("type","text");
        $(".index-login .div2 i").attr("class","far fa-eye-slash");
    }else {
        $(".index-login .div2 input").attr("type","passowrd");
        $(".index-login .div2 i").attr("class","far fa-eye");
    }
});

/*
$(".index-login .div2 #show").click(function(){
    $(".index-login .div2 i").toggle(
        $(".index-login .div2 input").attr("type","text");
        $(".index-login .div2 i").attr("class","far fa-eye-slash");
    );
});
*/
// end of login button 
// start of sign up button 
$(".index-btns .btn2").click(function(){
    $(".index-icon").css("display","none");
    $(".index-btns").css("display","none");
    $(".index-sign").css("display","block");
    $(".index-sign").css("margin-top","100px");
    $(".index-sign").attr("data-aos","fade-down-right");
    $(".index-sign").attr("data-aos-duration","1500");
    AOS.init();
});
// end of sign up button 
// start of insid sign up close button 
$(".index-sign #sign-btn-close").click(function(){
    $(".index-icon").css("display","block");
    $(".index-btns").css("display","inline-block");
    $(".index-sign").css("display","none");
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// #@#@#@#@#@ start of home page @#@#@#@#@#@#@#@#@
// #@#@#@#@#@ start of home page @#@#@#@#@#@#@#@#@
// #@#@#@#@#@ start of home page @#@#@#@#@#@#@#@#@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// icons action in nav bar in home page
// icons action in nav bar in home page
// icons action in nav bar in home page
// get all buttons and dropdown section

let friendBtn = $("#friends");
let friendDrop = $("#user-friend-request");

let messagesBtn = $("#messages");
let messagesDrop = $("#user-messages");

let notificationBtn = $("#notification");
let notificationDrop = $("#user-notification");
// make a function for friend request button
friendBtn.click(function () {
    messagesDrop.css("display","none");
    notificationDrop.css("display","none");
    friendDrop.toggle("showdrop");
});
// make a function for message button 
messagesBtn.click(function () {
    friendDrop.css("display","none");
    notificationDrop.css("display","none");
    messagesDrop.toggle("showdrop");
});
// make a function for notification button 
notificationBtn.click(function () {
    messagesDrop.css("display","none");
    friendDrop.css("display","none");
    notificationDrop.toggle("showdrop");
});
//!@$#@$%#@%#$%^$#^%$^&%$&%^*&%^$^#$%#@%@
//!@$#@$%#@%#$%^$#^%$^&%$&%^*&%^$^#$%#@%@
// end of icons action in nav bar in home page
// end of icons action in nav bar in home page
// end of icons action in nav bar in home page
//!@$#@$%#@%#$%^$#^%$^&%$&%^*&%^$^#$%#@%@
//!@$#@$%#@%#$%^$#^%$^&%$&%^*&%^$^#$%#@%@

// like part
// like part
// like part
// get all element take class heart
let hearts = document.querySelectorAll(".heart");
let likes = document.querySelectorAll(".likes")
// make a loob for hearts 
hearts.forEach(heart =>{
    heart.onclick = function () {
        heart.classList.toggle("heartActive");
        document.getElementById("post1like").innerHTML = "501";
    };
});

// comment part 
// comment part 
// comment part 
$("#com1-i").click(function(){
    $(".home-post1 .comments").toggle();
    $(".home-post1 .comments").attr("data-aos","fade-down");
    $(".home-post2").toggle();
    AOS.init();
});
$("#com2-i").click(function(){
    $(".home-post2 .comments").toggle();
    $(".home-post2 .comments").attr("data-aos","fade-down");
    $(".home-post3").toggle();
    AOS.init();
});
$("#com3-i").click(function(){
    $(".home-post3 .comments").toggle();
    $(".home-post3 .comments").attr("data-aos","fade-down");
    AOS.init();
});
//##################################
// scroll event for postes
// scroll event for postes
// scroll event for postes
//##################################
let postScroll = document.querySelectorAll(".scroll");
postScroll.forEach(function () {
    $(window).scroll(function(){
        //when scrolling
        var windowScroll=$(this).scrollTop();
        //element space before it
        var offset = postScroll.offset();
        var timerOffsetTop = offset.top;
        //element real height
        var timerOuterHeight = postScroll.outerHeight();
        //window fixed height
        var windowHeight = $(this).height();
        /*
        console.log(windowScroll);
        console.log(timerOffsetTop);
        console.log(timerOuterHeight);
        console.log(windowHeight);
        */
        if((windowScroll>(timerOffsetTop+timerOuterHeight-windowHeight))){
        //count to plugin
        AOS.init();
        //$(window).off('scroll');
        }
    });
});
//@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@
// go up button 
// go up button 
//@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@

var goUpBtn = document.getElementById("goUpBtn");
window.onscroll = function () {
    if (window.pageYOffset >= 160) {
        goUpBtn.style.display = "block";
    } else {
        goUpBtn.style.display = "none";
    }
};
goUpBtn.onclick = function () {
    window.scrollTo(0,0);
};
// menu Right bar function 
// menu Right bar function 
$("#menuRightBar").click(function () {
    $(".home-right-bar").toggle();
    $(".home-right-bar").attr("data-aos","fade-right");
    AOS.init();
});