var home;
var onloadCount = 0;

function initHome() {
    home = {
        path: "res/img/home/",
        banner: {
            path: "banner/",
            img: ["banner1.jpg", "banner2.jpg"]
        },
        brand: {
            path: "brand/",
            img: "brand.jpg",
            h3: "品牌简介",
            h6: "BRAND INTRODUCTION",
            p: "魅诗肌是由百年药企设计与研发独特配方，拥有强大高级皮肤调理师的护肤品牌，基于深厚研究背景，不断\n" +
            "深化在问题皮肤的研究工作，包括建立在皮肤研究室及化妆品研究中心。企业从科学、研发的两个维度，持\n" +
            "续打造优秀产品..."
        },
        skin: {
            path: "skin/",
            img: ["skin1.jpg", "skin2.jpg", "skin3.jpg", "skin4.jpg", "skin5.jpg", "skin6.jpg"],
            h3: ["痘痘肌肤", "粉刺肌肤", "敏感肌肤", "激素脸", "黑头粉刺", "“大油田”肌肤"],
            p: ["痘痘医学上称为痤疮，痤疮皮肤是常见于青春期脸上的脓包，病程长、皮肤发暗，比较粗糙，伴有单个或成片的炎性病灶，在青...\n",
                "粉刺分为两种，一种是开放性粉刺，我们俗称黑头，一种是闭合性粉刺，也就是我们说的白头，白头粉刺起主导作用的树内分泌...",
                "敏感肌肤是一种问题性肌肤，任何肤质中都可能有敏感肌肤，如同各种肤质都可能有老化肤质、痘痘肤质等，敏感肌肤是因为皮...\n",
                "激素脸也称激素性痤疮，属于药物性痤疮的一种，是因为间断或长时间的滥用激素药膏或暗含激素的美容化妆品，引起激素的毒...\n",
                "黑头主要是由皮脂、细胞屑和细菌组成的一种“栓”样物，阻塞在毛囊开口处形成的，加上空气中的尘埃、污垢和氧化作用，使...",
                "油性肌肤最常见于青春期及一些体内伴雄性激素水平高或具有雄性激素高敏感受体的人群。油性皮肤皮脂分泌旺盛，与其含水量...\n" +
                "\n"]
        },
        cooperation: {
            path: "cooperation/",
            img: "cooperation.jpg",
            h3: "百年药企“二天堂”研发",
            h6: "与二天堂共同携手    打造魅力肌肤",
            p: "二天堂制药有限公司是在清朝就已经存在的药企，距今已有百年时间，针对植物萃取的药学原理有着非常深厚的认识，拥有非常深厚的认识，拥有制药...\n"
        },
        product: {
            path: "product/",
            h3: ["氨基酸柔肤卸妆液", "橄榄净颜洗面奶", "奥氏海藻调理水", "北美金缕梅抑痘凝胶",
                "仙人掌抑痘精华", "马齿苋粉刺修护精华", "复活草柔肤修护精华", "复活草深层修护乳", "复活草多效修护面膜",
                "轻度抑痘套装", "中度抑痘套装", "重度抑痘套装",
                "粉刺改善套装", "重度粉刺改善套装", "复活草修护套装"],
            p: ["￥258/150ml", "￥178/100ml", "￥236/120ml", "￥258/25g", "￥372/50ml", "￥396/50ml",
                "￥336/50ml", "￥456/80ml", "￥272/25ml*5片", "￥866/3件", "￥1718/5件", "￥1930/6件",
                "￥1028/3件", "￥1162/4件", "￥1064/3件"],
            series: {
                h4: ["基础护肤系列", "祛痘护肤系列", "改善护肤系列"],
                h6: ["0酒精  0色素   0香精    0致敏防腐剂",
                    "0酒精   0色素   0香精    0致敏防腐剂",
                    "0酒精   0色素   0香精    0致敏防腐剂"],
                p1: ["清洁肌肤，温和彻底卸妆，深层洁净，补水锁水，植物精粹，多效保湿，修护受损，防止肌肤干燥。",
                    "植物有效成分萃取精华，针对四重痘因逐一击破，祛痘更温和，效果更佳，无需繁琐操作,一套就可改善您的痘痘肌。",
                    "复活草萃取精华，修护受损肌肤，深层补水锁水，呵护肌肤，改善敏感、痘痘、粉刺肌肤，帮助肌肤恢复健康。"],
                p2: ["魅诗肌基础系列，专为问题肌肤清洁、调理设计，让肌肤清爽洁净的同时，呵护肌肤。",
                    "魅诗肌祛痘系列，专为痘痘粉刺肌肤祛痘、调理设计，改善痘痘粉刺，平衡肌肤水油。",
                    "魅诗肌改善系列，专为敏感、痘痘、粉刺肌肤改善、调理设计，让肌肤恢复健康美丽"]
            }
        },
        history: {
            path: "history/",
            img: "history.jpg",
            h3: "你知道传统美容和高科技美容的区别在哪...",
            p: "你知道传统美容和高科技美容的区别在哪里吗？想知道旧时代的女人是如何护肤的吗？都有哪些出乎人意料的美容技术，哪些有已经被淘汰了，而那些被奉为至宝依然在使用甚至被...\n"
        },
        knowledge: {
            path: "knowledge/",
            news: [
                "抑痘祛粉 &nbsp;&nbsp;&nbsp;    抑痘时该注意什么？怎么做才...",
                "淡化痘印  &nbsp;&nbsp;&nbsp;   油性肌肤用什么面膜？",
                "淡化痘印 &nbsp; &nbsp;&nbsp;   冬天来了，我们该怎么在冬天...",
                "美白护肤  &nbsp;&nbsp;&nbsp;   明星皮肤这么好，原来是有原...",
                "抑痘祛粉  &nbsp;&nbsp;&nbsp;   肌肤缺水该如何用喷雾来紧急...",
                "改善敏感  &nbsp; &nbsp;&nbsp;  敏感肌肤是什么肌肤？看过之...",
                "改善敏感  &nbsp;&nbsp;&nbsp;   敏感肌肤要注意什么",
                "美白护肤  &nbsp;&nbsp;&nbsp;   每天吃这几样水果可以让肌肤...",
                "祛痘祛粉  &nbsp;&nbsp;&nbsp;   添加了这几样原料的护肤品..."],
            img: ["1.img", "2.img"],
            h3: ["抑痘时该注意什么？怎么做才能正确有效的抑...", "油性肌肤用什么面膜？"],
            p: ["青春痘的形成是因为皮脂腺分泌油脂，会通过皮脂腺导管，输送到皮肤表层的毛孔排出，进入青春期，皮脂腺油脂分泌就会旺盛，而皮脂",
                "青春痘的形成是因为皮脂腺分泌油脂，会通过皮脂腺导管，输送到皮肤表层的毛孔排出，进入青春期，皮脂腺油脂分泌就会旺盛，而皮脂"],
            classify:[
                {path:"remove/",img:["抑痘时该注意什么？怎么做才能正确有效的抑....jpg","肌肤缺水该如何用喷雾来紧急补水呢？出门只....jpg"],
                h3:["抑痘时该注意什么？怎么做才能正确有效的抑...","肌肤缺水该如何用喷雾来紧急补水呢？出门只..."],
                p:["青春痘的形成是因为皮脂腺分泌油脂，会通过皮脂腺导管，输送到皮" +
                "肤表层的毛孔排出，进入青春期，皮脂腺油脂分泌就会旺盛，而皮脂",
                    "相信朋友们都遇到过这种情况，那就是出门后肌肤缺水，要给肌肤补" +
                "水很不方便，没办法，总不能带张补水面膜或者带瓶补水乳在身上随\n"],
                    link:[0,4]},
                {path:"weaken/",img:["油性肌肤用什么面膜？.jpg","冬天来了，我们该怎么在冬天护肤呢？.jpg"],
                    h3:["油性肌肤用什么面膜？","冬天来了，我们该怎么在冬天护肤呢？"],
                    p:["相信大家都知道，皮肤有一个自我保护系统，当皮肤深层缺水时皮肤" +
                    "就会分泌出大量的油脂来保护皮肤，油性肌肤就是因为肌肤极度缺水",
                        "冬天已经到了，很多朋友都不知道该怎么在这季节护肤，其实，在冬" +
                        "天护肤有一点很重要，那就是肌肤的补水工作，北方的朋友可要仔细"],
                    link:[1,2]},
                {path:"better/",img:["敏感肌肤是什么肌肤？看过之后你就明白了.jpg","敏感肌肤要注意什么？.jpg"],
                    h3:["敏感肌肤是什么肌肤？看过之后你就明白了","敏感肌肤要注意什么？"],
                    p:["我们时不时的在某篇文章或者某篇报道看到“敏感肌肤”这四个字眼" +
                    "，可很多人却不知道敏感肌肤是什么肌肤，今天，我们就来说说这个\n",
                        "冬天已经到了，很多朋友都不知道该怎么在这季节护肤，其实，在冬" +
                        "天护肤有一点很重要，那就是肌肤的补水工作，北方的朋友可要仔细"],
                    link:[5,6]},
                {path:"whitening/",img:["明星皮肤这么好，原来是有原因的！.jpg","每天吃这几样水果，可以让肌肤水润光滑.jpg"],
                    h3:["明星皮肤这么好，原来是有原因的！","每天吃这几样水果，可以让肌肤水润光滑"],
                    p:["很多朋友经常看到电视上那些明星皮肤很好，常常会惊讶，为什么她" +
                    "们岁数那么大了，皮肤却还是这么好？其实，她们很注重皮肤的保养",
                        "很多人看了标题后就奇怪了，水果也能美容吗？答案是当然的，涨姿" +
                        "势了吧？小编告诉你，水果的美容作用可不小哦，特别是这篇文章中"],
                    link:[3,7]}
                ]

        },
        propaganda: {
            path: "propaganda/",
            img: "propaganda.jpg"
        },
        init: function () {
            if($(window).width()<=768){
                window.parent.$("#suspend").css("display","block");
                window.parent.$(".navbar-brand:first").css("display","none");
            }
            //banner
            $("#banner img").each(function (index) {
                $(this).attr("src", home.path + home.banner.path + home.banner.img[index])
            })
        }
    };
    $("#banner .carousel-control").each(function () {
        $(this).css("display", "none");
    });
    home.init();
}

