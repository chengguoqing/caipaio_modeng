<template>
	<div >
           <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 版本管理</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >
            <p class="cen pt20">
                <img src="../assets/img/logo_sd.png" class="losd_deert">
            </p>

            <p class="mt15 z9 fz14 cen">
                ver 1.041
            </p>
            <p class="z9 cen ">当前已是最新版本</p>
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
          mounted(){

        },
    }

</script>
<style scoped>
    .losd_deert{
        width: 110px;
    }

</style>
