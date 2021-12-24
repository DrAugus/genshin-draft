const postContent = document.querySelector("#all-contents-info");
const allImg = postContent.querySelectorAll("img");
const len = allImg.length;

// 格式化显示所有文章图片
for (let i = 0; i < len; i++) {
    allImg[i].classList.add("materialboxed");
    allImg[i].classList.add("z-depth-4");
    allImg[i].classList.add("responsive-img");
}