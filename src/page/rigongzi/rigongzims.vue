<!--日工资管理-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span v-if="type_r==0"> 日工资管理</span>
            <span v-if="type_r==1"> 分红管理</span>
              <span v-if="type_r==2"> 私返管理</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	 
	<section class="dsf_jh_deer"> 
	
        <van-cell-group class="mt10">
            <van-cell  is-link :to="'wodeqiyue?type_r='+type_r">
              <i class="dx icon-weibiaoti-_huabanfuben ls fz20 cz"></i>  
                <span class="ml5">我的契约</span>
            </van-cell>
              <van-cell  is-link to="woderigongzi" v-if="type_r==0">
              <i class="dx icon-zhongguohangtiantubiaoheji-weizhuanlunkuo- ls fz20 cz"></i>  
                <span class="ml5">我的日工资</span>
            </van-cell>
                  <van-cell  is-link to="wodofh" v-if="type_r==1">
              <i class="dx icon-zhongguohangtiantubiaoheji-weizhuanlunkuo- ls fz20 cz"></i>  
                <span class="ml5">我的分红</span>
            </van-cell>
                <van-cell  is-link to="wodeshifan" v-if="type_r==2">
              <i class="dx icon-zhongguohangtiantubiaoheji-weizhuanlunkuo- ls fz20 cz"></i>  
                <span class="ml5">我的私返</span>
            </van-cell>
            
              <van-cell  is-link to="xiajiqiyue">
              <i class="dx icon-structurehierar ls fz20 cz"></i>  
                <span class="ml5">下级契约</span>
            </van-cell>
              <van-cell  is-link to="xiajirgz">
              <i class="dx icon-structurehierar ls fz20 cz"></i>  
                <span class="ml5">下级日工资</span>
            </van-cell>
        </van-cell-group>
	</section>
        
        

	</div>
</template>
<script>
    export default {
        data() {
            return {
                type_r:0
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
                this.type_r= this.$route.query.type_r
                   
        },
    }
</script>
<style scoped>


</style>
