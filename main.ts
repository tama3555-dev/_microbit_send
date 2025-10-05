input.onButtonPressed(Button.A, function () {
    basic.showNumber(X)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Y)
})
let Y = 0
let X = 0
radio.setGroup(1)
X = 0
Y = 0
let X送信 = 0
let Y送信 = 0
let X表示 = 2
let Y表示 = 2
let 表示 = game.createSprite(2, 2)
let SW1 = 0
let SW2 = 0
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    Y = pins.analogReadPin(AnalogReadWritePin.P1)
    if (X >= 1000) {
        X = 999
    }
    if (Y >= 1000) {
        Y = 999
    }
    X送信 = X / 100
    Y送信 = (1000 - Y) / 100
    X表示 = X送信 / 2
    Y表示 = Y送信 / 2
    表示.set(LedSpriteProperty.X, X表示)
    表示.set(LedSpriteProperty.Y, Y表示)
    radio.sendValue("X", X送信)
    radio.sendValue("Y", Y送信)
    SW1 = pins.digitalReadPin(DigitalPin.P2)
    SW2 = pins.digitalReadPin(DigitalPin.P8)
    radio.sendValue("SW1", SW1)
    radio.sendValue("SW2", SW2)
    basic.pause(100)
})
