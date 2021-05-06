<template>
    <div id="app">
        <header>
            <div class="inner">
                <router-link :to="{ name: 'Home' }" exact class="btn"
                    >Home</router-link
                >
                <router-link :to="{ name: 'Recorder' }" exact class="btn"
                    >Recorder</router-link
                >
            </div>
        </header>
        <router-view />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { on, emitters } from './modules/io'
export default {
    computed: {
        ...mapGetters({
            recordActive: 'recorder/active'
        })
    },
    mounted() {
        on.connected(() => {
            emitters.degCoord()
        })
        on.degUpd(({ x, y, z, claw }) => {
            this.$store.dispatch('coordinates/update', { x, y, z, claw })
            if(this.recordActive) {
                this.$store.dispatch('recorder/addPosition', { x, y, z, claw })
            }
        })
    },
}
</script>

<style lang="scss" scoped>
header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 51px;
    padding: 0 30px;

    .inner {
        height: 100%;
        display: flex;

        a {
            flex: 1;
            line-height: 51px;
            padding: 0 20px;
            color: white;
            display: block;
            text-decoration: none;

            &.router-link-active {
                background: #242c40;
            }
        }
    }
}
</style>