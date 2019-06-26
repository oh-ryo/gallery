var menulist = [
    "location1",
    "location2",
    "location3",
    "location4"
];

var gallerylist = [];


for(let i = 0, len = menulist.length; i < len; i++){
    $('#index').on('click', '.' + menulist[i], function (){
        var title = menulist[i] + '\tgallery';
        $('#ttl').empty().append(title);
        $('#content').empty().addClass("img");
        for (let i2 = 0, len = gallerylist[i].length; i2 < len; i2++) {
            $.ajax({
                url: gallerylist[i][i2],
                type:'HEAD',
                 error: function()
                {
                    gallerylist[i].pop();
                },
                success: function()
                {
                    $('<img>', {
                        src: gallerylist[i][i2],
                        "class": 'img' + (i2+1)
                    }).appendTo( "#content" ).hide().fadeIn(i2 * 400);
                }
            });
        }
    });
}
