// على القائمة عند التمرير أكثر من 200 بكسل noTransparrent تطبيق صنف جديد 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});

// إضافة فترة زمنية مقدارها 800 ميلي ثانية عند التنقل بين عناصر القائمة
// تم إنقاص مقدار 90 بكسل من مكان التنقل حتى يتناسب مع مكان كل قسم$(document).ready(function(){
$(document).ready(function() {
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function() {});

    });


});

$(document).ready(function() {
    $('a.scroll').on('click', function(event) {
        var hash = this.hash

        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 },
            800,
            function() {}
        )
    });

    //if (checkVisible($('#statistics'))) {
    $('.circle')
        .circleProgress({
            startAngle: -Math.PI / 2,
            fill: '#0575e6'
        })
        .on('circle-animation-progress', function(event, progress, stepValue) {
            $(this)
                .find('span')
                .html(Math.round(stepValue * 100) + '%')
        })
        // }

    //  validate تطبيق التابع
    $(function() {
        $("#commentForm").validate();
    });

});

//copy link
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("contact me on watsapp  : " + copyText.value);
}



function checkVisible(elm, eval) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}