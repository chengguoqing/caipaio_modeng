<!--盈亏详情-->
<template>
    <div >

                    <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">

                                 彩票盈亏详情



                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer" >

            <van-cell-group class="mt10">
  <van-cell title="时间" value="2018-08-22至2018-08-22" />
    </van-cell-group>

             <van-cell-group class="mt10">
                  <van-cell title="投注" value="0.0000" />
                  <van-cell title="中奖" value="0.0000" />
                  <van-cell title="返点" value="0.0000" />
                  <van-cell title="会员活动" value="0.0000" />
                  <van-cell title="代理活动" value="0.0000" />
                  <van-cell title="盈亏" value="0.0000" />
    </van-cell-group>

            <p class="pd pt10">温馨提示:最多可查看7天的数据</p>


    </section>
    </div>
        </template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
