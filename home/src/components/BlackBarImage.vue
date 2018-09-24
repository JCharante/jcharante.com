
<template>
    <div class="img-container-background">
        <div class="img-container">
            <img :src="picture"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['picture']
    }
</script>

<style lang="stylus">
    @import '~variables'
    .img-container-background {
        /*height: 300px;*/
        /*height: 236px;*/
        height: 168.75px; /* for 16:9 ratio */
        width: 100%;
        overflow: hidden;
        display:block;
        /*background: #000;*/
        background: $light;
        display: table;
        position: relative;
        cursor: pointer;
    }
    .img-container {
        /*height: 300px;*/
        /*height: 236px;*/
        height: 168.75px; /* for 16:9 ratio */
        width: 100%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .img-container img {
        margin: auto;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    img {
        vertical-align: middle;
    }
</style>
