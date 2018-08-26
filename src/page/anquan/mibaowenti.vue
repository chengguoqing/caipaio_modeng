<!--密保问题-->
<template>
	<div >
	<section class="sd_jh_df mui-row pr cen ">
	
	    <section class="df_jh_deer w100">
	        <span>密保问题 </span>
	    </section>
	    <van-icon name="arrow-left" class=" sd_jh_eert ab cf" @click="$router.back(-1)" />
	
	
	</section>
	
	<section class="dsf_jh_deer">
	
        <section class="pd mt40">
            <p>设置密保问题</p>
            
            <p class="pr mt10" @click="show_er=true">
                <input type="text" disabled v-model="df_ff" >
                <i class="dx icon-down dsf_jh_dert"></i>
            </p>
            <input type="text" placeholder="请输入密保答案">
            
            <p class="">
        <button class="mui-btn-red w100 fz16 pt10 pm10">立即设置</button>
        </p>
    
    </section>
        
        
	</section>
        
        <select_r title_e="请选择密保问题" :show_er="show_er" :columns="columns" @close="show_er=false" @get_data="get_data"></select_r>

	</div>
</template>
<script>
    import select_r from "../../components/select_r"
    export default {
        data() {
            return {
                df_ff: "请选择密保问题",
                show_er: false,
                columns: [
                    "您的出生地",
                    "您父亲的名字",
                    "您母亲的名字",
                    "您小学的校名",
                    "您初中的校名",
                    "您高中的校名",
                    "您大学的校名"

                ]
            }
        },
        components: {
            select_r
        },
        methods: {
            get_data(data){
                this.show_er=false
                this.df_ff=data
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_jh_dert {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dsf_jh_deer input {
        font-size: 16px;
        text-indent: 0px;
    }

</style>
