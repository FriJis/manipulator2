<template>
    <div class="container record">
        <div class="record__item">
            <div class="record__btns">
                <div
                    class="record__btn record__btn-red"
                    :class="{ active }"
                    @click="$store.dispatch('recorder/switchActive')"
                >
                    <i class="fas fa-record-vinyl"></i>
                </div>
                <div
                    class="record__btn record__btn-red"
                    :class="{ active: playing }"
                    @click="$store.dispatch('recorder/play')"
                >
                    <i class="fas fa-play"></i>
                </div>
                <div
                    class="record__btn record__btn-red"
                    @click="$store.dispatch('recorder/delete')"
                >
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        </div>
        <div class="record__body">
            <div class="record__positions" v-for="(p, i) in positions" :key="i">
                <div class="record__position">{{ p.x }}</div>
                <div class="record__position">{{ p.y }}</div>
                <div class="record__position">{{ p.z }}</div>
                <div class="record__position">{{ p.claw }}</div>
            </div>
        </div>
        <!-- <v-checkbox></v-checkbox> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import checkbox from '../components/checkbox'
export default {
    computed: {
        ...mapGetters({
            active: 'recorder/active',
            positions: 'recorder/positions',
            playing: 'recorder/playing',
        }),
    },
}
</script>

<style lang="scss" scoped>
.record {
    &__btns {
        display: flex;
    }
    &__btn {
        flex: 1;
        text-align: center;
        i {
            line-height: 50px;
        }
        &:hover,
        &.active {
            background: rgb(0 0 0 / 20%);
        }
        &-red {
            color: pink;
            &.active {
                color: red;
            }
        }
        &-green {
            color: green;
        }
    }
    &__body {
        overflow: auto;
        height: calc(100% - 50px);
    }
    &__position {
        color: whitesmoke;
        padding: 5px 0px;
        &s {
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>