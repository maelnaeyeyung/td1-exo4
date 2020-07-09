input.onButtonPressed(Button.A, function () {
    if (y == 0) {
        if (x > 0) {
            led.unplot(x, y)
            x += -1
            y += 0
            led.plot(x, y)
        }
    } else if (x > 0) {
        led.unplot(x, y)
        x += -1
        y += 0
        led.plot(x, y)
    } else {
        led.unplot(x, y)
        x += 4
        y += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (y == 4) {
        if (x < 4) {
            led.unplot(x, y)
            x += 1
            y += 0
            led.plot(x, y)
        }
    } else if (x < 4) {
        led.unplot(x, y)
        x += 1
        y += 0
        led.plot(x, y)
    } else {
        led.unplot(x, y)
        x += -4
        y += 1
        led.plot(x, y)
    }
})
let y = 0
let x = 0
x = 2
y = 4
led.plot(x, y)
