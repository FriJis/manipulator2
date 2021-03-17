<template>
    <div class="container">
        <v-checkbox></v-checkbox>
    </div>
</template>

<script>
import checkbox from '../components/checkbox'
export default {
    components: {
        'v-checkbox': checkbox
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>