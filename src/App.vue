<template>
    <div id="app">
        <header>
            <div class="inner">
                <router-link :to="{name: 'Home'}" exact class="btn">Home</router-link>
                <router-link :to="{name: 'Recorder'}" exact class="btn">Recorder</router-link>
            </div>
        </header>
        <router-view />
    </div>
</template>

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

            &.router-link-active{
                background: #242c40;
            }
        }
    }
}
</style>