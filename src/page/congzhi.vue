<!--充值-->
<template>
	<div >
	    <section class="sd_jh_df mui-row pr cen ">

	                              <section class="df_jh_deer w100">
	                        <span> 充值</span>
	                     </section>
	                    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


	          </section>

    <section class="dsf_jh_deer  " >
	   <user_top></user_top>
        <section class="pl10  mui-row">
            <section class="mui-col-xs-6 pr10 mt10" v-for="sd in sd_jh_df">
                <button class="wytong_der fz16" :class="sd.cls" @tap="xuasd(sd)">{{sd.name}}</button>

            </section>

        </section>
    <section class="mt10 pd">

        <section class="yj4 bgff dsf_erjh_deer pd pr" @click="show_er=true">
        <span class="fz12 cz">银行</span>
            <span class="fz1 ml10 cz">{{kahao}}</span>
            <i class="dx icon-right dsf_jh_deert"></i>

        </section>

    </section>

        <section class="bgff mt10 pd bgff">
        <p class="z3 pt10 pm10">充值金额 </p>
        <p class=" dsf_dfgryty pr">
            <span class="jinhg_de z3 fz18">￥</span>
            <input type="text" placeholder="请输入充值金额">
        </p>


        </section>

        <section class="mt20 pd">
            <button class="mui-btn-red w100  pt10 pm10">马上充值</button>
            <p class="pd pt10">
            温馨提示：<br>
                1、单笔充值最低：<span class="z3">100元</span>,最高<span class="z3">40000元</span>
            </p>
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



</section>
	</div>
</template>
<script>
        import user_top from "../components/user_top"
    export default {
        data() {
            return {
                show_er:false,
                kahao:"招商银行",
                sd_jh_df:[
                    {
                        type:1,
                        cls:"act",
                        name:"网银通道"
                    }, {
                        type:2,
                        cls:"",
                        name:"微信快充"
                    }, {
                        type:3,
                        cls:"",
                        name:"IE银联"
                    }
                ],
                 columns:["招商银行","工商银行","建设银行","民生银行","农业银行","广大银行"]
            }
        },
        components: {
            user_top
        },
        methods: {
             wancdrttx(e){
                this.kahao=e
                this.show_er=false
            },
            xuasd(sd){
                this.sd_jh_df.map(a=>{
                    a.cls=""
                })
                sd.cls="act"
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .wytong_der{
        width: 100%;
        line-height: 35px;
        padding: 0px;
        border-radius: 4px;
    }
    .wytong_der.act{
        background: #E22829;
        color: #fff
    }
    .dsf_erjh_deer{
        line-height: 40px;
    }
    .dsf_jh_deert{
        position: absolute;
        right: 10px;
        top: 0px;
    }
    .dsf_dfgryty input{
        border: 0px;
        height: 30px;
        text-indent: 10px;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .jinhg_de{
        position: absolute;
        left: 0px;
        top: 6px;
    }

</style>
