import pB from 'progressbar.js'
export default class {
    constructor({el,text}) {
        this.config = {
            strokeWidth: 12,
            trailColor: '#273147',
            easing: 'easeInOut',
            duration: 1,
            color: '#fcab0c',
            trailWidth: 12,
            svgStyle: null,
            step: (state, bar) => {
                bar.setText(`${text}:${Math.round(bar.value() * 100)}`);
            }
        }
        this.el = el
    }
    init() {
        this.progress = new pB.SemiCircle(this.el, this.config)
    }
    animate(v) {
        this.progress.animate(v)
    }
}