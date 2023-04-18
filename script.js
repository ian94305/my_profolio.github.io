// 首頁視差

const sun=document.querySelector('.header_sun');
const headline=document.querySelector('.headline');

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    let cloudInit=200;
    let cloudMiddle=400;
    let sunInit=150;
    if(value<800){   
        sun.style.top=value*0.08+'px';
        sun.style.left=sunInit+value*1+'px';
        this.document.getElementById('cloud_right').style.right=cloudInit+value*1.3+'px';
        this.document.getElementById('cloud_middle').style.left=cloudMiddle+value*0.5+'px';
        this.document.getElementById('cloud_left').style.left=cloudInit+value*1.3+'px';
        headline.style.display ='block';
        sun.style.display = 'block';
    }else{
        headline.style.display = 'none';
        sun.style.display = 'none';
    }
  })


// aboutme開關

let lightBtn=document.querySelector('.light_btn');
let body=document.querySelector('.skills');
lightBtn.onclick=function(){
    body.classList.toggle('on');
}