function ininBrand() {
    //brand
    $("#brand").html(" <div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 col-sm-12\">\n" +
        "                <div class=\"panel panel-default\">\n" +
        "                    <div class=\"panel-heading\">\n" +
        "                        <div class=\"center-block\">\n" +
        "                            <h3 class=\"panel-title\">品牌介绍</h3>\n" +
        "                            <p>——BRAND——</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"panel-body\" style=\"position: relative\">\n" +
        "                        <div class=\"row\" onclick=\"window.parent.$('#mainframe').attr('src','brand.html')\">\n" +
        "                            <div class=\"col-md-9 col-xs-9 col-sm-9\">\n" +
        "                                <div class=\"content\">\n" +
        "                                    <div class=\"row\">\n" +
        "                                        <div class=\"col-md-9 col-md-offset-1 col-sm-11 col-xs-11\">\n" +
        "                                            <div class=\"jumbotron\">\n" +
        "                                                <h3></h3>\n" +
        "                                                <h6></h6>\n" +
        "                                                <p></p>\n" +
        "                                                <div class='border_bottom'></div>\n" +
        "                                                <div class=\"col-md-3\">\n" +
        "                                                <img src='res/img/home/箭头.png' style='margin-left:-12px'>\n" +
        "                                               </div>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-4 col-xs-4 col-sm-4\">\n" +
        "                               <div class='shade'></div>\n"+
        "                            <img>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>")
    $("#brand img:last").attr("src", home.path + home.brand.path + home.brand.img);
    $("#brand h3:last").html(home.brand.h3);
    $("#brand h6:first").html(home.brand.h6);
    $("#brand p:last").html(home.brand.p);
}

