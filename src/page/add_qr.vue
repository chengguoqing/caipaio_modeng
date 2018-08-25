<!--添加二维码-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 添加二维码</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	   <p class="pd pt10 pm10 fz14 z6">二维码设置</p>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label class="fz16">名称</label>
                <input type="text"  placeholder="请输入二维码名称" class="fz16">
            </div>
              <div class="mui-input-row pr" @click="show_er=true">
                <label class="fz16">会员类型</label>
                <input type="text"  v-model="leixing"  class="fz16" disabled>
                  <i class="dx icon-right pou_right_e"></i>
            </div>
              <div class="mui-input-row pr dsf_deert" >
                 
                   <section class="pd bgff pt10 z3 ">
        <p class="z3 fz14">设置用户返点 <span class="ye"> {{value/100*sdf_dsf|numFilter}}%</span></p>
        
            <section class="mt10 pm10 mui-row">
        <section class="mui-col-xs-2">
    <i class="dx icon-jian-tianchong cz fz22 red" @click="add_sdrt(0)"></i>
        </section>
                      <section class="mui-col-xs-8 pt10">
<van-slider v-model="value"/>

        </section>
                
                      <section class="mui-col-xs-2 tr">
    <i class="dx icon-add cz fz22 red" @click="add_sdrt(1)"></i>
        </section>
        </section>
            
    </section>
                  
                  
                  
                  
    </div>
            
            
               <div class="mui-input-row pr" @click="show=true">
                <label class="fz16">有效期</label>
                <input type="text"  v-model="yxq"  class="fz16" disabled>
                  <i class="dx icon-right pou_right_e"></i>
            </div>
            
            
            
        </form>
        
                <p class="pd pt10 pm10 fz14 z6">您的联系方式(选填)</p>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>QQ</label>
                <input type="text" class="mui-input-clear" placeholder="请输入您的QQ号">
            </div>
                 <div class="mui-input-row">
                <label>微信</label>
                <input type="text" class="mui-input-clear" placeholder="请输入您的微信号">
            </div>
                 <div class="mui-input-row">
                <label>Skype</label>
                <input type="text" class="mui-input-clear" placeholder="请输入您的Skype号">
            </div>
                 <div class="mui-input-row">
                <label>邮箱</label>
                <input type="text" class="mui-input-clear" placeholder="请输入您的电子邮箱地址">
            </div>
                 
        </form>
        
        <p class="mt20 pd mt20">
        <button class="mui-btn-red w100 fz16 pt10 pm10">生成二维码</button>
    </p>
        
        
        
        
	</section>
        
            <van-popup v-model="show_er" position="bottom" >

             <van-picker
                show-toolbar
                :columns="columns"
                value-key="name"
                @cancel="show_er=false"
                @confirm="wancdrttx"/>
             </van-popup>
        
            <van-popup v-model="show" position="bottom" >
        
               <van-picker
                       show-toolbar
                           :columns="columns_er"
                         value-key="name"
                            @cancel="show=false"
                               @confirm="wancdrttx_er"/>
                </van-popup>
        

	</div>
</template>
<script>
    export default {
        data() {
            return {
                leixing: "代理",
                show_er: false,
                show: false,
                columns: ["代理", "玩家"],
                columns_er: ["1天", "7天", "30天", "90天", "永久有效"],
                value: 0,
                sdf_dsf: 0.25,
                yxq: "1天"
            }
        },
        components: {

        },
        methods: {
            wancdrttx(e) {
                this.show_er = false
                this.leixing = e
            },
            wancdrttx_er(e) {
                this.show = false
                this.yxq = e
            },   add_sdrt(ty) {
                if (ty == 1) {
                    if (this.value < 100) {
                        this.value += 10
                    }
                } else {
                    if (this.value > 0) {
                        this.value -= 10
                    }
                }


            }
        },
        mounted() {

        },
        filters: {

            numFilter(value) {

                let realVal = Number(value).toFixed(2)

                return Number(realVal)

            }
        }
    }

</script>
<style scoped>
    .pou_right_e {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dsf_deert {
        height: auto
    }

</style>
