<!--资金密码-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 资金密码</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	<section class="sd_kjer_er">
        <input type="password" placeholder="请输入旧资金密码">
          <input type="password" placeholder="请输入新资金密码">
          <input type="password" placeholder="请再次输入新资金密码">
        
        <button class="mui-btn-red fz16 w100 pt10 pm10">提交</button>
        <p class="pd mt20 fz12">
            1、资金面膜是您提现的重要凭证，一旦设定请谨慎保管 <br>
               2、通过设定资金密码，能够有效的保护您的资金安全 <br>
               3、资金密码长度位8-16位，包括数字及字母 <br>
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
    .sd_kjer_er{
        width: 300px;
        margin: auto;
        margin-top: 20px;
    }
    .sd_kjer_er input{
        text-indent: 0px;
        font-size: 16px;
    }

</style>
