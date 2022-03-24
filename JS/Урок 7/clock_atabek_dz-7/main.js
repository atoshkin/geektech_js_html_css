function main() {
    let root = document.querySelector('#root')

    let arrow = new Arrow(root)

    root.addEventListener('click', () => {
        if (!arrow.interval) {
            arrow.start()
            greenArrow.start()
            yellowArrow.start()
        } else {
            arrow.stop()
            greenArrow.stop()
            yellowArrow.stop()
        }
    })

    let greenArrow = new GreenArrow(root);
    let yellowArrow = new Yellow(root)


    let face = new Face(root, 80);

    ///

    // let root2 = document.querySelector('#root2')
    // let root3 = document.querySelector('#root3')
    // let el2 = document.querySelector('#el2')
    //
    // el2.addEventListener('click', () => {
    //     root3.prepend(el2)
    // })
}

function sms() {
    console.log("salam")
}

// setInterval(sms,)

main();