function initSkin() {
    //skin
    if ($(window).width()>=768){
        $("#skin").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 col-sm-12\">\n" +
            "                <div class=\"panel panel-default\">\n" +
            "                    <div class=\"panel-heading\">\n" +
            "                        <div class=\"center-block\">\n" +
            "                            <h3 class=\"panel-title\">皮肤问题</h3>\n" +
            "                            <p>——SKIN PROBLEMS——</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
            "                            <!-- Wrapper for slides -->\n" +
            "                            <div class=\"carousel-inner\" role=\"listbox\">\n" +
            "                                <div class=\"item active\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('0')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('0')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('1')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('1')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('2')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('2')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('3')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('3')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('4')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('4')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"col-md-4 col-sm-4\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('5')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('5')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <!-- Controls -->\n" +
            "                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\"\n" +
            "                               data-slide=\"prev\">\n" +
            "                                <div id=\"skin_control_left\"></div>\n" +
            "                                <span class=\"sr-only\">Previous</span>\n" +
            "                            </a>\n" +
            "                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\"\n" +
            "                               data-slide=\"next\">\n" +
            "                                <div id=\"skin_control_right\"></div>\n" +
            "                                <span class=\"sr-only\">Next</span>\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>");
    }
    else {
        $("#skin").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 col-sm-12\">\n" +
            "                <div class=\"panel panel-default\">\n" +
            "                    <div class=\"panel-heading\">\n" +
            "                        <div class=\"center-block\">\n" +
            "                            <h3 class=\"panel-title\">皮肤问题</h3>\n" +
            "                            <p>——SKIN PROBLEMS——</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
            "                            <!-- Wrapper for slides -->\n" +
            "                            <div class=\"carousel-inner\" role=\"listbox\">\n" +
            "                                <div class=\"item active\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('0')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('0')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('1')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('1')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('2')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('2')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('3')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('3')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('4')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('4')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"item\">\n" +
            "                                    <div class=\"row\">\n" +
            "                                        <div class=\"col-xs-12\">\n" +
            "                                            <div class=\"thumbnail\">\n" +
            "                                                <img onclick=\"skin_problem_link('5')\">\n" +
            "                                                <div class=\"caption\">\n" +
            "                                                    <h3></h3>\n" +
            "                                                    <p></p>\n" +
            "                                                    <button class=\"btn btn-default center-block\" role=\"button\" onclick=\"skin_problem_link('5')\">了解更多\n" +
            "                                                    </button>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <!-- Controls -->\n" +
            "                            <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\"\n" +
            "                               data-slide=\"prev\">\n" +
            "                                <div id=\"skin_control_left\"></div>\n" +
            "                                <span class=\"sr-only\">Previous</span>\n" +
            "                            </a>\n" +
            "                            <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\"\n" +
            "                               data-slide=\"next\">\n" +
            "                                <div id=\"skin_control_right\"></div>\n" +
            "                                <span class=\"sr-only\">Next</span>\n" +
            "                            </a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>");
    }
    $("#skin img").each(function (index) {
        $(this).attr("src", home.path + home.skin.path + home.skin.img[index])
    });
    $("#skin h3").each(function (index) {
        if (index >= 1) {
            var j = index - 1;
            $(this).html(home.skin.h3[j]);
        }
    });
    $("#skin p").each(function (index) {
        if (index >= 1) {
            var j = index - 1;
            $(this).html(home.skin.p[j]);
        }
    });
}

function initCooperation() {
    //cooperation
    $("#cooperation").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12 col-sm-12\">\n" +
        "                <div class=\"panel panel-default\">\n" +
        "                    <div class=\"panel-heading\">\n" +
        "                        <div class=\"center-block\">\n" +
        "                            <h3 class=\"panel-title\">合作伙伴</h3>\n" +
        "                            <p>——COOPERATION——</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"panel-body\">\n" +
        "                        <div class=\"row\"  onclick=\"window.parent.$('#mainframe').attr('src','cooperation.html')\">\n" +
        "                            <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
        "                               <div class='shade'></div>\n"+
        "                                <img>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"jumbotron\">\n" +
        "                                    <h3></h3>\n" +
        "                                    <h6></h6>\n" +
        "                                    <p></p>\n" +
        "                           <button class=\"btn btn-sm center-block\" style='display: none;border: none' role=\"button\" onclick=\"window.parent.$('#mainframe').attr('src','cooperation.html')\">了解更多\n" +
        "                           </button>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"background\">\n" +
        "\n" +
        "            </div>")
    $("#cooperation img:first").attr("src", home.path + home.cooperation.path + home.cooperation.img);
    $("#cooperation h3:last").html(home.cooperation.h3);
    $("#cooperation h6:first").html(home.cooperation.h6);
    $("#cooperation p:last").html(home.cooperation.p);
}

function initProduct() {
    //product
    $("#product").append("<div class=\"col-md-12 col-lg-10 col-lg-offset-1  col-xs-12 col-sm-12\">\n" +
        "                <div class=\"panel panel-default\">\n" +
        "                    <div class=\"panel-heading\">\n" +
        "                        <div class=\"center-block\">\n" +
        "                            <h3 class=\"panel-title\">产品</h3>\n" +
        "                            <p>——PRODUCT——</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"panel-body\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <button class=\"btn btn-primary\">基础系列</button>\n" +
        "                        </div>\n" +
        "                        <div class=\"row\" id=\"step1\">\n" +
        "                        </div>\n" +
        "                        <div class=\"row\">\n" +
        "                            <button class=\"btn btn-primary\">祛痘系列</button>\n" +
        "                        </div>\n" +
        "                        <div class=\"row\" id=\"step2\">\n" +
        "                        </div>\n" +
        "                        <div class=\"row\">\n" +
        "                            <button class=\"btn btn-primary\">改善系列</button>\n" +
        "                        </div>\n" +
        "                        <div class=\"row\" id=\"step3\">\n" +
        "                        </div>\n" +
        "                        <div class=\"row\">\n" +
        "                            <button class=\"btn btn-primary\">精选套装</button>\n" +
        "                        </div>\n" +
        "                        <div class=\"row\" id=\"step4\">\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"background\">\n" +
        "            </div>")
}

