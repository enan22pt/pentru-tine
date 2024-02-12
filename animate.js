document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    let size = Math.random() * 50;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform ='rotate('+transformValue + 'deg)';
    body.appendChild(heart);
    setTimeout(function(){
        heart.remove();},1000)
})

document.addEventListener('DOMContentLoaded', function() {
    const lyricsData = [
        { time: 0, text: "" },
        { time: 24, text: "To all the days we were together" },
        { time: 30, text: "To all the time we were apart" },
        { time: 37, text: "Of each other's lives" },
        { time: 44, text: "Heart to heart" },
        { time: 50, text: "And so I had a late arrival" },
        { time: 56, text: "So we never saw the start" },
        { time: 63, text: "Of each other's lives" },
        { time: 69, text: "Heart to heart" },
        { time: 101, text:"And though it seems so quick and easy" },
        { time: 108, text:"Sentimentally assumed" },
        { time: 114, text:"Walking parallels" },
        { time: 120, text:"Heart to heart" },
        { time: 126, text:"To all the days we were together" },
        { time: 133, text:"To all the time we played a part" },
        { time: 140, text:"In each other's lives" },
        { time: 145, text:"Heart to heart" },
        { time: 198, text:""}
    ];

    const lyricsElement = document.getElementById('lyrics');
    const audioElement = document.getElementById('lovesong');

    function displayLyrics(currentTime) {
        for (let i = 0; i < lyricsData.length; i++) {
            if (lyricsData[i].time <= currentTime && currentTime < (lyricsData[i + 1] ? lyricsData[i + 1].time : Infinity)) {
                lyricsElement.textContent = lyricsData[i].text;
                break;
            }
        }
    }

    audioElement.addEventListener('timeupdate', function() {
        displayLyrics(audioElement.currentTime);
    });
    audioElement.addEventListener('ended', function() {
        // Song is over, display additional text with link
        const additionalText = document.createElement('p');
        additionalText.id = 'additionalText';
        const link = document.createElement('a');
        additionalText.textContent = 'Because your patience is a gift to me, I have another surprise for you. ';
        link.textContent = 'See the surprise';
        link.href = 'flowers.html';
        additionalText.appendChild(link);
        document.body.appendChild(additionalText);
    });
    
    // Event listener for the play button
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            playButton.textContent = 'pause';
        } else {
            audioElement.pause();
            playButton.textContent = 'play =)';
        }
    });
});

document.addEventListener('touchmove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let touch = e.touches[0];
    let x = touch.clientX;
    let y = touch.clientY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';
    let size = Math.random() * 50;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform ='rotate('+transformValue + 'deg)';
    body.appendChild(heart);
    setTimeout(function(){
        heart.remove();},1000);
});

const playButton = document.getElementById('playButton');

// Add event listeners for touchstart and touchend
playButton.addEventListener('touchstart', function() {
    playButton.classList.add('hovered');
});

playButton.addEventListener('touchend', function() {
    playButton.classList.remove('hovered');
});