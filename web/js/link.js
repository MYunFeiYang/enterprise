var skin;

function initSkin(i) {
    skin = {
        path: "res/img/skin/",
        detail: {
            skin: {
                path: "detail/link/",
                img: ["痘痘肌肤.jpg", "粉刺肌肤.jpg", "敏感肌肤.jpg", "激素脸.jpg", "黑头粉刺.jpg", "“大油田”肌肤.jpg"],
                h3: ["痘痘肌肤", "粉刺肌肤", "敏感肌肤", "激素脸", "黑头粉刺", "“大油田”肌肤"],
                p: ["痘痘在医学上称为痤疮，痤疮皮肤是常见于青春期脸上的脓包...",
                    "粉刺分为两种，一种是开放性粉刺，我们俗称黑头，一种是闭合性...",
                    "敏感肌肤是一种问题性肌肤，任何肤质中都可能有敏感性肌肤，如同...",
                    "激素脸也称激素性痤疮，属于药物性痤疮的一种，激素脸是因为间断或...",
                    "黑头主要是有皮脂、细胞屑和细菌组成的一种“栓”样物，阻塞在...",
                    "油性肌肤最常见于青春期及一些体内伴雄性激素水平高或具有雄性..."]
            },
        },
    }
    //link
    $("#detail_link .row").each(function () {
        $(this).css("display", "block");
    });
    $(".pagination li").removeClass("active");
    $(".pagination li:first").addClass("active");
    var link_img = document.getElementById("detail_link").getElementsByTagName("img");
    for (var j = 0, m = 0; j < link_img.length; j++, m++) {
        if (i !== m) {
            if (skin.detail.skin.img[m] == undefined) {
                link_img[j].parentNode.parentNode.style.display = "none";
            } else {
                link_img[j].setAttribute("src", skin.path + skin.detail.skin.path + skin.detail.skin.img[m]);
                link_img[j].parentNode.parentNode.setAttribute("onclick", `window.parent.parent.skin_problem_link(${m})`);
            }
        }
        else {
            m++;
            if (skin.detail.skin.img[m] == undefined) {
                link_img[j].parentNode.parentNode.style.display = "none";
            } else {
                link_img[j].setAttribute("src", skin.path + skin.detail.skin.path + skin.detail.skin.img[m]);
                link_img[j].parentNode.parentNode.setAttribute("onclick", `window.parent.parent.skin_problem_link(${m})`);
            }
        }
    }
    var link_h3 = document.getElementById("detail_link").getElementsByTagName("h3");
    for (var j = 1, m = 0; j < link_h3.length; j++, m++) {
        if (i !== m) {
            link_h3[j].innerText = skin.detail.skin.h3[m];
        } else {
            m++;
            link_h3[j].innerText = skin.detail.skin.h3[m];
        }
    }
    var link_p = document.getElementById("detail_link").getElementsByTagName("p");
    for (var j = 0, m = 0; j < link_p.length; j++, m++) {
        if (i !== m) {
            link_p[j].innerText = skin.detail.skin.p[m];
        } else {
            m++;
            link_p[j].innerText = skin.detail.skin.p[m];
        }
    }
}

