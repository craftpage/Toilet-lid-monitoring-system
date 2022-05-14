basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) >= 500) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(3000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showLeds(`
            . . # # #
            . # . . .
            . # . . .
            . # . . .
            . . # # #
            `)
    }
})
