import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player)

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(function(currentTime) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds))
}, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});