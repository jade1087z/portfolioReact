$(document).ready(function() {
    var elements = [
        {el: $(".project.p1.work"), top: 0, height: 0},
        {el: $(".project.p2.work"), top: 0, height: 0},
    ]; // 대상 요소들

    elements.forEach(function(element) {
        element.el.css('background-color', 'rgb(255,255,255)');
        element.top = element.el.offset().top + 100// 대상 요소의 상단 위치에서 100px 아래
        element.height = element.el.outerHeight() * 2; // 대상 요소의 높이를 두 배로 설정
    });

    $(window).on("scroll", function() {
        var scrollPosition = $(window).scrollTop(); // 스크롤 위치

        elements.forEach(function(element) {
            var relativeScroll = scrollPosition - element.top; // 대상 요소에 대한 상대적인 스크롤 위치

            if (relativeScroll >= 0 && relativeScroll <= element.height) {
                // 대상 요소가 화면에 나타날 때부터 사라질 때까지의 스크롤 비율
                var scrollPercentage = relativeScroll / (element.height - 100);

                var red = Math.max(217, Math.floor((1 - scrollPercentage) * 255));
                var green = Math.max(217, Math.floor((1 - scrollPercentage) * 255));
                var blue = Math.max(217, Math.floor((1 - scrollPercentage) * 255));

                var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

                element.el.css('background-color', color); // 배경색 변경
            } 
            else if (relativeScroll < 0) {
                element.el.css('background-color', 'rgb(255,255,255)'); // 스크롤이 대상 요소의 상단 100px 이하일 경우 배경색을 흰색으로 설정
            }
            else {
                element.el.css('background-color', 'rgb(255,255,255)'); // 스크롤이 대상 요소의 하단 이상일 경우 배경색을 흰색으로 설정
            }
        });
    });
});