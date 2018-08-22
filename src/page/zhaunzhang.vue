<!--钱包转账-->
<template>
	<div >


        	   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 钱包转账</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >

                  <section class="pd pt20">
                <ul class="sd_jH_dert">

                        <li @click="is_sr=1;show_er=true" class="pr">
           <input type="text" v-model="qiabbao" class="dsf_jh_deret br" readonly >
                            <i class="dx icon-down roijgrtde"></i>
                            <p>余额：0.000</p>
    </li>
                    <li @click="is_sr=2;show_er=true" class="pr">
           <input type="text" v-model="qiabbao_b" class="dsf_jh_deret br" readonly >
                            <i class="dx icon-down roijgrtde"></i>
                            <p>余额：查询中</p>
    </li>

                    <li class="pr">
           <input type="number" v-model="jiner" class="dsf_jh_deret br"  placeholder="请输入转账金额" >

                            <p>转账金额最低1.00元，最高50000.00元</p>
    </li>



    </ul>

                             <p class="mt10">
        <button class="mui-btn-red fz16 w100 pt10 pm10">立即转账</button>
        </p>

    </section>

    </section>


           <van-popup v-model="show_er" position="bottom" >


             <van-picker
  show-toolbar
  title="请选择"
  :columns="columns"
@cancel="show_er=false"
@confirm="wancdrttx"
/>


             </van-popup>


	</div>
</template>
<script>
    export default {
        data() {
            return {
                qiabbao:"请选择转出钱包",
                qiabbao_b:"请选择转入钱包",
                  show_er:false,
                jiner:"",
                is_sr:1,//1.请选择转出钱包 2.请选择转入钱包
                columns:["请选择转出钱包","AG钱包","沙巴钱包","彩票钱包"]

            }
        },
        components: {

        },
        methods: {
 wancdrttx(e){

                if(this.is_sr==1){
                     this.qiabbao=e
                }else        if(this.is_sr==2){
                     this.qiabbao_b=e
                }
                this.show_er=false
            }
        },
          mounted(){

        },
    }

</script>
<style scoped>
    .roijgrtde{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .dsf_jh_deret{
        margin-bottom: 5px;
    }
    .sd_jH_dert li{
        margin-bottom: 15px;
    }

</style>
