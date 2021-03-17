<template>
    <div class="container">
        <div class="status--bars">
            <div class="status--bar" ref="z"></div>
            <div class="status--bar" ref="x"></div>
            <div class="status--bar" ref="y"></div>
        </div>
        <div class="touchbar" ref="touchbar"></div>
        <div class="wheel manag" ref="wheel">
            <i class="fas fa-arrows-alt-v"></i>
        </div>
        <div class="claw manag" ref="claw">
            <i class="fas fa-arrows-alt-h"></i>
        </div>
        <div @click="play()">sdhsiufgydio</div>
    </div>
</template>

<script>
import touch from '../modules/touch'
import io from '../modules/io'
import progress from '../modules/progress'
import { percent } from '../modules/helpers'
export default {
    mounted() {
        this.init()
        io.on('connected', () => {
            io.emit('getCoords')
        })
    },
    methods: {
        init() {
            new touch(this.$refs.touchbar).onscreen = (e) => {
                io.emit('touchbar', e)
            }

            new touch(this.$refs.wheel).onscreen = (e) => {
                io.emit('wheel', e)
            }

            new touch(this.$refs.claw).onscreen = (e) => {
                io.emit('claw', e)
            }
            const progX = new progress({ el: this.$refs.x, text: 'X' })
            progX.init()
            const progY = new progress({ el: this.$refs.y, text: 'Y' })
            progY.init()
            const progZ = new progress({ el: this.$refs.z, text: 'Z' })
            progZ.init()

            io.on('degrees/update', ({ x, y, z, claw }) => {
                // console.log(x, y, z, claw);
                progX.animate(percent(x, 180) / 100)
                progZ.animate(percent(z, 180) / 100)
                progY.animate(percent(y, 180) / 100)
            })
        },
        play() {
            io.emit('recorder/play')
        },
    },
}
</script>
