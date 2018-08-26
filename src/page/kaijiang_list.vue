<!--开奖列表-->
<template>
	<div >
	    <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 重庆时时彩</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>

        </section>

        <section class="dsf_jh_deer">

            <section class="pd pt10 pm10 bbm dsf_jh_deeert" v-for="sd in 20">
                    <p>弟 20180821-002期</p>
                <section class="mt5">

      <span class="yj fz12 df_hg_deert cz mr5 ab" v-for="sd in 5">03</span>
                </section>
            </section>

    </section>

        <section class="like_deer pd pt5 pm5 btm">
    <button class="mui-btn-red w100 fz16 h100" @tap="hf('xuanhao')">立刻投注</button>
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
    .dsf_jh_deeert{
        background: #fff;
    }
    .dsf_jh_deeert:nth-child(odd){
        background: #F4F1EE
    }
    .like_deer{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50px;
        background: #EEEEEE;

    }

</style>
