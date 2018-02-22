function cooperation() {
    var cooperation={
        path:"res/img/cooperation/",
        banner:{
            img:"02.jpg"
        },
        partner:{
            img:"01_03.jpg",
            p:"魅诗肌品牌旗下产品由二天堂制药有限公司专业人员科学配比而成，产品原材料都是萃取植物精华，产品的PH值在6.5弱酸内，对人体肌肤\n" +
            "温和无害，并且，二天堂制药有限公司对产品的研发在不断的更新，希望做出效果更好、见效更快的温和、安全的产品"
        },
        introduce:{
            img:"05.jpg",
            p:["\n" +
            "“二天堂”商号源自明代启蒙读物《幼学琼林》中的两句“敢救死之恩，曰再造；诵再生之德。曰二天。” 清末年间，二天堂在" +
            "广州一德西路483号开设了首家店铺。之后，在上海北四川路1315-1317号、以及香港、马来西亚、越南、柬埔寨、印尼、泰国、" +
            "新加坡等东南亚地区开设分号，都在大门外悬挂起“二分苍生情入药，天道酬勤仁者医”的楹联，寄寓了二天堂人创业以来一直" +
            "秉持的悲悯情怀。由于种种难以驾驭的原因，二天堂在上世纪中期开始暂停服务40多年。",
            "直至1989年春，第一家分店选址于广州沙河二横路（即沙河电影对面）重新开业，新的二天堂在秉承先辈的基础上根据社会的需" +
            "求大幅度调整与拓展公司的业务。同年成立了制药厂和科研中心，为确保药材的选材地道，在四川、云南、广西等地设立自己的" +
            "中药材基地，至今达13600多亩。目前二天堂已拥有13家子公司专注于健康、环保、绿色产业的发展，业务遍及科研、制药、批" +
            "发、医疗、化妆品、中药厂、药膳、中药材养殖地等项目，为社会提供更为多元的服务。"]
        },
        start:{
          h3:"合作的开始",
          h6:"Start cooperation",
          p:["针对问题性肌肤的研究学术发现，常见的问题性肌肤可以通过有效的植物萃取，在每天的早晚使用护理中，循环递进得到改善并且深层的护理受损的肌肤。那么到底每种不一样的肌肤问题，需要用到哪些配方的植物萃取可以更好的改" +
          "善并且深层的护理受损的肌肤预防以后反复的发作呢？并且，每一个人的肤质不同，护肤品的适用页不同，该如何保证适用大部分人的肌肤，并且效果又不会缩减呢？这些问题，成了改善问题性肌肤的阻碍，要想生产出能改善问题性" +
          "肌肤的产品就必须先把这些问题解决。\n",
          "于是，带着这些问题，魅诗肌（CHARM’S SKIN）总裁李总回到国内，因为中国五千年文化的中医传承博大精深，结合西方皮肤护理知识，李总来到广州二天堂制药有限公司与相识多年的老朋友张总讨论这方面的问题，作为清朝就" +
          "已经存在的药企，经过这百年时间的积累，二天堂针对植物萃取的药学原理，有非常深厚的认识，拥有制药资质生产设备，并对临床皮肤问题形成的解决以及预防有很好的概念，经过两人不断的探讨，与专业人员的研究，渐渐的对于" +
          "改善问题性肌肤的问题有了头绪，最终，双方合作正式开始。\n"]
        },
        births:{
            h3:"产品诞生",
            h6:"Product birth",
            p:["魅诗肌旗下产品原材料都是由萃取植物精华再加上二天堂药企专业人员科学配比而成，产品的PH值在6.5弱酸内，对人体肌肤温和无害，并通过了国家药监局的检测备案，与市场上常见的护肤品相比，效果更好，见效更快，更加温和无刺激，同时有专业肌肤调理师团队对您肌肤问题提出产品搭配方案。"]
        },
        init:function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","none");
                window.parent.$(".navbar-brand:first").css("display","block");
            }
            //banner
            $("#banner").attr("src",cooperation.path+cooperation.banner.img);
            //partner
            $("#partner1 img:first").attr("src",cooperation.path+cooperation.partner.img);
            $("#partner2 p:first").html(cooperation.partner.p);
            //introduce
            $("#introduce img:first").attr("src",cooperation.path+cooperation.introduce.img);
            $("#introduce p").each(function (index) {
                $(this).html(cooperation.introduce.p[index]);
            });
            //start
            $("#start h3").html(cooperation.start.h3);
            $("#start h6").html(cooperation.start.h6);
            $("#start p").each(function (index) {
                $(this).html(cooperation.start.p[index]);
            });
            //births
            $("#births h3").html(cooperation.births.h3);
            $("#births h6").html(cooperation.births.h6);
            $("#births p").each(function (index) {
                $(this).html(cooperation.births.p[index]);
            });
        }
    }
    cooperation.init();
}