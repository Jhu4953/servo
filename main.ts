input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 360)
    pins.servoSetPulse(AnalogPin.P0, 1500)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoSetPulse(AnalogPin.P0, 1500)
})
