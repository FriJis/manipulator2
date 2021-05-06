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
    </div>
</template>

<script>
import touch from '../modules/touch'
import { io, on, emitters } from '../modules/io'
import progress from '../modules/progress'
import { percent } from '../modules/helpers'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            progZ: null,
            progX: null,
            progY: null,
        }
    },
    mounted() {
        this.init()
        this.fillProgress()
    },
    computed: {
        ...mapGetters({
            coordinates: 'coordinates/coords',
        }),
    },
    methods: {
        init() {
            new touch(this.$refs.touchbar).onscreen = (e) => {
                emitters.touchbar(e)
            }

            new touch(this.$refs.wheel).onscreen = (e) => {
                emitters.wheel(e)
            }

            new touch(this.$refs.claw).onscreen = (e) => {
                emitters.claw(e)
            }
            this.progX = new progress({ el: this.$refs.x, text: 'X' })
            this.progX.init()
            this.progY = new progress({ el: this.$refs.y, text: 'Y' })
            this.progY.init()
            this.progZ = new progress({ el: this.$refs.z, text: 'Z' })
            this.progZ.init()
            on.degUpd(() => {
                this.fillProgress()
            })
        },
        fillProgress() {
            const {
                progZ,
                progX,
                progY,
                coordinates: { x, y, z },
            } = this
            progX.animate(percent(x, 180) / 100)
            progZ.animate(percent(z, 180) / 100)
            progY.animate(percent(y, 180) / 100)
        },
    },
}
</script>
