const contents_main = () => {
    const contentsInfo = document.querySelector("#all-contents-info");
    if (!contentsInfo) return;
    const title = contentsInfo.querySelectorAll("h1, h2, h3, h4, h5, h6");

    //default 14px font
    const hFont = [14, 14, 12, 12, 10, 10];
    //default padding left 16px
    const hLeft = [16, 20, 24, 24, 24, 24];
    //map
    const mapTitle = {
        "H1": 0,
        "H2": 1,
        "H3": 2,
        "H4": 3,
        "H5": 4,
        "H6": 5,
    };


    if (title.length > 0) { // 文章存在标题
        const blMenu = document.querySelector(".bottom-right-menu");
        //主页不显示右下角菜单
        if (blMenu) blMenu.classList.remove("hide");
        const contents = document.querySelector("#post-contents");
        const li = document.createElement("li"),
            a = document.createElement("a");

        a.className = "waves-effect";

        const priorNode = title[0].nodeName
        let priorNodeTitle = priorNode.toUpperCase();
        let priorIndex = mapTitle[priorNodeTitle]

        title.forEach(node => {
            // 每次 cloneNode 取代 createElement
            // 因为克隆一个元素快于创建一个元素
            const _li = li.cloneNode(false),
                _a = a.cloneNode(false);

            node.id = node.innerText;

            console.log(node.innerText);

            let nodeName = node.nodeName;
            let text = node.innerText;
            if (text.length > 8) {
                // text = text.substr(0, 8) + "...";
            }
            _a.innerText = text;
            // 为标题设置跳转链接
            _a.href = "#" + node.id;
            //css
            let hIndex = mapTitle[nodeName.toUpperCase()];
            $(_a).css({"font-size": hFont[hIndex] + "px", "padding-left": hLeft[hIndex] + "px"});

            _li.appendChild(_a);
            contents.appendChild(_li);

            $(node).addClass("section");
            $(node).addClass("scrollspy");
        });
    } else {

    }
};

contents_main();

