// 模糊查询

//获取输入框
let keyword = document.querySelector(".keyword");
//获取下拉列表
let searchHelper = document.querySelector(".search-helper");

// 定义数组，存储搜索内容

let searchArr = ["小米手机", "苹果手机", "vivo手机", "锤子手机", "小米手表", "苹果watch", "苹果ipad",
    "苹果手表", "苹果电脑", "锤子手机", "三星手机", "华为手机",];

//给输入框绑定内容改变事件
console.log(keyword);
keyword.oninput = function () {
    searchHelper.innerHTML = "";
    for (let i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(keyword.value) != -1) {
            searchHelper.innerHTML += "<p>" + searchArr[i] + "</p>";
            searchHelper.style.display = "block";
        }
    }
}
keyword.onblur = function () {
    searchHelper.style.display = "none";
}



// 轮播图的切换-------------------------------

let img = document.querySelector(".img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let slider = document.querySelector(".slider");

let lis = document.querySelectorAll(".banner-btn li");

let imgArr = ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg", "b6.jpg", "b7.jpg"];

let count = 0;

//定义函数，切换图片路径
function cutImg() {
    img.src = "images/" + imgArr[count];

    for (let i = 0; i < lis.length; i++) {

        lis[i].className = "";
    }
    lis[count].className = "active";

}

//设置定时器，3秒切换一次图片
let timer = setInterval(function () {
    count++;

    if (count > imgArr.length - 1) {
        count = 0;
    }
    cutImg();
}, 2000);


//点击下一张-------------

next.onclick = function () {
    count++;
    if (count > imgArr.length - 1) {
        count = 0;
    }
    cutImg();
}

prev.onclick = function () {
    count--;
    if (count < 0) {
        count = imgArr.length - 1;
    }
    cutImg();
}
//鼠标划入div，将定时切换图片干掉
slider.onmouseover = function () {
    clearInterval(timer);

}
//鼠标离开div，将定时器继续
slider.onmouseout = function () {
    timer = setInterval(function () {
        count++;

        if (count > imgArr.length - 1) {
            count = 0;
        }
        cutImg();
    }, 2000);
}

// 给li绑定点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = () => {
        count = i;
        cutImg();
    };

}



// 楼层定位-------------------------------

let top_nav = document.querySelector(".top-nav");
let nav = document.querySelector(".nav");
let banner = document.querySelector(".banner");
let e = document.querySelector(".e");

document.onscroll = function () {
    //获取滚动条滚动乐多少高度
    let top = document.documentElement.scrollTop || document.body.scrollTop;

    //获取header的高读
    let navHeight = nav.offsetHeight;       //包括height,pading,border

    let bannerHeight = banner.offsetHeight;


    //当滚动条滚动到一定程序，将楼层高度改为固定定位 
    if (top >= 440) {
        e.className = "e e-fix";
    } else {
        e.className = "e";
    }
}