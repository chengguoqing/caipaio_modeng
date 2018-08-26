<!--账户安全-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>账户安全 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
        
        <van-cell-group>
            <van-cell title="电子邮箱" value="待绑定" is-link to="bangdingyx"/>
               <van-cell title="资金密码" value="已设置" is-link to="zijinmima"/>
               <van-cell title="密保问题" value="已设置" is-link  to="mibaowenti"/>
               <van-cell title="修改密码"  is-link to="xgdlmima"/>
        </van-cell-group>
	
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
