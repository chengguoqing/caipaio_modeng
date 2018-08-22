<!--投注详情-->
<template>
	<div >
	    <section class="sd_jh_df mui-row pr cen ">

	                              <section class="df_jh_deer w100">
	                        <span> 投注详情</span>
	                     </section>
	                    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)"/>


	          </section>

	          <section class="dsf_jh_deer  " >

                  <van-cell-group class="mt10">
  <van-cell title="注单编号" value="20180821020r9Fk7Z0001" />
                  <van-cell title="投单时间" value="2018082121:51:03" />
    </van-cell-group>

                            <van-cell-group class="mt10">
  <van-cell title="彩种" value="广东11选5" />
                  <van-cell title="玩法" value="前三直选复式" />
    </van-cell-group>


                            <van-cell-group class="mt10">
  <van-cell title="期号" value="20180821-78" />
                  <van-cell title="投注内容" value="03,04,05|03,05|03" />
            <van-cell title="投注注数" value="1" />
                    <van-cell title="是否单挑" value="是" />
                    <van-cell title="奖金模式" value="1936.44" />

    </van-cell-group>


    <van-cell-group class="mt10">
            <van-cell title="倍数" value="2" />
            <van-cell title="模式" value="角(2角)" />
          <van-cell title="投注总金额" value="0.4000" />
          <van-cell title="奖金" value="0.0000" />
                <van-cell title="开奖号码" value="----" />
    </van-cell-group>



                     <van-cell-group class="mt10">
  <van-cell title="状态" value="未开奖" />
                  <van-cell title="是否追号" value="否" />
    </van-cell-group>



<p class="pd mt15">
    <button class="w100 fz16 pt10 pm10 z3" @click="cedan_er">撤单</button>
    </p>



	             </section>
	</div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            cedan_er() { //撤单按钮触发
                Dialog.confirm({
                    title: '撤单',
                    message: '确定要撤销订单吗？'
                }).then(() => {
                    alert("是")
                }).catch(() => {
                    // on cancel
                });
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        },
    }

</script>
<style scoped>


</style>
