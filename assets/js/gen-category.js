/**
 * 文章页面生成侧栏目录
 * Copyright (C) 2020 knightyun. <https://github.com/knightyun/knightyun.github.io/assets/js/gen-category.js>
 */
const categories = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');

if (categories.length > 0) { // 文章存在标题
    const category = document.querySelector('#category'),
        categoryBtn = document.querySelector('.category-btn'),
        blMenu = document.querySelector('#bottom-right-menu');
    const li = document.createElement('li'),
        a = document.createElement('a');

    a.className = 'waves-effect';
    // 存在目录则显示目录按钮和侧栏
    category.classList.remove('hide');
    categoryBtn.classList.remove('hide');
    blMenu.classList.remove('hide')

    categories.forEach(node => {
        // 每次 cloneNode 取代 createElement
        // 因为克隆一个元素快于创建一个元素
        const _li = li.cloneNode(false),
            _a = a.cloneNode(false);

        _a.innerText = node.innerText;
        // 为标题设置跳转链接
        _a.href = '#' + node.id;
        _li.appendChild(_a);
        // 为不同级别标题应用不同的缩进
        _li.style.paddingLeft = node.nodeName.slice(-1) * 16 + 'px';
        category.appendChild(_li);
    })
}