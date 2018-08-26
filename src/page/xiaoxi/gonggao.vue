<!--系统管理员-->
<template>
	<div >
	
        <section class="sd_jh_df mui-row pr cen ">
        
            <section class="df_jh_deer w100">
                <span> 系统管理员</span>
            </section>
            <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
        
        
        </section>
        
        <section class="dsf_jh_deer">
        <ul>
            <li class="pd mt20" v-for="sd in 5">
                <p>2018/06/29</p>
                  
                <p class="sd_jh_ddr fl mr10">
                    <i class="dx icon-user4 fz30"></i>
                </p>
                <section class="ov  pr10">
                        <section class="yj4 dsf_j_dr">
    为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验
                </section>
                    
                    
                </section>
                <p class="qc"></p>
      
            </li>
        
        </ul>
            
            
            
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
    .sd_jh_ddr{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        color: #fff;
        background: linear-gradient(to top,#79EDFF, #3476FF);
    }
    .dsf_j_dr{
        background: #fff;
        border-radius: 4px;
        padding: 10px;
        font-size: 14px;
        color: #666
    }

</style>
