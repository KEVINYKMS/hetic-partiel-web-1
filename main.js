var top = {
    back_to_top : document.getElementById("backtotop")
}


document.addEventListener('scroll', function(){
    if( window.pageYOffset > 200 ){
        top.back_to_top.classList.add('visible');
    }else{
        top.back_to_top.classList.remove('visible');
    }
});

top.back_to_top.addEventListener('click', function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
});


var burgerMenu = document.querySelector('#burgerMenu1');
var mainNavigationList = document.querySelector('#mainav ul');

burgerMenu.addEventListener('click', function() {
	if (mainNavigationList.style.display === "none") {
		mainNavigationList.style.display = "block";
	} else {
		mainNavigationList.style.display = "none";
	}
});
