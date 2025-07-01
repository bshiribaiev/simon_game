const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userPattern = []
let level = 0
let start = false

$('.btn').click(handleClick)

function nextSequence() {
    userPattern = [];
    level++
    $('h1').text("Level " + level)
    let randomNumber = Math.floor(Math.random() * 4)
    let randomColor = buttonColors[randomNumber]
    gamePattern.push(randomColor)
    $('#' + randomColor).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomColor)
}

function playSound(color) {
    let audio = new Audio('./sounds/' + color + '.mp3')
    audio.play()
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed')
    setTimeout(function () {$('#' + currentColor).removeClass('pressed')}, 100)
}

function handleClick() {
    if (!start) 
        return
    let userColor = $(this).attr('id')
    userPattern.push(userColor)
    playSound(userColor)
    animatePress(userColor)
    checkAnswer(userPattern.length - 1) 
}

function handleKey() {
    if(!start) {
        start = true
        $('h1').text("Level " + level)
        nextSequence()
    }

}
$(document).keydown(handleKey)

function checkAnswer(idx) {
    if (userPattern[idx] === gamePattern[idx]) {
        if (userPattern.length === gamePattern.length)
            setTimeout(nextSequence, 1000)
    }
    else {
        playSound('wrong')
        $('body').addClass('game-over')
        $('h1').text("Game Over, Press Any Key to Restart")
        setTimeout(function() {$('body').removeClass('game-over')}, 100)
        startOver()
    }
}

function startOver() {
    level = 0
    gamePattern = []
    start = false
}