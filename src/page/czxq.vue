<!--充值详情-->

<template>
	<div >
<section class="sd_jh_df mui-row pr cen ">

    <section class="df_jh_deer w100">
        <span> 充值详情</span>
    </section>
    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />


</section>

<section class="dsf_jh_deer">

    <van-cell-group class="mt10">
        <van-cell title="订单号" value="A_201808212256393494140" />
               <van-cell title="充值时间" value="2018-08-21 22：56：39" />
    </van-cell-group>
    
    
        <van-cell-group class="mt10">
          
              <van-cell  title="充值金额"  is-link>
   <span class="fr red">100.00</span>
  </van-cell>

               <van-cell title="充值方式" value="其他" />
             <van-cell title="订单状态" value="待处理" />
    </van-cell-group>
    
    <p class="mt15 pd">温馨提示：最多可查看35的数据</p>
    
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


</style>
