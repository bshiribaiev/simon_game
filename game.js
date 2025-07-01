const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userPattern = []
let level = 0

$('.btn').click(handleClick)

function nextSequence() {
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
    setTimeout(function () {$('#' + currentColor).remove('pressed'), 100})
}

function handleClick() {
    userColor = $(this).attr('id')
    userPattern.push(userColor)
    playSound(userColor)
    animatePress(userColor)
    checkAnswer()
}

function handleKey() {
    $('h1').text("Level " + level)
    nextSequence()
}
$(document).one("keydown", handleKey)

function checkAnswer(color) {
    if (color === 

}