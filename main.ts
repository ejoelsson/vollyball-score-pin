function Rita_1 (Score_1: number) {
    range = strip.range(0, Score_1 - 0)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range.show()
}
input.onButtonPressed(Button.A, function () {
    AddPoint_A()
})
function Rita_2 (Score_2: number) {
    range2 = strip.range(LAG2START - 0, Score_2)
    range2.showColor(neopixel.colors(NeoPixelColors.Green))
    range2.show()
}
function NollaScore () {
    score_A = 0
    score_B = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
}
input.onButtonPressed(Button.AB, function () {
    NollaScore()
})
input.onButtonPressed(Button.B, function () {
    AddPoint_B()
})
function AddPoint_A () {
    score_A = score_A + 1
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    Rita_1(score_A)
    Rita_2(score_B)
}
function AddPoint_B () {
    score_B = score_B + 1
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    Rita_1(score_A)
    Rita_2(score_B)
}
let score_B = 0
let score_A = 0
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let LAG2START = 0
let ANTAL_LED = 20
LAG2START = ANTAL_LED / 2
strip = neopixel.create(DigitalPin.P0, ANTAL_LED, NeoPixelMode.RGB)
NollaScore()
basic.forever(function () {
	
})
