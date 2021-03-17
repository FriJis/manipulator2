<template>
    <div class="checkbox flex v-center" :class="{active:active}">
        <div class="slide btn" @click="checked()">
            <div class="dot"></div>
        </div>
        <span>{{this.label || undefined}}</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: false,
            type: Boolean
        },
        label: {}
    },
    data() {
        return {
            active: this.value
        };
    },
    methods: {
        checked() {
            this.active = !this.active;
            this.$emit("input", this.active);
        }
    }
};
</script>

<style scoped>
.checkbox {
    padding: 10px 10px;
    position: relative;
}
.slide::before {
    width: 10px;
    height: 10px;
    background: rgba(0, 0, 0, 0.1);
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.15s;
}
.slide:hover::before {
    width: 35px;
    height: 35px;
    border-radius: 50px;
}
.slide {
    width: 40px;
    height: 20px;
    background: #000;
    border-radius: 50px;
    position: relative;
}
.dot {
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background: #cc2e2e;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    transition: 0.2s;
}
.checkbox.active .dot {
    background: #2ecc71;
    left: calc(100% - 10px);
}
span {
    padding: 0 20px;
    font-size: 15px;
    color: var(--main-color);
}
</style>