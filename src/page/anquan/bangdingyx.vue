<!--绑定邮箱-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 绑定邮箱</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	
            <section class="pd pt20">
                <p class="fz16 z3">输入绑定邮箱</p>
                <input type="email" placeholder="E-mailNmae@modeng.com" class="mt10 dsfsd_drt">
            
                <p>
                    <button class="mui-btn-red w100 fz16 pt10 pm10" @tap="hf('yifasongyx')">下一步</button>
                </p>
                <p class="fz12 mt10">
                    温馨提示<br> 
                    1、邮箱一旦进行绑定，则不可更改<br>
                    2、绑定邮箱是唯一找回密码的方式<br>
                    3、绑定邮箱是找回账户密码的方式之一<br>
                </p>
                
            </section>
        
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
    .dsfsd_drt{
        text-indent: 0px;
    }

</style>
