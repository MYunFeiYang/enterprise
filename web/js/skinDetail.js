var skin;
function initDetail (i) {
    skin={
        path:"res/img/skin/",
        detail:{
            main:{
                path:"detail/main/",
                img:["痘痘肌肤_03.jpg","粉刺肌肤_03.jpg","敏感肌肤_03.jpg","激素脸_03.jpg","黑头粉刺_03.jpg","“大油田”肌肤_03.jpg"],
                h3:[["痘痘肌肤","真假痤疮","痤疮类型","致病原因"],
                    ["粉刺肌肤","产生问题","改善方法"],
                    ["敏感肌肤","主要特征","产生问题"],
                    ["激素脸","四大阶段","改善方法"],
                    ["黑头粉刺","产生问题","改善方法"],
                    ["“大油田”肌肤","外油内干","改善方法"]],
                p:[["痤疮皮肤是常见于青春期脸上的脓包，病程长，皮肤发暗，比较粗糙，伴有单个或成片的的炎性病灶，痤疮俗称青春痘、粉刺、暗疮，中医古代称面疮、酒" +
                "刺，据学者们统计，在青春期男性有95%，女性有85%患过不同程度的痤疮，所以大家称其为“青春痘”是很贴切的。" +
                "\n" +
                "痤疮（青春痘）发生于毛囊皮脂腺的慢性皮肤病，多发于面部、颈部、前胸、后背等皮脂腺丰富的部位。在生活中，不少人脸上会出现一粒粒小疙瘩，与粉" +
                "刺长得很相似，鱼目混珠，让人难以分辨，其实，这些假粉刺是某些皮肤病的表现。",
                    "职业性痤疮：与从事职业及工作环境密切相关，如长期接触汽油、柴油、各种润滑油、石蜡、含氯化合物等，易引起职业性痤疮，常见的有黑头粉刺和毛囊" +
                    "炎，有人感到瘙痒。若黑头粉刺多时，可使皮肤变得灰蒙蒙的；毛囊炎重者可以引起痤疮，可留下疤痕，影响容貌美。\n" +
                    "毛囊虫皮炎：是毛囊虫寄生在皮肤毛囊或皮腺内引起的慢性炎症，油性皮肤的人容易发生，面部红斑上出现丘疹、脓疮，可结疤、脱屑而无粉刺。\n" +
                    "痤疮样药物疹：由某些药物引起的，如服用碘剂，溴剂，异烟肼、皮质类固醇激素等，皮肤及躯干可出现毛囊性丘疹、脓疮，停药后可自行消失。\n" +
                    "酒糟鼻样结核疹：与感染结核杆菌有关，颜观部出现有红斑、毛细血管扩张，皮疹如栗粒大小，呈现淡红色或黄褐色。\n" +
                    "成簇性眼眶周粉刺：在眼睑外侧方和颧骨部位，出现簇集性较大的粉刺，多发生于30-50岁的男女。患者中多数人存在光线弹力纤维病。",
                    "黑头粉刺：由于过多的皮脂分泌，皮脂分泌旺盛，相对毛孔变小。并且堵塞在毛孔口的乳酪状半透明的酯栓，经过氧化，露在毛囊口的外端变黑，形成米粒" +
                    "般大小的小黑点\n" +
                    "白头粉刺：谷粒至绿豆大小，毛囊和丘疹顶端形成脓包，破后脓液粘稠，愈后遗留瘢疤。\n" +
                    "丘疹型痤疮：痤疮炎症继续扩大、深入，使痤疮颜色变深红，还没有出脓包的状态，触摸伴有疼痛感。\n" +
                    "脓包型痤疮：痤疮化脓皮肤深层产生脓包，是炎症开始严重状态，脓不出皮肤表面。\n" +
                    "硬结性痤疮：皮脂块浸润较深，痤疮呈暗红色突出表面，之后可能会留下疤痕。\n" +
                    "囊肿型痤疮：指的是脓或皮脂等成口袋形状的痤疮，又大又红。皮脂囊肿内带有血的粘稠脓液，破溃后容易形成瘢疤。",
                    "自身因素：个人卫生不佳、穿着过紧与衣服摩擦过度的服饰、使用不适合自己的膏露和化妆品，遗传激素代谢絮乱、压力（情绪方面）、营养不良、药物（可" +
                    "的松）过量。\n" +
                    "病菌因素：局部细菌的活动引起脂肪酸的增加；皮脂腺的开口被脱落的表皮细胞、脂肪碎片堵塞；角质素的增加。\n" +
                    "其他因素：便秘、维生素过量、膀胱问题、助消化系统问题、肠问题、皮肤供氧不足、代谢不平衡。"],
                    ["粉刺分为两种，一种是开放性粉刺，我们俗称黑头，一种是闭合性粉刺，也就是我们所说的白头；白头粉刺起主导作用的是内分泌功能。雄性激素分泌活跃" +
                    "，会导致皮脂腺肥大，皮脂分泌过多；与此同时，毛囊皮脂腺上皮发生角化而使排泄皮脂的通道变窄，皮脂和死亡细胞滞留，堆积，造成毛孔堵塞。",
                        "在缺氧的环境下，痤疮丙酸杆菌和其他细菌大量繁殖，从而诱发痘痘。另外，遗传、内分泌障碍、环境污染、刺激性饮食、高温、化学因素等，都会对痘痘" +
                        "的发生产生影响。",
                        "阻塞的毛囊内很容易滋生细菌，其中一种叫痤疮杆菌，它专吃皮脂为生，正常存在皮肤中，当皮脂阻塞毛囊时，P菌即快速繁殖，他们所产生的化学物质，" +
                        "会使毛囊及周围发炎。",
                        "要注意“四少一多”，即少吃辛辣食物（如辣椒、葱、蒜等），少吃油腻食物（如动物油、植物油等），少吃甜食（如糖类、咖啡类），少吃“发物”（" +
                        "如鱼、虾、牛羊肉等），多吃蔬菜、水果。同时，注意肌肤的清洁，保证肌肤水油平衡，减少肌肤毛孔内的油脂堆积而导致毛孔堵塞。"],
                    ["敏感肌肤是一种问题性肌肤，任何肤质中都可能有敏感性肌肤，如同各种肤质都可能有老化肤质、痘痘肤质等；敏感肌肤是因为皮肤细胞受损而使皮肤的免" +
                    "疫力下降，角质层变薄导致皮肤滋润度不够，最终导致肌肤的屏障功能过于薄弱，无法抵御外界的刺激。",
                        "接着皮肤的神经纤维由于经常受到外界刺激，过于亢奋，从而易于产生泛红、发热、瘙痒、刺痛、红疹等不适现象的发生。这一类通常是由于肌肤接触了激" +
                        "素类的东西，还有一类是由于遗传因素造成的肌肤敏感。",
                        "看上去皮肤较薄，容易过敏，脸上的红血丝明显（扩张的毛细血管）；皮肤容易泛红，一般温度变化，过冷或过热，皮肤都容易泛红、发热；容易受环境因" +
                        "素影响、季节变化或面部保养品刺激，通常归咎于遗传因素，但更多是由于使用刺激类化妆品导致成为敏感肌肤，并可能伴有全身的皮肤敏感。",
                        "容易受外界刺激而出现肌肤泛红、发热、瘙痒、刺痛等；严重会出现红肿和皮疹；伴有肤色不均的烦恼，炎症褪去容易留下印痕或斑点；皮肤薄、角质层不" +
                        "全，容易脱屑；保水能力差，皮肤紧绷干燥；突然出现很多原因不明的痘痘，使用任何的祛痘产品都无效。"],
                    ["激素脸也称激素性痤疮，属于药物性痤疮的一种，是因为间断或长时间的滥用激素药膏或暗含激素的美容化妆品，引起激素的毒副作用所造成的一种严重皮" +
                    "肤病。",
                        "它有别于普通的皮肤敏感或是过敏，因其不仅严重的破坏了皮肤的正常生理结构和功能，还对患者的整个身体健康造成了影响，给治疗上也带来了很大的困" +
                        "扰。同名症状有面部激素依赖性皮炎、激素依赖性皮炎的叫法。",
                        "第一阶段主要是以粉刺为主，少量丘疹性痤疮、脓包性痤疮，总皮损小于30个；第二阶段是粉刺和中等数量丘疹性痤疮、脓包性痤疮，总皮损数30~50个；" +
                        "第三阶段为大量丘疹性痤疮、脓包性痤疮，总皮损数51~100个，结节性痤疮数量少于3个；第四阶段为结节性痤疮、囊肿性痤疮或聚合性痤疮总皮损大于" +
                        "100个，结节性痤疮大于3个。",
                        "激素脸是因为使用了含有激素的美容化妆品或是药膏，引起激素的毒副作用而形成的一种严重的皮肤病。而且，无论是外用、口服或是注射（皮内、肌肉、" +
                        "静脉或是关节腔）也都是会引起痤疮的。生活中有太多的激素脸患者为了能及早摆脱激素依赖性皮炎的困扰，尝尽了一切的办法去治疗激素性皮炎，但是都" +
                        "以失败而告终，但是却在魅诗肌（CHARM’S SKIN）的帮助下，改善皮肤问题而走向健康肌肤的舞台。魅诗肌建议大家在刚开始停用激素时，为了减少激" +
                        "素骤停带来的反弹和皮损加重，这个时候要避免刺激。这个时候原有皮损会加重，炎症更加明显，感觉异常痛苦，但是也要忍住不能再用任何激素类药物，" +
                        "最好什么外用药也不用。但是绝对要记住，慎用各类化妆的产品，特别是没有在国家备案检验的产品。"],
                    ["黑头主要是由皮脂、细胞屑和细菌组成的一种“栓”样物，阻塞在毛囊开口处形成的，加上空气中的尘埃、污垢和氧化作用，使其接触空气的一头逐渐变黑" +
                    "，所以得了这么一个不太雅致的称号——黑头。",
                        "黑头是硬化油脂阻塞物，通常出现在颜面的额头、鼻子等部位，当油脂腺受到过分刺激，毛孔充满多余的油脂而造成阻塞时，在鼻头及其周围部位，通常会" +
                        "有有你的感觉，这些油脂最终会硬化，经氧化后成为黑色的小点，这些小点就是被称作黑头的油脂阻塞物。",
                        "大家有没有发现通常长痘痘和黑头的人皮肤比较粗糙，毛孔也很大，有很多的油脂粒堵住张开的毛孔，还有皮肤里面一个个硬硬的小疙瘩，总是被反复诱发" +
                        "成痘痘，严重的更会有凹凸不平的状况。如果将痘痘比喻成活火山，那么黑头就好比是死火山，虽然危险性不足以引起特别关注，但它的确是拥有凝脂肌肤" +
                        "的女性之大敌",
                        "要注意“四少一多”，即少吃辛辣食物（如辣椒、葱、蒜等），少吃油腻食物（如动物油、植物油等），少吃甜食（如糖类、咖啡类），少吃“发物”（" +
                        "如鱼、虾、牛羊肉等），多吃蔬菜、水果。同时，注意肌肤的清洁，保证肌肤水油平衡，减少肌肤毛孔内的油脂堆积而导致毛孔堵塞"],
                    ["油性肌肤最常见于青春期及一些体内伴雄性激素水平高或具有雄性激素高敏感受体的人群。油性皮肤皮脂分泌旺盛，与其含水量<20%不平衡，pH<4.5，" +
                    "皮肤看上去油光发亮、毛孔粗大、皮肤色暗且无透明感，但皮肤弹性好。",
                        "这类型皮肤对日晒和环境不良刺激耐受性较好，皱纹产生较晚且为粗大皱纹。油性皮肤容易遭受微生物侵扰发生痤疮、毛囊炎及脂溢性皮炎等皮肤病。且出" +
                        "油和很多东西有关系，如性别、年龄、遗传、内分泌、季节、紫外线、清洁过度、饮食。",
                        "一般情况下，健康的皮肤含水量正常的油性皮肤是没有太强的补水保湿需求的，但是如果你的身体本来就缺水，或是过度去角质过度去脂这类因为自身原因" +
                        "导致的外油内干就比较麻烦，这样不仅仅要控油，补水工作也要做到位，在这里必须注意的是，补水和保湿是不一样的！补水是增加皮肤的含水量，而保湿" +
                        "是减少水分的蒸发，外油内干的本质上不是保湿不够，因为皮肤分泌的油脂已经足够保湿了，所以，我们要做的是补水。",
                        "针对“大油田”皮肤我们要做的就只有两个字“控油！”，首先，我们必须保证面部肌肤的清洁，因为面部肌肤油脂分泌过多，很多微生物会依附在上面，n" +
                        "所以，我们要保证面部的清洁，但注意，面部清洁过程中洗面水不要太冷或太热，即使是炎夏，也要用温水洗脸，接着，敷保湿面膜，如果是外油内干，则" +
                        "补水保湿面膜，在日常生活中要少吃甜食、油炸，多吃蔬菜、水果，减少油脂分泌，适量运动排汗，加速体内循环代谢，并且多喝水。"]]
            },
        },
    }
    if ($(window).width()<=768){
        window.parent.$(".navbar-brand:first").css("display","block");
    }
    var main_img=document.getElementById("detail_main").getElementsByTagName("img");
    main_img[0].setAttribute("src",skin.path+skin.detail.main.path+skin.detail.main.img[i]);
    var main_h3=document.getElementById("detail_main").getElementsByTagName("h3");
    for (var j=0;j<main_h3.length;j++){
        main_h3[j].innerText=skin.detail.main.h3[i][j];
    }
    var main_p=document.getElementById("detail_main").getElementsByTagName("p");
    for (var j=0;j<main_p.length;j++){
        main_p[j].innerText=skin.detail.main.p[i][j];
    }
}