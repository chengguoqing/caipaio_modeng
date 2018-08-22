<!--提现-->
<template>
	<div >

        	   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 提现页面</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >
            <user_top></user_top>


             <section class="pd pt20">
                <ul>
         <li>
           <input type="text" v-model="sdsd_se" disabled="" class="dsf_jh_deret br ab">
    </li>
                        <li @click="show_er=true">
           <input type="text" v-model="kahao" class="dsf_jh_deret br" readonly >
    </li>
                        <li>
           <input type="number" v-model="jiner" class="dsf_jh_deret br" placeholder="请输入提现金额">
    </li>
                        <li>
           <input type="password" v-model="mima_se"  class="dsf_jh_deret br" placeholder="请输入资金密码">
    </li>
            </ul>

                <section class="tr">
            <p class="fz12">单笔最低提现100</p>
                          <p class="fz12">单笔最高提现20000</p>
        </section>

            <p class="mt10">
        <button class="mui-btn-red fz16 w100 pt10 pm10">确认提现</button>
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
    import user_top from "../components/user_top"
    export default {
        data() {
            return {
                sdsd_se: "周**",
                kahao:"中国工商银行 6215*********",
                jiner:"",
                mima_se:"",
                show_er:false,
                columns:["1中国工商银行 6215*********","2中国工商银行 6215*********","3中国工商银行 6215*********"]

            }
        },
        components: {
            user_top
        },
        methods: {
            wancdrttx(e){
                this.kahao=e
                this.show_er=false
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
