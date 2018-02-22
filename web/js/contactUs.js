function contactUs() {
    var contactUs={
        path:"res/img/contactUs/",
        img:{
            banner:"banner.jpg",
            title:"title.jpg",
            address:"address.png",
            telephone:"telephone.png",
            email:"email.png"
        },
        init:function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","block");
                window.parent.$(".navbar-brand:first").css("display","block");
            }
            //banner
            $("#banner").attr("src",contactUs.path+contactUs.img.banner);
            //title
            $("#title img:first").attr("src",contactUs.path+contactUs.img.title);
        }
    }
    contactUs.init();
}