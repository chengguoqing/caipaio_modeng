<template>
	<div >
  <swiper :options="swiperOption" class="SDf_dfreyy">
    <!-- slides -->
    <swiper-slide v-for="sd in 10" class="w100 h100">
        <img src="http://duxinggj.com/uploads/upload_9572a98f1f9e1aeecc896f507cd27b26.jpg" class="w100 h100">
    </swiper-slide>
  </swiper>



	</div>


</template>



<script>
    import 'swiper/dist/css/swiper.css'

    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {

        data() {
            return {
                swiperOption: {
                    slidesPerView: 3, //'一页显示4个'
                    slidesPerGroup: 1,
                    spaceBetween: 10, //间隔空隙
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {

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
    .SDf_dfreyy {
        height: 100px;
    }

</style>