function initKnowledge(i) {
    skin = {
        path: "res/img/knowledge/",
        detail: {
            knowledge: {
                path: "detail/link/",
                img: ["抑痘时该注意什么？.jpg",
                    "油性肌肤用什么面膜？.jpg", "冬天来了，我们该怎么在冬天护肤呢.jpg",
                    "明星皮肤这么好，原来是有原因的.jpg",
                    "肌肤缺水该怎么用喷雾紧急补水？.jpg",
                    "敏感肌肤是什么肌肤.jpg", "敏感肌肤要注意什么.jpg",
                    "每天吃这几样水果.jpg", "添加了这几样原料的护肤品千万不要买.jpg"],
                h3: ["抑痘时该注意什么？...",
                    "油性肌肤用什么面膜...",
                    "冬天来了，我们该怎...",
                    "明星皮肤这么好，原...",
                    "肌肤缺水该如何用喷...",
                    "敏感肌肤是什么肌肤...",
                    "敏感肌肤要注意什么...",
                    "每天吃这几样水果，可...",
                    "添加了这几样原料的..."],
                p: ["青春痘的形成是因为皮脂腺分泌油脂，会通过皮脂腺导管，输送到...",
                    "相信大家都知道，皮肤有一个自我保护系统，当皮肤深层缺水时皮...",
                    "冬天已经到了，很多朋友都不知道该怎么在这季节护肤，其实，在...",
                    "很多朋友经常看到电视上那些明星皮肤很好，常常会惊讶，为什么...",
                    "相信朋友们都遇到过这种情况，那就是出门后肌肤缺水，要给肌肤...\n",
                    "我们时不时的在某篇文章或者某篇报道看到“敏感肌肤”这四个字眼...",
                    "很多人饱受敏感肌肤的苦，周围环境一变化，亦或是气温、季节变...",
                    "很多人看了标题后就奇怪了，水果也能美容吗？答案是当然的，涨...\n",
                    "我们在护肤品上常常可以看到包装上写着无任何刺激添加，你们只..."],
            }
        },
    }
    //link
    $("#detail_link .row").each(function () {
        $(this).css("display", "block");
    });
    $(".pagination li").removeClass("active");
    $(".pagination li:last").addClass("active");
    var link_img = document.getElementById("detail_link").getElementsByTagName("img");
    for (var j = 0, m = 0; j < link_img.length; j++, m++) {
        if (i !== m) {
            if (skin.detail.knowledge.img[m] == undefined) {
                link_img[j].parentNode.parentNode.style.display = "none";
            } else {
                link_img[j].setAttribute("src", skin.path + skin.detail.knowledge.path + skin.detail.knowledge.img[m]);
                link_img[j].parentNode.parentNode.setAttribute("onclick", `window.parent.parent.knowledge_detail_link(${m})`);
            }
        } else {
            m++;
            if (skin.detail.knowledge.img[m] == undefined) {
                link_img[j].parentNode.parentNode.style.display = "none";
            } else {
                link_img[j].setAttribute("src", skin.path + skin.detail.knowledge.path + skin.detail.knowledge.img[m]);
                link_img[j].parentNode.parentNode.setAttribute("onclick", `window.parent.parent.knowledge_detail_link(${m})`);
            }
        }
    }

    var link_h3 = document.getElementById("detail_link").getElementsByTagName("h3");
    for (var j = 1, m = 0; j < link_h3.length; j++, m++) {
        if (i !== m) {
            link_h3[j].innerText = skin.detail.knowledge.h3[m];
        } else {
            m++;
            link_h3[j].innerText = skin.detail.knowledge.h3[m];
        }
    }
    var link_p = document.getElementById("detail_link").getElementsByTagName("p");
    for (var j = 0, m = 0; j < link_p.length; j++, m++) {
        if (i !== m) {
            link_p[j].innerText = skin.detail.knowledge.p[m];
        } else {
            m++;
            link_p[j].innerText = skin.detail.knowledge.p[m];
        }
    }
}

$(document).ready(function () {
    $("#detail_link").mouseenter(function () {
        $("#detail_link .row").each(function (index) {
            $(this).addClass("animated slideInUp");
            $(this).css("animation-duration", 0.1*(index + 1) + "s");
            $(this).hover(function () {
                $(this).find("img:first").css("transform", "scale(1.2)");
                $(this).find("h3:first").css("color", "#00a0e9");
                $(this).find("p:first").css("color", "#00a0e9");
            }, function () {
                $(this).find("img:first").css("transform", "scale(1)");
                $(this).find("h3:first").css("color", "#8c8c8c");
                $(this).find("p:first").css("color", "#8c8c8c");
            })
        })
    });
    $("#detail_link .row").each(function (index) {
        $(this).addClass("animated slideInUp");
        $(this).css("animation-duration", (index + 1) + "s");
    });
})