<!--注册下级-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span> 注册下级</span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label class="fz15">会员类型</label>
              <section class="input  fl dfdfdf_er pl10">
    <van-radio-group v-model="radio" class="w100 mui-row fz16">
        <section class="mui-col-xs-6">
<van-radio name="1">代理</van-radio>
            </section>
        
               <section class="mui-col-xs-6">
      <van-radio name="2">玩家</van-radio>
    </section>
        
  
 
</van-radio-group>
                  
    </section>
            </div>
            
              <div class="mui-input-row dsf_e_rdee">
                <label class="fz15 mt5">注册账号</label>
                <section class="input fl pr10"> 
                    <input type="text" placeholder="请输入会员账号" class="df_jh_deert">
                    <p class="fz12 mt5 pm5">字母或下划线开头，5-15位，可包含数字</p>
                </section>
                  
    </div>
            
             <div class="mui-input-row ">
                  <label class="fz15 ">注册密码</label>
                <section class="input fl pr10 fz14 pt10"> 
                    新会员初始密码位<span class="red ">md123456</span>
    </section>
                 
    </div>
            
   
            
            
            
            
        </form>
        
        <section class="pd bgff pt10 z3 ">
        <p class="z3 fz14">设置用户返点 <span class="ye">{{sdf_dsf}}%</span></p>
        
            <section class="mt10 pm10 mui-row">
        <section class="mui-col-xs-2">
    <i class="dx icon-jian-tianchong cz fz22 red"></i>
        </section>
                      <section class="mui-col-xs-8 pt10">
<van-slider v-model="value" @change="change_dr"/>
        </section>
                
                      <section class="mui-col-xs-2 tr">
    <i class="dx icon-add cz fz22 red"></i>
        </section>
        </section>
            
    </section>
        
        
        <p class="mt20 pd"> 
            <button class="mui-btn-red w100 fz16 pt10 pm10">立即注册</button>
        </p>
        
	</section>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                radio:'1',
                value:0,
                sdf_dsf:0,
            }
        },
        components: {

        },
        methods: {
            change_dr(){
                console.log(this.value);
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dfdfdf_er{
       padding-top: 8px;
    }
    .dsf_e_rdee{
        height: auto
    }
    .df_jh_deert{
        border: 1px solid #DADADD;
        height: 35px;
        font-size: 16px;
        border-radius: 4px;
        margin-top: 10px;
    }

</style>