function initProductStep1() {
    $("#product #step1").html("                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(0)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(7)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(1)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\"  onclick=\"product_detail_link(7)\">\n" +
        "                                <div class=\"jumbotron\">\n" +
        "                                    <h4 class=\"product_series_h4\"></h4>\n" +
        "                                                <div class='border_bottom'></div>\n" +
        "                                    <h6 class=\"product_series_h6\"></h6>\n" +
        "                                    <p1 class=\"product_series_p1\"></p1>\n" +
        "                                    <p2 class=\"product_series_p2\"></p2>\n" +
        "                                <button class=\"btn btn-default btn-sm\" role=\"button\" onclick=\"window.parent.$('#mainframe').attr('src','cooperation.html')\">了解详情\n" +
        "                                </button>\n" +
        "                                </div>\n" +
        "                            </div>\n");
    $("#product #step1 img").each(function (index) {
        $(this).attr("src", home.path + home.product.path + (index + 1) + ".jpg")
    });

    $("#product #step1 h3").each(function (index) {
        $(this).html(home.product.h3[index]);
    });
    $("#product #step1 p").each(function (index) {
        $(this).html(home.product.p[index]);
    });
    $("#step1 .product_series_h4").each(function (index) {
        $(this).html(home.product.series.h4[0])
    });
    $("#step1 .product_series_h6").each(function (index) {
        $(this).html(home.product.series.h6[0])
    });
    $("#step1 .product_series_p1").each(function (index) {
        $(this).html(home.product.series.p1[0])
    });
    $("#step1 .product_series_p2").each(function (index) {
        $(this).html(home.product.series.p2[0])
    });
}

function initProductStep2() {
    $("#product #step2").html("                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(3)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(9)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(8)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\"  onclick=\"product_detail_link(14)\">\n" +
        "                                <div class=\"jumbotron\">\n" +
        "                                    <h4 class=\"product_series_h4\"></h4>\n" +
        "                                                <div class='border_bottom'></div>\n" +
        "                                    <h6 class=\"product_series_h6\"></h6>\n" +
        "                                    <p1 class=\"product_series_p1\"></p1>\n" +
        "                                    <p2 class=\"product_series_p2\"></p2>\n" +
        "<button class=\"btn btn-default btn-sm\" role=\"button\" onclick=\"window.parent.$('#mainframe').attr('src','cooperation.html')\">了解详情\n" +
        " </button>\n" +
        "                                </div>\n" +
        "                            </div>\n");
    $("#product #step2 img").each(function (index) {
        $(this).attr("src", home.path + home.product.path + (index + 4) + ".jpg")
    });

    $("#product #step2 h3").each(function (index) {
        var j = index + 3;
        $(this).html(home.product.h3[j]);
    });
    $("#product #step2 p").each(function (index) {
        var j = index + 3;
        $(this).html(home.product.p[j]);
    });
    $("#step2 .product_series_h4").each(function (index) {
        $(this).html(home.product.series.h4[1])
    });
    $("#step2 .product_series_h6").each(function (index) {
        $(this).html(home.product.series.h6[1])
    });
    $("#step2 .product_series_p1").each(function (index) {
        $(this).html(home.product.series.p1[1])
    });
    $("#step2 .product_series_p2").each(function (index) {
        $(this).html(home.product.series.p2[1])
    });
}

function initProductStep3() {
    $("#product #step3").html("      <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(5)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(4)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(6)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-3 col-sm-6 col-xs-6\" onclick=\"product_detail_link(11)\">\n" +
        "                                <div class=\"jumbotron\">\n" +
        "                                    <h4 class=\"product_series_h4\"></h4>\n" +
        "                                                <div class='border_bottom'></div>\n" +
        "                                    <h6 class=\"product_series_h6\"></h6>\n" +
        "                                    <p1 class=\"product_series_p1\"></p1>\n" +
        "                                    <p2 class=\"product_series_p2\"></p2>\n" +
        "<button class=\"btn btn-default btn-sm\" role=\"button\" onclick=\"window.parent.$('#mainframe').attr('src','cooperation.html')\">了解详情\n" +
        " </button>\n" +
        "                                </div>\n" +
        "                            </div>\n");
    $("#product #step3 img").each(function (index) {
        $(this).attr("src", home.path + home.product.path + (index + 7) + ".jpg")
    });

    $("#product #step3 h3").each(function (index) {
        var j = index + 6;
        $(this).html(home.product.h3[j]);
    });
    $("#product #step3 p").each(function (index) {
        var j = index + 6;
        $(this).html(home.product.p[j]);
    });
    $("#step3 .product_series_h4").each(function (index) {
        $(this).html(home.product.series.h4[2])
    });
    $("#step3 .product_series_h6").each(function (index) {
        $(this).html(home.product.series.h6[2])
    });
    $("#step3 .product_series_p1").each(function (index) {
        $(this).html(home.product.series.p1[2])
    });
    $("#step3 .product_series_p2").each(function (index) {
        $(this).html(home.product.series.p2[2])
    });
}

function initProductStep4() {
    $("#product #step4").html("                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(12)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(13)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(14)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n"+
        "                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(10)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(15)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-4 col-xs-6 col-sm-6\">\n" +
        "                                <div class=\"thumbnail\" onclick=\"product_detail_link(11)\">\n" +
        "                                    <img src=\"\">\n" +
        "                                    <div class=\"caption\">\n" +
        "                                        <h3></h3>\n" +
        "                                        <p></p>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n");
    $("#product #step4 img").each(function (index) {
        $(this).attr("src", home.path + home.product.path + (index + 10) + ".jpg")
    });

    $("#product #step4 h3").each(function (index) {
        var j = index + 9;
        $(this).html(home.product.h3[j]);
    });
    $("#product #step4 p").each(function (index) {
        var j = index + 9;
        $(this).html(home.product.p[j]);
    });
}

