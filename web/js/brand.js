function brand() {
    var brand = {
        path: "res/img/brand/",
        banner: {
            img: "02.jpg"
        },
        brand: {
            img: "03.jpg",
            p: "魅诗肌品牌的核心理念是“助您获取健康肌肤，打造魅力肌肤”，为此，魅诗肌不断深入肌肤探索，综合众多天然成分的深度研究成果，将\n" +
            "现代的美肤概念融入产品，最终创建了魅诗肌品牌，为肌肤问题提供专业的解决、改善方案。"
        },
        introduce: {
            img: "05.jpg",
            p: ["魅诗肌是由百年药企设计与研发独特配方，拥有强大的高级皮肤调理师的护肤品牌，基于深厚的研究背景，不断深化在问题肌肤上" +
            "的研究工作，包括建立在皮肤研究室及化妆品研究中心。企业从科学、研发的两个维度，不断打造优质产品及服务。虔诚真心凝听" +
            "每一位消费者的声音，是魅诗肌品牌的责任与使命，同时确立了魅诗肌在专业高级皮肤管理行业资深的地位。",
                "魅诗肌对产品的质量符合国家检测标准、符合国家食品药品检测管理局（CFDA）的备案，严格把关监控，魅诗肌与百年药企具备" +
                "生产资质的生产商合作，整合世界优质原料，并经过周密的安全性、稳定性的实验验证，确保每一样产品都能符合魅诗肌对于护肤" +
                "领域资深用心的护肤之作。"]
        },
        birth: {
            h3: "品牌的诞生",
            h6: "Brand birth",
            p: ["随着生活节奏的加快，敏感、暗淡、粉刺、敏感肌肤、痘印、痘坑等肌肤问题层出不穷，并且皮肤问题发生的年龄越来越年轻，然而90%的人遇到皮肤问题时，面临的问题是没有专业皮肤科医师咨询渠道，而医院亦没有提供专业的护" +
            "肤指导及产品。为了让更多的人可以得到专业的肌肤护理咨询及解决方案，魅诗肌品牌创始人以皮肤管理研究为基础，融合现代护肤理念，创建了专业护肤品牌—魅诗肌（chanrm’s skin）。魅诗肌始终坚信，光滑细腻充满魅力的" +
            "肌肤，首先需要的是健康的肌肤。魅诗肌结合各种人群、各种肤质特点，研究多种皮肤问题出现的原理与优秀的解决方案，调配有效的专业配方，从调、修、护三方面给予安全有效的解决方案，魅诗肌缔造每个皮肤本该拥有的魅力之" +
            "肌，魅诗肌是因肌肤问题而诞生的。",
                "魅诗肌的总裁李总回国后与广州二天堂制药有限公司张总对于肌肤问题进入了深入探讨，于是两人决定合作，制造出能有效改善人体肌肤问题的护肤品，配方的研究与产品的生产交于二天堂制药有限公司，二天堂制药有限公司是清朝" +
                "就已经存在的药企，距今已有百年的时间，针对植物萃取的药学原理，有着非常深厚的认识，拥有制药资质生产设备，并对临床皮肤问题形成的解决以及预防有很好的理念，魅诗肌在皮肤管理的资深经验，针对不同皮肤采取不同的优" +
                "秀调理方案，结合具备我国制药标准的二天堂制药车间，生产出高标准高质量的护肤品。"]
        },
        search: {
            h3: "研究中心",
            h6: "Brand birth",
            p: ["二天堂制药有限公司是魅诗肌品牌的研究中心，作为百年药企，二天堂制药厂占地面积13000多平方米，建筑面积为6500多平方米，内部生产区、行政区、辅助区、生活商品化设计布局合理。厂房总投资3700万人民币，拥有固定资\n" +
            "产2870万元人民币，年产值达一亿多人民币。"]
        },
        init: function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","none");
                window.parent.$(".navbar-brand:first").css("display","block");
            }
            //banner
            $("#banner").attr("src", brand.path + brand.banner.img);
            //brand
            $("#brand1 img:first").attr("src", brand.path + brand.brand.img);
            $("#brand2 p:first").html(brand.brand.p);
            //introduce
            $("#introduce img:first").attr("src", brand.path + brand.introduce.img);
            $("#introduce p").each(function (index) {
                $(this).html(brand.introduce.p[index])
            })
            //birth
            $("#birth h3:first").html(brand.birth.h3);
            $("#birth h6:first").html(brand.birth.h6);
            $("#birth p").each(function (index) {
                $(this).html(brand.birth.p[index]);
            });
            //search
            $("#search h3:first").html(brand.birth.h3);
            $("#search h6:first").html(brand.birth.h6);
            $("#search p").each(function (index) {
                $(this).html(brand.birth.p[index]);
            });
        }
    }
    brand.init();
}