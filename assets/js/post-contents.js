const title = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');

if (title.length > 0) { // 文章存在标题
    const blMenu = document.querySelector('#bottom-right-menu');
    //主页不显示右下角菜单
    if (blMenu) blMenu.classList.remove('hide')
    const contents = document.querySelector('#post-contents');
    const li = document.createElement('li'),
        a = document.createElement('a');

    a.className = 'waves-effect';

    title.forEach(node => {
        // 每次 cloneNode 取代 createElement
        // 因为克隆一个元素快于创建一个元素
        const _li = li.cloneNode(false),
            _a = a.cloneNode(false);

        node.id = node.innerText;

        console.log(node.innerText)

        _a.innerText = node.innerText;
        // 为标题设置跳转链接
        _a.href = '#' + node.id;
        _li.appendChild(_a);
        contents.appendChild(_li);

        $(node).addClass('section')
        $(node).addClass('scrollspy')
    })
} else {

}