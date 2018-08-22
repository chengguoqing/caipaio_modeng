<!--开奖中心-->
<template>
	<div >

           <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer ab">
                  <span> 开奖中心</span>
                </section>


      <img src="../assets/img/kefu.png" class="kefwey">

        </section>

        <section class="dsf_jh_deer">

            <section v-for="sd in 10">
            <section class=" pt10  bgff mb10 btm dfg_dg_drg" @tap="hf('kaijiang_list')">
                <section class="pd">
                <span class="fz18 z3">北京PK10</span>
                <span class="ml10 fz14 z9">弟 699453 期</span>
                <span class="fr red mr20 fz14">立即投注</span>

                <section class="qc pt10 dfg_df_dfdt">
                    <span class="yj fz12 df_hg_deert cz mr5 " v-for="sd in 10">03</span>
                </section>
                    </section>
                <section class="pd mt10 dsf_hh_deet">
                        <section class="pt5 pm5 fz14 bbm" v-for="sd in 2">
                            弟 699553 期 <span class="red ml5 df_dereert" v-for="sd in 10">03</span>
                        </section>


                </section>



            </section>




            <section class=" pt10  bgff mb10 btm dfg_dg_drg act" @tap="hf('kaijiang_list')">
                <section class="pd">
                <span class="fz18 z3">重庆时时彩</span>
                <span class="ml10 fz14 z9">弟 699453 期</span>
                <span class="fr red mr20 fz14">立即投注</span>

                <section class="qc pt10 dfg_df_dfdt">
                    <span class="yj fz12 df_hg_deert cz mr5" v-for="sd in 5">03</span>
                </section>
                    </section>
                <section class="pd mt10 dsf_hh_deet">
                        <section class="pt5 pm5 fz14 bbm" v-for="sd in 2">
                            弟 699553 期 <span class="red ml5 df_dereert" v-for="sd in 5">03</span>
                        </section>


                </section>



            </section>



        </section>

        </section>
	<dibu :active="1"></dibu>
	</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
            dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .df_jh_deer {
        width: 100%;
    }

    .kefwey {
        z-index: 1000;
          right: 12px;
    top: 28px;
    }



    .dsf_hh_deet {
        background: #F4F1EE;
    }

    .dfg_dg_drg.act .df_hg_deert {
        width: 35px;
        height: 35px;
        line-height: 35px;
        margin-right: 20px;
        font-size: 18px !important;
    }

    .dfg_dg_drg.act .df_dereert {
        margin-left: 10px;
    }

</style>
