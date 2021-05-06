<template>
    <div class="container record">
        <div class="record__item">
            <div class="record__btns">
                <div class="record__btn record__btn-red">
                    <i class="fas fa-record-vinyl"></i>
                </div>
                <div class="record__btn record__btn-green">
                    <i class="fas fa-play"></i>
                </div>
                <div class="record__btn record__btn-red">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        </div>
        <!-- <v-checkbox></v-checkbox> -->
    </div>
</template>

<script>
// import checkbox from '../components/checkbox'
export default {
    components: {
        // 'v-checkbox': checkbox
    }
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
        padding: 10px;
        &:hover, &.active {
            background: rgb(0 0 0 / 20%);
        }
        &-red {
            color: red;
        }
        &-green {
            color: green;
        }
    }
}
</style>