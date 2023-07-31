// 模糊查询--

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

let t = document.querySelector(".top");//30px
let nav = document.querySelector(".nav");       //140px
let banner = document.querySelector(".banner"); //480px+button:30px
let e = document.querySelector(".e");

//包括height,pading,border////使用 clientHeight 属性返回元素的可见高度和宽度，仅包括内边距padding
let tHeight = t.offsetHeight; //top-nav的高度

let navHeight = nav.offsetHeight;//获取header的高读

let bannerHeight = banner.offsetHeight;//banner的高读



//楼层滚动文字改变颜色---------------------
let ad = document.querySelector(".ad"); //囧东秒杀
let adHeight = ad.offsetHeight;
let content = document.querySelector(".content"); //频道广场
let contentHeight = content.offsetHeight;
let recommend = document.querySelector(".recommend"); //为你推荐
let recHeight = recommend.offsetHeight;



let ea = document.querySelectorAll(".e-a")       //获取所有的a,改变颜色
let topE = bannerHeight + navHeight + tHeight + 30;      //基础高度
let eArr = [topE, topE + adHeight, topE + contentHeight, recHeight + topE];//数组存各个div的高度
console.log(ea[3]);

document.onscroll = function () {
    //获取滚动条滚动乐多少高度
    let top = document.documentElement.scrollTop || document.body.scrollTop;


    //当滚动条滚动到一定程序，将楼层高度改为固定定位 
    if (top >= topE) {
        e.className = "e e-fix";
    } else {
        e.className = "e";
    }
    //------------清除颜色的函数--------
    function clearColor() {
        for (let i = 0; i < eArr.length; i++) {
            ea[i].style.color = "";

        }
    }

    //改变颜色
    if (top > eArr[0] && top < eArr[1]) {
        clearColor();
        ea[0].style.color = "red";
    } else if (top > eArr[1] && top < eArr[2]) {
        clearColor();
        ea[1].style.color = "red";
    } else if (top > eArr[2]) {
        clearColor();
        ea[2].style.color = "red";
    }
    // console.log(top);
    // console.log(eArr[2]);
    // console.log(ea[3]);
    // console.log(top < 3693);

    //---------------头部吸顶效果-------------------
    let search = document.querySelector(".search")
    let searchM = document.querySelector(".search-content")
    let form = document.querySelector(".search-bar")
    let shop = document.querySelector(".shop")
    let search_logo = document.querySelector(".search-logo")
    console.log(search);
    if (top >= topE) {
        search.className = "search search-fix";//覆盖样式，优先级后写的生效
        searchM.style.height = "50px";
        form.style.top = "8px";
        shop.style.top = "8px";
        search_logo.style.display = "block";
    } else {
        search.className = "search";
        searchM.style.height = "60px";
        form.style.top = "25px";
        shop.style.top = "25px";
        search_logo.style.display = "inline";
    }
}