function initHistory() {
    //history
    $("#history").html("<div class=\"col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 col-sm-11 col-xs-offset-1 col-sm-11 col-sm-offset-1\">\n" +
        "                <div class=\"panel panel-default\">\n" +
        "                    <div class=\"panel-heading\">\n" +
        "                        <div class=\"center-block\">\n" +
        "                            <h3 class=\"panel-title\">护肤历史</h3>\n" +
        "                            <p>——PROPAGANDA——</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"panel-body\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-md-6  col-sm-6 col-xs-6 history_img\" onclick=\"window.parent.$('#skin_history_details').modal('show')\">\n" +
        "                               <div class='shade'></div>\n"+
        "                                <img id='history_img'>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-md-5  col-sm-7 col-xs-7 \">\n" +
        "                                <div class=\"jumbotron\">\n" +
        "                                    <h3></h3>\n" +
        "                                    <p></p>\n" +
        "                                    <div class='border_bottom'></div>\n" +
        "                            <div class=\"col-md-3\">\n" +
        "                                <img src='res/img/home/箭头.png' style='display: none;margin-left: -12px'>\n" +
        "                            </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>")
    $("#history img:first").attr("src", home.path + home.history.path + home.history.img)
    $("#history h3:last").html(home.history.h3);
    $("#history p:last").html(home.history.p);
    window.parent.init_skin_history_details();
}

