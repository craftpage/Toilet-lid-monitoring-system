basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) >= 500) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        basic.showLeds(`
            . . # # #
            . # . . .
            . # . . .
            . # . . .
            . . # # #
            `)
    }
})
