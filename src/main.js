//navbar toggle
const hamburger=document.querySelector('.hamburger');
const right=document.querySelector('.fa-align-left');
const left=document.querySelector('.fa-arrow-left');

// let openNav=function(){
//   right.classList.toggle('hide');
//   left.classList.toggle('hide');
// };

// hamburger.addEventListener('click',openNav);

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}



// 宣告元素變數
const moon = document.querySelector('.moon');
const room = document.querySelector('.room');
const clouds=document.querySelectorAll('#cloud');
const headline = document.querySelector('.header_headline');

// [0]:aboutme的卡片





// 設定初始變數值
let value = window.scrollY;
let scale = window.pageYOffset;

// 監聽 scroll 事件
window.addEventListener('scroll', function() {
  // 更新變數值
  let value = window.scrollY;
  let scale = window.pageYOffset;

  // 控制 .room 元素的位置和大小
  if (scale < 300) { 
    headline.style.visibility = 'visible';  
    room.style.visibility = 'hidden';
 
  } else if (scale >= 300 && scale < 630) {
    room.style.top = 100 + value * 0.85 + 'px';
    room.style.transform = `scale(${2.2 - value * 0.00191})`;
    room.style.visibility = 'visible';
    headline.style.visibility = 'hidden';
 


  } else {
    room.style.transform = '';
    room.style.top = '';
 

    headline.style.visibility = 'hidden';


  }

   // 控制 hesder parallax 元素的位置和大小
  if(scale<400){
    moon.style.transform = `scale(${1 - value * 0.0018})`;
    moon.style.left=100+ value*0.7+'px';
    moon.style.top=20+ -value*0.8+'px';
    headline.style.transform = `scale(${1 - value * 0.001})`;
    moon.style.visibility = 'visible';  




    clouds[0].style.left=200+ -value*0.5+'px';
    clouds[0].style.top=80+ -value*0.4+'px';  

    clouds[1].style.left=80+ -value*0.2+'px';
    clouds[1].style.top=200+ -value*0.5+'px';

    clouds[2].style.right=80+ -value*0.1+'px';
    clouds[2].style.top=200+ -value*0.5+'px';

    clouds[3].style.right=200+ -value*0.4+'px';
    clouds[3].style.top=80+-value*0.5+'px';


    clouds.forEach(function(cloud) {
        cloud.style.transform = `scale(${1 - value * 0.0009})`;
      });
  }else{
    moon.style.visibility = 'hidden';


  };

// aboutme開關
if(scale >= 1800 && scale < 3000){
  lightUp();
}else{
  lightDown();
};

console.log(scale);
});



// aboutme開關

let lightBtn=document.querySelector('.light_btn');
let body=document.querySelector('.projects');
let lightUp=function(){
    body.classList.add('on');
};
let lightDown=function(){
    body.classList.remove('on');
};


const words = ["美術設計  ", "網頁前端  ", "資料庫管理  ", "網頁後端  "]

let cursor = gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:1, width:"17vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: () => masterTl.play() })
  .to('.box', {duration:2, autoAlpha:0.7, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1.5})
  tl.to('.text', {duration: 1, text:word})
  masterTl.add(tl)
})

//email

function SendMail(){
  
  let params={
    from_name:document.getElementById("fullName").value,
    email_id:document.getElementById("email_id").value,message:document.getElementById("message").value
  }
  emailjs.send("service_bzcuis9","template_vml9pyj",params).then(function(res){
    alert("success"+res.status);
  })
  setTimeout((function reset(){
    document.getElementById("fullName").value='';
    document.getElementById("email_id").value='';
    document.getElementById("message").value='';
    console.log('reset');
}),2000);
}


// gallery scroll
// let t2=gsap.timeline({
//   scrollTrigger:{
//     trigger:'.project',
//     start:"center bottom"
//   }
// });
// t2.from("projects_img",{ x:200,opacity:0,duration:1.5})
//   .from(".content",{ y:300,opacity:0,duration:1},"-=1")