function initKnowledge() {
    //knowledge
    if ($(window).width()>768){
        $("#knowledge").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1\">\n" +
            "                <div class=\"panel panel-default\">\n" +
            "                    <div class=\"panel-heading\">\n" +
            "                        <div class=\"center-block\">\n" +
            "                            <h3 class=\"panel-title\">科普知识</h3>\n" +
            "                            <p>——KNOWLEDGE——</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <div class=\"row\">\n" +
            "                            <div class=\"col-md-12\">\n" +
            "                              <nav aria-label=\"...\">\n" +
            "                                   <ul class=\"pagination\">\n" +
            "                                        <li class=\"active\"  onclick=\"initKnowledge()\"><a>全部</a></li>\n" +
            "                                        <li  onclick=\"knowledge_classify(0)\"><a>祛痘祛粉</a></li>\n" +
            "                                        <li  onclick=\"knowledge_classify(1)\"><a>淡化痘印</a></li>\n" +
            "                                        <li onclick=\"knowledge_classify(2)\"><a>改善敏感</a></li>\n" +
            "                                        <li onclick=\"knowledge_classify(3)\"><a>美白护肤</a></li>\n" +
            "                                   </ul>\n" +
            "                            </nav>\n"+
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class=\"row\">\n" +
            "                            <div class=\"col-md-8\">\n" +
            "                                <div class=\"row\" onclick=\"knowledge_detail_link(0)\">\n" +
            "                                    <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
            "                                        <div class=\"thumbnail\">\n" +
            "                                            <img src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
            "                                        <div class=\"jumbotron\">\n" +
            "                                            <h3></h3>\n" +
            "                                            <p></p>\n" +
            "                            <div class=\"col-md-4\">\n" +
            "                                                <img src='res/img/home/箭头2.png' style='display: none;margin-left:-12px'>\n" +
            "                            </div>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\" onclick=\"knowledge_detail_link(1)\">\n" +
            "                                <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
            "                                    <div class=\"thumbnail\">\n" +
            "                                        <img src=\"\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-6 col-xs-6 col-sm-6\">\n" +
            "                                    <div class=\"jumbotron\">\n" +
            "                                        <h3></h3>\n" +
            "                                        <p></p>\n" +
            "                            <div class=\"col-md-4\">\n" +
            "                                                <img src='res/img/home/箭头2.png' style='display: none;margin-left:-12px'>\n" +
            "                            </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"col-md-4\" id=\"news\">\n" +
            "                                <ul>\n" +
            "                                    <li onclick=\"knowledge_detail_link(0)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(1)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(2)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(3)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(4)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(5)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(6)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(7)\"></li>\n" +
            "                                    <li onclick=\"knowledge_detail_link(8)\"></li>\n" +
            "                                </ul>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>")
        $("#knowledge .col-md-8:first .row").each(function (index) {
            $(this).find("img:first").attr("src", home.path + home.knowledge.path + (index + 1) + ".jpg");
        });
        $("#knowledge h3").each(function (index) {
            var j = index - 1;
            $(this).html(home.knowledge.h3[j]);
        });
        $("#knowledge p").each(function (index) {
            var j = index - 1;
            $(this).html(home.knowledge.p[j]);
        });
        $("#knowledge #news li").each(function (index) {
            $(this).html(home.knowledge.news[index])
        });
        $("#knowledge .pagination li").each(function () {
            $(this).click(function () {
                $(this).parent().find("li").removeClass("active");
                $(this).addClass("active");
            })
        })
    }
    else {
        $("#knowledge").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1\">\n" +
            "                <div class=\"panel panel-default\">\n" +
            "                    <div class=\"panel-heading\">\n" +
            "                        <div class=\"center-block\">\n" +
            "                            <h3 class=\"panel-title\">科普知识</h3>\n" +
            "                            <p>——KNOWLEDGE——</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"panel-body\">\n" +
            "                        <div class=\"row\">\n" +
            "                            <div class=\"col-xs-12\">\n" +
            "                                <div class=\"row\">\n" +
            "                                    <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                        <div class=\"thumbnail\">\n" +
            "                                            <img src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                        <div class=\"jumbotron\">\n" +
            "                                            <h3></h3>\n" +
            "                                            <p></p>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                    <div class=\"thumbnail\">\n" +
            "                                        <img src=\"\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                    <div class=\"jumbotron\">\n" +
            "                                        <h3></h3>\n" +
            "                                        <p></p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                    <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                        <div class=\"thumbnail\">\n" +
            "                                            <img src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                        <div class=\"jumbotron\">\n" +
            "                                            <h3></h3>\n" +
            "                                            <p></p>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                    <div class=\"thumbnail\">\n" +
            "                                        <img src=\"\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                    <div class=\"jumbotron\">\n" +
            "                                        <h3></h3>\n" +
            "                                        <p></p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                    <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                        <div class=\"thumbnail\">\n" +
            "                                            <img src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                        <div class=\"jumbotron\">\n" +
            "                                            <h3></h3>\n" +
            "                                            <p></p>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                    <div class=\"thumbnail\">\n" +
            "                                        <img src=\"\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                    <div class=\"jumbotron\">\n" +
            "                                        <h3></h3>\n" +
            "                                        <p></p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                    <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                        <div class=\"thumbnail\">\n" +
            "                                            <img src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                    <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                        <div class=\"jumbotron\">\n" +
            "                                            <h3></h3>\n" +
            "                                            <p></p>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"row\">\n" +
            "                                <div class=\"col-md-5 col-xs-6 col-sm-5\">\n" +
            "                                    <div class=\"thumbnail\">\n" +
            "                                        <img src=\"\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-7 col-xs-6 col-sm-7\">\n" +
            "                                    <div class=\"jumbotron\">\n" +
            "                                        <h3></h3>\n" +
            "                                        <p></p>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>");
            $("#knowledge .col-xs-12 .row").each(function (index) {
                if (index<2){
                    $(this).find("img:first").attr("src", home.path + home.knowledge.path +home.knowledge.classify[0].path+ home.knowledge.classify[0].img[index]);
                    var j=home.knowledge.classify[0].link[index];
                    $(this).attr("onclick","knowledge_detail_link("+j+")");
                }
            });
            $("#knowledge h3").each(function (index) {
                if (index<3){
                    var j = index - 1;
                    $(this).html(home.knowledge.classify[0].h3[j]);
                }
            });
            $("#knowledge p").each(function (index) {
                if (index<3){
                    var j = index - 1;
                    $(this).html(home.knowledge.classify[0].p[j]);
                }
            });
            $("#knowledge .col-xs-12 .row").each(function (index) {
                if (index<4&&index>=2){
                    $(this).find("img:first").attr("src", home.path + home.knowledge.path +home.knowledge.classify[1].path+ home.knowledge.classify[1].img[index-2]);
                    var j=home.knowledge.classify[1].link[index-2];
                    $(this).attr("onclick","knowledge_detail_link("+j+")");
                }
            });
            $("#knowledge h3").each(function (index) {
                if (index<5&&index>=3){
                    var j = index - 3;
                    $(this).html(home.knowledge.classify[1].h3[j]);
                }
            });
            $("#knowledge p").each(function (index) {
                if (index<5&&index>=3){
                    var j = index - 3;
                    $(this).html(home.knowledge.classify[1].p[j]);
                }
            });
            $("#knowledge .col-xs-12 .row").each(function (index) {
                if (index<6&&index>=4){
                    $(this).find("img:first").attr("src", home.path + home.knowledge.path +home.knowledge.classify[2].path+ home.knowledge.classify[2].img[index-4]);
                    var j=home.knowledge.classify[2].link[index-4];
                    $(this).attr("onclick","knowledge_detail_link("+j+")");
                }
            });
            $("#knowledge h3").each(function (index) {
                if (index<7&&index>=5){
                    var j = index - 5;
                    $(this).html(home.knowledge.classify[2].h3[j]);
                }
            });
            $("#knowledge p").each(function (index) {
                if (index<7&&index>=5){
                    var j = index - 5;
                    $(this).html(home.knowledge.classify[2].p[j]);
                }
            });
            $("#knowledge .col-xs-12 .row").each(function (index) {
                if (index<8&&index>=6){
                    $(this).find("img:first").attr("src", home.path + home.knowledge.path +home.knowledge.classify[3].path+ home.knowledge.classify[3].img[index-6]);
                    var j=home.knowledge.classify[3].link[index-6];
                    $(this).attr("onclick","knowledge_detail_link("+j+")");
                }
            });
            $("#knowledge h3").each(function (index) {
                if (index<9&&index>=7){
                    var j = index - 7;
                    $(this).html(home.knowledge.classify[3].h3[j]);
                }
            });
            $("#knowledge p").each(function (index) {
                if (index<9&&index>=7){
                    var j = index - 7;
                    $(this).html(home.knowledge.classify[3].p[j]);
                }
            });
            $("#knowledge .col-xs-12 .row").each(function (index) {
                if(index>=4){
                    $(this).css("display","none");
                }
            });
            $("#knowledge").append( "     <div class=\"row\">\n" +
                "                                <div class=\"col-xs-4 col-xs-offset-4\">\n" +
                "                                       <button class='btn btn-default center-block'>了解更多</button>\n"+
                "                                    </div>\n" +
                "                                </div>\n");
            $("#knowledge button:last").click(function () {
                $("#knowledge .col-xs-12 .row").each(function (index) {
                    if(index>=4){
                        $(this).css("display","block");
                    }
                });
                $(this).css("display","none");
            })
    }
}

function initPropaganda() {
    //propaganda
    $("#propaganda").html("<div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-sm-12 col-xs-12\">\n" +
        "                <div class=\"panel panel-default\">\n" +
        "                    <div class=\"panel-heading\">\n" +
        "                        <div class=\"center-block\">\n" +
        "                            <h3 class=\"panel-title\">护肤宣传</h3>\n" +
        "                            <p>——PROPAGANDA——</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"panel-body\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-md-12\">\n"+
        "                               <div class='video' onclick=\"window.parent.$('#video').modal('show')\"></div>\n"+
        "                               <div class='shade'></div>\n"+
        "                                <img>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>")
    $("#propaganda img:first").attr("src", home.path + home.propaganda.path + home.propaganda.img);
    window.parent.init_video();
}
function knowledge_classify(i) {
    $("#knowledge .col-md-8:first .row").each(function (index) {
        $(this).find("img:first").attr("src", home.path + home.knowledge.path +home.knowledge.classify[i].path+ home.knowledge.classify[i].img[index]);
        var j=home.knowledge.classify[i].link[index];
        $(this).attr("onclick","knowledge_detail_link("+j+")");
    });
    $("#knowledge h3").each(function (index) {
        var j = index - 1;
        $(this).html(home.knowledge.classify[i].h3[j]);
    });
    $("#knowledge p").each(function (index) {
        var j = index - 1;
        $(this).html(home.knowledge.classify[i].p[j]);
    });
}

