const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 시간을 업데이트하는 함수
function updateTime() {
    const now = new Date();
    const day = days[now.getDay()];
    const hour = ('0' + now.getHours()).slice(-2);
    const minute = ('0' + now.getMinutes()).slice(-2);
    const second = now.getSeconds();
    const colon = (second % 2) ? '<span style="opacity: 0;">:</span>' : '<span style="opacity: 1;">:</span>';

    // 요일과 시간을 업데이트
    document.querySelector('.time').innerHTML = `Korea, ${day} ${hour}${colon}${minute}`;
}

// 1초마다 시간을 업데이트
setInterval(updateTime, 1000);