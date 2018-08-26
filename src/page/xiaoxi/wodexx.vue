<!--我的消息-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>我的消息 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer bgff">
	
        <ul>
            <li class="pl10 pt10 " @tap="hf('xiao_gonggao')">
                <p class="sd_jh_ddr fl mr10">
                    <i class="dx icon-user4 fz30"></i>
                </p>
                <section class="ov bbm pr10">
                    <p class=" fz16 z3">
                        系统管理员
                        <span class="fz12 fr z9">2018/07/26</span>
                    </p>
                    <p class="dian mui-col-xs-8 mt2 pm10">
                为了提示用户体验为了提示用户体验为了提示用户体验为了提示用户体验
                </p>
                </section>
                <p class="qc"></p>
            </li>
                <li class="pl10 pt10 " @tap="hf('wdshangji')">
                <p class="sd_jh_ddr fl mr10 ab">
                    <i class="dx icon-user4 fz30"></i>
                </p>
                <section class="ov bbm pr10">
                    <p class=" fz16 z3">
                        我的上级
                        <span class="fz12 fr z9">2018/07/26</span>
                    </p>
                    <p class="dian mui-col-xs-8 mt2 pm10">
              我的上级
                </p>
                </section>
                <p class="qc"></p>
            </li>
    
        </ul>
        
        
	</section>

        <xiaoxi_dibu :active="0"></xiaoxi_dibu>
	</div>
</template>
<script>
    import xiaoxi_dibu from "../../components/xiaoxi_dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
            xiaoxi_dibu
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
    .sd_jh_ddr.ab{
        background: linear-gradient(to top,#FEC740, #FB9307); 
    }

</style>
