var knowledge;

function initDetail(i) {
    knowledge = {
        path: "res/img/knowledge/",
        detail: {
            main: {
                path: "detail/main/",
                img: ["抑痘时该注意什么？.jpg",
                    "油性肌肤用什么面膜.jpg",
                    "冬天来了，我们该怎么护肤.jpg",
                    "明星皮肤这么好，原来是有原因的.jpg",
                    "肌肤缺水该怎么用喷雾紧急补水.jpg",
                    "敏感肌肤是什么肌肤.jpg", "敏感肌肤要注意什么.jpg",
                    "每天吃这几样水果.jpg", "添加了这几样原料的护肤品千万不要买.jpg"],
                h3: [["抑痘时该注意什么？怎么做才能正确有效的抑痘？", "出现的原因", "预防方法", "护理方法", "正确抑痘做法"],
                    ["油性肌肤用什么面膜？", "油性肌肤的危害", "护理方法", "常用面膜", "油性肌肤的误区"],
                    ["冬天来了，我们该怎么在冬天护肤呢？", "补水的重要性", "护理方法", "冬季补水的误区"],
                    ["明星皮肤这么好，原来是有原因的！", "防晒的重要性", "熬夜对皮肤的损伤", "调节好水油平衡"],
                    ["肌肤缺水该如何用喷雾来紧急补水呢？出门只用一瓶喷雾，就可不用担心皮肤缺水！", "补水和保湿的重要性", "为什么要补水保湿", "使用喷雾紧急补水的方法"],
                    ["敏感肌肤是什么肌肤？看过之后你就明白了", "敏感肌肤和过敏肌肤的区别", "过敏的原因", "产生的原因"],
                    ["敏感肌肤要注意什么？", "适度清洁", "慎用化妆品", "日常注意", "防治措施"],
                    ["每天吃这几样水果，可以让肌肤水润光滑", "为什么水果能美容", "水果美容"],
                    ["添加了这几样原料的护肤品千万不要买！","什么是“无添加”","皮肤的十大“黑客”——添加剂"]],
                h6: ["抑痘祛粉", "淡化痘印", "美白护肤", "美白护肤", "祛痘祛粉", "改善敏感", "改善敏感", "美白护肤","祛痘祛粉"],
                p: [
                    ["让人苦恼的粉刺痘痘，最可恶的是哪怕去除掉了，还是会反复“发作”，这些恢复很慢，偶尔还会伴随着疼痛的粉刺痘痘真是一件麻烦事，但是出现这些粉刺痘痘的原因是什么呢？",
                        "干燥，激素平衡混乱，睡眠不足···原因可谓是多种多样，以上那些原因缠绕在一起，导致皮肤细胞更新周期降低（正常的表皮更新周期为28天一周期），陈旧角质和皮脂无法顺畅从毛孔排出从而形成粉刺痘痘，而额头和发际线周围出现粉刺痘痘，大多数的原因是因为洗发水没有冲洗干净！对，你没有看错，我也没有打错字，就是因为洗发水没有清洗干净，用完洗发水和护发素之后要清洗干净，不要残留余液。",
                        "避免干燥和和刺激，有规律的生活方式！要想脸上不长痘或想让痘痘快点消退，就需要注意不要做一些帮助皮肤干燥的生活习惯。有干燥倾向的皮肤，注意不要过于使用去垢能力强的卸妆油；此外，注意日常有规律的生活方式，调理身体韵律也很重要。而在饮食方面，注意不要过多的摄取会导致皮脂过剩分泌的油腻性食物，甜性较大的碳水化合物和甜食。",
                        "勤快做好保湿工作！黄体适度做好角质护理页很重要，想让皮肤不干燥，首先需要彻底做好保湿和防紫外线护理。湿度较大的夏季使用空调会加强室内空气" +
                        "干燥。早晚做好保湿，推荐使用加湿器。此外女性皮肤很容易受激素平衡而影响皮肤状态；排卵日~月经前为止的“黄体期”，在此期间皮脂分泌会很活跃" +
                        "，而角质也会变厚，建议适度做好角质护理。推荐使用对皮肤刺激很小的美容精类型的换肤产品；\n" +
                        "\n" +
                        "而如果不想留下痘印，要避免刺激！这点很重要，在这推荐使用美白化妆水的面膜，亦或是有修护功能的面膜，粉刺是皮肤细胞更新周期混乱的一个信号，" +
                        "也是影响色素沉着的一个原因，注意不要过度刺激，不要因为长了痘，妨碍了你的美就去欺负它，弄毁它，或用手摸，等等行为还是躲避为妙！我们惹不起" +
                        "痘痘，却是躲得起的；\n" +
                        "\n" +
                        "如果是白粉刺的初期阶段，和炎症不是太厉害的红粉刺的话，推荐使用美白化妆水的面膜，因为美白化妆水多是添加了具有抑制炎症的成分，座椅在一定程" +
                        "度上可以防止粉刺的恶化，炎症过于严重，建议及时就医或寻找专业人员咨询。",
                        "抑痘和治痘都有一个共同点，那就是——“它们是金字塔”，下层是心态，中层是方法，上层是产品，其实，长痘的人也有一个共同点“缺乏耐心”，它" +
                        "们对于痘痘深恶痛绝，巴不得痘痘在下一秒全部消失，因此它们寻找很多的方法，希望可以快速有效的祛痘，但往往结果都让它们失望，其实，并不是方法" +
                        "不管用，而是它们喜欢半途而废，明明有效的方法，却因为没耐心而选择放弃，然后去寻找另一个方法，所以，在这奉劝长痘的朋友们一句话“治痘和抑痘" +
                        "千万要有耐心”，根据在皮肤医学和手术研讨会上发表的研究表明，炎症性皮肤病，比如痤疮和银屑病可以通过经历压力而恶化，为此保持好的心态非常重" +
                        "要，其实有一句话对于长痘的人来说非常贴切，那就是“对于痘痘，我们在心理上藐视它，行为上重视它”。\n" +
                        "\n" +
                        "中层方法是什么？说得直白点就是抑痘祛痘的方法，有了好的心态，我们就需要有效的方法来让抑痘祛痘变成可实施的项目工程，至于这工程需要耗费你多" +
                        "长的时间，这就要看你是否重视这工程了，在此要郑重声明：痘痘不可能两三天治理好，如果有人告诉你他能帮你两三天把你脸上的痘痘全部去掉，那么恭" +
                        "喜你，你遇到神了，在上文我们就提到过，人的肌肤细胞更新为28天一周期，痘痘的消退是需要时间，一两颗痘痘消退两三天是可以做到，但满脸痘痘两三" +
                        "天消退，那只能称之为“奇迹”。\n" +
                        "\n" +
                        "最后就是产品，我们刚刚把抑痘祛痘方法比喻为工程，产品就是这工程酵素建造的“材料”，也可以是“建筑工”，靠人体自愈痘痘，在少量的情况下是可" +
                        "以的，但如果是多数的话，人体自愈基本不可能，痘痘中有一种会移动的细菌，那就是“痤疮丙酸杆菌”，当你用手去摸了痘痘，又摸了健康肌肤，它就会" +
                        "随着你的手移动到那块肌肤上安家落户，产品这时就凸显作用了，大多数的抑痘产品都有消除亦或者说对抗这种细菌的能力，所以，产品的作用显而易见了" +
                        "吧？ "],
                    ["相信大家都知道，皮肤有一个自我保护系统，当皮肤深层缺水时皮肤就会分泌出大量的油脂来保护皮肤，油性肌肤就是因为肌肤极度缺水，导致皮肤的自我保护系统启动，分泌大量油脂。",
                        "说起油性肌肤，很多人心里头第一个想到的是，脸部油光满面，看起来一点都不干净，其实油性肌肤还是有点好处的，那就是弹性好，不易衰老，但是，油性肌肤弊大于利，它会让人体的肤色变得深沉，毛孔粗大，甚至可以出现桔皮样外观，很容易沾附灰尘和污物，引起皮肤的感染和痤疮，看到这，相信油性皮肤的你已经开始重视这个问题了把？",
                        "卸妆时要注意脆弱部位分开卸妆，最好使用最亲肤的卸妆油，清洁时如果是毛孔常开就用皂类，毛孔常闭用温和效果佳的乳液类；湿润环境用皂类，干燥缓解乳霜类。当然美容技术发展以后越来越趋向于融合。补水保湿使用水包油产品，注意保湿成分如透明质酸（玻尿酸）、甘油、角鲨烯等成分的含有。滋养是护肤的末节要考虑到其含有的保湿性能、控油性能、滋养性能、修复缓和性能。并且注意防晒，不要喝酒、吸烟、饮用咖啡等。",
                        "紧肤面膜：梨、酸奶面膜。坚持每日一次。适合油性、中性皮肤。\n" + "" +
                        "\n" +
                        "酸奶清洁面膜：酸奶面膜可以兼做洗脸之用，使用前后不必刻意清洁脸部。使用4~5回后，肌肤将会有全新的感受。\n" +
                        "\n" +
                        "草药面膜： 纯植物性的中草药产品适合各种肤质，且性质温和安全、不损伤皮肤。\n" +
                        "\n" +
                        "乳霜类面膜：大多在干燥季节增加皮肤的滋润度，具体说起到什么样的作用，取决于使用什么原料，提醒下如果美白类的乳霜面膜，里面含有二氧化钛这类粉剂，就不要使用，虽然会白，但直接作用在皮肤上也会堵塞毛孔",
                        "\n" +
                        "1：使用紧肤水就可以起到收缩毛孔的作用了；错。仅仅使用紧肤水是远远不够的。只有从毛孔粗大的成因入手，从根源上抑制油脂分泌，疏通毛囊通道，才能起到事半功倍的效果。\n" +
                        "\n" +
                        "2：年纪大了以后，油脂分泌就会减少，这样毛孔问题自然而然就解决了。错。毛孔结构本身没有伸缩性，当毛囊通道内长期有过多油脂堆积，会造成毛囊通道长期膨胀。这个时候，即使油脂分泌减少了，毛囊通道也不会恢复原样\n" +
                        "\n" +
                        "3：晚霜通常都很油腻，不适合油性/混合性皮肤使用。错。这是一种误解。研究发现，皮脂腺在夜晚更活跃。因此，油性/混合性皮肤尤其需要使用夜晚专用护肤产品，以便更有效地抑制油脂分泌，以减少白天的皮肤表面油光，有效缓解痘痘、油光、毛孔粗大等皮肤问题。\n" +
                        "\n" +
                        "4：白天的皮肤油光更严重，所以我更注重白天的皮肤控油护理。错。白天皮肤表面的油光，都是皮脂腺在夜晚分泌的。因此，只有在夜晚进行针对性护理,才能更有效地控制白天皮肤表面的油光。\n" +
                        "\n" +
                        "5：有了油脂调护的晚霜，白天只要使用无油配方的面霜就可以了。错。根据皮脂腺的特点，油性/混合性皮肤需要在夜晚和白天分别使用不同的面霜，达到改善皮肤问题的目的."],
                    ["冬天已经到了，很多朋友都不知道该怎么在这季节护肤，其实，在冬天护肤有一点很重要，那就是肌肤的补水工作，北方的朋友可要仔细看这篇文章了，因为北方的冬天特别的干燥，导致人的皮肤也会变得干燥。",
                        "冬天的到来使得空气变得干燥，同时肌肤在夏天受到的伤害也会在秋冬季显现出来，此时人的肌肤表面容易干燥，缺乏弹性，显得暗淡而变得异常脆弱，如果我们这个时候还不注重补水，那么等待我们的就是皮肤的老化，油脂分泌过甚，痘痘粉刺的滋生，这并不是危言耸听，人体肌肤中一大半是水，当皮肤缺水，肌肤就开始变得不健康。",
                        "洗澡时，水温不易过高，以免洗去肌肤内过多的油脂，再配合滋润型的沐浴液清洁身体，浴后趁肌肤微湿，饱含水分时,搽上浓稠度较高的身体护肤乳；在平\n" +
                        "时，要注意对紫外线的防御，冬天时候的UVB紫外线虽然没有夏天的猛烈，但是UVA紫外线却和全年任何时间强度大致相同，而UVA不仅会增加皮肤黑色素使肤色变深,更能深入肌肤,令肌肤衰老。\n" +
                        "\n" +
                        "冬季气温低下，皮肤裸露部位极易冻伤，如手部、头部、颈部等。其它如脚部也易受冻，因而应注意这些部位的防寒保温，可围围巾，戴手套、耳套，穿棉" +
                        "鞋等保暖，还可随时摩擦双手和耳朵，适时垫脚、锻炼。忌穿潮湿的衣服、鞋袜，同时，手脸洗后要揩干后才可外出。\n" +
                        "\n" +
                        "避免使用劣质化妆品，劣质化妆品因质地不纯或含铅重，对皮肤有毒害作用。还有的化妆品含有某些易致过敏的香料，有的人使用后会过敏，甚而使色素增" +
                        "加。这些，都易对皮肤造成伤害。冬季，在皮脂少的情形下，伤害更甚。 \n" +
                        "\n" +
                        "穿着宜柔和 ，冬寒穿衣较多，如不注意穿着，更易感觉皮肤瘙痒。这是由于身体与衣服、衣服与衣服间不断发生摩擦产生静电，静电刺激皮肤所致。因而，" +
                        "冬季应尽可能地选用纯棉、真丝之类不易产生静电的衣物做内衣、内裤、衬衫等。\n" +
                        "\n" +
                        "注重食物保健 ，当人体缺乏维生素A时，皮肤会变得干燥，有鳞屑出现，甚至使皮肤出现棘状丘疹，因而冬季宜多吃些富含维A的食物，如猪肝、禽蛋、鱼" +
                        "肝油等。另外，一周做1-2次面膜，用生物非凝洁性面膜，即含天然植物成份的软膜、硬膜或腊膜、不要用撕拉式面膜或硬膜。护肤品以保湿类为主，搽润" +
                        "肤露之前最好能给皮肤以充足的水份。",
                        "1、皮肤干燥，可以使用喷雾补水吗，水分停留的时间越长越好吗？喷雾可以补水，但水分只停留在皮肤表面，说到底只是和自来水洗脸一样，但喷雾最主" +
                        "要的作用是即刻舒缓，在你吹完风刺痛或者暴晒成为大红脸的时候是使用最好的时候，但日常补水保湿，喷雾就不适合了，而喷雾停留的时间并非时间越长" +
                        "越好，最好是在30秒内完成喷雾使用的步骤。\n" +
                        "\n" +
                        "2、在暖气房怎么保湿，可以使用加湿器吗？冬天来了，很多家庭都开了暖气，但暖气房温度相对较高但相对湿度较低，这种高温低湿的环境是最容易导致" +
                        "皮肤水分蒸发的，使用加湿器可以提高环境的相对湿度，但这也只是缓兵之计，离开这个局部环境，皮肤本身依然干燥。所以，要时刻根据自己的肌肤情况" +
                        "来给肌肤补水保湿。\n" +
                        "\n" +
                        "3、蒸脸可以有效保湿吗？所有蒸脸器对皮肤的作用只有补水！仅此而已！效果和喷雾是一样的。\n" +
                        "\n" +
                        "4、多喝水可以补充皮肤水分，解决皮肤干燥问题吗？首先，多喝水确实可以补充皮肤水分，但是，喝水是一个持续性为人体补充水分的工作，如果想要达" +
                        "到即刻补水效果明显是不够的，脉动也做不到这么神奇的事，特别是现在的冬天，单纯的喝水绝对满足不了皮肤的保湿要求。"],
                    ["很多朋友经常看到电视上那些明星皮肤很好，常常会惊讶，为什么她们岁数那么大了，皮肤却还是这么好？其实，她们很注重皮肤的保养，之前一则新闻曾经说范冰冰一年用800张面膜，当然，事件的准确性我们不深究，我们在意的是明星皮肤好的原因。",
                        "明星很少会出现在人多太阳大的地方，不单单是因为她们“明星”的身份，还有紫外线原因，很多人认为只有夏季才需要注意防晒，其实不然，紫外线的伤" +
                        "害一年四季都会有，尤其是经常做户外活动的人群。除了使用防晒产品，做好“物理”防晒功课也是必不可少的手段。经常拍戏的明星们，与紫外线的抗争" +
                        "更是“不择手段”。\n" +
                        "\n" +
                        "孙俪遮阳帽＋墨镜，除了正确使用防晒产品之外，宽沿遮阳帽和大墨镜是娘娘出门必备，四面防晒，全方位遮挡阳光；Angelababy防晒套袖＋防晒衣，如" +
                        "果你看过跑男的话，你一定会发现，只要是户外的活动，Angelababy一定会戴防晒的套袖，甚至直接穿上防晒衣；林志玲全身无死角涂防晒，在《花儿与" +
                        "少年》里，志玲姐姐一边涂着防晒一边说：不但脸上要擦防晒霜，全身都要擦，否则会脸上白白的，而其他部位肤色比较黑。看看女神们都这么小心防晒，" +
                        "你还有什么觉得可以放松警惕的吗？",
                        "在熬夜这个问题上，说十遍也不为过。很多人估计都是说的到做不到，睡前玩手机是很多人延缓入睡的原因之一。想想一白遮百丑，肤白貌美的自己更重要" +
                        "还是玩手机更重要。这个时候你会疑问，很多明星为了拍戏一天只睡几个小时，她们皮肤还是那么好，当你问出这个问题的时候，请想想她们熬夜过后对皮" +
                        "肤的护理有多繁琐，并且，明星们一天睡几个小时只有在拍戏的时候才会偶尔出现，并不是一场戏下来每天都是熬夜的，再加上事后明星们对皮肤的护理，" +
                        "基本就把当晚熬夜对皮肤的损伤弥补回来了。",
                        "弄清楚自己是属于什么肤质，油性皮肤在温暖的季节都可以在脸上炒菜啦，干皮则是要多多补水。总之，要讲皮肤状态调节到水油平衡的最佳点。这样，你" +
                        "的脸上才不会起小皮屑，也不会油光满面，长脂肪粒。明星们因为要经常上银幕，所以特别注重脸部的水油平衡，不仅仅是这样，脸部水油失衡后，很容易" +
                        "导致脸部出油量过大，粉刺痘痘的滋生。",
                        "最后，总结起来就是几点，第一点防晒，不防晒怎么会有美丽亮白的肌肤呢？第二点不熬夜，熬夜是皮肤的天敌，一定要重视。第三点，调节好肌肤水油平" +
                        "衡，只有水油平衡的肌肤才是健康美丽的肌肤，另外，在饮食方面也要注意，少吃油腻辛辣食物，多吃蔬菜水果。"],
                    ["相信朋友们都遇到过这种情况，那就是出门后肌肤缺水，要给肌肤补水很不方便，没办法，总不能带张补水面膜或者带瓶补水乳在身上随时敷上吧？这个时候我们就要用到补水喷雾了。",
                        "1、  补水和保湿，抗衰老；水对于完美肌肤的作用是无庸质疑的。婴儿的肌肤含水量为25％，因而光滑细腻而富有弹性；而成年女性特别是都市女性的肌肤" +
                        "含水量已降至15％，甚至更低，肌肤含水量的大幅下滑直接导致了肌肤干燥、肌肤发黄、发暗，肌肤无光泽，肌肤松弛，皱纹早生等现象。因此解决肌肤衰" +
                        "老补水和保湿才是王道。\n" +
                        "\n" +
                        "2、保湿的重要性；保湿和补水不同，我们给肌肤补水后，如果不把水分锁在肌肤里面，皮肤很快就会有变得干燥缺水，这个时候，保湿的重要性就出来了，" +
                        "保湿是女人一生都要做的护肤功课。缺水就会发黄、长斑、长皱纹、松驰，所有美白、淡斑产品只要皮肤一发干就会停止作用。所有抗皱产品都必须有充足" +
                        "水分才能深层渗透，去抚平干燥、下腺和断裂纤维。没有水一切都可能发生。",
                        "补水之所以成为护肤当中最重要的部分，是因为肌肤的水分非常容易流失，而肌肤缺乏足够的含水量将直接导致肌肤代谢不正常而衰老、出现皱纹和色斑等" +
                        "等一系列肌肤问题。都说女人是水做的，皮肤必须有水的滋养，才不会出现各种问题。当肌肤表层即角质层的水份达到15-25%，含水充足时，皮肤不但会" +
                        "柔软光滑没有细纹，手感上也会充满弹性；但随着年龄的增长和不良的生活方式，角质层水份逐渐流失，当含量低于10%时，皮肤就会出现干燥、细纹、紧" +
                        "绷、粗糙及脱屑等。表层肌肤虽然无法从身体内部直接获得水份，但在肌肤的底层真皮层，却有水份时时刻刻、源源不断的流动供应着。所以，肌肤补水从" +
                        "源头、根本上来讲就是补充真皮层的水份，真皮层补水才是美肤的第一要素。",
                        "看了上面的说明后，大家应该明白肌肤补水保湿有多重要了，为什么补水保湿的方法这么多，我们要说喷雾呢？因为喷雾体积小，便于随声携带，很多朋友" +
                        "都会带在身上，其实用喷雾紧急补水的方法分为几个步骤\n" +
                        "1、先用吸油面纸吸去多余的皮脂和污垢；\n" +
                        "2、喷雾距离面部10至15厘米，稍微仰头，尽可能的承接最多水分；\n" +
                        "3、轻拍全脸，或者按压促进水分吸收；\n" +
                        "4、如果还有部分未能吸收的水分，用面纸轻轻擦干，避免自然风干；\n" +
                        "5、以上的动作最好在30s内完成，然后涂抹含有油性成分的保湿霜或保湿乳\n",
                        "当然，喷雾的补水方法只能用来救急用，喷雾可以补水，但水分只停留在皮肤表面，说到底只是和自来水洗脸一样，但喷雾最主要的作用是即刻舒缓，在你" +
                        "吹完风刺痛或者暴晒成为大红脸的时候是使用最好的时候，但日常补水保湿，喷雾就不适合了。"],
                    ["我们时不时的在某篇文章或者某篇报道看到“敏感肌肤”这四个字眼，可很多人却不知道敏感肌肤是什么肌肤，今天，我们就来说说这个敏感肌肤，其实敏感肌肤分为先天和后天，先天就是指遗传，后天则是因为对皮肤不正当的护理，导致肌肤敏感。",
                        "敏感性皮肤是一种问题性皮肤，任何肤质中都可能有敏感性肌肤。就如同各种肤质都可能有老化肤质，痘痘肤质等。众所周知，敏感肌肤的病理改变是角质" +
                        "层变薄，皮下毛细血管扩张后淤血后所呈现在面部的红色网状。\n" +
                        "\n" +
                        "而过敏是一种皮炎症状。是外界致敏物质于体内抗体结合的IV变态反应引起的皮炎症状。过敏的皮肤是指已经产生过敏（皮肤炎症）症状的皮肤。两者是不" +
                        "同的，我们必须把两者分开。\n",
                        "\n" +
                        "造成敏感肌肤的根本原因有以下两个方面：\n" +
                        "\n" +
                        "1、因为皮肤细胞受损而使皮肤的免疫力下降，角质层变薄导致皮肤滋润度不够，最终导致肌肤的屏障功能过于薄弱，无法抵御外界刺激。接着皮肤的神经" +
                        "纤维由于经常受到外界刺激，过于亢奋，从而易于产生泛红，发热，瘙痒、刺痛，红疹等不适现象的产生。这一类通常是由于肌肤接触了激素类的东西。" +
                        "\n" +
                        "2、很简单，由于遗传因素造成肌肤及其敏感的敏感肌肤。产生的问题",
                        "敏感肌肤一般会有以下的皮肤问题：\n" +
                        "\n" +
                        "1、容易受外界刺激而出现肌肤泛红，发热，瘙痒、刺痛等；\n" +
                        "\n" +
                        "2、严重会出现红肿和皮疹；3、伴有肤色不匀的烦恼，炎症褪去容易留下印痕或斑点；\n" +
                        "\n" +
                        "4、皮肤薄，角质层不全，容易脱屑。\n" +
                        "\n" +
                        "5、保水能力差，皮肤紧绷干燥；\n" +
                        "\n" +
                        "6、突然出现很多原因不明的痘痘，使用任何的祛痘产品都无效。一般谈到痘痘的成因，通常不外乎是饮食、荷尔蒙不协调、压力或是遗传所造成。然后很" +
                        "多人会选择使用祛痘产品，但从临床病例中发现，一些原因不明、难以根治的痘痘，都是因为没有同时治疗皮肤过敏所导致反复发作。",
                        "要想改善敏感肌肤，我们则需要找到导致敏感的源头，春季，对于先天皮肤较薄的朋友，只要使用比冬季乳霜更清淡，却仍具足够滋润力的护肤霜，就可避" +
                        "免春季敏感现象。然而后天发炎变薄的人就不是这样，漫飞的花粉、某些保养品的成分、稍强的清洁成分与早晚温差变化，都可能是诱发因子。所以此时建" +
                        "议配戴口罩避开花粉与剧烈温差，换用较为温和的洁面品，甚至完全停用。然而“保养品成分”的确认与避免，却是整个过程中最困难的。简单地说：如果" +
                        "您对自己惯用的护肤霜“未必真有把握”，请暂时停用，改用超市购买的食用级不饱和植物油，例如橄榄油等。"],
                    [
                        "很多人饱受敏感肌肤的苦，周围环境一变化，亦或是气温、季节变化，敏感肌肤各种症状就凸显而出，微微一受刺激，皮肤就出现各种各样的问题，想要解" +
                        "决却迟迟找不到方法。那么，敏感肌肤该注意什么呢？",
                        "敏感肌肤的小伙伴要注意清洁不可过度，怎样的清洁才算不可过度呢？\n" +
                        "\n" +
                        "1、不使用清洁力很强的洗面奶，如针对油性肌肤的洗面奶。\n" +
                        "\n" +
                        "2、一天洗脸不超过2次。\n" +
                        "\n" +
                        "3、洗脸的温度不能太高也不能太冷，温温的就好。\n" +
                        "\n" +
                        "4、少使用清洁面膜，每月用1~2次即可。\n" +
                        "\n" +
                        "5、不用面部去角质类产品，待肌肤回复正常再考虑使用。\n" +
                        "\n" +
                        "6、不使用带酒精或用起来滑滑的爽肤水(滑是因为加入了过多的界面活性剂)。",
                        "1、不用精油，如果一定要用，那么就把握两点，一、选择大品牌可靠的高品质精油，二、使用时要减少用量，低浓度最佳。\n" +
                        "\n" +
                        "2、不用果酸、水杨酸、维生素A酸类产品，或改在冬季用。如果一定要用，建议在皮肤科医师的指导下使用，并在使用期间，简化其他配套的保养品，只" +
                        "用成分单纯的保湿乳以减少对皮肤的刺激。\n" +
                        "\n" +
                        "3、如果没有必要，就不要涂太多的高倍数防晒霜，对于皮肤来说，高倍防晒霜就是高浓度的化学性浸渍伤害。平时，可以使用含有低防晒值的粉底，并常" +
                        "用戴太阳镜、打伞等物理防晒的方法。\n" +
                        "\n" +
                        "4、减量使用浓度过高的活性成分，并避免在短期内交错使用不同品牌的高活性产品(如精华)，更不要超龄使用太过营养的产品，以避免营养过程堆积在皮" +
                        "肤上，造成负面影响。\n" +
                        "\n" +
                        "5、选用无香味的，小包装的，保质期短的洁面活性剂、防腐剂、香料；洁面品，要选不起泡型的温和洁面乳。化妆水，要选摇晃一下起泡小，且泡沫很快" +
                        "消失的，因为这说明它含界面活性剂少。要选包装更科学的，能尽量避免细菌侵入的产品，不买广口瓶的产品。\n",
                        "食冷饮伤肺，肺开窍于鼻，肺主皮毛。因此过食冷饮，容易患过敏性鼻炎或得皮肤病，如湿疹、皮肤瘙痒等。夏天过分依赖空调，使人体不能正常出汗，而" +
                        "且冷热反复的转换，会破坏毛孔闭合和张开的能力，使人体自身皮肤的调节功能逐渐丧失，对自然界的感知、适应能力也会下降，湿疹等皮肤过敏问题自然" +
                        "会不请自来。所以，无论你是湿疹肌还是健康肌，都要少吃冷饮，少吹空调。\n",
                        "1、除尘螨：床垫、枕头和被子可以用防螨套包裹，每周以70℃以上的热水清洗寝具外套；将室内湿度控制在50%以下，以控制尘螨和霉菌的生长。\n" +
                        "\n" +
                        "2、避免饲养有毛宠物：例如猫、狗等，因为动物皮屑和排泄物容易引起过敏。\n" +
                        "\n" +
                        "3、做好家庭卫生：保持居家环境清洁，减少蟑螂繁殖。\n" +
                        "\n" +
                        "4、清理卫生死角：霉菌易生长于高温潮湿的环境中，如浴室和地下室。使用除湿机和空气过滤器，并定期更换滤网，可减少霉菌和花粉的暴露机会；空调\n" +
                        "机滤网也需常清洗。\n" +
                        "\n" +
                        "5、防止食物过敏：避免食用会引起过敏症状的食物。\n"
                    ],
                    [
                        "很多人看了标题后就奇怪了，水果也能美容吗？答案是当然的，涨姿势了吧？小编告诉你，水果的美容作用可不小哦，特别是这篇文章中提到的几个水果，" +
                        "长期吃的话，可以让肌肤越来越好。",
                        "养颜水果美容是一种很古老的美容术，也是一种吸取天然植物之精华为皮肤自然吸收营养的美容术。水果和蔬菜中含有大量的营养成份和维生素、微量元素，食" +
                        "用和外敷对增加皮肤弹性和滋润光泽都大有好处。特别是利用果蔬原料中的天然汁液进行祛斑美白护理。",
                        "樱桃—樱桃汁能帮助面部皮肤嫩白去皱清斑，自古以来就是美容果。樱桃汁能帮助面部皮肤嫩白红润、去皱清斑，是不少美白产品的最爱。樱桃不仅富含维" +
                        "生素C，而且含铁极其丰富，是山楂的13倍，苹果的20倍。除了含铁量高之外，它还含有平衡皮质分泌、延缓老化的维生素A，帮助活化细胞、美化肌肤。\n" +
                        "\n" +
                        "石榴—具有很强的抗氧化作用，带皮榨汁效果更加，娇艳欲滴的红石榴已经被证实具有很强的抗氧化作用。它含有一种叫鞣花酸的成分，可以使细胞免于环" +
                        "境中的污染、UV射线的危害，滋养细胞，减缓肌体的衰老。有研究表明，鞣花酸在防辐射方面比红酒和绿茶中含有的多酚更“厉害”。\n" +
                        "\n" +
                        "橄榄—橄榄叶精华有助皮肤细胞对抗外界侵害，橄榄叶精华有助皮肤细胞对抗污染、紫外线与压力引致的氧化；而橄榄果实中则含有另一强效抗氧化成分—" +
                        "—酚化合物，它与油橄榄苦素结合后，能提供双重抗氧化修护。\n" +
                        "\n" +
                        "葡萄—抗老保湿的佳品，它含有大量葡萄多酚，具有抗氧化功能，能阻断游离基因增生，有效延缓衰老；它还含单宁酸，柠檬酸，有强烈的收敛效果及柔软" +
                        "保湿作用。另外，葡萄果肉蕴含维生素B3及丰富矿物质，可深层滋润、抗衰老及促进皮肤细胞更生。\n" +
                        "\n" +
                        "柠檬—可促进肌肤新陈代谢，抑制色素沉淀，柠檬中含有维生素B1、维生素B2、维生素C等多种营养成分。此外，还含有丰富的有机酸、柠檬酸，具有很强" +
                        "的抗氧化作用，对促进肌肤的新陈代谢、延缓衰老及抑制色素沉着等都十分有效\n" +
                        "柚子—含有的一种柠檬酸已被普遍应用于护肤领域，由某研究机构进行的2005项研究证实，柚子的气味能令女性比男性看起来平均年轻6岁。现在，柚子中" +
                        "含有的一种柠檬酸已被普遍应用于护肤领域。这种成分能帮助死皮细胞代谢和排出，从而使皮肤回复光滑、重现光彩。\n" +
                        "\n" +
                        "火龙果—火龙果的营养十分丰富，是一种低热量高纤维的水果，因此深得减肥中人的喜爱，另外，火龙果对防治便秘也很有效果。\n" +
                        "\n" +
                        "枇杷—枇杷富含蛋白质、果酸、维生素、胡萝卜素等。枇杷具有明视的作用，使你的眼睛熠熠生辉，此外，枇杷可以保持肌肤健康。用棉签沾取枇杷汁涂在" +
                        "脸部斑点处，可以淡化斑点。\n"
                    ],
                    [
                        "我们在护肤品上常常可以看到包装上写着无任何刺激添加，你们只知道无任何刺激添加的是安全的护肤品，可你们知道无任何刺激添加是指哪几类添加吗？" +
                        "如果你还不知道，那么请耐心仔细的看完这片文章。",
                        "无添加，是上世纪90年代，由国外化妆品业率先提出的化妆品的概念，所谓“无添加”，是指在生产和销售过程中没有添加对皮肤构成敏感、损害的成分，" +
                        "以避免出现“香污染”“色污染”“油污染”，对消费者身体造成伤害。包括杀菌剂、防腐剂、酸化防止剂、人造香料、人造色素、油脂和界面活性剂等在" +
                        "内的102种成分被界定为“添加成分”。\n" +
                        "\n" +
                        "无添加、有机护肤品≠100%安全，无添加、有机护肤品的保养效果也未必比传统护肤品更有效。因为原料筛选上有苛刻的要求，有机护肤品不能添加多余的" +
                        "成分—比如有些美白、抗老功效性极好但不允许添加的成分就要被摒弃。所以说在选购上，还是依照自己的实际需求出发。\n",
                        "“黑客”一：\n" +
                        "紫外线吸收剂 ： 夏天来临，为了避免紫外线带走水嫩白皙的肌肤，选择防晒护肤品成为女人们的头等大事。然而稍不留神皮肤就会被紫外线吸" +
                        "收剂这个黑客所掌握。 防晒护肤品中通常都含有防晒剂。目前以化学合成的紫外线吸收剂为主，它能对紫外线有吸收作用。但由于紫外线吸收剂本身就是" +
                        "一种光敏物质，使用不当会对皮肤产生刺激，引起光敏性反应等。尤其容易产生使肌肤粗糙、刺激眼部等问题。因此，我国化妆品卫生法规对化妆品组分中" +
                        "限用紫外线吸收剂、化妆品中最大允许使用浓度、标签上必须标印的使用条件和注意事项都做出了规定。\n" +
                        "\n" +
                        "“黑客”二：防腐剂 ：\n" +
                        "为了防止污染，护肤品、化妆品中都含有防腐剂。防腐剂也是一种不安全成分，容易导致皮肤过敏等炎症。目前，市场上只有个别产品不含防腐剂，这样的" +
                        "产品对包装要求很高。皮肤容易过敏的mm购买化妆品时一定要注意是否还有防腐剂。\n" +
                        "\n" +
                        "“黑客”三：酒精 ：\n" +
                        "普通化妆品的成分中，一般都含有酒精，其实它对我们的皮肤是有很大的害处的！ " +
                        "1、酒精具有超强的渗透力，能渗透到细胞体内，使其蛋白质凝固变性从而使细胞脱水，皮肤就会渐渐失去弹性。 \n" +
                        "2、酒精具有高挥发性，在带走皮肤热量的同时也带走了皮肤的水分，使皮肤的天然保湿能力及买免疫力降低，造成皮肤干燥，粗糙，皮脂分泌旺盛，毛孔" +
                        "粗大。皮肤将会更快衰老。 \n" +
                        "3、含有酒精的化妆品涂在皮肤上之后会有光敏反应发生，导致皮肤色素加重，产生难以逆转的斑点。 \n" +
                        "4、由于细胞的适应性，在长期使用含有酒精的化妆品后，皮肤细胞就会对酒精产生依赖，而对不含酒精成分的化妆品产生排斥。 \n" +
                        "5、酒精会麻痹细胞，使细胞难以区分营养物质的优劣，从而会吸收一些对皮肤有害的物质，例如铅，汞等有害物质，让皮肤不再健康。 " +
                        "所以，提醒大家最好不要买含有酒精的化妆品。\n" +
                        "\n" +
                        "“黑客”四：矿物油 \n" +
                        "含有矿物油的护肤品滋润效果很好,但对皮肤负担很大。市场上标以洁颜油名称的产品很多，其中矿物油是目前最多的添加类型，价格也会因纯度而相差" +
                        "很远，值得提醒的是，如果纯度高的，产品的安全性也高 ；如果纯度太低，不但影响清洁效果，甚至会造成毛孔堵塞。  \n" +
                        "\n" +
                        "“黑客”五：激素 \n" +
                        "经常使用带有激素的化妆品，会导致“激素美容综合征”，甚至会出现严重的皮肤反应。 \n" +
                        "有皮肤过敏症状的病人用后，初期症状得到缓解，皮肤细腻了，但一段时间后,过敏症状会重新发作。长期使用含激素的化妆品会导致毛细血管扩张、萎缩，" +
                        "甚至出现多毛、皮炎等症状。同时，激素外用还可能引起人体内激素水平变化，造成内分泌混乱等症状。 \n" +
                        "“速效”成了不少护肤品吸引消费者的杀手锏，然而速效护肤品往往也可能含有激素成分。因此，如果某种护肤品使用不久就迅速见效，一定要警惕。\n" +
                        "\n" +
                        "“黑客”六：对苯二酚 \n" +
                        "美白产品一直相当热门,然而色斑在极短的时间内消失是不切实际的。只有切实做好防晒，并按个人色斑生成的阶段选择适合并安全的美白成分,加上耐心的" +
                        "调理才是正确的途径。若为求快速除斑而使用含危险副作用成分的化妆品，绝对会让你懊悔一生。如对苯二酚使用不当会引起细胞毒性反应，且因它极畏光" +
                        "，所以需搭配高防晒系数产品，会对皮肤造成负担。对苯二酚本身是一种有毒物质，积聚下来会留下可怕的疤痕。它还可能对人体内部器官带来致命的伤害" +
                        "，尤其是肾和肝。因此，在一些欧洲国家，仅在某些医药用产品中允许含2％的对苯二酚。\n" +
                        "\n" +
                        "“黑客”七：汞、铅、砷等重金属类 \n" +
                        "化妆品引起中毒的真正元凶是汞、铅、砷等重金属类。其中最重要的原因是重金属的超标。" +
                        "汞超标对人体的危害：1、会导致色素脱失；2、皮肤刺激；3、造成的皮肤损伤；4、造成体内的蓄积，从而引起肌体各种不良反应，最主要的就是中枢神经" +
                        "系统，如失眠乏力，记忆力不好，特别是情绪的变化是非常明显的。 \n" +
                        "铅对人体的危害除了对皮肤有影响外的，还会造成神经衰弱的表现，另外吸收以后，消化系统也会有一些症状，比如说便秘，食欲不不振，厉害的话，肝功" +
                        "能可能有损害。 \n" +
                        "砷的毒性也是很大的，用后如果吸收中毒的话，砷也会引起有神经系统的改变，同时还有一些周围神经的改变，比如说手麻，脚麻四肢无力，疼痛等症状，" +
                        "皮肤上可能还有黑变，色素的沉着。\n" +
                        "“黑客”八：香料 \n" +
                        "很多人都喜欢化妆品芳香的味道，其实香料也是伤害皮肤的元凶，可能造成光敏感、接触性皮炎等健康问题。 " +
                        "香料中含的“铬”和“钕”属于禁用元素，如果皮肤抵抗力较弱的患者使用，皮肤就会出现刺激感和灼烧感，或者皮肤敏感、发红，严重的就会导致皮炎。" +
                        "铬为皮肤变态反应原，可引起过敏性皮炎或湿疹，病程长，久而不愈。 " +
                        "钕对眼睛和黏膜有很强的刺激性，对皮肤有中度刺激性，吸入还可导致肺栓塞和肝损害。 \n" +
                        "\n" +
                        "“黑客”九：色素 \n" +
                        "与香料一样，含有“铬”和“钕”等禁用元素。 \n" +
                        "\n" +
                        "“黑客”十：双氧水 \n" +
                        "美容院通常都会使用双氧水起到美白的作用。但是如果容度高，就会对皮肤有伤害，因为高浓度的双氧水会有很强的氧化性。双氧水低学名叫“过氧化氢”" +
                        "，由于可以释放出一个原子氧，所以有杀菌作用。特别是深部伤口，可以杀灭一些厌氧菌如破伤风杆菌。；一般使用5－10％的双氧水用于皮肤的消毒。超" +
                        "过这一浓度，如30％的双氧水会对皮肤有腐蚀作用。"
                    ]
                ]
            },
        },
    }
    if ($(window).width()<=768){
        window.parent.$(".navbar-brand:first").css("display","block");
    }
    var main_img = document.getElementById("detail_main").getElementsByTagName("img");
    main_img[0].setAttribute("src", knowledge.path + knowledge.detail.main.path + knowledge.detail.main.img[i]);
    var main_h3 = document.getElementById("detail_main").getElementsByTagName("h3");
    for (var j = 0; j < main_h3.length; j++) {
        main_h3[j].style.display = "block";
        if (knowledge.detail.main.h3[i][j] !== undefined) {
            main_h3[j].innerText = knowledge.detail.main.h3[i][j];
        } else {
            main_h3[j].style.display = "none"
        }
    }
    var main_h6 = document.getElementById("detail_main").getElementsByTagName("h6");
    main_h6[0].innerText = knowledge.detail.main.h6[i];
    var main_p = document.getElementById("detail_main").getElementsByTagName("p");
    for (var j = 0; j < main_p.length; j++) {
        main_p[j].style.display = "block";
        if (knowledge.detail.main.p[i][j] !== undefined) {
            main_p[j].innerText = knowledge.detail.main.p[i][j];
        } else {
            main_p[j].style.display = "none"
        }
    }
}