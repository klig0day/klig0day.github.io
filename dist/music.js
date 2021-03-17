const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'music.163.com/outchain/player?type=2&id=760058&auto=1&height=66',
            cover: 'cover1.jpg',
        },
    ]
});
