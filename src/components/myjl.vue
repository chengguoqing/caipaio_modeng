<!--没有记录-->
<template>
	<div>
	   <section  class="meiyoujids">
            <p class="zansh_sdrt">暂无数据</p>
            <img src="../assets/img/meishuju.png" class="cz">
          
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
    .meiyoujids{
        width: 180px;
        height: 180px;
        position: fixed;
        left: 0px;
        right: 0px;
        margin: auto;
        background: #EFEFEF;
        border-radius: 50%;
        text-align: center;
        line-height: 180px;
        top: 0px;
        bottom: 80px
    }
    .meiyoujids img{
        width: 110px;
    }
    .zansh_sdrt{
        position: absolute;
    bottom: -120px;
        width: 100%;
        text-align: center;
    }
</style>
