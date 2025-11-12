input.onButtonPressed(Button.A, function () {
    AddPoint_A()
})
function NollaScore () {
    score_A = 0
    score_B = 0
}
input.onButtonPressed(Button.AB, function () {
    NollaScore()
})
input.onButtonPressed(Button.B, function () {
    AddPoint_B()
})
function AddPoint_A () {
    score_A = score_A + 1
}
function AddPoint_B () {
    score_B = score_B + 1
}
let score_B = 0
let score_A = 0
let ANTAL_LED = 20
let LAG2START = ANTAL_LED / 2
let strip = neopixel.create(DigitalPin.P0, 50, NeoPixelMode.RGB)
NollaScore()
basic.forever(function () {
	
})
