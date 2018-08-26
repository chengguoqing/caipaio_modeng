<!--走势-->
<template>
	<div>
	   <table class="mui-table cen fz14 dsf_jh_deer">
            <thead>
                <tr>
                    <td>期号</td>
                     <td>开奖号码</td>
                     <td>五星组态</td>
                </tr>
            </thead>
           <tbody>
                <tr v-for="sd in 10" >
            <td>2143</td>
            <td class="zjhh">
            <span class="sd_jh_deer" v-for="sd in 5">1</span>
            </td>
                    <td>组120</td>
            </tr>
            </tbody>
        </table>
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
    .dsf_jh_deer{
        background: #F5F3E7;
        line-height: 30px;
    }
    .sd_jh_deer{
        width: 25px;
        background: #DF3400;
        height: 25px;
         line-height: 25px;
        color: #fff;
        display: inline-block;
        border-radius: 50%;
        margin-right: 4px;
       
    }
    .zjhh{
        white-space:nowrap; 
    }

</style>
