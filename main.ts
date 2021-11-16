input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P14, 180)
        basic.pause(750)
        pins.servoWritePin(AnalogPin.P14, 0)
        basic.pause(750)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(750)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(750)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
