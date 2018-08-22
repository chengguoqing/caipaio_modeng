<!--奖金设置-->
<template>
	<div >

        	   <section class="sd_jh_df mui-row pr cen ">

                       <section class="df_jh_deer w100">
                  <span> 奖金设置</span>
                </section>
               <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


        </section>

        <section class="dsf_jh_deer   pm10 " >

            <section class="pd pt20 pm20 mui-row bgff">
                <p class="mui-col-xs-4">
            奖金设置
            </p>

                       <div class="mui-col-xs-8">
                    <p class="dsf_deeer">
            <van-switch v-model="checked" />
                        <span class="fz12 dsf_jh_dert" v-if="checked">高奖金模式</span>
                         <span class="fz12 dsf_jh_dert ab" v-else>高返点模式</span>
                </p>


            </div>

            </section>

    </section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                checked:true
            }
        },
        components: {

        },
        methods: {

        },
          mounted(){

        },
    }

</script>
<style>
    .dsf_deeer{
        position: absolute;
        right: 0px;
        top: -5px;
        width: 140px;
        height: 32px;
    }
    .dsf_deeer .van-switch{
        width: 140px;
    }
   .dsf_deeer .van-switch__node{
        width: 70px;
       border-radius: 20px;
    }
    .dsf_deeer .van-switch--on .van-switch__node{
            transform: translateX(70px);
    }
    .dsf_deeer .van-switch{
        background: #5856D6;
    }
    .dsf_deeer .van-switch.van-switch--on{
         background:#FB3233
    }

</style>
<style scoped>
    .dsf_jh_dert{
        position: absolute;
        left: 5px;
        top: 6px;
        color: #fff;
    }
    .dsf_jh_dert.ab{
        left: inherit;
        right: 5px;
    }

</style>
