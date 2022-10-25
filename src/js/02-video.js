import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const curTimeKey = "videoplayer-current-time";

player.on('timeupdate', function({seconds}) {
    localStorage.setItem(curTimeKey, seconds);
});

function initCurTime() {
    let secondsStr = localStorage.getItem(curTimeKey);
    let seconds = Number(secondsStr);

    player.setCurrentTime(seconds).then();
}

initCurTime();