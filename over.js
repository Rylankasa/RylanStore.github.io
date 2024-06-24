var img = document.querySelectorAll(".thum img")

for (var i = 0; i < img.length; i++) {
    img[i].onmouseover = function() {
        var imgMain = document.querySelector("#imgg");
        imgMain.src = this.src;
    }
}