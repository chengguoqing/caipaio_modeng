<!--提示设置-->
<template>
	<div >

        	   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 提示设置</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >
            <van-cell-group class="mt10">
  <van-switch-cell v-model="checked" title="中奖提示" />
</van-cell-group>
    </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                checked:true
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
