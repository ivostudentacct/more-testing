basic.forever(function () {
    for (let i=0; i<10; i++) {
        basic.showIcon(IconNames.Heart + i)
        basic.pause(500 - i*50)
    }
})
