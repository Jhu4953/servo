def on_button_pressed_a():
    pins.servo_write_pin(AnalogPin.P0, 0)
    pins.servo_set_pulse(AnalogPin.P0, 1500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.servo_write_pin(AnalogPin.P0, 180)
    pins.servo_set_pulse(AnalogPin.P0, 1500)
input.on_button_pressed(Button.B, on_button_pressed_b)
