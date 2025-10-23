// 获取搜索表单元素
let searchForm = document.querySelector('.search-form');

// 当点击搜索按钮时触发事件(复制HTML)
document.querySelector('#search-btn').onclick = () => 
{
    // 切换 active 类，实现显示/隐藏搜索表单
	searchForm.classList.toggle('active');

	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

// 获取商品表单元素
let shoppingCart = document.querySelector('.shopping-cart');

// 当点击搜索按钮时触发事件
document.querySelector('#cart-btn').onclick = () => 
{
    // 切换 active 类，实现显示/隐藏搜索表单
	shoppingCart.classList.toggle('active');

	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

// 获取登录表单元素
let loginForm = document.querySelector('.login-form');

// 当点击登录按钮时触发事件
document.querySelector('#login-btn').onclick = () => {
    // 切换 active 类，实现显示/隐藏登录表单
    loginForm.classList.toggle('active');

    searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
};


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	
};

window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

