// 詳細ギャラリー用コード
let imgnum = [];

for(let i = 0, len = menulist.length; i < len; i++) {
    let galleryimg = [];
    for(let i2 = 0, len = 100; i2 < len; i2++) {
        imgnum.push(i2 + 1);
        galleryimg.push('img/' + menulist[i] + '/img' + imgnum[i2] + '.jpg');
    }
   gallerylist[i] = galleryimg;
}

