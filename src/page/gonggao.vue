<!--公告详情-->
<template>
	<div >
	   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 公告详情</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>

           <span class=" sd_jh_eert  cf fz12" :class="sd_jh_s?'':'act'" @tap="sd_jh_s?sd_jh_s=false:sd_jh_s=true">
          更多公告  <i class="dx icon-down cf cz"> </i>
            </span>
        </section>

        <section class="dsf_jh_deer pd  pm10 bgff" v-if="sd_jh_s">
                <p class="fz18 pt10 z3">关于腾讯时时彩开奖公告</p>

            <p class="z9 mt10">2018-07-13 16:06:41 <span class=" ml10">系统公告</span></p>
                <p class="z9 fz12 mt5">
    尊敬的客户
            </p>
            <section class="mt40 z9 fz12">
            腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告腾讯时时彩开奖公告

        </section>

    </section>

        <section v-else class="dsf_jh_deer ">
                <ul class="pr bgff">
            <li class="pd pt10 pm10 bbm pr" v-for="sd in 5" @tap="sd_jh_s=true">
                <p class="dian fz16 z3">公告公告公告公告公告</p>
                   <p class="z9 mt2">2018-07-13 16:06:41 </p>
                <i class="dx icon-right dsf_oiu_der"></i>
            </li>
            </ul>

                <p class="dsf_jh_deerer" @tap="sd_jh_s=true"></p>
        </section>


	</div>
</template>
<script>
    export default {
        data() {
            return {
                    sd_jh_s:true
            }
        },
        components: {

        },
        methods: {

        },
          mounted(){

        },
    }

</script>
<style scoped>
    .dsf_oiu_der{
        position: absolute;
        right: 10px;
        top: 20px;
    }
    .dsf_jh_deerer{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1
    }
    .sd_jh_eert.act i.dx{
        display: inline-block;
        transform: rotate(180deg)
    }

</style>
