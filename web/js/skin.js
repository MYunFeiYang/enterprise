var skin;
function skinInit() {
    skin={
        path:"res/img/skin/",
        banner:{
            img:"banner.jpg"
        },
        skin:{
            img:"title.png"
        },
        content:{
            img:["痘痘肌肤.jpg","粉刺肌肤.jpg","敏感肌肤.jpg","激素脸.jpg","黑头粉刺.jpg","“大油田”肌肤.jpg"],
            h3:["痘痘肌肤","粉刺肌肤","敏感肌肤","激素脸","黑头粉刺","“大油田”肌肤"],
            p:["痘痘在医学上称为痤疮，痤疮皮肤是常见于青春期脸上的脓包，病程长，皮肤发暗，比较粗糙，伴有单个或成片的炎" +
            "性病灶，据学者统计，在青春期男性有95%，女性有85%患过不同程度的痤疮，所以大家称其为“青春痘”是很贴切" +
            "的，痤疮是一种...",
            "粉刺分为两种，一种是开放性粉刺，我们俗称黑头，一种是闭合性粉刺，也是我们所说的白头，白头粉刺起主导作用" +
            "的是内分泌系统。雄性激素分泌活跃，会导致皮脂腺肥大，皮脂分泌过多；与此同时，毛囊皮脂腺上皮发生角化而使" +
            "排泄皮脂的通道...",
            "敏感肌肤是一种问题性肌肤，任何肤质中都可能有敏感性肌肤，如同各种肤质都可能有老化肤质、痘痘肤质等，敏感" +
            "肌肤是因为皮肤细胞受损而使皮肤的免疫力下降，角质层变薄导致皮肤滋润度不够，最终导致肌肤的屏障功能过于薄" +
            "弱，无法抵御外...",
            "激素脸也称激素性痤疮，属于药物性痤疮的一种，激素脸是因为间断或者长时间的滥用激素药膏或暗含激素的美容化" +
            "妆品，引起激素的毒副作用所造成的一种严重皮肤病。它有别于普通的皮肤敏感或者是过敏，因其不仅严重的破坏了" +
            "皮肤的正常生理...",
            "黑头主要是有皮脂、细胞屑和细菌组成的一种“栓”样物，阻塞在毛囊开口处而形成的，加上空气中的尘埃、污垢和" +
            "氧化作用，使其接触空气的一头逐渐变黑，所以得了这么一个不太雅致的称号——黑头。黑头是硬化油脂阻塞物，通" +
            "常出现在颜面的...",
            " 油性肌肤最常见于青春期及一些体内伴雄性激素水平高或具有雄性激素高敏感受体的人群。油性皮肤皮脂分泌旺盛，" +
            "与其含水量<20%不平衡，pH<4.5，皮肤看上去油光发亮、毛孔粗大、皮肤色暗且无透明感，但皮肤弹性好。这类型" +
            "皮肤对日晒和环..."],
        },
        init:function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","none");
                window.parent.$(".navbar-brand:first").css("display","block");
            }
            //banner
            $("#banner").attr("src",skin.path+skin.banner.img);
            //skin
            $("#skin img:first").attr("src",skin.path+skin.skin.img)
            //content
            $("#content img").each(function (index) {
                $(this).attr("src",skin.path+skin.content.img[index])
            });
            $("#content h3").each(function (index) {
                $(this).html(skin.content.h3[index]);
            });
            $("#content p").each(function (index) {
                $(this).html(skin.content.p[index]);
            });
        },
    }
    skin.init();
}
$(document).scroll(function(e) {
    if($(document).scrollTop()!=0){
        $("#skin img:first").removeClass("animated flipInX");
        $("#skin img:first").addClass("animated flipOutX");
        $("#skin img:first").css("animation-delay","0");
        $("#skin img:first").css("transform-origin","center bottom");
    }
    else{
        $("#skin img:first").removeClass("animated flipOutX");
        $("#skin img:first").addClass("animated flipInX");
    }
});
$(window).ready(function () {
    if ($(window).width()>360){
        $("#content .row").each(function () {
            $(this).hover(function () {
                $(this).find("img:first").addClass("animated slideInUp");
                $(this).find("button:first").css("background","#00a0e9");
                $(this).find("button:first").css("color","white");
                $(this).find("button:first").css("border","none");
                $(this).find("h3:first").css("color","#00a0e9");
            },function () {
                $(this).find("button:first").css("background","white");
                $(this).find("button:first").css("color","grey");
                $(this).find("button:first").css("border","1px solid grey");
                $(this).find("h3:first").css("color","grey");
            })
        })
    }
})