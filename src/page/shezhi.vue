<!--设置-->
<template>
	<div >
		   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 设置</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >

            <van-cell-group>
                <van-cell title="奖金模式" is-link :to="'jiangjin'"/>
                  <van-cell title="提示设置" is-link to="tishi" />
                  <van-cell title="版本更新" value="已是最新版本V1.041" is-link to="banben" />
    </van-cell-group>

            <p class="mt20 pd">
            <button class="mui-btn pt10 pm10 w100 fz16 z6">安全退出登录</button>
            </p>


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


</style>
