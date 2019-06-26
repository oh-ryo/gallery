// 詳細ギャラリー用コード
var imgnum = [];

for(let i = 0, len = menulist.length; i < len; i++) {
    var galleryimg = [];
    for(let i2 = 0, len = 100; i2 < len; i2++) {
        imgnum.push(i2 + 1);
        galleryimg.push('img/' + menulist[i] + '/img' + imgnum[i2] + '.jpg');
    }
   gallerylist[i] = galleryimg;
}