function initFooter() {
    $("footer:last").html("<div class=\"row\">\n" +
        "            <div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12\">\n" +
        "                <h3>广州魅诗肌生物科技有限公司</h3>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12\">\n" +
        "                <address>\n" +
        "                    地点：广州市天河区棠东东南路10号028房\n" +
        "                </address>\n" +
        "                <address>\n" +
        "                    邮编：510000\n" +
        "                </address>\n" +
        "                <address>\n" +
        "                    总部电话：020-28178401\n" +
        "                </address>\n" +
        "                <address>\n" +
        "                    客服QQ：2485052805\n" +
        "                </address>\n" +
        "                <address>\n" +
        "                    邮箱：2485052805@qq.com\n" +
        "                </address>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12\" style=\"clear: both;position: relative\">\n" +
        "                <address>\n" +
        "                    <div id=\"telephone\"></div>\n" +
        "                    <div id=\"qq\"></div>\n" +
        "                    <div id=\"wechat1\" onclick=\"window.parent.$('#wechat').modal('show')\"></div>\n" +
        "                </address>\n" +
        "            </div>\n" +
        "            <div class=\"col-md-12 col-lg-10 col-lg-offset-1 col-xs-12\" style=\"clear: both\">\n" +
        "                <p>\n" +
        "                    广州魅诗肌生物科技有限公司版权所有 粤ICP备 17035173号\n" +
        "                </p>\n" +
        "                <p>\n" +
        "                    郑重声明：未经授权禁止转载，网页图文均属官方所有，否者追究法律责任\n" +
        "                </p>\n" +
        "            </div>\n" +
        "        </div>");
}

$(document).scroll(function (e) {
    var $ScrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if ($ScrollBottom <20) {
        onloadCount++;
        switch (onloadCount) {
            case 1:
                initCooperation();
                break;
            case 2:
                initProduct();
                break;
            case 3:
                initProductStep1();
                break;
            case 4:
                initProductStep2();
                break;
            case 5:
                initProductStep3();
                break;
            case 6:
                initProductStep4();
                break;
            case 7:
                initHistory();
                break;
            case 8:
                initKnowledge();
                break;
            case 9:
                initPropaganda();
                break;
            case 10:
                initFooter();
                break;
        }
    }
});

function show_control() {
    if ($(window).width()>768){
        $("#banner .carousel-control").each(function () {
            $(this).css("display", "block");
        })
    }
}

function hidden_control() {
    $("#banner .carousel-control").each(function () {
        $(this).css("display", "none");
    })
}

function skin_problem_link(i) {
    window.parent.$("#mainframe").attr("src", "skinDetail.html?i=" + i);
}

function knowledge_detail_link(i) {
    window.parent.$("#mainframe").attr("src", "knowledgeDetail.html?i=" + i)
}

function product_detail_link(i) {
    window.parent.$("#mainframe").attr("src", "productDetail.html?i=" + i)
}

