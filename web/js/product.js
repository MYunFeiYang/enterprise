var product;

function initProduct() {
    product = {
        path: "res/img/product/",
        banner: {
            img: "banner.jpg"
        },
        title: {
            img: "title.jpg"
        },
        img: ["氨基酸柔肤卸妆液.jpg", "奥氏海藻调理水.jpg", "北美金缕梅抑痘净颜膜.jpg", "北美金缕梅抑痘凝胶.jpg",
            "复活草深层修护乳.jpg", "复活草柔肤修护精华.jpg", "复活草多效修护面膜.jpg", "橄榄净颜洗面奶.jpg",
            "马齿苋粉刺修护精华.jpg", "仙人掌抑痘精华.jpg", "粉刺修护套装.jpg", "复活草修护套装.jpg", "轻度抑痘套装.jpg",
            "中度抑痘套装.jpg", "重度抑痘套装.jpg", "重度粉刺修护套装.jpg"],
        name: ["氨基酸柔肤卸妆液", "奥氏海藻调理水", "北美金缕梅抑痘净颜膜", "北美金缕梅抑痘凝胶",
            "复活草深层修护乳", "复活草柔肤修护精华", "复活草多效修护面膜", "橄榄净颜洗面奶", "马齿苋粉刺修护精华",
            "仙人掌抑痘精华", "粉刺修护套装", "复活草修护套装", "轻度抑痘套装", "中度抑痘套装", "重度抑痘套装", "重度粉刺修护套装"],
        price: ["￥258/150ml", "￥236/120ml", "￥396/200g", "￥258/25g", "￥456/80ml", "￥336/50ml",
            "￥272/25ml*5片", "￥178/100ml", "￥396/50ml", "￥372.00/50ml", "￥1028/3件", "￥1064/3件", "￥866/3件",
            "￥1718/5件", "￥1930/6件", "￥1162/4件"],
        classify: [[0, 1, 7], [2, 3, 8, 9], [4, 5, 6], [10, 11, 12, 13, 14, 15]],
        init: function () {
            if ($(window).width() <= 768) {
                $("#content").html("<div class=\"row\">\n" +
                    "                        <div class=\"col-md-4  col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img>\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img >\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-md-4 col-sm-6 col-xs-6\">\n" +
                    "                            <div class=\"thumbnail\">\n" +
                    "                                <img>\n" +
                    "                                <div class=\"caption\">\n" +
                    "                                    <h6></h6>\n" +
                    "                                    <p></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                    </div>")
            }
            //banner
            $("#banner").attr("src", product.path + product.banner.img);
            //title
            $("#title img:first").attr("src", product.path + product.title.img);
            //content
            $("#content img").each(function (index) {
                $(this).attr("src", product.path + product.img[index])
            });
            $("#content h6").each(function (index) {
                $(this).html(product.name[index])
            });
            $("#content p").each(function (index) {
                $(this).html(product.price[index])
            });
            if ($(window).width() <= 768) {
                window.parent.$("#suspend").css("display", "none");
                window.parent.$(".navbar-brand:first").css("display", "block");
            }
            ;
            if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                $(".caption").each(function (index) {
                    $(this).click(function () {
                        window.parent.product_detail_link(index);
                    })
                })
            } else {
                $(".thumbnail").each(function (index) {
                    $(this).click(function () {
                        window.parent.product_detail_link(index);
                    })
                })
            }
        }
    };
    $(".thumbnail").each(function () {
        $(this).css("display", "block");
    });
    $(".pagination:last li:last").each(function () {
        $(this).css("display", "inline");
    });
    product.init();
}

function paging(m, obj) {
    var brothers = obj.parentNode.children;
    for (var i = 0; i < brothers.length; i++) {
        brothers[i].classList.remove("active");
    }
    obj.classList.add("active");
    $(".thumbnail").each(function () {
        $(this).css("display", "block");
    });
    //content
    $("#content img").each(function (index) {
        var j = index + m * 9;
        if (product.img[j] !== undefined) {
            $(this).attr("src", product.path + product.img[j]);
            if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                $(".caption").each(function (index1) {
                    $(this).click(function () {
                        window.parent.product_detail_link(index1+ m * 9);
                    })
                })
            } else {
                $(".thumbnail").each(function (index1) {
                    $(this).click(function () {
                        window.parent.product_detail_link(index1+ m * 9);
                    })
                })
            }
        } else {
            $(this).parent().css("display", "none");
        }
    });
    $("#content h6").each(function (index) {
        var j = index + m * 9;
        if (product.name[j] !== undefined) {
            $(this).html(product.name[j])
        }
    });
    $("#content p").each(function (index) {
        var j = index + m * 9;
        if (product.price[j] !== undefined) {
            $(this).html(product.price[j])
        }
    });
}

function classify(m) {
    $(".thumbnail").each(function () {
        $(this).css("display", "block");
    });
    //content
    var content_img = document.getElementById("content").getElementsByTagName("img");
    for (var i = 0; i < product.classify[m].length; i++) {
        var j = product.classify[m][i];
        content_img[i].setAttribute("src", product.path + product.img[j]);
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            $(".caption").each(function () {
                $(this).click(function () {
                    window.parent.product_detail_link(j);
                })
            })
        } else {
            $(".thumbnail").each(function () {
                $(this).click(function () {
                    window.parent.product_detail_link(j);
                })
            })
        }
    }
    //清除多余框
    for (var i = product.classify[m].length; i < content_img.length; i++) {
        content_img[i].parentNode.style.display = "none";
    }
    var content_name = document.getElementById("content").getElementsByTagName("h6");
    for (var i = 0; i < product.classify[m].length; i++) {
        var j = product.classify[m][i];
        content_name[i].innerText = product.name[j]
    }
    var content_price = document.getElementById("content").getElementsByTagName("p");
    for (var i = 0; i < product.classify[m].length; i++) {
        var j = product.classify[m][i];
        content_price[i].innerText = product.price[j]
    }
    $(".pagination:last li:last").css("display", "none");
}

$(document).scroll(function (e) {
    if ($(window).width() >= 768) {
        if ($(document).scrollTop() !== 0) {
            $("#title img:first").removeClass("animated flipInX");
            $("#title img:first").addClass("animated flipOutX");
            $("#title img:first").css("animation-delay", "0");
            $("#title img:first").css("transform-origin", "center bottom");
            if ($("#title").offset().top - $(window).scrollTop() < 20) {
                $("#fixed").stop();
                $("#fixed").css("position", "fixed");
            } else {
                $("#fixed").stop();
                $("#fixed").css("position", "absolute");
                $("#fixed").animate({"top": "0"});
            }
        }
        else {
            $("#title img:first").removeClass("animated flipOutX");
            $("#title img:first").addClass("animated flipInX");
            $("#fixed").stop();
            $("#fixed").css("position", "absolute");
            $("#fixed").animate({"top": "10px"});
        }
    }
});
$(document).ready(function () {
    if ($(window).width() > 768) {
        $("#content .row").each(function () {
            $(this).mouseenter(function () {
                $(this).find(".thumbnail").each(function (index) {
                    $(this).addClass("animated slideInUp");
                    $(this).css("animation-duration", 0.5 * (index + 1) + "s");
                })
            })
        });
        $(".product_nav li").click(function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        })
    }
});