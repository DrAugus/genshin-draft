const postContent = document.querySelector('#post-content');
const allImg = postContent.querySelectorAll('img');
const len = allImg.length;

// 格式化显示所有文章图片
for (let i = 0; i < len; i++) {
    allImg[i].classList.add('materialboxed');
    allImg[i].classList.add('z-depth-4');
    allImg[i].classList.add('responsive-img')
}

// 初始化侧栏目录插件
document.addEventListener('DOMContentLoaded', function () {
    const elemCategory = document.querySelector('#category');
    M.Sidenav.init(elemCategory, {
        'edge': 'right'
    });
});

// 选中文章内容并复制
document.addEventListener('keyup', e => {
    if (e.key === 'A' && e.ctrlKey && e.shiftKey) {
        getSelection().selectAllChildren(postContent);
        document.execCommand('copy');
    }
})