$(document).ready(function () {
    if ($(window).width()>768) {
        $("#brand").mouseenter(function () {
            $("#brand img:last").addClass("animated slideInRight");
            $("#brand .jumbotron:first").addClass("animated slideInDown");
        });
        $("#brand").mouseenter(function () {
            $("#brand .panel-body:first").hover(function () {
                $("#brand .jumbotron:first").css("padding-top", "30px");
                $("#brand .border_bottom:first").css("width", "100%");
                $("#brand .border_bottom:first").css("transition", "width 0.5s ease-in");
                $("#brand img:first").css("display", "block");
                $("#brand img:first").addClass("animated slideInUp");
                $("#brand img:last").attr("src", "res/img/home/brand/big.jpg");
                $("#brand .shade:first").css("display","block");
            }, function () {
                $("#brand .jumbotron:first").css("padding-top", "50px");
                $("#brand .border_bottom:first").css("width", "20%");
                $("#brand img:first").css("display", "none");
                $("#brand img:last").attr("src", "res/img/home/brand/brand.jpg");
                $("#brand .shade:first").css("display","none");
            });
        });
        $("#skin").mouseenter(function () {
            $("#skin .thumbnail").each(function (index) {
                $(this).addClass("animated slideInUp");
                $(this).css("animation-duration", 0.2 * (index + 2) + "s");
            })
        });
        $("#skin").mouseenter(function () {
            $("#skin .thumbnail").each(function () {
                $(this).hover(function () {
                    $(this).find("img:first").css("transform", "scale(1.1)");
                    $(this).find("h3:first").css("color", "#00a0e9");
                    $(this).find("button:first").css("background-color", "#00a0e9");
                    $(this).find("button:first").css("color", "white");
                }, function () {
                    $(this).find("h3:first").css("color", "black");
                    $(this).find("button:first").css("background-color", "white");
                    $(this).find("img:first").css("transform", "scale(1)");
                    $(this).find("button:first").css("color", "black");
                })
            });
        });
        $("#cooperation").mouseenter(function () {
            $("#cooperation .background:first").addClass("animated slideInLeft");
            $("#cooperation .panel-body:first").addClass("animated slideInRight");
            $("#cooperation .jumbotron:first").addClass("animated slideInDown");
        });
        $("#cooperation").mouseenter(function () {
            $("#cooperation .row:first").hover(function () {
                $("#cooperation .jumbotron:first").css("padding-top", "10px");
                $("#cooperation h3:last").css("color", "#00a0e9");
                $("#cooperation button:first").css("display", "block");
                $("#cooperation button:first").css("color", "white");
                $("#cooperation img:last").attr("src", "res/img/home/cooperation/big.jpg");
                $("#cooperation .shade:first").css("display","block");
            }, function () {
                $("#cooperation .jumbotron:first").css("padding-top", "40px");
                $("#cooperation h3:last").css("color", "#8c8c8c");
                $("#cooperation button:first").css("display", "none");
                $("#cooperation img:last").attr("src", "res/img/home/cooperation/cooperation.jpg");
                $("#cooperation .shade:first").css("display","none");
            });
        });
        $("#product").mouseenter(function () {
            $("#step1").mouseenter(function () {
                $("#product #step1").each(function () {
                    $(this).addClass("animated slideInUp");
                })
            });
            $("#step2").mouseenter(function () {
                $("#product #step2").each(function () {
                    $(this).addClass("animated slideInUp");
                })
            });
            $("#step3").mouseenter(function () {
                $("#product #step3").each(function () {
                    $(this).addClass("animated slideInUp");
                })
            });
            $("#step4").mouseenter(function () {
                $("#product #step4").each(function () {
                    $(this).addClass("animated slideInUp");
                })
            });
            $("#step5").mouseenter(function () {
                $("#product #step5").each(function () {
                    $(this).addClass("animated slideInUp");
                })
            });
        });
        $("#product").mouseenter(function () {
            $("#step1 .jumbotron:first").hover(function () {
                $("#product #step1 .border_bottom:first").css("width", "100%");
                $("#step1 .border_bottom:first").css("transition", "width 0.5s ease-in");
                $("#step1 button").css("display", "block");
                $("#step1 button").css("color", "#00a0e9");
            }, function () {
                $("#product #step1 .border_bottom:first").css("width", "20%");
                $("#step1 button").css("display", "none");
            });
            $("#step2 .jumbotron:first").hover(function () {
                $("#product #step2 .border_bottom:first").css("width", "100%");
                $("#step2 .border_bottom:first").css("transition", "width 0.5s ease-in");
                $("#step2 button").css("display", "block");
                $("#step2 button").css("color", "#00a0e9");
            }, function () {
                $("#product #step2 .border_bottom:first").css("width", "20%");
                $("#step2 button").css("display", "none");
                $("#step2 button").css("color", "#00a0e9");
            })
            $("#step3 .jumbotron:first").hover(function () {
                $("#product #step3 .border_bottom:first").css("width", "100%");
                $("#step3 .border_bottom:first").css("transition", "width 0.5s ease-in");
                $("#step3 button").css("display", "block");
                $("#step3 button").css("color", "#00a0e9");
            }, function () {
                $("#product #step3 .border_bottom:first").css("width", "20%");
                $("#step3 button").css("display", "none");
            })
        });
        $("#history").mouseenter(function () {
            $("#history .panel-body:first").addClass("animated slideInRight");
            $("#history img:first").addClass("animated slideInLeft");
            $("#history .jumbotron:first").addClass("animated slideInDown");

            $("#history .row:first").hover(function () {
                $("#history .jumbotron:first").css("padding-top", "30px");
                $("#history .border_bottom:first").css("width", "100%");
                $("#history .border_bottom:first").css("transition", "width 0.5s ease-in");
                $("#history img:last").css("display", "block");
                $("#history img:first").addClass("animated slideInUp");
                $("#history img:first").attr("src", "res/img/home/history/big.jpg");
                $("#history .shade:first").css("display","block");
            }, function () {
                $("#history .jumbotron:first").css("padding-top", "50px");
                $("#history .border_bottom:first").css("width", "20%");
                $("#history img:last").css("display", "none");
                $("#history img:first").attr("src", "res/img/home/history/history.jpg");
                $("#history .shade:first").css("display","none");
            });
        });
        $("#knowledge").mouseenter(function () {
            $("#knowledge .col-md-8:first .row").each(function (index) {
                $(this).find("img:first").addClass("animated slideInUp");
                $(this).find("img:first").css("animation-duration","1s");
            })
            $("#knowledge .jumbotron").addClass("animated slideInUp");
            $("#knowledge .jumbotron").css("animation-duration","2s");
            $("#knowledge ul").addClass("animated slideInUp");
            $("#knowledge ul").css("animation-duration","3s");
        });
        $("#knowledge").mouseenter(function () {
            $("#knowledge .col-md-8:first .row").each(function () {
                $(this).hover(function () {
                    $(this).find(" h3:first").css("color", "#00a0e9");
                    $(this).find("img:last").css("display", "block");
                    $(this).find("img:last").addClass("animated slideInUp");
                }, function () {
                    $(this).find(" h3:first").css("color", "grey");
                    $(this).find("img:last").css("display", "none");
                })
            })
        });
        $("#propaganda").mouseenter(function () {
            $("#propaganda .panel-heading").addClass("animated slideInUp");
            $("#propaganda img").addClass("animated slideInLeft");
            $("footer:last h3").addClass("animated slideInUp");
            $("footer:last h3").css("animation-duration", "1s");
            $("footer:last address").each(function (index) {
                $(this).addClass("animated slideInUp");
                $(this).css("animation-duration", 0.8*(index+1)+"s");
            });
            $("footer:last p").each(function (index) {
                $(this).addClass("animated slideInUp");
                $(this).css("animation-duration", 0.9*(index+1)+"s");
            })
        });
        $("#propaganda").hover(function () {
            $("#propaganda .shade:first").css("display","block");
            $("#propaganda .video:first").css("display","block");
        },function () {
            $("#propaganda .shade:first").css("display","none");
            $("#propaganda .video:first").css("display","none");
        },function () {
        });
        $("footer:last").mouseenter(function () {
            $("footer:last h3").addClass("animated slideInUp");
            $("footer:last h3").css("animation-duration", "1s");
            $("footer:last address").each(function (index) {
                $(this).addClass("animated slideInUp");
                $(this).css("animation-duration", 0.8*(index+1)+"s");
            });
            $("footer:last p").each(function (index) {
                $(this).addClass("animated slideInUp");
                $(this).css("animation-duration", 0.9*(index+1)+"s");
            })
        });
    }else {
        $("#propaganda").mouseenter(function () {
            $("#propaganda .video:first").css("display","block");
        });
    }
});