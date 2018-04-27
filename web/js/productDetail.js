var productDetail;

function initproductDetail(m) {
    productDetail = {
        path: "res/img/product/detail/",
        imgFile: ["氨基酸柔肤卸妆液/", "奥氏海藻调理水/", "北美金缕梅抑痘净颜膜/", "北美金缕梅抑痘凝胶/",
            "复活草深层修护乳/", "复活草深层柔肤修护精华/", "复活草多效修护面膜/", "橄榄净颜洗面奶/", "马齿苋粉刺修护精华/",
            "仙人掌抑痘精华/", "粉刺修护套装/", "复活草修护套装/", "轻度抑痘套装/", "中度抑痘套装/", "重度抑痘套装/", "重度粉刺修护套装/"],
        img: ["主图.jpg", "缩略图.jpg", "产品详情页.jpg"],
        content: [
            {
                name: "氨基酸柔肤卸妆液",
                function: "温和卸除肌肤深层污垢",
                price: "￥258.00",
                spec: "150ml",
                main: {
                    p: ["魅诗肌氨基酸柔肤卸妆液", "魅诗肌", "150ml", "任何肤质", "深层卸妆、温和护肤",
                        "温和卸除肌肤深层污垢，可溶解持久型和防水型彩妆，令肌肤清爽洁净。",
                        "皮肤学深度卸妆配方，专为问题肌肤卸妆研发，无任何刺激添加，绿色温和，在卸妆的基础上呵护皮肤。",
                        "取适量卸妆液倒在化妆棉上以向外运动的手势，轻轻反复擦拭脸部与眼部知道面部变得干净。"]
                }
            },
            {
                name: "奥氏海藻调理水",
                function: "深层调理受损肌肤",
                price: "￥236.00",
                spec: "120ml",
                main: {
                    p: ["魅诗肌奥氏海藻调理水", "魅诗肌", "150ml", "任何肤质", "深层调理，修护受损",
                        "深度洁净渗透，调理肤质，达到有效修护肌肤底层，补充肌肤所需透明质酸，修护肌肤、改善毛孔粗大。",
                        "皮肤学深层调理配方，专为问题肌肤调理修护研发，无任何刺激添加，绿色温和，让肌肤持久水盈满溢。",
                        "取适量调理水倒在化妆棉或直接涂抹于面部轻拍至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "北美金缕梅抑痘净颜膜",
                function: "抑制调理痘痘",
                price: "￥396.00",
                spec: "200ml",
                main: {
                    p: ["魅诗肌北美金缕梅抑痘凝胶", "魅诗肌", "200g", "任何肤质", "抑制痘痘",
                        "深层清洁，抑制痘痘和调理痘痘，深入肌肤底层，抑制轻中度痘痘、白头粉刺。\n",
                        "皮肤学深层抑痘配方，专为问题肌肤深层抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "洁面后，取适量产品涂抹于面部轻柔按摩至吸收，避开眼睛部位，敷15分钟后温水洗净。"]
                }
            },
            {
                name: "北美金缕梅抑痘凝胶",
                function: "抑制调理痘痘",
                price: "￥258.00",
                spec: "25g",
                main: {
                    p: ["魅诗肌北美金缕梅抑痘凝胶", "魅诗肌", "25g", "任何肤质", "抑制痘痘",
                        "修护受损肌肤，舒缓痘痘肌肤。",
                        "皮肤学深层抑痘配方，专为问题肌肤深层抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "洁面后，取适量凝胶点涂痘痘位置，轻柔按摩至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "复活草深层修护乳",
                function: "修护深层受损肌肤",
                price: "￥456.00",
                spec: "80ml",
                main: {
                    p: ["复活草深层修护乳", "魅诗肌", "80ml", "任何肤质", "深层保湿修护",
                        "修护受损肌肤，淡化细纹干纹，深层补水锁水",
                        "皮肤学深层修护配方，专为问题肌肤深层修护研发，无任何刺激添加，绿色温和，有助于肌肤恢复健康魅力。",
                        "洁面后，取适量产品涂抹于面部轻柔按摩至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "复活草柔肤修护精华",
                function: "修护受损，深层保湿",
                price: "￥336.00",
                spec: "50ml",
                main: {
                    p: ["魅诗肌复活草柔肤修护精华", "魅诗肌", "50ml", "任何肤质", "深层保湿、修护受损",
                        "修护受损肌肤、有效缓解因外部环境引起的肌肤不适，强韧肌底，增强肌肤免疫力。",
                        "皮肤学修护配方，专为问题肌肤修护受损研发，无任何刺激添加，绿色温和，有助于肌肤调理修护受损。",
                        "洁面后，取适量精华倒在化妆棉上或直接涂抹于脸部轻拍至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "复活草多效修护面膜",
                function: "滋养、修护受损肌肤",
                price: "￥272.00",
                spec: "25ml*5片",
                main: {
                    p: ["复活草多效修护面膜", "魅诗肌", "25ml*5片", "任何肤质", "清润滋养、紧致毛孔",
                        "增强肌肤弹性，修护受损肌肤，恢复健康魅力肌肤。",
                        "皮肤学深层修护配方，专为问题肌肤深层修护研发，无任何刺激添加，绿色温和，有助于肌肤恢复健康魅力。",
                        "洁面后，取面膜贴于面部，敷15分钟取膜，轻揉按摩待精华完全被皮肤吸收后，再用温水洗净。每周适用2~3次最好。"]
                }
            },
            {
                name: "橄榄净颜洗面奶",
                function: "深层洁净温和护肤",
                price: "￥178.00",
                spec: "100ml",
                main: {
                    p: ["橄榄净颜洗面奶", "魅诗肌", "100ml", "任何肤质", "深层洁净、温和护肤",
                        "深层清洁肌肤污垢，清理肌肤黑头，清爽不油腻，收缩毛孔。",
                        "皮肤学深层清洁配方，专为问题肌肤深层洁净研发，无任何刺激添加，绿色温和，让肌肤清爽不油腻。",
                        "湿面后取适量洁面乳双手揉出泡沫，然后在面部轻轻按摩打圈，再用清水洗净。"]
                }
            },
            {
                name: "马齿苋粉刺修护精华",
                function: "改善粉刺",
                price: "￥396.00",
                spec: "50ml",
                main: {
                    p: ["魅诗肌马齿苋粉刺修护精华", "魅诗肌", "50ml", "隐性痘痘、粉刺", "改善粉刺痘痘",
                        "帮助皮肤水油平衡及改善毛孔粗大、粉刺再生长等问题。",
                        "皮肤学改善调理粉刺配方，专为问题肌肤改善粉刺研发，无任何刺激添加，绿色温和，有助于肌肤调理改善粉刺痘痘。",
                        "洁面后，取适量精华倒在化妆棉上或直接涂抹于脸部轻拍至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "仙人掌抑痘精华",
                function: "抑制痘痘",
                price: "￥372.00",
                spec: "50ml",
                main: {
                    p: ["魅诗肌仙人掌抑痘精华", "魅诗肌", "50ml", "任何肤质", "平衡水油，抑制痘痘",
                        "深层针对痘痘修护、去除痘痘、抑制痘痘，调理油脂分泌，对重度痘痘优秀调理。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "洁面后，取适量精华倒在化妆棉上或直接涂抹于脸部轻拍至吸收，避开眼睛部位。"]
                }
            },
            {
                name: "粉刺修护套装",
                function: "改善粉刺肌肤",
                price: "￥1028.00",
                spec: "奥氏海藻调理水、马齿苋粉刺修护精华、北美金缕梅抑痘净颜膜",
                main: {
                    p: ["魅诗肌粉刺修护套装", "魅诗肌", "3件", "隐性痘痘、粉刺肌肤", "改善粉刺",
                        "针对粉刺肌肤改善堵塞问题，吸收过剩油脂，帮助打通毛孔吸收通道，改善粉刺再生长问题。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤改善粉刺痘痘。",
                        "见单个产品"]
                }
            },
            {
                name: "复活草修护套装",
                function: "修护受损，深层补水保湿",
                price: "￥1064.00",
                spec: "复活草柔肤修护精华、复活草深层修护乳、复活草多效修护面膜",
                main: {
                    p: ["魅诗肌复活草修护套装", "魅诗肌", "3件", "任何肤质", "修护受损肌肤、补水保湿",
                        "渗透肌肤深层，有助于修护受损肌肤、强韧肌底、修护提升角质层天然屏障，令肌肤恢复自然补水锁水。",
                        "皮肤学修护配方，专为问题肌肤修护保养研发，无任何刺激添加，绿色温和，有助于受损肌肤的修护。",
                        "见单件产品"]
                }
            },
            {
                name: "轻度抑痘套装",
                function: "抑制痘痘、修护受损",
                price: "￥866.00",
                spec: "奥氏海藻调理水、仙人掌抑痘精华、北美金缕梅抑痘凝胶",
                main: {
                    p: ["魅诗肌轻度抑痘套装", "魅诗肌", "3件", "痘痘肌肤", "修护受损，抑制痘痘",
                        "抑制痘痘以及修护受损肌肤，打通毛孔吸收通道、帮助皮肤水油平衡及改善毛孔粗大。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "见单个产品"]
                }
            },
            {
                name: "中度抑痘套装",
                function: "抑制痘痘、修护受损",
                price: "￥1718.00",
                spec: "奥氏海藻调理水、仙人掌抑痘精华、北美金缕梅抑痘凝胶、复活草深层修护乳、北美金缕梅抑痘净颜膜",
                main: {
                    p: ["魅诗肌中度抑痘套装", "魅诗肌", "5件", "痘痘肌肤", "修护受损，抑制痘痘",
                        "抑制痘痘以及修护受损肌肤，打通毛孔吸收通道、帮助皮肤水油平衡及改善毛孔粗大、补水保湿。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "见单件产品"]
                }
            },
            {
                name: "重度抑痘套装",
                function: "抑制痘痘、修护受损",
                price: "￥1930.00",
                spec: "奥氏海藻调理水、仙人掌抑痘精华、北美金缕梅抑痘凝胶、复活草多效修护面膜、北美金缕梅抑痘净颜膜、马齿苋粉刺修护精华",
                main: {
                    p: ["魅诗肌重度抑痘套装", "魅诗肌", "6件", "痘痘肌肤", "修护受损，抑制痘痘",
                        "抑制痘痘以及修护受损肌肤，调整油脂分泌、抑制痘痘肌，补充肌肤水分。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤调理抑制痘痘。",
                        "见单件产品"]
                }
            },
            {
                name: "重度粉刺修护套装",
                function: "改善粉刺痘痘肌肤",
                price: "￥1162.00",
                spec: "奥氏海藻调理水、马齿苋粉刺修护精华、北美金缕梅抑痘净颜膜、复活草多效修护面膜",
                main: {
                    p: ["魅诗肌重度粉刺修护套装", "魅诗肌", "4件", "隐性痘痘、粉刺肌肤", "改善粉刺",
                        "针对粉刺肌肤改善堵塞问题，吸收过剩油脂，帮助打通毛孔吸收通道，改善粉刺再生长问题。",
                        "皮肤学抑痘配方，专为问题肌肤抑痘研发，无任何刺激添加，绿色温和，有助于肌肤改善粉刺痘痘。",
                        "见单件产品"]
                }
            }
        ],
        link: {
            path: "link/",
            img: ["氨基酸柔肤卸妆液.jpg", "奥氏海藻调理水.jpg", "北美金缕梅抑痘净颜膜.jpg", "北美金缕梅抑痘凝胶.jpg",
                "复活草深层修护乳.jpg", "复活草深层修护精华.jpg", "复活草多效修护面膜.jpg", "橄榄净颜洗面奶.jpg", "马齿苋粉刺修护精华.jpg",
                "仙人掌抑痘精华.jpg", "粉刺修护套装.jpg", "复活草修护套装.jpg", "轻度抑痘套装.jpg", "中度抑痘套装.jpg", "重度抑痘套装.jpg", "重度粉刺修护套装.jpg"],
            name: ["氨基酸柔肤卸妆液", "奥氏海藻调理水", "北美金缕梅抑痘净颜膜", "北美金缕梅抑痘凝胶",
                "复活草深层修护乳", "复活草柔肤深层修护精华", "复活草多效修护面膜", "橄榄净颜洗面奶", "马齿苋粉刺修护精华",
                "仙人掌抑痘精华", "粉刺修护套装", "复活草修护套装", "轻度抑痘套装", "中度抑痘套装", "重度抑痘套装", "重度粉刺修护套装"],
            price: ["￥258/150ml", "￥236/120ml", "￥396/200g", "￥258/25g", "￥456/80ml", "￥336/50ml",
                "￥272/25ml*5片", "￥178/100ml", "￥396/50ml", "￥372.00/50ml", "￥1028/3件", "￥1064/3件", "￥866/3件",
                "￥1718/5件", "￥1930/6件", "￥1162/4件"],
        },
        init: function () {
            if ($(window).width() <= 768) {
                window.parent.$("#suspend").css("display", "none");
                window.parent.$(".navbar-brand:first").css("display", "block");
            }
            //路径导航
            $(".breadcrumb:first li:last").html(productDetail.content[m].name)
            var img = document.getElementById("head").getElementsByTagName("img");
            //主图
            img[0].setAttribute("src", productDetail.path + productDetail.imgFile[m] + productDetail.img[0]);
            //缩略图
            img[1].setAttribute("src", productDetail.path + productDetail.imgFile[m] + productDetail.img[1]);
            //产品详情图
            $("#main img:first").attr("src", productDetail.path + productDetail.imgFile[m] + productDetail.img[2]);
            //head
            $("#head h3:first").html(productDetail.content[m].name);
            $("#head h4:first").html(productDetail.content[m].function);
            $("#head p:first").html(productDetail.content[m].price);
            $("#head p:last").html(productDetail.content[m].spec);
            //main
            $("#main p").each(function (index) {
                $(this).html(productDetail.content[m].main.p[index]);
            })
            //link
            var link_img = document.getElementById("link").getElementsByTagName("img");
            for (var i = 0, j = 0; i < link_img.length; i++, j++) {
                if (j !== m) {
                    link_img[i].setAttribute("src", productDetail.path + productDetail.link.path + productDetail.link.img[j]);
                    link_img[i].parentNode.setAttribute("onclick", `initproductDetail(${j})`);
                } else {
                    j++;
                    link_img[i].setAttribute("src", productDetail.path + productDetail.link.path + productDetail.link.img[j]);
                    link_img[i].parentNode.setAttribute("onclick", `initproductDetail(${j})`)
                }
            }
            var link_h6 = document.getElementById("link").getElementsByTagName("h6");
            for (var i = 0, j = 0; i < link_h6.length; i++, j++) {
                if (j !== m) {
                    link_h6[i].innerText = productDetail.link.name[j]
                } else {
                    j++;
                    link_h6[i].innerText = productDetail.link.name[j]
                }
            }
            var link_p = document.getElementById("link").getElementsByTagName("p");
            for (var i = 0, j = 0; i < link_p.length; i++, j++) {
                if (j !== m) {
                    link_p[i].innerText = productDetail.link.price[j]
                } else {
                    j++;
                    link_p[i].innerText = productDetail.link.price[j]
                }
            }
        }
    }
    productDetail.init();
}
$(document).ready(function () {
    if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) {
        setInterval('mounting()', 0);
    }else {
        $(document).scroll(function (e) {
            if ($(window).width() < 768) {
                mounting();
            }
        });
    }
});
function mounting() {
    //alert($("#main").offset().top - $(window).scrollTop() < 250);
    if ($("#main").offset().top - $(window).scrollTop() < 250) {
        $("#main .col-md-10:first").stop();
        $("#main .col-md-10:first").css("position", "fixed");
        $("#main .col-md-10:first").css("top", "0");
        $("#main .col-md-10:first").css("z-index", "999");
    }
    else {
        $("#main .col-md-10:first").stop();
        $("#main .col-md-10:first").css("position", "static");
    }
}