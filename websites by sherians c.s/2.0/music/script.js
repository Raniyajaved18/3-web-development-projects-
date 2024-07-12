var arr = [
    {songname: "pehle bhi main 1", url:"./pehle-bhi-main(PaglaSongs).mp3", img:"./animal_movie.webp"},
    {songname: "pehle bhi main 2", url:"./pehle-bhi-main(PaglaSongs).mp3", img:"./animal_movie.webp"},
    {songname: "pehle bhi main 3", url:"./pehle-bhi-main(PaglaSongs).mp3", img:"./animal_movie.webp"},
    {songname: "pehle bhi main 4", url:"./pehle-bhi-main(PaglaSongs).mp3", img:"./animal_movie.webp"}
]
var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var backward = document.querySelector("#backward")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")


var audio = new Audio()

var selectedSong = 0

function mainFunction()
{
    var clutter = ""

arr.forEach
    (
        function (elem,idx)
        {
            clutter = clutter + ` <div class="song-card" id=${idx}>
            <div class="part1">
                <img src=${elem.img} alt="">
                <h2>${elem.songname}</h2>
            </div>
            <h5>3:45</h5>
        </div>`
        }    
    )
    
    allsongs.innerHTML = clutter
    audio.src = arr[selectedSong].url  
    poster.style.backgroundImage= `url(${arr[selectedSong].img})`
   
}

mainFunction()
    
allsongs.addEventListener("click", function (dets)
{
    selectedSong = dets.target.id
    
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"><i/>`
    flag = 1
    audio.play()
})
var flag = 0
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"><i/>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else {
        play.innerHTML = `<i class="ri-play-mini-fill"><i/>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    } else {
        forward.style.opacity = 0.4
    }
})

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    } else {
        backward.style.opacity = 0.4
    }
})