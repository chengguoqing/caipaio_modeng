<template>
	<div class="dsf_drert">
	<van-tabbar v-model="active">
 

  <van-tabbar-item  :to="'wodexx'">
      <section >
       <p class="cen df_jh_deer_ert"  >
            <span class="sd_jh_dert">
                    <i class="dx icon-time fz22"></i>
            </span>
        </p>
    <span>最近联系人</span>
          </section>
  </van-tabbar-item>


          <van-tabbar-item :to="'lianxiren'">
               <section>
       <p class="cen df_jh_deer_ert">
            <span class="sd_jh_dert">
                    <i class="dx icon-user11 fz22 cz"></i>
            </span>
        </p>
    <span>联系人</span>
    </section>
  </van-tabbar-item>


       




</van-tabbar>


	</div>
</template>
<script>
    export default {
        props: {
            active:0
        },
        data() {
            return {

                icon: {
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
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
<style>
    .dsf_drert .van-tabbar-item.van-tabbar-item--active .sd_jh_dert {
        background: #fff !important;
        color: #FB3233;
    }

    .van-tabbar-item--active {
        color: #FB3233;
    }

</style>
<style scoped>
    .df_jh_deer_ert {
        position: relative;
        bottom: 3px;
        margin-bottom: 1px;
    }

    .sd_jh_dert {
        width: 25px;
        height: 25px;
        line-height: 25px;
        color: #fff;
        display: inline-block;
        
           color: #666;
        border-radius: 50%;
    }

</style>
