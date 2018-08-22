<!--修改昵称-->
<template>
	<div >
	    <section class="sd_jh_df mui-row pr cen ">

	                              <section class="df_jh_deer w100">
	                        <span> 修改昵称</span>
	                     </section>
	                    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


	          </section>

	          <section class="dsf_jh_deer  " >

                 <form class="mui-input-group mt10">
                     <div class="mui-input-row">
                         <label>昵称</label>
                         <input type="text" class="mui-input-clear fz16" placeholder="请输入昵称">
                     </div>
                 </form>
                  <p class="pd pt10 z9 fz14">
                在上下级聊天看到你的昵称
                </p>

                  <p class="mt20 pd">

                    <button class="mui-btn-red w100 fz16 pt10 pm10" @click="$router.back(-1)">保存昵称</button>
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
        mounted() {

        },
    }

</script>
<style scoped>


</style>
