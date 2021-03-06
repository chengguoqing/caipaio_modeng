import router from './router'
var sd_iux = "http://www.ragtech.cn/"
var sd_erttx = {}
sd_erttx.user_uuid = '73955cb3-0c38-4b18-83d9-9180a7243ddd'
sd_erttx.token = "952bca2e-1ee1-439e-bec8-2d2a07198859"

export default {
    install(Vue, options) {
        Vue.prototype.sd_iux = sd_iux
        Vue.prototype.ge_t = function (url, cn, xy) {
            if (localStorage.token) {
                cn.token = localStorage.token
            }
            this.$http.get(sd_iux + url, {
                params: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }

        Vue.prototype.post = function (url, cn, xy) {
            if (localStorage.token) {
                cn.token = localStorage.token
            }
            this.$http.post(sd_iux + url, cn).then((response) => {
                if (response.data.ret != 1) {
                    router.push({
                        path: "/login"
                    })

                    return
                }
                xy(response.data)

            }, (response) => {
                     router.push({
                        path: "/login"
                    })
            });
        }




        Vue.prototype.Title = function (title) {
            document.title = title

        }

        Vue.prototype.put = function (url, cn, xy) {
            cn.user_uuid = sd_erttx.user_uuid
            cn.token = sd_erttx.token
            cn.signature = this.getsign(cn)
            this.$http.put(sd_iux + url, cn).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }


        Vue.prototype.delete = function (url, cn, xy) {

            cn.user_uuid = sd_erttx.user_uuid
            cn.token = sd_erttx.token
            cn.signature = this.getsign(cn)
            console.log(cn)
            this.$http.delete(sd_iux + url, {
                body: cn
            }).then((response) => {
                xy(response.data)
            }, (response) => {
                alert("请求失败");
            });
        }

        Vue.prototype.hf = function (url, cu) { //路由跳转
            console.log(url)
            router.push({
                path: "/" + url,
                query: cu
            })
        }


        //获取cookie
        Vue.prototype.getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        }

        Vue.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            console.info(document.cookie);
        }

        Vue.prototype.yanza = {
            mail: function (a) {
                var b = !1;
                return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
            },
            phone: function (a) {
                var b = !1;
                return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b
            },
            car_t: function (a) {
                var b = !1;
                return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
            },
            jine: function (a) {
                var b = !1;
                return /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(a) && (b = !0), b
            }

        };

        Vue.filter("baoliu", function (t) {
            return parseFloat(t).toFixed(2)
        })

        Vue.prototype.getsign = function (datex) {

            var sdsr_sd = {}
            sdsr_sd.timestamp = new Date().getTime()
            Object.assign(sdsr_sd, datex)
            let jian = Object.keys(sdsr_sd)
            jian.sort()
            var sd_srttx = {}
            jian.map(function (a) {
                sd_srttx[a] = sdsr_sd[a]
            })


            return md5.hexMD5(sd_srttx)
        }


    }
}
