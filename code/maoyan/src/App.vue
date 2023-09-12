<script setup>


</script>



<template>
    <div>
        <router-view></router-view>
        <van-tabs v-model:active="active">
        <van-tab title="home">首页</van-tab>
        <van-tab title="films">电影</van-tab>
        <van-tab title="cinemas">影院</van-tab>
        <van-tab title="jumpoff">演出</van-tab> 
        <van-tab title="borad">榜单</van-tab>
        <van-tab title="news">热点</van-tab>
        <van-tab title="edimall">商城</van-tab>
    </van-tabs>
    </div>
    <!-- axios没有导出（在哪导出？），tabbar引入没有配置好（没有效果），changku里的App.vue里的<router-view></router-view>有什么效果 -->
    
</template>



<style scoped></style>
