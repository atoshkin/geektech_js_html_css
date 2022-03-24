// class Arrow {
//     minut = 60000
//     constructor(root) {
//         // let root = document.getElementById('root')
//         // console.log(root)
//         let el = document.createElement('div')
//         // console.log(el)
//         el.classList.add('arrow')
//         root.append(el)
//         el.style.transform = 'rotate(3.15rad)'
//         this.el = el;
//         this.root = root;
//     }
//
//     start() {
//         // setTimeout()
//         this.angle = parseFloat(this.el.style.transform.substr(7));
//         this.interval = setInterval(this.update, 45);
//     }
//
//     update = () => {
//         this.angle += 0.05;
//
//         // normalize
//         if (this.angle >= Math.PI * 2)
//             this.angle -= Math.PI * 2
//
//         this.updateAngle()
//     }
//
//     updateAngle() {
//         this.el.style.transform = `rotate(${this.angle}rad)`
//     }
//
//     stop() {
//         clearInterval(this.interval)
//         this.interval = null;
//     }
// }
//
// class GreenArrow extends Arrow {
//     constructor(...args) {
//         super(...args);
//
//         this.el.classList.add('arrow-green')
//         this.el.style.transform = 'rotate(3.15rad)'
//     }
//
//     start() {
//         this.angle = parseFloat(this.el.style.transform.substr(7));
//         this.interval = setInterval(()=>{
//             this.el.style.transform = `rotate(${this.sec}deg)`
//             this.sec+=6;
//         },1000);
//         // this.interval = setInterval(this.update, 550);
//     }
//
//     // update = e => {
//     //     // console.log('e', e)
//     //     // console.log('x,y', e.offsetX, e.offsetY)
//     //
//     //     let x = e.x - this.root.offsetLeft - 100
//     //     let y = e.y - this.root.offsetTop - 100
//     //
//     //     this.angle = Math.atan2(y, x) - Math.PI / 2;
//     //
//     //     this.updateAngle()
//     // }
//
//     // move = () => {
//     //     console.log(3)
//     //     this.angle += 0.05;
//     //     console.log(this.angle)
//     //     this.el.style.transform = `rotate(${this.angle}rad)`
//     // }
// }
//
// class Yellow extends Arrow {
//     sec = 0
//     constructor(...props) {
//         super(...props);
//         this.el.classList.add('arrow-yellow')
//         // this.el.style.transform = 'rotate(3.15rad)'
//     }
//     start() {
//         // this.angle = parseFloat(this.el.style.transform.substr(7));
//         this.interval = setInterval(()=>{
//             this.update()
//             this.el.style.transform = `rotate(${this.sec}deg)`
//             this.sec+=6;
//         },1000);
//         // this.interval = setInterval(this.update, 1);
//     }
//
// }
//
//
// class Face {
//     numbers = [];
//     constructor(root, radius) {
//         for (let i = 1; i <= 12; i++) {
//             let angle = - Math.PI * 2 / 12 * i + Math.PI;
//
//             let x = Math.sin(angle) * radius + 100
//             let y = Math.cos(angle) * radius + 100
//
//             let number = new ClockNumber(i, x, y);
//
//             root.append(number.el)
//         }
//     }
// }
//
// class ClockNumber {
//     constructor(i, x, y) {
//         let el = document.createElement('span');
//         el.className = 'clock-number';
//         el.innerText = i;
//         el.style.left = `${x}px`;
//         el.style.top = `${y}px`;
//         console.log(el)//цифры
//         this.el = el;
//     }
// }