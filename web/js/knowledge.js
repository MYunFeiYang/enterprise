var knowledge
function initKnowledge() {
    knowledge={
        path:"res/img/knowledge/",
        banner:{
            img:"banner.jpg"
        },
        title:{
            img:"title.jpg"
        },
        content:{
            img:["抑痘时该注意什么？.jpg",
                "油性肌肤用什么面膜？.jpg","冬天来了，我们该怎么在冬天护肤呢？.jpg",
                "明星皮肤这么好，原来是有原因的.jpg",
                "肌肤缺水该怎么用喷雾紧急补水？.jpg",
                "敏感肌肤是什么肌肤？.jpg","敏感肌肤要注意什么？.jpg",
                "每天吃这几样水果.jpg","添加了这几样原料的护肤品千万不要买.jpg"],
            h3:["抑痘时该注意什么？怎么做才能正确有效的抑痘？",
            "油性肌肤用什么面膜？","冬天来了，我们该怎么在冬天护肤呢？",
            "明星皮肤这么好，原来是有原因的！",
            "肌肤缺水该如何用喷雾来紧急补水呢？出门只用一瓶喷雾，就可...",
            "敏感肌肤是什么肌肤？看过之后你就明白了","敏感肌肤要注意什么？",
            "每天吃这几样水果，可以让肌肤水润光滑","添加了这几样原料的护肤品千万不要买！"],
            p:["青春痘的形成是因为皮脂腺分泌油脂，会通过皮脂腺导管，输送到皮肤表层的毛孔排出，进入青" +
            "春期，皮脂腺油脂分泌就会旺...",
            "相信大家都知道，皮肤有一个自我保护系统，当皮肤深层缺水时皮肤就会分泌出大量的油脂来保护皮肤，油性肌肤就是因为肌...",
            "冬天已经到了，很多朋友都不知道该怎么在这季节护肤，其实，在冬天护肤有一点很重要，那就" +
            "是肌肤的补水工作，北方的朋...\n",
            "很多朋友经常看到电视上那些明星皮肤很好，常常会惊讶，为什么她们岁数那么大了，皮肤却还" +
            "是这么好？其实，她们很注重..\n",
            "相信朋友们都遇到过这种情况，那就是出门后肌肤缺水，要给肌肤补水很不方便，没办法，总不" +
            "能带张补水面膜或者带瓶补水...\n",
            "我们时不时的在某篇文章或者某篇报道看到“敏感肌肤”这四个字眼，可很多人却不知道敏感肌" +
            "肤是什么肌肤，今天，我们就...",
            "很多人饱受敏感肌肤的苦，周围环境一变化，亦或是气温、季节变化，敏感肌肤各种症状就凸显" +
            "而出，微微一受刺激，皮肤就...",
            "很多人看了标题后就奇怪了，水果也能美容吗？答案是当然的，涨姿势了吧？小编告诉你，水果" +
            "的美容作用可不小哦，特别是...\n",
            "我们在护肤品上常常可以看到包装上写着无任何刺激添加，你们只知道无任何刺激添加的是安全" +
            "的护肤品，可你们知道无任何..."],
        },
        classify:[[0,4,8],[1,2],[3,7],[5,6]],
        init:function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","none");
                window.parent.$(".navbar-brand:first").css("display","block");
            }
            //banner
            $("#banner").attr("src",knowledge.path+knowledge.banner.img);
            //title
            $("#title img:first").attr("src",knowledge.path+knowledge.title.img);
            //content
            $("#content img").each(function (index) {
                $(this).attr("src",knowledge.path+knowledge.content.img[index])
            });
            $("#content h3").each(function (index) {
                $(this).html(knowledge.content.h3[index])
            });
            $("#content p").each(function (index) {
                $(this).html(knowledge.content.p[index])
            });
        }
    }
    //显示全部模块
    $("#content img").each(function () {
        $(this).parent().parent().parent().parent().css("display","block");
    });
    knowledge.init();
}
function classify(m) {
    //显示全部模块
    $("#content img").each(function () {
        $(this).parent().parent().parent().parent().css("display","block");
    });
    var j;
    var content_img=document.getElementById("content").getElementsByTagName("img");
    for (var i=0;i<knowledge.classify[m].length;i++){
        j=knowledge.classify[m][i];
        content_img[i].setAttribute("src",knowledge.path+knowledge.content.img[j]);
        content_img[i].parentNode.parentNode.parentNode.parentNode.setAttribute("onclick","knowledge_detail_link(${"+j+"})")
    }
    //清除多余模块
    for (var i=knowledge.classify[m].length;i<content_img.length;i++){
        content_img[i].parentNode.parentNode.parentNode.parentNode.style.display="none";
    }
    var content_h3=document.getElementById("content").getElementsByTagName("h3");
    for (var i=0;i<knowledge.classify[m].length;i++){
        j=knowledge.classify[m][i];
        content_h3[i].setAttribute("src",knowledge.path+knowledge.content.h3[j]);
    }
    var content_p=document.getElementById("content").getElementsByTagName("p");
    for (var i=0;i<knowledge.classify[m].length;i++){
        j=knowledge.classify[m][i];
        content_p[i].setAttribute("src",knowledge.path+knowledge.content.p[j]);
    }
}
$(document).scroll(function(e) {
    if ($(window).width()>=768){
        if($(document).scrollTop()!==0){
            $("#title img:first").removeClass("animated flipInX");
            $("#title img:first").addClass("animated flipOutX");
            $("#title img:first").css("animation-delay","0");
            $("#title img:first").css("transform-origin","center bottom");
            if ($(".row:first").offset().top-$(window).scrollTop()<0){
                $("#fixed").stop();
                $("#fixed").css("position","fixed");
            }else {
                $("#fixed").stop();
                $("#fixed").css("position","absolute");
                $("#fixed").animate({"top":"0"});
            }
        }
        else{
            $("#title img:first").removeClass("animated flipOutX");
            $("#title img:first").addClass("animated flipInX");
            $("#fixed").stop();
            $("#fixed").css("position","absolute");
            $("#fixed").animate({"top":"10px"});
        }
        $(".knowledge_nav li").click(function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        })
    }
});
$(document).ready(function () {
    if ($(window).width()>768){
        $("#content .row").each(function (index) {
            $(this).mouseenter(function () {
                $(this).find("img:first").addClass("animated slideInUp");
            })
            $(this).hover(function () {
                $(this).find("h3:first").css("color","#00a0e9");
                $(this).find("img:first").attr("src",knowledge.path+(index+1)+".jpg");
            },function () {
                $(this).find("h3:first").css("color","grey");
                $(this).find("img:first").attr("src",knowledge.path+knowledge.content.img[index]);
            });
        })
    }
});