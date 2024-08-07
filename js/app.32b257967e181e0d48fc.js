webpackJsonp([0], [, function(e, a, n) {
    "use strict";
    var t = n(82)
      , o = n.n(t)
      , i = n(24)
      , s = n.n(i)
      , r = n(80)
      , c = (n(48),
    function(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, a) {
            var n = +("0x" + a);
            return String.fromCharCode(n)
        }))
    }
    );
    a.a = {
        isIos: function() {
            return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        },
        isAndroid: function() {
            var e = navigator.userAgent;
            return e.indexOf("Android") > -1 || e.indexOf("Adr") > -1
        },
        openWeb: function(e) {
            var a = c(e);
            this.isIos() ? window.location.href = "unitynative://OpenWeb=" + a : window.UnityNative.OpenWeb(e)
        },
        close: function() {
            this.isIos() ? window.location.href = "UnityNative://OnClose" : window.UnityNative.OnClose()
        },
        login: function(e, a, n, t) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=login&resultcode=0&username=" + e + "&userid=" + n + "&usersession=" + a;
            else {
                var i = {
                    resultcode: 0
                };
                i.username = e,
                i.userid = n,
                i.usersession = a,
                i.pagename = "login",
                i = s()(i);
                var r = {
                    session: a,
                    guid: n,
                    accouent: e
                };
                try {
                    t && t.visitLog(o()({
                        behavior: "login_client_back_before"
                    }, r), {}, !0)
                } catch (e) {}
                window.UnityNative.OnPageResult("login", i);
                try {
                    t && t.visitLog(o()({
                        behavior: "login_client_back_after"
                    }, r), {}, !0)
                } catch (e) {}
            }
        },
        loginNew: function(e, a, n, t) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=" + t + "&resultcode=0&username=" + e + "&userid=" + n + "&usersession=" + a;
            else {
                var o = {
                    resultcode: 0
                };
                o.username = e,
                o.userid = n,
                o.usersession = a,
                o.pagename = t,
                o = s()(o),
                window.UnityNative.OnPageResult("login", o)
            }
        },
        checkphone: function(e) {
            return /^[1-9]\d*$/.test(e)
        },
        checkphone1: function(e) {
            return /^[\d +-]+$/.test(e)
        },
        checkcode: function(e) {
            return /^\d{6}$/.test(e)
        },
        passwordTest: function(e) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(e)
        },
        checkpassword: function(e) {
            return !!e.match(/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,}$/)
        },
        checkemail: function(e) {
            return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(e)
        },
        checkMoontonAccount: function(e) {
            return /^[a-zA-Z]([_a-zA-Z0-9]{5,19})$/.test(e)
        },
        setAccountId: function(e) {},
        quickregist: function(e, a, n) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=quickcreate&resultcode=0&username=" + e + "&userid=" + n + "&usersession=" + a;
            else {
                var t = {
                    resultcode: 0
                };
                t.username = e,
                t.userid = n,
                t.usersession = a,
                t.pagename = "quickcreate",
                t = s()(t),
                window.UnityNative.OnPageResult("quickcreate", t)
            }
        },
        phoneregist: function(e, a, n) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=phoneregist&resultcode=0&username=" + e + "&userid=" + n + "&usersession=" + a;
            else {
                var t = {
                    resultcode: 0
                };
                t.username = e,
                t.userid = n,
                t.usersession = a,
                t.pagename = "phoneregist",
                t = s()(t),
                window.UnityNative.OnPageResult("phoneregist", t)
            }
        },
        changeEmail: function(e) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=changeemail1&userid=''&usersession=''&resultcode=0&username=" + e;
            else {
                var a = {
                    resultcode: 0
                };
                a.username = e,
                a.pagename = "changeemail1",
                a.userid = "",
                a.usersession = "",
                a = s()(a),
                window.UnityNative.OnPageResult("changeemail1", a)
            }
        },
        bewp: function(e, a, n) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=bindemailwithphone&userid=" + n + "&usersession=" + a + "&resultcode=0&username=" + e;
            else {
                var t = {
                    resultcode: 0
                };
                t.username = e,
                t.pagename = "bindemailwithphone",
                t.userid = n,
                t.usersession = a,
                t = s()(t),
                window.UnityNative.OnPageResult("bindemailwithphone", t)
            }
        },
        bpwe: function(e, a) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=bindphonewithemail&userid=" + a + "&usersession=''&resultcode=0&username=" + e;
            else {
                var n = {
                    resultcode: 0
                };
                n.username = e,
                n.pagename = "bindphonewithemail",
                n.userid = a,
                n.usersession = "",
                n = s()(n),
                window.UnityNative.OnPageResult("bindphonewithemail", n)
            }
        },
        newphone: function(e, a) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=newphone&userid=" + a + "&usersession=''&resultcode=0&username=" + e;
            else {
                var n = {
                    resultcode: 0
                };
                n.username = e,
                n.pagename = "newphone",
                n.userid = a,
                n.usersession = "",
                n = s()(n),
                window.UnityNative.OnPageResult("newphone", n)
            }
        },
        changeEmail2: function(e) {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=changeemail2&userid=''&usersession=''&resultcode=0&username=" + e;
            else {
                var a = {
                    resultcode: 0
                };
                a.username = e,
                a.pagename = "changeemail2",
                a.userid = "",
                a.usersession = "",
                a = s()(a),
                window.UnityNative.OnPageResult("changeemail2", a)
            }
        },
        closeEmailSended: function() {
            if (this.isIos())
                window.location.href = "UnityNative://OnPageResult?pagename=changeemail&userid=''&usersession=''&resultcode=0&username=''";
            else {
                var e = {
                    resultcode: 0
                };
                e.username = "",
                e.pagename = "changeemail",
                e.userid = "",
                e.usersession = "",
                e = s()(e),
                window.UnityNative.OnPageResult("changeemail", e)
            }
        },
        b64DecodeUnicode: function(e) {
            return decodeURIComponent(atob(e).split("").map(function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
            }).join(""))
        },
        b64EncodeUnicode: function(e) {
            return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, a) {
                return String.fromCharCode("0x" + a)
            }))
        },
        getPhonePre: function(e) {
            var a = e.split(";")
              , n = [];
            return a.map(function(e) {
                var a = {};
                a.country = e.split(",")[0],
                a.phone = e.split(",")[1],
                n.push(a)
            }),
            n
        },
        codeErrorToast: function(e, a) {
            var n = localStorage.getItem("language") || "en"
              , t = r.a[n][e] || "Service Error (" + e + ")";
            1005 == e && (t = a),
            this.Hub.$emit("showtoast", t)
        },
        getUrlParams: function(e) {
            var a = window.location.search
              , n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , t = a.substr(1).match(n);
            return null != t ? unescape(t[2]).split("#")[0] : null
        },
        hidephone: function(e) {
            var a = /(\d{3})\d*(\d{4})/;
            return e.replace(a, "$1****$2")
        },
        desensiEmail: function(e) {
            var a = e.split("@")
              , n = a[0]
              , t = a[1];
            return n.slice(0, 5) + "***@" + t
        },
        trim: function(e) {
            return e.replace(/\s*/g, "")
        },
        getCurrentDateTime: function() {
            var e = new Date;
            return e.getFullYear() + "-" + (e.getMonth() + 1).toString().padStart(2, "0") + "-" + e.getDate().toString().padStart(2, "0") + " " + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0")
        },
        getStrStamp: function() {
            return Math.random().toString(36).substring(2)
        }
    }
}
, function(e, a, n) {
    var t = n(0)(n(145), n(418), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    "use strict";
    var t = n(262)
      , o = n.n(t)
      , i = n(193)
      , s = n(62)
      , r = n.n(s);
    o.a.polyfill();
    var c = window.localStorage.getItem("language");
    a.a = {
        email_unbind_phone_confirm: function(e, a, n, t) {
            var o = {
                op: "email_unbind_phone_confirm",
                sign: "",
                params: {
                    email: e,
                    phone: a,
                    email_code: n,
                    guid: t,
                    ntf: localStorage.getItem("ntf") || ""
                }
            };
            return i.a.post(o)
        },
        email_unbind_phone_send_email_code: function(e, a, n, t) {
            var o = {
                op: "email_unbind_phone_send_email_code",
                sign: "",
                params: {
                    email: e,
                    phone: a,
                    guid: n,
                    game_token: t
                }
            };
            return i.a.post(o)
        },
        phone_bind_email_confirm: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = {
                op: "phone_bind_email_confirm",
                sign: "",
                params: e
            };
            return i.a.post(a)
        },
        phone_bind_email: function(e, a, n, t, o, s) {
            var c = {
                op: "phone_bind_email",
                sign: "",
                params: {
                    email: e,
                    phone: a,
                    guid: o,
                    md5pwd: r()(n),
                    custom: t,
                    ntf: localStorage.getItem("ntf") || "",
                    game_token: s
                }
            };
            return i.a.post(c)
        },
        mail_resetpwd_confirm: function(e, a, n, t, o, s) {
            var r = {
                op: "mail_resetpwd_confirm",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    vc: n,
                    new_md5pwd: t,
                    only_check: o,
                    ntf: 0 == o ? localStorage.getItem("ntf") : "",
                    game_token: s
                }
            };
            return i.a.post(r)
        },
        mail_resetpwd: function(e, a, n) {
            var t = {
                op: "mail_resetpwd",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    game_token: n
                }
            };
            return i.a.post(t)
        },
        email_rebind_email_code_final_confirm: function(e, a, n) {
            var t = {
                op: "email_rebind_email_code_final_confirm",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    game_token: n,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(t)
        },
        email_rebind_email_code_final_cancel: function(e, a, n) {
            var t = {
                op: "email_rebind_email_code_final_cancel",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    game_token: n,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(t)
        },
        email_rebind_email_code_second_confirm: function(e, a, n, t, o, s) {
            var r = {
                op: "email_rebind_email_code_second_confirm",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    token: n,
                    email_new: t,
                    token_new: o,
                    ntf: localStorage.getItem("ntf"),
                    game_token: s
                }
            };
            return i.a.post(r)
        },
        email_rebind_email_code_second: function(e, a, n, t, o) {
            var s = {
                op: "email_rebind_email_code_second",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    token: n,
                    email_new: t,
                    game_token: o
                }
            };
            return i.a.post(s)
        },
        email_rebind_email_code_confirm: function(e, a, n, t) {
            var o = {
                op: "email_rebind_email_code_confirm",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    token: n,
                    game_token: t
                }
            };
            return i.a.post(o)
        },
        email_rebind_email_code: function(e, a, n) {
            var t = {
                op: "email_rebind_email_code",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    game_token: n
                }
            };
            return i.a.post(t)
        },
        phone_rebind_email_paasoo_cancel: function(e, a, n) {
            var t = {
                op: "phone_rebind_email_paasoo_cancel",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    game_token: n,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(t)
        },
        phone_rebind_email_paasoo_confirm: function(e, a, n) {
            var t = {
                op: "phone_rebind_email_paasoo_confirm",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    game_token: n,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(t)
        },
        phone_rebind_email_second_confirm_paasoo: function(e, a, n, t, o) {
            var s = {
                op: "phone_rebind_email_second_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    vc: n,
                    email: t,
                    token: o,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(s)
        },
        phone_rebind_email_second_paasoo: function(e, a, n, t) {
            var o = {
                op: "phone_rebind_email_second_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    vc: n,
                    email: t
                }
            };
            return i.a.post(o)
        },
        phone_rebind_email_confirm_paasoo: function(e, a, n) {
            var t = {
                op: "phone_rebind_email_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    vc: n
                }
            };
            return i.a.post(t)
        },
        phone_rebind_email_paasoo: function(e, a) {
            var n = {
                op: "phone_rebind_email_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(n)
        },
        phone_login_confirm_paasoo: function(e, a, n) {
            var t = {
                op: "phone_login_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    vc: a,
                    game_token: n
                }
            };
            return i.a.post(t)
        },
        email_code_login_confirm: function(e, a, n) {
            var t = {
                op: "email_code_login_confirm",
                sign: "",
                params: {
                    email: e,
                    token: a,
                    game_token: n
                }
            };
            return i.a.post(t)
        },
        phone_resetpwd_paasoo: function(e, a, n) {
            var t = {
                op: "phone_resetpwd_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    game_token: n,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(t)
        },
        phone_resetpwd_confirm_paasoo: function(e, a, n, t, o, s) {
            var r = {
                op: "phone_resetpwd_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    game_token: s,
                    vc: n,
                    new_md5pwd: t,
                    only_check: o,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(r)
        },
        phone_login_paasoo: function(e) {
            var a = {
                op: "phone_login_paasoo",
                sign: "",
                params: {
                    phone: e,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(a)
        },
        email_code_login: function(e) {
            var a = {
                op: "email_code_login",
                sign: "",
                params: {
                    email: e
                }
            };
            return i.a.post(a)
        },
        register: function(e, a, n, t) {
            var o = {
                op: "register",
                sign: "",
                params: {
                    account: e,
                    custom_account: n || "",
                    game_token: t,
                    md5pwd: r()(a),
                    ntf: localStorage.getItem("ntf")
                }
            };
            return o.params.ntf || delete o.params.ntf,
            i.a.post(o)
        },
        login: function(e, a, n, t) {
            var o = {
                op: "login",
                sign: "",
                params: {
                    account: e,
                    md5pwd: r()(a),
                    game_token: n,
                    recaptcha_token: t
                }
            };
            return i.a.post(o)
        },
        reset_pwd_mail: function(e, a) {
            var n = {
                op: "reset_pwd_mail",
                sign: "",
                params: {
                    account: e,
                    game_token: a
                }
            };
            return i.a.post(n)
        },
        reset_pwd: function(e, a, n, t) {
            var o = {
                op: "reset_pwd",
                sign: "",
                params: {
                    account: e,
                    guid: a,
                    token: t,
                    new_md5pwd: r()(n)
                }
            };
            return i.a.post(o)
        },
        create: function(e, a, n, t) {
            var o = {
                op: "create",
                sign: "",
                params: {
                    account: e,
                    md5pwd: a,
                    ext: n,
                    custom_account: t
                }
            };
            return i.a.post(o)
        },
        checkSameAccount: function(e, a) {
            var n = {
                op: "check_custom_account",
                sign: "",
                params: {
                    account: e,
                    game_token: a
                }
            };
            return i.a.post(n)
        },
        registerAccount: function(e, a, n, t) {
            var o = {
                op: "create_custom_account",
                sign: "",
                params: {
                    account: e,
                    md5pwd: r()(a),
                    game_token: t,
                    ntf: localStorage.getItem("ntf"),
                    email: n
                }
            };
            return o.params.ntf || delete o.params.ntf,
            i.a.post(o)
        },
        confirEmail: function(e, a, n, t) {
            var o = {
                op: "custom_confirm_email",
                sign: "",
                params: {
                    account: e,
                    md5pwd: a,
                    ext: n,
                    email: t
                }
            };
            return i.a.post(o)
        },
        confirEmailV2: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = {
                op: e.account ? "custom_confirm_email" : "phone_bind_email_second_confirm_paasoo",
                sign: "",
                params: e
            };
            return i.a.post(a)
        },
        bindEmail: function(e, a, n, t) {
            var o = {
                op: "custom_bind_email",
                sign: "",
                params: {
                    account: e,
                    md5pwd: r()(a),
                    game_token: t,
                    email: n,
                    ntf: localStorage.getItem("ntf")
                }
            };
            return i.a.post(o)
        },
        sendChangeEmail: function(e, a) {
            var n = {
                op: "rebind_email_link",
                sign: "",
                params: {
                    account: e,
                    game_token: a,
                    ntf: localStorage.getItem("ntf"),
                    email: ""
                }
            };
            return n.params.ntf || delete n.params.ntf,
            i.a.post(n)
        },
        cancelChangeEmail: function(e, a) {
            var n = {
                op: "rebind_email_cancel",
                sign: "",
                params: {
                    account: e,
                    game_token: a,
                    ntf: localStorage.getItem("ntf"),
                    email: ""
                }
            };
            return n.params.ntf || delete n.params.ntf,
            i.a.post(n)
        },
        confirmChangeEmail: function(e, a) {
            var n = {
                op: "rebind_email_final_confirm",
                sign: "",
                params: {
                    account: e,
                    game_token: a,
                    ntf: localStorage.getItem("ntf"),
                    email: ""
                }
            };
            return n.params.ntf || delete n.params.ntf,
            i.a.post(n)
        },
        changToThisEmail: function(e, a, n) {
            var t = {
                op: "rebind_email_code",
                sign: "",
                params: {
                    account: e,
                    ext: n,
                    ntf: "",
                    email: a
                }
            };
            return t.params.ntf || delete t.params.ntf,
            i.a.post(t)
        },
        checkNewEmailCode: function(e, a, n, t) {
            var o = {
                op: "rebind_email_confirm",
                sign: "",
                params: {
                    account: e,
                    token: t,
                    ext: n,
                    ntf: "",
                    email: a
                }
            };
            return o.params.ntf || delete o.params.ntf,
            i.a.post(o)
        },
        checkLinkOutDate: function(e, a) {
            var n = {
                op: "rebind_check_link",
                sign: "",
                params: {
                    account: e,
                    ext: a,
                    ntf: "",
                    email: ""
                }
            };
            return n.params.ntf || delete n.params.ntf,
            i.a.post(n)
        },
        sendPhoneRegistCode: function(e, a, n) {
            var t = {
                op: "phone_register_paasoo",
                sign: "",
                params: {
                    phone: e,
                    custom_account: a || "",
                    game_token: n,
                    lang: c,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            t.params.ntf || delete t.params.ntf;
            return i.a.post(t, "/phone_register_paasoo")
        },
        confirmPhoneRegist: function(e, a, n, t, o) {
            var s = {
                op: "phone_register_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    game_token: o,
                    md5pwd: r()(a),
                    vc: n,
                    custom_account: t || "",
                    ntf: localStorage.getItem("ntf")
                }
            };
            s.params.ntf || delete s.params.ntf;
            return i.a.post(s, "/phone_register_paasoo")
        },
        sendBindPhoneCode: function(e, a, n, t) {
            var o = {
                op: "custom_bind_phone_paasoo",
                sign: "",
                params: {
                    account: e,
                    phone: a,
                    game_token: t,
                    md5pwd: r()(n),
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(o)
        },
        confirmBindPhone: function(e, a, n, t, o) {
            var s = {
                op: "custom_bind_phone_confirm_paasoo",
                sign: "",
                params: {
                    account: e,
                    game_token: o,
                    phone: a,
                    md5pwd: r()(n),
                    vc: t
                }
            }
              , c = localStorage.getItem("ntf");
            return c && (s.params.ntf = c),
            i.a.post(s)
        },
        sendOldPhoneCode: function(e, a, n, t, o) {
            var s = {
                op: "phone_rebind_paasoo",
                sign: "",
                params: {
                    custom: e,
                    email: a,
                    guid: n,
                    game_token: o,
                    phone: t,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            s.params.ntf || delete s.params.ntf;
            return i.a.post(s, "/phone_register_paasoo")
        },
        confirmOldPhone: function(e, a, n, t, o, s) {
            var r = {
                op: "phone_rebind_confirm_paasoo",
                sign: "",
                params: {
                    custom: e,
                    email: a,
                    guid: n,
                    game_token: s,
                    phone: t,
                    vc: o,
                    ntf: localStorage.getItem("ntf")
                }
            };
            r.params.ntf || delete r.params.ntf;
            return i.a.post(r, "/phone_register_paasoo")
        },
        sendNewPhoneCode: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = {
                op: "phone_rebind_second_paasoo",
                sign: "",
                params: e,
                sms_type: Number(localStorage.getItem("sms_type"))
            };
            return i.a.post(a, "/phone_register_paasoo")
        },
        confirmNewPhone: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , a = {
                op: "phone_rebind_second_confirm_paasoo",
                sign: "",
                params: e
            }
              , n = localStorage.getItem("ntf");
            n && (a.params.ntf = n);
            return i.a.post(a, "/phone_register_paasoo")
        },
        emailBindPhoneSendEmailCode: function(e, a, n) {
            var t = {
                op: "email_bind_phone_send_email_code",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    game_token: n
                }
            };
            return i.a.post(t)
        },
        emailBindPhoneVerifyEmailCode: function(e, a, n, t) {
            var o = {
                op: "email_bind_phone_verify_email_code",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    email_code: n,
                    game_token: t
                }
            };
            return i.a.post(o)
        },
        emailBindPhoneSendPhoneCode: function(e, a, n, t) {
            var o = {
                op: "email_bind_phone_send_phone_code",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    email_code: n,
                    phone: t,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(o)
        },
        emailBindPhoneConfirm: function(e, a, n, t, o) {
            var s = {
                op: "email_bind_phone_confirm",
                sign: "",
                params: {
                    email: e,
                    guid: a,
                    email_code: n,
                    phone: t,
                    phone_code: o
                }
            }
              , r = localStorage.getItem("ntf");
            return r && (s.params.ntf = r),
            i.a.post(s)
        },
        phoneBindEmailPaasoo: function(e, a, n) {
            var t = {
                op: "phone_bind_email_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    game_token: n,
                    sms_type: Number(localStorage.getItem("sms_type"))
                }
            };
            return i.a.post(t)
        },
        phoneBindEmailConfirmPaasoo: function(e, a, n, t) {
            var o = {
                op: "phone_bind_email_confirm_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    vc: n,
                    game_token: t
                }
            };
            return i.a.post(o)
        },
        phoneBindEmailSecondConfirmPaasoo: function(e, a, n, t, o) {
            var s = {
                op: "phone_bind_email_second_paasoo",
                sign: "",
                params: {
                    phone: e,
                    guid: a,
                    vc: n,
                    email: t,
                    game_token: o
                }
            }
              , r = localStorage.getItem("ntf")
              , c = localStorage.getItem("ext");
            return r && (s.params.ntf = r),
            c && (s.params.ext = c),
            i.a.post(s)
        }
    }
}
, function(e, a, n) {
    var t = n(0)(n(143), n(390), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(276)
    }
    var o = n(0)(n(147), n(404), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(274)
    }
    var o = n(0)(n(144), n(402), t, null, null);
    e.exports = o.exports
}
, , function(e, a, n) {
    function t(e) {
        n(295)
    }
    var o = n(0)(n(146), n(429), t, null, null);
    e.exports = o.exports
}
, , , , , function(e, a, n) {
    "use strict";
    n.d(a, "a", function() {
        return t
    }),
    n.d(a, "b", function() {
        return o
    });
    var t = "https://akmweb.youngjoygame.com/web/common/mlbb_logo_400x147.png"
      , o = "https://akmweb.youngjoygame.com/web/common/moonton_logo_100x83.png"
}
, , , function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA/CAYAAACmVEtSAAAAAXNSR0IArs4c6QAADeVJREFUaEPVWltzVNeVXvtyzunTV3W3upGEhEAgcREYTGxwxsVlMMF2JlV+4mHmcf7EPI7nryQ4VY4fZkxSeGJ7ZhwSjxPiCzYCGwnETUioG6nVpy/nnH1N7ZaatES3BJIIgSqqVUets79vrW+tvfZaG8EL/g+94Pjh+RDQ+snWRUivZeAne9Fab1nr908KuNN7ViHy7Am0Af/uf6zu+Xf/Hdpbvg2RZ0NgBehWwFf3fbDmmqPXzj4i8BiZFSTWfNla6lj2+xbgnUAXr+VWXTO3r/gIfJPIMhLPjEAb8E1rN0FXphPoRz9a3STjM5UGgSaRtUhsjgeWwDet3gp8pDfRWKM04zY+qxm77ZrxeaYnp309VJpUxdG/eskQeYxEixc2TqAF/ErgraD9+anGWrmks2zNohc2LO7O+TqeHdTVORvFs0yne31tvNHqiXZSWj+BNlZvSiUHeVydu4NgeBj8eYpyyRkUeIuWD6vWsjWdONeRMtOTNVsMHXSdkThPeWXFHsw75SIUVFNOnbywPgIrwH8Gn2GzkJHLvTCFm9ZOQAKHsUXAqShFYbXU+Jn7FFmu0J7PjfWFsX5vf092Z7/IJ+II3Zq2Cj9ciz2MP/hGGDm19cKSjJ6egNaoVevG6ga4kYvRtwHfBJ6qUVSFSoNcPEKXrWUHQlfqQjtRrgdysXT/FjjkupCdrcHlQjF2o1gEZmLCBH1TSsYLj2T01ATaSGby0yFsFrg3VsB+dm9DKuXpGE7FKQpdgurzVRx3CeIOQSKsPiJAg7gmyhZOpooHUnpoex96LRFRqbkajP8wpS59M0Zn804Bm5hojYX1E2gTqOnSEG5aPS6K2Gg8Ai42wB1dxXVt46hTRSIgSDCCIjZuEKh7VJC0LUAsRIe76fDQVn0iHtF7ynX01a0pOD81wWeKqV4NcBvcTL8ecMpqYx5YAb5VMkUo4KZcSM0nRiYGuO35WBir2xhZVYbNJ7VcHXClGcyrDGQiI9v5vsGceicRgd1eHS6NF+ivr99jVyGTDeXdOk311VSV5tTGCLQB38gwGRst3Cri7j02isy42OgcO5xEwwwKwMfIEkRwjKSFkcMxUjxAzIpxBlz12tC9o08f2Z7XZ+IRNFyu6Rs3ZtC5yYfqUonFw4GY0LOzAIaASbEjvQn59B5o2VXPfvBBIwiN5Q14Y3WTyyMyhsuqgrEfI1GHoErICAUL02iIwzrFFBiWFCMilA4AC/OOmGX17Noqfzzcp95xLTjo1fXl8Wnr5zdmrT889MoLyajJTl06KIZq/QTaWN2UAEOnXVS8tigZo/WG1QNO7KSNA7AwYoJgKogtMAq4JMqKoijVOvABMFU6E8dbt+XlmYFu9XbCRcN1BncnH+BzN+/Bf/l2vIB9nzT2CQiVrLpy/RJaImAsb6xuwOf3L+b2Bvici6HiE6N1HDJigIMtCIUEDniVkAjFSi4GrOZEOjHu9KXpyEA3PpWNi9OurYd9pmfuP0Tnbk7r89MSbkU8pmxkY+3YcjUCH5w929jYoGMp0cb6bqafrATvBS5J2iGpNaxuE+CCICoJAYKVRIgL3SgPoi6K7eohe7bl4c1kVL9JkNwSCijOzKnfXL8P50rz6npguzplSy0qXBkCyq3JoJhQLD4vm1molJ5sAH8iAmaTMjVNq+ZbLS/KkoIjCLIcIrWiSEgCxCJMSkIJRiwEEIBxb4om9w2gg/158k9RWx3VoHKMq3rRUxeuT8G5+yX7si9UmIpSLOpC1YGKZMSXIQqU9iOyAhWVg7wy5USzoFu5iTWc8ai4XWF9k+dNWWByPHgpAhGfNC1vgJv/SmuKJCUaNBUgsB8qhRQlO7bYW4/ucV7ZksanbEsfVlKluZD1UlX9/40H/P2JB/r3C3OkQqMMuxaVmluySQACV0KyLE0GemoCzRLB1DYm40yVyyTRF8Mmx2MnSqJaNIA3wWuwKZKEKMFRCABKaXdHjmz7x5fiRwdy9A2l1QGplCOV5OWaHJuY4r+8dkdfXAjFHKWaM+FoxbjEcSwUCyQGLOKQUFPlsuzasbgHGPksK+Q6HmiWahwjn6b16XyZIDcgJlVKkFSCohoc6oCigoClw4CCoqROtHYVdffvsPYeP5g60ZfGx5TSg1woh0spqgGfuDHNLnwxzi7M1+AuFlo7lMgQDHAu7QxwUiWioX+cUKw2L431TRnRJNBOPo9JyHigaX2T7+1YhjR2WAMYYtSQoBQsIQJLhzZlVBHGANIxq+vVkejLr+9PHO/L2K8KKQdCLokGqaq+nJ247//2T9+H5++V0ISGgGFia0qBhyEWCEJBAAsCiwSM/kUmJZs78Ek42QjgBoFVD/VLHjAETOYx2i96KZKL+CQIwDLWtxrgkYUENRkIE4Ts3m4rd2w0cfjY/tSZdIIeDplMh1xiAAUBE96tB8HF343Vzo9Ps69YCHUrihACLBYJhML87NiaVzARIqjIXNKR1VsLys+6crXgbcbuoyB+912NjXxMhWny/qJ84kQqRnmorciS9WtVbTGliOsge3R7rPf0y+ljBwbjZ+JRsi8MRTzkEpRWIKX07xaD7y58Vf7V2GTtzwLAIyCVRSKSAxe2o5iQmuM6Fk634lUPCxlzZVM+zezzKHWuyP+rEkj0VYhJnQIENfIJrYTFubJCXiWBB7Q7G4mdPJDd+cbh9ImhfORExEF7Qq4iAROgQYOUSs6UgqsXr3gXPrvi/a7GeJEShACQsICyBgFQTFDNLRHjroN4FdtC+9XH5NNJ+x0JmAAen6kQo38lOU0oSUOGLBO8Ya3q9HTHsj87kh05+VL3sXyX/ROM0QDjgjKhQCoFWmlWWAim/3i98tHFKwufTHlslnCiqCPNTsc1p0wKxO2IZkIAD8AXlpPgpIVAYayshk4vZp9O2l9OoCUDwbVRAskyKXohoZEEcZf0X65T3J8jmX99o/fI0d3pt5Mu/QeEoEdrjblUIKSJNQVejRe+uVn59OPLpf8Zu1ufxFoz17JAghDU0mw5gToPAIloKsoWyrbIJcvSlND+/NRy/a/ZWlyFQI6CVa4qWlnAaO+g1ftv/7zzzI587F8QglEAwKZmkIaAUgBawVyF3/3DtdL7F/5U+vxeIVggGMuYS9RzI7DMAymSOXu8+8jxA9mfdiedhgfMbm6kw4UCrRVUAl68ervyvx9/7X16edK7obRmlmUBeqYeMHl2KQt1igHBwSII2/EIzZ45kh556+X88b6scxojNKC0asSAENLEAZv3wgdf3vT++5OvFj6+PcseUIxlawyYII5QK9y8GGghYNJopyyETBZiQOOxSOz10a5dP32l+8TOvvhx10Z7hBSReigbUlJSyqLHvv+/bxcufPJ16bO6Lws08jfKQmvtA0Joi9UVwQ6yd2+P9b51OHv88FD8TFeM7AuFjNUCCVxI0EoE9+fZd+f/WPrVtzeDSwKER4AoYiklleabvg/A0+7EILCLkJ1NWrnXRxOHTx/KvNmdpIcZl111JrGUhojybs/WP//068qH303VvwRBa64jMAckbMdmm7oTtxIwjarmXtCxFgKbMrlYC3VFcPrIaNehE6OJEwN561Wl1IDPJOZS6nrICzfuB7/9fKz64Z15Oq7DgOHoM6yFnroapZQIqTUh1N3fH9l78mDi5GDeOgagtoVMOaE5CIRifGI6/OiLH8IL0yV2lwJVK6tR9dCXJI3EhqtRs8Nt5Dywy5wHDiVfG+yxTiGkDkipHSYE92r82vh9/t7YJLs458PDZ3IeaJStS0fK9ZzIZKgUIE2398T6Xh1xX+nPklMRGw4L2ahQ66Wq+GJiRr7//X1xccEnFdN62bwTWaONsNi43eiZmADGuTSkdg84Lw3m0M8SLjpizsQhk/WiJz+6Ni3P3Z5Hl31PhJmuBBJIqHpto2fiJQKtXjAH+/V0Jczx0nR44pYTNV2JwTx+K53Qb1Ks8j6TDx+U4Dffz+BzcxX2Q8BdnQqlFrDYlWi2VdbXlWgh8SR9IaUb9Rk2bZVOfaFEjDv5FN29tRuf2pJWbzhUjYRcT9+bh/cmZuiH0wG/lWC2RCEjG+8LdfDCY525nIurRdOZixI76bftzNlWFOGWzlyXq/q396Iz/d367WQUTGfuzp0CvDd+G/+nJ0XRAafRwmxtbP3d9UZdjHqHB/SPd/Wgd6KOPlhn8M1kAf/i6l3n96Y36qIINpMbczJLkY00d5unhU3oTlt11rCs6U6TsKy7EtHs9h44uqNH/STmwkjVh4nJGXRufFZdKixw1hfluhzL6M0h0EFSzZHSeucDKR5z9+wk+wZz8p1EFEbqAfx58j78empajc1v6nyggyfM45UTmrKMYTMTMxMa02k2YyXTdg88v+GBlRMa4Xux3VvJ8I68PNEVhT1eiL68WYDzU1c2e0LThoR51OxgdJqRmfa7mUa2zsiSkGq8rR7IZTOygR70WjKqUl4Nxq8+kxnZowbqXze7JomVIyfzfK0pJQ8IikGomlPKXC6W3rEFDsVdyC546NuJu+GNip8ON3dKuYJEc8Nr1k7m82nmxOb7PvimEyDgNsDQ3lRmW7/IZ+IITRVk8cp32eKzmROvIqmNTuqPHnQdB/OU4M96Ut/BG+u5K2FeZTasv/1diVUk1em2SqebKuZVz++2ygpJtcbGi3NfaBUSzWzV/Mrf742tNpJqPnpx7sy1kmjjlXaE2v3J87+1uBLVC31v9Am90u5r7UZKK7/39Bee2q70/B6+8AT+ArNzsvS/SATsAAAAAElFTkSuQmCC"
}
, , , , , , , function(e, a, n) {
    e.exports = n.p + "static/img/1@3x.5780075.png"
}
, , , , , , , , function(e, a, n) {
    function t(e) {
        n(308)
    }
    var o = n(0)(n(137), n(445), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(266)
    }
    var o = n(0)(n(139), n(391), t, null, null);
    e.exports = o.exports
}
, , , , , , , , , , , , , , , , function(e, a, n) {
    "use strict";
    var t = n(198)
      , o = n(195)
      , i = n(194)
      , s = n(196)
      , r = n(197)
      , c = n(199)
      , d = n(200)
      , l = n(201)
      , u = n(202)
      , m = n(203)
      , h = n(204)
      , g = n(206)
      , p = n(207)
      , _ = n(208)
      , f = n(209)
      , v = n(210)
      , A = n(211)
      , w = n(213)
      , b = n(214)
      , k = n(215)
      , T = n(216)
      , y = n(217)
      , S = n(212)
      , M = n(205);
    a.a = {
        en: t.a,
        cn: o.a,
        ar: i.a,
        cs: s.a,
        de: r.a,
        es: c.a,
        fr: d.a,
        hu: l.a,
        id: u.a,
        it: m.a,
        ja: h.a,
        ko: g.a,
        ms: p.a,
        my1: _.a,
        my2: f.a,
        pt: v.a,
        ro: A.a,
        th: w.a,
        tl: b.a,
        tr: k.a,
        tw: T.a,
        vi: y.a,
        ru: S.a,
        kh: M.a
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , function(e, a, n) {
    var t = n(0)(n(138), n(414), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    var t = n(0)(n(140), n(399), null, null, null);
    e.exports = t.exports
}
, , , , , , function(e, a, n) {
    "use strict";
    var t = n(48)
      , o = {
        cn: {
            1001: "邮箱已被注册",
            1002: "邮箱格式错误",
            1003: "系统错误，请稍后再试",
            1004: "邮箱未注册沐瞳账号",
            1005: "您输入的密码错误（您今天还有xxx次输入密码的机会）",
            1006: "邮箱未注册沐瞳账号",
            1007: "新密码不能和原密码相同",
            1008: "系统错误，请稍后再试",
            1009: "系统错误，请稍后再试",
            1010: "系统错误，请稍后再试",
            1011: "连接已失效，请前往游戏重新获取连接。谢谢。",
            1012: "系统错误，请稍后再试",
            1013: "系统错误，请稍后再试",
            1014: "连接已失效，请前往游戏重新获取连接。谢谢。",
            1015: "系统错误，请稍后再试1015",
            1016: "您今日已经达到输错密码上限（5次），请明天再试，谢谢。",
            1017: "系统错误，请稍后再试",
            1018: "系统错误，请稍后再试",
            1029: "" + t.a.cn.message.registed,
            1020: "" + t.a.cn.message["phone code wrong"],
            1030: "" + t.a.cn.message["binded email"],
            1031: "" + t.a.cn.message["E-Mail format error"],
            1032: "" + t.a.cn.message["E-Mail format error"],
            1034: "" + t.a.cn.message["wrong code"],
            1035: "" + t.a.cn.message["outdata link"],
            1036: "" + t.a.cn.message.dofrequent,
            1037: "" + t.a.cn.message["binded phone"],
            1038: "" + t.a.cn.message["phone error"],
            1039: "" + t.a.cn.message["unbinded phone"],
            1040: "" + t.a.cn.message["zhanyong phone"],
            1048: "该邮箱已在换绑流程中，请选择其他邮箱",
            1055: "该自定义昵称已存在，请重新输入"
        },
        en: {
            1001: "This email has already been taken",
            1002: "Mail format error",
            1003: "System error, please try again later ",
            1004: "The email adress is not recognized as a Moonton Account",
            1005: "Incorrect password (You have xxx attempts left today)",
            1006: "The email adress is not recognized as a Moonton Account",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "The link has expired, please request a new link in-game. Thank you",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "The link has expired, please request a new link in-game. Thank you",
            1015: "System error, please try again later ",
            1016: "You have entered your password incorrectly too many times for today (5 times), please try again tomorrow, thank you.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.en.message["phone code wrong"],
            1029: "" + t.a.en.message.registed,
            1030: "" + t.a.en.message["binded email"],
            1031: "" + t.a.en.message["E-Mail format error"],
            1032: "" + t.a.en.message["E-Mail format error"],
            1034: "" + t.a.en.message["wrong code"],
            1035: "" + t.a.en.message["outdata link"],
            1036: "" + t.a.en.message.dofrequent,
            1037: "" + t.a.en.message["binded phone"],
            1038: "" + t.a.en.message["phone error"],
            1039: "" + t.a.en.message["unbinded phone"],
            1040: "" + t.a.en.message["zhanyong phone"],
            1048: "This email is in the process of being connected to an account already. Please use a different email.",
            1055: "The custom name is already taken. Please use another one."
        },
        fr: {
            1001: "L'e-mail a déjà été enregistré",
            1002: "Erreur de format de messagerie",
            1003: "Erreur Système, veuillez réésayer plus tard ",
            1004: "L'adresse e-mail n'a pas encore été enregistrée avec un compte Moonton",
            1005: "Le mot de passe que vous avez entré est incorrect(il vous reste xxx tentatives aujourd'hui)",
            1006: "L'adresse e-mail n'a pas encore été enregistrée avec un compte Moonton",
            1007: "Le nouveau mot de passe ne peut pas être identique à celui existant",
            1008: "Erreur Système, veuillez réésayer plus tard ",
            1009: "Erreur Système, veuillez réésayer plus tard ",
            1010: "Erreur Système, veuillez réésayer plus tard ",
            1011: "Le lien a expiré, veuillez demander un nouveau lien en jeu. Nous vous en remercions.",
            1012: "Erreur Système, veuillez réésayer plus tard ",
            1013: "Erreur Système, veuillez réésayer plus tard ",
            1014: "Le lien a expiré, veuillez demander un nouveau lien en jeu. Nous vous en remercions.",
            1015: "Erreur Système, veuillez réésayer plus tard ",
            1016: "Vous avez entré un mauvais mot de passe trop souvent (5 fois), réessayez demain, merci.",
            1017: "Erreur Système, veuillez réésayer plus tard ",
            1018: "Erreur Système, veuillez réésayer plus tard ",
            1020: "" + t.a.fr.message["phone code wrong"],
            1029: "" + t.a.fr.message.registed,
            1030: "" + t.a.fr.message["binded email"],
            1031: "" + t.a.fr.message["E-Mail format error"],
            1032: "" + t.a.fr.message["E-Mail format error"],
            1034: "" + t.a.fr.message["wrong code"],
            1035: "" + t.a.fr.message["outdata link"],
            1036: "" + t.a.fr.message.dofrequent,
            1037: "" + t.a.fr.message["binded phone"],
            1038: "" + t.a.fr.message["phone error"],
            1039: "" + t.a.fr.message["unbinded phone"],
            1040: "" + t.a.fr.message["zhanyong phone"],
            1048: "Cette adresse de messagerie est déjà en train dêtre liée à un compte. Veuillez en utiliser une autre.",
            1055: "Ce pseudo est déjà pris. Veuillez en choisir un autre."
        },
        es: {
            1001: "La dirección de correo electrónico aún no se ha registrado con una cuenta Moonton",
            1002: "Error de formato de correo",
            1003: "Error del sistema, favor volver a intentar más tarde ",
            1004: "La dirección de correo electrónico aún no se ha registrado con una cuenta Moonton",
            1005: "La contraseña que has ingresado es incorrecta(Tienes xxx intentos restantes hoy)",
            1006: "La dirección de correo electrónico aún no se ha registrado con una cuenta Moonton",
            1007: "La nueva contraseña no puede ser igual a la de antes ",
            1008: "Error del sistema, favor volver a intentar más tarde ",
            1009: "Error del sistema, favor volver a intentar más tarde ",
            1010: "Error del sistema, favor volver a intentar más tarde ",
            1011: "El enlace ha caducado, solicite un nuevo enlace en el juego. Gracias",
            1012: "Error del sistema, favor volver a intentar más tarde ",
            1013: "Error del sistema, favor volver a intentar más tarde ",
            1014: "El enlace ha caducado, solicite un nuevo enlace en el juego. Gracias",
            1015: "Error del sistema, favor volver a intentar más tarde ",
            1016: "Has ingresado la contraseña incorrecta demasiadas veces por hoy (5 veces), intenta nuevamente mañana, gracias.",
            1017: "Error del sistema, favor volver a intentar más tarde ",
            1018: "Error del sistema, favor volver a intentar más tarde ",
            1020: "" + t.a.es.message["phone code wrong"],
            1029: "" + t.a.es.message.registed,
            1030: "" + t.a.es.message["binded email"],
            1031: "" + t.a.es.message["E-Mail format error"],
            1032: "" + t.a.es.message["E-Mail format error"],
            1034: "" + t.a.es.message["wrong code"],
            1035: "" + t.a.es.message["outdata link"],
            1036: "" + t.a.es.message.dofrequent,
            1037: "" + t.a.es.message["binded phone"],
            1038: "" + t.a.es.message["phone error"],
            1039: "" + t.a.es.message["unbinded phone"],
            1040: "" + t.a.es.message["zhanyong phone"],
            1048: "Este correo electrónico ya está conectado a otra cuenta. Por favor, usa un correo electrónico diferente.",
            1055: "El nombre personalizado ya existe. Por favor, usa otro."
        },
        de: {
            1001: "E-Mail wurde bereits registriert",
            1002: "Ungültiges Mail Format",
            1003: "System error, please try again later ",
            1004: "E-Mail Adresse muss noch mit einem Moonton Account registriert werden",
            1005: "Das eingegebene Passwort ist falsch. (Du hast heute noch xxx Versuche übrig)",
            1006: "E-Mail Adresse muss noch mit einem Moonton Account registriert werden",
            1007: "Das Neue Passwort kann nicht das gleiche wie das aktuelle Passwort sein",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "Der Link ist nicht mehr gültig, bitte fordere im Spiel einen Neuen an.Danke.",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "Der Link ist nicht mehr gültig, bitte fordere im Spiel einen Neuen an.Danke.",
            1015: "System error, please try again later ",
            1016: "Du hast dein Passwort für heute zu oft falsch eingegeben (5 mal), bitte versuche es Morgen erneut.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.de.message["phone code wrong"],
            1029: "" + t.a.de.message.registed,
            1030: "" + t.a.de.message["binded email"],
            1031: "" + t.a.de.message["E-Mail format error"],
            1032: "" + t.a.de.message["E-Mail format error"],
            1034: "" + t.a.de.message["wrong code"],
            1035: "" + t.a.de.message["outdata link"],
            1036: "" + t.a.de.message.dofrequent,
            1037: "" + t.a.de.message["binded phone"],
            1038: "" + t.a.de.message["phone error"],
            1039: "" + t.a.de.message["unbinded phone"],
            1040: "" + t.a.de.message["zhanyong phone"],
            1048: "Diese E-Mail ist bereits mit einem Account verbunden. Bitte verwende eine andere E-Mail.",
            1055: "Der benutzerdefinierte Name ist bereits vergeben. Bitte verwende einen anderen."
        },
        pt: {
            1001: "E-mail já foi registrado",
            1002: "Erro no formato do e-mail",
            1003: "System error, please try again later ",
            1004: "O endereço de e-mail ainda não foi registrado com uma conta Moonton",
            1005: "A senha que você inseriu está incorreta(você tem xxx tentativas restante hoje)",
            1006: "O endereço de e-mail ainda não foi registrado com uma conta Moonton",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "O link expirou, por favor solicite um novo link no jogo. Obrigado.",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "O link expirou, por favor solicite um novo link no jogo. Obrigado.",
            1015: "System error, please try again later ",
            1016: "Você digitou sua senha incorretamente muitas vezes por hoje (5 vezes), tente novamente amanhã, obrigado.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.pt.message["phone code wrong"],
            1029: "" + t.a.pt.message.registed,
            1030: "" + t.a.pt.message["binded email"],
            1031: "" + t.a.pt.message["E-Mail format error"],
            1032: "" + t.a.pt.message["E-Mail format error"],
            1034: "" + t.a.pt.message["wrong code"],
            1035: "" + t.a.pt.message["outdata link"],
            1036: "" + t.a.pt.message.dofrequent,
            1037: "" + t.a.pt.message["binded phone"],
            1038: "" + t.a.pt.message["phone error"],
            1039: "" + t.a.pt.message["unbinded phone"],
            1040: "" + t.a.pt.message["zhanyong phone"],
            1048: "Este e-mail já está em processo de conexão com uma conta. Use um email diferente.",
            1055: "O nome personalizado já está sendo usado. Por favor, use outro."
        },
        ru: {
            1001: "Такой адрес электронной почты уже зарегистрирован",
            1002: "Ошибка почтового формата",
            1003: "Системная ошибка 1003, попробуйте позже",
            1004: "Адрес электронной почты еще не зарегистрирован в учетной записи Moonton",
            1005: "Введенный Вами пароль неверен (Осталось xxx попытки сегодня)",
            1006: "Адрес электронной почты еще не зарегистрирован в учетной записи Moonton",
            1007: "Новый пароль не может совпадать со старым паролем",
            1008: "Системная ошибка 1008, попробуйте позже",
            1009: "Системная ошибка 1009, попробуйте позже",
            1010: "Системная ошибка 1010, попробуйте позже",
            1011: "Ссылка не работает, пожалуйста, запросите новую ссылку в игре. Спасибо",
            1012: "Системная ошибка 1012, попробуйте позже",
            1013: "Системная ошибка 1013, попробуйте позже",
            1014: "Ссылка не работает, пожалуйста, запросите новую ссылку в игре. Спасибо",
            1015: "Системная ошибка 1015, попробуйте позже",
            1016: "Вы ввели пароль неверно слишком много раз сегодня (5 раз), попоробуйте завтра. Спасибо",
            1017: "Системная ошибка 1017, попробуйте позже",
            1018: "Системная ошибка 1018, попробуйте позже",
            1020: "" + t.a.ru.message["phone code wrong"],
            1029: "" + t.a.ru.message.registed,
            1030: "" + t.a.ru.message["binded email"],
            1031: "" + t.a.ru.message["E-Mail format error"],
            1032: "" + t.a.ru.message["E-Mail format error"],
            1034: "" + t.a.ru.message["wrong code"],
            1035: "" + t.a.ru.message["outdata link"],
            1036: "" + t.a.ru.message.dofrequent,
            1037: "" + t.a.ru.message["binded phone"],
            1038: "" + t.a.ru.message["phone error"],
            1039: "" + t.a.ru.message["unbinded phone"],
            1040: "" + t.a.ru.message["zhanyong phone"],
            1048: "Этот адрес электронной почты уже находится в процессе смены привязки к аккаунту. Пожалуйста, используйте другой.",
            1055: "Пользовательское имя уже занято. Пожалуйста, используйте другое."
        },
        ja: {
            1001: "使用されているメールアドレスです",
            1002: "メールフォームを確認してください。",
            1003: "システムエラー、再度お試しください。 ",
            1004: "使用していないメールアドレスです",
            1005: "パスワードが違います（本日殘りxxx回）",
            1006: "使用していないメールアドレスです",
            1007: "新しいパスワードは、以前のパスワードと同じものに設定できません",
            1008: "システムエラー、再度お試しください。 ",
            1009: "システムエラー、再度お試しください。",
            1010: "システムエラー、再度お試しください。 ",
            1011: "無効なリンクです。再度ゲーム內で申請してください。",
            1012: "システムエラー、再度お試しください。 ",
            1013: "システムエラー、再度お試しください。 ",
            1014: "無効なリンクです。再度ゲーム內で申請してください。",
            1015: "システムエラー、再度お試しください。 ",
            1016: "パスワードを5回間違いました。明日再度お試しください。",
            1017: "",
            1018: "システムエラー、再度お試しください。 ",
            1020: "" + t.a.ja.message["phone code wrong"],
            1029: "" + t.a.ja.message.registed,
            1030: "" + t.a.ja.message["binded email"],
            1031: "" + t.a.ja.message["E-Mail format error"],
            1032: "" + t.a.ja.message["E-Mail format error"],
            1034: "" + t.a.ja.message["wrong code"],
            1035: "" + t.a.ja.message["outdata link"],
            1036: "" + t.a.ja.message.dofrequent,
            1037: "" + t.a.ja.message["binded phone"],
            1038: "" + t.a.ja.message["phone error"],
            1039: "" + t.a.ja.message["unbinded phone"],
            1040: "" + t.a.ja.message["zhanyong phone"],
            1048: "このメールアドレスは既にアカウントに連携されています。恐れ入りますが、別のメールアドレスをご使用ください。",
            1055: "その名前は既に使用されています。別のものをお使いください。"
        },
        ko: {
            1001: "이 이메일은 이미 등록되었습니다",
            1002: "메일 형식 오류",
            1003: "시스템 오류, 다시 시도해주세요 ",
            1004: "이메일 주소가 Moonton 계정으로 인식되지 않습니다.",
            1005: "잘못된 암호 (오늘 남은 시도는 xxx번입니다.)",
            1006: "이메일 주소가 Moonton 계정으로 인식되지 않습니다.",
            1007: "새 비밀번호는 현재 비밀번호와 같을 수 없습니다",
            1008: "시스템 오류, 다시 시도해주세요 ",
            1009: "시스템 오류, 다시 시도해주세요 ",
            1010: "시스템 오류, 다시 시도해주세요 ",
            1011: "링크가 만료되었습니다. 게임 내에서 새 링크를 요청해주세요, 감사합니다.",
            1012: "시스템 오류, 다시 시도해주세요 ",
            1013: "시스템 오류, 다시 시도해주세요 ",
            1014: "링크가 만료되었습니다. 게임 내에서 새 링크를 요청해주세요, 감사합니다.",
            1015: "시스템 오류, 다시 시도해주세요 ",
            1016: "암호를 너무 많이 잘못 입력하여 로그인이 제한됩니다(5회 실패), 내일 다시 시도해주세요. 감사합니다.",
            1017: "시스템 오류, 다시 시도해주세요 ",
            1018: "시스템 오류, 다시 시도해주세요 ",
            1020: "" + t.a.ko.message["phone code wrong"],
            1029: "" + t.a.ko.message.registed,
            1030: "" + t.a.ko.message["binded email"],
            1031: "" + t.a.ko.message["E-Mail format error"],
            1032: "" + t.a.ko.message["E-Mail format error"],
            1034: "" + t.a.ko.message["wrong code"],
            1035: "" + t.a.ko.message["outdata link"],
            1036: "" + t.a.ko.message.dofrequent,
            1037: "" + t.a.ko.message["binded phone"],
            1038: "" + t.a.ko.message["phone error"],
            1039: "" + t.a.ko.message["unbinded phone"],
            1040: "" + t.a.ko.message["zhanyong phone"],
            1048: "이 이메일은 현재 다른 계정과 연동 과정에 있습니다. 다른 이메일을 사용해주세요.",
            1055: "이 커스텀 이름은 이미 사용중입니다. 다른 이름을 입력해주세요."
        },
        th: {
            1001: "อีเมลได้ถูกใช้แล้ว",
            1002: "อีเมลไม่ถูกต้อง",
            1003: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1004: "อีเมลยังไม่ได้ลงทะเบียนกับ Moonton",
            1005: "รหัสผ่านที่คุณป้อนไม่ถูกต้อง(คุณมีโอกาสเหลืออีก xxx ครั้ง)",
            1006: "อีเมลยังไม่ได้ลงทะเบียนกับ Moonton",
            1007: "รหัสผ่านใหม่ต้องไม่เหมือนกับรหัสผ่านปัจจุบันของคุณ",
            1008: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1009: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1010: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1011: "ลิงก์หมดอายุแล้ว โปรดขอลิงก์ใหม่ในเกมอีกครั้ง",
            1012: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1013: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1014: "ลิงก์หมดอายุแล้ว โปรดขอลิงก์ใหม่ในเกมอีกครั้ง",
            1015: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1016: "คุณป้อนรหัสผ่านไม่ถูกต้องหลายครั้งสำหรับวันนี้ (5 ครั้ง) โปรดลองอีกครั้งในวันพรุ่งนี้ ขอบคุณค่ะ",
            1017: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1018: "ระบบเกิดข้อผิดพลาด โปรดลองอีกครั้งในภายหลัง ",
            1020: "" + t.a.th.message["phone code wrong"],
            1029: "" + t.a.th.message.registed,
            1030: "" + t.a.th.message["binded email"],
            1031: "" + t.a.th.message["E-Mail format error"],
            1032: "" + t.a.th.message["E-Mail format error"],
            1034: "" + t.a.th.message["wrong code"],
            1035: "" + t.a.th.message["outdata link"],
            1036: "" + t.a.th.message.dofrequent,
            1037: "" + t.a.th.message["binded phone"],
            1038: "" + t.a.th.message["phone error"],
            1039: "" + t.a.th.message["unbinded phone"],
            1040: "" + t.a.th.message["zhanyong phone"],
            1048: "อีเมลนี้กำลังอยู่ในกระบวนการผูกกับบัญชีนี้ไว้แล้ว โปรดใช้อีเมลอื่นแทน",
            1055: "ชื่อที่กำหนดมานั้นมีผู้ใช้ไปแล้ว โปรดใช้ชื่ออื่น"
        },
        it: {
            1001: "Questo indirizzo e-mail è già registrato",
            1002: "Errore formato della mail",
            1003: "System error, please try again later ",
            1004: "L'indirizzo e-mail deve essere registrato con un account Moonton",
            1005: "La password che hai inserito non è corretta(ti rimangono xxx tentativi oggi)",
            1006: "L'indirizzo e-mail deve essere registrato con un account Moonton",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "Il link è scaduto, per favore richiedi un nuovo link in-game.Grazie!",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "Il link è scaduto, per favore richiedi un nuovo link in-game.Grazie!",
            1015: "System error, please try again later ",
            1016: "Hai inserito una password sbagliata troppe volte per oggi (5 volte), puoi provare di nuovo domani, grazie.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.it.message["phone code wrong"],
            1029: "" + t.a.it.message.registed,
            1030: "" + t.a.it.message["binded email"],
            1031: "" + t.a.it.message["E-Mail format error"],
            1032: "" + t.a.it.message["E-Mail format error"],
            1034: "" + t.a.it.message["wrong code"],
            1035: "" + t.a.it.message["outdata link"],
            1036: "" + t.a.it.message.dofrequent,
            1037: "" + t.a.it.message["binded phone"],
            1038: "" + t.a.it.message["phone error"],
            1039: "" + t.a.it.message["unbinded phone"],
            1040: "" + t.a.it.message["zhanyong phone"],
            1048: "Questemail è già in fase di elaborazione per essere collegata ad un account. Sei pregato di usare unemail differente.",
            1055: "Il nome personalizzato è già stato preso. Usane un altro."
        },
        tr: {
            1001: "Bu e-posta adresi zaten alınmış.",
            1002: "Mail formatı hatalıdır.",
            1003: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1004: "E-posta adresi bir Moonton Hesabı olarak tanınmıyor",
            1005: "Hatalı Şifre(Bugün için xxx hakkınız kaldı)",
            1006: "E-posta adresi bir Moonton Hesabı olarak tanınmıyor",
            1007: "Yeni şifre, mevcut şifre ile aynı olamaz.",
            1008: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1009: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1010: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1011: "Bağlantı linkinin süresi dolmuştur. Lütfen oyun içinden yeni bir bağlantı talep ediniz. Teşekkür ederiz.",
            1012: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1013: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1014: "Bağlantı linkinin süresi dolmuştur. Lütfen oyun içinden yeni bir bağlantı talep ediniz. Teşekkür ederiz.",
            1015: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1016: "Bugün şifrenizi birçok defa yanlış girdiniz (5 defa), lütfen yarın tekrar deneyin, teşekkürler.",
            1017: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1018: "Sistem hatası, lütfen daha sonra tekrar deneyin ",
            1020: "" + t.a.tr.message["phone code wrong"],
            1029: "" + t.a.tr.message.registed,
            1030: "" + t.a.tr.message["binded email"],
            1031: "" + t.a.tr.message["E-Mail format error"],
            1032: "" + t.a.tr.message["E-Mail format error"],
            1034: "" + t.a.tr.message["wrong code"],
            1035: "" + t.a.tr.message["outdata link"],
            1036: "" + t.a.tr.message.dofrequent,
            1037: "" + t.a.tr.message["binded phone"],
            1038: "" + t.a.tr.message["phone error"],
            1039: "" + t.a.tr.message["unbinded phone"],
            1040: "" + t.a.tr.message["zhanyong phone"],
            1048: "Bu e-posta zaten bir hesaba bağlanma sürecinde. Lütfen farklı bir e-posta kullan.",
            1055: "Bu özel isim zaten alınmış. Lütfen başka bir isim kullan."
        },
        tw: {
            1001: "郵箱已被註冊",
            1002: "郵箱格式錯誤",
            1003: "系統錯誤,請稍後再試",
            1004: "郵箱未註冊沐瞳帳號",
            1005: "您輸入的密碼錯誤（您今天還有xxx次輸入密碼的機會）",
            1006: "郵箱未註冊沐瞳帳號",
            1007: "新密碼不能和原密碼相同",
            1008: "系統錯誤,",
            1009: "系統錯誤,請稍後再試",
            1010: "系統錯誤,請稍後再試",
            1011: "連結已失效，請前往遊戲重新獲取連結。謝謝。",
            1012: "系統錯誤,請稍後再試",
            1013: "系統錯誤,請稍後再試",
            1014: "連結已失效，請前往遊戲重新獲取連結。謝謝",
            1015: "系統錯誤,請稍後再試",
            1016: "您今日已經達到輸錯密碼上限（5次），請明天再試，謝謝。",
            1017: "系統錯誤,請稍後再試",
            1018: "系統錯誤,請稍後再試",
            1020: "" + t.a.tw.message["phone code wrong"],
            1029: "" + t.a.tw.message.registed,
            1030: "" + t.a.tw.message["binded email"],
            1031: "" + t.a.tw.message["E-Mail format error"],
            1032: "" + t.a.tw.message["E-Mail format error"],
            1034: "" + t.a.tw.message["wrong code"],
            1035: "" + t.a.tw.message["outdata link"],
            1036: "" + t.a.tw.message.dofrequent,
            1037: "" + t.a.tw.message["binded phone"],
            1038: "" + t.a.tw.message["phone error"],
            1039: "" + t.a.tw.message["unbinded phone"],
            1040: "" + t.a.tw.message["zhanyong phone"],
            1048: "該郵箱已在換綁流程中，請選擇其他郵箱",
            1055: "該自定義昵稱已存在，請重新輸入。"
        },
        id: {
            1001: "E-mail telah terdaftar",
            1002: "Format email error",
            1003: "System error, mohon coba kembali ",
            1004: "Alamat E-mail belum terdaftar dengan akun Moonton",
            1005: "Kata sandi yang Anda masukkan salah(Anda memiliki sisa xxx kesempatan hari ini)",
            1006: "Alamat E-mail belum terdaftar dengan akun Moonton",
            1007: "Password baru harus berbeda dengan Password lama",
            1008: "Sistem error, mohon coba kembali ",
            1009: "Sistem error, mohon coba kembali ",
            1010: "Sistem error, mohon coba kembali ",
            1011: "Link expired, silahkan request link baru dalam game.",
            1012: "Sistem error, mohon coba kembali ",
            1013: "System error, mohon coba kembali ",
            1014: "Link expired, silahkan request link baru dalam game.",
            1015: "Sistem error, mohon coba kembali ",
            1016: "Anda terlalu banyak memasukkan kata sandi yang salah hari ini (5 kali), silakan coba lagi besok, terima kasih.",
            1017: "Sistem error, mohon coba kembali ",
            1018: "Sistem error, mohon coba kembali ",
            1020: "" + t.a.id.message["phone code wrong"],
            1029: "" + t.a.id.message.registed,
            1030: "" + t.a.id.message["binded email"],
            1031: "" + t.a.id.message["E-Mail format error"],
            1032: "" + t.a.id.message["E-Mail format error"],
            1034: "" + t.a.id.message["wrong code"],
            1035: "" + t.a.id.message["outdata link"],
            1036: "" + t.a.id.message.dofrequent,
            1037: "" + t.a.id.message["binded phone"],
            1038: "" + t.a.id.message["phone error"],
            1039: "" + t.a.id.message["unbinded phone"],
            1040: "" + t.a.id.message["zhanyong phone"],
            1048: "Email sedang dalam proses pengaitan dengan akun lain. Silakan gunakan Email lain.",
            1055: "Nama Custom telah digunakan. Mohon gunakan nama lain."
        },
        hu: {
            1001: "This email has already been taken",
            1002: "Mail format error",
            1003: "System error, please try again later ",
            1004: "The email adress is not recognized as a Moonton Account",
            1005: "Incorrect password (You have xxx attempts left today)",
            1006: "The email adress is not recognized as a Moonton Account",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "The link has expired, please request a new link in-game. Thank you",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "The link has expired, please request a new link in-game. Thank you",
            1015: "System error, please try again later ",
            1016: "You have entered your password incorrectly too many times for today (5 times), please try again tomorrow, thank you.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.hu.message["phone code wrong"],
            1029: "" + t.a.hu.message.registed,
            1030: "" + t.a.hu.message["binded email"],
            1031: "" + t.a.hu.message["E-Mail format error"],
            1032: "" + t.a.hu.message["E-Mail format error"],
            1034: "" + t.a.hu.message["wrong code"],
            1035: "" + t.a.hu.message["outdata link"],
            1036: "" + t.a.hu.message.dofrequent,
            1037: "" + t.a.hu.message["binded phone"],
            1038: "" + t.a.hu.message["phone error"],
            1039: "" + t.a.hu.message["unbinded phone"],
            1040: "" + t.a.hu.message["zhanyong phone"],
            1048: "Ez az e-mail már folyamatban van egy másik fiókkal történő összekapcsolással. Kérjük, használj egy másik e-mail-címet.",
            1055: "The custom name is already taken. Please use another one."
        },
        vi: {
            1001: "Tài khoản e-mail này đã được đăng ký",
            1002: "Lỗi định dạng email",
            1003: "Lỗi hệ thống, vui lòng thử lại ",
            1004: "Tài khoản e-mail này chưa đăng ký tài khoản Moonton",
            1005: "Mật khẩu không khớp(Bạn còn xxx lần nhập mật khẩu)",
            1006: "Tài khoản e-mail này chưa đăng ký tài khoản Moonton",
            1007: "Mật khẩu mới không được trung với mật khẩu cũ",
            1008: "Lỗi hệ thống, vui lòng thử lại ",
            1009: "Lỗi hệ thống, vui lòng thử lại  ",
            1010: "Lỗi hệ thống, vui lòng thử lại  ",
            1011: "Link hiện tại đã hết hiệu lực, hãy trích dẫn một đường link ingame mới. Cảm ơn!",
            1012: "Lỗi hệ thống, vui lòng thử lại  ",
            1013: "Lỗi hệ thống, vui lòng thử lại  ",
            1014: "Link hiện tại đã hết hiệu lực, hãy trích dẫn một đường link ingame mới. Cảm ơn!",
            1015: "Lỗi hệ thống, vui lòng thử lại  ",
            1016: "Bạn đã nhập sai mật khẩu quá quy định (5 lần), hãy thử lại vào ngày mai. Xin cảm ơn!",
            1017: "Lỗi hệ thống, vui lòng thử lại  ",
            1018: "Lỗi hệ thống, vui lòng thử lại  ",
            1020: "" + t.a.vi.message["phone code wrong"],
            1029: "" + t.a.vi.message.registed,
            1030: "" + t.a.vi.message["binded email"],
            1031: "" + t.a.vi.message["E-Mail format error"],
            1032: "" + t.a.vi.message["E-Mail format error"],
            1034: "" + t.a.vi.message["wrong code"],
            1035: "" + t.a.vi.message["outdata link"],
            1036: "" + t.a.vi.message.dofrequent,
            1037: "" + t.a.vi.message["binded phone"],
            1038: "" + t.a.vi.message["phone error"],
            1039: "" + t.a.vi.message["unbinded phone"],
            1040: "" + t.a.vi.message["zhanyong phone"],
            1048: "Email đã đang trong quá trình liên kết với một tài khoản. Hãy dùng một email khác.",
            1055: "Tên tuỳ chọn đã tồn tại. Hãy dùng tên khác."
        },
        ro: {
            1001: "E-mailul a fost deja înregistrat",
            1002: "Mail format error",
            1003: "System error, please try again later ",
            1004: "Adresa de e-maila fost deja înregistrată cu un cont Moonton",
            1005: "Parola introdusă este greșită (Mai ai xxx încercări pe ziua de azi)",
            1006: "Adresa de e-maila fost deja înregistrată cu un cont Moonton",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "The link has expired, please request a new link in-game. Thank you",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "The link has expired, please request a new link in-game. Thank you",
            1015: "System error, please try again later ",
            1016: "Ai introdus parola greșită de prea multe ori astăzi (de 5 ori). Te rugăm să încerci iar mâine. Mulțumim!",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.ro.message["phone code wrong"],
            1029: "" + t.a.ro.message.registed,
            1030: "" + t.a.ro.message["binded email"],
            1031: "" + t.a.ro.message["E-Mail format error"],
            1032: "" + t.a.ro.message["E-Mail format error"],
            1034: "" + t.a.ro.message["wrong code"],
            1035: "" + t.a.ro.message["outdata link"],
            1036: "" + t.a.ro.message.dofrequent,
            1037: "" + t.a.ro.message["binded phone"],
            1038: "" + t.a.ro.message["phone error"],
            1039: "" + t.a.ro.message["unbinded phone"],
            1040: "" + t.a.ro.message["zhanyong phone"],
            1048: "This email is in the process of being connected to an account already. Please use a different email.",
            1055: "The custom name is already taken. Please use another one."
        },
        cs: {
            1001: "Tato e-mailová adresa je již zaregistrována",
            1002: "Chyba formátu mailu",
            1003: "System error, please try again later ",
            1004: "E-mailová adresa musí být ještě zaregistrována s Moonton účtem",
            1005: "Zadané heslo je nesprávné(Dnes máš ještě xxx pokusy)",
            1006: "E-mailová adresa musí být ještě zaregistrována s Moonton účtem",
            1007: "New password cannot be the same as your current password",
            1008: "System error, please try again later ",
            1009: "System error, please try again later ",
            1010: "System error, please try again later ",
            1011: "Lhůta odkazu vypršela, prosím zažádej si ve hře o nový odkaz. Děkuji",
            1012: "System error, please try again later ",
            1013: "System error, please try again later ",
            1014: "Lhůta odkazu vypršela, prosím zažádej si ve hře o nový odkaz. Děkuji",
            1015: "System error, please try again later ",
            1016: "Zadal jsi několikrát špatné heslo (5x), prosíme, zkus to zítra. Děkujeme.",
            1017: "System error, please try again later ",
            1018: "System error, please try again later ",
            1020: "" + t.a.cs.message["phone code wrong"],
            1029: "" + t.a.cs.message.registed,
            1030: "" + t.a.cs.message["binded email"],
            1031: "" + t.a.cs.message["E-Mail format error"],
            1032: "" + t.a.cs.message["E-Mail format error"],
            1034: "" + t.a.cs.message["wrong code"],
            1035: "" + t.a.cs.message["outdata link"],
            1036: "" + t.a.cs.message.dofrequent,
            1037: "" + t.a.cs.message["binded phone"],
            1038: "" + t.a.cs.message["phone error"],
            1039: "" + t.a.cs.message["unbinded phone"],
            1040: "" + t.a.cs.message["zhanyong phone"],
            1048: "This email is in the process of being connected to an account already. Please use a different email.",
            1055: "The custom name is already taken. Please use another one."
        },
        ms: {
            1001: "E-mel ini sudah diambil",
            1002: "Format Mel Ralat",
            1003: "Sistem ralat, sila cuba sebentar lagi ",
            1004: "Alamat E-mel belum didaftarkan ke mana-mana akaun Moonton",
            1005: "Kata laluan salah(Anda masih boleh mencuba xxx kali hari ini)",
            1006: "Alamat E-mel belum didaftarkan ke mana-mana akaun Moonton",
            1007: "Kata laluan baru tidak boleh sama dengan kata laluan kini",
            1008: "Sistem ralat, sila cuba sebentar lagi ",
            1009: "Sistem ralat, sila cuba sebentar lagi ",
            1010: "Sistem ralat, sila cuba sebentar lagi ",
            1011: "Pautan telah luput, sila mohon pautan yang baru di dalam permainan. Terima Kasih",
            1012: "Sistem ralat, sila cuba sebentar lagi ",
            1013: "Sistem ralat, sila cuba sebentar lagi ",
            1014: "Pautan telah luput, sila mohon pautan yang baru di dalam permainan. Terima Kasih",
            1015: "Sistem ralat, sila cuba sebentar lagi ",
            1016: "Anda telah memasukkan kata laluan yang salah terlalu banyak kali untuk hari ini (5 kali), sila cuba pada hari esok, terima kasih.",
            1017: "Sistem ralat, sila cuba sebentar lagi ",
            1018: "Sistem ralat, sila cuba sebentar lagi ",
            1020: "" + t.a.ms.message["phone code wrong"],
            1029: "" + t.a.ms.message.registed,
            1030: "" + t.a.ms.message["binded email"],
            1031: "" + t.a.ms.message["E-Mail format error"],
            1032: "" + t.a.ms.message["E-Mail format error"],
            1034: "" + t.a.ms.message["wrong code"],
            1035: "" + t.a.ms.message["outdata link"],
            1036: "" + t.a.ms.message.dofrequent,
            1037: "" + t.a.ms.message["binded phone"],
            1038: "" + t.a.ms.message["phone error"],
            1039: "" + t.a.ms.message["unbinded phone"],
            1040: "" + t.a.ms.message["zhanyong phone"],
            1048: "This email is in the process of being connected to an account already. Please use a different email.",
            1055: "Nama tersuai sudah diambil. Sila gunakan nama yang lain"
        },
        tl: {
            1001: "Ang email na ito ay gamit na",
            1002: "Error sa Mail format",
            1003: "System error, maaari lamang ay subukan maya-maya ",
            1004: "Ang email address ay di kiniilalang Moonton Account",
            1005: "Mali ang password( Mayroon kapang xxx attempts sa ngayon)",
            1006: "Ang email address ay di kiniilalang Moonton Account",
            1007: "Ang Bagong Password ay hindi maaaring kaparehas ng kasalukuyan mong Password",
            1008: "System error, maaari lamang ay subukan maya-maya ",
            1009: "System error, maaari lamang ay subukan maya-maya  ",
            1010: "System error, maaari lamang ay subukan maya-maya  ",
            1011: "Ang link ay expired na, mag-request muli ng bagong link in-game. Salamat",
            1012: "System error, maaari lamang ay subukan maya-maya ",
            1013: "System error, maaari lamang ay subukan maya-maya  ",
            1014: "Ang link ay expired na, mag-request muli ng bagong link in-game. Salamat",
            1015: "System error, maaari lamang ay subukan maya-maya  ",
            1016: "Ikaw ay nag kamali ng madaming beses sa araw na ito (5 beses) Subukan ito muli bukas . Salamat",
            1017: "System error, maaari lamang ay subukan maya-maya  ",
            1018: "System error, maaari lamang ay subukan maya-maya  ",
            1020: "" + t.a.tl.message["phone code wrong"],
            1029: "" + t.a.tl.message.registed,
            1030: "" + t.a.tl.message["binded email"],
            1031: "" + t.a.tl.message["E-Mail format error"],
            1032: "" + t.a.tl.message["E-Mail format error"],
            1034: "" + t.a.tl.message["wrong code"],
            1035: "" + t.a.tl.message["outdata link"],
            1036: "" + t.a.tl.message.dofrequent,
            1037: "" + t.a.tl.message["binded phone"],
            1038: "" + t.a.tl.message["phone error"],
            1039: "" + t.a.tl.message["unbinded phone"],
            1040: "" + t.a.tl.message["zhanyong phone"],
            1048: "Ang email na ito ay nasa proseso ng pagiging konektado sa isang account. Mangyaring gumamit ng ibang email.",
            1055: "Nakuha na ang custom na pangalan. Mangyaring gumamit ng isa pa."
        },
        ar: {
            1001: " تم أخذ هذه الرسالة الإلكترونية بالفعل",
            1002: "خطأ في شكل الرسالة.",
            1003: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1004: " عنوان البريد الإلكتروني غير معترف به كحساب مونتون",
            1005: "Incorrect password (You have xxx attempts left today)",
            1006: " عنوان البريد الإلكتروني غير معترف به كحساب مونتون",
            1007: " كلمة مرور جديدة لا يمكن أن تكون نفس كلمة المرور الحالية",
            1008: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1009: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1010: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1011: "تم انتهاء صلاحيه هذا الرابط، من فضلك قم بطلب رابط جديد من داخل اللعبه. شكراً",
            1012: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1013: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1014: "تم انتهاء صلاحيه هذا الرابط، من فضلك قم بطلب رابط جديد من داخل اللعبه. شكراً",
            1015: " خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1016: " لقد قمت بإدخال كلمة المرور الخاصة بك بشكل غير صحيح مرات كثيرة لهذا اليوم (5 مرات)، يرجى المحاولة مرة أخرى غدا، شكرا لك.",
            1017: "خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1018: "خطأ في النظام، يرجى إعادة المحاولة لاحقا ",
            1020: "" + t.a.ar.message["phone code wrong"],
            1029: "" + t.a.ar.message.registed,
            1030: "" + t.a.ar.message["binded email"],
            1031: "" + t.a.ar.message["E-Mail format error"],
            1032: "" + t.a.ar.message["E-Mail format error"],
            1034: "" + t.a.ar.message["wrong code"],
            1035: "" + t.a.ar.message["outdata link"],
            1036: "" + t.a.ar.message.dofrequent,
            1037: "" + t.a.ar.message["binded phone"],
            1038: "" + t.a.ar.message["phone error"],
            1039: "" + t.a.ar.message["unbinded phone"],
            1040: "" + t.a.ar.message["zhanyong phone"],
            1048: "يتم حاليًا استخدام هذا البريد في محاولة ربط حساب بالفعل، يرجى استخدام بريد آخر",
            1055: "تم استخدام هذا الاسم المخصص بالفعل، يرجى استخدام اسم آخر"
        },
        my1: {
            1001: "ယခု Email ကို အျခားသူအသံုးျပဳထားပါသည္။",
            1002: "Mail ပံုစံ မွားယြင္းမွုျဖစ္ေနပါသည္။",
            1003: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1004: "ယခု Email သည္ Moonton တြင္အသံုးျပဳထားေသာ အေကာင့္ မဟုတ္ေၾကာင္း ေတြ့ရွိရပါသည္။",
            1005: "Incorrect password (You have xxx attempts left today)",
            1006: "ယခု Email သည္ Moonton တြင္အသံုးျပဳထားေသာ အေကာင့္ မဟုတ္ေၾကာင္း ေတြ့ရွိရပါသည္။",
            1007: "စကား၀ွက္ အသစ္သည့္ သင့္လက္ရွိ စကား၀ွက္ႏွင့္ တူညီစြာအသံုးျပဳမရပါ။",
            1008: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1009: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1010: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1011: "ယခု လိပ္စာ အသံုးျပဳခ်ိန္ကုန္ဆံုးသြားပါသျဖင့္ ေက်းဇူးျပဳျပီး ဂိမ္းထဲတြင္ လိပ္စာအသစ္တစ္ခုေတာင္းဆိုလိုက္ပါ။ ေက်းဇူးတင္ပါသည္!",
            1012: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1013: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1014: "The link has expired, please request a new link in-game. Thank you",
            1015: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1016: "You have entered your password incorrectly too many times for today (5 times), please try again tomorrow, thank you.",
            1017: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1018: "System မွားယြင္းမွုျဖစ္ေပၚေနပါသည္, ေက်းဇူးျပဳျပီး အခ်ိန္အနည္းငယ္ၾကာမွ ျပန္လုပ္ေဆာင္ပါ ",
            1020: "" + t.a.my1.message["phone code wrong"],
            1029: "" + t.a.my1.message.registed,
            1030: "" + t.a.my1.message["binded email"],
            1031: "" + t.a.my1.message["E-Mail format error"],
            1032: "" + t.a.my1.message["E-Mail format error"],
            1034: "" + t.a.my1.message["wrong code"],
            1035: "" + t.a.my1.message["outdata link"],
            1036: "" + t.a.my1.message.dofrequent,
            1037: "" + t.a.my1.message["binded phone"],
            1038: "" + t.a.my1.message["phone error"],
            1039: "" + t.a.my1.message["unbinded phone"],
            1040: "" + t.a.my1.message["zhanyong phone"],
            1048: "ဤ Email သည္ Account ႏွင့္ ခ်ိတ္ဆက္ထားၿပီးသားျဖစ္ေနပါသည္။ ေက်းဇူးျပဳ၍ အျခား Email ကို အသုံးျပဳပါ။",
            1055: "စိတ္ႀကိဳက္အမည္ဟာ ယူသုံးၿပီးသားျဖစ္ေနပါတယ္။ ေက်းဇူးျပဳ၍ အျခားတစ္ခုကို အသုံးျပဳပါ။"
        },
        my2: {
            1001: "ယခု Email ကို အခြားသူအသုံးပြုထားပါသည်။",
            1002: "Mail ပုံစံ မှားယွင်းမှုဖြစ်နေပါသည်။",
            1003: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1004: "ယခု Email သည် Moonton တွင်အသုံးပြုထားသော အကောင့် မဟုတ်ကြောင်း တွေ့ရှိရပါသည်။",
            1005: "Incorrect password (You have xxx attempts left today)",
            1006: "ယခု Email သည် Moonton တွင်အသုံးပြုထားသော အကောင့် မဟုတ်ကြောင်း တွေ့ရှိရပါသည်။",
            1007: "စကားဝှက် အသစ်သည့် သင့်လက်ရှိ စကားဝှက်နှင့် တူညီစွာအသုံးပြုမရပါ။",
            1008: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1009: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1010: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1011: "ယခု လိပ်စာ အသုံးပြုချိန်ကုန်ဆုံးသွားပါသဖြင့် ကျေးဇူးပြုပြီး ဂိမ်းထဲတွင် လိပ်စာအသစ်တစ်ခုတောင်းဆိုလိုက်ပါ။ ကျေးဇူးတင်ပါသည်!",
            1012: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1013: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1014: "The link has expired, please request a new link in-game. Thank you",
            1015: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1016: "You have entered your password incorrectly too many times for today (5 times), please try again tomorrow, thank you.",
            1017: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1018: "System မှားယွင်းမှုဖြစ်ပေါ်နေပါသည်, ကျေးဇူးပြုပြီး အချိန်အနည်းငယ်ကြာမှ ပြန်လုပ်ဆောင်ပါ ",
            1020: "" + t.a.my2.message["phone code wrong"],
            1029: "" + t.a.my2.message.registed,
            1030: "" + t.a.my2.message["binded email"],
            1031: "" + t.a.my2.message["E-Mail format error"],
            1032: "" + t.a.my2.message["E-Mail format error"],
            1034: "" + t.a.my2.message["wrong code"],
            1035: "" + t.a.my2.message["outdata link"],
            1036: "" + t.a.my2.message.dofrequent,
            1037: "" + t.a.my2.message["binded phone"],
            1038: "" + t.a.my2.message["phone error"],
            1039: "" + t.a.my2.message["unbinded phone"],
            1040: "" + t.a.my2.message["zhanyong phone"],
            1048: "ဤ Email သည် Account နှင့် ချိတ်ဆက်ထားပြီးသားဖြစ်နေပါသည်။ ကျေးဇူးပြု၍ အခြား Email ကို အသုံးပြုပါ။",
            1055: "စိတ်ကြိုက်အမည်ဟာ ယူသုံးပြီးသားဖြစ်နေပါတယ်။ ကျေးဇူးပြု၍ အခြားတစ်ခုကို အသုံးပြုပါ။"
        },
        kh: {
            1055: "ឈ្មោះផ្ទាល់ខ្លួនត្រូវបានប្រើរួចហើយ។ សូមប្រើឈ្មោះមួយផ្សេងទៀត។"
        }
    };
    a.a = o
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjZERjEyNDY1NUMxMUVEOUQ5NkZDNTJENUZDRUM1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjZERjEyNTY1NUMxMUVEOUQ5NkZDNTJENUZDRUM1MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNkRGMTIyNjU1QzExRUQ5RDk2RkM1MkQ1RkNFQzUwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNkRGMTIzNjU1QzExRUQ5RDk2RkM1MkQ1RkNFQzUwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QGFIWgAACM1JREFUeNrMmXlsHNUdxz3HHjOz3tPew+euvV7bkARI7DhNSP5oRUtvKEEJFBRVrQQSorT/lJQUVEFAUIlWatWqEqISqqASrao2BHDjODGlBRIw5YjtPXwmDq3X3tO7s8dc/c3kjfWy2XXWTiN1pZ9mvW/mzWd+x/f35pm442fnGzbxIZCRFUcCjSvI5IqjstEb0ZuEI5FRaA4KGYnOUYEkZCI6yhjodQMkKsCMYAbsSKHzVCABrIwdRQxeuR6AOJwOZQZj0NFUAVgCK4IVKsK/IUh6k3AmBMZhZvb4uQDcVYnP5+cRGI/uQVbkpoL9fc2A1eBYMAtYIzJLUzsb7Npmf1wFlEXlyZVFfgadT2KFIlcpoHU/5DXAWcHsYI6mVuaG0HbHExRN2GmacIR2OH7a1Mb0onM45G0TSguqStVvCvBqcJoBSKh3wPljALOV8mJMNfV77w7nT5rb2W4Eh+epEQs7cTVQ8hrgGpvb2GD/gPNRg4GwqmAfjcVfAvtdiRej8Jutb8DxhKdzDZJFpsMaMYkia0FSfbf9cFNwbsi5GwYdj9EAUsyLkfGx+AtCSeZlSSktLxbe97SzfpOJbHd5zbvLRfnDXFpYxfST2GyI64LzdLDBGwcdR1QvlXhpavz08q+EopyCMRVitVyU0uOn4s+XC9KEAXKy+0brg1jOOtW8rchPYy1P4h6sC84LcFt2Oo6oeVbkpcn3T8V/AUAZJCkFZIIkKuLShcIHzmYT9+m7yVfKJZlAoTVgocVhqrZCeiNwPhVuyHGEoghbIS9NnB2NP18qSGkkyCUk0ASag4Uxw5mT8VfR3w7OSjOBvsb+i3P82dRyaQHrPkQVQE2G6Hqr1dfJBm8acjwGUmLjc9LkeyfjP0dwObA8amcymodF3qL1ArE6Dc2D+5q+bWYpb3qlnATAWiKOf2QcUO+tDAZnU48tnUzPzbschxHc1Dsj8V8CXA55jkcmoElN6EYUmo/1tjE9t+x2HoSCUnOuYeuA/QGhJP166WJxCvNWpZBrhq9K9N7Koe6gw4W2f8552KhVqxT5x4n4bwGugJq/gExCExIVczFtATY4uNd1v8lIcBSMqgbfLYO3uh7ytpn7UOHYsaIx40WjVw2NwstggNbWTqZ3cI/zMExoK+TE6N+Hl14EuFJFq6r0/pretXQw/oHdjvuMhgYjBWdRl5qeALKTMpkIy869rod87UwIOaMRRY7BComo5UFLm5/pGbrV+Sh4zsqvitNjw/Hfl4qyiCvAer3Z5Tb54PrvgsyYSXCBAvo4F82ffeNPn708cuw/f8xlxPPw4I279jkfAUcE0fVspQdVmbmiMDq72P6hPc4jBiNpy2fF6dE3438AOAFbiCpDe517sxkhAfLRUHG9Rb3u87c3f59hKC9JEA2ZpBB7a2T5zwsz/LwEoCDmwoV5PtLewXg4jva0tpl35HPSp5mUkEDFpq8jRRxQC0+wl+sf2u04ajCQ9lxWiI28EX8V4CS90qBQyNu+7D4Ak99ldxjMs9P8LBZaTXi/cHvzvU6n8SaSUJSFWf7E2MjKcQhrXr+p+pAAKizM8VMdnYwPIL0AubNYlD9IJoQlJFkaZLXllqJmppbQ5JqQ6slv2LKtcYvXa9qr/ujzmb7Y0mb+6LPF4rJ+3vadtlt8MK5AUCfP5V4eP5Mex7qWnuua/oFzDRS6l0JWXx+qHqSxJDfBE5Rzq1K4vcO8i2PpFnjC1tlZfgo6g1YQS/8uJRiWyjW7jSGKJChXk9ETnsxF1TmcLoN9zz7nd+Cm1MQnqy+On828h3sDq3bFZCYNX/2G+x673dAtSXLmnbdTT83G+AjSVB5JmKACUtg7hvaE6ZRQXM2K0Y5O8yC439fpZ1pmZjRI7aEWLxSXWZYqu93GLpahXOWyvLIcL6e/8jX33RxHeaPh/Ctn3k3/E+swIspfzctmhjR+8w7PIZvNEAS47NtjyWfnZwtR1MtzCLCk5yBZ8ZamHdMpkc9mxLAfQQb8TOv0NB8BSHXccOF8cbm1xWS12Wh3c5PRZ7FQst/P7Lq4WBw9dTLxegXcmkaC98133ul5AK4LyaKceWss+dz8XCEGY2o/zyIPFvQXLR0QX9msLYUAMp/JAqTfPGiBRPYHmNbYNB8DSE07FxaKi729XMDCUS6vx9QDVR3561+WX4JkKGC9eS3/wOvcXd9yP2yz0n0yhPX06eQzc7OFaQSWRR7MY2khV1sPXvZJqZAZMRLwmwcaLbQ3EGB80ZgGqUAlSnxeWgr1sFtFQc4ee23lNwVeyqLJJVwvWY6y7N/vfgTg+uHazKnTqadnZq6Ay+HeqwVY+ealQubSaTHadQnS0xVgPJEYH1aXVMmkkO7r5dr/9fHq8bm5wjxWDGtwkJeWA/vdP9DgJCUzOpo8Cukyg6B0wCvgNFmrAFSq2JonNciAeYcVILu7ADLKT4qiIsDYfCSi6aEu5gQGxx28G3kO4EYALlYdTi8MAduJUK7mQRySSAIkwMSCAKmGO9jN+MJR/lwiIWQrFgx6zrH3HnA/bAc4EeD+djJ5FNKjbrha7yS1IBUdMpkWI8GuS5ChbrZ1KspPgCclfG3JsqT5vgOeB+02ug/GMsObgFsPcN1wJ5NiLpUWw8EuZgDkxadCTka0cGsVyzKk6f6Dnu857HRIhXtzJPk0pMOG4a4GuC5kQoMUwj1dzKAGGWTbVEh4kaIP3eM55HTQPSrc6yeSz0AaTG8Grh7A9cLdsJJQwy2EQwDZCJC9AHnzVss2l4MOAlz2teHEc+HYZVKyIbh6Adf1JEDmICenwJMDjRzVAuF1CoKSOTaceBbgYtcCV8/mkYL10Frj0lSEn4AFwpNf/5LzcfW34yeST4WjhRkEtFqlx9YFV+/uVi1I/XdVVMvnpvhPjEbiR9DmlIkwP496cR6zwkbhNrI/WA0SB1RvbPrw43y6xgZmsWLJ9T/fwKwGqeeiDljPFvCG4DazR41DXhbi/5dN9IYq/1aQrue/If4rwABY6MYVOkm9NQAAAABJRU5ErkJggg=="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNzNBNzFDNDY1NUMxMUVEQTM4QTkwMTZERTM2NTE0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNzNBNzFDNTY1NUMxMUVEQTM4QTkwMTZERTM2NTE0OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE3M0E3MUMyNjU1QzExRURBMzhBOTAxNkRFMzY1MTQ4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE3M0E3MUMzNjU1QzExRURBMzhBOTAxNkRFMzY1MTQ4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ppwo7wAAAfxJREFUeNrsmM0rhEEcx3fHliiXlfJ2c1hSSm3tSV6S4qIoBycOinKR8icoDkI4uMnNaVMuEgelRBGXZ7nSo8jBjRx8p35bT9vzPDPPzm/Wc9hffWp65plnPs37PMmO7HgiziESMY+qYNwEM0QsBaXYBZGJm2BRroVgkxTMcsVgkxQW5FglhSU5NklhUY5FUliWM5YUFZArlWyyJWgiJ+MVTIP3KIVSFZK7B6PgLWrBVAXkrsEI+LIxSUzlHsGYj9wAOAQPqomTsjzmpNyn51kvWAfDnmeyjkFQiNKCOnIHId32A6bAi6ch1sBtiZxyCRJlyP2CRTADVgPeWQZXHoFzsBLSIIGSfgWSiq47BnuU3gTPJflHYIfSXeAG9GkOi6SOoAOGgBvwkQkSlB/7BkuePLmMLFA6Cy5Bm4aYS3U6umNQJTkPtih9QsiYo0kh5c5Ao4mcjJp0a2dQwQ+qeBI0+OTnaBLc0eCvBRvUrVIubSqnsw6qWnIb9IAnatVmcKq53yrldPfiMMl6sE/pOpAH7VxyUQ4LYZKyq/tp5uY45aKeZsIkd8Est1w558EgyW4bcuWeqFUTh03O5E7i0Abv2pQzvdUVNCSN5DjuxWGSLuU5JhVw/Fnwk3TDznj/8W/GK8kmF+XSFEUywSXHLcgqxt3F1qIqaBp/AgwAaI2IC6s/fJMAAAAASUVORK5CYII="
}
, function(e, a, n) {
    function t(e) {
        n(301)
    }
    var o = n(0)(n(142), n(436), t, null, null);
    e.exports = o.exports
}
, function(e, a) {
    !function(e, a) {
        function n() {
            var a = i.getBoundingClientRect().width
              , n = a / 10;
            i.style.fontSize = n + "px",
            l.rem = e.rem = n
        }
        var t, o = e.document, i = o.documentElement, s = o.querySelector('meta[name="viewport"]'), r = o.querySelector('meta[name="flexible"]'), c = 0, d = 0, l = a.flexible || (a.flexible = {});
        if (s) {
            console.warn("将根据已有的meta标签来设置缩放比例");
            var u = s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            u && (d = parseFloat(u[1]),
            c = parseInt(1 / d))
        } else if (r) {
            var m = r.getAttribute("content");
            if (m) {
                var h = m.match(/initial\-dpr=([\d\.]+)/)
                  , g = m.match(/maximum\-dpr=([\d\.]+)/);
                h && (c = parseFloat(h[1]),
                d = parseFloat((1 / c).toFixed(2))),
                g && (c = parseFloat(g[1]),
                d = parseFloat((1 / c).toFixed(2)))
            }
        }
        if (!c && !d) {
            var p = (e.navigator.appVersion.match(/android/gi),
            e.navigator.appVersion.match(/iphone/gi))
              , _ = e.devicePixelRatio;
            c = p ? _ >= 3 && (!c || c >= 3) ? 3 : _ >= 2 && (!c || c >= 2) ? 2 : 1 : 1,
            d = 1 / c
        }
        if (i.setAttribute("data-dpr", c),
        !s)
            if (s = o.createElement("meta"),
            s.setAttribute("name", "viewport"),
            s.setAttribute("content", "initial-scale=" + d + ", maximum-scale=" + d + ", minimum-scale=" + d + ", user-scalable=no"),
            i.firstElementChild)
                i.firstElementChild.appendChild(s);
            else {
                var f = o.createElement("div");
                f.appendChild(s),
                o.write(f.innerHTML)
            }
        e.addEventListener("resize", function() {
            clearTimeout(t),
            t = setTimeout(n, 300)
        }, !1),
        e.addEventListener("pageshow", function(e) {
            e.persisted && (clearTimeout(t),
            t = setTimeout(n, 300))
        }, !1),
        "complete" === o.readyState ? o.body.style.fontSize = 12 * c + "px" : o.addEventListener("DOMContentLoaded", function(e) {
            o.body.style.fontSize = 12 * c + "px"
        }, !1),
        n(),
        l.dpr = e.dpr = c,
        l.refreshRem = n,
        l.rem2px = function(e) {
            var a = parseFloat(e) * this.rem;
            return "string" == typeof e && e.match(/rem$/) && (a += "px"),
            a
        }
        ,
        l.px2rem = function(e) {
            var a = parseFloat(e) / this.rem;
            return "string" == typeof e && e.match(/px$/) && (a += "rem"),
            a
        }
    }(window, window.lib || (window.lib = {}))
}
, function(e, a, n) {
    "use strict";
    function t(e, a) {
        var n = this;
        a && a("showDialog");
        for (var t in e)
            d[t] = e[t];
        d.showLoading = !0,
        document.body.appendChild(d.$el),
        l = setTimeout(function() {
            d.showLoading = !1,
            n.Hub.$emit("showtoast", n.$t('message["LANG_STRID_accinterception03"]')),
            a && a("showDialog_network_timeout")
        }, 1e4)
    }
    function o(e) {
        clearTimeout(l),
        d.showLoading = !1,
        e && e("hideDialog")
    }
    var i = n(50)
      , s = n(342)
      , r = n.n(s)
      , c = i.a.extend(r.a)
      , d = (new c).$mount(document.createElement("div"))
      , l = null;
    i.a.prototype.$showDialog = t,
    i.a.prototype.$hideDialog = o
}
, function(e, a, n) {
    "use strict";
    var t = n(50)
      , o = n(447)
      , i = n(345)
      , s = n.n(i)
      , r = n(344)
      , c = n.n(r)
      , d = n(350)
      , l = n.n(d)
      , u = n(349)
      , m = n.n(u)
      , h = n(354)
      , g = n.n(h)
      , p = n(355)
      , _ = n.n(p)
      , f = n(351)
      , v = n.n(f)
      , A = n(352)
      , w = n.n(A)
      , b = n(346)
      , k = n.n(b)
      , T = n(347)
      , y = n.n(T)
      , S = n(358)
      , M = n.n(S)
      , I = n(359)
      , N = n.n(I)
      , R = n(348)
      , D = n.n(R)
      , L = n(356)
      , C = n.n(L)
      , E = n(357)
      , G = n.n(E)
      , P = n(353)
      , z = n.n(P)
      , x = n(377)
      , U = n.n(x)
      , j = n(379)
      , $ = n.n(j)
      , V = n(380)
      , H = n.n(V)
      , O = n(378)
      , q = n.n(O)
      , B = n(381)
      , Y = n.n(B)
      , F = n(382)
      , K = n.n(F)
      , J = n(383)
      , Q = n.n(J)
      , W = n(386)
      , Z = n.n(W)
      , X = n(385)
      , ee = n.n(X)
      , ae = n(370)
      , ne = n.n(ae)
      , te = n(371)
      , oe = n.n(te)
      , ie = n(369)
      , se = n.n(ie)
      , re = n(372)
      , ce = n.n(re)
      , de = n(367)
      , le = n.n(de)
      , ue = n(366)
      , me = n.n(ue)
      , he = n(376)
      , ge = n.n(he)
      , pe = n(384)
      , _e = n.n(pe)
      , fe = n(374)
      , ve = n.n(fe)
      , Ae = n(360)
      , we = n.n(Ae)
      , be = n(361)
      , ke = n.n(be)
      , Te = n(373)
      , ye = n.n(Te)
      , Se = n(375)
      , Me = n.n(Se)
      , Ie = n(364)
      , Ne = n.n(Ie)
      , Re = n(362)
      , De = n.n(Re)
      , Le = n(363)
      , Ce = n.n(Le)
      , Ee = n(365)
      , Ge = n.n(Ee)
      , Pe = n(368)
      , ze = n.n(Pe)
      , xe = n(387)
      , Ue = n.n(xe)
      , je = n(388)
      , $e = n.n(je);
    t.a.use(o.a),
    a.a = new o.a({
        mode: "history",
        routes: [{
            path: "/v2.1/inapp",
            component: s.a,
            children: [{
                path: "forgotpassword-2",
                name: "forgotpassword-2v2-1",
                component: c.a
            }, {
                path: "Createaccount2",
                name: "Createaccount2v2-1",
                component: ye.a
            }, {
                path: "Createaccount3",
                name: "Createaccount3v2-1",
                component: ve.a
            }, {
                path: "Createaccount4",
                name: "Createaccount4v2-1",
                component: Me.a
            }, {
                path: "quickcreate",
                name: "quickcreatev2-1",
                component: M.a
            }, {
                path: "bindemail",
                name: "bindemailv2-1",
                component: we.a
            }, {
                path: "new-bindemail",
                name: "bindemailv2-new",
                component: ke.a
            }, {
                path: "rule",
                name: "rulev2-1",
                component: N.a
            }, {
                path: "bindphone",
                name: "bindphone2-1",
                component: Ce.a
            }, {
                path: "bindphonewithemail",
                name: "BindphoneWithEmail",
                component: Ne.a
            }, {
                path: "bindemailwithphone",
                name: "BindEmailWithPhone",
                component: De.a
            }, {
                path: "forgotpassword-phone",
                name: "ForgotpasswordPhone",
                component: H.a
            }, {
                path: "forgotpassword-code",
                name: "ForgotpasswordCode",
                component: q.a
            }, {
                path: "login-new",
                component: Y.a
            }, {
                path: "loginbyemail",
                name: "LoginByEmailVCode",
                component: K.a
            }, {
                path: "forgotpassword-3",
                name: "Forgotpassword1v2v2",
                component: U.a
            }, {
                path: "forgotpassword-email",
                name: "ForgotpasswordEmail",
                component: $.a
            }, {
                path: "phonelogin",
                name: "PhoneLogin",
                component: Q.a
            }, {
                path: "reset-password",
                name: "ResetPassword1v2v2",
                component: Z.a
            }, {
                path: "popup",
                name: "Popup",
                component: ee.a
            }, {
                path: "changebindemail",
                name: "ChangeBindEmail",
                component: ne.a
            }, {
                path: "changebindphone",
                name: "ChangeBindPhone",
                component: oe.a
            }, {
                path: "changebind-page",
                name: "ChangeBindPage",
                component: se.a
            }, {
                path: "changeemail-success",
                name: "ChangeEmailSuccess",
                component: ce.a
            }, {
                path: "changbind-confirm",
                name: "ChangBindConfirm",
                component: le.a
            }, {
                path: "changbind-cancel",
                name: "ChangBindCancel",
                component: me.a
            }, {
                path: "email-register",
                name: "EmailRegister",
                component: ge.a
            }, {
                path: "phone-register",
                name: "PhoneRegister",
                component: _e.a
            }, {
                path: "bind-success-tip",
                name: "BindSuccessTip",
                component: Ge.a
            }, {
                path: "chang-email-success-tip",
                name: "ChangEmailSuccessTip",
                component: ze.a
            }, {
                path: "unbind-phone",
                name: "UnbindPhone",
                component: Ue.a
            }, {
                path: "unbind-phone-code",
                name: "UnbindPhoneCode",
                component: $e.a
            }]
        }, {
            path: "/v2.1/inemail",
            component: l.a,
            children: [{
                path: "confirmsuccess",
                name: "emailconfirmsuccessv2-1",
                component: m.a
            }, {
                path: "resetpassword-2",
                component: _.a
            }, {
                path: "resetpassword-1",
                component: g.a
            }, {
                path: "notice-confirmed",
                component: v.a
            }, {
                path: "notice-fail",
                component: w.a
            }, {
                path: "activation",
                component: k.a
            }, {
                path: "bindemail",
                component: y.a
            }, {
                path: "changeemail",
                component: D.a
            }, {
                path: "changeemailsuccess",
                component: G.a
            }, {
                path: "changeemailfail",
                component: C.a
            }, {
                path: "outdatelink",
                component: z.a
            }]
        }]
    })
}
, , function(e, a, n) {
    function t(e) {
        n(296)
    }
    var o = n(0)(n(135), n(430), t, null, null);
    e.exports = o.exports
}
, , , , , , , , , , , , , , , , , , , function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        name: "app"
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {
                showLoading: !1,
                backgroundColor: "rgba(0, 0, 0, 0)"
            }
        },
        props: ["type"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {}
        },
        props: ["type"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    n(1);
    a.default = {
        data: function() {
            return {
                value: "",
                error: !1,
                emailShow: !1,
                timeout: null,
                eye: "open",
                showPre: !1
            }
        },
        methods: {
            selectPre: function() {
                this.showPre = !this.showPre
            },
            sendCode: function() {
                this.$emit("send")
            },
            chosePre: function(e) {
                this.$emit("chosepre", e),
                this.showPre = !1
            },
            eyeOpen: function() {
                this.eye = "close"
            },
            eyeClose: function() {
                this.eye = "open"
            },
            debounce: function(e, a) {
                return function() {
                    null !== this.timeout && clearTimeout(this.timeout),
                    this.timeout = setTimeout(e, a)
                }
            },
            choseMail: function(e) {
                this.value = e,
                this.$emit("input", this.value)
            },
            handlefocus: function(e) {
                this.value.indexOf("@") < 0 && this.value && (this.emailShow = !0),
                this.showPre = !1;
                var a = this.getElementTop(e.target);
                this.Hub.$emit("keyboardon", a)
            },
            handleblur: function(e) {
                var a = this;
                setTimeout(function() {
                    a.Hub.$emit("keyboarddown"),
                    a.$emit("checkout", a.value),
                    a.emailShow = !1
                }, 200)
            },
            handleInput: function(e) {
                var a = this;
                if ("email" == this.type)
                    null !== this.timeout && clearTimeout(this.timeout),
                    this.timeout = setTimeout(function() {
                        var n = e.target.value;
                        a.value = n,
                        a.value.indexOf("@") < 0 && a.value ? a.emailShow = !0 : a.emailShow = !1,
                        a.$emit("input", n)
                    }, 300);
                else {
                    var n = e.target.value;
                    this.value = n,
                    this.$emit("input", n)
                }
            },
            keyup: function(e) {
                13 == e.keyCode && this.handleblur(e)
            },
            getElementTop: function(e) {
                return e.getBoundingClientRect().top
            }
        },
        props: ["type", "placeholder", "iserror", "isUnNeed", "tips", "errorTips", "needError", "kind", "country", "pre", "prelist", "time"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {
                isactive: !1
            }
        },
        props: ["click"],
        methods: {
            handleClick: function(e) {
                this.$emit("clicked", e)
            },
            handlestart: function() {
                this.isactive = !0
            },
            handleend: function(e) {
                this.isactive = !1,
                this.$emit("click", e)
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(1);
    a.default = {
        data: function() {
            return {
                touch: !1,
                timer: null
            }
        },
        methods: {
            returnGo: function() {
                this.$router.go(-1)
            },
            touchenter: function() {
                var e = this;
                this.touch = !0,
                this.timer = setTimeout(function() {
                    e.touch = !1,
                    e.clearTimer()
                }, 1e3)
            },
            touchleave: function() {
                this.touch = !1,
                this.close(),
                this.clearTimer()
            },
            clearTimer: function() {
                clearInterval(this.timer),
                this.timer = null
            },
            close: function() {
                "rulev2-1" === this.$route.name ? this.$router.go(-1) : t.a.close()
            }
        },
        props: ["type"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {
                currentIndex: "1",
                showPhone: !1
            }
        },
        created: function() {
            window.sessionStorage.getItem("currentindex2") && (this.currentIndex = window.sessionStorage.getItem("currentindex2")),
            1 == window.sessionStorage.getItem("tt") && (this.showPhone = !0),
            "createaccountv2-1" == this.$route.name ? this.currentIndex = 2 : "phoneregist2-1" == this.$route.name && (this.currentIndex = 3)
        },
        methods: {
            jump: function(e, a) {
                this.currentIndex = a,
                window.sessionStorage.setItem("currentindex2", a),
                this.$router.push({
                    path: e
                })
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {}
        },
        props: ["content"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    n(1);
    a.default = {
        data: function() {
            return {
                value: "",
                error: !1,
                emailShow: !1,
                timeout: null,
                eye: "open",
                showPre: !1,
                emailList: ["@gmail.com", "@hotmail.com", "@yahoo.com"]
            }
        },
        methods: {
            selectPre: function() {
                this.showPre = !this.showPre
            },
            sendCode: function() {
                this.$emit("send")
            },
            chosePre: function(e) {
                this.$emit("chosepre", e),
                this.showPre = !1
            },
            eyeOpen: function() {
                this.eye = "close"
            },
            eyeClose: function() {
                this.eye = "open"
            },
            debounce: function(e, a) {
                return function() {
                    null !== this.timeout && clearTimeout(this.timeout),
                    this.timeout = setTimeout(e, a)
                }
            },
            choseMail: function(e) {
                this.value = e,
                this.$emit("input", this.value)
            },
            handlefocus: function(e) {
                this.value.indexOf("@") < 0 && this.value && (this.emailShow = !0),
                this.showPre = !1;
                var a = this.getElementTop(e.target);
                this.Hub.$emit("keyboardon", a)
            },
            handleblur: function(e) {
                var a = this;
                setTimeout(function() {
                    a.Hub.$emit("keyboarddown"),
                    a.$emit("checkout", a.value),
                    a.emailShow = !1
                }, 200)
            },
            handleInput: function(e) {
                var a = this;
                if ("email" == this.type)
                    null !== this.timeout && clearTimeout(this.timeout),
                    this.timeout = setTimeout(function() {
                        var n = e.target.value;
                        if (a.value = n,
                        a.value.indexOf("@") < 0 && a.value) {
                            var t = [];
                            a.emailList.forEach(function(e) {
                                t.push(n + "@" + e.split("@")[1])
                            }),
                            a.emailList = [].concat(t),
                            a.emailShow = !0
                        } else
                            a.emailShow = !1;
                        a.$emit("input", n)
                    }, 300);
                else {
                    var n = e.target.value;
                    this.value = n,
                    this.$emit("input", n)
                }
            },
            keyup: function(e) {
                13 == e.keyCode && this.handleblur(e)
            },
            getElementTop: function(e) {
                return e.getBoundingClientRect().top
            }
        },
        props: ["type", "placeholder", "iserror", "isUnNeed", "tips", "errorTips", "needError", "kind", "country", "pre", "prelist", "time", "login"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {
                isactive: !1
            }
        },
        props: ["click"],
        methods: {
            handleClick: function(e) {
                this.$emit("clicked", e)
            },
            handlestart: function() {
                this.isactive = !0
            },
            handleend: function(e) {
                this.isactive = !1,
                this.$emit("click", e)
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(1);
    a.default = {
        data: function() {
            return {
                touch: !1,
                timer: null
            }
        },
        methods: {
            returnGo: function() {
                this.$router.go(-1)
            },
            touchenter: function() {
                var e = this;
                this.touch = !0,
                this.timer = setTimeout(function() {
                    e.touch = !1,
                    e.clearTimer()
                }, 1e3)
            },
            touchleave: function() {
                this.touch = !1,
                this.close(),
                this.clearTimer()
            },
            onClose: function() {
                this.touch = !1,
                this.close(),
                this.clearTimer()
            },
            clearTimer: function() {
                clearInterval(this.timer),
                this.timer = null
            },
            close: function() {
                "rulev2-1" === this.$route.name ? this.$router.go(-1) : t.a.close()
            }
        },
        props: ["type", "session", "guid", "phone"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {
                isactive: !1
            }
        },
        props: ["click"],
        methods: {
            handleClick: function(e) {
                this.$emit("clicked", e)
            },
            handlestart: function() {
                this.isactive = !0
            },
            handleend: function(e) {
                this.isactive = !1,
                this.$emit("click", e)
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.default = {
        data: function() {
            return {}
        },
        props: ["content", "icon"]
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(74)
      , o = n.n(t)
      , i = n(31)
      , s = n.n(i)
      , r = n(32)
      , c = n.n(r)
      , d = n(1);
    a.default = {
        data: function() {
            return {
                time: 0,
                timer: null,
                email: "",
                cdTime: 0
            }
        },
        methods: {
            clicked: function() {
                d.a.close()
            },
            countDown: function() {
                var e = this;
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.time = 0,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            }
        },
        components: {
            Icon: s.a,
            Mbtn: c.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(263)
      , o = (n.n(t),
    n(264))
      , i = (n.n(o),
    n(111))
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {
                iskeyboardon: !1,
                back: !1,
                toastshow: !1,
                toastcontent: "",
                style: {
                    marginTop: ""
                },
                scale: 1,
                backPath: "",
                lanList: ["ar", "cn", "cs", "de", "en", "es", "fr", "hu", "id", "it", "ja", "ko", "ms", "my1", "my2", "pt", "ro", "ru", "th", "tl", "tr", "tw", "vi", "kh"]
            }
        },
        created: function() {
            var e = this.$route.query.l || localStorage.getItem("language");
            e && this.lanList.includes(e) ? this.$i18n.locale = e : this.$i18n.locale = "en";
            var a = window.innerHeight
              , n = window.innerWidth;
            n / a >= 2 && (this.scale = n / a / 2 * .7)
        },
        computed: {
            scalestyle: function() {
                return {
                    transform: "scale(" + this.scale + "," + this.scale + ") translate(-50%, -50%)",
                    transformOrigin: "0 0",
                    marginTop: ""
                }
            }
        },
        mounted: function() {
            var e = this;
            r.a.isIos() || (this.Hub.$on("keyboardon", function(e) {
                e -= 20,
                document.getElementsByClassName("bigwrapper")[0].style.marginTop = "-" + e + "px"
            }),
            this.Hub.$on("keyboarddown", function() {
                for (var e = document.getElementsByTagName("input"), a = e.length, n = 0; n < a; n++)
                    e[n].blur();
                document.getElementsByClassName("bigwrapper")[0].style.marginTop = "0px"
            })),
            this.Hub.$on("showtoast", function(a) {
                e.toastshow = !0,
                e.toastcontent = a,
                setTimeout(function() {
                    e.toastshow = !1
                }, 1500)
            })
        },
        methods: {
            closewindow: function() {
                r.a.close()
            },
            backRoute: function() {
                this.$router.push({
                    path: this.backPath
                }),
                "quickcreate" != this.backPath && "createaccount" != this.backPath || (this.back = !1)
            },
            ruleFn: function(e) {
                this.back = !0,
                this.backPath = e
            }
        },
        components: {
            Toast: s.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(3);
    a.default = {
        data: function() {
            return {
                password: "",
                account: "",
                ext: ""
            }
        },
        created: function() {
            var e = this;
            this.password = atob(decodeURIComponent(this.$route.query.v)),
            this.account = atob(decodeURIComponent(this.$route.query.u)),
            this.custom_account = this.$route.query.c ? atob(decodeURIComponent(this.$route.query.c)) : "",
            this.ext = this.$route.query.ext;
            var a = this;
            t.a.create(this.account, this.password, this.ext, this.custom_account).then(function(n) {
                switch (n.data.code) {
                case 1001:
                    a.$router.push("/v2.1/inemail/notice-confirmed");
                    break;
                case 1029:
                    e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                    break;
                case 1036:
                    e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                    break;
                case 1013:
                    a.$router.push("/v2.1/inemail/notice-fail");
                    break;
                case 0:
                    a.$router.push("/v2.1/inemail/confirmsuccess?email=" + a.account)
                }
            })
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(3);
    a.default = {
        data: function() {
            return {}
        },
        created: function() {
            var e = this
              , a = this.$route.query
              , n = a.p
              , o = a.u
              , i = a.v
              , s = a.e
              , r = a.ext
              , c = a.ntf
              , d = a.g
              , l = a.n
              , u = a.c
              , m = s ? atob(decodeURIComponent(s)) : ""
              , h = o ? atob(decodeURIComponent(o)) : ""
              , g = n ? atob(decodeURIComponent(n)) : ""
              , p = h && i ? atob(decodeURIComponent(i)) : ""
              , _ = (g || d) && i ? atob(decodeURIComponent(i)) : ""
              , f = d ? atob(decodeURIComponent(d)) : ""
              , v = u ? atob(decodeURIComponent(u)) : ""
              , A = l || ""
              , w = {
                email: m
            };
            if (r && (w.ext = r.split(" ").join("+")),
            1 == A) {
                w.custom = v,
                w.guid = f;
                var b = this;
                return void t.a.phone_bind_email_confirm(w).then(function(a) {
                    switch (a.data.code) {
                    case 1030:
                        b.$router.push("/v2.1/inemail/notice-confirmed");
                        break;
                    case 1029:
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                        break;
                    case 1036:
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                        break;
                    case 0:
                        b.$router.push("/v2.1/inemail/confirmsuccess?email=" + m);
                        break;
                    default:
                        b.$router.push("/v2.1/inemail/notice-fail")
                    }
                })
            }
            h ? (w.account = h,
            w.md5pwd = p) : g && (w.phone = g,
            w.vc = _),
            f && (w.guid = f,
            w.vc = _),
            c && (w.ntf = c);
            var b = this;
            t.a.confirEmailV2(w).then(function(a) {
                switch (a.data.code) {
                case 1030:
                    b.$router.push("/v2.1/inemail/notice-confirmed");
                    break;
                case 1029:
                    e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                    break;
                case 1036:
                    e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                    break;
                case 0:
                    b.$router.push("/v2.1/inemail/confirmsuccess?email=" + m);
                    break;
                default:
                    b.$router.push("/v2.1/inemail/notice-fail")
                }
            })
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(73)
      , o = n.n(t)
      , i = n(32)
      , s = n.n(i)
      , r = n(3)
      , c = n(1)
      , d = n(13);
    a.default = {
        data: function() {
            return {
                v: "",
                account: "",
                email: "",
                code: "",
                emailerror: !1,
                codeerror: !1,
                emailerrordesc: "",
                passwordrepeaterrordesc: "",
                time: "0",
                ext: "",
                mlbb_logo: d.a
            }
        },
        created: function() {
            var e = this;
            window.sessionStorage.getItem("codetime_") && this.timecode(window.sessionStorage.getItem("codetime_")),
            this.account = atob(decodeURIComponent(this.$route.query.u));
            var a = this.$route.query.ext;
            this.ext = a.split(" ").join("+"),
            r.a.checkLinkOutDate(this.account, this.ext).then(function(a) {
                0 != a.data.code ? e.$router.replace("outdatelink") : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["registed"]')) : 1036 == a.data.code && e.Hub.$emit("showtoast", e.$t('message["frequent"]'))
            })
        },
        methods: {
            setemailvalue: function(e) {
                this.email = c.a.trim(e)
            },
            setcode: function(e) {
                this.code = c.a.trim(e)
            },
            checkemail: function(e) {
                c.a.checkemail(e) ? (this.emailerror = !1,
                this.emailerrordesc = "") : (this.emailerror = !0,
                this.emailerrordesc = this.$t('message["E-Mail format error"]'),
                this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')))
            },
            checkcode: function(e) {
                this.code || this.Hub.$emit("showtoast", this.$t('message["empty code"]'))
            },
            confirm: function() {
                var e = this;
                !this.emailerror && this.email && this.code && r.a.checkNewEmailCode(this.account, this.email, this.ext, this.code).then(function(a) {
                    switch (a.data.code) {
                    case 0:
                        e.$router.push("changeemailsuccess");
                        break;
                    case 1029:
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                        break;
                    case 1036:
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                        break;
                    case 1034:
                        e.Hub.$emit("showtoast", e.$t('message["wrong code"]'));
                        break;
                    case 1029:
                        e.Hub.$emit("showtoast", e.$t('message["binded email"]'));
                        break;
                    case 1032:
                    case 1031:
                        e.Hub.$emit("showtoast", e.$t('message["E-Mail format error"]'));
                        break;
                    case 1035:
                        e.$router.replace("outdatelink");
                        break;
                    default:
                        e.Hub.$emit("showtoast", e.$t('message["reset emial fail"]'))
                    }
                })
            },
            timecode: function(e) {
                var a = this;
                this.time = e;
                var n = setInterval(function() {
                    a.time--,
                    window.sessionStorage.setItem("codetime_", a.time),
                    a.time <= 0 && (a.time = 0,
                    window.sessionStorage.removeItem("codetime_"),
                    clearInterval(n))
                }, 1e3)
            },
            sendCode: function() {
                var e = this;
                !this.emailerror && this.email ? r.a.changToThisEmail(this.account, this.email, this.ext).then(function(a) {
                    switch (a.data.code) {
                    case 0:
                        e.timecode(120),
                        e.Hub.$emit("showtoast", e.$t('message["send code success"]'));
                        break;
                    case 1029:
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                        break;
                    case 1036:
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                        break;
                    default:
                        e.Hub.$emit("showtoast", e.$t('message["send code fail"]'))
                    }
                }) : this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]'))
            }
        },
        components: {
            Minput: o.a,
            Mbtn: s.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(13);
    a.default = {
        data: function() {
            return {
                account: "",
                mlbb_logo: t.a
            }
        },
        created: function() {
            this.account = this.$route.query.email
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(111)
      , o = n.n(t)
      , i = n(13);
    a.default = {
        data: function() {
            return {
                toastshow: !1,
                toastcontent: "",
                moonton_logo: i.b,
                lanList: ["ar", "cn", "cs", "de", "en", "es", "fr", "hu", "id", "it", "ja", "ko", "ms", "my1", "my2", "pt", "ro", "ru", "th", "tl", "tr", "tw", "vi"]
            }
        },
        created: function() {
            var e = this
              , a = this.$route.query.l || "en";
            this.lanList.includes(a) || (a = "en"),
            this.$i18n.locale = a,
            localStorage.setItem("language", a),
            this.Hub.$on("showtoast", function(a) {
                e.toastshow = !0,
                e.toastcontent = a,
                setTimeout(function() {
                    e.toastshow = !1
                }, 1500)
            })
        },
        components: {
            Toast: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(13);
    a.default = {
        data: function() {
            return {
                mlbb_logo: t.a
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(13);
    a.default = {
        data: function() {
            return {
                mlbb_logo: t.a
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(31)
      , o = n.n(t)
      , i = n(13);
    a.default = {
        data: function() {
            return {
                mlbb_logo: i.a
            }
        },
        components: {
            Icon: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(73)
      , o = n.n(t)
      , i = n(32)
      , s = n.n(i)
      , r = n(3)
      , c = n(1)
      , d = n(13);
    a.default = {
        data: function() {
            return {
                v: "",
                account: "",
                password: "",
                newpassword: "",
                passworderror: !1,
                passwordrepeaterror: !1,
                passworderrordesc: "",
                passwordrepeaterrordesc: "",
                guid: "",
                mlbb_logo: d.a
            }
        },
        created: function() {
            this.v = atob(decodeURIComponent(this.$route.query.v)),
            this.account = atob(decodeURIComponent(this.$route.query.u)),
            this.guid = this.$route.query.g ? atob(decodeURIComponent(this.$route.query.g)) : ""
        },
        methods: {
            setpasswordvalue: function(e) {
                this.password = c.a.trim(e)
            },
            setnewpasswordvalue: function(e) {
                this.newpassword = c.a.trim(e)
            },
            checkpassword: function(e) {},
            checkpasswordrepeat: function(e) {},
            confirm: function() {
                var e = this;
                return this.password ? c.a.passwordTest(this.password) ? this.newpassword ? this.password != this.newpassword ? void this.Hub.$emit("showtoast", this.$t('message["These passwords dont\' match"]')) : void r.a.reset_pwd(this.account, this.guid, this.newpassword, this.v).then(function(a) {
                    0 == a.data.code ? e.$router.push("resetpassword-2") : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["registed"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.Hub.$emit("showtoast", a.data.message)
                }) : void this.Hub.$emit("showtoast", this.$t('message["Please confirm your password"]')) : void this.Hub.$emit("showtoast", this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')) : void this.Hub.$emit("showtoast", this.$t('message["Please enter your password"]'))
            }
        },
        components: {
            Minput: o.a,
            Mbtn: s.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(1)
      , o = n(31)
      , i = n.n(o)
      , s = n(32)
      , r = n.n(s)
      , c = n(13);
    a.default = {
        data: function() {
            return {
                src: "",
                mlbb_logo: c.a
            }
        },
        components: {
            Icon: i.a,
            Mbtn: r.a
        },
        created: function() {
            t.a.isIos() ? this.src = "https://r8qs.adj.st/appinvites?adjust_t=ynoul8_q0le9d&adjust_deeplink=mobilelegends://appinvites" : this.src = "mobilelegends://appinvites"
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(31)
      , o = n.n(t)
      , i = n(13);
    a.default = {
        data: function() {
            return {
                mlbb_logo: i.a
            }
        },
        components: {
            Icon: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(31)
      , o = n.n(t)
      , i = n(13);
    a.default = {
        data: function() {
            return {
                mlbb_logo: i.a
            }
        },
        components: {
            Icon: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(74)
      , o = n.n(t)
      , i = n(343)
      , s = n.n(i)
      , r = n(73)
      , c = n.n(r)
      , d = n(32)
      , l = n.n(d)
      , u = n(1)
      , m = n(3);
    a.default = {
        components: {
            Mhead: o.a,
            Mtab: s.a,
            Minput: c.a,
            Mbutton: l.a
        },
        data: function() {
            return {
                unneed: !0,
                email: "",
                emailerror: !1,
                emailerrordesc: "",
                account: "",
                accountError: !1,
                accountErrorDes: "",
                password: "",
                passworderror: !1,
                passworderrordesc: "",
                passwordrepeat: "",
                passwordrepeaterror: !1,
                passwordrepeaterrordesc: "",
                submitforbiden: !0,
                translate: {
                    noticecontent: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]'),
                    email: this.$t('message["Email address"]'),
                    account: this.$t('message["Moonton Account"]'),
                    accountTips: this.$t('message["account rule"]'),
                    password: this.$t('message["Password"]'),
                    passwordrepeat: this.$t('message["Re-Enter Password"]'),
                    passwordTip: this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]'),
                    passwordAgain: this.$t('message["Please enter your password again"]')
                },
                gameToken: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = u.a.b64DecodeUnicode(e);
                this.gameToken = JSON.parse(a).userToken
            }
        },
        methods: {
            jump: function(e) {
                this.$router.push({
                    path: e
                })
            },
            toRule: function() {
                this.Hub.$emit("showtoast", this.$t('message["frequent"]'))
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                this.account && this.password && this.passwordrepeat && !this.accountError && !this.passworderror && !this.passwordrepeaterror && (this.submitforbiden = !1)
            },
            setemailvalue: function(e) {
                this.email = e,
                this.checkemail(e)
            },
            checkemail: function(e) {
                u.a.checkemail(e) ? (this.emailerror = !1,
                this.emailerrordesc = "") : (this.emailerror = !0,
                this.emailerrordesc = this.$t('message["E-Mail format error"]')),
                this.submitCheck()
            },
            checksameaccount: function(e) {
                var a = this;
                u.a.checkMoontonAccount(e) && m.a.checkSameAccount(e, this.gameToken).then(function(e) {
                    0 == e.data.code ? (a.accountError = !1,
                    a.accountErrorDes = "") : 1001 == e.data.code ? (a.accountError = !0,
                    a.accountErrorDes = a.$t('message["same account"]')) : 1002 == e.data.code ? (a.accountError = !0,
                    a.accountErrorDes = a.$t('message["account rule"]')) : 1029 == e.data.code ? a.Hub.$emit("showtoast", a.$t('message["registed"]')) : 1036 == e.data.code ? a.Hub.$emit("showtoast", a.$t('message["frequent"]')) : (a.accountError = !0,
                    a.accountErrorDes = a.$t('message["server error"]'))
                })
            },
            setAccount: function(e) {
                this.account = e,
                this.checkAccount(e)
            },
            checkAccount: function(e) {
                u.a.checkMoontonAccount(e) ? (this.accountError = !1,
                this.accountErrorDes = "") : (this.accountError = !0,
                this.accountErrorDes = this.$t('message["account rule"]')),
                this.submitCheck()
            },
            setpasswordvalue: function(e) {
                this.password = e,
                this.checkpassword(e)
            },
            setpasswordrepeatvalue: function(e) {
                this.passwordrepeat = e,
                this.checkpasswordrepeat(e)
            },
            checkpassword: function(e) {
                u.a.checkpassword(e) ? (this.passworderror = !1,
                this.passworderrordesc = "",
                this.passwordrepeat && (this.password == this.passwordrepeat ? (this.passwordrepeaterror = !1,
                this.passwordrepeaterrordesc = "") : (this.passwordrepeaterror = !0,
                this.passwordrepeaterrordesc = this.$t('message["These passwords dont\' match"]')))) : (this.passworderror = !0,
                this.passworderrordesc = this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')),
                this.submitCheck()
            },
            checkpasswordrepeat: function(e) {
                this.password != e ? (this.passwordrepeaterrordesc = this.$t('message["These passwords dont\' match"]'),
                this.passwordrepeaterror = !0) : (this.passwordrepeaterror = !1,
                this.passwordrepeaterrordesc = ""),
                this.submitCheck()
            },
            submit: function() {
                var e = this;
                this.submitforbiden || m.a.registerAccount(this.account, this.password, this.email, this.gameToken).then(function(a) {
                    var n = a.data;
                    if (0 == n.code) {
                        var t = ""
                          , o = "";
                        switch (n.email_code) {
                        case 0:
                            var i = a.data.redirect;
                            i && i.length > 0 || (i = "https://www.google.com"),
                            t = i,
                            o = 3;
                            break;
                        case 1029:
                            o = 2;
                            break;
                        case 1031:
                            o = 1
                        }
                        u.a.quickregist(e.email, o, encodeURIComponent(t)),
                        window.localStorage.setItem("quickaccount", e.account)
                    } else {
                        var s = n.message;
                        n.message || (s = "regist fail"),
                        e.Hub.$emit("showtoast", s)
                    }
                })
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(74)
      , o = n.n(t);
    a.default = {
        components: {
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                account: "",
                emailerror: !1,
                passworderror: !1,
                email: "",
                password: "",
                emailerrordesc: "",
                submitforbiden: !0,
                passworderrordesc: "",
                placeholder: {
                    email: this.$t('message["Email address"]'),
                    password: this.$t('message["Password"]')
                },
                translate: {
                    email: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]'),
                    password: this.$t('message["Please enter the password of the current MOONTON ACCOUNT to continue"]')
                },
                gameToken: "",
                flag: !1,
                time: 0,
                timer: null
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e);
                this.account = JSON.parse(a).account,
                this.gameToken = JSON.parse(a).userToken,
                this.time = JSON.parse(a).emailVerifyCodeCD || 120
            }
            this.$route.query.account && (this.account = this.$route.query.account)
        },
        methods: {
            Bind: function() {
                var e = this;
                if (this.flag)
                    return !1;
                this.submitforbiden || (this.flag = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.flag = !1
                }, 9e3),
                u.a.bindEmail(this.account, this.password, this.email, this.gameToken).then(function(a) {
                    if (e.flag = !1,
                    e.$hideDialog(),
                    0 == a.data.code) {
                        var n = a.data.redirect;
                        n && n.length > 0 || (n = "https://www.google.com"),
                        e.$router.push({
                            path: "createaccount2",
                            query: {
                                redirect: n,
                                emailtype: 3,
                                tip: "no"
                            }
                        })
                    } else if (1029 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                    else if (1036 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                    else {
                        var t = a.data.message;
                        a.data.message || (t = "bind email error"),
                        e.Hub.$emit("showtoast", t)
                    }
                }))
            },
            checkEmailFun: function(e) {
                return !!m.a.checkemail(this.email) || ("check" != e && "" != this.email && this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')),
                !1)
            },
            checkemail: function() {
                this.checkEmailFun()
            },
            setemailvalue: function(e) {
                this.email = m.a.trim(e),
                this.submitCheck()
            },
            checkpassword: function() {
                this.checkPasswordFun()
            },
            setpassword: function(e) {
                this.password = m.a.trim(e),
                this.submitCheck()
            },
            checkPasswordFun: function(e) {
                return !!m.a.checkpassword(this.password) || ("check" != e && "" != this.password && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1)
            },
            submitCheck: function() {
                this.checkEmailFun("check") && this.checkPasswordFun("check") ? this.submitforbiden = !1 : this.submitforbiden = !0
            }
        },
        components: {
            MInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                account: "",
                emailerror: !1,
                passworderror: !1,
                email: "",
                password: "",
                emailerrordesc: "",
                submitforbiden: !0,
                passworderrordesc: "",
                placeholder: {
                    email: this.$t('message["Email address"]'),
                    password: this.$t('message["Password"]'),
                    mtaccount: this.$t('message["LANG_STRID_Accountswitch_220519"]')
                },
                translate: {
                    email: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]'),
                    password: this.$t('message["Please enter the password of the current MOONTON ACCOUNT to continue"]'),
                    mtaccount: this.$t('message["account rule"]')
                },
                gameToken: "",
                flag: !1,
                time: 0,
                timer: null,
                mtaccount: "",
                guid: "",
                phone: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                this.time = n.emailVerifyCodeCD || 120,
                this.gameToken = n.userToken,
                this.guid = n.guid,
                this.phone = n.phone || ""
            }
        },
        methods: {
            Bind: function() {
                var e = this;
                if (this.flag)
                    return !1;
                this.submitforbiden || (this.flag = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.flag = !1
                }, 9e3),
                u.a.phone_bind_email(this.email, this.phone, this.password, this.mtaccount, this.guid, this.gameToken).then(function(a) {
                    if (e.flag = !1,
                    e.$hideDialog(),
                    0 == a.data.code) {
                        var n = a.data.redirect;
                        n && n.length > 0 || (n = "https://www.google.com"),
                        e.$router.push({
                            path: "createaccount2",
                            query: {
                                redirect: n,
                                emailtype: 3,
                                tip: "no"
                            }
                        })
                    } else if (1029 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                    else if (1036 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                    else {
                        var t = a.data.message;
                        a.data.message || (t = "bind email error"),
                        e.Hub.$emit("showtoast", t)
                    }
                }))
            },
            onCheckmtaccountFun: function(e) {
                return !!m.a.checkMoontonAccount(this.mtaccount) || ("check" != e && "" != this.mtaccount && this.Hub.$emit("showtoast", this.$t('message["account rule"]')),
                !1)
            },
            setmtaccount: function(e) {
                this.mtaccount = m.a.trim(e),
                this.submitCheck()
            },
            onCheckmtaccount: function() {
                this.onCheckmtaccountFun()
            },
            checkEmailFun: function(e) {
                return !!m.a.checkemail(this.email) || ("check" != e && "" != this.email && this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')),
                !1)
            },
            checkemail: function() {
                this.checkEmailFun()
            },
            setemailvalue: function(e) {
                this.email = m.a.trim(e),
                this.submitCheck()
            },
            checkpassword: function() {
                this.checkPasswordFun()
            },
            setpassword: function(e) {
                this.password = m.a.trim(e),
                this.submitCheck()
            },
            checkPasswordFun: function(e) {
                return !!m.a.checkpassword(this.password) || ("check" != e && "" != this.password && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1)
            },
            submitCheck: function() {
                this.checkEmailFun("check") && this.checkPasswordFun("check") && this.onCheckmtaccountFun("check") ? this.submitforbiden = !1 : this.submitforbiden = !0
            }
        },
        components: {
            MInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                step: 0,
                placeholder: {
                    code: this.$t('message["Code"]'),
                    email: this.$t('message["Email address"]')
                },
                translate: {
                    code: this.$t('message["Enter Code"]'),
                    email: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]')
                },
                phone: "",
                code: "",
                submitforbiden: !0,
                submitforbidenEmail: !0,
                email: "",
                timeText: this.$t('message["send code"]'),
                time: 120,
                times: 120,
                gameToken: "",
                countDownState: !1,
                submitEmailState: !1,
                timer: null,
                phonehide: "",
                guid: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? this.guid = n.guid : this.phone = n.phone || "",
                this.time = n.verifyCodeCD || 120,
                this.times = n.verifyCodeCD || 120,
                this.phonehide = JSON.parse(a).phonehide || "",
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phonehide]),
                this.gameToken = JSON.parse(a).userToken,
                2 == this.$route.query.s && (this.step = 1,
                n.guid ? this.guid = n.guid : this.phone = n.phone || "",
                this.code = JSON.parse(a).phoneVerifyCode || "")
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phonehide])
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.phoneBindEmailPaasoo(this.phone, this.guid, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDown() : (e.countDownState = !1,
                    e.$codeErrorToast(t, o))
                })
            },
            getpass: function() {
                var e = this;
                u.a.phoneBindEmailConfirmPaasoo(this.phone, this.guid, this.code, this.gameToken).then(function(a) {
                    e.$hideDialog();
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    e.submitState = !1,
                    0 == t ? (clearInterval(e.timer),
                    m.a.bewp(e.phone, e.guid, e.code)) : e.$codeErrorToast(t, o)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.countDownState = !0,
                this.getcode()
            },
            submit: function() {
                var e = this;
                return !this.submitforbiden && (!this.submitState && (this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass()))
            },
            submitCheck: function() {
                "" != this.code && 6 == this.code.length ? this.submitforbiden = !1 : this.submitforbiden = !0
            },
            checkecode: function() {
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck()
            },
            setemail: function(e) {
                this.email = m.a.trim(e),
                this.submitCheck()
            },
            onCheckemail: function() {
                this.checkEmailFun()
            },
            checkEmailFun: function() {
                return m.a.checkemail(this.email) ? (this.submitforbidenEmail = !1,
                !0) : ("" != this.email && this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')),
                this.submitforbidenEmail = !0,
                !1)
            },
            submitEmail: function() {
                var e = this;
                if (this.submitEmailState || this.submitforbidenEmail)
                    return !1;
                this.submitEmailState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitEmailState = !1
                }, 9e3),
                u.a.phoneBindEmailSecondConfirmPaasoo(this.phone, this.guid, this.code, this.email, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    if (e.submitEmailState = !1,
                    e.$hideDialog(),
                    0 == t) {
                        var i = a.data.redirect;
                        i && i.length > 0 || (i = "https://www.google.com"),
                        e.$router.push({
                            path: "createaccount3",
                            query: {
                                redirect: i,
                                type: "1"
                            }
                        })
                    } else
                        1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["registed"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.$codeErrorToast(t, o)
                })
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(26)
      , o = n.n(t)
      , i = n(25)
      , s = n.n(i)
      , r = n(15)
      , c = n(2)
      , d = n.n(c)
      , l = n(4)
      , u = n.n(l)
      , m = n(6)
      , h = n.n(m)
      , g = n(5)
      , p = n.n(g)
      , _ = n(3)
      , f = n(1);
    a.default = {
        data: function() {
            return {
                init: !1,
                submitforbiden: !0,
                email: "",
                gameToken: "",
                placeholder: {
                    phone: this.$t('message["Phone"]'),
                    code: this.$t('message["Code"]'),
                    password: this.$t('message["Password"]')
                },
                translate: {
                    phone: this.$t('message["Enter Phone"]'),
                    code: this.$t('message["Enter Code"]'),
                    password: this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')
                },
                preList: [{
                    country: "CN",
                    phone: "86"
                }],
                country: "",
                prephone: "",
                phone: "",
                code: "",
                timeText: this.$t('message["send code"]'),
                password: "",
                time: 120,
                times: 120,
                submitState: !1,
                countDownState: !1,
                account: "",
                timer: null
            }
        },
        created: function() {
            var e = this;
            return s()(o.a.mark(function a() {
                var n, t, i;
                return o.a.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            window.localStorage.getItem("emailsended") && (n = window.localStorage.getItem("emailsended"),
                            t = f.a.b64DecodeUnicode(n),
                            i = JSON.parse(t).areaCode,
                            e.preList = f.a.getPhonePre(i),
                            e.account = JSON.parse(t).account,
                            e.email = JSON.parse(t).email,
                            e.time = JSON.parse(t).verifyCodeCD || 120,
                            e.times = JSON.parse(t).verifyCodeCD || 120,
                            e.gameToken = JSON.parse(t).userToken);
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, a, e)
            }))()
        },
        mounted: function() {
            this.init = !0
        },
        methods: {
            toRule: function() {
                this.$emit("rule", "quickcreate"),
                this.$router.push({
                    path: "rule"
                })
            },
            service: function() {
                this.isservice ? this.isservice = !1 : this.isservice = !0,
                this.submitCheck()
            },
            jump: function() {
                this.$router.push({
                    path: "email-register"
                })
            },
            getcode: function() {
                var e = this;
                _.a.sendBindPhoneCode(this.account, this.prephone + this.phone, this.password, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDown() : (e.countDownState = !1,
                    e.$codeErrorToast(t, o))
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (!!this.checkPhoneFun() && (this.countDownState = !0,
                void this.getcode()))
            },
            chosePre: function(e) {
                var a = e.country
                  , n = e.phone;
                this.country = a,
                this.prephone = n,
                this.submitCheck()
            },
            onCheckphone: function() {
                this.checkPhoneFun()
            },
            setephone: function(e) {
                this.phone = f.a.trim(e),
                this.submitCheck()
            },
            checkPhoneFun: function() {
                return this.prephone ? !(!this.phone || !n.i(r.a)("+" + this.prephone + this.phone)) || (this.Hub.$emit("showtoast", this.$t('message["phone error"]')),
                !1) : ("" != this.phone && this.Hub.$emit("showtoast", this.$t('message["enter call code"]')),
                !1)
            },
            onCheckecode: function(e) {
                "" != e && 6 != this.code.length && this.Hub.$emit("showtoast", this.$t('message["wrong code"]'))
            },
            setecode: function(e) {
                this.code = f.a.trim(e),
                this.submitCheck()
            },
            onCheckpassword: function() {
                this.checkPasswordFun("password")
            },
            setpasswordvalue: function(e) {
                this.password = f.a.trim(e),
                this.submitCheck()
            },
            checkePasswordConfirm: function() {
                this.checkPasswordFun("")
            },
            setePasswordConfirm: function(e) {
                this.password2 = f.a.trim(e),
                this.submitCheck()
            },
            checkPasswordFun: function() {
                f.a.checkpassword(this.password) || "" != this.password && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]'))
            },
            submitCheck: function() {
                this.prephone && this.phone && n.i(r.a)("+" + this.prephone + this.phone) && 6 == this.code.length && f.a.checkpassword(this.password) ? this.submitforbiden = !1 : this.submitforbiden = !0
            },
            submit: function() {
                var e = this;
                if (this.submitforbiden || this.submitState)
                    return !1;
                this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                _.a.confirmBindPhone(this.account, this.prephone + this.phone, this.password, this.code, this.gameToken).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog();
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.$router.push({
                        name: "BindSuccessTip"
                    }) : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["zhanyong phone"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.$codeErrorToast(t, o),
                    e.submitState = !1
                })
            }
        },
        components: {
            MInput: u.a,
            Mbutton: h.a,
            Notice: p.a,
            Mhead: d.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(15)
      , o = n(2)
      , i = n.n(o)
      , s = n(4)
      , r = n.n(s)
      , c = n(8)
      , d = n.n(c)
      , l = n(5)
      , u = n.n(l)
      , m = n(3)
      , h = n(1);
    a.default = {
        data: function() {
            return {
                step: 0,
                placeholder: {
                    code: this.$t('message["LANG_STRID_Accountswitch_220503"]'),
                    phone: this.$t('message["Phone"]'),
                    phonecode: this.$t('message["Code"]')
                },
                translate: {
                    code: this.$t('message["Enter Email Code"]'),
                    phone: this.$t('message["LANG_STRID_Accountchangepassword_220520"]'),
                    phonecode: this.$t('message["Enter Code"]')
                },
                phone: "",
                code: "",
                submitforbiden: !0,
                submitforbidenPhone: !0,
                email: "",
                timeText: this.$t('message["send code"]'),
                timePhoneText: this.$t('message["send code"]'),
                time: 120,
                times: 120,
                gameToken: "",
                countDownState: !1,
                submitPhoneState: !1,
                preList: [{
                    country: "CN",
                    phone: "86"
                }],
                country: "",
                prephone: "",
                phonecode: "",
                countDownPhoneState: !1,
                timerPhone: null,
                timer: null,
                timePhone: 120,
                timesPhone: 120,
                emailhide: "",
                guid: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = h.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a) || {};
                this.time = n.emailVerifyCodeCD || 120,
                this.times = n.emailVerifyCodeCD || 120,
                this.timePhone = n.verifyCodeCD || 120,
                this.timesPhone = n.verifyCodeCD || 120,
                n.guid ? this.guid = n.guid : this.email = n.email || "",
                this.phone = n.phonehide || "",
                this.emailhide = n.emailhide || "";
                var t = n.areaCode;
                this.preList = h.a.getPhonePre(t),
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide]),
                this.gameToken = n.userToken,
                2 == this.$route.query.s && (this.step = 1,
                n.guid ? this.guid = n.guid : this.email = n.email || "",
                this.code = n.emailVerifyCode || "")
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide])
        },
        methods: {
            getcode: function() {
                var e = this;
                m.a.emailBindPhoneSendEmailCode(this.email, this.guid, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDown() : (e.countDownState = !1,
                    e.$codeErrorToast(t, o))
                })
            },
            getPhonecode: function() {
                var e = this;
                m.a.emailBindPhoneSendPhoneCode(this.email, this.guid, this.code, this.prephone + this.phone).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDownPhone() : (e.countDownPhoneState = !1,
                    e.$codeErrorToast(t, o))
                })
            },
            getpass: function() {
                var e = this;
                m.a.emailBindPhoneVerifyEmailCode(this.email, this.guid, this.code, this.gameToken).then(function(a) {
                    e.$hideDialog();
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    e.submitState = !1,
                    0 == t ? (clearInterval(e.timer),
                    e.step = 1) : e.$codeErrorToast(t, o)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            countDownPhone: function() {
                var e = this;
                this.timePhoneText = "",
                this.timerPhone = setInterval(function() {
                    if (e.timePhone <= 0)
                        return e.timePhoneText = e.$t('message["send code"]'),
                        e.timePhone = e.timesPhone,
                        e.countDownPhoneState = !1,
                        clearInterval(e.timerPhone),
                        !1;
                    e.timePhone--
                }, 1e3)
            },
            clickPhoneCountDown: function() {
                return !this.countDownPhoneState && "" != this.timePhoneText && (!!this.checkPhoneFun() && (this.countDownPhoneState = !0,
                void this.getPhonecode()))
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.countDownState = !0,
                this.getcode()
            },
            submit: function() {
                var e = this;
                return !this.submitforbiden && (!this.submitState && (this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass()))
            },
            submitCheck: function() {
                "" != this.code && 6 == this.code.length ? this.submitforbiden = !1 : this.submitforbiden = !0
            },
            checkecode: function() {
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = h.a.trim(e),
                this.submitCheck()
            },
            chosePre: function(e) {
                var a = e.country
                  , n = e.phone;
                this.country = a,
                this.prephone = n,
                this.submitPhoneCheck()
            },
            onCheckphone: function() {
                this.checkPhoneFun()
            },
            setephone: function(e) {
                this.phone = h.a.trim(e),
                this.submitPhoneCheck()
            },
            checkPhoneFun: function() {
                return this.prephone ? !(!this.phone || !n.i(t.a)("+" + this.prephone + this.phone)) || (this.Hub.$emit("showtoast", this.$t('message["phone error"]')),
                !1) : (this.Hub.$emit("showtoast", this.$t('message["enter call code"]')),
                !1)
            },
            onCheckephonecode: function(e) {
                "" != e && 6 != this.phonecode.length && this.Hub.$emit("showtoast", this.$t('message["wrong code"]'))
            },
            setphonecode: function(e) {
                this.phonecode = h.a.trim(e),
                this.submitPhoneCheck()
            },
            submitPhoneCheck: function() {
                this.prephone && this.phone && n.i(t.a)("+" + this.prephone + this.phone) && 6 == this.phonecode.length ? this.submitforbidenPhone = !1 : this.submitforbidenPhone = !0
            },
            submitphone: function() {
                var e = this;
                if (this.submitPhoneState || this.submitforbidenPhone)
                    return !1;
                this.submitPhoneState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitPhoneState = !1
                }, 9e3),
                m.a.emailBindPhoneConfirm(this.email, this.guid, this.code, this.prephone + this.phone, this.phonecode).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    e.$hideDialog(),
                    0 == t ? e.$router.push({
                        name: "BindSuccessTip"
                    }) : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["zhanyong phone"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.$codeErrorToast(t, o),
                    e.submitPhoneState = !1
                })
            }
        },
        components: {
            MphoneInput: r.a,
            MphoneButton: d.a,
            Notice: u.a,
            Mhead: i.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i);
    a.default = {
        data: function() {
            return {
                hideBtn: !1
            }
        },
        created: function() {},
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        methods: {}
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1)
      , c = n(3);
    a.default = {
        data: function() {
            return {
                emailhide: "",
                rebindEmail: "",
                email: "",
                outTime: "11min",
                redirect: "",
                gameToken: "",
                flag: !1,
                phone: "",
                type: r.a.getUrlParams("type") || "",
                guid: ""
            }
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = r.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? this.guid = n.guid : (this.email = n.email || "",
                this.phone = n.phone),
                this.rebindEmail = n.rebindEmail,
                this.gameToken = n.userToken,
                this.emailhide = n.emailhide,
                this.redirect = n.redirect
            }
        },
        methods: {
            returnGo: function() {
                this.$router.go(-1),
                this.Mlog.visitLog({
                    behavior: "operate_cancel",
                    type: 0,
                    logs: this.type
                })
            },
            confirm: function() {
                var e = this;
                this.Mlog.visitLog({
                    behavior: "operate_cancel",
                    type: 1,
                    logs: this.type
                }),
                this.flag || (this.flag = !0,
                "phone" == this.type ? c.a.phone_rebind_email_paasoo_cancel(this.phone, this.guid, this.gameToken).then(function(a) {
                    var n = a.data;
                    if (e.flag = !1,
                    0 == n.code)
                        r.a.close();
                    else {
                        var t = n.message;
                        n.message || (t = "service error(" + n.code + ")"),
                        e.Hub.$emit("showtoast", t)
                    }
                }) : c.a.email_rebind_email_code_final_cancel(this.email, this.guid, this.gameToken).then(function(a) {
                    e.flag = !1;
                    var n = a.data;
                    if (0 == n.code)
                        r.a.close();
                    else {
                        var t = n.message;
                        n.message || (t = "service error(" + n.code + ")"),
                        e.Hub.$emit("showtoast", t)
                    }
                }))
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1)
      , c = n(3);
    a.default = {
        data: function() {
            return {
                emailhide: "",
                rebindEmail: "",
                rebindEmailHide: "",
                email: "",
                outTime: "11min",
                redirect: "",
                gameToken: "",
                flag: !1,
                phone: "",
                type: "",
                guid: ""
            }
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = r.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? this.guid = n.guid : (this.email = n.email || "",
                this.phone = n.phone),
                this.rebindEmail = n.rebindEmail,
                this.rebindEmailHide = n.rebindEmailHide,
                this.gameToken = n.userToken,
                this.emailhide = n.emailhide,
                this.redirect = n.redirect,
                this.type = n.rebindEmailType
            }
        },
        methods: {
            go: function() {
                r.a.isAndroid() ? window.UnityNative.OpenWeb(this.redirect) : window.location.href = "UnityNative://OpenWeb=" + btoa(this.redirect)
            },
            cancel: function() {
                0 == this.type || 2 == this.type ? this.$router.push({
                    path: "changbind-cancel",
                    query: {
                        type: "email"
                    }
                }) : this.$router.push({
                    path: "changbind-cancel",
                    query: {
                        type: "phone"
                    }
                })
            },
            confirm: function() {
                var e = this;
                this.flag || (this.flag = !0,
                0 == this.type || 2 == this.type ? c.a.email_rebind_email_code_final_confirm(this.email, this.guid, this.gameToken).then(function(a) {
                    e.flag = !1;
                    var n = a.data;
                    if (0 == n.code)
                        r.a.close();
                    else {
                        var t = n.message;
                        n.message || (t = "service error(" + n.code + ")"),
                        e.Hub.$emit("showtoast", t)
                    }
                }) : c.a.phone_rebind_email_paasoo_confirm(this.phone, this.guid, this.gameToken).then(function(a) {
                    var n = a.data;
                    if (e.flag = !1,
                    0 == n.code)
                        r.a.close();
                    else {
                        var t = n.message;
                        n.message || (t = "service error(" + n.code + ")"),
                        e.Hub.$emit("showtoast", t)
                    }
                }))
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i);
    a.default = {
        data: function() {
            return {}
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        created: function() {},
        methods: {}
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                emailerror: !1,
                codeerror: !1,
                new_email: "",
                submitforbiden: !0,
                translate: {
                    email: this.$t('message["LANG_STRID_Accountswitch_220510"]'),
                    notice: this.$t('message["Phone"]'),
                    code: this.$t('message["email verification code holder"]'),
                    phone: this.$t('message["Phone"]'),
                    tip: this.$t('message["LANG_STRID_Accountswitch_220511"]'),
                    tip2: this.$t('message["LANG_STRID_Accountswitch_220504"]'),
                    needErrorphone: "",
                    needErrorcode: ""
                },
                gameToken: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                url_code: m.a.getUrlParams("code") || "",
                url_type: m.a.getUrlParams("type") || "",
                url_phone: m.a.getUrlParams("phone") || "",
                url_email: m.a.getUrlParams("email") || "",
                url_guid: m.a.getUrlParams("guid") || "",
                code: "",
                submitState: !1,
                countDownState: !1
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e);
                this.gameToken = JSON.parse(a).userToken || "",
                this.time = JSON.parse(a).verifyCodeCD || 120,
                this.times = JSON.parse(a).verifyCodeCD || 120
            }
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.phone_rebind_email_second_paasoo(this.url_phone, this.url_guid, this.url_code, this.new_email).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1029 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["registed"]')),
                    e.countDownState = !1) : 1036 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["frequent"]')),
                    e.countDownState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            getcodeConfirm: function() {
                var e = this;
                u.a.phone_rebind_email_second_confirm_paasoo(this.url_phone, this.url_guid, this.url_code, this.new_email, this.code).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? 0 == a.data.rebind_email_cd ? e.$router.push({
                        path: "chang-email-success-tip"
                    }) : e.$router.push({
                        path: "changeemail-success",
                        query: {
                            timestamp: a.data.rebind_email_cd,
                            phone: e.url_phone,
                            type: "phone"
                        }
                    }) : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["registed"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.Hub.$emit("showtoast", a.data.message)
                })
            },
            getemailcode: function() {
                var e = this;
                u.a.email_rebind_email_code_second(this.url_email, this.url_guid, this.url_code, this.new_email, this.gameToken).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1029 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["registed"]')),
                    e.countDownState = !1) : 1036 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["frequent"]')),
                    e.countDownState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            getemailcodeConfirm: function() {
                var e = this;
                u.a.email_rebind_email_code_second_confirm(this.url_email, this.url_guid, this.url_code, this.new_email, this.code, this.gameToken).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? 0 == a.data.rebind_email_cd ? e.$router.push({
                        path: "chang-email-success-tip"
                    }) : e.$router.push({
                        path: "changeemail-success",
                        query: {
                            timestamp: a.data.rebind_email_cd,
                            email: e.url_email,
                            type: "email"
                        }
                    }) : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["registed"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.Hub.$emit("showtoast", a.data.message)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (m.a.checkemail(this.new_email) ? (this.countDownState = !0,
                void ("phone" == this.url_type ? this.getcode() : this.getemailcode())) : (this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')),
                !1))
            },
            submit: function() {
                var e = this;
                return !!m.a.checkemail(this.new_email) && ("" != this.code && 6 == this.code.length && (!this.submitforbiden && !this.submitState && (this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void ("phone" == this.url_type ? this.getcodeConfirm() : this.getemailcodeConfirm()))))
            },
            submitCodeCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && m.a.checkemail(this.new_email) && (this.codeerror = !1,
                this.submitforbiden = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? this.codeerror = !0 : this.codeerror = !1,
                this.submitCodeCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCodeCheck()
            },
            submitPhoneCheck: function() {},
            checkemail: function(e) {},
            setemail: function(e) {
                this.new_email = m.a.trim(e),
                this.submitCodeCheck()
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = (n(15),
    n(2))
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                codeerror: !1,
                email: "",
                emailhide: "",
                submitforbiden: !0,
                translate: {
                    code: this.$t('message["LANG_STRID_Accountswitch_220503"]'),
                    tip1: this.$t('message["LANG_STRID_Accountswitch_220504"]'),
                    needCodeError: ""
                },
                returnType: m.a.getUrlParams("type") || "",
                emailbut: m.a.getUrlParams("emailbut") || "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                code: "",
                title: "",
                init: 0,
                submitState: !1,
                countDownState: !1,
                guid: "",
                gameToken: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? this.guid = n.guid : this.email = n.email || "",
                this.emailhide = n.emailhide || "",
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide]),
                this.time = n.verifyCodeCD,
                this.times = n.verifyCodeCD,
                this.gameToken = n.userToken
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide])
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.email_rebind_email_code(this.email, this.guid, this.gameToken).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1029 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["registed"]')),
                    e.countDownState = !1) : 1036 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["frequent"]')),
                    e.countDownState = !1) : (e.$codeErrorToast(a.data.code, a.data.message),
                    e.countDownState = !1)
                })
            },
            getpass: function() {
                var e = this;
                u.a.email_rebind_email_code_confirm(this.email, this.guid, this.code, this.gameToken).then(function(a) {
                    if (e.$hideDialog(),
                    e.submitState = !1,
                    0 == a.data.code) {
                        var n = m.a.getStrStamp();
                        e.$router.push({
                            path: "changebind-page",
                            query: {
                                code: e.code,
                                email: e.email,
                                guid: e.guid,
                                type: "email",
                                strStamp: n
                            }
                        })
                    } else
                        1020 == a.data.code || 1034 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : 1022 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["send code fail"]')) : e.$codeErrorToast(a.data.code, a.data.message)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.countDownState = !1,
                        e.time = e.times,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 1,
                    logs: "change_bind_email"
                }),
                this.countDownState = !0,
                this.getcode()
            },
            submit: function() {
                var e = this;
                if (this.submitforbiden || this.submitState)
                    return !1;
                this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                this.getpass()
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && (this.submitforbiden = !1,
                this.codeerror = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? (this.codeerror = !0,
                this.Hub.$emit("showtoast", this.$t("message['wrong code']"))) : this.codeerror = !1,
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck(),
                1 != this.init && (this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 1,
                    logs: "change_bind_email"
                }),
                this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 0,
                    logs: "change_bind_email"
                })),
                "" == e && this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 0,
                    logs: "change_bind_email"
                }),
                this.init = 1
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = (n(15),
    n(2))
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                phoneerror: !1,
                codeerror: !1,
                phone: "",
                submitforbiden: !0,
                translate: {
                    notice: this.$t('message["LANG_STRID_Accountchangepassword_220501"]'),
                    phone: this.$t('message["Phone"]'),
                    tip: this.$t('message["Enter Code"]'),
                    needError: "",
                    code: this.$t('message["Code"]'),
                    tip1: this.$t('message["Enter Code"]'),
                    needCodeError: "",
                    phoneTip: this.$t('message["Enter Phone"]')
                },
                returnType: m.a.getUrlParams("type") || "",
                isemail: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                code: "",
                prephone: "",
                title: "",
                submitState: !1,
                countDownState: !1,
                guid: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? this.guid = n.guid : this.prephone = n.phone,
                this.phone = n.phonehide || "",
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phone]),
                this.isemail = n.email || n.emailhide || "",
                this.time = n.verifyCodeCD || 120,
                this.times = n.verifyCodeCD || 120
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phone])
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.phone_rebind_email_paasoo(this.prephone, this.guid).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1002 == a.data.code || 1038 == a.data.code || 1031 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')),
                    e.countDownState = !1) : 1004 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')),
                    e.countDownState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            getpass: function() {
                var e = this;
                u.a.phone_rebind_email_confirm_paasoo(this.prephone, this.guid, this.code).then(function(a) {
                    if (e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code) {
                        var n = m.a.getStrStamp();
                        e.$router.push({
                            path: "changebind-page",
                            query: {
                                code: e.code,
                                phone: e.prephone,
                                guid: e.guid,
                                type: "phone",
                                strStamp: n
                            }
                        })
                    } else
                        1002 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')) : 1004 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')) : 1020 == a.data.code || 1034 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : 1022 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["send code fail"]')) : e.Hub.$emit("showtoast", a.data.message)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.Mlog.visitLog({
                    behavior: "send_phonecode",
                    type: 1,
                    logs: "change_bind_phone"
                }),
                this.countDownState = !0,
                this.getcode()
            },
            jump: function() {
                this.$router.push({
                    path: "changebindemail",
                    query: {
                        type: "phone"
                    }
                })
            },
            submit: function() {
                var e = this;
                return this.submitforbiden ? (this.phoneerror = !0,
                !1) : !this.submitState && (this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass())
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && (this.submitforbiden = !1,
                this.codeerror = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? (this.codeerror = !0,
                this.Hub.$emit("showtoast", this.$t("message['wrong code']"))) : this.codeerror = !1,
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck(),
                1 != this.init && (this.Mlog.visitLog({
                    behavior: "fill_phonecode",
                    type: 1,
                    logs: "change_bind_phone"
                }),
                this.Mlog.visitLog({
                    behavior: "send_phonecode",
                    type: 0,
                    logs: "change_bind_phone"
                })),
                "" == e && this.Mlog.visitLog({
                    behavior: "fill_phonecode",
                    type: 0,
                    logs: "change_bind_phone"
                }),
                this.init = 1
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    n(3);
    a.default = {
        data: function() {
            return {
                email: "",
                phone: "",
                countTime: "00:00:00",
                time: "",
                emailhide: "",
                gameToken: "1",
                type: "phone",
                timer: null,
                flag: !1,
                d: "0",
                h: "0",
                m: "0",
                title: ""
            }
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        created: function() {
            var e = this;
            if (window.localStorage.getItem("emailsended")) {
                var a = window.localStorage.getItem("emailsended")
                  , n = r.a.b64DecodeUnicode(a)
                  , t = JSON.parse(n);
                if (r.a.getUrlParams("phone") ? this.phone = r.a.getUrlParams("phone") : this.phone = t.phone,
                r.a.getUrlParams("type") ? this.type = r.a.getUrlParams("type") : this.type = "0" == t.rebindEmailType || "2" == t.rebindEmailType ? "email" : "phone",
                this.email = t.email || "",
                this.time = t.rebindEmailCD || 0,
                this.emailhide = t.emailhide,
                this.gameToken = t.userToken,
                r.a.getUrlParams("timestamp")) {
                    var o = r.a.getUrlParams("timestamp");
                    this.Mlog.visitLog({
                        behavior: "review_time",
                        logs: o
                    }),
                    o > 0 ? (o *= 1e3,
                    this.toHHmmss(o),
                    this.timer = setInterval(function() {
                        o -= 1e3,
                        o < 0 ? (clearInterval(e.timer),
                        e.$router.push("changbind-confirm")) : e.toHHmmss(o)
                    }, 1e3)) : (clearInterval(this.timer),
                    this.$router.push("changbind-confirm"))
                } else
                    this.Mlog.visitLog({
                        behavior: "review_time",
                        logs: this.time
                    }),
                    this.time > 0 ? (this.time = 1e3 * this.time,
                    this.toHHmmss(this.time),
                    this.timer = setInterval(function() {
                        e.time -= 1e3,
                        e.time < 0 ? (clearInterval(e.timer),
                        e.$router.push("changbind-confirm")) : e.toHHmmss(e.time)
                    }, 1e3)) : (clearInterval(this.timer),
                    this.$router.push("changbind-confirm"));
                this.title = this.$t('message["LANG_STRID_Accountswitch_220517"]', {
                    x: this.d,
                    y: this.h,
                    z: this.m
                })
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220517"]', {
                    x: this.d,
                    y: this.h,
                    z: this.m
                })
        },
        methods: {
            close: function() {
                clearInterval(this.timer),
                r.a.close()
            },
            cancel: function() {
                clearInterval(this.timer),
                "phone" == this.type ? this.$router.push({
                    path: "changbind-cancel",
                    query: {
                        type: "phone"
                    }
                }) : this.$router.push({
                    path: "changbind-cancel",
                    query: {
                        type: "email"
                    }
                })
            },
            toHHmmss: function(e) {
                var a = parseInt(e / 864e5)
                  , n = parseInt(e % 864e5 / 36e5)
                  , t = parseInt(e % 36e5 / 6e4)
                  , o = e % 6e4 / 1e3;
                a > 0 ? (this.d = a,
                this.h = n < 10 ? "0" + n : n,
                this.m = t < 10 ? "0" + t : t) : (this.d = "00",
                this.h = n < 10 ? "0" + n : n,
                this.m = t < 10 ? "0" + t : t,
                0 == n && 0 == t && (this.m = "01"))
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {
                content: "",
                tips: "",
                needMonntAccount: !1,
                emailtype: "",
                redirect: "",
                message: {
                    type1: this.$t('message["empty email"]'),
                    type2: this.$t('message["used email"]'),
                    type3: this.$t('message["useful email"]')
                }
            }
        },
        created: function() {
            if (this.$route.query.emailtype)
                this.$route.query.emailtype ? this.emailtype = this.$route.query.emailtype : this.emailtype = 3,
                this.tips = this.message["type" + this.emailtype],
                "no" == this.$route.query.tip ? this.needMonntAccount = !1 : this.needMonntAccount = !0;
            else if (!this.$route.query.redirect && window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = r.a.b64DecodeUnicode(e);
                this.emailtype = JSON.parse(a).emailtype,
                this.redirect = decodeURIComponent(JSON.parse(a).emailredirect),
                this.tips = this.message["type" + this.emailtype]
            }
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        methods: {
            bindlink: function() {
                r.a.isAndroid() ? this.$route.query.redirect ? window.UnityNative.OpenWeb(this.$route.query.redirect) : this.redirect && window.UnityNative.OpenWeb(this.redirect) : this.$route.query.redirect ? window.location.href = "UnityNative://OpenWeb=" + btoa(this.$route.query.redirect) : this.redirect && (window.location.href = "UnityNative://OpenWeb=" + btoa(this.redirect))
            },
            continuebind: function() {
                var e = window.localStorage.getItem("quickaccount");
                this.$router.push({
                    path: "bindemail",
                    query: {
                        account: e
                    }
                })
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {
                type: ""
            }
        },
        created: function() {
            this.$route.query.type && (this.type = this.$route.query.type ? this.$route.query.type : "")
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        methods: {
            bindlink: function() {
                r.a.isAndroid() ? window.UnityNative.OpenWeb(this.$route.query.redirect) : window.location.href = "UnityNative://OpenWeb=" + btoa(this.$route.query.redirect)
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {}
        },
        created: function() {},
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        methods: {
            bindlink: function() {
                r.a.close()
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(24)
      , o = n.n(t)
      , i = n(26)
      , s = n.n(i)
      , r = n(25)
      , c = n.n(r)
      , d = n(2)
      , l = n.n(d)
      , u = n(4)
      , m = n.n(u)
      , h = n(6)
      , g = n.n(h)
      , p = n(5)
      , _ = n.n(p)
      , f = n(3)
      , v = n(1);
    a.default = {
        data: function() {
            return {
                init: !1,
                submitforbiden: !0,
                email: "",
                gameToken: "",
                translate: {
                    email: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]'),
                    password: this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]'),
                    password2: this.$t('message["Please enter your password again"]'),
                    mtaccount: this.$t('message["account rule"]')
                },
                placeholder: {
                    email: this.$t('message["Email address"]'),
                    password: this.$t('message["Password"]'),
                    password2: this.$t('message["Re-Enter Password"]'),
                    mtaccount: this.$t('message["LANG_STRID_MTregister_221106"]')
                },
                isphone: "",
                submitState: !1,
                isservice: !0,
                password: "",
                password2: "",
                mtaccount: ""
            }
        },
        created: function() {
            var e = this;
            return c()(s.a.mark(function a() {
                var n, t;
                return s.a.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            window.localStorage.getItem("emailsended") && (n = window.localStorage.getItem("emailsended"),
                            t = v.a.b64DecodeUnicode(n),
                            e.gameToken = JSON.parse(t).userToken,
                            e.isphone = JSON.parse(t).phoneEnable || "");
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, a, e)
            }))()
        },
        mounted: function() {
            this.init = !0
        },
        methods: {
            toRule: function() {
                this.$emit("rule", "createaccount"),
                this.$router.push({
                    path: "rule"
                })
            },
            service: function() {
                this.isservice ? this.isservice = !1 : this.isservice = !0,
                this.submitCheck()
            },
            jump: function() {
                this.$router.push({
                    path: "phone-register"
                })
            },
            setemail: function(e) {
                this.email = v.a.trim(e),
                this.submitCheck()
            },
            onCheckemail: function() {
                this.checkEmailFun()
            },
            checkEmailFun: function() {
                return !!v.a.checkemail(this.email) || ("" != this.email && this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]')),
                !1)
            },
            onCheckpassword: function() {
                this.checkPasswordFun("password")
            },
            setpasswordvalue: function(e) {
                this.password = v.a.trim(e),
                this.submitCheck()
            },
            checkePasswordConfirm: function() {
                this.checkPasswordFun("")
            },
            setePasswordConfirm: function(e) {
                this.password2 = v.a.trim(e),
                this.submitCheck()
            },
            checkPasswordFun: function(e) {
                return "password" == e ? !!v.a.passwordTest(this.password) || ("" != this.password && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1) : v.a.passwordTest(this.password2) ? this.password2 == this.password || (this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220514"]')),
                !1) : ("" != this.password2 && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1)
            },
            onCheckmtaccount: function() {
                return "" == this.mtaccount || (!!v.a.checkMoontonAccount(this.mtaccount) || (this.Hub.$emit("showtoast", this.$t('message["account rule"]')),
                !1))
            },
            setmtaccount: function(e) {
                this.mtaccount = v.a.trim(e),
                this.submitCheck()
            },
            submitCheck: function() {
                v.a.checkemail(this.email) && v.a.passwordTest(this.password) && v.a.passwordTest(this.password2) && this.password2 == this.password && this.isservice ? "" != this.mtaccount ? v.a.checkMoontonAccount(this.mtaccount) ? this.submitforbiden = !1 : this.submitforbiden = !0 : this.submitforbiden = !1 : this.submitforbiden = !0
            },
            submit: function() {
                var e = this;
                return !this.submitforbiden && !this.submitState && (!!this.checkEmailFun() && (!!this.checkPasswordFun("password") && (!(this.checkPasswordFun("password") && !this.checkPasswordFun("")) && (!!this.onCheckmtaccount && (this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void f.a.register(this.email, this.password, this.mtaccount, this.gameToken).then(function(a) {
                    if (e.$hideDialog(),
                    e.Mlog.visitLog({
                        behavior: "email_register",
                        email: e.email,
                        accouent: e.mtaccount,
                        res: o()(a)
                    }),
                    0 == a.data.code) {
                        var n = a.data.redirect;
                        n && n.length > 0 || (n = "https://www.google.com"),
                        e.$router.push({
                            path: "createaccount3",
                            query: {
                                redirect: n
                            }
                        })
                    } else if (1001 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["same account"]'));
                    else if (1029 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["registed"]'));
                    else if (1036 == a.data.code)
                        e.Hub.$emit("showtoast", e.$t('message["frequent"]'));
                    else {
                        var t = "";
                        t = a.data.message ? a.data.message : "regist fail",
                        e.Hub.$emit("showtoast", t)
                    }
                    e.submitState = !1
                }).catch(function(e) {
                    console.log(e, "====err")
                }))))))
            }
        },
        components: {
            MInput: m.a,
            Mbutton: g.a,
            Notice: _.a,
            Mhead: l.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(6)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1)
      , h = n(49)
      , g = n.n(h);
    a.default = {
        data: function() {
            return {
                emailerror: !1,
                codeerror: !1,
                email: "",
                submitforbiden: !0,
                translate: {
                    notice: this.$t('message["Please enter your email address to receive the email with a new password."]') + " " + this.$t('message["unreset"]'),
                    email: this.$t('message["Email address"]'),
                    tip: this.$t('message["change passwrod tip"]')
                },
                gameToken: "",
                cdTime: 0,
                time: 0,
                timer: null,
                returnType: m.a.getUrlParams("type") || "",
                init: 0,
                submitState: !1
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e);
                this.gameToken = JSON.parse(a).userTokenForgotPwd || JSON.parse(a).userToken || "",
                this.cdTime = JSON.parse(a).emailVerifyCodeCD;
                var n = (new Date).getTime()
                  , t = g.a.get(this.$route.name);
                if (t) {
                    var o = (n - t) / 1e3;
                    o <= this.cdTime ? (o = this.cdTime - o,
                    this.time = Math.round(o),
                    this.time <= 0 ? (this.time = 0,
                    g.a.remove(this.$route.name)) : this.countDown()) : g.a.remove(this.$route.name)
                } else
                    this.time = 0
            }
        },
        methods: {
            countDown: function() {
                var e = this;
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.time = 0,
                        e.submitState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            submit: function() {
                var e = this;
                return this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 1,
                    logs: "password"
                }),
                this.time > 0 ? (this.Hub.$emit("showtoast", this.$t('message["wait"]', {
                    time: this.time
                })),
                !1) : !this.submitforbiden && !this.submitState && (this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void (this.email && !this.emailerror ? u.a.reset_pwd_mail(this.email, this.gameToken).then(function(a) {
                    e.$hideDialog(),
                    0 == a.data.code ? (0 == e.time && (e.time = e.cdTime),
                    g.a.set(e.$route.name, (new Date).getTime(), {
                        expires: 5 / 1440
                    }),
                    e.countDown(),
                    e.$router.push({
                        name: "forgotpassword-2v2-1",
                        query: {
                            e: e.email
                        }
                    })) : 1029 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["registed"]')),
                    e.submitState = !1) : 1036 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["frequent"]')),
                    e.submitState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.submitState = !1)
                }) : this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]'))))
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                this.email && (this.submitforbiden = !1)
            },
            checkemail: function(e) {
                m.a.checkemail(e) ? this.emailerror = !1 : (this.emailerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["E-Mail format error"]'))),
                this.submitCheck()
            },
            setemail: function(e) {
                this.email = m.a.trim(e),
                "" == e ? this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 1,
                    logs: "password"
                }) : 1 != this.init && (this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 0,
                    logs: "password"
                }),
                this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 0,
                    logs: "password"
                })),
                this.init = 1
            }
        },
        components: {
            Minput: s.a,
            Mbutton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(5)
      , c = n.n(r)
      , d = n(3)
      , l = n(1)
      , u = n(49)
      , m = n.n(u);
    a.default = {
        data: function() {
            return {
                codeerror: !1,
                email: "",
                submitforbiden: !0,
                translate: {
                    notice: this.$t('message["LANG_STRID_Accountchangepassword_220507"]'),
                    code: this.$t('message["Code"]'),
                    tip: this.$t('message["change passwrod tip"]'),
                    needError: ""
                },
                gameToken: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                phone: l.a.getUrlParams("phone") || "",
                code: "",
                countDownState: !1,
                guid: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = l.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? (this.guid = n.guid,
                this.phone = "") : (this.guid = "",
                this.phone = n.phone || ""),
                this.gameToken = JSON.parse(a).userTokenForgotPwd || JSON.parse(a).userToken || "",
                this.cdTime = JSON.parse(a).verifyCodeCD;
                var t = (new Date).getTime()
                  , o = m.a.get(this.$route.name);
                if (o) {
                    var i = (t - o) / 1e3;
                    i <= this.cdTime ? (i = this.cdTime - i,
                    this.time = Math.round(i),
                    this.times = Math.round(i),
                    this.time <= 0 && (this.time = 0,
                    this.times = 0,
                    m.a.remove(this.$route.name))) : m.a.remove(this.$route.name)
                } else
                    this.time = 0
            }
        },
        methods: {
            getcode: function() {
                var e = this;
                d.a.phone_login_paasoo(this.prephone + this.phone).then(function(a) {
                    0 == a.data.code ? e.countDownState = !1 : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            getpass: function() {
                var e = this;
                d.a.phone_resetpwd_confirm_paasoo(this.prephone + this.phone, this.guid, this.code, "", 1).then(function(a) {
                    0 == a.data.code ? e.$router.push({
                        path: "reset-password",
                        query: {
                            code: e.code,
                            phone: e.prephone + e.phone
                        }
                    }) : e.translate.needError = a.data.message
                })
            },
            jump: function() {
                this.submitforbiden || this.getpass()
            },
            countDown: function() {
                var e = this;
                if (this.countDownState)
                    return !1;
                this.countDownState = !0,
                this.timeText = "",
                this.getcode(),
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            submit: function() {
                this.$router.push({
                    name: "reset-password"
                })
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && (this.submitforbiden = !1,
                this.codeerror = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? this.codeerror = !0 : this.codeerror = !1,
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = l.a.trim(e),
                this.submitCheck()
            }
        },
        components: {
            MphoneInput: s.a,
            Notice: c.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = (n(15),
    n(2))
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                codeerror: !1,
                email: "",
                emailhide: "",
                submitforbiden: !0,
                translate: {
                    code: this.$t('message["LANG_STRID_Accountswitch_220503"]'),
                    tip1: this.$t('message["LANG_STRID_Accountswitch_220504"]'),
                    needCodeError: ""
                },
                returnType: m.a.getUrlParams("type") || "",
                emailbut: m.a.getUrlParams("emailbut") || "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                code: "",
                title: "",
                init: 0,
                submitState: !1,
                countDownState: !1,
                userToken: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                console.log("emailsended", JSON.parse(a)),
                n.guid ? (this.guid = n.guid,
                this.email = "") : (this.guid = "",
                this.email = n.email || ""),
                this.emailhide = n.emailhide || "",
                this.userToken = n.userTokenEmail || n.userToken || "",
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide]),
                this.time = n.verifyCodeCD,
                this.times = n.verifyCodeCD
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220518"]', [this.emailhide])
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.mail_resetpwd(this.email, this.guid, this.userToken).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1029 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["registed"]')),
                    e.countDownState = !1) : 1036 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["frequent"]')),
                    e.countDownState = !1) : (e.$codeErrorToast(a.data.code, a.data.message),
                    e.countDownState = !1)
                })
            },
            getpass: function() {
                var e = this;
                u.a.mail_resetpwd_confirm(this.email, this.guid, this.code, "", 1, this.userToken).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? e.$router.push({
                        path: "reset-password",
                        query: {
                            code: e.code,
                            email: e.email,
                            guid: e.guid,
                            type: "email",
                            token: e.userToken
                        }
                    }) : 1020 == a.data.code || 1034 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : 1022 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : e.$codeErrorToast(a.data.code, a.data.message)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 1,
                    logs: "chang_email_password"
                }),
                this.countDownState = !0,
                this.getcode()
            },
            submit: function() {
                var e = this;
                if (this.submitforbiden || this.submitState)
                    return !1;
                this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                this.getpass()
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && (this.submitforbiden = !1,
                this.codeerror = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? (this.codeerror = !0,
                this.Hub.$emit("showtoast", this.$t("message['wrong code']"))) : this.codeerror = !1,
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck(),
                1 != this.init && (this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 1,
                    logs: "chang_email_password"
                }),
                this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 0,
                    logs: "chang_email_password"
                })),
                "" == e && this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 0,
                    logs: "chang_email_password"
                }),
                this.init = 1
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = (n(15),
    n(2))
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                phoneerror: !1,
                codeerror: !1,
                phone: "",
                submitforbiden: !0,
                translate: {
                    notice: this.$t('message["LANG_STRID_Accountchangepassword_220501"]'),
                    phone: this.$t('message["Phone"]'),
                    tip: this.$t('message["LANG_STRID_Accountchangepassword_220503"]'),
                    needError: "",
                    code: this.$t('message["Code"]'),
                    tip1: this.$t('message["LANG_STRID_Accountchangepassword_220507"]'),
                    needCodeError: "",
                    phoneTip: this.$t('message["Enter Phone"]')
                },
                returnType: m.a.getUrlParams("type") || "",
                emailbut: m.a.getUrlParams("emailbut") || "",
                isemail: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                code: "",
                country: "",
                phoneerrordesc: "",
                prephone: "",
                phonehide: "",
                title: "",
                init: 0,
                emailhide: "",
                submitState: !1,
                countDownState: !1,
                guid: "",
                userToken: ""
            }
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                n.guid ? (this.guid = n.guid,
                this.phone = "") : (this.guid = "",
                this.phone = n.phone || ""),
                this.phonehide = n.phonehide,
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phonehide]),
                this.isemail = n.email || n.emailhide || "",
                this.emailhide = n.emailhide || "",
                this.gameToken = n.userTokenForgotPwd || n.userToken || "",
                this.userToken = n.userTokenPhone || n.userToken || "",
                this.time = n.verifyCodeCD,
                this.times = n.verifyCodeCD
            } else
                this.title = this.$t('message["LANG_STRID_Accountswitch_220516"]', [this.phonehide])
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.phone_resetpwd_paasoo(this.phone, this.guid, this.userToken).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1002 == a.data.code || 1038 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')),
                    e.countDownState = !1) : 1004 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')),
                    e.countDownState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            getpass: function() {
                var e = this;
                u.a.phone_resetpwd_confirm_paasoo(this.phone, this.guid, this.code, "", 1, this.userToken).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? e.$router.push({
                        path: "reset-password",
                        query: {
                            code: e.code,
                            phone: e.phone,
                            guid: e.guid,
                            token: e.userToken
                        }
                    }) : 1002 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')) : 1004 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')) : 1020 == a.data.code || 1034 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : 1022 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["wrong code"]')) : e.Hub.$emit("showtoast", a.data.message)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (this.Mlog.visitLog({
                    behavior: "send_phonecode",
                    type: 1,
                    logs: "password"
                }),
                this.phone && "" != this.phone || this.phonehide ? (this.phoneerror = !1,
                this.countDownState = !0,
                void this.getcode()) : (this.phoneerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["phone error"]')),
                !1))
            },
            jump: function() {
                this.emailhide && "" !== this.emailhide ? this.$router.push({
                    path: "Forgotpassword-email",
                    query: {
                        type: "phone"
                    }
                }) : this.$router.push({
                    path: "Forgotpassword-3",
                    query: {
                        type: "phone"
                    }
                })
            },
            chosePre: function(e) {
                var a = e.country
                  , n = e.phone;
                this.country = a,
                this.prephone = n,
                this.submitCheck()
            },
            submit: function() {
                var e = this;
                return this.phoneerror = !1,
                6 != this.code.length ? (this.codeerror = !0,
                !1) : this.submitforbiden || this.submitState ? (this.phoneerror = !0,
                !1) : (this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass())
            },
            checkephone: function(e) {},
            setephone: function(e) {
                this.phone = m.a.trim(e),
                "" != this.code && 6 == this.code.length && "" != this.prephone && this.submitCheck()
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && (this.submitforbiden = !1,
                this.codeerror = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? (this.codeerror = !0,
                this.Hub.$emit("showtoast", this.$t("message['wrong code']"))) : this.codeerror = !1,
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck(),
                1 != this.init && (this.Mlog.visitLog({
                    behavior: "fill_phonecode",
                    type: 1,
                    logs: "password"
                }),
                this.Mlog.visitLog({
                    behavior: "send_phonecode",
                    type: 0,
                    logs: "password"
                })),
                "" == e && this.Mlog.visitLog({
                    behavior: "fill_phonecode",
                    type: 0,
                    logs: "password"
                }),
                this.init = 1
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(24)
      , o = n.n(t)
      , i = n(82)
      , s = n.n(i)
      , r = n(26)
      , c = n.n(r)
      , d = n(25)
      , l = n.n(d)
      , u = n(2)
      , m = n.n(u)
      , h = n(4)
      , g = n.n(h)
      , p = n(6)
      , _ = n.n(p)
      , f = n(5)
      , v = n.n(f)
      , A = n(3)
      , w = n(1);
    a.default = {
        data: function() {
            return {
                init: !1,
                emailerror: !1,
                emailerrordesc: "",
                submitforbiden: !0,
                email: "",
                password: "",
                passworderror: !1,
                passworderrordesc: "",
                gameToken: "",
                returnType: w.a.getUrlParams("type") || "",
                num: 1,
                translate: {
                    phone: this.$t('message["Phone"]'),
                    email: this.$t('message["Email address"]'),
                    password: this.$t('message["Password"]'),
                    account: this.$t('message["Moonton Account"]'),
                    noticecontent: this.$t('message["Sign in with your Moonton Account"]'),
                    passwordTip: this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')
                },
                isphone: "",
                isphoneState: !1,
                isShowEmail: !1,
                submitState: !1,
                accountretreival: "",
                ispasswdUrl: ""
            }
        },
        created: function() {
            var e = this;
            return l()(c.a.mark(function a() {
                var n, t, o;
                return c.a.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            window.localStorage.getItem("emailsended") && (n = window.localStorage.getItem("emailsended"),
                            t = w.a.b64DecodeUnicode(n),
                            e.gameToken = JSON.parse(t).userToken,
                            e.isphone = JSON.parse(t).phone || JSON.parse(t).phonehide || "",
                            e.isShowEmail = JSON.parse(t).email || JSON.parse(t).emailhide || "",
                            e.isphoneState = w.a.checkphone1(e.isphone),
                            e.ispasswdUrl = JSON.parse(t).passwdUrl,
                            o = JSON.parse(t).passwdUrl.split("?"),
                            e.accountretreival = o[0] + "?" + JSON.parse(t).encodeParam + "&" + o[1]);
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, a, e)
            }))()
        },
        mounted: function() {
            this.init = !0
        },
        methods: {
            jump: function(e, a, n) {
                "forgotpassword" === n && this.ispasswdUrl && "" != this.ispasswdUrl ? w.a.openWeb(this.accountretreival) : this.$router.push({
                    path: e,
                    query: {
                        type: a,
                        emailbut: n
                    }
                })
            },
            checkemail: function(e) {
                w.a.checkemail(e) || w.a.checkMoontonAccount(e) || w.a.checkphone(e) ? (this.emailerror = !1,
                this.emailerrordesc = "") : (this.emailerror = !0,
                "" != e && this.Hub.$emit("showtoast", this.$t('message["enter right account"]'))),
                this.submitCheck()
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                this.email && this.password && !this.passworderror && !this.emailerror && (this.submitforbiden = !1)
            },
            checkpassword: function(e) {
                w.a.checkpassword(e) ? (this.passworderror = !1,
                this.passworderrordesc = "") : (this.passworderror = !0,
                "" != e && this.Hub.$emit("showtoast", this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]'))),
                this.submitCheck()
            },
            setemailvalue: function(e) {
                this.email = w.a.trim(e),
                (w.a.checkemail(e) || w.a.checkMoontonAccount(e) || w.a.checkphone(e)) && (this.emailerror = !1,
                this.emailerrordesc = ""),
                w.a.checkpassword(this.password) && (this.passworderror = !1,
                this.submitCheck())
            },
            setpasswordvalue: function(e) {
                this.password = w.a.trim(e),
                w.a.checkpassword(this.password) && (this.passworderror = !1),
                (w.a.checkemail(this.email) || w.a.checkMoontonAccount(this.email) || w.a.checkphone(this.email)) && ("" != this.password ? this.submitforbiden = !1 : this.submitforbiden = !0)
            },
            loginfo: function(e) {
                this.Mlog.visitLog({
                    behavior: e,
                    kind: "login",
                    time: w.a.getCurrentDateTime()
                }, {}, !0)
            },
            logByBehavior: function(e, a) {
                this.Mlog.visitLog(s()({
                    behavior: e,
                    accouent: this.email,
                    submitforbiden: this.submitforbiden,
                    submitState: this.submitState
                }, a))
            },
            submit: function() {
                var e = this
                  , a = this;
                this.Mlog.visitLog({
                    behavior: "click_login",
                    accouent: a.email,
                    submitforbiden: this.submitforbiden,
                    submitState: this.submitState
                });
                try {
                    if (this.submitforbiden || this.submitState)
                        return a.logByBehavior("submit_error"),
                        this.emailerror = !0,
                        !1;
                    if (!w.a.checkemail(this.email) && !w.a.checkMoontonAccount(this.email) && !w.a.checkphone(this.email))
                        return a.logByBehavior("account_error"),
                        this.emailerror = !0,
                        this.Hub.$emit("showtoast", this.$t('message["enter right account"]')),
                        !1;
                    if (!w.a.checkpassword(this.password))
                        return a.logByBehavior("password_error"),
                        this.Hub.$emit("showtoast", this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')),
                        !1;
                    this.submitState = !0,
                    a.$showDialog(void 0, a.loginfo)
                } catch (e) {
                    a.logByBehavior("catch_login_error", {
                        error: o()(e)
                    })
                }
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                a.Mlog.visitLog({
                    behavior: "login_submit",
                    accouent: a.email,
                    submitforbiden: this.submitforbiden,
                    submitState: this.submitState
                }, {}, !0),
                A.a.login(a.email, a.password, a.gameToken, "").then(function(n) {
                    var t = n.data.session
                      , i = n.data.guid
                      , s = a.email;
                    if (a.Mlog.visitLog({
                        behavior: "login",
                        session: t,
                        guid: i,
                        accouent: s,
                        res: o()(n)
                    }, {}, !0),
                    a.$hideDialog(a.loginfo),
                    a.submitState = !1,
                    0 == n.data.code)
                        w.a.login(s, t, i, a.Mlog);
                    else if (1029 == n.data.code)
                        a.Hub.$emit("showtoast", a.$t('message["registed"]'));
                    else if (1036 == n.data.code)
                        a.Hub.$emit("showtoast", a.$t('message["frequent"]'));
                    else if (1046 == n.data.code)
                        a.Hub.$emit("showtoast", a.$t('message["notman"]'));
                    else if (1016 == n.data.code)
                        a.Hub.$emit("showtoast", a.$t('message["passwordError"]'));
                    else if (1005 == n.data.code) {
                        var r = n.data.left_ban_login_time;
                        if (r > 0)
                            if (r <= 60)
                                e.Hub.$emit("showtoast", e.$t('message["passwordErrorWaitSec"]', {
                                    y: r
                                }));
                            else {
                                var c = Math.floor(r / 60)
                                  , d = r - 60 * c;
                                e.Hub.$emit("showtoast", e.$t('message["passwordErrorWait"]', {
                                    x: c,
                                    y: d
                                }))
                            }
                        else
                            e.Hub.$emit("showtoast", e.$t('message["passwordError"]'))
                    } else
                        a.$codeErrorToast(n.data.code, n.data.message)
                }).catch(function(e) {
                    a.Mlog.visitLog({
                        behavior: "login_error",
                        error: o()(e),
                        kind: "login"
                    })
                })
            }
        },
        components: {
            MPhoneInput: g.a,
            Mbutton: _.a,
            Notice: v.a,
            Mhead: m.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = (n(15),
    n(2))
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                emailerror: !1,
                codeerror: !1,
                email: "",
                submitforbiden: !0,
                translate: {
                    code: this.$t('message["Code"]'),
                    tip: this.$t('message["enterEmailTip"]'),
                    tip2: this.$t('message["sendEmailTip"]'),
                    emailInputTip: this.$t('message["Please enter your email address"]'),
                    emailVerificationCode: this.$t('message["LANG_STRID_Accountswitch_220503"]'),
                    needErrorphone: "",
                    needErrorcode: ""
                },
                gameToken: "",
                userTokenEmailLogin: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                returnType: m.a.getUrlParams("type") || "",
                phonevalue: "",
                code: "",
                country: "",
                phoneerrordesc: "",
                prephone: "",
                submitState: !1,
                countDownState: !1,
                isShowEmail: !1
            }
        },
        created: function() {
            if (this.Mlog.visitLog({
                behavior: "send_emailcode",
                type: 0,
                logs: "login"
            }),
            window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = m.a.b64DecodeUnicode(e);
                this.gameToken = JSON.parse(a).userTokenEmailLogin || JSON.parse(a).userTokenForgotPwd || JSON.parse(a).userToken || "",
                this.isShowEmail = JSON.parse(a).email || JSON.parse(a).emailhide || "",
                this.userTokenEmailLogin = JSON.parse(a).userTokenEmailLogin,
                this.time = JSON.parse(a).emailVerifyCodeCD || 120,
                this.times = JSON.parse(a).emailVerifyCodeCD || 120
            }
        },
        methods: {
            jump: function(e, a, n) {
                this.$router.push({
                    path: e,
                    query: {
                        type: a,
                        emailbut: n
                    }
                })
            },
            getcode: function() {
                var e = this;
                u.a.email_code_login(this.email).then(function(a) {
                    var n = a.data || {}
                      , t = n.code;
                    if (0 === t)
                        e.countDown();
                    else if (1002 === t || 1038 === t)
                        e.Hub.$emit("showtoast", e.$t('message["enterEmailTip"]')),
                        e.countDownState = !1;
                    else if (1004 === t)
                        e.Hub.$emit("showtoast", e.$t('message["unbindEmail"]')),
                        e.countDownState = !1;
                    else {
                        var o = n.message;
                        o || (o = "service error(" + t + ")"),
                        e.Hub.$emit("showtoast", o),
                        e.countDownState = !1
                    }
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (this.Mlog.visitLog({
                    behavior: "send_emailcode",
                    type: 1,
                    logs: "login"
                }),
                this.email ? this.email && m.a.checkemail(this.email) ? (this.emailerror = !1,
                this.countDownState = !0,
                void this.getcode()) : (this.emailerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_MTregister_221113"]')),
                !1) : (this.emailerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["enterEmailFirst"]')),
                !1))
            },
            login: function() {
                var e = this
                  , a = this;
                this.$showDialog(),
                this.Mlog.visitLog({
                    behavior: "email_login_click",
                    type: 1,
                    logs: "login"
                }),
                u.a.email_code_login_confirm(this.email, this.code, a.gameToken).then(function(n) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == n.data.code ? m.a.loginNew(e.email, n.data.session, n.data.guid, "loginbyemail") : 1002 == n.data.code || 1038 == n.data.code || 1039 == n.data.code || 1040 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["enterEmailTip"]')) : 1020 == n.data.code || 1034 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["wrong code"]')) : 1004 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["unbindEmail"]')) : a.$codeErrorToast(n.data.code, n.data.message)
                })
            },
            submit: function() {
                var e = this;
                return this.email ? 6 == this.code.length && (!this.submitforbiden && !this.submitState && (this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.login())) : (this.emailerror = !0,
                !1)
            },
            submitEmailCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && m.a.checkemail(this.email) && (this.codeerror = !1,
                this.submitforbiden = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? this.codeerror = !0 : this.codeerror = !1,
                this.submitEmailCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitEmailCheck(),
                this.Mlog.visitLog({
                    behavior: "fill_emailcode",
                    type: 1,
                    logs: "login"
                })
            },
            setephone: function(e) {
                this.email = m.a.trim(e),
                this.submitEmailCheck()
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(15)
      , o = n(2)
      , i = n.n(o)
      , s = n(4)
      , r = n.n(s)
      , c = n(8)
      , d = n.n(c)
      , l = n(5)
      , u = n.n(l)
      , m = n(3)
      , h = n(1);
    a.default = {
        data: function() {
            return {
                phoneerror: !1,
                codeerror: !1,
                phone: "",
                submitforbiden: !0,
                translate: {
                    code: this.$t('message["Code"]'),
                    phone: this.$t('message["Phone"]'),
                    tip: this.$t('message["LANG_STRID_Accountchangepassword_220520"]'),
                    tip2: this.$t('message["LANG_STRID_Accountchangepassword_220507"]'),
                    needErrorphone: "",
                    needErrorcode: ""
                },
                gameToken: "",
                cdTime: 0,
                times: 120,
                time: 120,
                timer: null,
                timeText: this.$t('message["send code"]'),
                returnType: h.a.getUrlParams("type") || "",
                phonevalue: "",
                code: "",
                preList: [{
                    country: "CN",
                    phone: "86"
                }],
                country: "",
                phoneerrordesc: "",
                prephone: "",
                submitState: !1,
                countDownState: !1
            }
        },
        created: function() {
            if (this.Mlog.visitLog({
                behavior: "send_phonecode",
                type: 0,
                logs: "login"
            }),
            window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = h.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a).areaCode;
                this.preList = h.a.getPhonePre(n),
                this.gameToken = JSON.parse(a).userTokenPhoneLogin || JSON.parse(a).userTokenForgotPwd || JSON.parse(a).userToken || "",
                this.time = JSON.parse(a).verifyCodeCD || 120,
                this.times = JSON.parse(a).verifyCodeCD || 120
            }
        },
        methods: {
            getcode: function() {
                var e = this;
                m.a.phone_login_paasoo(this.prephone + this.phone).then(function(a) {
                    0 == a.data.code ? e.countDown() : 1002 == a.data.code || 1038 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')),
                    e.countDownState = !1) : 1004 == a.data.code ? (e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')),
                    e.countDownState = !1) : (e.Hub.$emit("showtoast", a.data.message),
                    e.countDownState = !1)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (this.Mlog.visitLog({
                    behavior: "send_phonecode",
                    type: 1,
                    logs: "login"
                }),
                this.prephone ? this.phone && n.i(t.a)("+" + this.prephone + this.phone) ? (this.phoneerror = !1,
                this.countDownState = !0,
                void this.getcode()) : (this.phoneerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["phone error"]')),
                !1) : (this.phoneerror = !0,
                this.Hub.$emit("showtoast", this.$t('message["enter call code"]')),
                !1))
            },
            login: function() {
                var e = this
                  , a = this;
                this.$showDialog(),
                m.a.phone_login_confirm_paasoo(a.prephone + a.phone, a.code, a.gameToken).then(function(n) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == n.data.code ? h.a.loginNew(a.prephone + a.phone, n.data.session, n.data.guid, "login-new") : 1002 == n.data.code || 1038 == n.data.code || 1039 == n.data.code || 1040 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["LANG_STRID_Accountchangepassword_220520"]')) : 1020 == n.data.code || 1034 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["wrong code"]')) : 1004 == n.data.code ? a.Hub.$emit("showtoast", a.$t('message["unbinded phone"]')) : a.$codeErrorToast(n.data.code, n.data.message)
                })
            },
            submit: function() {
                var e = this;
                return this.prephone && this.phone && n.i(t.a)("+" + this.prephone + this.phone) ? 6 == this.code.length && (!this.submitforbiden && !this.submitState && (this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.login())) : (this.phoneerror = !0,
                !1)
            },
            chosePre: function(e) {
                var a = e.country
                  , n = e.phone;
                this.country = a,
                this.prephone = n,
                this.submitCodeCheck()
            },
            submitCodeCheck: function() {
                this.submitforbiden = !0,
                "" != this.code && 6 == this.code.length && "" != this.phone && "" != this.prephone && n.i(t.a)("+" + this.prephone + this.phone) && (this.codeerror = !1,
                this.submitforbiden = !1)
            },
            checkecode: function(e) {
                "" != e && 6 != this.code.length ? this.codeerror = !0 : this.codeerror = !1,
                this.submitCodeCheck()
            },
            setecode: function(e) {
                this.code = h.a.trim(e),
                this.submitCodeCheck(),
                this.Mlog.visitLog({
                    behavior: "fill_phonecode",
                    type: 1,
                    logs: "login"
                })
            },
            submitPhoneCheck: function() {},
            checkephone: function(e) {},
            setephone: function(e) {
                this.phone = h.a.trim(e),
                this.submitCodeCheck()
            }
        },
        components: {
            MphoneInput: r.a,
            MphoneButton: d.a,
            Notice: u.a,
            Mhead: i.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(24)
      , o = n.n(t)
      , i = n(26)
      , s = n.n(i)
      , r = n(25)
      , c = n.n(r)
      , d = n(15)
      , l = n(2)
      , u = n.n(l)
      , m = n(4)
      , h = n.n(m)
      , g = n(6)
      , p = n.n(g)
      , _ = n(5)
      , f = n.n(_)
      , v = n(3)
      , A = n(1);
    a.default = {
        data: function() {
            return {
                init: !1,
                submitforbiden: !0,
                email: "",
                gameToken: "",
                placeholder: {
                    phone: this.$t('message["Phone"]'),
                    code: this.$t('message["Code"]'),
                    password: this.$t('message["Password"]'),
                    password2: this.$t('message["Re-Enter Password"]'),
                    mtaccount: this.$t('message["LANG_STRID_MTregister_221106"]')
                },
                translate: {
                    phone: this.$t('message["LANG_STRID_Accountchangepassword_220520"]'),
                    code: this.$t('message["LANG_STRID_Accountswitch_220504"]'),
                    password: this.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]'),
                    password2: this.$t('message["Please enter your password again"]'),
                    mtaccount: this.$t('message["account rule"]')
                },
                isservice: !0,
                returnType: A.a.getUrlParams("type") || "",
                preList: [{
                    country: "CN",
                    phone: "86"
                }],
                country: "",
                prephone: "",
                phone: "",
                code: "",
                timeText: this.$t('message["send code"]'),
                mtaccount: "",
                password: "",
                password2: "",
                time: 120,
                times: 120,
                submitState: !1,
                countDownState: !1
            }
        },
        created: function() {
            var e = this;
            return c()(s.a.mark(function a() {
                var n, t, o;
                return s.a.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            window.localStorage.getItem("emailsended") && (n = window.localStorage.getItem("emailsended"),
                            t = A.a.b64DecodeUnicode(n),
                            o = JSON.parse(t).areaCode,
                            e.preList = A.a.getPhonePre(o),
                            e.time = JSON.parse(t).verifyCodeCD || 120,
                            e.times = JSON.parse(t).verifyCodeCD || 120,
                            e.preList = A.a.getPhonePre(o),
                            e.gameToken = JSON.parse(t).userToken);
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, a, e)
            }))()
        },
        mounted: function() {
            this.init = !0
        },
        methods: {
            toRule: function() {
                this.$emit("rule", "quickcreate"),
                this.$router.push({
                    path: "rule"
                })
            },
            service: function() {
                this.isservice ? this.isservice = !1 : this.isservice = !0,
                this.submitCheck()
            },
            jump: function() {
                this.$router.push({
                    path: "email-register"
                })
            },
            getcode: function() {
                var e = this;
                v.a.sendPhoneRegistCode(this.prephone + this.phone, this.mtaccount, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDown() : (e.$codeErrorToast(t, o),
                    e.countDownState = !1)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                return !this.countDownState && "" != this.timeText && (!!this.checkPhoneFun() && (!!this.onCheckmtaccount() && (this.countDownState = !0,
                void this.getcode())))
            },
            chosePre: function(e) {
                var a = e.country
                  , n = e.phone;
                this.country = a,
                this.prephone = n,
                this.submitCheck()
            },
            onCheckphone: function() {
                this.checkPhoneFun()
            },
            setephone: function(e) {
                this.phone = A.a.trim(e),
                this.submitCheck()
            },
            checkPhoneFun: function() {
                return this.prephone ? !(!this.phone || !n.i(d.a)("+" + this.prephone + this.phone)) || ("" != this.phone && this.Hub.$emit("showtoast", this.$t('message["phone error"]')),
                !1) : ("" != this.phone && this.Hub.$emit("showtoast", this.$t('message["enter call code"]')),
                !1)
            },
            onCheckecode: function(e) {
                "" != e && 6 != this.code.length && this.Hub.$emit("showtoast", this.$t('message["wrong code"]'))
            },
            setecode: function(e) {
                this.code = A.a.trim(e),
                this.submitCheck()
            },
            onCheckmtaccount: function() {
                return "" == this.mtaccount || (!!A.a.checkMoontonAccount(this.mtaccount) || (this.Hub.$emit("showtoast", this.$t('message["account rule"]')),
                !1))
            },
            setmtaccount: function(e) {
                this.mtaccount = A.a.trim(e),
                this.submitCheck()
            },
            onCheckpassword: function() {
                this.checkPasswordFun("password")
            },
            setpasswordvalue: function(e) {
                this.password = A.a.trim(e),
                this.submitCheck()
            },
            checkePasswordConfirm: function() {
                this.checkPasswordFun("")
            },
            setePasswordConfirm: function(e) {
                this.password2 = A.a.trim(e),
                this.submitCheck()
            },
            checkPasswordFun: function(e) {
                return "password" == e ? !!A.a.passwordTest(this.password) || ("" != this.password && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1) : A.a.passwordTest(this.password2) ? this.password2 == this.password || (this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220514"]')),
                !1) : ("" != this.password2 && this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')),
                !1)
            },
            submitCheck: function() {
                this.prephone && this.phone && n.i(d.a)("+" + this.prephone + this.phone) && 6 == this.code.length && A.a.passwordTest(this.password) && A.a.passwordTest(this.password2) && this.password2 == this.password && this.isservice ? "" != this.mtaccount ? A.a.checkMoontonAccount(this.mtaccount) ? this.submitforbiden = !1 : this.submitforbiden = !0 : this.submitforbiden = !1 : this.submitforbiden = !0
            },
            submit: function() {
                var e = this;
                if (this.submitforbiden || this.submitState)
                    return !1;
                this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                v.a.confirmPhoneRegist(this.prephone + this.phone, this.password, this.code, this.mtaccount, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , i = n.message;
                    e.submitState = !1,
                    e.$hideDialog(),
                    e.Mlog.visitLog({
                        behavior: "phone_register",
                        phone: e.prephone + e.phone,
                        accouent: e.mtaccount,
                        res: o()(a)
                    }),
                    0 == t ? A.a.phoneregist("", "", "") : 1001 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["same account"]')) : 1029 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["zhanyong phone"]')) : 1036 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["frequent"]')) : e.$codeErrorToast(t, i)
                })
            }
        },
        components: {
            MInput: h.a,
            Mbutton: p.a,
            Notice: f.a,
            Mhead: u.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {
                type: r.a.getUrlParams("type") || "",
                session: r.a.getUrlParams("session") || "",
                guid: r.a.getUrlParams("guid") || "",
                phone: r.a.getUrlParams("phone") || ""
            }
        },
        methods: {},
        components: {
            Mbtn: s.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1)
      , h = n(62)
      , g = n.n(h);
    a.default = {
        data: function() {
            return {
                errornew: !1,
                errorConfirm: !1,
                submitforbiden: !0,
                translate: {
                    notice: this.$t('message["Please enter your email address to receive the email with a new password."]') + " " + this.$t('message["unreset"]'),
                    password1: this.$t('message["New Password"]'),
                    password2: this.$t('message["Please enter your password again"]'),
                    tip1: this.$t('message["LANG_STRID_Accountchangepassword_220511"]'),
                    tip2: "",
                    needErrorNew: "",
                    needErrorConfirm: ""
                },
                gameToken: "",
                cdTime: 0,
                time: 0,
                timer: null,
                phonevalue: "",
                codevalue: "",
                passwordValue: "",
                confirmPasswordValue: "",
                code: m.a.getUrlParams("code") || "",
                phone: m.a.getUrlParams("phone") || "",
                type: m.a.getUrlParams("type") || "",
                email: m.a.getUrlParams("email") || "",
                guid: m.a.getUrlParams("guid") || "",
                token: m.a.getUrlParams("token") || "",
                submitState: !1
            }
        },
        created: function() {},
        methods: {
            getpass: function() {
                var e = this;
                "email" == this.type ? u.a.mail_resetpwd_confirm(this.email, this.guid, this.code, g()(this.confirmPasswordValue), 0, this.token).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? e.$router.push({
                        path: "popup",
                        query: {
                            type: "password"
                        }
                    }) : 1002 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')) : 1003 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220513"]')) : 1004 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')) : e.$codeErrorToast(a.data.code, a.data.message)
                }) : u.a.phone_resetpwd_confirm_paasoo(this.phone, this.guid, this.code, g()(this.confirmPasswordValue), 0, this.token).then(function(a) {
                    e.submitState = !1,
                    e.$hideDialog(),
                    0 == a.data.code ? e.$router.push({
                        path: "popup",
                        query: {
                            type: "password"
                        }
                    }) : 1002 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220520"]')) : 1003 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_Accountchangepassword_220513"]')) : 1004 == a.data.code ? e.Hub.$emit("showtoast", e.$t('message["unbinded phone"]')) : e.$codeErrorToast(a.data.code, a.data.message)
                })
            },
            submit: function() {
                var e = this;
                return !(!m.a.passwordTest(this.passwordValue) || this.submitState) && (this.passwordValue != this.confirmPasswordValue ? (this.errorConfirm = !0,
                this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220514"]')),
                !1) : (this.submitState = !0,
                this.$showDialog(),
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass()))
            },
            submitCheck: function() {
                this.submitforbiden = !0,
                m.a.passwordTest(this.passwordValue) && (this.passwordValue == this.confirmPasswordValue ? (this.submitforbiden = !1,
                this.errorConfirm = !1) : "" != this.confirmPasswordValue && (this.errorConfirm = !0,
                this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220514"]'))))
            },
            checkenew: function(e) {
                m.a.passwordTest(e) ? this.errornew = !1 : (this.errornew = !0,
                this.Hub.$emit("showtoast", this.$t('message["LANG_STRID_Accountchangepassword_220513"]')))
            },
            checkeConfirm: function(e) {
                m.a.passwordTest(e) ? this.errorConfirm = !1 : this.errorConfirm = !0,
                this.submitCheck()
            },
            setenew: function(e) {
                this.passwordValue = m.a.trim(e)
            },
            seteConfirm: function(e) {
                this.confirmPasswordValue = e,
                m.a.passwordTest(this.passwordValue) && ("" != this.confirmPasswordValue ? this.submitforbiden = !1 : this.submitforbiden = !0)
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(6)
      , s = n.n(i)
      , r = n(1);
    a.default = {
        data: function() {
            return {
                step: 1,
                emailhide: "",
                email: "",
                phone: "",
                phonehide: "",
                gameToken: "",
                guid: "",
                time: 120
            }
        },
        components: {
            Mhead: o.a,
            Mbutton: s.a
        },
        created: function() {
            if (window.localStorage.getItem("emailsended")) {
                var e = window.localStorage.getItem("emailsended")
                  , a = r.a.b64DecodeUnicode(e)
                  , n = JSON.parse(a);
                console.log("客户端传递参数：", n),
                this.guid = n.guid,
                this.email = n.email || "",
                this.phone = n.phone || "",
                this.gameToken = n.userToken,
                this.time = n.verifyCodeCD || 120,
                n.phonehide && "" !== n.phonehide ? this.phonehide = n.phonehide : this.phonehide = this.phone,
                n.emailhide && "" !== n.emailhide ? this.emailhide = n.emailhide : this.emailhide = this.email
            }
        },
        methods: {
            cancel: function() {
                r.a.close()
            },
            confirm: function() {
                1 === this.step ? this.email && "" !== this.email ? this.$router.push({
                    path: "unbind-phone-code",
                    query: {
                        guid: this.guid,
                        email: this.email,
                        emailhide: this.emailhide,
                        phone: this.phone,
                        gameToken: this.gameToken,
                        time: this.time
                    }
                }) : this.step = 2 : r.a.close()
            }
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = n(2)
      , o = n.n(t)
      , i = n(4)
      , s = n.n(i)
      , r = n(8)
      , c = n.n(r)
      , d = n(5)
      , l = n.n(d)
      , u = n(3)
      , m = n(1);
    a.default = {
        data: function() {
            return {
                placeholder: {
                    code: this.$t('message["LANG_STRID_Accountswitch_220503"]'),
                    email: this.$t('message["Email address"]')
                },
                translate: {
                    code: this.$t('message["Enter Email Code"]'),
                    email: this.$t('message["To obtain the latest information about us, please sign up with a valid email"]')
                },
                code: "",
                submitforbiden: !0,
                timeText: this.$t('message["send code"]'),
                time: m.a.getUrlParams("time") || "",
                times: m.a.getUrlParams("time") || "",
                countDownState: !1,
                submitEmailState: !1,
                timer: null,
                title: "",
                emailhide: m.a.getUrlParams("emailhide") || "",
                email: m.a.getUrlParams("email") || "",
                phone: m.a.getUrlParams("phone") || "",
                gameToken: m.a.getUrlParams("gameToken") || "",
                guid: m.a.getUrlParams("guid") || ""
            }
        },
        created: function() {
            this.title = this.$t('message["LANG_STRID_UnbindPhone_230706"]', {
                0: this.emailhide
            })
        },
        methods: {
            getcode: function() {
                var e = this;
                u.a.email_unbind_phone_send_email_code(this.guid ? "" : this.email, this.guid ? "" : this.phone, this.guid, this.gameToken).then(function(a) {
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    0 == t ? e.countDown() : (e.countDownState = !1,
                    e.$codeErrorToast(t, o))
                })
            },
            getpass: function() {
                var e = this;
                u.a.email_unbind_phone_confirm(this.guid ? "" : this.email, this.guid ? "" : this.phone, this.code, this.guid).then(function(a) {
                    e.$hideDialog();
                    var n = a.data || {}
                      , t = n.code
                      , o = n.message;
                    e.submitState = !1,
                    0 == t ? (clearInterval(e.timer),
                    e.Hub.$emit("showtoast", e.$t('message["LANG_STRID_UnbindPhone_230708"]')),
                    setTimeout(function() {
                        m.a.close()
                    }, 2e3)) : e.$codeErrorToast(t, o)
                })
            },
            countDown: function() {
                var e = this;
                this.timeText = "",
                this.title = this.$t('message["LANG_STRID_UnbindPhone_230707"]', {
                    0: this.emailhide
                }),
                this.timer = setInterval(function() {
                    if (e.time <= 0)
                        return e.timeText = e.$t('message["send code"]'),
                        e.title = e.$t('message["LANG_STRID_UnbindPhone_230706"]', {
                            0: e.emailhide
                        }),
                        e.time = e.times,
                        e.countDownState = !1,
                        clearInterval(e.timer),
                        !1;
                    e.time--
                }, 1e3)
            },
            clickCountDown: function() {
                if (this.countDownState || "" == this.timeText)
                    return !1;
                this.countDownState = !0,
                this.getcode()
            },
            submit: function() {
                var e = this;
                return !this.submitforbiden && (!this.submitState && (this.$showDialog(),
                this.submitState = !0,
                setTimeout(function() {
                    e.submitState = !1
                }, 9e3),
                void this.getpass()))
            },
            submitCheck: function() {
                "" != this.code && 6 == this.code.length ? this.submitforbiden = !1 : this.submitforbiden = !0
            },
            checkecode: function() {
                this.submitCheck()
            },
            setecode: function(e) {
                this.code = m.a.trim(e),
                this.submitCheck()
            }
        },
        components: {
            MphoneInput: s.a,
            MphoneButton: c.a,
            Notice: l.a,
            Mhead: o.a
        }
    }
}
, function(e, a, n) {
    "use strict";
    var t, o = n(220), i = n.n(o), s = n(26), r = n.n(s), c = n(81), d = n.n(c), l = n(24), u = n.n(l), m = n(25), h = n.n(m), g = n(117), p = n.n(g), _ = n(62), f = n.n(_), v = n(80), A = "";
    Mlog && (t = new Mlog({
        activity: "mtacc"
    })),
    A = "https://accountmtapi.mobilelegends.com",
    a.a = function() {
        function e(e, a) {
            return p.a.get("", {
                params: e
            })
        }
        function a(e) {
            var a = ""
              , n = i()(e).sort();
            for (var t in n)
                void 0 !== e[n[t]] && null !== e[n[t]] && "only_check" != n[t] && "sms_type" != n[t] && (a += n[t] + "=" + e[n[t]] + "&");
            return a
        }
        var n = function() {
            var e = h()(r.a.mark(function e(n, o) {
                var i, s, c;
                return r.a.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t && t.visitLog({
                                behavior: "api_request",
                                ajaxData: u()(n)
                            }),
                            document.getElementsByClassName("loadingwrapper")[0].setAttribute("class", "loadingwrapper"),
                            i = a(n.params),
                            i += "op=" + n.op,
                            s = f()(i),
                            n.sign = s,
                            n.lang = localStorage.getItem("language") || "en",
                            !o) {
                                e.next = 13;
                                break
                            }
                            return e.next = 10,
                            p.a.post(o, u()(n));
                        case 10:
                            c = e.sent,
                            e.next = 16;
                            break;
                        case 13:
                            return e.next = 15,
                            p.a.post("", u()(n));
                        case 15:
                            c = e.sent;
                        case 16:
                            return e.abrupt("return", new d.a(function(e, a) {
                                c.data.message = v.a[n.lang][c.data.code],
                                "1005" == c.data.code && (c.data.message = c.data.message.replace("xxx", c.data.left_num)),
                                document.getElementsByClassName("loadingwrapper")[0].setAttribute("class", "loadingwrapper hide"),
                                e(c),
                                t && t.visitLog({
                                    behavior: "api_response",
                                    ajaxData: u()(c.data)
                                })
                            }
                            ));
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            }));
            return function(a, n) {
                return e.apply(this, arguments)
            }
        }();
        return p.a.defaults.baseURL = A,
        p.a.defaults.headers = {
            "Content-Type": "application/json"
        },
        p.a.defaults.timeout = 1e4,
        p.a.defaults.retry = 2,
        p.a.defaults.retryDelay = 1e3,
        {
            get: e,
            post: n
        }
    }()
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "عنوان البريد الإلكتروني",
            Password: "كلمة السر",
            "Sign up": "تسجيل حساب",
            "Forgot password": "نسيت كلمة المرور",
            "Create Your Moonton Account": "إنشاء حساب مونتون",
            "To obtain the latest information about us, please sign up with a valid email": "استخدم عنوان بريد إلكتروني صالح للاستخدام لكي يصلك أحدث الأخبار حول اللعبة",
            "Re-Enter Password": "تأكيد كلمة المرور",
            "Please agree to the Moonton": "الرجاء الموافقة على",
            "terms of service": "شروط الخدمة لمونتون",
            Submit: "إرسال",
            "E-Mail format error": "عنوان البريد إلكتروني غير صالح",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "استخدم ما لا يقل عن 6 أحرف من الأحرف الكبيرة والصغيرة والأرقام، يرجى عدم استخدام الرموز الخاصة",
            "These passwords dont' match": "كلمة المرور غير متطابقة",
            "Please enter your email address": "الرجاء إدخال عنوان بريدك الإلكتروني",
            "Please enter your password": "الرجاء إدخال كلمة المرور",
            "Please confirm your password": "الرجاء تأكيد كلمة المرور",
            "Please agree to the Moonton Terms of Service": "الرجاء الموافقة على شروط الخدمة الخاصة بمونتون",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "\nتم إرسال رسالة للتحقق من عنوان البريد الإلكتروني، يرجى الضغط على الرابط المرفق في البريد لإكمال التحقق. إذا لم تتلق أي رسالة، الرجاء التحقق من صندوق المهملات",
            Confirm: "تأكيد",
            "Please enter your email address to receive the email with a new password.": "الرجاء إدخال عنوان بريدك الإلكتروني المربوط لتتلقى رسالة لإعادة تعيين كلمة المرور،",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "تم إرسال بريد إلكتروني لإعادة تعيين كلمة المرور إلى عنوان بريدك الإلكتروني المربوط، الرجاء التحقق منه الآن",
            Continue: "متابعة",
            "Sign in with your Moonton Account": "تسجيل الدخول عن طريق حساب مونتون",
            "Sign in": "تسجيل الدخول",
            Congratulations: "تهانينا",
            "Your email": ") مع حسابك في اللعبة بنجاح",
            "is confirmed. Thank you!": "تم ربط عنوان البريد (",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co.Ltd.",
            Notice: "إشعار",
            "Your account has already been confirmed.": "تم إنشاء الحساب بالفعل",
            "The link has expired Please request a new link in-gme. Thank you.": "انتهت صلاحية الرابط، يمكنك إرسال رابط جديد من داخل اللعبة",
            "Reset Password": "أعد تعيين كلمة المرور",
            "New Password": "كلمة مرور جديدة",
            "Re-Enter-Password": "تأكيد كلمة المرور",
            "Please confirm your new password": "الرجاء التأكد من كلمة المرور",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "تم تغيير كلمة المرور، الرجاء تسجيل الدخول إلى اللعبة باستخدام كلمة المرور الجديدة",
            "Bind your Moonton Account": "ربط حساب مونتون",
            "Check Your Email": "تفقد بريدك الإلكتروني",
            "Re-enter email": "تأكيد بريدك الإلكتروني",
            "Email incompatible": "البريد الإلكتروني غير متطابق",
            "Please enter your password again": "تأكيد كلمة المرور",
            "Moonton Account": "حساب مونتون",
            "account rule": "استخدم 6-20 حرف أو رقم، أو استخدم _ ثم ابدأ بحرف",
            "Send Verification Email": "إرسال بريد إلكتروني",
            "to email": "\nيرجى التحقق من الرسالة في صنودق الوارد",
            "sended email": "تم إرسال رسالة تحقق إلى",
            "change email": "تغيير عنوان البريد الإلكتروني",
            "Email Registration": "تسجيل باستخدام البريد الإلكتروني",
            "Quick Registration": "التسجيل السريع",
            "Accept the agreement and register": "الموافقة على الاتفاقية والتسجيل",
            "same account": "هذا الاسم مستخدم بالفعل. يرجى اختيار اسم آخر",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "الرجاء إدخال كلمة مرور حساب مونتون الحالي للتأكيد",
            "congratulations account": "تهانينا! لقد قمت بإنشاء حساب مونتون وقمت بربطه مع تقدمك الحالي في اللعبة",
            "empty email": "للحفاظ على أمان حسابك، نوصي بأن تقوم بربط حسابك ببريد إلكتروني لكي تتمكن من تسجيل الدخول إلى الحساب وتغيير كلمة المرور",
            "used email": "إن البريد الإلكتروني هذا مربوط بالفعل مع حساب آخر. يرجى إدخال عنوان بريد إلكتروني آخر أو قم بتسجيل الدخول إلى الحساب عن طريق تبديل الحساب",
            "useful email": "تم إرسال بريد للتحقق إلى عنوان بريدك الإلكتروني المربوط. يرجى الضغط على الرابط المرفق في البريد لإكمال عملية التحقق خلال 24 ساعة. إذا لم تجد البريد، يرجى التحقق من صندوق المهملات",
            "Connect to Email": "ربط البريد الإلكتروني",
            unreset: "لا يمكنك إعادة تعيين كلمة المرور إذا لم يكن حساب مونتون الخاص بك مربوط ببريد إلكتروني",
            emailtime1: "يمكنك إعادة إرسال البريد الإلكتروني بعد",
            emailtime2: "ث",
            "have fun": "تم ربط الحساب. استمتع في اللعبة",
            "continue bind email": "ربط عنوان البريد الإلكتروني",
            "server error": "السيرفر مشغول الآن. يرجى المحاولة في وقت آخر",
            "wrong content": "لم تستوفي المتطلبات",
            "enter right account": "يرجى إدخال عنوان بريد إلكتروني أو حساب مونتون صالح",
            "reset email": "تغيير عنوان البريد الإلكتروني",
            "send email1": "يرجى الضغط على الرابط المرفق في الرسالة لإكمال عملية التغيير",
            "send email2": "سيتم إرسال رسالة تحقق إلى البريد",
            "send email": "إرسال بريد إلكتروني",
            "sended email1": "يمكن إعادة إرسال رسالة التحقق بعد",
            "sended email2": "تم إرسال رسالة تحقق إلى البريد",
            "sended email3": "ث",
            "sended email4": "سيبقى حسابك مربوط مع عنوان البريد الإلكتروني السابق إلى أن تكتمل عملية التغيير",
            "sended email5": "تم إرسال رسالة تحقق إلى البريد",
            "empty code": "من فضلك أدخل رمز التحقق",
            "wrong code": "رمز التحقق خاطئ",
            "enter new email code": "يرجى إدخال رمز التحقق",
            "enter new email": "عنوان البريد الإلكتروني الجديد",
            "send code fail": "فشلت العملية",
            "send code success": "تم إرسال رمز التحقق",
            "reset email success": "تمت إعادة تعيين عنوان البريد الإلكتروني",
            "reset emial fail": "فشلت العملية. يرجى إعادة المحاولة",
            "binded email": "عنوان البريد الإلكتروني هذا مربوط بالفعل مع حساب آخر",
            "send email fail": "فشل إرسال بريد إلكتروني، يرجى التحقق مما إذا كنت قد قمت بربط حساب مونتون وعنوان بريدك الإلكتروني",
            "send code": "أرسل رمز التحقق",
            "outdata link": "انتهت صلاحية الرابط",
            registed: "عنوان البريد الإلكتروني هذا مربوط بحساب آخر، يرجى إدخال عنوان بريد أخر والمحاولة مرة أخرى",
            frequent: "محاولات فاشلة كثيرة. يرجى المحاولة لاحقا",
            "phone code wrong": "رمز التحقق غير صالح",
            "binded phone": "هذا الحساب مربوط بالفعل برقم هاتف",
            "phone error": "رقم الهاتف غير صالح",
            "unbinded phone": "رقم الهاتف غير مربوط بأي حساب في اللعبة",
            "zhanyong phone": "رقم الهاتف مربوط بحساب أخر",
            "Phone Registration": "تسجيل برقم الهاتف",
            Phone: "رقم الهاتف",
            Code: "رمز التحقق",
            "Enter Phone": "يرجى إدخال رقم هاتف صالح لاستلام رمز التحقق",
            "Enter Code": "اضغط على الزر الأيمن لإرسال رمز التحقق عبر رسالة نصية إلى رقم هاتفك وقم بإدخال الرمز لإكمال عملية التحقق",
            "send old phone1": "",
            "a code": "أرسل رمز التحقق إلى الرقم",
            "enter new phone": "يرجى إدخال رمز التحقق لإكمال عملية التحقق",
            "quit change fail": "سيبقى حساب مونتون الخاص بك مربوطا مع رقم هاتفك السابق إلى أن تكتمل عملية التحقق",
            "change phone success": "تم تغيير رقم الهاتف المربوط بنجاح",
            "change phone": "تغيير رقم الهاتف المربوط",
            "password err too many": "محاولات فاشلة كثيرة. يرجى المحاولة مجددا غدا",
            "email verification": "({0}) التحقق عبر البريد الإلكتروني",
            "Enter Email Code": "انقر على الزر الأيمن لإرسال رمز التحقق إلى عنوان بريدك الإلكتروني وأدخل رمز التحقق لإكمال التحقق",
            "Email verification successful": "تم التحقق من البريد الإلكتروني بنجاح. يرجى إدخال رقم الهاتف الذي تريد ربطه",
            "phone verification": "({0}) إرسال رمز التحقق عبر رسالة نصية إلى رقم الهاتف",
            "email sended and goto verify": "يرجى الضغط على الرابط المرفق في الرسالة لإكمال عملية التحقق {0} تم إرسال رسالة تحقق إلى البريد",
            "Phone Number Connected": "تم ربط رقم الهاتف",
            "add phone": "ربط رقم الهاتف",
            "add email": "ربط البريد الإلكتروني",
            "email verification code holder": "رمز التحقق",
            "phone verification successful": "تم التحقق من الهاتف بنجاح. يرجى إدخال عنوان البريد الإلكتروني الذي تريد ربطه",
            "change passwrod tip": "ملاحظة: يمكنك فقط تغيير كلمة المرور لحساب مونتون المربوط مع عنوان البريد الإلكتروني الذي أدخلته",
            "enter call code": "يرجى اختيار مفتاح بلدك",
            wait: "محاولات كثيرة. يرجى المحاولة مرة أخرى بعد {time} ث",
            dofrequent: "لقد قمت بمحاولات كثيرة. يرجى المحاولة مجددا لاحقا",
            notman: "تم رفض طلب تسجيل الدخول الخاص بك لأسباب أمنية. يرجى التواصل مع خدمة العملاء إذا كان لديك أي أسئلة",
            hint: "إشعار",
            "change binding tips": "تغيير البريد الإلكتروني قيد المراجعة، يرجى الانتظار، يمكنك اختيار إلغاء التغيير أثناء هذه العملية، الوقت قبل أن تتمكن من تغيير عنوان البريد الإلكتروني: {x}",
            "contact customer service": "إذا كان لديك أي أسئلة، يرجى الاتصال بخدمة العملاء",
            "i know": "موافق",
            "cancel change": "إلغاء",
            "change pass": "تمت الموافقة على تغيير بريدك الإلكتروني، يرجى تأكيد عنوان بريدك الإلكتروني الجديد: {x}",
            "confirm change": "تغيير",
            LANG_STRID_Accountchangepassword_220501: "يرجى كتابة رقم الهاتف الذي قمت باستخدامه لربط الحساب مسبقًا لنتمكن من إرسالك رسالة إعادة تعيين كلمة المرور",
            LANG_STRID_Accountchangepassword_220503: "ملاحظة: عند كتابة رقم الهاتف ستتمكن من تغيير كلمة المرور لحساب مونتون المرتبط بهذا الرقم فقط",
            LANG_STRID_Accountchangepassword_220504: "التحقق عن طريق البريد",
            LANG_STRID_Accountchangepassword_220505: "عودة",
            LANG_STRID_Accountchangepassword_220506: "إعادة تعيين كلمة المرور لحساب مونتون",
            LANG_STRID_Accountchangepassword_220507: "إضغط على زر إرسال الرمز لنقوم بإرسال رمز التحقق إلى رقم الهاتف ثم قم بكتابة الرمز لإكمال التحقق",
            LANG_STRID_Accountchangepassword_220511: "يرجى كتابة 6 رموز على الأقل، قد تشمل الأحرف أو الأرقام، لكن يرجى تجنب استخدام الإشارات أو العلامات الخاصة",
            LANG_STRID_Accountchangepassword_220513: "كلمة المرور هذه غير صالحة للاستخدام، يرجى إعادة المحاولة",
            LANG_STRID_Accountchangepassword_220514: "كلمات المرور التي قمت بكتابتها غير متطابقة، يرجى إعادة المحاولة",
            LANG_STRID_Accountchangepassword_220515: "رمز التحقق غير صالح، يرجى إعادة المحاولة",
            LANG_STRID_Accountchangepassword_220516: "لقد تم إعادة تعيين كلمة المرور الخاصة بك",
            LANG_STRID_Accountchangepassword_220517: "إرسال الرمز",
            LANG_STRID_Accountchangepassword_220518: "التحقق من تسجيل الدخول",
            LANG_STRID_Accountchangepassword_220519: "يرجى كتابة رقم الهاتف الخاص بك ورمز التحقق لإكمال التحقق",
            LANG_STRID_Accountchangepassword_220520: "يرجى كتابة رقم هاتف صالح للاستخدام لنقوم بإرسال رمز التحقق لك",
            LANG_STRID_Accountchangepassword_220521: "إشعار تسجيل الدخول",
            LANG_STRID_Accountchangepassword_220522: "تم تغيير الحساب، يرجى إعادة تشغيل اللعبة",
            LANG_STRID_Accountchangepassword_220523: "تم تسجيل الدخول بنجاح، يرجى إعادة تشغيل اللعبة",
            LANG_STRID_Accountchangepassword_220524: "البريد الإلكتروني/حساب مونتون/رقم الهاتف",
            LANG_STRID_Accountchangepassword_220525: "تم إعادة تعيين كلمة المرور لحساب مونتون الخاص بك",
            LANG_STRID_Accountswitch_220501: "تغيير البريد الإلكتروني",
            LANG_STRID_Accountswitch_220502: "أرسل رمز التحقق إلى هذا البريد الإلكتروني {0}",
            LANG_STRID_Accountswitch_220503: "رمز التحقق للبريد",
            LANG_STRID_Accountswitch_220504: "اضغط على الزر الأيمن لنقوم بإرسال رمز التحقق إليك ثم قم بكتابة الرمز لإكمال التحقق",
            LANG_STRID_Accountswitch_220505: "أرسل رمز التحقق إلى رقم الهاتف هذا {0}",
            LANG_STRID_Accountswitch_220506: "يرجى كتابة بريد إلكتروني صالح للاستخدام",
            LANG_STRID_Accountswitch_220507: "لقد تم إرسال رمز التحقق إلى بريدك الإلكتروني",
            LANG_STRID_Accountswitch_220508: "يرجى كتابة رمز التحقق وبريدك الإلكتروني الجديد لإكمال التحقق",
            LANG_STRID_Accountswitch_220509: "سيستمر ربط حساب مونتون الخاص بك بحساب بريدك الإلكترنوي السابق، حتى يتم الانتهاء من التحقق",
            LANG_STRID_Accountswitch_220510: "يرجى كتابة بريدك الإلكتروني الجديد",
            LANG_STRID_Accountswitch_220511: "يرجى كتابة بريد إلكتروني صالح للاستخدام لنقوم بإرسال رمز التحقق لك",
            LANG_STRID_Accountswitch_220512: "هل أنت متأكد من رغبتك بإلغاء هذا الطلب؟",
            LANG_STRID_Accountswitch_220513: "إلغاء الطلب",
            LANG_STRID_Accountswitch_220514: "يتم الآن العمل على طلبك، يرجى الإنتظار، يمكنك إلغاء طلبك خلال هذه المدة، تستطيع تغيير بريدك الإلكتروني مرة أخرى بعد {x} ي {y} س {z} د، إذا كانت لديك أي أسئلة، يرجى التواصل معنا عن طريق خدمة العملاء",
            LANG_STRID_Accountswitch_220516: "أرسل رمز التحقق إلى هذا الهاتف <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "يتم الآن معاينة الطلب، يرجى الانتظار، يمكنك إلغاء الطلب خلال هذه المدة، ستتمكن من تغيير بريدك الإلكتروني بعد <span>{x} ي {y} س {z} د </span> ، إذا كانت لديك أي أسئلة، يرجى التواصل معنا عن طريق خدمة العملاء",
            LANG_STRID_Accountswitch_220518: "أرسل رمز التحقق إلى هذا البريد الإلكتروني <span>{0}</span>",
            LANG_STRID_MTregister_221101: "تسجيل سريع باستخدام البريد الإلكتروني",
            LANG_STRID_MTregister_221102: "البريد الإلكتروني",
            LANG_STRID_MTregister_221103: "يرجى كتابة حساب مونتون وكلمة المرور الخاصة بك",
            LANG_STRID_MTregister_221104: "يرجى تأكيد حساب مونتون وكلمة المرور الخاصة بك",
            LANG_STRID_MTregister_221105: "يرجى إعادة كتابة كلمة المرور الخاصة بك",
            LANG_STRID_MTregister_221106: "اسم المستخدم لحساب مونتون (اختياري)",
            LANG_STRID_MTregister_221107: "يجب أن يكون مكون من 6 حتى 20 حرف، شرطة سفلية أو أرقام مع شرط أن تبدأ بحرف",
            LANG_STRID_MTregister_221108: "لقد قرأت ووافقت على شروط الاستخدام",
            LANG_STRID_MTregister_221109: "ربط حساب مونتون الخاص بك",
            LANG_STRID_MTregister_221110: "لقد تم إرسال رمز التحقق إلى البريد الإلكتروني المرتبط بحسابك، يرجى إكمال التحقق خلال 24 ساعة، إذا لم يصلك بريد رمز التحقق، يرجى تفقد قائمة الرسائل المهملة",
            LANG_STRID_MTregister_221111: "التحقق عبر البريد",
            LANG_STRID_MTregister_221112: "لقد تم ربط حساب مونتون الخاص بك بنجاح، يمكنك الآن تسجيل الدخول باستخدام بريد وكلمة المرور الخاصة بحساب مونتون",
            LANG_STRID_MTregister_221113: "بريد إلكتروني غير صالح",
            LANG_STRID_MTregister_221114: "لقد تم ربط رقم الهاتف الخاص بك بنجاح",
            LANG_STRID_MTregister_221115: "تسجيل سريع باستخدام رقم الهاتف",
            LANG_STRID_MTregister_221116: "يرجى كتابة رقم الهاتف الخاص بك",
            LANG_STRID_MTregister_221117: "يرجى كتابة حساب مونتون وكلمة المرور التي تقوم باستخدامهما الآن لكي نتمكن من التأكد من هويتك",
            LANG_STRID_MTregister_221118: "رقم الهاتف غير صحيح",
            LANG_STRID_MTregister_221119: "كلمات المرور غير متطابقة، يرجى إعادة كتابتها",
            LANG_STRID_accinterception03: "الشبكة التي تستخدمها حاليًا غير مستقرة، يرجى المحاولة مجددًا ",
            LANG_STRID_Accountswitch_220519: "اسم المستخدم الخاص بحساب مونتون (مطلوب)",
            LANG_STRID_UnbindPhone_230701: "رقم الهاتف المرتبط حاليًا هو {0}",
            LANG_STRID_UnbindPhone_230702: " بمجرد إلغاء الربط، لن تتمكن من استخدام رقم الهاتف المذكور كمعرف لتسجيل الدخول إلى حساب مونتون الخاص بك",
            LANG_STRID_UnbindPhone_230703: " ننصحك بربط حساب مونتون الخاص بك مع بريد إلكتروني قبل إلغاء ربطه مع رقم هاتفك",
            LANG_STRID_UnbindPhone_230704: "إلغاء ربط رقم الهاتف",
            LANG_STRID_UnbindPhone_230705: "لم تقم بربط حساب مونتون بحسابك، يرجى المحاولة مرة أخرى بعد ربط حساب مونتون ",
            LANG_STRID_UnbindPhone_230706: "اضغط على الزر أدناه لإرسال رمز التحقق إلى البريد الإلكتروني المتصل بحساب مونتون الخاص بك: {0} ",
            LANG_STRID_UnbindPhone_230707: "تم إرسال رمز تحقق إلى البريد الإلكتروني {0} وهو البريد المتصل بحساب مونتون الخاص بك، يرجى التحقق منه ",
            LANG_STRID_UnbindPhone_230708: "تمت إزالة ربط رقم الهاتف الخاص بك بنجاح",
            passwordError: "كلمة المرور التي قمت بكتابتها غير صحيحة، يرجى المحاولة مرة أخرى ",
            passwordErrorWait: "   كلمة المرور التي قمت بكتابتها غير صحيحة، يرجى المحاولة مرة أخرى بعد {x} دقيقة {y} ثانية",
            passwordErrorWaitSec: "   كلمة المرور التي قمت بكتابتها غير صحيحة، يرجى المحاولة مرة أخرى بعد {y} ثانية",
            enterEmailTip: "يرجى كتابة عنوان بريد إلكتروني صالح لتلقي رسالتنا",
            sendEmailTip: 'اضغط على "إرسال رمز التحقق" وسنرسل بريدًا إلكترونيًا يحتوي على رمز التحقق إلى العنوان الذي قدمته. اكتب الرمز الذي تم إرساله لإكمال عملية التحقق',
            logInViaAccountPassword: "تسجيل الدخول باستخدام كلمة مرور الحساب",
            logInViaEmailVerification: "تسجيل الدخول عن طريق إرسال رمز تحقق إلى البريد الإلكتروني",
            enterEmailFirst: "يرجى كتابة عنوان بريدك الإلكتروني أولًا",
            verificationCodeError: "رمز التحقق غير صالح، يرجى المحاولة مرة أخرى",
            unbindEmail: "هذا البريد الإلكتروني غير مرتبط بحساب مونتون"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "电子邮箱",
            Password: "密码",
            "Sign up": "注册账号",
            "Forgot password": "忘记密码",
            "Create Your Moonton Account": "创建您的沐瞳账号",
            "To obtain the latest information about us, please sign up with a valid email": "请使用有效的电子邮件地址来创建您的沐瞳账号，以接受来自我们的消息",
            "Re-Enter Password": "请在这里确认您的密码",
            "Please agree to the Moonton": "同意沐瞳",
            "terms of service": "用户服务协议",
            Submit: "提交",
            "E-Mail format error": "邮箱格式错误",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "密码需要6位以上，必须包含大小写英文字母以及数字，不能包含特殊字符",
            "These passwords dont' match": "您两次输入的密码不一致",
            "Please enter your email address": "请输入邮箱",
            "Please enter your password": "请输入密码",
            "Please confirm your password": "请确认密码",
            "Please agree to the Moonton Terms of Service": "请同意沐瞳用户服务协议",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "验证邮件已经发送到您的注册邮箱。请前往您的注册邮箱进行确认。如果未收到邮件，请前往垃圾邮件查收",
            Confirm: "确定",
            "Please enter your email address to receive the email with a new password.": "请输入您的注册邮箱地址，以接收重置密码的邮件。",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "重置密码邮件已发送到您的注册邮箱，请及时查收，谢谢。",
            Continue: "继续",
            "Sign in with your Moonton Account": "登录您的沐瞳账号",
            "Sign in": "登录",
            Congratulations: "恭喜",
            "Your email": "您的邮箱",
            "is confirmed. Thank you!": "已注册成功。谢谢。",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co.,Ltd.",
            Notice: "注意",
            "Your account has already been confirmed.": "您的邮箱已注册为沐瞳账号。",
            "The link has expired Please request a new link in-gme. Thank you.": "链接已失效，请前往游戏重新获取链接。谢谢。",
            "Reset Password": "重置密码",
            "New Password": "新密码",
            "Re-Enter-Password": "请在这里确认您的密码",
            "Please confirm your new password": "请确认新密码",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "密码已经修改成，请前往游戏并重新登录沐瞳账号。",
            "Bind your Moonton Account": "绑定您的沐瞳账号",
            "Check Your Email": "前往您的邮箱",
            "Re-enter email": "请再次输入邮箱",
            "Email incompatible": "邮箱不一致",
            "Please enter your password again": "请再次输入密码",
            "Moonton Account": "沐瞳账号",
            "account rule": "6~20位字母、下划线或数字，首位为字母",
            "Send Verification Email": "发送验证邮件",
            "to email": "已对邮箱",
            "sended email": "发送了绑定验证邮件，请前往邮箱进行验证。",
            "change email": "更换绑定邮箱",
            "Email Registration": "邮箱注册",
            "Quick Registration": "快捷注册",
            "Accept the agreement and register": "接受协议并注册",
            "same account": "用户名重复！建议您更换用户名。",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "请输入当前登录的沐瞳账号密码以确认是您本人操作",
            "congratulations account": "恭喜您！沐瞳账号已成功创建并与当前角色绑定。",
            "empty email": "为了您的账号安全，推荐您继续为账号绑定邮箱，绑定成功后可以同时通过邮箱登录账号，并将可以修改密码。",
            "used email": "您所填写的绑定邮箱已被注册，推荐您更换其他邮箱，或通过切换账号功能进行登录。",
            "useful email": "验证邮件已经发送到了您的绑定邮箱中。请在24小时内确认绑定。如果未收到邮件，请检查是否被收入垃圾邮件。",
            "Connect to Email": "绑定邮箱",
            unreset: "未绑定邮箱的沐瞳账号无法重置密码。",
            emailtime1: "",
            emailtime2: "秒后可点击沐瞳账号邮箱按钮再次发送",
            "have fun": "账号绑定成功，祝您玩的开心。",
            "continue bind email": "继续绑定邮箱",
            "server error": "服务器繁忙，请稍后再试。",
            "wrong content": "填写的内容不符合要求!",
            "enter right account": "请输入正确的邮箱地址或沐瞳账号",
            "reset email": "更改邮箱",
            "send email1": "即将向您的沐瞳邮箱",
            "send email2": "发送链接，前往邮箱，点击链接完成换绑",
            "send email": "发送邮件",
            "sended email1": "已经向您的沐瞳邮箱",
            "sended email2": "发送了邮件，",
            "sended email3": "秒后可重新发送。",
            "sended email4": "我们已经向您的邮箱发送了一封验证邮件：",
            "sended email5": "请注意，在完成换绑步骤之前，您的账号将仍然和当前邮箱绑定。",
            "empty code": "验证码不能为空",
            "wrong code": "验证码错误",
            "enter new email code": "输入新邮箱内的验证码",
            "enter new email": "输入新邮箱",
            "send code fail": "发送验证码失败",
            "send code success": "验证码已发送",
            "reset email success": "换绑成功",
            "reset emial fail": "换绑失败，请重试",
            "binded email": "邮箱已被绑定",
            "send email fail": "邮件发送失败，请检查是否已绑定沐瞳账号及邮箱",
            "send code": "发送验证码",
            "outdata link": "链接已失效",
            registed: "该邮箱已被注册，请重新输入",
            frequent: "失败次数过多,请稍后再试",
            "phone code wrong": "手机验证码错误",
            "binded phone": "已经绑定手机了",
            "phone error": "非法的手机号",
            "unbinded phone": "该手机号没有被绑定过",
            "zhanyong phone": "手机号已经被占用",
            "Phone Registration": "手机号注册",
            Phone: "手机号码",
            Code: "手机短信验证码",
            "Enter Phone": "请输入有效的手机号码以接收我们的消息，创建您的沐瞳账号。",
            "Enter Code": "点击右侧发送验证码，我们将给您发送一条包含验证码的短信。输入验证码以完成验证。",
            "send old phone1": "向您的旧手机",
            "a code": "发送验证码：",
            "enter new phone": "请在下方输入新手机验证码，并完成验证。",
            "quit change fail": "在验证完成之前，您的Moonton账号将仍然和您的旧手机号绑定。",
            "change phone success": "手机号换绑成功！",
            "change phone": "手机号换绑",
            "password err too many": "密码输入错误次数过多，请明天再进行尝试。",
            "email verification": "邮箱({0})验证码验证",
            "Enter Email Code": "点击右侧发送验证码，在上框中输入您邮箱中收到的验证码进行验证",
            "Email verification successful": "成功验证邮箱，请输入需要绑定的手机号：",
            "phone verification": "手机号({0})短信验证码验证",
            "email sended and goto verify": "已经向您的邮箱{0}发送了验证邮件，请前往邮箱进行验证，完成邮箱绑定。",
            "Phone Number Connected": "手机号绑定成功！",
            "add phone": "添加安全手机号",
            "add email": "添加安全邮箱",
            "email verification code holder": "请输入邮件验证码",
            "phone verification successful": "安全手机验证成功。请输入您要绑定的邮箱：",
            "change passwrod tip": "请注意，您只能修改您输入的邮箱所对应的Moonton账号密码。",
            "enter call code": "请选择您的手机区号",
            wait: "操作过于频繁，请稍后再试 （{time}秒）",
            dofrequent: "操作过于频繁，请稍后再试",
            notman: "由于存在安全隐患，您的本次登录请求已被拒绝。如有任何问题，请联系客服。",
            hint: "提示",
            "change binding tips": "换绑正在审核中，请您耐心等待，审核期间可以取消换绑。更改沐瞳绑定邮箱还需：{x}",
            "contact customer service": "如有任何问题，请联系客服。",
            "i know": "我知道了",
            "cancel change": "取消换绑",
            "change pass": "换绑审核已通过，请确认您的换绑邮箱：{x}",
            "confirm change": "确认换绑",
            LANG_STRID_Accountchangepassword_220501: "请输入您的注册手机号，以便接收重置密码的短信。",
            LANG_STRID_Accountchangepassword_220503: "请注意，您只能修改您输入的手机号所对应的Moonton账户密码",
            LANG_STRID_Accountchangepassword_220504: "邮箱验证",
            LANG_STRID_Accountchangepassword_220505: "返回",
            LANG_STRID_Accountchangepassword_220506: "重置沐瞳账号密码",
            LANG_STRID_Accountchangepassword_220507: "点击“发送验证码”，我们将向您发送一条包含验证码的短信。输入验证码以完成验证。",
            LANG_STRID_Accountchangepassword_220511: "密码需要6位以上，必须包含大小写英文字母及整数，不能包含特殊字元",
            LANG_STRID_Accountchangepassword_220513: "该密码不符合规则，请重新输入",
            LANG_STRID_Accountchangepassword_220514: "两次输入的密码不同，请重新输入",
            LANG_STRID_Accountchangepassword_220515: "验证码输入错误，请重新输入",
            LANG_STRID_Accountchangepassword_220516: "当前沐瞳账号密码已重置成功",
            LANG_STRID_Accountchangepassword_220517: "验证码登录",
            LANG_STRID_Accountchangepassword_220518: "登录验证",
            LANG_STRID_Accountchangepassword_220519: "请在下方输入手机号及验证码，并完成验证",
            LANG_STRID_Accountchangepassword_220520: "请输入有效的手机号码以接收我们的消息",
            LANG_STRID_Accountchangepassword_220521: "登录提示",
            LANG_STRID_Accountchangepassword_220522: "切换账号成功，请重新登录客户端",
            LANG_STRID_Accountchangepassword_220523: "登录账号成功，请重新登录客户端",
            LANG_STRID_Accountchangepassword_220524: "电子邮箱/沐瞳账号/手机号码",
            LANG_STRID_Accountchangepassword_220525: "沐潼账号重置密码成功",
            LANG_STRID_Accountswitch_220501: "邮箱换绑",
            LANG_STRID_Accountswitch_220502: "向您的邮箱{0}发送验证码",
            LANG_STRID_Accountswitch_220503: "邮箱验证码",
            LANG_STRID_Accountswitch_220504: "点击右侧发送验证码，我们将向您发送一条包含验证码的邮件。输入验证码以完成验证。",
            LANG_STRID_Accountswitch_220505: "向您的手机{0}发送验证码",
            LANG_STRID_Accountswitch_220506: "输入有效的邮箱",
            LANG_STRID_Accountswitch_220507: "已发送邮箱验证码，请及时查看",
            LANG_STRID_Accountswitch_220508: "请在下方输入新邮箱及验证码，并完成验证。",
            LANG_STRID_Accountswitch_220509: "在完成验证之前，您的Moonton账号仍和您的旧邮箱绑定。",
            LANG_STRID_Accountswitch_220510: "请输入新邮箱",
            LANG_STRID_Accountswitch_220511: "请输入有效的邮箱账号以便接收我们的消息。",
            LANG_STRID_Accountswitch_220512: "是否确认取消换绑？",
            LANG_STRID_Accountswitch_220513: "取消换绑",
            LANG_STRID_Accountswitch_220514: "换绑正在审核中，请您耐心等待，审核期间可以取消换绑。更改沐瞳绑定邮箱还需{x}天{y}小时{z}分钟。如有任何问题，请联系客服。",
            LANG_STRID_Accountswitch_220516: "向您的手机<span>{0}</span>发送验证码",
            LANG_STRID_Accountswitch_220517: "换绑正在审核中，请您耐心等待，审核期间可以取消换绑。更改沐瞳绑定邮箱还需<span>{x}天{y}小时{z}分钟</span>。如有任何问题，请联系客服。",
            LANG_STRID_Accountswitch_220518: "向您的邮箱<span>{0}</span>发送验证码",
            LANG_STRID_MTregister_221101: "邮箱快捷注册",
            LANG_STRID_MTregister_221102: "电子邮箱",
            LANG_STRID_MTregister_221103: "请输入沐瞳账号密码",
            LANG_STRID_MTregister_221104: "请确认沐瞳账号密码",
            LANG_STRID_MTregister_221105: "请再次输入您的密码",
            LANG_STRID_MTregister_221106: "沐瞳自定义账号（非必填）",
            LANG_STRID_MTregister_221107: "6~20位字母、下划线或数字，首位必须为字母。",
            LANG_STRID_MTregister_221108: "我已阅读并接受使用者服务协议",
            LANG_STRID_MTregister_221109: "绑定您的沐瞳账号",
            LANG_STRID_MTregister_221110: "验证邮件已发送到了您的绑定邮箱中，请在24小时内确认绑定。如未收到邮件，请检查是否被收入了垃圾邮件中。",
            LANG_STRID_MTregister_221111: "前往邮箱验证",
            LANG_STRID_MTregister_221112: "您已成功绑定沐瞳账号，您可以通过沐瞳邮箱及密码进行登录。",
            LANG_STRID_MTregister_221113: "邮箱格式错误",
            LANG_STRID_MTregister_221114: "您已成功绑定沐瞳手机号",
            LANG_STRID_MTregister_221115: "手机号快捷注册",
            LANG_STRID_MTregister_221116: "输入手机号",
            LANG_STRID_MTregister_221117: "请输入当前登录的沐瞳账号密码，以确认是您本人操作。",
            LANG_STRID_MTregister_221118: "手机号格式错误",
            LANG_STRID_MTregister_221119: "您两次输入的密码不一致，请校对。",
            LANG_STRID_accinterception03: "当前网络环境异常，请重新尝试。",
            LANG_STRID_Accountswitch_220519: "沐瞳自定义账号（必填）",
            LANG_STRID_UnbindPhone_230701: "您当前绑定的沐瞳手机号为：{0}",
            LANG_STRID_UnbindPhone_230702: "解绑沐瞳手机号后，您的沐瞳手机号将不能够作为沐瞳昵称，通过昵称+密码的形式登录。",
            LANG_STRID_UnbindPhone_230703: "因此请您务必绑定沐瞳邮箱后再进行解绑沐瞳手机号",
            LANG_STRID_UnbindPhone_230704: "解绑沐瞳手机号",
            LANG_STRID_UnbindPhone_230705: "当前账号未绑定沐瞳邮箱，请绑定沐瞳邮箱后再进行该操作。",
            LANG_STRID_UnbindPhone_230706: "点击下方按钮，我们将向您绑定的沐瞳邮箱{0}发送一条验证码。",
            LANG_STRID_UnbindPhone_230707: "我们已向您的沐瞳邮箱{0}发送验证，请注意查收",
            LANG_STRID_UnbindPhone_230708: "已成功解绑沐瞳手机号",
            passwordError: "您输入的密码错误，请重试。",
            passwordErrorWait: "您输入的密码错误，请{x}分钟{y}秒后重試。",
            passwordErrorWaitSec: "您输入的密码错误，请{y}秒后重試。",
            enterEmailTip: "请输入有效的电子邮箱以便接收我们的消息",
            sendEmailTip: '点击"发送验证码"，我们将向您填写的邮箱发送一条包含验证码的邮件。输入验证码以完成验证',
            logInViaAccountPassword: "账号密码登录",
            logInViaEmailVerification: "邮箱验证码登录",
            enterEmailFirst: "请先输入邮箱",
            verificationCodeError: "验证码错误，请重新输入",
            unbindEmail: "该邮箱未绑定过沐瞳账号"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Emailová adresa",
            Password: "Heslo",
            "Sign up": "Přihlásit se",
            "Forgot password": "Zapomenuté heslo",
            "Create Your Moonton Account": "Vytvoř si svůj Moonton účet",
            "To obtain the latest information about us, please sign up with a valid email": "K obdržení nejnovějších informací o nás se prosím přihlas s platným emailem",
            "Re-Enter Password": "Heslo",
            "Please agree to the Moonton": "Prosím souhlas s podmínkami služeb Moontonu",
            "terms of service": "podmínky služby",
            Submit: "Předložit",
            "E-Mail format error": "Chyba formátu mailu",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Použij minimálně 6 znaků a to pomocí velkých a malých písmen a čísel, bez užití speciálních znaků",
            "These passwords dont' match": "Tato hesla se neshodují",
            "Please enter your email address": "Prosím vlož svou emailovou adresu",
            "Please enter your password": "Prosím vlož své heslo",
            "Please confirm your password": "Prosím potvrď své heslo",
            "Please agree to the Moonton Terms of Service": "Prosím souhlas s podmínkami služeb Moontonu",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Potvrzovací email byl poslán na emailovou adresu.Prosím zkontroluj svůj email k potvrzení tvé emailové adresy. Pokud jsi neobdržel email, prosím zkontroluj složku s nevyžádanou poštou.",
            Confirm: "Potvrdit",
            "Please enter your email address to receive the email with a new password.": "Prosím napiš svoji emailovou adresu k získání nového hesla.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Mail s resetovaným heslem byl poslán na Tvůj registrační e-mail. Prosím zkontroluj to včas. Děkuji!",
            Continue: "Pokračovat",
            "Sign in with your Moonton Account": "Přihlásit se s Moonton účtem",
            "Sign in": "Přihlásit se",
            Congratulations: "Blahopřejeme",
            "Your email": "Tvůj email",
            "is confirmed. Thank you!": "je potvrzen. Děkujeme!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co.Ltd.",
            Notice: "Oznámení",
            "Your account has already been confirmed.": "Tvůj účet byl právě schválen.",
            "The link has expired Please request a new link in-gme. Thank you.": "Lhůta odkazu vypršela, prosím zažádej si ve hře o nový odkaz. Děkuji",
            "Reset Password": "Znovuobnova hesla",
            "New Password": "Nové heslo",
            "Re-Enter-Password": "Napiš znovu svůj email",
            "Please confirm your new password": "Prosím potvrď své heslo",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Heslo bylo úspěšně změněno. Prosím, přihlaš se do hry na svůj Moonton účet.",
            "Bind your Moonton Account": "Propojit s tvým Moonton účtem",
            "Check Your Email": "Zkontroluj Si Poštu",
            "Re-enter email": "Znovu vložit email",
            "Email incompatible": "Nevyhovující email",
            "Please enter your password again": "Please enter your password again",
            "have fun": "Account has been successfully bound, have fun ingame.",
            "Moonton Account": "Moonton Account",
            "account rule": "6-20 letter, underscore or number characters. Starts with letter character.",
            "Send Verification Email": "Send Verification Mail",
            "sended email": "Please proceed to your mailbox to complete the verification.",
            "to email": "A verification mail has been sent to",
            "change email": "Change Email",
            "Email Registration": "Sign Up with Email",
            "Quick Registration": "Fast Sign Up",
            "Accept the agreement and register": "ACCEPT THE AGREEMENT & SIGN UP",
            "same account": "This username already exists. Please try another one!",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Please enter the password of the current MOONTON ACCOUNT to continue",
            "congratulations account": "Congratulations! You've successfully created a MOONTON ACCOUNT and connected it with your current character.",
            "empty email": "To protect your account, we recommend you connecting it with email so that you can log in to your account with email and can change the password.",
            "used email": "This email address has been connected with another account. Please try to use another email or log in with this email.",
            "useful email": "A verification mail has been sent to this email address. Please check it and confirm the account connection within 24 hours. If you can't find it in your inbox, please check if it is filtered as a spam mail.",
            "Connect to Email": "Connect to Email",
            unreset: "You can't reset the password of a MOONTON ACCOUNT that hasn't been connected to an email.",
            emailtime1: "Resend the mail after ",
            emailtime2: "s by tapping the mail button.",
            "continue bind email": "Continue to connect email.",
            "server error": "Server is busy, please try again later.",
            "wrong content": "Requirements not fulfilled!",
            "enter right account": "Please enter a correct mail address or MOONTON account",
            "reset email": "Change Email Address",
            "send email1": "A verification link will be sent to your E-mail address:",
            "send email2": "Open the link and follow the prompts to complete the E-mail change request.",
            "send email": "Send the E-mail now",
            "sended email1": "Link sent",
            "sended email2": "to your Moonton E-mail address",
            "sended email3": "S to resend",
            "sended email4": "A verification link has been sent to your E-mail box:",
            "sended email5": "Please note, your account will still be linked to the old E-mail until the new E-mail verification is completed.",
            "empty code": "Verification code cannot be empty",
            "wrong code": "Invalid verification code",
            "enter new email code": "Enter the verification code sent to the new E-mail",
            "enter new email": "New E-mail Address",
            "send code fail": "Failed to send verification code",
            "send code success": "Send Verification Code",
            "reset email success": "E-mail change successfully",
            "reset emial fail": "Failed to change the E-mail, please try again",
            "binded email": "The E-mail address has been bound with another account",
            "send email fail": "Failed to send the E-mail, please check whether your account has been bound with a Moonton account and E-mail",
            "send code": "Send Code",
            "outdata link": "Link has expired",
            registed: "This email is already registered. Please try another one.",
            frequent: "Too many failed attempts. Please try it later.",
            "phone code wrong": "Incorrect Verification Code",
            "binded phone": "The account has already been connected with a phone number",
            "phone error": "Incorrect Phone Number",
            "unbinded phone": "The Phone Number is not connected to any game account",
            "zhanyong phone": "The phone number has already been connected to another game account",
            "Phone Registration": "Sign Up with Phone Number",
            Phone: "Phone No.",
            Code: "Text Verification Code",
            "Enter Phone": "Please enter a valid phone number for receiving our message and creating your Moonton Account.",
            "Enter Code": "Tap the button on the right to send the verification code via a text message. Enter the code that you receive and finish the verification.",
            "send old phone1": "Send the verification code to your old device ",
            "a code": ".",
            "enter new phone": "Please enter the verification code for the new device and finish the verification.",
            "quit change fail": "Until the verification is finished, your Moonton Account is still connected to your old device.",
            "change phone success": "Phone Number Changed Successfully.",
            "change phone": "Phone Number Change",
            "password err too many": "Too many failed attempts. Please try again tomorrow.",
            "email verification": "Email ({0}) Verification",
            "Enter Email Code": "Tap the button on the right to send the verification code. Enter the code that you receive in your email to proceed.",
            "Email verification successful": "Email verification successful. Please enter the phone number that you would like to connect:",
            "phone verification": "Phone Number ({0}) Text Message Verification",
            "email sended and goto verify": "A verification email has been sent to your email {0}. Please check it in your email and complete the email connection.",
            "Phone Number Connected": "Phone Number Connected.",
            "add phone": "Add phone number",
            "add email": "Add Security Email",
            "email verification code holder": "Email Verification Code",
            "phone verification successful": "Security phone verified. Please enter the email address that you would like to connect:",
            "change passwrod tip": "Note: You can only change the password to the Moonton Account connected to the email address you enter.",
            "enter call code": "Please select your country calling code.",
            wait: "Operationtoofrequent.Pleasetryagainlater.({time}Sec)",
            dofrequent: "Operationtoofrequent.Pleasetryagainlater.",
            notman: "Your attempt to log in has been declined, due to a potential security risk. Please contact Customer Service for questions.",
            hint: "Notice",
            "change binding tips": "The email change is currently under review. Please wait. You can cancel the change during this process. Time before you can change the email address: {x}.\n",
            "contact customer service": "If you have any questions, please contact Customer Service.",
            "i know": "Okay",
            "cancel change": "Cancel",
            "change pass": "Your email change has been approved, please confirm your new email address: {x}",
            "confirm change": "Change",
            LANG_STRID_Accountchangepassword_220501: "Please enter your connected phone number to receive the password reset message.",
            LANG_STRID_Accountchangepassword_220503: "Note: You can only change the password for the Moonton account connected to the phone number you entered.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Return",
            LANG_STRID_Accountchangepassword_220506: "Reset Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "Tap Send Code to send a verification code to your phone number and enter the code to complete the verification.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols.",
            LANG_STRID_Accountchangepassword_220513: "Invalid password. Please try again.",
            LANG_STRID_Accountchangepassword_220514: "The passwords don't match. Please try again.",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification code. Please try again.",
            LANG_STRID_Accountchangepassword_220516: "Your password has been reset.",
            LANG_STRID_Accountchangepassword_220517: "Get Code",
            LANG_STRID_Accountchangepassword_220518: "Login Verification",
            LANG_STRID_Accountchangepassword_220519: "Please enter your phone number and verification code to complete the verification.",
            LANG_STRID_Accountchangepassword_220520: "Please enter a valid phone number to receive the verification code.",
            LANG_STRID_Accountchangepassword_220521: "Login Notice",
            LANG_STRID_Accountchangepassword_220522: "Account switched. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220523: "Login success. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Your Moonton password has been reset.",
            LANG_STRID_Accountswitch_220501: "Change Email Address",
            LANG_STRID_Accountswitch_220502: "Send Verification Code to Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "Tap the button on the right to send a verification code to your email address and enter the code to complete the verification.",
            LANG_STRID_Accountswitch_220505: "Send Verification Code to Phone {0}",
            LANG_STRID_Accountswitch_220506: "Please enter a valid email address.",
            LANG_STRID_Accountswitch_220507: "The verification code has been sent to your email address.",
            LANG_STRID_Accountswitch_220508: "Please enter the verification code and your new email address below and complete the verification.",
            LANG_STRID_Accountswitch_220509: "Until the verification is complete, your Moonton account is still connected to your previous email address.",
            LANG_STRID_Accountswitch_220510: "Please enter your new email address.",
            LANG_STRID_Accountswitch_220511: "Please enter a valid email address to receive the verification code.",
            LANG_STRID_Accountswitch_220512: "Are you sure you want to cancel the request?",
            LANG_STRID_Accountswitch_220513: "Cancel Request",
            LANG_STRID_Accountswitch_220514: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in {x}d {y}h {z}m. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Quick Email Registration",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Please enter your Moonton account and password",
            LANG_STRID_MTregister_221104: "Please confirm your Moonton account and password",
            LANG_STRID_MTregister_221105: "Please re-enter your password",
            LANG_STRID_MTregister_221106: "Moonton Username (optional)",
            LANG_STRID_MTregister_221107: "Must consist of 6-20 letters, underscores, or numbers, and must start with a letter.",
            LANG_STRID_MTregister_221108: "I have read and agree to the Terms of Use.",
            LANG_STRID_MTregister_221109: "Bind Your Moonton Account",
            LANG_STRID_MTregister_221110: "The verification email has been sent to the email bound to your account. Please verify within 24 hours. If you haven't received the email, please check the junk folder to see if it's there.",
            LANG_STRID_MTregister_221111: "Verify with email",
            LANG_STRID_MTregister_221112: "You have successfully bound your Moonton Account. Now you can log in with your Moonton email and password.",
            LANG_STRID_MTregister_221113: "Invalid email",
            LANG_STRID_MTregister_221114: "You have successfully bound your phone number.",
            LANG_STRID_MTregister_221115: "Quick Phone Registration",
            LANG_STRID_MTregister_221116: "Enter your phone number",
            LANG_STRID_MTregister_221117: "Please enter the Moonton account and password you're currently using to help us confirm your identity.",
            LANG_STRID_MTregister_221118: "Invalid phone number",
            LANG_STRID_MTregister_221119: "Your passwords did not match. Please enter again.",
            LANG_STRID_accinterception03: "Your current network is unstable, please try again.",
            LANG_STRID_Accountswitch_220519: "Moonton Username (required)",
            LANG_STRID_UnbindPhone_230701: "Your current connected phone number is {0}.",
            LANG_STRID_UnbindPhone_230702: "Once disconnected, the phone number can no longer be used as your Moonton account ID to log into the game with the password.",
            LANG_STRID_UnbindPhone_230703: "It is recommended to connect your Moonton account to an email before disconnecting your phone number.",
            LANG_STRID_UnbindPhone_230704: "Disconnect Phone Number",
            LANG_STRID_UnbindPhone_230705: "You have not connected a Moonton email to your account. Please try again after connecting a Moonton email.",
            LANG_STRID_UnbindPhone_230706: "Tap the button below to send a verification code to your connected Moonton email {0}.",
            LANG_STRID_UnbindPhone_230707: "A verification code has been sent to your Moonton email address {0}. Please check.",
            LANG_STRID_UnbindPhone_230708: "You have successfully disconnected your phone number.",
            passwordError: "آپ نے جو پاس ورڈ درج کیا ہے وہ غلط ہے۔ دوبارہ کوشش کریں.",
            passwordErrorWait: "آپ نے جو پاس ورڈ درج کیا ہے وہ غلط ہے۔ براہ کرم {x} منٹ {y} سیکنڈ میں دوبارہ کوشش کریں۔",
            passwordErrorWaitSec: "آپ نے جو پاس ورڈ درج کیا ہے وہ غلط ہے۔ براہ کرم {y} سیکنڈ میں دوبارہ کوشش کریں۔",
            enterEmailTip: "Please enter a valid email address to receive our message.",
            sendEmailTip: 'Tap "Send Verification Code" and we will send an email containing a verification code to the address you provided. Enter the code to complete the verification process.',
            logInViaAccountPassword: "Log in via account password",
            logInViaEmailVerification: "Log in via email verification",
            enterEmailFirst: "Please enter your email address first",
            verificationCodeError: "Invalid verification code. Please try again.",
            unbindEmail: "This email is not connected to a Moonton account"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "E-Mail-Adresse",
            Password: "Passwort",
            "Sign up": "Anmelden",
            "Forgot password": "Passwort vergessen",
            "Create Your Moonton Account": "Moonton Account erstellen",
            "To obtain the latest information about us, please sign up with a valid email": "Bitte gib eine gültige E-Mail-Adresse ein, um die neuesten Spielinformationen zu erhalten",
            "Re-Enter Password": "Passwort bestätigen",
            "Please agree to the Moonton": "Zustimmung für die Moonton",
            "terms of service": "Nutzungsbedingungen",
            Submit: "Abschicken",
            "E-Mail format error": "Ungültige E-Mail-Adresse",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Verwende 6 oder mehr Zeichen mit einer Mischung aus Groß- und Kleinbuchstaben, Zahlen und keinen Sonderzeichen.",
            "These passwords dont' match": "Die Passwörter stimmen nicht überein",
            "Please enter your email address": "Bitte gib deine E-Mail-Adresse ein",
            "Please enter your password": "Bitte gib dein Passwort ein",
            "Please confirm your password": "Bitte bestätige dein Passwort",
            "Please agree to the Moonton Terms of Service": "Bitte akzeptiere die Moonton Nutzungsbedingungen",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Eine E-Mail zur Verifizierung wurde an deine E-Mail-Adresse gesendet. Bitte tippe auf den in der E-Mail enthaltenen Link und schließe die Verifizierung ab. Falls du die E-Mail nicht findest, solltest du in deinem Spam Ordner nachsehen.",
            Confirm: "Bestätigen",
            "Please enter your email address to receive the email with a new password.": "Bitte gib deine E-Mail-Adresse ein, um die E-Mail zum Zurücksetzen des Passworts zu erhalten.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Eine E-Mail zum Zurücksetzen des Passworts wurde an die von dir angegebene E-Mail-Adresse gesendet. Bitte überprüfe die E-Mail rechtzeitig!",
            Continue: "Fortfahren",
            "Sign in with your Moonton Account": "Mit einem Moonton Account anmelden",
            "Sign in": "Anmelden",
            Congratulations: "Glückwunsch",
            "Your email": "Dein Account (",
            "is confirmed. Thank you!": ") wurde erstellt. Viel Spaß beim Spielen!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Hinweis",
            "Your account has already been confirmed.": "Der Account wurde bereits erstellt.",
            "The link has expired Please request a new link in-gme. Thank you.": "Der Link ist abgelaufen. Bitte sende den Link im Spiel erneut.",
            "Reset Password": "Passwort zurücksetzen",
            "New Password": "Neues Passwort",
            "Re-Enter-Password": "Passwort bestätigen",
            "Please confirm your new password": "Bitte bestätige dein Passwort",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Passwort geändert. Bitte melde dich erneut mit deinem neuen Passwort an.",
            "Bind your Moonton Account": "Moonton Account verbinden",
            "Check Your Email": "E-Mail prüfen",
            "Re-enter email": "E-Mail bestätigen",
            "Email incompatible": "Die E-Mail-Adressen stimmen nicht überein",
            "Please enter your password again": "Passwort bestätigen",
            "Moonton Account": "Moonton Account",
            "account rule": "Verwende 6-20 Buchstaben, Ziffern oder _ und fange mit einem Buchstaben an",
            "Send Verification Email": "E-Mail senden",
            "to email": "Es wurde eine E-Mail zur Verifizierung an folgende E-Mail-Adresse gesendet",
            "sended email": ". Bitte überprüfe die E-Mail in deinem Posteingang.",
            "change email": "E-Mail-Adresse ändern",
            "Email Registration": "Mit E-Mail anmelden",
            "Quick Registration": "Schnellanmeldung",
            "Accept the agreement and register": "AKZEPTIERE DIE VEREINBARUNG UND MELDE DICH AN",
            "same account": "Der Benutzername existiert bereits. Bitte versuche einen anderen.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Bitte gib das Passwort des aktuellen Moonton Accounts zur Verifizierung ein.",
            "congratulations account": "Glückwunsch! Du hast einen Moonton Account erstellt und ihn mit deinem aktuellen Spielfortschritt verbunden.",
            "empty email": "Zur Sicherheit des Accounts empfehlen wir dir, den Account mit einer E-Mail-Adresse zu verknüpfen, damit du dich mit der E-Mail-Adresse in den Account anmelden und dein Passwort ändern kannst.",
            "used email": "Die E-Mail-Adresse ist bereits mit einem anderen Account verbunden. Bitte versuche es mit einem anderen Account oder melde dich über Account wechseln bei dem Account an.",
            "useful email": "Eine E-Mail zur Verifizierung wurde an deine verbundene E-Mail-Adresse gesendet. Bitte tippe auf den in der E-Mail enthaltenen Link und schließe die Verifizierung innerhalb von 24 Stunden ab. Falls du die E-Mail nicht findest, solltest du in deinem Spam Ordner nachsehen.",
            "Connect to Email": "E-Mail verbinden",
            unreset: "Du kannst das Passwort nicht zurücksetzen, wenn dein Moonton Account nicht mit einer E-Mail-Adresse verbunden ist.",
            emailtime1: "Du kannst die E-Mail erneut senden in",
            emailtime2: "s.",
            "have fun": "Account verbunden. Viel Spaß beim Spielen!",
            "continue bind email": "E-Mail-Adresse verbinden",
            "server error": "Der Server ist gerade ausgelastet. Bitte versuche es später noch einmal.",
            "wrong content": "Voraussetzungen nicht erfüllt.",
            "enter right account": "Bitte gib eine gültige E-Mail-Adresse oder einen Moonton Account ein",
            "reset email": "E-Mail-Adresse ändern",
            "send email1": "Es wird eine E-Mail zur Verifizierung an {x} gesendet. Bitte tippe auf den in der E-Mail enthaltenen Link, um die Änderung abzuschließen.",
            "send email2": ". Bitte tippe auf den Link, der in der E-Mail enthalten ist, um die Änderung abzuschließen.",
            "send email": "E-Mail senden",
            "sended email1": "Eine E-Mail zur Verifizierung wurde gesendet an",
            "sended email2": ". Du kannst die E-Mail erneut senden in",
            "sended email3": "s.",
            "sended email4": "Eine E-Mail zur Verifizierung wurde gesendet an",
            "sended email5": ". Hinweis: Bevor die Änderung abgeschlossen wird, ist dein Account noch mit der alten E-Mail-Adresse verbunden.",
            "empty code": "Verifizierungscode darf nicht leer sein",
            "wrong code": "Ungültiger Verifizierungscode",
            "enter new email code": "Bitte gib den Verifizierungscode ein",
            "enter new email": "Neue E-Mail-Adresse",
            "send code fail": "Vorgang fehlgeschlagen.",
            "send code success": "Verifizierungscode gesendet",
            "reset email success": "E-Mail-Adresse geändert.",
            "reset emial fail": "Vorgang fehlgeschlagen. Bitte versuche es erneut.",
            "binded email": "Die E-Mail-Adresse ist bereits mit einem anderen Account verbunden.",
            "send email fail": "Vorgang fehlgeschlagen. Bitte überprüfe, ob du einen Moonton Account und eine E-Mail-Adresse verbunden hast.",
            "send code": "Code senden",
            "outdata link": "Der Link ist abgelaufen.",
            registed: "Die E-Mail-Adresse ist bereits mit einem anderen Account verbunden. Bitte versuche eine andere.",
            frequent: "Zu viele Fehlversuche. Bitte versuche es später noch einmal.",
            "phone code wrong": "Ungültiger Verifizierungscode",
            "binded phone": "Der Account ist bereits mit einer Telefonnummer verbunden",
            "phone error": "Ungültige Telefonnummer",
            "unbinded phone": "Die Telefonnummer ist mit keinem Account verknüpft",
            "zhanyong phone": "Die Telefonnummer ist bereits mit einem Account verknüpft",
            "Phone Registration": "Mit Telefon anmelden",
            Phone: "Telefonnummer",
            Code: "Verifizierungscode",
            "Enter Phone": "Bitte gib eine gültige Telefonnummer ein, um den Verifizierungscode zu erhalten",
            "Enter Code": "Tippe rechts auf die Taste, um einen Verifizierungscode an deine Telefonnummer zu senden, und gib den Code ein, um die Verifizierung abzuschließen.",
            "send old phone1": "Sende einen Verifizierungscode an",
            "a code": ".",
            "enter new phone": "Bitte gib den Verifizierungscode ein, um die Verifizierung abzuschließen",
            "quit change fail": "Bis die Verifizierung abgeschlossen wurde, ist dein Moonton Account noch mit deiner alten Telefonnummer verknüpft.",
            "change phone success": "Telefonnummer geändert.",
            "change phone": "Telefonnummer ändern",
            "password err too many": "Zu viele Fehlversuche. Bitte versuche es morgen erneut.",
            "email verification": "E-Mail Verifizierung ({0})",
            "Enter Email Code": "Tippe rechts auf die Taste, um einen Verifizierungscode an deine E-Mail-Adresse zu senden, und gib den Verifizierungscode ein, um die Verifizierung abzuschließen.",
            "Email verification successful": "E-Mail Verifizierung erfolgreich. Bitte gib die Telefonnummer ein, die du verbinden möchtest.",
            "phone verification": "Telefon Verifizierung ({0})",
            "email sended and goto verify": "Eine E-Mail zur Verifizierung wurde an {0} gesendet. Bitte tippe auf den in der E-Mail enthaltenen Link und schließe die Verifizierung ab.",
            "Phone Number Connected": "Telefonnummer verbunden.",
            "add phone": "Telefonnummer verbinden",
            "add email": "E-Mail-Adresse verbinden",
            "email verification code holder": "Verifizierungscode",
            "phone verification successful": "Telefon Verifizierung erfolgreich. Bitte gib die E-Mail-Adresse ein, mit der du dich verbinden möchtest.",
            "change passwrod tip": "Hinweis: Du kannst das Passwort nur für den Moonton Account ändern, der mit der von dir eingegebenen E-Mail-Adresse verbunden ist.",
            "enter call code": "Bitte wähle deine Vorwahl",
            wait: "Zu viele Versuche. Bitte versuche es in {time}s erneut.",
            dofrequent: "Zu viele Versuche. Bitte versuche es später noch einmal.",
            notman: "Aus Sicherheitsgründen wurde deine Anfrage zur Anmeldung abgelehnt. Bitte kontaktiere den Kundenservice, wenn du Fragen hast.",
            hint: "Mitteilung",
            "change binding tips": "Die Änderung der E-Mail wird derzeit überprüft. Wir bitten um Geduld. Du kannst die Änderung während dieses Prozesses abbrechen. Zeit bis zur Änderung der E-Mail-Adresse: {x}.",
            "contact customer service": "Wenn du weitere Fragen hast, wende dich bitte an den Kundenservice.",
            "i know": "Okay",
            "cancel change": "Abbrechen",
            "change pass": "Die Änderung deiner E-Mail-Adresse wurde genehmigt. Bitte bestätige deine neue E-Mail-Adresse: {x}",
            "confirm change": "Ändern",
            LANG_STRID_Accountchangepassword_220501: "Bitte gib deine Telefonnummer an, um die Nachricht zum Zurücksetzen des Passworts zu erhalten.",
            LANG_STRID_Accountchangepassword_220503: "Hinweis: Du kannst das Passwort nur für den Moonton Account ändern, der mit der von dir eingegebenen Telefonnummer verknüpft ist.",
            LANG_STRID_Accountchangepassword_220504: "E-Mail Verifizierung",
            LANG_STRID_Accountchangepassword_220505: "Zurück",
            LANG_STRID_Accountchangepassword_220506: "Moonton Passwort zurücksetzen",
            LANG_STRID_Accountchangepassword_220507: "Tippe auf Code senden, um einen Verifizierungscode an deine Telefonnummer zu senden, und gib den Code ein, um die Verifizierung abzuschließen.",
            LANG_STRID_Accountchangepassword_220511: "Verwende 6 oder mehr Zeichen mit einer Mischung aus Groß- und Kleinbuchstaben, Zahlen und keinen Sonderzeichen.",
            LANG_STRID_Accountchangepassword_220513: "Ungültiges Passwort. Bitte versuche es erneut.",
            LANG_STRID_Accountchangepassword_220514: "Die Passwörter stimmen nicht überein. Bitte versuche es erneut.",
            LANG_STRID_Accountchangepassword_220515: "Ungültiger Verifizierungscode. Bitte versuche es erneut.",
            LANG_STRID_Accountchangepassword_220516: "Dein Passwort wurde zurückgesetzt.",
            LANG_STRID_Accountchangepassword_220517: "Code anfordern",
            LANG_STRID_Accountchangepassword_220518: "Login Verifizierung",
            LANG_STRID_Accountchangepassword_220519: "Bitte gib deine Telefonnummer und den Verifizierungscode ein, um die Verifizierung abzuschließen.",
            LANG_STRID_Accountchangepassword_220520: "Bitte gib eine gültige Telefonnummer ein, um den Verifizierungscode zu erhalten.",
            LANG_STRID_Accountchangepassword_220521: "Login Hinweis",
            LANG_STRID_Accountchangepassword_220522: "Account gewechselt. Bitte starte das Spiel neu.",
            LANG_STRID_Accountchangepassword_220523: "Login erfolgreich. Bitte starte das Spiel neu.",
            LANG_STRID_Accountchangepassword_220524: "E-Mail-Adresse/Moonton Account/Telefonnummer",
            LANG_STRID_Accountchangepassword_220525: "Dein Moonton Passwort wurde zurückgesetzt.",
            LANG_STRID_Accountswitch_220501: "E-Mail Adresse ändern",
            LANG_STRID_Accountswitch_220502: "Verifizierungscode an E-Mail senden {0}",
            LANG_STRID_Accountswitch_220503: "E-Mail Verifizierungscode",
            LANG_STRID_Accountswitch_220504: "Tippe rechts auf den Button, um einen Verifizierungscode an deine E-Mail Adresse zu senden, und gib den Code ein, um die Verifizierung abzuschließen.",
            LANG_STRID_Accountswitch_220505: "Verifizierungscode an Telefon {0} senden",
            LANG_STRID_Accountswitch_220506: "Bitte gib eine gültige E-Mail Adresse ein.",
            LANG_STRID_Accountswitch_220507: "Der Verifizierungscode wurde an deine E-Mail Adresse geschickt.",
            LANG_STRID_Accountswitch_220508: "Bitte gib den Verifizierungscode und deine neue E-Mail Adresse unten ein und schließe die Verifizierung ab.",
            LANG_STRID_Accountswitch_220509: "Dein Moonton Account bleibt bis zum Abschluss der Verifizierung mit deiner bisherigen E-Mail Adresse verbunden.",
            LANG_STRID_Accountswitch_220510: "Bitte gib deine neue E-Mail Adresse ein.",
            LANG_STRID_Accountswitch_220511: "Bitte gib eine gültige E-Mail Adresse ein, um den Verifizierungscode zu erhalten.",
            LANG_STRID_Accountswitch_220512: "Bist du sicher, dass du die Anfrage zurückziehen möchtest?",
            LANG_STRID_Accountswitch_220513: "Anfrage zurückziehen",
            LANG_STRID_Accountswitch_220514: "Die Anfrage wird derzeit geprüft. Bitte habe etwas Geduld. Du kannst die Anfrage während dieses Prozesses zurückziehen. Die E-Mail Adresse kann in {x}d {y}h {z}m geändert werden. Wenn du noch weitere Fragen hast, wende dich bitte an den Kundenservice.",
            LANG_STRID_Accountswitch_220516: "Verifizierungscode an das Telefon senden <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Der Antrag wird derzeit geprüft. Bitte habe etwas Geduld. Du kannst die Anfrage während dieses Vorgangs abbrechen. Deine E-Mail Adresse kann in <span>{x}d {y}h {z}m</span> geändert werden. Wende dich bei Fragen bitte an den Kundenservice.",
            LANG_STRID_Accountswitch_220518: "Verifizierungscode an die E-Mail senden <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Schnelle E-Mail Registrierung",
            LANG_STRID_MTregister_221102: "E-Mail",
            LANG_STRID_MTregister_221103: "Bitte gib dein Moonton Account Namen und Passwort ein",
            LANG_STRID_MTregister_221104: "Bitte bestätige dein Moonton Account Namen und Passwort",
            LANG_STRID_MTregister_221105: "Bitte gib dein Passwort erneut ein",
            LANG_STRID_MTregister_221106: "Moonton Benutzername (optional)",
            LANG_STRID_MTregister_221107: "Muss aus 6-20 Buchstaben, Unterstrichen oder Zahlen bestehen und mit einem Buchstaben beginnen.",
            LANG_STRID_MTregister_221108: "Ich habe die Nutzungsbedingungen gelesen und stimme ihnen zu.",
            LANG_STRID_MTregister_221109: "Verbinde Dein Moonton Account",
            LANG_STRID_MTregister_221110: "Die Bestätigungs-E-Mail wurde an die mit deinem Account verbundene E-Mail gesendet. Bitte bestätige sie innerhalb von 24 Stunden. Wenn du die E-Mail nicht erhalten hast, schau bitte im Junk Ordner nach.",
            LANG_STRID_MTregister_221111: "Verifizierung per E-Mail",
            LANG_STRID_MTregister_221112: "Du hast dein Moonton Account erfolgreich verbunden. Jetzt kannst du dich mit deiner Moonton E-Mail und deinem Passwort anmelden.",
            LANG_STRID_MTregister_221113: "Ungültige E-Mail",
            LANG_STRID_MTregister_221114: "Du hast deine Rufnummer erfolgreich verbunden.",
            LANG_STRID_MTregister_221115: "Schnelle telefonische Registrierung",
            LANG_STRID_MTregister_221116: "Gib deine Rufnummer ein",
            LANG_STRID_MTregister_221117: "Bitte gib dein Moonton Account Name und dein Passwort ein, damit wir deine Identität bestätigen können.",
            LANG_STRID_MTregister_221118: "Ungültige Telefonnummer",
            LANG_STRID_MTregister_221119: "Deine Passwörter stimmen nicht überein. Bitte gib es erneut ein.",
            LANG_STRID_accinterception03: "Dein aktuelles Netzwerk ist instabil, bitte versuche es erneut.",
            LANG_STRID_Accountswitch_220519: "Moonton Benutzername (erforderlich)",
            LANG_STRID_UnbindPhone_230701: "Deine aktuell verbundene Telefonnummer lautet: {0}.",
            LANG_STRID_UnbindPhone_230702: "Nach dem Trennen der Verbindung kann die Telefonnummer nicht mehr als Moonton Account ID verwendet werden, um sich mit dem Passwort in das Spiel einzuloggen.",
            LANG_STRID_UnbindPhone_230703: "Daher wird empfohlen, deinen Moonton Account mit einer E-Mail zu verbinden, bevor du deine Telefonnummer trennst.",
            LANG_STRID_UnbindPhone_230704: "Telefonnummer trennen",
            LANG_STRID_UnbindPhone_230705: "Du hast keine Moonton E-Mail mit deinem Account verbunden. Bitte versuche es erneut, nachdem du eine Moonton E-Mail verbunden hast.",
            LANG_STRID_UnbindPhone_230706: "Tippe auf den nachfolgenden Button, um einen Verifizierungscode an die mit Moonton verbundene E-Mail {0} zu senden.",
            LANG_STRID_UnbindPhone_230707: "Es wurde ein Verifizierungscode an deine Moonton-E-Mail-Adresse {0} gesendet. Bitte schaue nach.",
            LANG_STRID_UnbindPhone_230708: "Du hast deine Telefonnummer erfolgreich getrennt.",
            passwordError: "Das von dir eingegebene Passwort ist falsch. Bitte versuche es noch einmal.",
            passwordErrorWait: "Das von dir eingegebene Passwort ist falsch. Bitte versuche es in {x} Minuten {y} Sekunden noch einmal.",
            passwordErrorWaitSec: "Das von dir eingegebene Passwort ist falsch. Bitte versuche es in {y} Sekunden noch einmal.",
            enterEmailTip: "Bitte gib eine gültige E-Mail-Adresse ein, um unsere Nachricht zu erhalten.",
            sendEmailTip: 'Tippe auf "Verifizierungscode senden" und wir werden eine E-Mail mit einem Verifizierungscode an die von dir angegebene Adresse senden. Gib den Code ein, um den Verifizierungsprozess abzuschließen.',
            logInViaAccountPassword: "Mit dem Accountpasswort anmelden",
            logInViaEmailVerification: "Über E-Mail-Verifizierung anmelden",
            enterEmailFirst: "Bitte gib zuerst deine E-Mail-Adresse ein",
            verificationCodeError: "Ungültiger Verifizierungscode. Bitte versuche es erneut.",
            unbindEmail: "Diese E-Mail ist mit keinem Moonton-Account verbunden"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Email Address",
            Password: "Password",
            "Sign up": "Sign Up",
            "Forgot password": "Forgot Password",
            "Create Your Moonton Account": "Create Moonton Account",
            "To obtain the latest information about us, please sign up with a valid email": "Please enter a valid email address to receive the latest game info",
            "Re-Enter Password": "Confirm Password",
            "Please agree to the Moonton": "Please agree to the Moonton",
            "terms of service": "Terms of Service",
            Submit: "Submit",
            "E-Mail format error": "Invalid email address",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols",
            "These passwords dont' match": "The passwords don't match",
            "Please enter your email address": "Please enter your email address",
            "Please enter your password": "Please enter your password",
            "Please confirm your password": "Please confirm your password",
            "Please agree to the Moonton Terms of Service": "Please agree to the Moonton Terms of Service",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "A verification email has been sent to your email address. Please tap the link included in the email and complete the verification. If you don't see the email, please check your junk folder.",
            Confirm: "Confirm",
            "Please enter your email address to receive the email with a new password.": "Please enter your connected email address to receive the password reset email.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "A password reset email has been sent to your connected email address. Please check the email in time!",
            Continue: "Continue",
            "Sign in with your Moonton Account": "Login with Moonton Account",
            "Sign in": "Login",
            Congratulations: "Congratulations",
            "Your email": "Your account (",
            "is confirmed. Thank you!": ") has been created. Happy gaming!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Notice",
            "Your account has already been confirmed.": "The account has already been created.",
            "The link has expired Please request a new link in-gme. Thank you.": "The link has expired. Please resend the link in the game.",
            "Reset Password": "Reset Password",
            "New Password": "New Password",
            "Re-Enter-Password": "Confirm Password",
            "Please confirm your new password": "Please confirm your password",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Password changed. Please log in again with your new password.",
            "Bind your Moonton Account": "Connect Moonton Account",
            "Check Your Email": "Check Email",
            "Re-enter email": "Confirm Email",
            "Email incompatible": "The email addresses don't match",
            "Please enter your password again": "Confirm Password",
            "Moonton Account": "Moonton Account",
            "account rule": "Use 6-20 letters, digits, or _ and start with a letter",
            "Send Verification Email": "Send Email",
            "to email": "A verification email has been sent to",
            "sended email": ". Please check the email in your mailbox.",
            "change email": "Change Email Address",
            "Email Registration": "Sign Up with Email",
            "Quick Registration": "Quick Sign Up",
            "Accept the agreement and register": "ACCEPT THE AGREEMENT & SIGN UP",
            "same account": "The username already exists. Please try another.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Please enter the password for the current Moonton account for verification.",
            "congratulations account": "Congratulations! You've created a Moonton Account and connected it to your current game progress.",
            "empty email": "For your account security, we recommend that you connect the account to an email address so you can log in to the account with the email address and change your password.",
            "used email": "The email address is already connected to another account. Please try another or log in to the account via Switch Account.",
            "useful email": "A verification email has been sent to your connected email address. Please tap the link included in the email and complete the verification within 24 hours. If you don't see the email, please check your junk folder.",
            "Connect to Email": "Connect Email",
            unreset: "You cannot reset the password if your Moonton Account isn't connected to an email address.",
            emailtime1: "You can resend the email in",
            emailtime2: "s.",
            "have fun": "Account connected. Happy gaming!",
            "continue bind email": "Connect Email Address",
            "server error": "The server is busy now. Please try again later.",
            "wrong content": "Requirements not met.",
            "enter right account": "Please enter a valid email address or Moonton account",
            "reset email": "Change Email Address",
            "send email1": "A verification email will be sent to {x}. Please tap the link included in the email to complete the change.",
            "send email2": "Please tap the link included in the email to complete the change.",
            "send email": "Send Email",
            "sended email1": "A verification email has been sent to",
            "sended email2": ". You can resend the email in",
            "sended email3": "s.",
            "sended email4": "A verification email has been sent to",
            "sended email5": ". Note: Before the change is completed, your account will still be connected to the old email address.",
            "empty code": "Verification code cannot be empty",
            "wrong code": "Invalid verification code",
            "enter new email code": "Please enter the verification code",
            "enter new email": "New Email Address",
            "send code fail": "Operation failed.",
            "send code success": "Verification code sent",
            "reset email success": "Email address changed.",
            "reset emial fail": "Operation failed. Please try again.",
            "binded email": "The email address is already connected to another account.",
            "send email fail": "Operation failed. Please check if you've connected a Moonton account and email address.",
            "send code": "Send Code",
            "outdata link": "The link has expired.",
            registed: "The email address is already connected to another account. Please try another.",
            frequent: "Too many failed attempts. Please try again later.",
            "phone code wrong": "Invalid verification code",
            "binded phone": "The account is already connected to a phone number",
            "phone error": "Invalid phone number",
            "unbinded phone": "The phone number isn't connected to an account",
            "zhanyong phone": "The phone number is already connected to an account",
            "Phone Registration": "Sign Up with Phone",
            Phone: "Phone Number",
            Code: "Verification Code",
            "Enter Phone": "Please enter a valid phone number to receive the verification code",
            "Enter Code": "Tap the button on the right to send a verification code to your phone number and enter the code to complete the verification.",
            "send old phone1": "Send a verification code to",
            "a code": ".",
            "enter new phone": "Please enter the verification code to complete the verification",
            "quit change fail": "Until the verification is completed, your Moonton account will still be connected to your old phone number.",
            "change phone success": "Phone number changed.",
            "change phone": "Change Phone Number",
            "password err too many": "Too many failed attempts. Please try again tomorrow.",
            "email verification": "Email Verification ({0})",
            "Enter Email Code": "Tap the button on the right to send a verification code to your email address and enter the verification code to complete the verification.",
            "Email verification successful": "Email verification success. Please enter the phone number you want to connect.",
            "phone verification": "Phone Verification ({0})",
            "email sended and goto verify": "A verification email has been sent to {0}. Please tap the link included in the email and complete the verification.",
            "Phone Number Connected": "Phone number connected.",
            "add phone": "Connect Phone Number",
            "add email": "Connect Email Address",
            "email verification code holder": "Verification Code",
            "phone verification successful": "Phone verification success. Please enter the email address you want to connect.",
            "change passwrod tip": "Note: You can only change the password for the Moonton account connected to the email address you entered.",
            "enter call code": "Please select your area code",
            wait: "Too many attempts. Please try again in {time}s.",
            dofrequent: "Too many attempts. Please try again later.",
            notman: "Due to security reasons, your login request has been declined. Please contact Customer Service if you have any questions.",
            hint: "Notice",
            "change binding tips": "The email change is currently under review. Please wait. You can cancel the change during this process. Time before you can change the email address: {x}.\n",
            "contact customer service": "If you have any questions, please contact Customer Service.",
            "i know": "Okay",
            "cancel change": "Cancel",
            "change pass": "Your email change has been approved, please confirm your new email address: {x}",
            "confirm change": "Change",
            LANG_STRID_Accountchangepassword_220501: "Please enter your connected phone number to receive the password reset message.",
            LANG_STRID_Accountchangepassword_220503: "Note: You can only change the password for the Moonton account connected to the phone number you entered.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Return",
            LANG_STRID_Accountchangepassword_220506: "Reset Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "Tap Send Code to send a verification code to your phone number and enter the code to complete the verification.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols.",
            LANG_STRID_Accountchangepassword_220513: "Invalid password. Please try again.",
            LANG_STRID_Accountchangepassword_220514: "The passwords don't match. Please try again.",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification code. Please try again.",
            LANG_STRID_Accountchangepassword_220516: "Your password has been reset.",
            LANG_STRID_Accountchangepassword_220517: "Get Code",
            LANG_STRID_Accountchangepassword_220518: "Login Verification",
            LANG_STRID_Accountchangepassword_220519: "Please enter your phone number and verification code to complete the verification.",
            LANG_STRID_Accountchangepassword_220520: "Please enter a valid phone number to receive the verification code.",
            LANG_STRID_Accountchangepassword_220521: "Login Notice",
            LANG_STRID_Accountchangepassword_220522: "Account switched. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220523: "Login success. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Your Moonton password has been reset.",
            LANG_STRID_Accountswitch_220501: "Change Email Address",
            LANG_STRID_Accountswitch_220502: "Send Verification Code to Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "Tap the button on the right to send a verification code to your email address and enter the code to complete the verification.",
            LANG_STRID_Accountswitch_220505: "Send Verification Code to Phone {0}",
            LANG_STRID_Accountswitch_220506: "Please enter a valid email address.",
            LANG_STRID_Accountswitch_220507: "The verification code has been sent to your email address.",
            LANG_STRID_Accountswitch_220508: "Please enter the verification code and your new email address below and complete the verification.",
            LANG_STRID_Accountswitch_220509: "Until the verification is complete, your Moonton account is still connected to your previous email address.",
            LANG_STRID_Accountswitch_220510: "Please enter your new email address.",
            LANG_STRID_Accountswitch_220511: "Please enter a valid email address to receive the verification code.",
            LANG_STRID_Accountswitch_220512: "Are you sure you want to cancel the request?",
            LANG_STRID_Accountswitch_220513: "Cancel Request",
            LANG_STRID_Accountswitch_220514: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in {x}d {y}h {z}m. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Quick Email Registration",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Please enter your Moonton account and password",
            LANG_STRID_MTregister_221104: "Please confirm your Moonton account and password",
            LANG_STRID_MTregister_221105: "Please re-enter your password",
            LANG_STRID_MTregister_221106: "Moonton Username (optional)",
            LANG_STRID_MTregister_221107: "Must consist of 6-20 letters, underscores, or numbers, and must start with a letter.",
            LANG_STRID_MTregister_221108: "I have read and agree to the Terms of Use.",
            LANG_STRID_MTregister_221109: "Bind Your Moonton Account",
            LANG_STRID_MTregister_221110: "The verification email has been sent to the email bound to your account. Please verify within 24 hours. If you haven't received the email, please check the junk folder to see if it's there.",
            LANG_STRID_MTregister_221111: "Verify with email",
            LANG_STRID_MTregister_221112: "You have successfully bound your Moonton Account. Now you can log in with your Moonton email and password.",
            LANG_STRID_MTregister_221113: "Invalid email",
            LANG_STRID_MTregister_221114: "You have successfully bound your phone number.",
            LANG_STRID_MTregister_221115: "Quick Phone Registration",
            LANG_STRID_MTregister_221116: "Enter your phone number",
            LANG_STRID_MTregister_221117: "Please enter the Moonton account and password you're currently using to help us confirm your identity.",
            LANG_STRID_MTregister_221118: "Invalid phone number",
            LANG_STRID_MTregister_221119: "Your passwords did not match. Please enter again.",
            LANG_STRID_accinterception03: "Your current network is unstable, please try again.",
            LANG_STRID_Accountswitch_220519: "Moonton Username (required)",
            LANG_STRID_UnbindPhone_230701: "Your current connected phone number is {0}.",
            LANG_STRID_UnbindPhone_230702: "Once disconnected, the phone number can no longer be used as your Moonton account ID to log into the game with the password.",
            LANG_STRID_UnbindPhone_230703: "It is recommended to connect your Moonton account to an email before disconnecting your phone number.",
            LANG_STRID_UnbindPhone_230704: "Disconnect Phone Number",
            LANG_STRID_UnbindPhone_230705: "You have not connected a Moonton email to your account. Please try again after connecting a Moonton email.",
            LANG_STRID_UnbindPhone_230706: "Tap the button below to send a verification code to your connected Moonton email {0}.",
            LANG_STRID_UnbindPhone_230707: "A verification code has been sent to your Moonton email address {0}. Please check.",
            LANG_STRID_UnbindPhone_230708: "You have successfully disconnected your phone number.",
            passwordError: "The password you entered is incorrect. Please try again.",
            passwordErrorWait: "The password you entered is incorrect. Please try again in {x} minutes {y} seconds.",
            passwordErrorWaitSec: "The password you entered is incorrect. Please try again in {y} seconds.",
            enterEmailTip: "Please enter a valid email address to receive our message.",
            sendEmailTip: 'Tap "Send Verification Code" and we will send an email containing a verification code to the address you provided. Enter the code to complete the verification process.',
            logInViaAccountPassword: "Log in via account password",
            logInViaEmailVerification: "Log in via email verification",
            enterEmailFirst: "Please enter your email address first",
            verificationCodeError: "Invalid verification code. Please try again.",
            unbindEmail: "This email is not connected to a Moonton account"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Dirección de Correo Electrónico",
            Password: "Contraseña",
            "Sign up": "Regístrate",
            "Forgot password": "Olvidé Mi Contraseña",
            "Create Your Moonton Account": "Crear Cuenta de Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Por favor, introduce una dirección de correo electrónico válida para recibir la información del juego",
            "Re-Enter Password": "Confirmar Contraseña",
            "Please agree to the Moonton": "Por favor, confirma los acuerdos con Moonton",
            "terms of service": "Términos de Servicio",
            Submit: "Enviar",
            "E-Mail format error": "Dirección de correo electrónico inválida",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Utiliza 6 o más caracteres con una mezcla de letras mayúsculas y minúsculas, números y sin símbolos especiales",
            "These passwords dont' match": "Las contraseñas no coinciden",
            "Please enter your email address": "Por favor, introduce tu dirección de correo electrónico",
            "Please enter your password": "Por favor, introduce tu contraseña",
            "Please confirm your password": "Por favor, confirma tu contraseña",
            "Please agree to the Moonton Terms of Service": "Por favor, acepta los Términos de Servicio de Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Se ha enviado un correo electrónico de verificación a tu dirección de correo electrónico. Por favor, toca el enlace en el correo electrónico y completa la verificación. Si no lo encuentras, comprueba tu carpeta de correo no deseado.",
            Confirm: "Confirmar",
            "Please enter your email address to receive the email with a new password.": "Por favor introduce tu dirección de correo electrónico conectada para recibir el correo de restablecimiento de contraseña",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Se ha enviado un correo electrónico de restablecimiento de contraseña a tu dirección de correo electrónico conectada. Por favor, comprueba el correo electrónico a tiempo.",
            Continue: "Continuar",
            "Sign in with your Moonton Account": "Entrar con Cuenta de Moonton",
            "Sign in": "Iniciar Sesión",
            Congratulations: "Felicidades",
            "Your email": "Tu cuenta (",
            "is confirmed. Thank you!": ") ha sido creada. ¡Feliz juego!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Aviso",
            "Your account has already been confirmed.": "La cuenta ya ha sido creada.",
            "The link has expired Please request a new link in-gme. Thank you.": "El enlace ha caducado. Por favor, vuelve a enviar el enlace en el juego.",
            "Reset Password": "Restablecer Contraseña",
            "New Password": "Nueva Contraseña",
            "Re-Enter-Password": "Confirmar Contraseña",
            "Please confirm your new password": "Por favor, confirma tu contraseña",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "La contraseña ha cambiado. Por favor, inicia sesión de nuevo con tu nueva contraseña.",
            "Bind your Moonton Account": "Conectar Cuenta de Moonton",
            "Check Your Email": "Comprobar Correo Electrónico",
            "Re-enter email": "Confirmar Correo Electrónico",
            "Email incompatible": "Las direcciones de correo electrónico no coinciden",
            "Please enter your password again": "Confirmar Contraseña",
            "Moonton Account": "Cuenta de Moonton",
            "account rule": "Utiliza de 6 a 20 letras, dígitos o _ y comienza con una letra",
            "Send Verification Email": "Enviar Correo Electrónico",
            "to email": "Se ha enviado un correo electrónico de verificación a",
            "sended email": ". Por favor, comprueba el correo electrónico en tu correo electrónico.",
            "change email": "Cambiar la Dirección de Correo Electrónico",
            "Email Registration": "Regístrate con un Correo Electrónico",
            "Quick Registration": "Registro Rápido",
            "Accept the agreement and register": "ACEPTAR Y REGISTRAR",
            "same account": "El nombre de usuario ya existe. Por favor, intenta con otro.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Por favor, introduce la contraseña de la cuenta actual de Moonton para verificarla.",
            "congratulations account": "¡Felicidades! Has creado una cuenta Moonton y la has conectado a tu progreso de juego actual.",
            "empty email": "Por la seguridad de tu cuenta, te recomendamos que conectes la cuenta a una dirección de correo electrónico para que puedas entrar en la cuenta con la dirección de correo electrónico y cambiar tu contraseña.",
            "used email": "La dirección de correo electrónico ya está conectada a otra cuenta. Por favor, inténtalo con otra o conéctate a la cuenta a través de Cambiar de Cuenta.",
            "useful email": "Se ha enviado un correo electrónico de verificación a la dirección de correo electrónico conectada. Por favor, toca el enlace en el correo electrónico y completa la verificación en 24 horas. Si no lo encuentras, comprueba tu carpeta de correo no deseado.",
            "Connect to Email": "Conectar Correo Electrónico",
            unreset: "No puedes restablecer la contraseña si tu Cuenta de Moonton no está conectada a una dirección de correo electrónico.",
            emailtime1: "Puedes volver a enviar el correo electrónico en",
            emailtime2: "s.",
            "have fun": "Cuenta conectada. ¡Feliz juego!",
            "continue bind email": "Conectar Dirección de Correo Electrónico",
            "server error": "El servidor está ocupado ahora. Por favor, inténtalo más tarde.",
            "wrong content": "No se cumplen los requisitos.",
            "enter right account": "Por favor, introduce una dirección de correo electrónico válida o una cuenta de Moonton",
            "reset email": "Cambiar la Dirección de Correo Electrónico",
            "send email1": "Se enviará un correo electrónico de verificación a {x}. Por favor, toca el enlace en el correo electrónico para completar el cambio.",
            "send email2": ". Por favor, toca el enlace en el correo electrónico para completar el cambio.",
            "send email": "Enviar Correo Electrónico",
            "sended email1": "Se ha enviado un correo electrónico de verificación a",
            "sended email2": ". Puedes reenviar el correo electrónico en",
            "sended email3": "s.",
            "sended email4": "Se ha enviado un correo electrónico de verificación a",
            "sended email5": ". Nota: Antes de que se complete el cambio, tu cuenta seguirá conectada a la antigua dirección de correo electrónico.",
            "empty code": "El código de verificación no puede estar vacío",
            "wrong code": "Código de verificación inválido",
            "enter new email code": "Por favor, introduce el código de verificación",
            "enter new email": "Nueva Dirección de Correo Electrónico",
            "send code fail": "Operación fallida.",
            "send code success": "Código de verificación enviado",
            "reset email success": "La dirección de correo electrónico ha cambiado.",
            "reset emial fail": "Operación fallida. Por favor, inténtalo de nuevo.",
            "binded email": "La dirección de correo electrónico ya está conectada a otra cuenta.",
            "send email fail": "Operación fallida. Por favor, comprueba si has conectado una cuenta de Moonton y una dirección de correo electrónico.",
            "send code": "Enviar Código",
            "outdata link": "El enlace ha caducado.",
            registed: "La dirección de correo electrónico ya está conectada a otra cuenta. Por favor, inténtalo con otra.",
            frequent: "Demasiados intentos fallidos. Por favor, inténtalo de nuevo más tarde.",
            "phone code wrong": "Código de verificación inválido",
            "binded phone": "La cuenta ya está conectada a un número de teléfono",
            "phone error": "Número de teléfono inválido",
            "unbinded phone": "El número de teléfono no está conectado a una cuenta",
            "zhanyong phone": "El número de teléfono ya está conectado a una cuenta",
            "Phone Registration": "Regístrate con un Teléfono",
            Phone: "Número de Teléfono",
            Code: "Código de Verificación",
            "Enter Phone": "Por favor, introduce un número de teléfono válido para recibir el código de verificación",
            "Enter Code": "Toca el botón de la derecha para enviar un código de verificación a tu número de teléfono e introduce el código para completar la verificación.",
            "send old phone1": "Enviar un código de verificación a",
            "a code": ".",
            "enter new phone": "Por favor, introduce el código de verificación para completar la verificación",
            "quit change fail": "Hasta que se complete la verificación, tu cuenta de Moonton seguirá conectada a tu antiguo número de teléfono.",
            "change phone success": "Número de teléfono cambiado.",
            "change phone": "Cambiar Número de Teléfono",
            "password err too many": "Demasiados intentos fallidos. Por favor, inténtalo de nuevo mañana.",
            "email verification": "Verificación de Correo Electrónico ({0})",
            "Enter Email Code": "Toca el botón de la derecha para enviar un código de verificación a tu dirección de correo electrónico e introduce el código de verificación para completar la verificación.",
            "Email verification successful": "Verificación de correo electrónico exitosa. Por favor, introduce el número de teléfono al que quieres conectarte.",
            "phone verification": "Verificación de Teléfono ({0})",
            "email sended and goto verify": "Se ha enviado un correo electrónico de verificación a {0}. Por favor, toca el enlace en el correo electrónico y completa la verificación.",
            "Phone Number Connected": "Número de teléfono conectado.",
            "add phone": "Conectar Número de Teléfono",
            "add email": "Conectar Dirección de Correo Electrónico",
            "email verification code holder": "Código de Verificación",
            "phone verification successful": "Verificación de teléfono exitosa. Por favor, introduce la dirección de correo electrónico que quieres conectar.",
            "change passwrod tip": "Nota: Sólo puedes cambiar la contraseña de la cuenta de Moonton conectada a la dirección de correo electrónico que has introducido.",
            "enter call code": "Por favor, selecciona tu código de área",
            wait: "Demasiados intentos. Por favor, inténtalo de nuevo en {time}s.",
            dofrequent: "Demasiados intentos. Por favor, inténtalo de nuevo más tarde.",
            notman: "Por razones de seguridad, tu solicitud de acceso ha sido rechazada. Por favor, contacta al Servicio de Atención al Cliente si tienes alguna duda.",
            hint: "Aviso",
            "change binding tips": "El cambio de correo está actualmente bajo revisión. Por favor espera. Puedes cancelar el cambio durante este proceso. Tiempo antes de que pueda cambiar la dirección de correo: {x}.",
            "contact customer service": "Si tienes alguna pregunta, comunícate con el Servicio de Atención al Cliente.",
            "i know": "Okay",
            "cancel change": "Cancelar",
            "change pass": "Tu cambio de correo ha sido aprobado, por favor confirma tu nueva dirección de correo: {x}",
            "confirm change": "Cambiar",
            LANG_STRID_Accountchangepassword_220501: "Por favor ingresa tu número de teléfono conectado para recibir el mensaje de restablecimiento de contraseña.",
            LANG_STRID_Accountchangepassword_220503: "Nota: Solo puedes cambiar la contraseña de la cuenta Moonton conectada al número de teléfono que ingresaste.",
            LANG_STRID_Accountchangepassword_220504: "Verificación de Email",
            LANG_STRID_Accountchangepassword_220505: "Regresar",
            LANG_STRID_Accountchangepassword_220506: "Restablecer Contraseña de Moonton",
            LANG_STRID_Accountchangepassword_220507: "Toca Enviar Código para enviar un código de verificación a tu número de teléfono e ingresa el código para completar la verificación.",
            LANG_STRID_Accountchangepassword_220511: "Usa 6 o más caracteres con una combinación de letras mayúsculas y minúsculas, números y ningún símbolo especial.",
            LANG_STRID_Accountchangepassword_220513: "Contraseña invalida. Inténtalo de nuevo.",
            LANG_STRID_Accountchangepassword_220514: "Las contraseñas no coinciden. Por favor inténtalo de nuevo.",
            LANG_STRID_Accountchangepassword_220515: "Código de verificación invalido. Por favor inténtalo de nuevo.",
            LANG_STRID_Accountchangepassword_220516: "Tu contraseña ha sido restablecida.",
            LANG_STRID_Accountchangepassword_220517: "Obtener código",
            LANG_STRID_Accountchangepassword_220518: "Verificación de Acceso",
            LANG_STRID_Accountchangepassword_220519: "Por favor ingresa tu número de teléfono y código de verificación para completar la verificación.",
            LANG_STRID_Accountchangepassword_220520: "Por favor ingresa un número de teléfono válido para recibir el código de verificación.",
            LANG_STRID_Accountchangepassword_220521: "Aviso de Inicio de Sesión",
            LANG_STRID_Accountchangepassword_220522: "Cuenta cambiada. Por favor vuelve a entrar en el juego.",
            LANG_STRID_Accountchangepassword_220523: "Acceso exitoso. Por favor vuelve a entrar en el juego.",
            LANG_STRID_Accountchangepassword_220524: "Dirección de Correo Electrónico/Cuenta Moonton/Número de Teléfono",
            LANG_STRID_Accountchangepassword_220525: "Se ha restablecido tu contraseña de Moonton.",
            LANG_STRID_Accountswitch_220501: "Cambiar Dirección de Correo Electrónico",
            LANG_STRID_Accountswitch_220502: "Enviar Código de Verificación al Correo Electrónico {0}",
            LANG_STRID_Accountswitch_220503: "Código de Verificación de Correo Electrónico",
            LANG_STRID_Accountswitch_220504: "Toca el botón a la derecha para enviar un código de verificación a tu dirección de correo electrónico e ingresa el código para completar la verificación.",
            LANG_STRID_Accountswitch_220505: "Enviar Código de Verificación al Teléfono {0}",
            LANG_STRID_Accountswitch_220506: "Por favor, introduce una dirección de correo electrónico válida.",
            LANG_STRID_Accountswitch_220507: "El código de verificación ha sido enviado a su dirección de correo electrónico.",
            LANG_STRID_Accountswitch_220508: "Ingresa el código de verificación y tu nueva dirección de correo electrónico a continuación y completa la verificación.",
            LANG_STRID_Accountswitch_220509: "Hasta que se complete la verificación, tu cuenta de Moonton seguirá conectada a su dirección de correo electrónico anterior.",
            LANG_STRID_Accountswitch_220510: "Por favor, introduce tu nueva dirección de correo electrónico.",
            LANG_STRID_Accountswitch_220511: "Ingresa una dirección de correo electrónico válida para recibir el código de verificación.",
            LANG_STRID_Accountswitch_220512: "¿Estas seguro de que deseas cancelar la solicitud?",
            LANG_STRID_Accountswitch_220513: "Cancelar Solicitud",
            LANG_STRID_Accountswitch_220514: "La solicitud se encuentra actualmente en revisión. Espera por favor. Puedes optar por cancelar la solicitud durante este proceso. Tu dirección de correo electrónico se puede cambiar en {x}d {y}h {z}m. Si tienes alguna pregunta, comunícate con el Servicio de Atención al Cliente.",
            LANG_STRID_Accountswitch_220516: "Enviar Código de Verificación al Teléfono <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "La solicitud se encuentra actualmente en revisión. Espera por favor. Puedes optar por cancelar la solicitud durante este proceso. Tu dirección de correo electrónico se puede cambiar en <span>{x}d {y}h {z}m</span>. Si tienes alguna pregunta, comunícate con el Servicio de Atención al Cliente.",
            LANG_STRID_Accountswitch_220518: "Enviar Código de Verificación al Correo <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Registro Rápido del Correo Electrónico",
            LANG_STRID_MTregister_221102: "Correo Electrónico",
            LANG_STRID_MTregister_221103: "Por favor, introduce tu cuenta y contraseña de Moonton",
            LANG_STRID_MTregister_221104: "Por favor, confirma tu cuenta y contraseña de Moonton",
            LANG_STRID_MTregister_221105: "Por favor, vuelve a introducir tu contraseña",
            LANG_STRID_MTregister_221106: "Nombre de Usuario de Moonton (opcional)",
            LANG_STRID_MTregister_221107: "Debe constar de 6-20 letras, guiones bajos o números, y debe comenzar con una letra.",
            LANG_STRID_MTregister_221108: "He leído y acepto los Términos de Uso.",
            LANG_STRID_MTregister_221109: "Vincula Tu Cuenta de Moonton",
            LANG_STRID_MTregister_221110: "El correo electrónico de verificación se ha enviado al correo electrónico vinculado a tu cuenta. Por favor, verifícalo dentro de las 24 horas. Si no has recibido el correo electrónico, por favor, revisa la carpeta de correo no deseado para ver si está allí.",
            LANG_STRID_MTregister_221111: "Verificar con correo electrónico",
            LANG_STRID_MTregister_221112: "Has vinculado correctamente tu Cuenta de Moonton. Ahora puedes iniciar sesión con tu correo electrónico y contraseña de Moonton.",
            LANG_STRID_MTregister_221113: "Correo electrónico no válido",
            LANG_STRID_MTregister_221114: "Has vinculado correctamente tu número de teléfono.",
            LANG_STRID_MTregister_221115: "Registro Rápido de Teléfono",
            LANG_STRID_MTregister_221116: "Introduce tu número de teléfono",
            LANG_STRID_MTregister_221117: "Introduce la cuenta y la contraseña de Moonton que estás utilizando actualmente para ayudarnos a confirmar tu identidad.",
            LANG_STRID_MTregister_221118: "Número de teléfono no válido",
            LANG_STRID_MTregister_221119: "Tus contraseñas no coinciden. Por favor, introdúcelas de nuevo.",
            LANG_STRID_accinterception03: "Tu red actual es inestable, por favor, inténtalo de nuevo.",
            LANG_STRID_Accountswitch_220519: "Nombre de Usuario de Moonton (obligatorio)",
            LANG_STRID_UnbindPhone_230701: "Tu número de teléfono conectado actual es {0}.",
            LANG_STRID_UnbindPhone_230702: "Una vez desconectado, el número de teléfono ya no se puede usar como tu ID de cuenta de Moonton para iniciar sesión en el juego con la contraseña.",
            LANG_STRID_UnbindPhone_230703: "Se recomienda conectar tu cuenta Moonton a un correo electrónico antes de desconectar tu número de teléfono.",
            LANG_STRID_UnbindPhone_230704: "Desconectar Número de Teléfono",
            LANG_STRID_UnbindPhone_230705: "No has conectado un correo electrónico de Moonton a tu cuenta. Vuelve a intentarlo después de conectar un correo electrónico de Moonton.",
            LANG_STRID_UnbindPhone_230706: "Toca el botón a continuación para enviar un código de verificación a tu correo electrónico de Moonton conectado {0}.",
            LANG_STRID_UnbindPhone_230707: "Se ha enviado un código de verificación a tu dirección de correo electrónico de Moonton {0}. Por favor, revísalo.",
            LANG_STRID_UnbindPhone_230708: "Has desconectado con éxito tu número de teléfono.",
            passwordError: "La contraseña que has ingresado es incorrecta. Inténtalo de nuevo.",
            passwordErrorWait: "La contraseña que has ingresado es incorrecta. Vuelve a intentarlo en {x} minutos {y} segundos.",
            passwordErrorWaitSec: "La contraseña que has ingresado es incorrecta. Vuelve a intentarlo en {y} segundos.",
            enterEmailTip: "Por favor ingresa una dirección de correo electrónico válida para recibir nuestro mensaje.",
            sendEmailTip: 'Toca "Enviar Código de Verificación" y te enviaremos un correo electrónico con un código de verificación a la dirección que proporcionaste. Ingresa el código para completar el proceso de verificación.',
            logInViaAccountPassword: "Iniciar sesión mediante la contraseña de la cuenta",
            logInViaEmailVerification: "Inicia sesión mediante verificación por correo electrónico",
            enterEmailFirst: "Por favor ingresa tu dirección de correo electrónico primero",
            verificationCodeError: "Código de verificación inválido. Inténtalo de nuevo.",
            unbindEmail: "Este correo electrónico no está vinculado a una cuenta de Moonton."
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Adresse e-mail",
            Password: "Mot de passe",
            "Sign up": "Connexion",
            "Forgot password": "Mot de passe oublié",
            "Create Your Moonton Account": "Créer un compte Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Veuillez entrer une adresse e-mail valide afin de recevoir les dernières informations du jeu",
            "Re-Enter Password": "Confirmez le mot de passe",
            "Please agree to the Moonton": "Veuillez accepter les",
            "terms of service": "Conditions d'utilisation de Moonton",
            Submit: "Envoyer",
            "E-Mail format error": "Adresse e-mail invalide",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Utilisez au minimum 6 caractères comportant des minuscules, des majuscules et des chiffres. Veuillez ne pas utiliser de caractères spéciaux.\n",
            "These passwords dont' match": "Les mots de passe ne correspondent pas",
            "Please enter your email address": "Veuillez saisir votre adresse e-mail",
            "Please enter your password": "Veuillez saisir votre mot de passe",
            "Please confirm your password": "Veuillez confirmer votre mot de passe",
            "Please agree to the Moonton Terms of Service": "Veuillez accepter les conditions d'utilisation de Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Un e-mail de vérification a été envoyé sur votre messagerie électronique. Veuillez ouvrir le lien se trouvant dans l'e-mail afin de procéder à la vérification. Si vous ne voyez pas l'e-mail, veuillez vérifier vos courriers indésirables.",
            Confirm: "Confirmer",
            "Please enter your email address to receive the email with a new password.": "Veuillez entrer votre adresse e-mail afin de réinitialiser votre mot de passe.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Un mot de passe de réinitialisation a été envoyé sur votre messagerie électronique. Veuillez vérifier vos e-mails.",
            Continue: "Continuer",
            "Sign in with your Moonton Account": "Se connecter avec un compte Moonton",
            "Sign in": "Connexion",
            Congratulations: "Félicitations",
            "Your email": "Votre compte (",
            "is confirmed. Thank you!": ") a été créé. Amusez-vous bien !",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Annonce",
            "Your account has already been confirmed.": "Le compte a déjà été créé.",
            "The link has expired Please request a new link in-gme. Thank you.": "Le lien a expiré. Veuillez le renvoyer.",
            "Reset Password": "Réinitialiser le mot de passe",
            "New Password": "Nouveau mot de passe",
            "Re-Enter-Password": "Confirmez le mot de passe",
            "Please confirm your new password": "Veuillez confirmer votre mot de passe",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Mot de passe modifié. Veuillez vous reconnecter avec votre nouveau mot de passe.",
            "Bind your Moonton Account": "Lier le compte Moonton",
            "Check Your Email": "Vérifier votre adresse e-mail",
            "Re-enter email": "Confirmer votre adresse e-mail",
            "Email incompatible": "Les adresses e-mail ne correspondent pas",
            "Please enter your password again": "Confirmez le mot de passe",
            "Moonton Account": "Compte Moonton",
            "account rule": "Utilisez 6 à 20 lettres, chiffres ou _ et commencez par une lettre",
            "Send Verification Email": "Envoyer l'e-mail",
            "to email": "Un e-mail de vérification a été envoyé à",
            "sended email": ". Veuillez vérifier vote messagerie électronique.",
            "change email": "Modifier l'adresse e-mail",
            "Email Registration": "S'inscrire avec une adresse e-mail",
            "Quick Registration": "Inscription rapide",
            "Accept the agreement and register": "ACCEPTEZ LES CONDITIONS ET INSCRIVEZ-VOUS",
            "same account": "Cet identifiant existe déjà. Veuillez en essayer un autre.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Veuillez saisir le mot de passe actuel du compte Moonton afin qu'il soit vérifier.",
            "congratulations account": "Félicitations ! Vous avez créé un compte Moonton et l'avez connecté à votre progression de jeu actuelle.",
            "empty email": "Pour la sécurité de votre compte, nous vous recommandons de lier le compte à une adresse e-mail afin que vous puissiez vous connecter et modifier votre mot de passe grâce à celle-ci.",
            "used email": 'L\'adresse e-mail est déjà connectée à un autre compte. Veuillez en essayer une autre ou vous connecter avec "Changer de compte".',
            "useful email": "Un e-mail de vérification a été envoyé sur votre messagerie électronique. Veuillez ouvrir le lien se trouvant dans l'e-mail pour terminer la vérification dans les 24h. Si vous ne voyez pas l'e-mail, veuillez vérifier vos courriers indésirables.",
            "Connect to Email": "Lier l'adresse e-mail",
            unreset: "Vous ne pouvez pas réinitialiser le mot de passe si votre compte Moonton n'est pas connecté à une adresse e-mail.",
            emailtime1: "Vous pouvez renvoyer l'e-mail dans",
            emailtime2: "s.",
            "have fun": "Compte connecté. Amusez-vous bien !",
            "continue bind email": "Ajouter une adresse e-mail",
            "server error": "Le serveur est actuellement saturé. Veuillez réessayer ultérieurement.",
            "wrong content": "Prérequis non remplis.",
            "enter right account": "Veuillez entrer une adresse e-mail valide ou un compte Moonton",
            "reset email": "Modifier l'adresse e-mail",
            "send email1": "Un e-mail de vérification va être envoyé à {x}. Veuillez appuyer sur le lien inclus dans le mail afin de finaliser le changement.",
            "send email2": "Veuillez cliquer sur le lien envoyé par e-mail afin de compléter la modification.",
            "send email": "Envoyer l'e-mail",
            "sended email1": "Un e-mail de vérification a été envoyé à",
            "sended email2": ". Vous pouvez renvoyer l'e-mail dans",
            "sended email3": "s.",
            "sended email4": "Un e-mail de vérification a été envoyé à",
            "sended email5": ". Remarque : tant que la modification ne sera pas terminée, votre compte sera toujours connecté à l'ancienne adresse e-mail.",
            "empty code": "Le code de vérification ne peut pas être vide",
            "wrong code": "Code de vérification invalide",
            "enter new email code": "Veuillez entrer le code de vérification",
            "enter new email": "Nouvelle adresse e-mail",
            "send code fail": "L'opération a échoué.",
            "send code success": "Code de vérification envoyé",
            "reset email success": "Adresse e-mail modifiée.",
            "reset emial fail": "L'opération a échoué. Veuillez réessayer.",
            "binded email": "L'adresse e-mail est déjà connectée à un autre compte.",
            "send email fail": "L'opération a échoué. Veuillez vous assurer qu'un compte Moonton est lié à l'adresse e-mail.",
            "send code": "Envoyer le code",
            "outdata link": "Le lien a expiré.",
            registed: "L'adresse e-mail est déjà connectée à un autre compte. Veuillez en essayer une autre.",
            frequent: "Trop de tentatives. Veuillez réessayer plus tard.",
            "phone code wrong": "Code de vérification invalide",
            "binded phone": "Le compte est déjà connecté à un numéro de téléphone",
            "phone error": "Numéro de téléphone invalide",
            "unbinded phone": "Le numéro de téléphone n'est pas connecté à un compte",
            "zhanyong phone": "Le numéro de téléphone est déjà connecté à un compte",
            "Phone Registration": "S'inscrire avec un numéro de téléphone",
            Phone: "Numéro de téléphone",
            Code: "Code de vérification",
            "Enter Phone": "Veuillez saisir un numéro de téléphone valide pour recevoir le code de vérification",
            "Enter Code": "Appuyez sur le bouton à droite afin d'envoyer un code de vérification sur votre numéro de téléphone et saisissez le code afin de finaliser la vérification.",
            "send old phone1": "Envoyer un code de vérification au",
            "a code": ".",
            "enter new phone": "Veuillez saisir le code de vérification afin de finaliser la vérification",
            "quit change fail": "Tant que la vérification n'est pas terminée, votre compte Moonton sera toujours connecté à votre ancien numéro de téléphone.",
            "change phone success": "Numéro de téléphone modifié.",
            "change phone": "Modifier le numéro de téléphone",
            "password err too many": "Trop de tentatives. Veuillez réessayer demain.",
            "email verification": "Vérification de l'e-mail ({0})",
            "Enter Email Code": "Appuyez sur le bouton à droite afin d'envoyer un code de vérification sur votre adresse e-mail et saisissez le code afin de finaliser la vérification.",
            "Email verification successful": "Vérification de l'e-mail réussie. Veuillez saisir le numéro de téléphone que vous souhaitez ajouter.",
            "phone verification": "Vérification du numéro de téléphone ({0})",
            "email sended and goto verify": "Un e-mail de vérification a été envoyé à {0}. Veuillez ouvrir le lien se trouvant dans l'e-mail afin de finaliser la vérification.",
            "Phone Number Connected": "Numéro de téléphone lié.",
            "add phone": "Ajouter un numéro de téléphone",
            "add email": "Ajouter une adresse e-mail",
            "email verification code holder": "Code de vérification",
            "phone verification successful": "Vérification du numéro de téléphone réussie. Veuillez saisir l'adresse e-mail que vous souhaitez ajouter.",
            "change passwrod tip": "Remarque : seul le mot de passe du compte Moonton lié à l'adresse que vous avez ajoutée peut être modifié.",
            "enter call code": "Veuillez sélectionner votre indicatif régional",
            wait: "Trop de tentatives. Veuillez réessayer dans {time}s.",
            dofrequent: "Trop de tentatives. Veuillez réessayer plus tard.",
            notman: "Pour des raisons de sécurité, votre demande de connexion a été refusée. Pour toutes questions, n'hésitez pas à nous contacter par le biais du service client.",
            hint: "Annonce",
            "change binding tips": "Le changement d'email est en cours. Veuillez patienter. Vous pouvez annuler le changement durant le processus. Durée avant de pouvoir changer d'adresse email : {x}.",
            "contact customer service": "Pour toutes questions ou suggestions, veuillez nous contacter par le biais du service client.",
            "i know": "OK",
            "cancel change": "Annuler",
            "change pass": "Votre changement d'adresse email a été approuvé, veuillez confirmer votre nouvelle adresse : {x}.",
            "confirm change": "Changer",
            LANG_STRID_Accountchangepassword_220501: "Veuillez saisir votre numéro de téléphone afin de recevoir le message de réinitialisation de votre mot de passe.",
            LANG_STRID_Accountchangepassword_220503: "Remarque : vous ne pouvez changer que le mot de passe du compte Moonton lié au numéro de téléphone que vous avez ajouté.",
            LANG_STRID_Accountchangepassword_220504: "Vérification de l'e-mail",
            LANG_STRID_Accountchangepassword_220505: "Retour",
            LANG_STRID_Accountchangepassword_220506: "Réinitialiser le mot de passe Moonton",
            LANG_STRID_Accountchangepassword_220507: 'Appuyez sur "Envoyer le code" afin d\'envoyer un code de vérification sur votre numéro de téléphone et entrez le code pour compléter la vérification.',
            LANG_STRID_Accountchangepassword_220511: "Utilisez 6 caractères ou plus avec un mélange de lettres majuscules et minuscules, de chiffres et aucun symbole spécial.",
            LANG_STRID_Accountchangepassword_220513: "Mot de passe non valide. Veuillez réessayer.",
            LANG_STRID_Accountchangepassword_220514: "Les mots de passe sont différents. Veuillez réessayer.",
            LANG_STRID_Accountchangepassword_220515: "Code de vérification non valide. Veuillez réessayer.",
            LANG_STRID_Accountchangepassword_220516: "Votre mot de passe a été réinitialisé.",
            LANG_STRID_Accountchangepassword_220517: "Obtenir le code",
            LANG_STRID_Accountchangepassword_220518: "Vérification de connexion",
            LANG_STRID_Accountchangepassword_220519: "Veuillez saisir votre numéro de téléphone et le code de vérification afin de terminer la vérification.",
            LANG_STRID_Accountchangepassword_220520: "Veuillez entrer un numéro de téléphone valide pour recevoir le code de vérification.",
            LANG_STRID_Accountchangepassword_220521: "Annonce de connexion",
            LANG_STRID_Accountchangepassword_220522: "Compte changé. Veuillez retourner dans le jeu.",
            LANG_STRID_Accountchangepassword_220523: "Connexion faite avec succès. Veuillez retourner dans le jeu.",
            LANG_STRID_Accountchangepassword_220524: "Adresse e-mail/compte Moonton/numéro de téléphone",
            LANG_STRID_Accountchangepassword_220525: "Votre mot de passe Moonton a été réinitialisé.",
            LANG_STRID_Accountswitch_220505: "Envoyez le code de vérification sur le téléphone {0}",
            LANG_STRID_Accountswitch_220506: "Veuillez saisir une adresse e-mail valide.",
            LANG_STRID_Accountswitch_220507: "Le code de vérification a été envoyé sur votre adresse e-mail.",
            LANG_STRID_Accountswitch_220508: "Veuillez saisir le code de vérification et votre nouvelle adresse e-mail ci-dessous afin de terminer la vérification.",
            LANG_STRID_Accountswitch_220509: "Tant que la vérification ne sera pas terminée, votre compte Moonton sera toujours connecté à votre ancienne adresse e-mail.",
            LANG_STRID_Accountswitch_220510: "Veuillez saisir votre nouvelle adresse e-mail.",
            LANG_STRID_Accountswitch_220511: "Veuillez saisir une adresse e-mail correcte afin de recevoir le code de vérification.",
            LANG_STRID_Accountswitch_220512: "Êtes-vous certain de vouloir annuler votre demande ?",
            LANG_STRID_Accountswitch_220513: "Annuler demande",
            LANG_STRID_Accountswitch_220514: "La demande est actuellement en jour de traitement. Veuillez patienter. Vous pouvez choisir d'annuler la demande durant le processus. Votre adresse e-mail peut être changée dans {x}j {y}h {z}m. Pour toutes questions ou suggestions, n'hésitez pas à nous contacter par biais du service client.",
            LANG_STRID_Accountswitch_220516: "Envoyez le code de vérification sur le téléphone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "La demande est actuellement en jour de traitement. Veuillez patienter. Vous pouvez choisir d'annuler la demande durant le processus. Votre adresse e-mail peut être changée dans <span>{x}j {y}h {z}{z}m</span>. Pour toutes questions ou suggestions, n'hésitez pas à nous contacter par biais du service client.",
            LANG_STRID_Accountswitch_220518: "Envoyez le code de vérification dans votre adresse électronique <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Inscription rapide par courriel",
            LANG_STRID_MTregister_221102: "Adresse e-mail",
            LANG_STRID_MTregister_221103: "Veuillez saisir votre compte Moonton et votre mot de passe",
            LANG_STRID_MTregister_221104: "Veuillez confirmer votre compte Moonton et votre mot de passe",
            LANG_STRID_MTregister_221105: "Veuillez saisir votre mot de passe à nouveau",
            LANG_STRID_MTregister_221106: "Compte Moonton personnalisé (optionnel)",
            LANG_STRID_MTregister_221107: "Doit comporter 6 à 20 lettres, des tirets bas ou des lettres et doit commencer par une lettre.",
            LANG_STRID_MTregister_221108: "J'ai lu et accepté les conditions d'utilisation",
            LANG_STRID_MTregister_221109: "Lier votre compte Moonton",
            LANG_STRID_MTregister_221110: "Le courriel de vérification a été envoyé à l'adresse liée à votre compte. Veuillez effectuer la vérification dans les 24 heures. Si vous n'avez pas reçu le courriel, veuillez vérifier s'il n'est pas dans vos indésirables.",
            LANG_STRID_MTregister_221111: "Vérifier par e-mail",
            LANG_STRID_MTregister_221112: "Vous avez lié votre compte Moonton avec succès. Vous pouvez maintenant vous connecter avec votre compte et votre mot de passe Moonton.",
            LANG_STRID_MTregister_221113: "Adresse invalide",
            LANG_STRID_MTregister_221114: "Vous avez lié votre numéro de téléphone avec succès.",
            LANG_STRID_MTregister_221115: "Inscription rapide par téléphone",
            LANG_STRID_MTregister_221116: "Saisissez votre numéro de téléphone",
            LANG_STRID_MTregister_221117: "Veuillez saisir le compte et le mot de passe Moonton que vous êtes en train d'utiliser pour nous aider à confirmer votre identité.",
            LANG_STRID_MTregister_221118: "Numéro de téléphone invalide",
            LANG_STRID_MTregister_221119: "Vos mots de passe ne sont pas identiques. Veuillez les saisir à nouveau.",
            LANG_STRID_accinterception03: "Votre réseau est instable, veuillez réessayer.",
            LANG_STRID_Accountswitch_220519: "Nom d'utilisateur Moonton (requis)",
            LANG_STRID_UnbindPhone_230701: "Votre numéro de téléphone lié est le {0}.",
            LANG_STRID_UnbindPhone_230702: "Une fois déconnecté, il ne pourra plus être utilisé comme identifiant de votre compte Moonton pour vous connecter au jeu.",
            LANG_STRID_UnbindPhone_230703: "Il est recommandé de lier votre compte Moonton à une adresse e-mail avant de déconnecter votre numéro de téléphone.",
            LANG_STRID_UnbindPhone_230704: "Déconnecter le téléphone",
            LANG_STRID_UnbindPhone_230705: "Vous n'avez pas lié d'adresse e-mail à votre compte. Veuillez réessayer après avoir lié une adresse à votre compte Moonton.",
            LANG_STRID_UnbindPhone_230706: "Appuyez sur le bouton ci-dessous pour envoyer un code de vérification à votre adresse e-mail : {0}.",
            LANG_STRID_UnbindPhone_230707: "Un code de vérification a été envoyé à votre adresse : {0}. Veuillez consulter vos e-mails.",
            LANG_STRID_UnbindPhone_230708: "Vous avez bien déconnecté votre numéro de téléphone.",
            passwordError: "Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.",
            passwordErrorWait: "Le mot de pass que vous avez saisi est incorrect. Veuillez réessayer dans {x} minutes et {y} secondes.",
            passwordErrorWaitSec: "Le mot de pass que vous avez saisi est incorrect. Veuillez réessayer dans et {y} secondes.",
            enterEmailTip: "Veuillez saisir une adresse e-mail valide pour recevoir notre message.",
            sendEmailTip: 'Appuyez sur "Envoyer le code de vérification" et nous enverrons un courriel contenant un code de vérification à l\'adresse que vous avez fournie. Saisissez le code pour terminer la procédure de vérification.',
            logInViaAccountPassword: "Connexion par mot de passe",
            logInViaEmailVerification: "Connexion par vérification e-mail",
            enterEmailFirst: "Veuillez d'abord saisir votre adresse e-mail",
            verificationCodeError: "Code de vérification non valide. Veuillez réessayer.",
            unbindEmail: "Cette adresse e-mail n'est pas connectée à un compte Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "E-mail Cím",
            Password: "Jelszó",
            "Sign up": "Regisztráció",
            "Forgot password": "Elfelejtett Jelszó",
            "Create Your Moonton Account": "Moonton Fiók Létrehozása",
            "To obtain the latest information about us, please sign up with a valid email": "Kérjük adj meg egy érvényes e-mail címet, hogy megkapd a legfrissebb játékinformációkat.",
            "Re-Enter Password": "Jelszó Megerősítés",
            "Please agree to the Moonton": "Kérjük fogadd el:",
            "terms of service": "Szolgáltatói Feltételek",
            Submit: "Beküldés",
            "E-Mail format error": "Érvénytelen e-mail cím",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Használj 6 vagy több karaktert kis- és nagybetűk/számok keverékével, speciális karakter nélkül",
            "These passwords dont' match": "A jelszó nem egyezik",
            "Please enter your email address": "Kérjük add meg az e-mail címed",
            "Please enter your password": "Kérjük add meg a jelszavad",
            "Please confirm your password": "Kérjük erősítsd meg a jelszavad",
            "Please agree to the Moonton Terms of Service": "Kérjük fogadd el a Moonton Szolgáltatói Feltételeit",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Egy megerősítő e-mailt küldtünk az e-mail címedre. Kérjük koppints az e-mailben található megerősítő linkre és teljesítsd a megerősítést. Ha nem látod az e-mailt, kérjük ellenőrizd a levélszemét mappát.",
            Confirm: "Megerősítés",
            "Please enter your email address to receive the email with a new password.": "Kérjük add meg a csatlakoztatott e-mail címet, hogy elküldhessük a jelszó változtató e-mailt.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Elküldtünk egy jelszó változtató e-mailt a csatlakoztatott e-mail címre. Kérjük ellenőrizd az e-mailt időben!",
            Continue: "Folytatás",
            "Sign in with your Moonton Account": "Bejelentkezés Moonton Fiókkal",
            "Sign in": "Bejelentkezés",
            Congratulations: "Gratulálunk",
            "Your email": "A Fiókod (",
            "is confirmed. Thank you!": ") létrejött. Jó játékot!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Értesítés",
            "Your account has already been confirmed.": "A fiók már létrejött.",
            "The link has expired Please request a new link in-gme. Thank you.": "A link lejárt. Kérjük igényelj új linket a játékból.",
            "Reset Password": "Jelszó Változtatás",
            "New Password": "Új Jelszó",
            "Re-Enter-Password": "Jelszó Megerősítés",
            "Please confirm your new password": "Kérjük erősítsd meg a jelszavad",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Jelszó megváltoztatva. Kérjük jelentkezz be újra az új jelszó használatával.",
            "Bind your Moonton Account": "Moontok Fiók Csatlakoztatása",
            "Check Your Email": "E-mailek Megtekintése",
            "Re-enter email": "E-mail Megerősítése",
            "Email incompatible": "Az e-mail címek nem egyeznek",
            "Please enter your password again": "Jelszó Megerősítés",
            "Moonton Account": "Moonton Fiók",
            "account rule": "Használj 6-20 betűt, számot vagy aláhúzást, betűvel kell kezdődjön.",
            "Send Verification Email": "E-mail Küldése",
            "to email": "Egy megerősítő e-mailt küldtünk erre a címre:",
            "sended email": ". Kérjük ellenőrizd a fiókodban lévő e-mailt.",
            "change email": "E-mail Cím Megváltoztatása",
            "Email Registration": "Regisztráció E-mail Címmel",
            "Quick Registration": "Gyors Regisztráció",
            "Accept the agreement and register": "FELTÉTELEK ELFOGADÁSA & REGISZTRÁCIÓ",
            "same account": "A felhasználónév már létezik. Kérjük próbálj egy másikat.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Kérjük a megerősítéshez add meg a jelenlegi Moonton fiók jelszavát.",
            "congratulations account": "Gratulálunk! Létrehoztál egy Moonton Fiókot és csatlakoztattad a jelenlegi játékmenettel!",
            "empty email": "A fiókod biztonsága érdekében, javasoljuk, hogy csatlakoztasd a fiókot egy e-mail címhez, így bejelentkezhetsz a fiókba az e-mail cím segítségével és megváltoztathatod a jelszavad.",
            "used email": "Ez az e-mail már csatlakoztatva van egy másik fiókhoz. Kérjük próbálj egy másikat, vagy jelentkezz be a fiókba a Fiók Váltás funkcióval.",
            "useful email": "Egy megerősítő e-mailt elküldtünk a csatlakoztatott e-mail címre. Kérjük koppints az e-mailben található linkre és teljesítsd a megerősítést 24 órán belül. Ha nem látod az e-mailt, kérjük ellenőrizd a levélszemét mappát.",
            "Connect to Email": "E-mail Csatlakoztatás",
            unreset: "Nem tudod megváltoztatni a jelszavad, ha a Moonton Fiókod nincsen csatlakoztatva egy e-mail címhez.",
            emailtime1: "Újra elküldheted az e-mailt",
            emailtime2: "másodperc múlva.",
            "have fun": "Fiók csatlakoztatva. Jó játékot!",
            "continue bind email": "E-mail Cím Csatlakoztatás",
            "server error": "A szerver jelenleg leterhelt. Kérjük próbáld újra később.",
            "wrong content": "A követelmények nem teljesülnek.",
            "enter right account": "Kérjük adj meg egy érvényes e-mail címet vagy Moonton fiókot",
            "reset email": "E-mail Cím Megváltoztatása",
            "send email1": "Egy megerősítő e-mailt küldünk a következő címre {x}. Kérjük koppints az e-mailben található linkre a változtatás teljesítéséhez.",
            "send email2": ". Kérjük koppints az e-mailben található linkre a változtatás teljesítéséhez.",
            "send email": "E-mail Küldése",
            "sended email1": "Egy megerősítő e-mailt küldtünk a következő címre:",
            "sended email2": ". Elküldheted újra az e-mailt",
            "sended email3": "másodperc múlva.",
            "sended email4": "Egy megerősítő e-mailt küldtünk a következő címre:",
            "sended email5": ". Megjegyzés: A változtatás teljesítéséig, a fiók a régi e-mail címhez fog kapcsolódni.",
            "empty code": "A megerősítő kód nem lehet üres",
            "wrong code": "Érvénytelen megerősítő kód",
            "enter new email code": "Kérjük add meg a megerősítő kódot",
            "enter new email": "Új E-mail Cím",
            "send code fail": "A művelet nem sikerült.",
            "send code success": "Megerősítő kód elküldve",
            "reset email success": "E-mail cím megváltoztatva.",
            "reset emial fail": "A művelet nem sikerült. Kérjük próbáld újra.",
            "binded email": "Ez az e-mail már csatlakoztatva van egy másik fiókhoz.",
            "send email fail": "A művelet nem sikerült. Kérjük ellenőrizd, hogy csatlakoztattál-e Moonton fiókot és e-mail címet.",
            "send code": "Kód Küldése",
            "outdata link": "A link lejárt.",
            registed: "Ez az e-mail már csatlakoztatva van egy másik fiókhoz. Kérjük próbálj egy másikat.",
            frequent: "Túl sok sikertelen próbálkozás. Kérjük próbáld újra később.",
            "phone code wrong": "Érvénytelen megerősítő kód",
            "binded phone": "Ez a fiók már csatlakoztatva van egy telefonszámhoz",
            "phone error": "Érvénytelen telefonszám",
            "unbinded phone": "A telefonszám nincsen fiókhoz kötve",
            "zhanyong phone": "A telefonszám már hozzá van kötve egy fiókhoz",
            "Phone Registration": "Regisztráció Telefonnal",
            Phone: "Telefonszám",
            Code: "Megerősítő Kód",
            "Enter Phone": "Kérjük adj meg egy érvényes telefonszámot, hogy megkapd a megerősítő kódot",
            "Enter Code": "Koppints a jobb oldalon lévő gombra, hogy egy megerősítő kódot kapj a telefonszámodra, majd írd be a kódot a megerősítés teljesítéséhez.",
            "send old phone1": "Egy megerősítő kódot küldtünk a következő számra:",
            "a code": ".",
            "enter new phone": "Kérjük add meg a megerősítő kódot a megerősítés teljesítéséhez",
            "quit change fail": "A megerősítés teljesítéséig, a Moonton fiókod a régi telefonszámodhoz lesz csatlakoztatva.",
            "change phone success": "Telefonszám megváltoztatva.",
            "change phone": "Telefonszám Megváltoztatása",
            "password err too many": "Túl sok sikertelen próbálkozás. Kérjük próbáld újra holnap.",
            "email verification": "E-mail Megerősítés ({0})",
            "Enter Email Code": "Koppints a jobb oldalon lévő gombra, hogy egy megerősítő kódot kapj az e-mail címedre, majd írd be a kódot a megerősítés teljesítéséhez.",
            "Email verification successful": "E-mail megerősítése sikeres. Kérjük add meg a telefonszámot, amit csatlakoztatnál.",
            "phone verification": "Telefon Megerősítés ({0})",
            "email sended and goto verify": "Egy megerősítő e-mailt küldtünk a következő címre: {0}. Kérjük koppints az e-mailben található linkre a megerősítés teljesítéséhez.",
            "Phone Number Connected": "Telefonszám csatlakoztatva.",
            "add phone": "Telefonszám Csatlakoztatása",
            "add email": "E-mail Cím Csatlakoztatása",
            "email verification code holder": "Megerősítő Kód",
            "phone verification successful": "Telefon megerősítés sikeres. Kérjük add meg az e-mail címet, amit csatlakoztatnál.",
            "change passwrod tip": "Megjegyzés: Csak a megadott e-mail címhez csatlakoztatott fiók jelszavát változtathatod meg.",
            "enter call code": "Kérjük válaszd ki az előhívószámot",
            wait: "Túl sok próbálkozás. Kérjük próbálj újra {time} másodperc után.",
            dofrequent: "Túl sok próbálkozás. Kérjük próbáld újra később.",
            notman: "Biztonsági okokból, a bejelentkezési kérelmed elutasítottuk. Kérjük lépj kapcsolatba az Ügyfélszolgálattal, ha bármi kérdésed van.",
            hint: "",
            "change binding tips": "",
            "contact customer service": "",
            "i know": "",
            "cancel change": "",
            "change pass": "",
            "confirm change": "",
            LANG_STRID_Accountchangepassword_220501: "Please enter your connected phone number to receive the password reset message.",
            LANG_STRID_Accountchangepassword_220503: "Note: You can only change the password for the Moonton account connected to the phone number you entered.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Return",
            LANG_STRID_Accountchangepassword_220506: "Reset Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "Tap Send Code to send a verification code to your phone number and enter the code to complete the verification.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols.",
            LANG_STRID_Accountchangepassword_220513: "Invalid password. Please try again.",
            LANG_STRID_Accountchangepassword_220514: "The passwords don't match. Please try again.",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification code. Please try again.",
            LANG_STRID_Accountchangepassword_220516: "Your password has been reset.",
            LANG_STRID_Accountchangepassword_220517: "Get Code",
            LANG_STRID_Accountchangepassword_220518: "Login Verification",
            LANG_STRID_Accountchangepassword_220519: "Please enter your phone number and verification code to complete the verification.",
            LANG_STRID_Accountchangepassword_220520: "Please enter a valid phone number to receive the verification code.",
            LANG_STRID_Accountchangepassword_220521: "Login Notice",
            LANG_STRID_Accountchangepassword_220522: "Account switched. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220523: "Login success. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Your Moonton password has been reset.",
            LANG_STRID_Accountswitch_220501: "Change Email Address",
            LANG_STRID_Accountswitch_220502: "Send Verification Code to Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "Tap the button on the right to send a verification code to your email address and enter the code to complete the verification.",
            LANG_STRID_Accountswitch_220505: "Send Verification Code to Phone {0}",
            LANG_STRID_Accountswitch_220506: "Please enter a valid email address.",
            LANG_STRID_Accountswitch_220507: "The verification code has been sent to your email address.",
            LANG_STRID_Accountswitch_220508: "Please enter the verification code and your new email address below and complete the verification.",
            LANG_STRID_Accountswitch_220509: "Until the verification is complete, your Moonton account is still connected to your previous email address.",
            LANG_STRID_Accountswitch_220510: "Please enter your new email address.",
            LANG_STRID_Accountswitch_220511: "Please enter a valid email address to receive the verification code.",
            LANG_STRID_Accountswitch_220512: "Are you sure you want to cancel the request?",
            LANG_STRID_Accountswitch_220513: "Cancel Request",
            LANG_STRID_Accountswitch_220514: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in {x}d {y}h {z}m. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220516: "Megerősítő Kód Küldése a Következő Telefonszámra: <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "A kérelem jelenleg felülvizsgálat alatt áll. Kérlek várj. A folyamat során visszavonhatod a kérelmet. Az email címed <span>{x}n {y}ó {z}p</span>múlva módosul. Ha kérdésed van, fordulj az Ügyfélszolgálathoz.",
            LANG_STRID_Accountswitch_220518: "Megerősítő Kód Küldése a Következő Email Címre: <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Gyors E-mail Regisztráció",
            LANG_STRID_MTregister_221102: "E-mail",
            LANG_STRID_MTregister_221103: "Kérjük add meg a Moonton fiókodat és jelszavadat",
            LANG_STRID_MTregister_221104: "Kérjük erősítsd meg a Moonton fiókodat és jelszavadat",
            LANG_STRID_MTregister_221105: "Kérjük add meg újra a jelszavadat",
            LANG_STRID_MTregister_221106: "Moonton Felhasználónév (opcionális)",
            LANG_STRID_MTregister_221107: "6-20 betűből, alsó vonalból vagy számokból kell állnia, és betűvel kell kezdődnie.",
            LANG_STRID_MTregister_221108: "Elolvastam és elfogadom a Felhasználási Feltételeket.",
            LANG_STRID_MTregister_221109: "Kösd össze a Moonton Fiókodat",
            LANG_STRID_MTregister_221110: "A megerősítő e-mailt elküldtük a fiókodhoz kötött e-mail címre. Kérjük, igazold vissza 24 órán belül. Ha nem kaptad meg az e-mailt, ellenőrizd a levélszemét mappát, hogy ott van-e.",
            LANG_STRID_MTregister_221111: "Megerősítés e-mail címmel",
            LANG_STRID_MTregister_221112: "Sikeresen összekötötted a Moonton fiókodat. Mostantól bejelentkezhetsz a Moonton e-mail címeddel és jelszavaddal.",
            LANG_STRID_MTregister_221113: "Helytelen e-mail",
            LANG_STRID_MTregister_221114: "Sikeresen összekötötted a telefonszámodat.",
            LANG_STRID_MTregister_221115: "Gyors Telefon Regisztráció",
            LANG_STRID_MTregister_221116: "Kérjük add meg telefonszámodat",
            LANG_STRID_MTregister_221117: "Kérjük, add meg a jelenleg használt Moonton-fiókodat és jelszavadat, hogy segíts nekünk a személyazonosságod megerősítésében.",
            LANG_STRID_MTregister_221118: "Helytelen telefonszám",
            LANG_STRID_MTregister_221119: "A jelszavak nem egyeznek. Kérjük, add meg újra.",
            LANG_STRID_accinterception03: "A jelenlegi hálózatod instabil. Kérjük, próbáld újra később.",
            LANG_STRID_Accountswitch_220519: "Moonton Username (required)",
            LANG_STRID_UnbindPhone_230701: "A jelenleg csatlakoztatott telefonszámod: {0}. ",
            LANG_STRID_UnbindPhone_230702: "A kapcsolat megszakítása után, ez a telefonszám többé nem használható Moonton-fiókazonosítóként, hogy a jelszóval bejelentkezz a játékba. ",
            LANG_STRID_UnbindPhone_230703: "Javasoljuk, hogy a Moonton fiókodat csatlakoztasd egy e-mail címhez a telefonszám leválasztása előtt.",
            LANG_STRID_UnbindPhone_230704: "Telefonszám Leválasztása",
            LANG_STRID_UnbindPhone_230705: "A fiókodat még nem kötötted össze Moonton e-mail címeddel. Kérjük, próbáld újra miután összekötötted a Moonton e-mail címed. ",
            LANG_STRID_UnbindPhone_230706: "Koppints az alábbi gombra, hogy egy megerősítő kódot küldj a csatlakoztatott Moonton e-mail címre: {0}.",
            LANG_STRID_UnbindPhone_230707: "A megerősítő kódot elküldtük a(z) {0} Moonton e-mail címre. Kérjük, nézd meg. ",
            LANG_STRID_UnbindPhone_230708: "Sikeresen leválasztottad a telefonszámot.",
            passwordError: "The password you entered is incorrect. Please try again.",
            passwordErrorWait: "The password you entered is incorrect. Please try again in {x} minutes {y} seconds.",
            passwordErrorWaitSec: "The password you entered is incorrect. Please try again in {y} seconds.",
            enterEmailTip: "Please enter a valid email address to receive our message.",
            sendEmailTip: 'Tap "Send Verification Code" and we will send an email containing a verification code to the address you provided. Enter the code to complete the verification process.',
            logInViaAccountPassword: "Log in via account password",
            logInViaEmailVerification: "Log in via email verification",
            enterEmailFirst: "Please enter your email address first",
            verificationCodeError: "Invalid verification code. Please try again.",
            unbindEmail: "This email is not connected to a Moonton account"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Alamat Email",
            Password: "Kata Sandi",
            "Sign up": "Daftar",
            "Forgot password": "Lupa Kata Sandi",
            "Create Your Moonton Account": "Buat Akun Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Mohon gunakan alamat Email yang valid untuk menerima informasi terbaru terkait Game",
            "Re-Enter Password": "Konfirmasi Kata Sandi",
            "Please agree to the Moonton": "Silakan menyetujui",
            "terms of service": "Persyaratan Pelayanan",
            Submit: "Kirim",
            "E-Mail format error": "Alamat Email tidak valid",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Gunakan 6 karakter atau lebih dengan menggabungkan huruf besar dan kecil, serta tidak menggunakan karakter khusus",
            "These passwords dont' match": "Kata sandi tidak cocok",
            "Please enter your email address": "Silakan masukkan alamat Email Anda",
            "Please enter your password": "Silakan masukkan kata sandi Anda",
            "Please confirm your password": "Silakan konfirmasi kata sandi Anda",
            "Please agree to the Moonton Terms of Service": "Silakan menyetujui Persyaratan Pelayanan Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Email verifikasi telah dikirim ke alamat Email Anda. Silakan Tap pada Link yang disertakan di dalam Email dan menyelesaikan verifikasi. Jika Anda tidak melihat Email tersebut, silakan mengecek Folder Junk Anda.",
            Confirm: "Konfirmasi",
            "Please enter your email address to receive the email with a new password.": "Silakan masukkan alamat Email yang terhubung agar dapat menerima Email untuk mengubah kata sandi.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Email untuk mengubah kata sandi telah dikirim ke alamat Email Anda yang terhubung. Silakan mengecek Email Anda segera!",
            Continue: "Lanjutkan",
            "Sign in with your Moonton Account": "Login dengan Akun Moonton",
            "Sign in": "Login",
            Congratulations: "Selamat",
            "Your email": "Akun Anda (",
            "is confirmed. Thank you!": ") telah dibuat. Selamat bermain!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Pemberitahuan",
            "Your account has already been confirmed.": "Akun Anda telah dibuat.",
            "The link has expired Please request a new link in-gme. Thank you.": "Link telah kedaluwarsa. Silakan kirim ulang Link di dalam Game.",
            "Reset Password": "Ubah Kata Sandi",
            "New Password": "Kata Sandi Baru",
            "Re-Enter-Password": "Konfirmasi Kata Sandi",
            "Please confirm your new password": "Silakan mengonfirmasi kata sandi Anda",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Kata sandi diubah. Silakan Login kembali dengan kata sandi baru Anda.",
            "Bind your Moonton Account": "Hubungkan Akun Moonton",
            "Check Your Email": "Cek Email",
            "Re-enter email": "Konfirmasi Email",
            "Email incompatible": "Alamat Email tidak cocok",
            "Please enter your password again": "Konfirmasi Kata Sandi",
            "Moonton Account": "Akun Moonton",
            "account rule": "Gunakan 6-20 huruf, angka, atau _ dan diawali dengan huruf",
            "Send Verification Email": "Kirim Email",
            "to email": "Email verifikasi telah dikirim ke",
            "sended email": ". Silakan mengecek Email di dalam Mailbox Anda.",
            "change email": "Ubah Alamat Email",
            "Email Registration": "Daftar dengan Email",
            "Quick Registration": "Daftar Cepat",
            "Accept the agreement and register": "MENERIMA PERSETUJUAN & DAFTAR",
            "same account": "Username ini telah ada. Silakan mencoba Username lainnya.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Silakan masukkan kata sandi akun Moonton saat ini untuk melakukan verifikasi.",
            "congratulations account": "Selamat! Anda telah membuat Akun Moonton dan menghubungkannya dengan progres Game Anda saat ini.",
            "empty email": "Demi keamanan akun Anda, kami merekomendasikan Anda untuk menghubungkan akun ke alamat Email sehingga Anda dapat Login ke akun dengan alamat Email dan mengubah kata sandi Anda.",
            "used email": "Alamat Email telah terhubung ke akun lain. Silakan mencoba alamat Email lainnya atau Login ke akun melalui Ganti Akun.",
            "useful email": "Email verifikasi telah dikirim ke alamat Email Anda yang terhubung. Silakan Tap pada Link yang disertakan di dalam Email dan menyelesaikan verifikasi dalam waktu 24 jam. Jika Anda tidak melihat Email tersebut, silakan mengecek Folder Junk Anda.",
            "Connect to Email": "Hubungkan Email",
            unreset: "Anda tidak dapat mengubah kata sandi jika Akun Moonton tidak dihubungkan ke alamat Email.",
            emailtime1: "Anda dapat mengirim ulang Email dalam",
            emailtime2: "detik.",
            "have fun": "Akun dihubungkan. Selamat bermain!",
            "continue bind email": "Hubungkan Alamat Email",
            "server error": "Server sedang sibuk. Silakan mencoba kembali nanti.",
            "wrong content": "Persyaratan tidak terpenuhi.",
            "enter right account": "Silakan masukkan alamat Email atau akun Moonton yang valid",
            "reset email": "Ubah Alamat Email",
            "send email1": "Email verifikasi akan dikirim ke {x}. Silakan Tap pada Link yang disertakan di dalam Email untuk menyelesaikan perubahan.",
            "send email2": ". Silakan Tap pada Link yang disertakan di dalam Email untuk menyelesaikan perubahan.",
            "send email": "Kirim Email",
            "sended email1": "Email verifikasi telah dikirim ke",
            "sended email2": ". Anda dapat mengirim ulang Email dalam",
            "sended email3": "detik.",
            "sended email4": "Email verifikasi telah dikirim ke",
            "sended email5": ". Catatan: Sebelum perubahan selesai, akun Anda masih akan terhubung ke alamat Email yang lama.",
            "empty code": "Kode verifikasi tidak boleh kosong",
            "wrong code": "Kode verifikasi tidak valid",
            "enter new email code": "Silakan masukkan kode verifikasi",
            "enter new email": "Alamat Email Baru",
            "send code fail": "Operasi gagal.",
            "send code success": "Kode verifikasi dikirim",
            "reset email success": "Alamat Email diubah.",
            "reset emial fail": "Operasi gagal. Silakan mencoba kembali.",
            "binded email": "Alamat Email telah terhubung ke akun lain.",
            "send email fail": "Operasi gagal. Silakan mengecek apakah Anda telah menghubungkan akun Moonton dan alamat Email.",
            "send code": "Kirim Kode",
            "outdata link": "Link telah kedaluwarsa.",
            registed: "Alamat Email telah terhubung ke akun lain. Silakan mencoba alamat Email lainnya.",
            frequent: "Terlalu banyak percobaan yang gagal. Silakan mencoba kembali nanti.",
            "phone code wrong": "Kode verifikasi tidak valid",
            "binded phone": "Akun telah terhubung ke sebuah nomor telepon",
            "phone error": "Nomor telepon tidak valid",
            "unbinded phone": "Nomor telepon tidak terhubung ke sebuah akun",
            "zhanyong phone": "Nomor telepon telah terhubung ke sebuah akun",
            "Phone Registration": "Daftar dengan Nomor Telepon",
            Phone: "Nomor Telepon",
            Code: "Kode Verifikasi",
            "Enter Phone": "Silakan masukkan nomor telepon yang valid untuk menerima kode verifikasi",
            "Enter Code": "Tap pada tombol di sebelah kanan untuk mengirim kode verifikasi ke nomor telepon Anda dan masukkan kode untuk menyelesaikan verifikasi.",
            "send old phone1": "Kirim kode verifikasi ke",
            "a code": ".",
            "enter new phone": "Silakan masukkan kode verifikasi untuk menyelesaikan verifikasi",
            "quit change fail": "Hingga verifikasi selesai, akun Moonton Anda masih akan terhubung ke nomor telepon Anda yang lama.",
            "change phone success": "Nomor telepon diubah.",
            "change phone": "Ubah Nomor Telepon",
            "password err too many": "Terlalu banyak percobaan yang gagal. Silakan mencoba kembali besok.",
            "email verification": "Verifikasi Email ({0})",
            "Enter Email Code": "Tap pada tombol di sebelah kanan untuk mengirim kode verifikasi ke alamat Email Anda dan masukkan kode verifikasi untuk menyelesaikan verifikasi.",
            "Email verification successful": "Verifikasi Email berhasil. Silakan masukkan nomor telepon yang ingin Anda hubungkan.",
            "phone verification": "Verifikasi Nomor Telepon ({0})",
            "email sended and goto verify": "Email verifikasi telah dikirim ke {0}. Silakan Tap pada Link yang disertakan di dalam Email dan menyelesaikan verifikasi.",
            "Phone Number Connected": "Nomor telepon terhubung.",
            "add phone": "Hubungkan Nomor Telepon",
            "add email": "Hubungkan Alamat Email",
            "email verification code holder": "Kode Verifikasi",
            "phone verification successful": "Verifikasi nomor telepon berhasil. Silakan masukkan alamat Email yang ingin Anda hubungkan.",
            "change passwrod tip": "Catatan: Anda hanya dapat mengubah kata sandi untuk akun Moonton yang terhubung ke alamat Email yang Anda masukkan.",
            "enter call code": "Silakan pilih kode area Anda",
            wait: "Terlalu banyak percobaan. Silakan mencoba kembali dalam {time} detik.",
            dofrequent: "Terlalu banyak percobaan. Silakan mencoba kembali nanti.",
            notman: "Karena alasan keamanan, permintaan Login Anda telah ditolak. Silakan menghubungi Customer Service jika Anda memiliki pertanyaan.",
            hint: "Pemberitahuan",
            "change binding tips": "Perubahan pada Email saat ini sedang ditinjau. Mohon menunggu. Anda dapat membatalkan perubahan selama proses ini. Waktu sebelum Anda dapat mengubah alamat Email: {x}.\n",
            "contact customer service": "Jika Anda memiliki pertanyaan, silakan menghubungi Customer Service.",
            "i know": "Oke",
            "cancel change": "Batalkan",
            "change pass": "Perubahan pada Email Anda telah disetujui, silakan mengonfirmasi alamat Email baru Anda: {x}",
            "confirm change": "Ubah",
            LANG_STRID_Accountchangepassword_220501: "Silakan masukkan nomor telepon Anda yang terhubung untuk menerima pesan Reset kata sandi.",
            LANG_STRID_Accountchangepassword_220503: "Catatan: Anda hanya dapat mengubah kata sandi untuk akun Moonton yang terhubung dengan nomor telepon yang Anda masukkan.",
            LANG_STRID_Accountchangepassword_220504: "Verifikasi Email",
            LANG_STRID_Accountchangepassword_220505: "Kembali",
            LANG_STRID_Accountchangepassword_220506: "Reset Kata Sandi Moonton",
            LANG_STRID_Accountchangepassword_220507: "Tap Kirim Kode untuk mengirim kode verifikasi ke nomor telepon Anda dan masukkan kode untuk menyelesaikan verifikasi.",
            LANG_STRID_Accountchangepassword_220511: "Gunakan 6 karakter atau lebih dengan kombinasi huruf besar dan huruf kecil, angka, serta bukan simbol khusus.",
            LANG_STRID_Accountchangepassword_220513: "Kata sandi tidak valid. Silakan coba kembali.",
            LANG_STRID_Accountchangepassword_220514: "Kata sandi tidak cocok. Silakan coba kembali.",
            LANG_STRID_Accountchangepassword_220515: "Kode verifikasi tidak valid. Silakan coba kembali.",
            LANG_STRID_Accountchangepassword_220516: "Kata sandi Anda telah di-Reset.",
            LANG_STRID_Accountchangepassword_220517: "Dapatkan Kode",
            LANG_STRID_Accountchangepassword_220518: "Verifikasi Login",
            LANG_STRID_Accountchangepassword_220519: "Silakan masukkan nomor telepon Anda dan kode verifikasi untuk menyelesaikan verifikasi.",
            LANG_STRID_Accountchangepassword_220520: "Silakan masukkan nomor telepon Anda yang valid untuk menerima kode verifikasi.",
            LANG_STRID_Accountchangepassword_220521: "Pemberitahuan Login",
            LANG_STRID_Accountchangepassword_220522: "Pergantian akun berhasil. Silakan Login kembali ke dalam Game.",
            LANG_STRID_Accountchangepassword_220523: "Login berhasil. Silakan Login kembali ke dalam Game.",
            LANG_STRID_Accountchangepassword_220524: "Alamat Email/Akun Moonton/Nomor Telepon",
            LANG_STRID_Accountchangepassword_220525: "Kata sandi Moonton Anda telah di-Reset.",
            LANG_STRID_Accountswitch_220501: "Ubah Alamat Email",
            LANG_STRID_Accountswitch_220502: "Kirim Kode Verifikasi ke Email {0}",
            LANG_STRID_Accountswitch_220503: "Kode Verifikasi Email",
            LANG_STRID_Accountswitch_220504: "Tap tombol di sebelah kanan untuk mengirim kode verifikasi ke alamat Email Anda dan masukkan kode untuk menyelesaikan verifikasi.",
            LANG_STRID_Accountswitch_220505: "Kirim Kode Verifikasi ke Nomor Telepon {0}",
            LANG_STRID_Accountswitch_220506: "Mohon masukkan alamat Email yang valid.",
            LANG_STRID_Accountswitch_220507: "Kode verifikasi telah dikirim ke alamat Email Anda.",
            LANG_STRID_Accountswitch_220508: "Mohon masukkan kode verifikasi dan alamat Email baru Anda di bawah dan selesaikan verifikasi.",
            LANG_STRID_Accountswitch_220509: "Hingga verifikasi selesai, akun Moonton Anda masih terhubung dengan alamat Email Anda yang sebelumnya.",
            LANG_STRID_Accountswitch_220510: "Mohon masukkan alamat Email baru Anda.",
            LANG_STRID_Accountswitch_220511: "Mohon masukkan alamat Email yang valid untuk menerima kode verifikasi.",
            LANG_STRID_Accountswitch_220512: "Apakah Anda yakin ingin membatalkan permintaan?",
            LANG_STRID_Accountswitch_220513: "Batalkan Permintaan",
            LANG_STRID_Accountswitch_220514: "Saat ini, permintaan sedang dalam peninjauan. Mohon menunggu. Anda dapat memilih untuk membatalkan permintaan selama proses ini. Alamat Email Anda dapat diubah dalam {x}h {y}j {z}m. Jika Anda memiliki pertanyaan, silakan menghubungi Customer Service.",
            LANG_STRID_Accountswitch_220516: "Kirim Kode Verifikasi ke Telepon <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Permintaan sedang dalam peninjauan. Mohon menunggu. Anda dapat memilih untuk membatalkan permintaan selama proses ini. Alamat Email Anda dapat diubah dalam <span>{x}h {y}j {z}m</span>. Jika Anda memiliki pertanyaan, silakan menghubungi Customer Service.",
            LANG_STRID_Accountswitch_220518: "Kirim Kode Verifikasi ke Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Daftar dengan Email",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Silakan masukkan akun dan kata sandi Moonton Anda",
            LANG_STRID_MTregister_221104: "Silakan konfirmasi akun dan kata sandi Moonton Anda",
            LANG_STRID_MTregister_221105: "Silakan masukkan kembali kata sandi Anda",
            LANG_STRID_MTregister_221106: "Username Moonton (opsional)",
            LANG_STRID_MTregister_221107: "Harus terdiri dari 6-20 huruf, garis bawah, atau angka, dan harus dimulai dengan huruf.",
            LANG_STRID_MTregister_221108: "Saya telah membaca dan menyetujui Ketentuan Penggunaan.",
            LANG_STRID_MTregister_221109: "Kaitkan Akun Moonton Anda",
            LANG_STRID_MTregister_221110: "Email verifikasi telah dikirim ke Email yang tekait dengan akun Anda. Mohon verifikasi dalam waktu 24 jam. Jika Anda belum menerima Email tersebut, mohon cek folder Junk/Spam Anda.",
            LANG_STRID_MTregister_221111: "Verifikasi dengan Email",
            LANG_STRID_MTregister_221112: "Anda telah berhasil mengaitkan Akun Moonton Anda. Sekarang Anda dapat Login dengan Email dan kata sandi Moonton Anda.",
            LANG_STRID_MTregister_221113: "Email tidak valid",
            LANG_STRID_MTregister_221114: "Anda telah berhasil mengaitkan nomor telepon Anda.",
            LANG_STRID_MTregister_221115: "Daftar dengan Nomor Telepon",
            LANG_STRID_MTregister_221116: "Masukkan nomor telepon Anda",
            LANG_STRID_MTregister_221117: "Silakan masukkan akun Moonton dan kata sandi yang Anda gunakan saat ini untuk membantu kami mengonfirmasi identitas Anda.",
            LANG_STRID_MTregister_221118: "Nomor telepon tidak valid",
            LANG_STRID_MTregister_221119: "Kata sandi Anda tidak cocok. Silakan coba kembali.",
            LANG_STRID_accinterception03: "Jaringan Anda sekarang tidak stabil, mohon coba kembali.",
            LANG_STRID_Accountswitch_220519: "Username Moonton (diperlukan)",
            LANG_STRID_UnbindPhone_230701: "Nomor telepon Anda yang terhubung saat ini adalah {0}.",
            LANG_STRID_UnbindPhone_230702: "Setelah hubungan terputus, nomor telepon tidak lagi dapat digunakan sebagai ID akun Moonton untuk Login ke Game dengan kata sandi.",
            LANG_STRID_UnbindPhone_230703: "Disarankan untuk menghubungkan akun Moonton Anda ke Email sebelum memutuskan hubungan nomor telepon Anda.",
            LANG_STRID_UnbindPhone_230704: "Putuskan Hubungan Nomor Telepon",
            LANG_STRID_UnbindPhone_230705: "Anda belum menghubungkan Email Moonton ke akun Anda. Silakan coba kembali setelah menghubungkan dengan Email Mooton.",
            LANG_STRID_UnbindPhone_230706: "Tap tombol di bawah untuk mengirim kode verifikasi ke Email Moonton Anda yang terhubung {0}.",
            LANG_STRID_UnbindPhone_230707: "Kode verifikasi telah dikirim ke alamat Email Moonton Anda {0}. Silakan cek.",
            LANG_STRID_UnbindPhone_230708: "Anda berhasil memutus hubungan nomor telepon Anda.",
            passwordError: "Kata sandi yang Anda masukkan salah. Silakan coba lagi.",
            passwordErrorWait: "Kata sandi yang Anda masukkan salah. Silakan coba lagi dalam {x} menit {y} detik.",
            passwordErrorWaitSec: "Kata sandi yang Anda masukkan salah. Silakan coba lagi dalam {y} detik.",
            enterEmailTip: "Silakan masukkan alamat Email yang valid untuk menerima pesan kami.",
            sendEmailTip: 'Tap pada "Kirim Kode Verifikasi" dan kami akan mengirimkan Email yang berisi kode verifikasi ke alamat Email yang Anda berikan. Masukkan kode untuk menyelesaikan proses verifikasi.',
            logInViaAccountPassword: "Login dengan kata sandi akun",
            logInViaEmailVerification: "Login dengan verifikasi Email",
            enterEmailFirst: "Silakan masukkan alamat Email Anda dahulu",
            verificationCodeError: "Kode verifikasi tidak valid. Silakan coba lagi.",
            unbindEmail: "Email ini tidak terkait dengan akun Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Indirizzo Email",
            Password: "Password",
            "Sign up": "Registrati",
            "Forgot password": "Password Dimenticata",
            "Create Your Moonton Account": "Crea un account Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Inserisci un indirizzo email valido per ricevere le ultime novità del gioco",
            "Re-Enter Password": "Conferma Password",
            "Please agree to the Moonton": "Devi prima accettare i",
            "terms of service": "Termini di Servizio",
            Submit: "Invia",
            "E-Mail format error": "L'indirizzo email non è valido",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Usa 6 o più caratteri, utilizzando lettere maiuscole e minuscole, numeri e nessun carattere speciale",
            "These passwords dont' match": "Le password non corrispondono",
            "Please enter your email address": "Inserisci il tuo indirizzo email",
            "Please enter your password": "Inserisci la tua password",
            "Please confirm your password": "Conferma la tua password",
            "Please agree to the Moonton Terms of Service": "Per favore accetta i Termini di Servizio di Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Un email di verifica è stato inviato al tuo indirizzo email. Clicca sul link all'interno dell'email per completare la verifica. Se non trovi nessuna email, controlla nella cartella spam.",
            Confirm: "Conferma",
            "Please enter your email address to receive the email with a new password.": "Inserisci l'indirizzo email collegato al tuo account per ricevere una nuova password.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Un email per una nuova password è stata inviata al tuo indirizzo email. Dai uno sguardo.",
            Continue: "Continua",
            "Sign in with your Moonton Account": "Accedi con l'Account Moonton",
            "Sign in": "Accedi",
            Congratulations: "Congratulazioni",
            "Your email": "Il tuo account (",
            "is confirmed. Thank you!": ") è stato creato. Buon divertimento!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Avviso",
            "Your account has already been confirmed.": "L'account è già stato creato.",
            "The link has expired Please request a new link in-gme. Thank you.": "Il link è scaduto. Richiedine uno nuovo.",
            "Reset Password": "Ripristina Password",
            "New Password": "Nuova Password",
            "Re-Enter-Password": "Conferma Password",
            "Please confirm your new password": "Conferma la tua password.",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "La password è stata cambiata. Ora puoi accedere in gioco con la nuova password.",
            "Bind your Moonton Account": "Connetti l'Account Moonton",
            "Check Your Email": "Controlla l'Email",
            "Re-enter email": "Conferma l'Email",
            "Email incompatible": "L'indirizzo email non corrisponde",
            "Please enter your password again": "Conferma Password",
            "Moonton Account": "Account Moonton",
            "account rule": "Usa 6-20 caratteri, o _ e inizia con una lettera",
            "Send Verification Email": "Invia email",
            "to email": "Un email di verifica è stata inviata",
            "sended email": ". Controlla la tua casella postale.",
            "change email": "Modifica l'Indirizzo Email",
            "Email Registration": "Registrati con l'Email",
            "Quick Registration": "Accesso Rapido",
            "Accept the agreement and register": "ACCETTA I TERMINI E REGISTRATI",
            "same account": "L'username è già in uso, provane uno differente.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Inserisci la password dell'attule Account Moonton per la verifica.",
            "congratulations account": "Congratulazioni! Hai creato un Account Moonton ed è stato connesso ai tuoi progressi di gioco.",
            "empty email": "Per la sicurezza del tuo account ti consigliamo di connettere l'account a un indirizzo email così da poter accedere nuovamente e cambiare la password in caso di smarrimento.",
            "used email": "L'indirizzo email è già connesso ad un altro account. Provane uno diverso o accedi all'account.",
            "useful email": "Un email di verifica è stata inviata all'indirizzo email connesso. Clicca sul link all'interno dell'email entro 24 ore per completare la verifica. Se non trovi l'email, controlla la cartella spam.",
            "Connect to Email": "Connetti l'Email",
            unreset: "Non puoi ripristinare la tua password se il tuo Account Moonton non è connesso a un indirizzo email.",
            emailtime1: "Puoi ripristinare la password in",
            emailtime2: "s.",
            "have fun": "L'account è stato connesso. Buon Divertimento!",
            "continue bind email": "Connetti l'Indirizzo Email",
            "server error": "C'è un problema con il server. Riprova tra poco.",
            "wrong content": "Non soddisfi i requisiti.",
            "enter right account": "Inserisci un indirizzo email valido o un Account Moonton",
            "reset email": "Modifica l'Indirizzo Email",
            "send email1": "Un email di verifica verrà inviata a {x}. Clicca il link all'interno dell'email per cambiarla.",
            "send email2": "Clicca sul link all'interno dell'email per completare la modifica.",
            "send email": "Invia adesso!",
            "sended email1": "Un email di verifica è già stata inviata",
            "sended email2": ". Potrai richiederne un'altra tra",
            "sended email3": "s.",
            "sended email4": "Un email di verifica è stata inviata",
            "sended email5": ". Nota: Prima che il cambiamento sia completato, il tuo account resterà comunque connesso al vecchio indirizzo email.",
            "empty code": "Il Codice di Verifica non può essere vuoto",
            "wrong code": "Il Codice di Verifica non è valido",
            "enter new email code": "Inserisci il Codice di Verifica",
            "enter new email": "Nuovo Indirizzo Email",
            "send code fail": "Operazione fallita.",
            "send code success": "Il Codice di Verifica è stato inviato",
            "reset email success": "L'Indirizzo email è stato cambiato.",
            "reset emial fail": "Operazione fallita. Riprova.",
            "binded email": "L'indirizzo email è già connesso ad un altro account.",
            "send email fail": "Operazione fallita. Controlla se hai connesso l'Account Moonton o l'indirizzo email.",
            "send code": "Invia il Codice",
            "outdata link": "Il link è scaduto.",
            registed: "L'indirizzo email è già connesso ad un altro account. Riprova con uno differente.",
            frequent: "Troppi tentativi, riprova più tardi.",
            "phone code wrong": "Il Codice di Verifica non è valido",
            "binded phone": "L'account è già connesso ad un numero di cellulare",
            "phone error": "Il numero di cellulare non è valido",
            "unbinded phone": "Il numero di cellulare non è connesso ad un account",
            "zhanyong phone": "Il numero di cellulare è già connesso ad un account",
            "Phone Registration": "Registrati con Numero di Cellulare",
            Phone: "Numero di Cellulare",
            Code: "Codice di Verifica",
            "Enter Phone": "Inserisci un numero di cellulare valido per ricevere il codice di verifica.",
            "Enter Code": "Tocca il pulsante a destra per inviare un codice di verifica al tuo numero di cellulare, successivamente inserisci il codice per completare la verifica.",
            "send old phone1": "Invia il codice di verifica a",
            "a code": ".",
            "enter new phone": "Inserisci il codice per completare la verifica",
            "quit change fail": "Finché la verifica non verrà completata, il tuo Account Moonton resterà connesso al tuo vecchio numero di cellulare.",
            "change phone success": "Il numero di cellulare è stato cambiato.",
            "change phone": "Modifica il Numero di Cellulare",
            "password err too many": "Troppi tentativi. Riprova domani.",
            "email verification": "Email di Verifica ({0})",
            "Enter Email Code": "Tocca il pulsante a destra per inviare un codice di verifica al tuo indirizzo email, successivamente inserisci il codice per completare la verifica.",
            "Email verification successful": "Verifica dell'email completata. Inserisci il numero di cellulare che vuoi collegare.",
            "phone verification": "Verifica via Cellulare ({0})",
            "email sended and goto verify": "Un email di verifica è stata inviata a {0}. Tocca il link all'interno dell'email per completare la verifica.",
            "Phone Number Connected": "Il numero è stato connesso.",
            "add phone": "Connetti Numero di Cellulare",
            "add email": "Connetti Indirizzo Email",
            "email verification code holder": "Codice di Verifica",
            "phone verification successful": "La verifica via numero di cellulare è completa. Inserisci l'email che vuoi connettere.",
            "change passwrod tip": "Nota: Puoi cambiare solo la password dell'Account Moonton connesso all'indirizzo email che hai inserito.",
            "enter call code": "Inserici il tuo Prefisso Nazionale",
            wait: "Troppi tentativi. Riprova in {time}s.",
            dofrequent: "Troppi tentativi. Riprova dopo.",
            notman: "A causa di motivi di sicurezza, la tua richiesta di accesso è stata rifiutata. Contatta il nostro Servizio Clienti se hai delle domande.",
            hint: "Avviso",
            "change binding tips": "Il cambio di email è attualmente in revisione. Per favore, attendi. Puoi annullare il cambio nel corso del processo. Tempo prima di poter cambiare l'indirizzo email: {x}",
            "contact customer service": "Per qualsiasi domanda, contatta il Servizio Clienti.",
            "i know": "Ok",
            "cancel change": "Annulla",
            "change pass": "Il cambio di email è stato approvato, conferma il tuo nuovo indirizzo email: {x}",
            "confirm change": "Cambia",
            LANG_STRID_Accountchangepassword_220501: "Please enter your connected phone number to receive the password reset message.",
            LANG_STRID_Accountchangepassword_220503: "Note: You can only change the password for the Moonton account connected to the phone number you entered.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Return",
            LANG_STRID_Accountchangepassword_220506: "Reset Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "Tap Send Code to send a verification code to your phone number and enter the code to complete the verification.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols.",
            LANG_STRID_Accountchangepassword_220513: "Invalid password. Please try again.",
            LANG_STRID_Accountchangepassword_220514: "The passwords don't match. Please try again.",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification code. Please try again.",
            LANG_STRID_Accountchangepassword_220516: "Your password has been reset.",
            LANG_STRID_Accountchangepassword_220517: "Get Code",
            LANG_STRID_Accountchangepassword_220518: "Login Verification",
            LANG_STRID_Accountchangepassword_220519: "Please enter your phone number and verification code to complete the verification.",
            LANG_STRID_Accountchangepassword_220520: "Please enter a valid phone number to receive the verification code.",
            LANG_STRID_Accountchangepassword_220521: "Login Notice",
            LANG_STRID_Accountchangepassword_220522: "Account switched. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220523: "Login success. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Your Moonton password has been reset.",
            LANG_STRID_Accountswitch_220501: "Change Email Address",
            LANG_STRID_Accountswitch_220502: "Send Verification Code to Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "Tap the button on the right to send a verification code to your email address and enter the code to complete the verification.",
            LANG_STRID_Accountswitch_220505: "Send Verification Code to Phone {0}",
            LANG_STRID_Accountswitch_220506: "Please enter a valid email address.",
            LANG_STRID_Accountswitch_220507: "The verification code has been sent to your email address.",
            LANG_STRID_Accountswitch_220508: "Please enter the verification code and your new email address below and complete the verification.",
            LANG_STRID_Accountswitch_220509: "Until the verification is complete, your Moonton account is still connected to your previous email address.",
            LANG_STRID_Accountswitch_220510: "Please enter your new email address.",
            LANG_STRID_Accountswitch_220511: "Please enter a valid email address to receive the verification code.",
            LANG_STRID_Accountswitch_220512: "Are you sure you want to cancel the request?",
            LANG_STRID_Accountswitch_220513: "Cancel Request",
            LANG_STRID_Accountswitch_220514: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in {x}d {y}h {z}m. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Registrazione Email Veloce",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Per favore, inserisci il tuo nome e password dell'account Moonton",
            LANG_STRID_MTregister_221104: "Per favore, conferma il tuo nome e password dell'account Moonton",
            LANG_STRID_MTregister_221105: "Per favore, inserisci di nuovo la tua password",
            LANG_STRID_MTregister_221106: "Nome Utente Moonton (opzionale)",
            LANG_STRID_MTregister_221107: "Deve contenere 6-20 caratteri, punteggiatura o numeri e deve iniziare con una lettera.",
            LANG_STRID_MTregister_221108: "Ho letto e accettato i Termini di Uso.",
            LANG_STRID_MTregister_221109: "Collega il Tuo Account Moonton",
            LANG_STRID_MTregister_221110: "L'email di verifica è stata inviata all'indirizzo email collegato al tuo account. Ti preghiamo di verificare entro 24 ore. Se non hai ricevuto l'email, ti preghiamo di controllare nella casella spam per assicurarti che non sia lì.",
            LANG_STRID_MTregister_221111: "Verifica la tua email",
            LANG_STRID_MTregister_221112: "Hai collegato il tuo account Moonton con successo. Adesso puoi accedere con la tua email e password Moonton.",
            LANG_STRID_MTregister_221113: "Email invalida",
            LANG_STRID_MTregister_221114: "Hai collegato il tuo numero di telefono con successo.",
            LANG_STRID_MTregister_221115: "Registrazione Telefono Veloce",
            LANG_STRID_MTregister_221116: "Inserisci il tuo numero di telefono",
            LANG_STRID_MTregister_221117: "Per favore, inserisci il nome e la password dell'account Moonton che stai usando attualmente per aiutarci a confermare la tua identità.",
            LANG_STRID_MTregister_221118: "Numero di telefono invalido",
            LANG_STRID_MTregister_221119: "Le tue password non corrispondono. Per favore, inseriscile di nuovo.",
            LANG_STRID_accinterception03: "La tua rete attuale è instabile, riprova.",
            LANG_STRID_Accountswitch_220519: "Nome Utente Moonton (richiesto)",
            LANG_STRID_UnbindPhone_230701: "Il tuo numero di telefono attualmente connesso è {0}.",
            LANG_STRID_UnbindPhone_230702: "Una volta disconnesso, il numero di telefono non può più essere utilizzato come account Moonton ID per accedere al gioco con la password.",
            LANG_STRID_UnbindPhone_230703: "Si raccomanda di collegare il tuo account Moonton a una email prima di disconnettere il numero di telefono.",
            LANG_STRID_UnbindPhone_230704: "Disconnetti Numero Telefonico",
            LANG_STRID_UnbindPhone_230705: "Non hai connesso una email Moonton al tuo account. Prova di nuovo dopo aver connesso una email Moonton.",
            LANG_STRID_UnbindPhone_230706: "Tocca il tasto sottostante per inviare un codice di verifica alla tua email Moonton connessa {0}.",
            LANG_STRID_UnbindPhone_230707: "Un codice di verifica è stato inviato al tuo indirizzo email Moonton {0}. Controlla.",
            LANG_STRID_UnbindPhone_230708: "Il numero di telefono è stato scollegato con successo.",
            passwordError: "La password che hai inserito non è corretta. Riprova.",
            passwordErrorWait: "La password che hai inserito non è corretta. Riprova tra {x} minuti e {y} secondi.",
            passwordErrorWaitSec: "La password che hai inserito non è corretta. Riprova tra e {y} secondi.",
            enterEmailTip: "Inserisci un indirizzo e-mail valido.",
            sendEmailTip: "Clicca su \"Invia Codice di Verifica\", riceverai un'e-mail all'indirizzo che ci hai fornito contenente un codice. Inserisci il codice per completare il processo di verifica.",
            logInViaAccountPassword: "Accedi usando la password del tuo account",
            logInViaEmailVerification: "Accedi usando un'e-mail di verifica",
            enterEmailFirst: "Inserisci prima il tuo indirizzo e-mail",
            verificationCodeError: "Codice di verifica non valido. Riprova.",
            unbindEmail: "Questa e-mail non è collegata ad un account Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "メールアドレス",
            Password: "パスワード",
            "Sign up": "登録",
            "Forgot password": "パスワードを忘れた場合",
            "Create Your Moonton Account": "Moontonアカウント作成",
            "To obtain the latest information about us, please sign up with a valid email": "有効なメールアドレスを入力してください。",
            "Re-Enter Password": "パスワードを再度入力",
            "Please agree to the Moonton": "同意",
            "terms of service": "利用規約",
            Submit: "提出",
            "E-Mail format error": "無効なメールアドレス",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "大文字、小文字、数字を組み合わせた6文字以上の文字を使用し、特殊記号は使用しないで下さい。",
            "These passwords dont' match": "パスワードが一致しません。",
            "Please enter your email address": "メールアドレスを入力してください",
            "Please enter your password": "パスワードを入力してください",
            "Please confirm your password": "パスワードを再度入力してください",
            "Please agree to the Moonton Terms of Service": "Moontonのサービス利用規約に同意してください",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "お客様のメールアドレスに認証メールが送信されました。メールに記載されているリンクをタップして、認証を完了してください。メールが見つからない場合は、迷惑メールフォルダをご確認ください。",
            Confirm: "確認",
            "Please enter your email address to receive the email with a new password.": "パスワード再設定用のメールをお送りしますので、ご登録のメールアドレスを入力してください。",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "ご登録のメールアドレスにパスワード再設定用のメールを送信しました。期限内にメールをご確認ください。",
            Continue: "続ける",
            "Sign in with your Moonton Account": "Moontonアカウントでログイン",
            "Sign in": "ログイン",
            Congratulations: "おめでとうございます",
            "Your email": "お客様のアカウント（",
            "is confirmed. Thank you!": "）が作成されました。ゲームをお楽しみください！",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "注意",
            "Your account has already been confirmed.": "アカウントはすでに作成されています。",
            "The link has expired Please request a new link in-gme. Thank you.": "リンクの有効期限が切れています。ゲーム内でリンクを再送してください。",
            "Reset Password": "パスワードの再設定",
            "New Password": "新しいパスワード",
            "Re-Enter-Password": "パスワードを再入力",
            "Please confirm your new password": "パスワードを再度入力してください",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "パスワードが変更されました。新しいパスワードでログインしてください。",
            "Bind your Moonton Account": "Moontonアカウント",
            "Check Your Email": "メールアドレスへ",
            "Re-enter email": "メールアドレスを再度入力",
            "Email incompatible": "メールアドレスが一致しません。",
            "Please enter your password again": "パスワードを再入力",
            "Moonton Account": "Moontonアカウント",
            "account rule": "6～20文字、数字または_を使用し、文字で始めてください。",
            "Send Verification Email": "メールを送信",
            "to email": "認証メールが送信されました。",
            "sended email": "でメールをご確認ください。",
            "change email": "メールアドレスの変更",
            "Email Registration": "メールアドレスで登録",
            "Quick Registration": "クイック登録",
            "Accept the agreement and register": "同意して登録",
            "same account": "このユーザー名はすでに存在しています。別のユーザー名をお試しください。",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "確認のため、現在のMoontonアカウントのパスワードを入力してください。",
            "congratulations account": "成功！Moontonアカウントを作成し、現在のゲームの進行状況に連携しました。",
            "empty email": "お客様のアカウントのセキュリティのために、アカウントをメールアドレスと連携させ、そのメールアドレスでアカウントにログインして、パスワードを変更できるようにすることをおすすめします。",
            "used email": "このメールアドレスは、すでに別のアカウントに連携されています。別のメールアドレスをお試しいただくか、「アカウント切替」からログインしてください。",
            "useful email": "連携済みのメールアドレスに認証メールが送信されました。メールに記載されているリンクをタップして、24時間以内に認証を完了してください。メールが表示されない場合は、迷惑メールフォルダをご確認ください。",
            "Connect to Email": "メール連携",
            unreset: "Moontonアカウントとメールアドレスが連携されていない場合、パスワードの再設定はできません。",
            emailtime1: "メールを再送する場合、",
            emailtime2: "秒お待ちください。",
            "have fun": "アカウントが連携されました。ゲームをお楽しみください！",
            "continue bind email": "メールアドレスと連携",
            "server error": "サーバービジー。時間をおいて、再度お試しください。",
            "wrong content": "入力した内容をもう一度ご確認ください。",
            "enter right account": "有効なメールアドレスまたはMoontonアカウントを入力してください。",
            "reset email": "メールアドレスの変更",
            "send email1": "認証メールが送信されました。",
            "send email2": "に記載されているリンクをタップして、変更を完了してください。",
            "send email": "メールを送信",
            "sended email1": "メールアドレス",
            "sended email2": "に認証メールが送信されました。メールを再送する場合、",
            "sended email3": "秒お待ちください。",
            "sended email4": "メールアドレス",
            "sended email5": "に認証メールが送信されました。注意：変更が完了するまで、お客様のアカウントは古いメールアドレスに連携されたままになります。",
            "empty code": "認証コードを入力してください",
            "wrong code": "認証コードが無効です。",
            "enter new email code": "認証コードを入力してください",
            "enter new email": "新しいメールアドレス",
            "send code fail": "送信失敗",
            "send code success": "認証コードを送信しました。",
            "reset email success": "メールアドレスを変更しました。",
            "reset emial fail": "操作に失敗しました。再度お試しください。",
            "binded email": "そのメールアドレスは、すでに他のアカウントに接続されています。",
            "send email fail": "操作に失敗しました。Moontonアカウントとメールアドレスが連携されていることをご確認ください。",
            "send code": "認証コードを送信",
            "outdata link": "このリンクは期限切れです。",
            registed: "そのメールアドレスは、すでに別のアカウントに連携されています。別のアドレスでお試しください。",
            frequent: "失敗回数が上限に達しました。時間をおいて、再度お試しください。",
            "phone code wrong": "無効な認証コード",
            "binded phone": "アカウントはすでに電話番号に連携されています",
            "phone error": "無効な電話番号",
            "unbinded phone": "この電話番号はアカウントに連携されていません",
            "zhanyong phone": "この電話番号はすでにアカウントに連携されています",
            "Phone Registration": "電話番号で登録",
            Phone: "電話番号",
            Code: "認証コード",
            "Enter Phone": "認証コードを受け取るために、有効な電話番号を入力してください。",
            "Enter Code": "右のボタンをタップすると、SMS認証コードが送信されます。受け取ったコードを入力すると認証が完了します。",
            "send old phone1": "こちらに認証コードを送信します：",
            "a code": "。",
            "enter new phone": "認証コードを入力して認証を完了してください。",
            "quit change fail": "認証が完了するまでは、Moontonアカウントは以前の電話番号に接続されたままとなります。",
            "change phone success": "電話番号が変更されました。",
            "change phone": "電話番号の変更",
            "password err too many": "失敗回数が上限に達しました。明日もう一度お試しください。",
            "email verification": "メール認証 ({0})",
            "Enter Email Code": "右のボタンをタップすると、メールアドレスに認証コードが送信されます。受け取ったコードを入力すると認証が完了します。",
            "Email verification successful": "メールアドレスの認証に成功しました。連携したい電話番号を入力してください。",
            "phone verification": "電話番号認証 ({0})",
            "email sended and goto verify": "{0}に認証メールが送信されます。記載されているリンクをタップして、認証を完了してください。",
            "Phone Number Connected": "電話番号の連携に成功しました。",
            "add phone": "電話番号の連携",
            "add email": "メールアドレスの連携",
            "email verification code holder": "認証コード",
            "phone verification successful": "SMS認証に成功しました。連携したいメールアドレスを入力してください。",
            "change passwrod tip": "注意：入力したメールアドレスに連携されているMoontonアカウントのパスワードのみを変更することができます。",
            "enter call code": "市外局番をお選びください。",
            wait: "試行回数が上限に達しました。{time}秒後に再度お試しください。",
            dofrequent: "試行回数が上限に達しました。時間をおいて、再度お試しください。",
            notman: "セキュリティ上の理由により、お客様のログインリクエストは拒否されました。ご不明な点がございましたら、カスタマーサービスまでお問い合わせください。",
            hint: "お知らせ",
            "change binding tips": "メールの変更は現在審査中です。しばらくお待ちください。このプロセス中に変更をキャンセルすることもできます。メールアドレスの変更まで：{x}。",
            "contact customer service": "ご不明な点などがございましたら、カスタマーサービスまでお問い合わせください。",
            "i know": "OK",
            "cancel change": "キャンセル",
            "change pass": "メールの変更が承認されました。新しいメールアドレスを確認してください：{x}",
            "confirm change": "変更",
            LANG_STRID_Accountchangepassword_220501: "登録した電話番号を入力して、パスワードリセット用のメッセージを受信してください。",
            LANG_STRID_Accountchangepassword_220503: "注意：パスワードを変更できるのは、入力した電話番号に対応するMoontonアカウントのみです。",
            LANG_STRID_Accountchangepassword_220504: "メール認証",
            LANG_STRID_Accountchangepassword_220505: "戻る",
            LANG_STRID_Accountchangepassword_220506: "Moontonアカウントのパスワードをリセット",
            LANG_STRID_Accountchangepassword_220507: "[認証コード送信]をタップして認証コードを携帯に送信し、コードを入力して認証を完了できます。",
            LANG_STRID_Accountchangepassword_220511: "大文字と小文字、数字を組み合わせた6文字以上を使用し、特別な記号は使用しないでください。",
            LANG_STRID_Accountchangepassword_220513: "無効なパスワード。もう一度やり直してください。",
            LANG_STRID_Accountchangepassword_220514: "パスワードが一致しません。もう一度やり直してください。",
            LANG_STRID_Accountchangepassword_220515: "認証コードが間違っています。もう一度やり直してください。",
            LANG_STRID_Accountchangepassword_220516: "Moontonアカウントのパスワードはリセットされました",
            LANG_STRID_Accountchangepassword_220517: "コードログイン",
            LANG_STRID_Accountchangepassword_220518: "ログイン認証",
            LANG_STRID_Accountchangepassword_220519: "以下に携帯電話番号と認証コードを入力して認証を完了してください",
            LANG_STRID_Accountchangepassword_220520: "メッセージを受信するため、有効な携帯電話番号を入力してください",
            LANG_STRID_Accountchangepassword_220521: "ログイン通知",
            LANG_STRID_Accountchangepassword_220522: "アカウントの切り替えが成功しました。ゲームを再起動してください。",
            LANG_STRID_Accountchangepassword_220523: "アカウントのログインが成功しました。ゲームを再起動してください。",
            LANG_STRID_Accountchangepassword_220524: "メール/Moontonアカウント/携帯番号",
            LANG_STRID_Accountchangepassword_220525: "Moontonアカウントのパスワードがリセットされました。",
            LANG_STRID_Accountswitch_220501: "メールアドレスの変更",
            LANG_STRID_Accountswitch_220502: "メール{0}に認証コードを送信",
            LANG_STRID_Accountswitch_220503: "メールの認証コード",
            LANG_STRID_Accountswitch_220504: "右のボタンをタップすると、あなたのメールアドレス宛に認証コードが送信されます。コードを入力して認証を完了させてください。",
            LANG_STRID_Accountswitch_220505: "携帯{0}に認証コードを送信",
            LANG_STRID_Accountswitch_220506: "有効なEメールアドレスを入力してください。",
            LANG_STRID_Accountswitch_220507: "認証コードがあなたのEメールアドレスに送信されました。",
            LANG_STRID_Accountswitch_220508: "下に認証コードと新しいメールアドレスを入力し、認証を完了してください。",
            LANG_STRID_Accountswitch_220509: "認証が完了するまでは、あなたのMoontonのアカウントは以前のメールアドレスに連携されたままです。",
            LANG_STRID_Accountswitch_220510: "新しいEメールアドレスを入力してください。",
            LANG_STRID_Accountswitch_220511: "認証コードを受信するために、有効なメールアドレスを入力してください。",
            LANG_STRID_Accountswitch_220512: "本当にキャンセルしますか？",
            LANG_STRID_Accountswitch_220513: "キャンセル",
            LANG_STRID_Accountswitch_220514: "リクエストは現在審査中です。しばらくお待ちください。現在、リクエストはキャンセルすることができます。メールアドレスは{x}日{y}時間{z}分後に変更されます。ご不明な点がございましたら、カスタマーサービスまでお問い合わせください。",
            LANG_STRID_Accountswitch_220516: "電話番号<span>{0}</span>に認証コードを送信します",
            LANG_STRID_Accountswitch_220517: "リクエストは現在審査中です。 暫くお待ちください。 審査中にリクエストをキャンセルすることもできます。 Moontonメールアドレスが変更するまであと<span>{x}日{y}時間{z}分</span>です。 ご不明な点がございましたら、カスタマーサービスまでお問い合わせください。",
            LANG_STRID_Accountswitch_220518: "メールアドレス<span>{0}</span>に認証コードを送信します",
            LANG_STRID_MTregister_221101: "クイックメールアドレス登録",
            LANG_STRID_MTregister_221102: "メールアドレス",
            LANG_STRID_MTregister_221103: "Moontonアカウントとパスワードを入力してください",
            LANG_STRID_MTregister_221104: "Moontonアカウントとパスワードを確認してください",
            LANG_STRID_MTregister_221105: "パスワードを再入力してください",
            LANG_STRID_MTregister_221106: "Moontonユーザー名（オプショナル）",
            LANG_STRID_MTregister_221107: "入力内容は、先頭文字はアルファベットの大文字で、6～20文字のアルファベット、アンダースコア、数字で構成する必要があります。",
            LANG_STRID_MTregister_221108: "利用規約の全文を読み、同意します。",
            LANG_STRID_MTregister_221109: "Moontonアカウントと連携する",
            LANG_STRID_MTregister_221110: "アカウントと連携されたメールアドレスに認証メールが送信されました。24時間以内にご確認をしてください。メールが届いていない場合は、迷惑メールフォルダをご確認ください。",
            LANG_STRID_MTregister_221111: "メールアドレス認証へ",
            LANG_STRID_MTregister_221112: "Moontonアカウントと連携しました。現在Moontonのメールアドレスとパスワードでログインできるようになりました。",
            LANG_STRID_MTregister_221113: "無効なメールアドレスです。",
            LANG_STRID_MTregister_221114: "電話番号の登録が完了しました。",
            LANG_STRID_MTregister_221115: "電話番号クイック登録",
            LANG_STRID_MTregister_221116: "電話番号を入力して下さい。",
            LANG_STRID_MTregister_221117: "本人確認のため、現在ご利用のMoontonアカウントとパスワードを入力して下さい。",
            LANG_STRID_MTregister_221118: "無効な電話番号です。",
            LANG_STRID_MTregister_221119: "パスワードが一致しません。もう一度お試しください。",
            LANG_STRID_accinterception03: "ネットワークが不安定です。もう一度お試しください。",
            LANG_STRID_Accountswitch_220519: "Moontonアカウント名（必須）",
            LANG_STRID_UnbindPhone_230701: "現在連携されている電話番号は「{0}」です。",
            LANG_STRID_UnbindPhone_230702: "連携を解除すると、その電話番号をMoontonアカウントIDとして使用してログインすることはできなくなります。",
            LANG_STRID_UnbindPhone_230703: "そのため、電話番号の連携を解除する前に、メールアドレスと連携することをおすすめします。",
            LANG_STRID_UnbindPhone_230704: "携帯番号連携解除",
            LANG_STRID_UnbindPhone_230705: "現在のアカウントはMoontonメールに連携されていません。この操作を実行する前にMoontonメールと連携してください。",
            LANG_STRID_UnbindPhone_230706: "下のボタンをタップすると、連携されたMoontonメールアドレス{0}に確認コードが送信されます。",
            LANG_STRID_UnbindPhone_230707: "Moontonメールアドレス{0}に確認コードを送信しました。ご確認ください。",
            LANG_STRID_UnbindPhone_230708: "携帯番号の連携を解除しました。",
            passwordError: "パスワードが間違っています。もう一度お試しください。",
            passwordErrorWait: "パスワードが間違っています。{x}分{y}秒後にもう一度お試しください。",
            passwordErrorWaitSec: "パスワードが間違っています。{y}秒後にもう一度お試しください。",
            enterEmailTip: "有効なメールアドレスをご記入ください。",
            sendEmailTip: "「認証コードを送信」をタップすると、認証コードが記載されたメールが送信されます。コードを入力して認証してください。",
            logInViaAccountPassword: "アカウントパスワードでログイン",
            logInViaEmailVerification: "メール認証でログイン",
            enterEmailFirst: "先にメールアドレスを記入してください",
            verificationCodeError: "コードが間違っています。再度お試しください。",
            unbindEmail: "Moontonアカウントと連携していないメールアドレスです。"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "អាស័យ​ដ្ឋាន​អ៊ី​ម៉េ​ល",
            Password: "លេខសម្ងាត់",
            "Sign up": "ចុះ​ឈ្មោះ",
            "Forgot password": "ភ្លេច​លេខសំងាត់​",
            "Create Your Moonton Account": "បង្កើតគណនី Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានត្រឹមត្រូវ ដើម្បីទទួលបានព័ត៌មានហ្គេមចុងក្រោយបំផុត។",
            "Re-Enter Password": "បញ្ជាក់ពាក្យសម្ងាត់",
            "Please agree to the Moonton": "សូមយល់ព្រមចំពោះ Moonton",
            "terms of service": "លក្ខខណ្ឌ​នៃ​សេវាកម្ម",
            Submit: "ដាក់ផ្ញើ",
            "E-Mail format error": "អាសយដ្ឋានអ៊ីមែលមិនត្រឹមត្រូវ",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "ប្រើតួអក្សរ ៦ ឬច្រើនជាងនេះ ដែលរួនជាមួយនឹងអក្សរធំ និងអក្សរតូច លេខ និងត្រូវដាក់និមិត្តសញ្ញាពិសេសណាឡើយ",
            "These passwords dont' match": "ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ។",
            "Please enter your email address": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នក។",
            "Please enter your password": "សូម​បញ្ចូល​លេខសម្ងាត់​របស់​អ្នក",
            "Please confirm your password": "សូមបញ្ជាក់​លេខសម្ងាត់​របស់​អ្នក",
            "Please agree to the Moonton Terms of Service": "សូមយល់ព្រមតាមលក្ខខណ្ឌនៃសេវាកម្ម Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅអាសយដ្ឋានអ៊ីមែលរបស់អ្នក។ សូមចុចលើតំណដែលមានក្នុងអ៊ីមែល ហើយបញ្ចប់ការផ្ទៀងផ្ទាត់។ ប្រសិនបើអ្នកមិនឃើញអ៊ីមែលទេ សូមពិនិត្យមើលថតឯកសារឥតបានការរបស់អ្នក។",
            Confirm: "យល់ព្រម",
            "Please enter your email address to receive the email with a new password.": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលបានភ្ជាប់របស់អ្នក ដើម្បីទទួលបានអ៊ីមែលកំណត់លេខសម្ងាត់ឡើងវិញ។",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "អ៊ីមែលកំណត់លេខសម្ងាត់ឡើងវិញត្រូវបានផ្ញើទៅកាន់អាសយដ្ឋានអ៊ីមែលដែលបានភ្ជាប់របស់អ្នក។ សូមពិនិត្យមើលអ៊ីមែលឱ្យបានទាន់ពេលវេលា!",
            Continue: "បន្ត",
            "Sign in with your Moonton Account": "បើកចូលជាមួយគណនី Moonton",
            "Sign in": "បើកចូល",
            Congratulations: "សូមអបអរសាទរ",
            "Your email": "គណនី​របស់​អ្នក (",
            "is confirmed. Thank you!": ") ត្រូវបានបង្កើតឡើង។ រីករាយលេងហ្គេមណា៎!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "សេចក្តីជូនដំណឹង",
            "Your account has already been confirmed.": "គណនីត្រូវបានបង្កើតរួចហើយ។",
            "The link has expired Please request a new link in-gme. Thank you.": "តំណភ្ជាប់បានផុតកំណត់ហើយ។ សូមផ្ញើតំណភ្ជាប់នៅក្នុងហ្គេមឡើងវិញ។",
            "Reset Password": "ដាក់កំណត់លេខសម្ងាត់ឡើងវិញ",
            "New Password": "ពាក្យសម្ងាត់​ថ្មី",
            "Re-Enter-Password": "បញ្ជាក់លេខសម្ងាត់",
            "Please confirm your new password": "សូមបញ្ជាក់លេខសម្ងាត់របស់អ្នក។",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "បានផ្លាស់ប្តូរលេខសម្ងាត់។ សូមចូលម្តងទៀតដោយប្រើលេខសម្ងាត់ថ្មីរបស់អ្នក។",
            "Bind your Moonton Account": "ភ្ជាប់គណនី Moonton",
            "Check Your Email": "ត្រួត​ពិ​និ​ត្រ​អ៊ី​ម៉ែ​ល",
            "Re-enter email": "បញ្ជាក់អ៊ីមែល",
            "Email incompatible": "អាសយដ្ឋានអ៊ីមែលមិនត្រូវគ្នាទេ។",
            "Please enter your password again": "បញ្ជាក់លេខសម្ងាត់",
            "Moonton Account": "គណនី Moonton",
            "account rule": "ប្រើអក្សរតួអក្សរពី ៦-២០ តួ ឬ _ ហើយចាប់ផ្តើមដោយអក្សរមួយ",
            "Send Verification Email": "ផ្ញើអ៊ីមែល",
            "to email": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅ",
            "sended email": "។ សូមពិនិត្យអ៊ីមែលក្នុងប្រអប់សំបុត្ររបស់អ្នក។",
            "change email": "ផ្លាស់ប្តូរអាសយដ្ឋានអ៊ីមែល",
            "Email Registration": "ចុះឈ្មោះជាមួយអ៊ីមែល",
            "Quick Registration": "ចុះឈ្មោះបែបរហ័ស",
            "Accept the agreement and register": "ទទួលយកកិច្ចព្រមព្រៀង និងចុះឈ្មោះ",
            "same account": "ឈ្មោះនេះមានអ្នកប្រើរួចហើយ។ សូមសាកល្បងមួយផ្សេងទៀត។",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "សូមបញ្ចូលលេខសម្ងាត់ សម្រាប់គណនី Moonton បច្ចុប្បន្នដើម្បីធ្វើការផ្ទៀងផ្ទាត់។",
            "congratulations account": "អបអរសាទរ! អ្នកបានបង្កើតគណនី Moonton ហើយបានភ្ជាប់វាទៅនឹងដំណើរការហ្គេមបច្ចុប្បន្នរបស់អ្នក។",
            "empty email": "ដើម្បីសុវត្ថិភាពគណនីរបស់អ្នក យើងសូមណែនាំឱ្យអ្នកភ្ជាប់គណនីទៅអាសយដ្ឋានអ៊ីមែលមួយ ដូច្នេះអ្នកអាចចូលទៅក្នុងគណនីនេះដោយប្រើអាសយដ្ឋានអ៊ីមែលមួយនោះ និងផ្លាស់ប្តូរលេខសម្ងាត់របស់អ្នក។",
            "used email": "អាសយដ្ឋានអ៊ីមែលត្រូវបានភ្ជាប់ទៅគណនីមួយផ្សេងទៀតរួចហើយ។ សូមសាកល្បងគណនីមួយផ្សេងទៀត ឬចូលទៅក្នុងគណនីតាមរយៈ កាផ្លាស់រប្តូរគណនី។",
            "useful email": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅអាសយដ្ឋានអ៊ីមែលដែលបានភ្ជាប់របស់អ្នក។ សូមចុចលើតំណដែលមាននៅក្នុងអ៊ីមែល ហើយបញ្ចប់ការផ្ទៀងផ្ទាត់ក្នុងរយៈពេល 24 ម៉ោង។ ប្រសិនបើអ្នកមិនឃើញអ៊ីមែលទេ សូមពិនិត្យមើលថតឯកសារឥតបានការរបស់អ្នក។",
            "Connect to Email": "ភ្ជាប់អ៊ីមែល",
            unreset: "អ្នកមិនអាចកំណត់ពាក្យសម្ងាត់ឡើងវិញបានទេ ប្រសិនបើគណនី Moonton របស់អ្នកមិនត្រូវបានភ្ជាប់ទៅអាសយដ្ឋានអ៊ីមែល។",
            emailtime1: "អ្នកអាចផ្ញើអ៊ីមែលម្តងទៀតក្នុងពេល",
            emailtime2: "វិនាទី។",
            "have fun": "បានភ្ជាប់គណនី។ រីករាយលេងហ្គេមណា៎!",
            "continue bind email": "ភ្ជាប់អាសយដ្ឋានអ៊ីមែល",
            "server error": "Server កំពុងជាប់រវល់ឥឡូវនេះ។ សូម​ព្យាយាម​ម្តង​ទៀត​នៅ​ពេល​ក្រោយ។",
            "wrong content": "តម្រូវការមិនទាន់បំពេញគ្រប់គ្រាន់។",
            "enter right account": "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ ឬគណនី Moonton",
            "reset email": "ផ្លាស់ប្តូរអាសយដ្ឋានអ៊ីមែល",
            "send email1": "អ៊ីមែលផ្ទៀងផ្ទាត់នឹងត្រូវបានផ្ញើទៅ {x} ។ សូមចុចលើតំណដែលមានក្នុងអ៊ីមែល ដើម្បីបញ្ចប់ការផ្លាស់ប្តូរ។",
            "send email2": "។ សូមចុចលើតំណភ្ជាប់ដែលមានក្នុងអ៊ីមែល ដើម្បីបញ្ចប់ការផ្លាស់ប្តូរនេះ។",
            "send email": "ផ្ញើអ៊ីមែល",
            "sended email1": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅ",
            "sended email2": "។ អ្នកអាចផ្ញើអ៊ីមែលម្តងទៀតក្នុងពេល",
            "sended email3": "វិនាទី។",
            "sended email4": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅ",
            "sended email5": "។ ចំណាំ៖ មុនពេលការផ្លាស់ប្តូរត្រូវបានបញ្ចប់ គណនីរបស់អ្នកនឹងនៅតែត្រូវបានភ្ជាប់ទៅអាសយដ្ឋានអ៊ីមែលចាស់ដដែល។",
            "empty code": "លេខកូដផ្ទៀងផ្ទាត់មិនអាចដាក់ទទេបានទេ។",
            "wrong code": "លេខកូដផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ",
            "enter new email code": "សូមបញ្ចូលលេខកូដផ្ទៀងផ្ទាត់",
            "enter new email": "អាសយដ្ឋានអ៊ីមែលថ្មី",
            "send code fail": "ប្រតិបត្តិការបានបរាជ័យ។",
            "send code success": "លេខកូដផ្ទៀងផ្ទាត់បានផ្ញើទៅរួចហើយ",
            "reset email success": "អាសយដ្ឋានអ៊ីមែលបានផ្លាស់ប្តូរ។",
            "reset emial fail": "ប្រតិបត្តិការបានបរាជ័យ។ សូម​ព្យាយាម​ម្តង​ទៀត។",
            "binded email": "អាសយដ្ឋានអ៊ីមែលត្រូវបានភ្ជាប់ទៅគណនីមួយផ្សេងទៀតរួចហើយ។",
            "send email fail": "ប្រតិបត្តិការបានបរាជ័យ។ សូមពិនិត្យមើលថាតើអ្នកបានភ្ជាប់គណនី Moonton និងអាសយដ្ឋានអ៊ីមែលមែនឬអត់។",
            "send code": "ផ្ញើលេខកូដ",
            "outdata link": "តំណភ្ជាប់បានផុតកំណត់ហើយ។",
            registed: "អាសយដ្ឋានអ៊ីមែលត្រូវបានភ្ជាប់ទៅគណនីមួយផ្សេងទៀតរួចហើយ។ សូមសាកល្បងមួយផ្សេងទៀត។",
            frequent: "ការប៉ុនប៉ងបានបរាជ័យច្រើនដងពេក។ សូម​ព្យាយាម​ម្តង​ទៀត​នៅ​ពេល​ក្រោយ។",
            "phone code wrong": "លេខកូដផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ",
            "binded phone": "គណនីនេះត្រូវបានភ្ជាប់ទៅលេខទូរស័ព្ទមួយរួចហើយ",
            "phone error": "លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
            "unbinded phone": "លេខទូរសព្ទនេះមិនត្រូវបានភ្ជាប់ទៅគណនីទេ។",
            "zhanyong phone": "លេខទូរស័ព្ទនេះត្រូវបានភ្ជាប់ទៅគណនីរួចហើយ",
            "Phone Registration": "ចុះឈ្មោះជាមួយទូរស័ព្ទ",
            Phone: "លេខទូរសព្ទ",
            Code: "កូដ​ផ្ទៀង​ផ្ទាត់",
            "Enter Phone": "សូមបញ្ចូលលេខទូរស័ព្ទដែលត្រឹមត្រូវ ដើម្បីទទួលបានលេខកូដផ្ទៀងផ្ទាត់",
            "Enter Code": "ចុចប៊ូតុងនៅខាងស្តាំដើម្បីផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅកាន់លេខទូរស័ព្ទរបស់អ្នក ហើយបញ្ចូលលេខកូដដើម្បីបញ្ចប់ការផ្ទៀងផ្ទាត់។",
            "send old phone1": "ផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅលេខ",
            "a code": "។",
            "enter new phone": "សូមបញ្ចូលលេខកូដផ្ទៀងផ្ទាត់ ដើម្បីបញ្ចប់ការផ្ទៀងផ្ទាត់",
            "quit change fail": "រហូតដល់ការផ្ទៀងផ្ទាត់ត្រូវបានបញ្ចប់ គណនី Moonton របស់អ្នកនឹងនៅតែភ្ជាប់ទៅលេខទូរស័ព្ទចាស់របស់អ្នកដដែល។",
            "change phone success": "លេខទូរស័ព្ទបានផ្លាស់ប្តូរ។",
            "change phone": "ផ្លាស់ប្តូរលេខទូរស័ព្ទ",
            "password err too many": "ការប៉ុនប៉ងដូរបរាជ័យច្រើនដងពេក។ សូមព្យាយាមម្តងទៀតនៅថ្ងៃស្អែក។",
            "email verification": "ការផ្ទៀងផ្ទាត់តាមអ៊ីមែល ({0})",
            "Enter Email Code": "ចុចប៊ូតុងនៅខាងស្តាំដើម្បីផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅកាន់អាសយដ្ឋានអ៊ីមែលរបស់អ្នក ហើយបញ្ចូលលេខកូដផ្ទៀងផ្ទាត់ដើម្បីបញ្ចប់ការផ្ទៀងផ្ទាត់នេះ។",
            "Email verification successful": "ការផ្ទៀងផ្ទាត់អ៊ីមែលទទួលបានជោគជ័យ។ សូមបញ្ចូលលេខទូរស័ព្ទដែលអ្នកចង់ភ្ជាប់ទៅ។",
            "phone verification": "ការផ្ទៀងផ្ទាត់តាមទូរស័ព្ទ ({0})",
            "email sended and goto verify": "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅ {0}។ សូមចុចលើតំណភ្ជាប់ដែលមានក្នុងអ៊ីមែល ហើយបញ្ចប់ការផ្ទៀងផ្ទាត់។",
            "Phone Number Connected": "បានភ្ជាប់លេខទូរស័ព្ទរួច។",
            "add phone": "ភ្ជាប់លេខទូរស័ព្ទ",
            "add email": "ភ្ជាប់អាសយដ្ឋានអ៊ីមែល",
            "email verification code holder": "កូដ​ផ្ទៀង​ផ្ទាត់",
            "phone verification successful": "ការផ្ទៀងផ្ទាត់តាមលេខទូរសព្ទបានជោគជ័យ។ សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលអ្នកចង់ភ្ជាប់។",
            "change passwrod tip": "ចំណាំ៖ អ្នកអាចផ្លាស់ប្តូរលេខសម្ងាត់សម្រាប់គណនី Moonton ដែលភ្ជាប់ទៅអាសយដ្ឋានអ៊ីមែលដែលអ្នកបានបញ្ចូលតែប៉ុណ្ណោះ។",
            "enter call code": "សូមជ្រើសរើសលេខកូដតំបន់របស់អ្នក។",
            wait: "ការព្យាយាមច្រើនដងពេក។ សូមព្យាយាមម្តងទៀតក្នុងរយៈពេល {time}វិនាទី។",
            dofrequent: "ការព្យាយាមច្រើនពេក។ សូម​ព្យាយាម​ម្តង​ទៀត​នៅ​ពេល​ក្រោយ។",
            notman: "ដោយសារហេតុផលសុវត្ថិភាព សំណើបើកចូលរបស់អ្នកត្រូវបានបដិសេធ។ សូមទាក់ទងផ្នែកសេវាអតិថិជន ប្រសិនបើអ្នកមានសំណួរណាមួយ។",
            hint: "សេចក្តីជូនដំណឹង",
            "change binding tips": "បច្ចុប្បន្នការផ្លាស់ប្តូរអ៊ីមែលកំពុងស្ថិតក្រោមការត្រួតពិនិត្យ។ សូមមេត្តារង់ចាំ។ អ្នកអាចបោះបង់ការផ្លាស់ប្តូរក្នុងអំឡុងពេលដំណើរការនេះ។ ពេលវេលាដែលអ្នកអាចផ្លាស់ប្តូរអាសយដ្ឋានអ៊ីមែល៖ {x} ។\n",
            "contact customer service": "ប្រសិនបើអ្នកមានសំណួរណាមួយ សូមទាក់ទងផ្នែកសេវាអតិថិជន។",
            "i know": "យល់ព្រម",
            "cancel change": "បោះបង់",
            "change pass": "ការផ្លាស់ប្តូរអ៊ីមែលរបស់អ្នកត្រូវបានយល់ព្រម សូមបញ្ជាក់អាសយដ្ឋានអ៊ីមែលថ្មីរបស់អ្នក៖ {x}",
            "confirm change": "",
            LANG_STRID_Accountchangepassword_220501: "សូមបញ្ចូលលេខទូរស័ព្ទដែលភ្ជាប់របស់អ្នក ដើម្បីទទួលបានសារកំណត់ពាក្យសម្ងាត់ឡើងវិញ។",
            LANG_STRID_Accountchangepassword_220503: "ចំណាំ៖ អ្នកអាចប្តូរពាក្យសម្ងាត់សម្រាប់គណនី Moonton ដែលភ្ជាប់ទៅលេខទូរស័ព្ទដែលអ្នកបានបញ្ចូលប៉ុណ្ណោះ។",
            LANG_STRID_Accountchangepassword_220504: "ការផ្ទៀងផ្ទាត់តាមអ៊ីមែល",
            LANG_STRID_Accountchangepassword_220505: "ត្រឡប់មកវិញ",
            LANG_STRID_Accountchangepassword_220506: "កំណត់ពាក្យសម្ងាត់ Moonton ឡើងវិញ",
            LANG_STRID_Accountchangepassword_220507: "ចុច ពាក្យផ្ញើលេខកូដ ដើម្បីផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅកាន់លេខទូរស័ព្ទរបស់អ្នក ហើយបញ្ចូលលេខកូដដើម្បីបញ្ចប់ការផ្ទៀងផ្ទាត់។",
            LANG_STRID_Accountchangepassword_220511: "ប្រើតួអក្សរ 6 ឬច្រើនជាមួយនឹងអក្សរធំ និងអក្សរតូច លេខ និងគ្មាននិមិត្តសញ្ញាពិសេស។",
            LANG_STRID_Accountchangepassword_220513: "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។",
            LANG_STRID_Accountchangepassword_220514: "ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ។ សូម​ព្យាយាម​ម្តង​ទៀត។",
            LANG_STRID_Accountchangepassword_220515: "លេខកូដផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។",
            LANG_STRID_Accountchangepassword_220516: "ពាក្យសម្ងាត់របស់អ្នកត្រូវបានកំណត់ឡើងវិញ។",
            LANG_STRID_Accountchangepassword_220517: "ទទួលបានលេខកូដ",
            LANG_STRID_Accountchangepassword_220518: "ការផ្ទៀងផ្ទាត់ការចូល",
            LANG_STRID_Accountchangepassword_220519: "សូមបញ្ចូលលេខទូរស័ព្ទ និងលេខកូដផ្ទៀងផ្ទាត់របស់អ្នក ដើម្បីបញ្ចប់ការផ្ទៀងផ្ទាត់។",
            LANG_STRID_Accountchangepassword_220520: "សូមបញ្ចូលលេខទូរស័ព្ទដែលមានសុពលភាព ដើម្បីទទួលបានលេខកូដផ្ទៀងផ្ទាត់។",
            LANG_STRID_Accountchangepassword_220521: "សេចក្តីជូនដំណឹងអំពីការចូល",
            LANG_STRID_Accountchangepassword_220522: "គណនីត្រូវបានប្តូរ។ សូមចូលលេងហ្គេមម្តងទៀត។",
            LANG_STRID_Accountchangepassword_220523: "បានចូលដោយជោគជ័យ។ សូមចូលលេងហ្គេមម្តងទៀត។",
            LANG_STRID_Accountchangepassword_220524: "អាសយដ្ឋានអ៊ីមែល/គណនី Moonton/លេខទូរស័ព្ទ",
            LANG_STRID_Accountchangepassword_220525: "ពាក្យសម្ងាត់ Moonton របស់អ្នកត្រូវបានកំណត់ឡើងវិញ។",
            LANG_STRID_Accountswitch_220505: "ផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅទូរស័ព្ទ {0}",
            LANG_STRID_Accountswitch_220506: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលត្រឹមត្រូវ.",
            LANG_STRID_Accountswitch_220507: "លេខកូដផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅអាសយដ្ឋានអ៊ីមែលរបស់អ្នក",
            LANG_STRID_Accountswitch_220508: "សូមបញ្ចូលលេខកូដផ្ទៀងផ្ទាត់ និងអាសយដ្ឋានអ៊ីមែលថ្មីរបស់អ្នកខាងក្រោម ហើយបំពេញការផ្ទៀងផ្ទាត់",
            LANG_STRID_Accountswitch_220509: "រហូតដល់ការផ្ទៀងផ្ទាត់ត្រូវបានបញ្ចប់ គណនី Moonton របស់អ្នកនៅតែភ្ជាប់ទៅអាសយដ្ឋានអ៊ីមែលពីមុនរបស់អ្នក។",
            LANG_STRID_Accountswitch_220510: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលថ្មីរបស់អ្នក។",
            LANG_STRID_Accountswitch_220511: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានសុពលភាព ដើម្បីទទួលបានលេខកូដផ្ទៀងផ្ទាត់។",
            LANG_STRID_Accountswitch_220512: "តើអ្នកប្រាកដថាចង់លុបចោលសំណើនេះទេ?",
            LANG_STRID_Accountswitch_220513: "បោះបង់សំណើ",
            LANG_STRID_Accountswitch_220514: "សំណើនេះកំពុងស្ថិតក្រោមការត្រួតពិនិត្យ។ សូមរង់ចាំ។ អ្នកអាចជ្រើសរើសលុបចោលសំណើរក្នុងអំឡុងពេលដំណើរការនេះ។ អាសយដ្ឋានអ៊ីមែលរបស់អ្នកអាចត្រូវបានផ្លាស់ប្តូរក្នុងរយៈពេល {x}ថ្ងៃ {y}ម៉ោង {z}នាទី។ ប្រសិនបើអ្នកមានសំណួរណាមួយ សូមទាក់ទងផ្នែកសេវាអតិថិជន។",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "ការចុះឈ្មោះអ៊ីម៉ែលហ័ស",
            LANG_STRID_MTregister_221102: "អ៊ីម៉ែល",
            LANG_STRID_MTregister_221103: "សូមបញ្ចូលគណនី Moonton និងពាក្យសម្ងាត់របស់អ្នក",
            LANG_STRID_MTregister_221104: "សូមបញ្ជាក់គណនី Moonton និងពាក្យសម្ងាត់របស់អ្នក",
            LANG_STRID_MTregister_221105: "សូមបញ្ចូលពាក្យសម្ងាត់របស់អ្នកឡើងវិញ",
            LANG_STRID_MTregister_221106: "ឈ្មោះគណនី Moonton (ជាជម្រើស)",
            LANG_STRID_MTregister_221107: "ត្រូវតែមានអក្សរ ៦-២០ អក្សរ សញ្ញាគូស ឬលេខ ហើយត្រូវចាប់ផ្តើមដោយអក្សរ",
            LANG_STRID_MTregister_221108: "ខ្ញុំបានអាន និងយល់ព្រមតាមលក្ខខណ្ឌនៃការប្រើប្រាស់",
            LANG_STRID_MTregister_221109: "ចងគណនី Moonton របស់អ្នក",
            LANG_STRID_MTregister_221110: "អ៊ីមែលផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅអ៊ីមែលដែលភ្ជាប់ទៅនឹងគណនីរបស់អ្នក។ សូមផ្ទៀងផ្ទាត់ក្នុងរយៈពេល ២៤ ម៉ោង។ ប្រសិនបើអ្នកមិនទាន់បានទទួលអ៊ីមែលទេ សូមពិនិត្យមើលថតឯកសារឥតបានការ ដើម្បីមើលថាតើវានៅទីនោះឬអត់។",
            LANG_STRID_MTregister_221111: "ផ្ទៀងផ្ទាត់ជាមួយអ៊ីមែល",
            LANG_STRID_MTregister_221112: "អ្នកបានភ្ជាប់គណនី Moonton របស់អ្នកដោយជោគជ័យ។ ឥឡូវនេះអ្នកអាចចូលដោយប្រើអ៊ីមែល Moonton និងពាក្យសម្ងាត់របស់អ្នក។",
            LANG_STRID_MTregister_221113: "អ៊ីមែលមិនត្រឹមត្រូវ",
            LANG_STRID_MTregister_221114: "អ្នកបានភ្ជាប់លេខទូរស័ព្ទរបស់អ្នកដោយជោគជ័យ",
            LANG_STRID_MTregister_221115: "ការចុះឈ្មោះទូរស័ព្ទរហ័ស",
            LANG_STRID_MTregister_221116: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",
            LANG_STRID_MTregister_221117: "សូមបញ្ចូលគណនី Moonton និងពាក្យសម្ងាត់ដែលអ្នកកំពុងប្រើនាពេលបច្ចុប្បន្ន ដើម្បីជួយយើងបញ្ជាក់អត្តសញ្ញាណរបស់អ្នក",
            LANG_STRID_MTregister_221118: "លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
            LANG_STRID_MTregister_221119: "ពាក្យសម្ងាត់របស់អ្នកមិនត្រូវគ្នាទេ។ សូមបញ្ចូលម្តងទៀត",
            LANG_STRID_accinterception03: "បណ្តាញបច្ចុប្បន្នរបស់អ្នកមិនស្ថិតស្ថេរសូមព្យាយាមម្តងទៀត។",
            LANG_STRID_Accountswitch_220519: "Moonton Username (ត្រូវការ)",
            LANG_STRID_UnbindPhone_230701: "លេខទូរសព្ទដែលភ្ជាប់បច្ចុប្បន្នរបស់អ្នកគឺ {0}។",
            LANG_STRID_UnbindPhone_230702: "នៅពេលផ្ដាច់ លេខទូរស័ព្ទមិនអាចប្រើជាលេខសម្គាល់គណនី Moonton របស់អ្នកដើម្បីចូលលេងហ្គេមដោយប្រើពាក្យសម្ងាត់បានទេ។",
            LANG_STRID_UnbindPhone_230703: "វាត្រូវបានណែនាំឱ្យភ្ជាប់គណនី Moonton របស់អ្នកទៅអ៊ីមែល មុនពេលផ្តាច់លេខទូរស័ព្ទរបស់អ្នក។",
            LANG_STRID_UnbindPhone_230704: "ផ្តាច់លេខទូរស័ព្ទ",
            LANG_STRID_UnbindPhone_230705: "អ្នកមិនបានភ្ជាប់អ៊ីមែល Moonton ទៅគណនីរបស់អ្នកទេ។ សូមព្យាយាមម្តងទៀត បន្ទាប់ពីភ្ជាប់អ៊ីមែល Moonton។",
            LANG_STRID_UnbindPhone_230706: "ចុចប៊ូតុងខាងក្រោមដើម្បីផ្ញើលេខកូដផ្ទៀងផ្ទាត់ទៅកាន់អ៊ីមែល Moonton ដែលបានភ្ជាប់របស់អ្នក {0}។",
            LANG_STRID_UnbindPhone_230707: "លេខកូដផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅកាន់អាសយដ្ឋានអ៊ីមែល Moonton របស់អ្នក {0}។ សូមត្រួតពិនិត្យ។",
            LANG_STRID_UnbindPhone_230708: "អ្នកបានផ្តាច់លេខទូរស័ព្ទរបស់អ្នកដោយជោគជ័យ។",
            passwordError: "ពាក្យសម្ងាត់ដែលអ្នកបានបញ្ចូលមិនត្រឹមត្រូវទេ។ សូមព្យាយាមម្តងទៀត។",
            passwordErrorWait: "ពាក្យសម្ងាត់ដែលអ្នកបានបញ្ចូលមិនត្រឹមត្រូវទេ។ សូមព្យាយាមម្តងទៀតក្នុងរយៈពេល {x} នាទី {y} វិនាទី។",
            passwordErrorWaitSec: "ពាក្យសម្ងាត់ដែលអ្នកបានបញ្ចូលមិនត្រឹមត្រូវទេ។ សូមព្យាយាមម្តងទៀតក្នុងរយៈពេល {y} វិនាទី។",
            enterEmailTip: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលដែលមានសុពលភាព ដើម្បីទទួលសាររបស់យើង។",
            sendEmailTip: 'ចុច "ផ្ញើលេខកូដផ្ទៀងផ្ទាត់" ហើយយើងនឹងផ្ញើអ៊ីមែលដែលមានលេខកូដផ្ទៀងផ្ទាត់ទៅកាន់អ៊ីមែលដែលអ្នកបានផ្តល់។ បញ្ចូលលេខកូដដើម្បីបញ្ចប់ដំណើរការផ្ទៀងផ្ទាត់។',
            logInViaAccountPassword: "Log in ចូលតាមរយៈពាក្យសម្ងាត់គណនី",
            logInViaEmailVerification: "Log in ចូលតាមរយៈការផ្ទៀងផ្ទាត់អ៊ីមែល",
            enterEmailFirst: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលរបស់អ្នកជាមុនសិន",
            verificationCodeError: "លេខកូដផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ។ សូម​ព្យាយាម​ម្តង​ទៀត។",
            unbindEmail: "អ៊ីមែលនេះមិនត្រូវបានភ្ជាប់ទៅគណនី Moonton ទេ។"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "이메일 주소",
            Password: "비밀번호",
            "Sign up": "계정 생성",
            "Forgot password": "비밀번호 찾기",
            "Create Your Moonton Account": "Moonton 계정 생성하기",
            "To obtain the latest information about us, please sign up with a valid email": "최신 게임 정보를 얻으려면 유효한 이메일로 회원가입해 주세요.",
            "Re-Enter Password": "비밀번호 재입력",
            "Please agree to the Moonton": "Moonton 동의하기",
            "terms of service": "이용약관",
            Submit: "제출",
            "E-Mail format error": "메일 양식 오류",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "6자 이상의 특수 문자를 제외한 대문자, 소문자 및 숫자를 혼합하여 사용하세요.",
            "These passwords dont' match": "비밀번호가 일치하지 않습니다.",
            "Please enter your email address": "이메일 주소를 입력하세요",
            "Please enter your password": "비밀번호를 입력하세요",
            "Please confirm your password": "비밀번호를 확인해주세요",
            "Please agree to the Moonton Terms of Service": "Moonton의 이용약관에 동의해주십시오",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "메일함으로 인증 메일이 전송되었습니다. 메일함을 확인하여 인증하세요. 이메일을 받지 못한 경우 스팸 메일함을 확인해 주세요.",
            Confirm: "확인",
            "Please enter your email address to receive the email with a new password.": "비밀번호 초기화 메일을 전송받기 위해 연동한 이메일의 주소를 입력해 주세요.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "연동된 이메일 주소로 비밀번호 초기화 메일이 전송되었습니다. 시간 내로 메일을 확인해주세요. 감사합니다!",
            Continue: "계속하기",
            "Sign in with your Moonton Account": "Moonton 계정으로 로그인",
            "Sign in": "로그인",
            Congratulations: "축하합니다",
            "Your email": "귀하의 계정 (",
            "is confirmed. Thank you!": ")이 생성되었습니다. 즐거운 게임 하시길 바랍니다!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "알림",
            "Your account has already been confirmed.": "귀하의 계정은 이미 확인되었습니다.",
            "The link has expired Please request a new link in-gme. Thank you.": "링크가 만료되었습니다. 게임 내에서 새로운 링크를 요청하십시오. 감사합니다.",
            "Reset Password": "비밀번호 재설정",
            "New Password": "새 비밀번호",
            "Re-Enter-Password": "비밀번호를 다시 입력해주세요",
            "Please confirm your new password": "새 비밀번호를 확인하세요",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "비밀번호가 성공적으로 변경되었습니다. 게임으로 이동하여 Moonton 계정에 로그인하십시오.",
            "Bind your Moonton Account": "Moonton 계정 연동하기",
            "Check Your Email": "이메일 확인",
            "Re-enter email": "이메일 재입력",
            "Email incompatible": "이메일 주소가 일치하지 않습니다",
            "Please enter your password again": "비밀번호를 다시 입력해주세요",
            "Moonton Account": "Moonton 계정",
            "account rule": "6~20자의 문자, 밑줄 또는 숫자, 첫 시작은 문자로 시작하세요.",
            "Send Verification Email": "인증 메일 보내기",
            "to email": "인증 메일이",
            "sended email": "으로 발송되었습니다. 메일함을 확인 바랍니다.",
            "change email": "이메일 주소 변경",
            "Email Registration": "이메일로 로그인",
            "Quick Registration": "간편 로그인",
            "Accept the agreement and register": "약관에 동의하고 회원가입",
            "same account": "이미 존재하는 닉네임 입니다. 다른 닉네임으로 설정해 주세요.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "인증을 위해 현재 Moonton 계정의 비밀번호를 입력해 주세요.",
            "congratulations account": "축하드립니다! Moonton 계정을 생성하고 현재 계정에 연동하였습니다.",
            "empty email": "계정 보안 강화를 위해, 계정에 이메일을 연동해 두어 이메일을 통해 계정에 접근하여 비밀번호를 변경할 수 있도록 하는 것을 추천드립니다.",
            "used email": "입력하신 이메일 주소는 이미 다른 계정과 연동되어 있습니다. 다른 이메일을 사용하시거나 계정 변경을 통해 다른 계정으로 로그인하세요.",
            "useful email": "연동된 이메일 계정으로 인증 문자가 전송되었습니다. 이메일에 첨부된 링크를 클릭하고 24시간 내로 인증을 완료해 주세요. 이메일이 보이지 않는다면 스팸함을 확인 바랍니다.",
            "Connect to Email": "이메일 연동",
            unreset: "Moonton 계정이 이메일과 연동되어 있지 않기 때문에 비밀번호를 초기화 할 수 없습니다.",
            emailtime1: "이메일을",
            emailtime2: "초 후 재전송 할 수 있습니다.",
            "have fun": "계정이 연동되었습니다. 즐거운 게임 하시길 바랍니다!",
            "continue bind email": "이메일 주소 연동",
            "server error": "서버가 현재 혼잡합니다. 나중에 다시 시도해 주시길 바랍니다.",
            "wrong content": "요구사항이 충족되지 않았습니다.",
            "enter right account": "유효한 이메일 주소나 Moonton 계정을 입력해 주세요",
            "reset email": "이메일 주소 변경",
            "send email1": "인증 메일이 {x}으로 전송되었습니다. 메일에 첨부된 링크를 클릭하고 변경을 완료하세요.",
            "send email2": "으로 전송되었습니다. 메일에 첨부된 링크를 클릭하고 변경을 완료하세요.",
            "send email": "이메일 받기",
            "sended email1": "인증 메일이",
            "sended email2": "으로 전송되었습니다.",
            "sended email3": "초 후 재전송 할 수 있습니다.",
            "sended email4": "인증 메일이",
            "sended email5": "으로 전송되었습니다. 주의: 변경이 완전히 완료되기 전까지, 계정은 기존의 이메일 주소에 연동되어 있을 것입니다.",
            "empty code": "인증 코드는 빈칸으로 남겨둘 수 없습니다",
            "wrong code": "유효하지 않은 인증 코드입니다",
            "enter new email code": "인증 코드를 입력해 주세요",
            "enter new email": "새로운 이메일 주소를 입력해 주세요",
            "send code fail": "인증 코드 전송에 실패하였습니다",
            "send code success": "인증 코드가 전송되었습니다",
            "reset email success": "이메일 주소가 변경되었습니다",
            "reset emial fail": "작업에 실패하였습니다. 다시 시도해 주세요.",
            "binded email": "해당 이메일 주소는 이미 다른 계정에 연동되어 있습니다.",
            "send email fail": "작업에 실패하였습니다. Moonton 계정과 이메일을 연동하였는지 확인해 주세요.",
            "send code": "인증 코드 받기",
            "outdata link": "링크가 만료되었습니다",
            registed: "해당 이메일 주소는 이미 다른 계정과 연동되어 있습니다. 다른 이메일로 다시 시도해 주세요.",
            frequent: "오류 횟수 초과. 나중에 다시 시도해 주세요.",
            "phone code wrong": "유효하지 않은 인증 코드입니다",
            "binded phone": "해당 계정은 이미 휴대폰 번호와 연동되어 있습니다",
            "phone error": "유효하지 않은 휴대폰 번호입니다",
            "unbinded phone": "입력하신 휴대폰 번호는 계정과 연동되어 있지 않습니다",
            "zhanyong phone": "입력하신 휴대폰 번호는 이미 다른 계정과 연동되어 있습니다",
            "Phone Registration": "휴대폰 번호로 회원가입",
            Phone: "휴대폰 번호",
            Code: "인증 코드",
            "Enter Phone": "인증 코드를 전송하기 위해 유효한 휴대폰 번호를 입력해 주세요.",
            "Enter Code": "휴대폰 번호로 인증 코드를 발송하기 위해 오른쪽의 버튼을 터치해 주시고 인증 코드를 입력해 인증을 완료해 주세요.",
            "send old phone1": "",
            "a code": "(으)로 인증 코드를 전송하였습니다.",
            "enter new phone": "인증을 완료하기 위해 인증 코드를 입력해주세요.",
            "quit change fail": "인증이 완료되기 전까지, Moonton 계정은 기존의 휴대폰 번호와 연동되어 있을 것입니다.",
            "change phone success": "휴대폰 번호가 변경되었습니다.",
            "change phone": "휴대폰 번호 변경",
            "password err too many": "오류 횟수 초과. 내일 다시 시도해 주세요.",
            "email verification": "이메일 인증 ({0})",
            "Enter Email Code": "이메일 주소로 인증 코드를 전송하기 위해 오른쪽의 버튼을 클릭하고 인증 코드를 입력해서 인증을 완료해 주세요.",
            "Email verification successful": "이메일 인증에 성공하였습니다. 연동하고 싶은 휴대폰 번호를 입력해 주세요.",
            "phone verification": "휴대폰 인증 ({0})",
            "email sended and goto verify": "{0}으로 인증 이메일이 전송되었습니다. 이메일에 첨부된 링크를 클릭하고 인증을 완료해 주세요.",
            "Phone Number Connected": "휴대폰 번호가 연동되었습니다.",
            "add phone": "휴대폰 번호 연동",
            "add email": "이메일 주소 연동",
            "email verification code holder": "인증 코드",
            "phone verification successful": "휴대폰 인증에 성공하였습니다. 연동하고 싶은 이메일 주소를 입력해 주세요.",
            "change passwrod tip": "주의: 입력한 이메일 주소와 연동되어있는 Moonton 계정의 비밀번호만 변경하실 수 있습니다.",
            "enter call code": "지역번호를 선택해 주세요",
            wait: "오류 횟수 초과. {time}초 후 다시 시도해 주세요.",
            dofrequent: "오류 횟수 초과. 나중에 다시 시도해 주세요.",
            notman: "보안상의 이유로 인해 로그인 요청이 거절되었습니다. 질문이 있다면 고객센터를 통해 연락 바랍니다.",
            hint: "공지",
            "change binding tips": "이메일 변경 사항이 현재 검토 중입니다. 기다려주세요. 사항 검토 중에는 이메일 변경을 취소할 수 있습니다. 이메일 주소를 변경할 수 있는 시간: {x}.",
            "contact customer service": "문의 사항이 있으시면 고객 서비스에 문의해주세요.",
            "i know": "확인",
            "cancel change": "취소",
            "change pass": "이메일 변경이 승인되었습니다. 새로운 이메일 주소를 확인해주세요: {x}",
            "confirm change": "변경",
            LANG_STRID_Accountchangepassword_220501: "비밀번호 재설정 메세지를 받으시려면 연동된 전화번호를 입력하세요.",
            LANG_STRID_Accountchangepassword_220503: "참고: 입력한 전화번호에 연동된 문톤 계정의 암호만 변경할 수 있습니다.",
            LANG_STRID_Accountchangepassword_220504: "이메일 인증",
            LANG_STRID_Accountchangepassword_220505: "귀환",
            LANG_STRID_Accountchangepassword_220506: "문톤 비밀번호 재설정",
            LANG_STRID_Accountchangepassword_220507: "인증 번호 보내기를 눌러 인증 번호를 전화번호로 보내고 인증을 완료하세요.",
            LANG_STRID_Accountchangepassword_220511: "특수 기호가 포함되지 않고, 대/소문자, 숫자가 혼합된 6자 이상의 번호를 사용하세요.",
            LANG_STRID_Accountchangepassword_220513: "잘못된 비밀번호입니다. 다시 시도해주세요.",
            LANG_STRID_Accountchangepassword_220514: "비밀번호가 맞지 않습니다. 다시 시도해주세요.",
            LANG_STRID_Accountchangepassword_220515: "잘못된 인증 번호입니다. 다시 시도해주세요.",
            LANG_STRID_Accountchangepassword_220516: "비밀번호가 재설정되었습니다.",
            LANG_STRID_Accountchangepassword_220517: "인증 번호 보내기",
            LANG_STRID_Accountchangepassword_220518: "로그인 인증",
            LANG_STRID_Accountchangepassword_220519: "인증을 완료하려면 전화번호와 인증 번호를 입력하세요.",
            LANG_STRID_Accountchangepassword_220520: "인증 번호를 받으시려면 올바른 전화 번호를 입력하세요.",
            LANG_STRID_Accountchangepassword_220521: "로그인 공지",
            LANG_STRID_Accountchangepassword_220522: "계정을 전환했습니다. 게임에 다시 접속해주세요.",
            LANG_STRID_Accountchangepassword_220523: "로그인에 성공했습니다. 게임에 다시 접속해주세요.",
            LANG_STRID_Accountchangepassword_220524: "이메일 주소/문톤 계정/전화 번호",
            LANG_STRID_Accountchangepassword_220525: "플레이어님의 Moonton 비밀번호가 재설정되었습니다.",
            LANG_STRID_Accountswitch_220501: "이메일 주소 변경",
            LANG_STRID_Accountswitch_220502: "이메일 {0}로 인증번호 발송",
            LANG_STRID_Accountswitch_220503: "이메일 인증번호",
            LANG_STRID_Accountswitch_220504: "우측 버튼을 탭하여 플레이어님의 이메일 주소로 인증번호를 보내고 인증번호를 입력해 인증을 완료하세요.",
            LANG_STRID_Accountswitch_220505: "핸드폰 {0}로 인정번호 발송",
            LANG_STRID_Accountswitch_220506: "올바른 이메일 주소를 입력해주세요.",
            LANG_STRID_Accountswitch_220507: "플레이어님의 이메일 주소로 인증번호가 발송되었습니다.",
            LANG_STRID_Accountswitch_220508: "아래에 인증번호와 플레이어님의 새로운 이메일 주소를 입력하여 인증을 완료하세요.",
            LANG_STRID_Accountswitch_220509: "인증이 완료될때까지 플레이어님의 Moonton 계정은 기존 이메일 주소와 연동되어있습니다.",
            LANG_STRID_Accountswitch_220510: "새로운 이메일 주소를 입력해주세요.",
            LANG_STRID_Accountswitch_220511: "인증번호를 받으려면 올바른 이메일 주소를 입력해주세요.",
            LANG_STRID_Accountswitch_220512: "정말로 요청을 취소하시겠습니까?",
            LANG_STRID_Accountswitch_220513: "요청 취소",
            LANG_STRID_Accountswitch_220514: "이 요청은 현재 검토중입니다. 기다려주세요. 완료되기 전까지 요청을 취소할 수 있습니다. 플레이어님의 이메일 주소는 {x}일 {y}시간 {z}분 후에 변경할 수 있습니다. 궁금한점이 있으시다면 고객센터로 문의해주세요.",
            LANG_STRID_Accountswitch_220516: "전화 <span>{0}</span>로 인증 코드 보내기",
            LANG_STRID_Accountswitch_220517: "요청이 현재 검토 중입니다. 기다리세요. 이 과정에서 요청을 취소하도록 선택할 수 있습니다. 귀하의 이메일 주소는 <span>{x}d {y}h {z}m</span> 후에 변경할 수 있습니다. 질문이 있는 경우 고객 서비스에 문의해주세요.",
            LANG_STRID_Accountswitch_220518: "이메일 <span>{0}</span>로 인증코드 보내기",
            LANG_STRID_MTregister_221101: "빠른 이메일 등록",
            LANG_STRID_MTregister_221102: "이메일",
            LANG_STRID_MTregister_221103: "Moonton 계정과 비밀번호를 입력하세요.",
            LANG_STRID_MTregister_221104: "Moonton 계정과 비밀번호를 확인하세요.",
            LANG_STRID_MTregister_221105: "비밀번호를 다시 입력해주세요.",
            LANG_STRID_MTregister_221106: "Moonton 유저네임 (선택 사항)",
            LANG_STRID_MTregister_221107: "6-20자의 문자, 밑줄(_) 또는 숫자로 구성되어야 하며 문자로 시작해야 합니다.",
            LANG_STRID_MTregister_221108: "이용약관을 읽었으며 이에 동의합니다.",
            LANG_STRID_MTregister_221109: "Moonton 계정 연동",
            LANG_STRID_MTregister_221110: "인증 이메일이 귀하의 계정에 연동된 이메일로 전송되었습니다. 24시간 이내에 확인해주세요. 이메일을 받지 못한 경우 스팸함에 있는지 확인하세요.",
            LANG_STRID_MTregister_221111: "이메일 인증",
            LANG_STRID_MTregister_221112: "Moonton 계정을 성공적으로 연결했습니다. 이제 Moonton 이메일과 비밀번호로 로그인할 수 있습니다.",
            LANG_STRID_MTregister_221113: "유효하지 않은 이메일",
            LANG_STRID_MTregister_221114: "전화번호를 성공적으로 연동했습니다.",
            LANG_STRID_MTregister_221115: "빠른 전화 등록",
            LANG_STRID_MTregister_221116: "전화번호를 입력하세요.",
            LANG_STRID_MTregister_221117: "본인 확인을 위해 현재 사용 중인 Moonton 계정과 비밀번호를 입력하세요.",
            LANG_STRID_MTregister_221118: "유효하지 않은 전화 번호",
            LANG_STRID_MTregister_221119: "비밀번호가 일치하지 않습니다. 다시 입력하세요.",
            LANG_STRID_accinterception03: "현재 네트워크가 불안정합니다. 다시 시도해 주세요.",
            LANG_STRID_Accountswitch_220519: "Moonton 계정 이름 (필수)",
            LANG_STRID_UnbindPhone_230701: "현재 연동된 전화번호는 {0}입니다.",
            LANG_STRID_UnbindPhone_230702: "한번 연동을 해제하면, 해당 전화번호는 더 이상 비밀번호로 게임에 로그인할 때 귀하의 Moonton 계정 아이디로 사용될 수 없습니다.",
            LANG_STRID_UnbindPhone_230703: "전화번호 연동을 해제하기 전에 Moonton 계정을 이메일에 연동하는 것이 좋습니다.",
            LANG_STRID_UnbindPhone_230704: "전화번호 연동 해제",
            LANG_STRID_UnbindPhone_230705: "계정에 Moonton 이메일을 연결하지 않았습니다. Moonton 이메일을 연결한 후 다시 시도하세요.",
            LANG_STRID_UnbindPhone_230706: "아래 버튼을 눌러 연결된 Moonton 이메일 {0}로 확인 코드를 전송하세요.",
            LANG_STRID_UnbindPhone_230707: "확인 코드가 귀하의 Moonton 이메일 주소 {0}로 전송되었습니다. 확인해주세요.",
            LANG_STRID_UnbindPhone_230708: "연동된 전화번호를 성공적으로 해제하였습니다.",
            passwordError: "입력하신 비밀번호가 올바르지 않습니다. 다시 시도해주세요.",
            passwordErrorWait: "입력하신 비밀번호가 올바르지 않습니다. {x}분 {y}초 후 다시 시도해주세요.",
            passwordErrorWaitSec: "입력하신 비밀번호가 올바르지 않습니다. {y}초 후 다시 시도해주세요.",
            enterEmailTip: "저희 메시지를 받으시려면 유효한 메일 주소를 입력해 주세요.",
            sendEmailTip: '"인증 코드 발송"을 탭하면 기입하신 이메일로 인증 코드를 발송해 드립니다. 인증 코드를 입력하여 인증을 완료해 주세요.',
            logInViaAccountPassword: "계정 비밀번호를 이용한 로그인",
            logInViaEmailVerification: "이메일 인증을 통한 로그인",
            enterEmailFirst: "이메일을 먼저 입력해주세요",
            verificationCodeError: "올바르지 않은 코드입니다. 다시 시도해주세요.",
            unbindEmail: "해당 이메일은 Moonton 계정에 연동되어 있지 않습니다"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Alamat E-Mel",
            Password: "Kata Laluan",
            "Sign up": "Daftar",
            "Forgot password": "Terlupa Kata Laluan",
            "Create Your Moonton Account": "Cipta Akaun Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Sila masukkan alamat emel yang sah untuk menerima maklumat permainan terkini",
            "Re-Enter Password": "Sahkan Kata Laluan",
            "Please agree to the Moonton": "Sila bersetuju dengan Moonton",
            "terms of service": "Terma Perkhidmatan",
            Submit: "Hantar",
            "E-Mail format error": "Alamat emel tidak sah",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Gunakan 6 atau lebih aksara dengan gabungan huruf besar dan kecil, nombor dan tiada simbol istimewa",
            "These passwords dont' match": "Kata laluan tidak sepadan",
            "Please enter your email address": "Sila masukkan alamat emel anda",
            "Please enter your password": "Sila masukkan kata laluan anda",
            "Please confirm your password": "Sila sahkan kata laluan anda",
            "Please agree to the Moonton Terms of Service": "Sila setuju dengan Terma Perkhidmatan Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Satu emel pengesahan telah dihantar ke alamat emel anda. Sila tekan pautan yang disertakan di dalam emel dan lengkapkan pengesahan. Jika anda tidak dapat melihat emel tersebut, sila semak ruangan 'junk'",
            Confirm: "Sahkan",
            "Please enter your email address to receive the email with a new password.": "Sila masukkan emel anda yang telah disambung untuk menerima emel reset kata laluan.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Satu emel set semula telah dihantar ke emel anda yang telah disambungkan. Sila semak emel tersebut di dalam tempoh yang ditetapkan!",
            Continue: "Sambung",
            "Sign in with your Moonton Account": "Log masuk menggunakan Akaun Moonton",
            "Sign in": "Log Masuk",
            Congratulations: "Tahniah",
            "Your email": "Akaun anda (",
            "is confirmed. Thank you!": ") telah diciptakan. Selamat bermain!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technoligy Co., Ltd.",
            Notice: "Notis",
            "Your account has already been confirmed.": "Akaun telah diciptakan",
            "The link has expired Please request a new link in-gme. Thank you.": "Pautan telah tamat tempoh. Sila hantar semua pautan didalam permainan",
            "Reset Password": "Reset Kata Laluan",
            "New Password": "Kata Laluan Baharu",
            "Re-Enter-Password": "Sahkan Kata Laluan",
            "Please confirm your new password": "Sila sahkan kata laluan anda",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Kata laluan telah ditukar. Sila log masuk semula menggunakan kata laluan baru anda.",
            "Bind your Moonton Account": "Sambung Akaun Moonton",
            "Check Your Email": "Periksa Emel",
            "Re-enter email": "Sahkan Emel",
            "Email incompatible": "Alamat emel tidak sepadan",
            "Please enter your password again": "Sahkan Kata Laluan",
            "Moonton Account": "Akaun Moonton",
            "account rule": "Gunakan 6-20 huruf, nombor, atau _ dan mulakan dengan huruf",
            "Send Verification Email": "Hantar Emel",
            "to email": "Satu emel pengesahan telah dihantar ke",
            "sended email": "Sila periksa emel didalam kotak mel anda.",
            "change email": "Tukar Alamat Emel",
            "Email Registration": "Daftar menggunakan Emel",
            "Quick Registration": "Daftar Segera",
            "Accept the agreement and register": "TERIMA PERJANJIAN & DAFTAR",
            "same account": "Nama pengguna telah wujud. Sila cuba dengan yang lain.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Sila masukkan kata laluan untuk akaun Moonton semasa untuk pengesahan",
            "congratulations account": "Tahniah! Anda telah mencipta Akaun Moonton dan sambungkannya kepada kemajuan permainan semasa anda.",
            "empty email": "Untuk keselamatan akaun anda, kami menyarankan supaya anda menyambungkan akaun anda kepada satu alamat emel supaya anda dapat log masuk kedalam akaun menggunakan alamat emel dan tukarkan kata laluan anda.",
            "used email": "Alamat emel tersebut telah disambungkan kepada akaun lain. Sila cuba yang lain atau log masuk akaun tersebut melalui Tukar Akaun",
            "useful email": "Satu emel pengesahan telah dihantar kepada alamat emel anda yang didaftarkan. Sila tekan pautan yang disertakan didalam emel dan lengkapkan pengesahan didalam tempoh 24 jam",
            "Connect to Email": "Sambungkan emel",
            unreset: "Anda tidak boleh set semula kata laluan jika Akaun Moonton anda tidak disambungkan kepada satu alamat emel.",
            emailtime1: "Anda boleh menghantar semula emel tersebut didalam",
            emailtime2: "s.",
            "have fun": "Akaun disambungkan. Selamat Bermain!",
            "continue bind email": "Sambung Alamat Emel",
            "server error": "Server agak sibuk sekarang. Sila cuba lagi nanti.",
            "wrong content": "Keperluan tidak dicapai",
            "enter right account": "Sila masukkan alamat emel atau akaun Moonton yang sah.",
            "reset email": "Tukar Alamat Emel",
            "send email1": "Satu emel pengesahan akan dihantar ke {x}. Sila tekan pautan yang disertakan dalam emel untuk melengkapkan perubahan.",
            "send email2": "Sila tekan pautan yang telah disertakan didalam emel untuk melengkapkan perubahan.",
            "send email": "Hantar Emel",
            "sended email1": "Emel pengesahan telah dihantar ke",
            "sended email2": "Anda boleh menghantar semula emel didalam",
            "sended email3": "s.",
            "sended email4": "Emel pengesahan telah dihantar ke",
            "sended email5": "Nota: Sebelum perubahan dilengkapkan, akaun anda masih disambungkan kepada alamat emel lama.",
            "empty code": "Kod pengesahan tidak boleh kosong",
            "wrong code": "Kod pengesahan tidak sah",
            "enter new email code": "Sila masukkan kod pengesahan",
            "enter new email": "Alamat Emel Baharu",
            "send code fail": "Operasi gagal.",
            "send code success": "Kod pengesahan telah dihantar",
            "reset email success": "Alamat emel telah ditukar.",
            "reset emial fail": "Operasi tidak berjaya. Sila cuba lagi.",
            "binded email": "Alamat emel telah disambung ke akaun lain",
            "send email fail": "Operasi tidak berjaya. Sila periksa jika anda telah menyambungkan akaun Moonton dan alamat emel.",
            "send code": "Hantar kod",
            "outdata link": "Pautan telah tamat tempoh.",
            registed: "Alamat emel telah disambungkan ke akaun lain. Sila cuba yang lain.",
            frequent: "Terlalu banyak percubaan gagal. Sila cuba lagi nanti.",
            "phone code wrong": "Kod pengesahan tidak sah",
            "binded phone": "Akaun telah disambungkan kepada nombor telefon",
            "phone error": "Nombor telefon tidak sah",
            "unbinded phone": "Nombor telefon tidak didaftarkan kepada suatu akaun",
            "zhanyong phone": "Nombor telefon telah didaftarkan kepada suatu akaun",
            "Phone Registration": "Daftar menggunakan Telefon",
            Phone: "Nombor Telefon",
            Code: "Kod Pengesahan",
            "Enter Phone": "Sila masukkan nombor telefon yang sah untuk menerima kod pengesahan",
            "Enter Code": "Tekan butang disebelah kanan untuk menghantar kod pengesahan ke nombor telefon anda dan masukkan kod untuk melengkapkan pengesahan",
            "send old phone1": "Hantar kod pengesahan ke",
            "a code": ".",
            "enter new phone": "Sila masukkan kod pengesahan untuk melengkapkan pengesahan",
            "quit change fail": "Sehingga pengesahan selesai, akaun Moonton anda akan tetap disambungkan ke nombor telefon lama.",
            "change phone success": "Nombor telefon berubah.",
            "change phone": "Tukar Nombor Telefon",
            "password err too many": "Terlalu banyak percubaan gagal. Sila cuba lagi esok.",
            "email verification": "Emel Pengesahan ({0})",
            "Enter Email Code": "Tekan butang disebelah kanan untuk menghantar kod pengesahan ke nombor telefon anda dan masukkan kod untuk melengkapkan pengesahan",
            "Email verification successful": "Pengesahan emel berjaya.Sila masukkan nombor telefon yang anda ingin sambung",
            "phone verification": "PengesahanTelefon ({0})",
            "email sended and goto verify": "Emel pengesahan telah dihantar ke {0}. Sila tekan pautan yang disertakan didalm emel dan lengkapkan pengesahan",
            "Phone Number Connected": "Nombor telefon disambung.",
            "add phone": "Sambung Nombor Telefon",
            "add email": "Sambung Alamat Emel",
            "email verification code holder": "Kod Pengesahan",
            "phone verification successful": "Pengesahan telefon berjaya. Sila masukkan alamat emel yang anda ingin sambung.",
            "change passwrod tip": "Nota: Anda hanya boleh menukar kata laluan untuk akaun Moonton yang disambung kepada alamat emel yang anda masukkan.",
            "enter call code": "Sila masukkan kod kawasan anda",
            wait: "Terlalu banyak percubaan. Sila cuba lagi dalam {masa}s.",
            dofrequent: "Terlalu banyak percubaan. Sila cuba lagi nanti.",
            notman: "Atas alasan keselamatan, permintaan log masuk anda ditolak. Sila hubungi Khidmat Pelanggan jika anda mempunyai sebarang persoalan.",
            hint: "Notis",
            "change binding tips": "Penukaran emel kini dalam semakan. Sila tunggu. Anda boleh membatalkan penukaran ketika proses ini. Masa sebelum anda dapat menukar alamat emel: {x}.",
            "contact customer service": "Jika anda mempunyai sebarang persoalan, sila hubungi Khidmat Pelanggan",
            "i know": "Baik",
            "cancel change": "Batal",
            "change pass": "Penukaran emel anda sudah diluluskan, sila sahkan alamat emel baharu anda: {x}",
            "confirm change": "Tukar",
            LANG_STRID_Accountchangepassword_220501: "Sila masukkan nombor telefon anda yang disambungkan untuk menerima mesej tetapan semula kata laluan.",
            LANG_STRID_Accountchangepassword_220503: "Nota: Anda hanya boleh menukar kata laluan untuk akaun Moonton yang disambungkan ke nombor telefon yang anda masukkan.",
            LANG_STRID_Accountchangepassword_220504: "Pengesahan email",
            LANG_STRID_Accountchangepassword_220505: "Kembali",
            LANG_STRID_Accountchangepassword_220506: "Tetapkan semula Kata Laluan Moonton",
            LANG_STRID_Accountchangepassword_220507: "Tekan Hantar Kod untuk menghantar kod pengesahan ke nombor telefon anda dan masukkan kod untuk melengkapkan pengesahan.",
            LANG_STRID_Accountchangepassword_220511: "Gunakan 6 atau lebih aksara dengan gabungan huruf besar dan huruf kecil, nombor dan tiada simbol khas.",
            LANG_STRID_Accountchangepassword_220513: "Kata laluan tidak sah. Sila cuba lagi.",
            LANG_STRID_Accountchangepassword_220514: "Kata laluan tidak sepadan. Sila cuba lagi.",
            LANG_STRID_Accountchangepassword_220515: "Kod pengesahan tidak sah. Sila cuba lagi.",
            LANG_STRID_Accountchangepassword_220516: "Kata laluan anda telah ditetapkan semula.",
            LANG_STRID_Accountchangepassword_220517: "Dapatkan kod",
            LANG_STRID_Accountchangepassword_220518: "Pengesahan Log Masuk",
            LANG_STRID_Accountchangepassword_220519: "Sila masukkan nombor telefon dan kod pengesahan anda untuk melengkapkan pengesahan.",
            LANG_STRID_Accountchangepassword_220520: "Sila masukkan nombor telefon yang sah untuk menerima kod pengesahan.",
            LANG_STRID_Accountchangepassword_220521: "Notis Log Masuk",
            LANG_STRID_Accountchangepassword_220522: "Akaun ditukar. Sila masukkan semula permainan.",
            LANG_STRID_Accountchangepassword_220523: "Log masuk berjaya. Sila masukkan semula permainan.",
            LANG_STRID_Accountchangepassword_220524: "Alamat E-mel/Akaun Moonton/Nombor Telefon",
            LANG_STRID_Accountchangepassword_220525: "Kata laluan Moonton anda telah ditetapkan semula.",
            LANG_STRID_Accountswitch_220501: "Tukar Alamat E-mel",
            LANG_STRID_Accountswitch_220502: "Hantar Kod Pengesahan ke E-mel {0}",
            LANG_STRID_Accountswitch_220503: "Kod Pengesahan E-mel",
            LANG_STRID_Accountswitch_220504: "Tekan butang di sebelah kanan untuk menghantar kod pengesahan ke alamat e-mel anda dan masukkan kod untuk melengkapkan pengesahan.",
            LANG_STRID_Accountswitch_220505: "Hantar Kod Pengesahan ke Telefon {0}",
            LANG_STRID_Accountswitch_220506: "Sila masukkan alamat emel yang sah.",
            LANG_STRID_Accountswitch_220507: "Kod pengesahan telah dihantar ke alamat emel anda.",
            LANG_STRID_Accountswitch_220508: "Sila masukkan kod pengesahan dan alamat emel baharu anda di bawah dan lengkapkan pengesahan.",
            LANG_STRID_Accountswitch_220509: "Sehingga pengesahan selesai, akaun Moonton anda masih disambungkan ke alamat emel anda yang terdahulu.",
            LANG_STRID_Accountswitch_220510: "Sila masukkan alamat emel baharu anda.",
            LANG_STRID_Accountswitch_220511: "Sila masukkan alamat emel yang sah untuk menerima kod pengesahan.",
            LANG_STRID_Accountswitch_220512: "Adakah anda pasti mahu membatalkan permintaan?",
            LANG_STRID_Accountswitch_220513: "Batal permintaan",
            LANG_STRID_Accountswitch_220514: "Permintaan sedang dalam semakan. Sila tunggu. Anda boleh memilih untuk membatalkan permintaan semasa proses ini. Alamat emel anda boleh ditukar dalam {x}h {y}j {z}m. Jika anda mempunyai sebarang pertanyaan, sila hubungi Khidmat Pelanggan.",
            LANG_STRID_Accountswitch_220516: "Hantar Kod Pengesahan ke Telefon <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Permintaan itu sedang dalam semakan. Sila tunggu. Anda boleh memilih untuk membatalkan permintaan semasa proses ini. Alamat e-mel anda boleh ditukar dalam <span>{x}d {y}h {z}m</span>. Jika anda mempunyai sebarang pertanyaan, sila hubungi Khidmat Pelanggan.",
            LANG_STRID_Accountswitch_220518: "Hantar Kod Pengesahan ke e-mel <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Pendaftaran E-mel Pantas",
            LANG_STRID_MTregister_221102: "E-mel",
            LANG_STRID_MTregister_221103: "Sila masukkan akaun dan kata laluan Moonton anda",
            LANG_STRID_MTregister_221104: "Sila sahkan akaun dan kata laluan Moonton anda",
            LANG_STRID_MTregister_221105: "Sila masukkan semula kata laluan anda",
            LANG_STRID_MTregister_221106: "Nama Pengguna Moonton (pilihan)",
            LANG_STRID_MTregister_221107: "Mesti terdiri daripada 6-20 huruf, garis bawah atau nombor dan mesti bermula dengan huruf.",
            LANG_STRID_MTregister_221108: "Saya telah membaca dan bersetuju dengan Syarat Penggunaan.",
            LANG_STRID_MTregister_221109: "Sambungkan Akaun Moonton Anda",
            LANG_STRID_MTregister_221110: "E-mel pengesahan telah dihantar ke e-mel yang disambung pada akaun anda. Sila sahkan dalam masa 24 jam. Jika anda belum menerima e-mel, sila semak folder sampah untuk melihat sama ada ia ada di sana.",
            LANG_STRID_MTregister_221111: "Sahkan dengan e-mel",
            LANG_STRID_MTregister_221112: "Anda telah berjaya menyambungkan Akaun Moonton anda. Kini anda boleh log masuk dengan e-mel dan kata laluan Moonton anda.",
            LANG_STRID_MTregister_221113: "E-mel tidak sah",
            LANG_STRID_MTregister_221114: "Anda telah berjaya menyambungkan nombor telefon anda.",
            LANG_STRID_MTregister_221115: "Pendaftaran Telefon Pantas",
            LANG_STRID_MTregister_221116: "Masukkan nombor telefon anda",
            LANG_STRID_MTregister_221117: "Sila masukkan akaun Moonton dan kata laluan yang anda sedang gunakan untuk membantu kami untuk mengesahkan identiti anda.",
            LANG_STRID_MTregister_221118: "Nombor telefon tidak sah",
            LANG_STRID_MTregister_221119: "Kata laluan anda tidak sepadan. Sila masukkan semula.",
            LANG_STRID_accinterception03: "Rangkaian semasa anda tidak stabil, sila cuba lagi.",
            LANG_STRID_Accountswitch_220519: "Nama Pengguna Moonton (diperlukan)",
            LANG_STRID_UnbindPhone_230701: "Nombor telefon semasa anda yang disambungkan adalah {0}. ",
            LANG_STRID_UnbindPhone_230702: "Setelah diputuskan sambungan, nombor telefon tidak lagi boleh digunakan sebagai ID akaun Moonton anda untuk log masuk ke dalam permainan dengan kata laluan.",
            LANG_STRID_UnbindPhone_230703: "Adalah disyorkan untuk menyambungkan akaun Moonton anda ke e-mel sebelum memutuskan sambungan nombor telefon anda.",
            LANG_STRID_UnbindPhone_230704: "Putuskan sambungan Nombor Telefon",
            LANG_STRID_UnbindPhone_230705: "Anda belum menyambungkan e-mel Moonton ke akaun anda. Sila cuba lagi selepas menyambungkan e-mel Moonton.",
            LANG_STRID_UnbindPhone_230706: "Tekan butang di bawah untuk menghantar kod pengesahan ke e-mel Moonton anda yang disambungkan {0}.",
            LANG_STRID_UnbindPhone_230707: "Kod pengesahan telah dihantar ke alamat e-mel Moonton anda {0}. Sila periksanya.",
            LANG_STRID_UnbindPhone_230708: "Anda telah berjaya memutuskan sambungan nombor telefon anda.",
            passwordError: "Kata laluan yang anda masukkan tidak betul. Sila cuba lagi.",
            passwordErrorWait: "Kata laluan yang anda masukkan tidak betul. Sila cuba lagi dalam {x} minit {y} saat.",
            passwordErrorWaitSec: "Kata laluan yang anda masukkan tidak betul. Sila cuba lagi dalam {y} saat.",
            enterEmailTip: "Sila masukkan alamat e-mel yang sah untuk menerima mesej kami.",
            sendEmailTip: 'Klik "Hantar Kod Pengesahan" dan kami akan menghantar e-mel yang mengandungi kod pengesahan ke alamat e-mel yang anda berikan. Masukkan kod untuk melengkapkan proses pengesahan.',
            logInViaAccountPassword: "Log masuk melalui kata laluan akaun",
            logInViaEmailVerification: "Log masuk melalui pengesahan e-mel",
            enterEmailFirst: "Sila masukkan alamat e-mel anda terlebih dahulu",
            verificationCodeError: "Kod pengesahan tidak sah. Sila cuba lagi.",
            unbindEmail: "E-mel ini tidak disambungkan ke akaun Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Email Address",
            Password: "Password",
            "Sign up": "Sign Up",
            "Forgot password": "Password ေမ့သြားၿပီ",
            "Create Your Moonton Account": "Moonton Account ဖြင့္မည္",
            "To obtain the latest information about us, please sign up with a valid email": "Game နဲ႔ပက္သက္တဲ့အေၾကာင္းအရာေတြကိုအၿမဲသိရွိေနဖို႔အတြက္မွန္ကန္တဲ့ Email Address ကိုေက်းဇူးျပဳၿပီးျဖည့္ေပးပါ",
            "Re-Enter Password": "အတည္ျပဳ Password",
            "Please agree to the Moonton": "Moonton ကျပဌာန္းထားသည္မ်ားကိုေက်းဇူးျပဳၿပီးသေဘာတူလက္ခံေပးပါ",
            "terms of service": "Terms of Service",
            Submit: "တင္သြင္းမည္",
            "E-Mail format error": "Email Address မမွန္ပါ",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "ေက်းဇူးျပဳၿပီးအနည္းဆုံး Character 6 လုံးနဲ႔အထက္ကိုအသုံးျပဳေပးပါ၊ Uppercase နဲ႔ Lowercase Letters မ်ား၊ နံပါတ္မ်ားကိုအသုံးျပဳႏိုင္ၿပီး Special symbols မ်ားကိုေတာ့အသုံးမျပဳႏိုင္ပါ",
            "These passwords dont' match": "Password ႏွစ္ခုမတူပါ",
            "Please enter your email address": "လူႀကီးမင္းရဲ႕ Email Address ကိုေက်းဇူးျပဳၿပီးထည့္ေပးပါ",
            "Please enter your password": "လူႀကီးမင္းရဲ႕ Password ကိုေက်းဇူးျပဳၿပီးထည့္ေပးပါ",
            "Please confirm your password": "လူႀကီးမင္းရဲ႕ Password ကိုေက်းဇူးျပဳၿပီးေသခ်ာေအာင္ထပ္ထည့္ေပးပါ",
            "Please agree to the Moonton Terms of Service": "Moonton က ျပဌာန္းထားသည့္ Terms of Service မ်ားကို ေက်းဇူးျပဳၿပီး သေဘာတူလက္ခံေပးပါ",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "လူႀကီးမင္းရဲ႕ Email Address ထံသို႔အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ။ ေက်းဇူးျပဳၿပီးထို Email ထဲမွာပါတဲ့ Link ထဲသို႔ဝင္ၿပီးအတည္ျပဳေပးပါ။ တကယ္လို႔ ထို Email ကိုမေတြ႕ပါက Junk Folder ထဲမွာစစ္ေပးပါ။",
            Confirm: "အတည္ျပဳမည္",
            "Please enter your email address to receive the email with a new password.": "ေက်းဇူးျပဳၿပီး Password reset email ရရွိဖို႔ သင့္ရဲ႕ခ်ိတ္ဆက္ထားတဲ့ email address ကိုထည့္ေပးပါ",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "လူႀကီးမင္းရဲ႕ခ်ိတ္ဆက္ထားတဲ့ Email ထံသို႔ Password reset email ပို႔ၿပီးပါၿပီ၊ Email ကိုတစ္ခ်က္စစ္ေပးပါ။",
            Continue: "ဆက္လုပ္မည္",
            "Sign in with your Moonton Account": "Moonton Account ျဖင့္ Login ဝင္မည္",
            "Sign in": "Login",
            Congratulations: "ဂုဏ်ယူပါတယ်",
            "Your email": "လူကြီးမင်းရဲ့ Account (",
            "is confirmed. Thank you!": ") ကိုဖွင့်ပြီးပါပြီ၊ ပျော်ပျော်ရွှင်ရွှင်ဆော့နိုင်ပါပြီနော်!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "မွတ္ခ်က္",
            "Your account has already been confirmed.": "Account ဖြင့္ၿပီးပါၿပီ",
            "The link has expired Please request a new link in-gme. Thank you.": "Link ေသသြားပါၿပီ၊ ေက်းဇူးျပဳၿပီး Game ထဲမွ Link ထပ္ပို႔ေပးပါ။",
            "Reset Password": "Password ပြန်ပြောင်းမည်",
            "New Password": "Password အသစ်",
            "Re-Enter-Password": "အတည်ပြု Password",
            "Please confirm your new password": "လူႀကီးမင္းရဲ႕ Password ကို ေသခ်ာေအာင္ထပ္ထည့္ေပးပါ",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Password ပြောင်းပြီးပါပြီ၊ လူကြီးမင်းရဲ့ Password အသစ်ဖြင့် Login ဝင်ပေးပါ။",
            "Bind your Moonton Account": "Moonton Account ခ်ိတ္မည္",
            "Check Your Email": "Email စစ္မည္",
            "Re-enter email": "Email ေသခ်ာၿပီ",
            "Email incompatible": "Email Addresses ႏွစ္ခုမတူပါ",
            "Please enter your password again": "အတည္ျပဳ Password",
            "Moonton Account": "Moonton Account",
            "account rule": "စကားလုံး 6လုံး မွအလုံး 20 အထိ, ဂဏန္းမ်ား, _ သုံးၿပီး စကားလုံး နဲ႔စတဲ့မည္သည့္စကားလုံးျဖင့္စရမည္",
            "Send Verification Email": "Email ပို႔မည္",
            "to email": "အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ",
            "sended email": "Mailbox ထဲမွာ Email တစ္ခ်က္စစ္ေပးပါ",
            "change email": "Email Address ေျပာင္းမည္",
            "Email Registration": "Email ျဖင့္ Sign Up ျပဳလုပ္မည္",
            "Quick Registration": "Quick Sign Up",
            "Accept the agreement and register": "စာခ်ဳပ္ပါသေဘာတူညီခ်က္မ်ားကိုသေဘာတူၿပီး Sign Up လုပ္မည္",
            "same account": "Username ရွိၿပီးသားျဖစ္ေနပါတယ္၊ တစ္ျခားတစ္ခုေျပာင္းထည့္ၾကည့္ပါ",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "အတည္ျပဳဖို႔လက္ရွိ Moonton Account ရဲ႕ Password ကိုထည့္ေပးပါ",
            "congratulations account": "ဂုဏ္ယူပါတယ္! လူႀကီးမင္းရဲ႕ Game Progress မ်ားကိုလက္ရွိ Account သို႔ခ်ိတ္ဆက္ၿပီးပါၿပီ။",
            "empty email": "လူႀကီးမင္းရဲ႕ Account လုံၿခဳံေရးအတြက္ လူႀကီးမင္းရဲ႕ Email Address နဲ႔ Account ကို ခ်ိတ္ဆက္ေပးဖို႔ အႀကံျပဳလိုပါတယ္၊ သို႔မွသာ ထို Email Address ျဖင့္ login ဝင္ႏိုင္မွာျဖစ္ၿပီး Password မ်ားေျပာင္းႏိုင္မွာျဖစ္ပါတယ္။",
            "used email": "Email Address ဟာ တျခား Account တစ္ခုနဲ႔ ခ်ိတ္ဆက္ၿပီးပါၿပီ။ Switch Account မွတစ္ဆင့္ Account ေျပာင္းခ်ိတ္ၾကည့္ျခင္း သို႔မဟုတ္ တစ္ျခားနည္းျဖင့္ႀကိဳးစားၾကည့္ပါဦး။",
            "useful email": "လူႀကီးမင္းရဲ႕ Email Address ထံသို႔အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ။ေက်းဇူးျပဳၿပီးထို Email ထဲမွာပါတဲ့ Link ထဲသို႔ဝင္ၿပီး 24 နာရီအတြင္းအတည္ျပဳေပးပါ။တကယ္လို႔ထို Email ကိုမေတြ႕ပါက Junk Folder ထဲမွာစစ္ေပးပါ။",
            "Connect to Email": "Email ခ်ိတ္မည္",
            unreset: "တကယ္လို႔သင့္ရဲ႕ Email Address က Moonton Account ခ်ိတ္ဆက္မထားဘူးဆိုရင္ Password ေျပာင္းလဲလို႔ရမည္မဟုတ္ပါ။",
            emailtime1: "သင္ Email ကို ေအာက္ပါအခ်ိန္အတြင္း ျပန္လည္ေပးပို႔ခိုင္းႏိုင္ပါတယ္",
            emailtime2: "s.",
            "have fun": "Account ဖြင့္ၿပီးပါၿပီ၊ ေပ်ာ္ေပ်ာ္႐ႊင္႐ႊင္ေဆာ့ႏိုင္ပါၿပီေနာ္!",
            "continue bind email": "Email Address ခ်ိတ္မည္",
            "server error": "Server ၾကပ္ေနပါတယ္၊ ခဏေနမွတစ္ဖန္ျပန္ႀကိဳးစားၾကည့္ပါ။",
            "wrong content": "လိုအပ္ခ်က္မ်ားမျပည့္စုံပါ။",
            "enter right account": "ေက်းဇူးျပဳၿပီး မွန္ကန္တဲ့ Email Address သို႔မဟုတ္ Moonton Account ကိုထည့္ေပးပါ။",
            "reset email": "Email Address ေျပာင္းမည္",
            "send email1": "{x} သို႔ အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ။ Email တြင္ပါေသာ Link ကိုႏွိတ္ၿပီး ေျပာင္းလဲမႈကို အတည္ျပဳပါ။",
            "send email2": ". ေက်းဇူးျပဳၿပီး ထို Email ထဲမွာပါတဲ့ Link ထဲသို႔ဝင္ၿပီး ေျပာင္းလဲေပးပါ။",
            "send email": "Email ပို႔မည္",
            "sended email1": "အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ",
            "sended email2": ". သင္ Email ကို ေအာက္ပါအခ်ိန္အတြင္း ျပန္လည္ေပးပို႔ခိုင္းႏိုင္ပါတယ္",
            "sended email3": "s.",
            "sended email4": "အတည္ျပဳ Email ပို႔လိုက္ပါၿပီ",
            "sended email5": ". ေျပာင္းလဲမႈေတြ မလုပ္ခင္အထိ သင့္ရဲ႕ Account ဟာ နဂို Email Address အေဟာင္းနဲ႔သာ ခ်ိတ္ဆက္ထားမွာျဖစ္ပါတယ္။",
            "empty code": "အတည်ပြု Code ထည့်ရန်လိုအပ်သည်",
            "wrong code": "အတည်ပြု Code မမှန်ပါ",
            "enter new email code": "ကျေးဇူးပြုပြီး အတည်ပြု Code ထည့်ပေးပါ",
            "enter new email": "Email Address အသစ်",
            "send code fail": "လုပ်ဆောင်ချက်မအောင်မြင်ပါ။",
            "send code success": "အတည်ပြု Code ပို့လိုက်ပါပြီ",
            "reset email success": "Email Address ပြောင်းပြီးပါပြီ။",
            "reset emial fail": "လုပ္ေဆာင္ခ်က္ မေအာင္ျမင္ပါ။ ေက်းဇူးျပဳၿပီး ထပ္ႀကိဳးစားၾကည့္ေပးပါ။",
            "binded email": "Email Address ဟာ တျခား Account တစ္ခုနဲ႔ခ်ိတ္ဆက္ၿပီးပါၿပီ။",
            "send email fail": "လုပ္ေဆာင္ခ်က္ မေအာင္ျမင္ပါ။ ေက်းဇူးျပဳၿပီးလူႀကီးမင္းရဲ႕ Email Address နဲ႔ Moonton Account ခ်ိတ္ဆက္ထားျခင္း ရွိမရွိတစ္ခ်က္စစ္ေဆးေပးပါ။",
            "send code": "Code ပို့ပေးပါ",
            "outdata link": "Link သေသွားပါပြီ",
            registed: "Email Address ဟာ တစ္ျခား Account တစ္ခုနဲ႔ ခ်ိတ္ဆက္ၿပီးပါၿပီ။ ေနာက္တစ္နည္းႀကိဳးစားၾကည့္ေပးပါ။",
            frequent: "တစ္ႀကိမ္မွ မေအာင္ျမင္ပါ၊ ေက်းဇူးျပဳၿပီး ခဏၾကာမွ ေနာက္တစ္ႀကိမ္ႀကိဳးစားၾကည့္ေပးပါ။",
            "phone code wrong": "အတည္ျပဳ Code မမွန္ပါ",
            "binded phone": "ယခု Account ဟာ Phone Number တစ္ခုနဲ႔ခ်ိတ္ဆက္ၿပီးျဖစ္ပါတယ္",
            "phone error": "Phone Number မမွန္ပါ",
            "unbinded phone": "ယခု Phone Number ဟာ Moonton Account ခ်ိတ္ဆက္ထားျခင္းမရွိပါ",
            "zhanyong phone": "ယခု Phone Number ဟာ Moonton Account ခ်ိတ္ဆက္ထားၿပီးျဖစ္ပါတယ္",
            "Phone Registration": "Phone ျဖင့္ Sign Up ျပဳလုပ္မည္",
            Phone: "Phone Number",
            Code: "အတည္ျပဳ Code",
            "Enter Phone": "အတည္ျပဳ Code ရဖို႔မွန္ကန္တဲ့ Phone Number ထည့္ပါ",
            "Enter Code": "ညာဘက္မွာရွိတဲ့ ခလုတ္ ကို ႏွိပ္ၿပီးလူႀကီးမင္းရဲ႕ Phone Number ထဲသို႔ ပို႔ေပးတဲ့အတည္ျပဳ Code ကိုထည့္ၿပီးအတည္ျပဳျခင္းလုပ္ငန္းစဥ္ကို ၿပီးေျမာက္ေအာင္လုပ္ေဆာင္ႏိုင္ပါတယ္။",
            "send old phone1": "အတည္ျပဳ Code ကိုပို႔ေပးပါ",
            "a code": ".",
            "enter new phone": "အတည္ျပဳ Code ကို ထည့္ၿပီးအတည္ျပဳျခင္းလုပ္ငန္းစဥ္ကို ၿပီးေျမာက္ေအာင္လုပ္ေဆာင္ႏိုင္ပါတယ္။",
            "quit change fail": "အတည္ျပဳျခင္း လုပ္ငန္းစဥ္မၿပီးေသးသမွ် လူႀကီးမင္းရဲ႕ Moonton Account ဟာအရင္ Phone Number နဲ႔ပဲခ်ိတ္ဆက္ၿပီးသားျဖစ္ေနမွာပါ။",
            "change phone success": "Phone Number ေျပာင္းၿပီးသြားပါၿပီ။",
            "change phone": "Phone Number ေျပာင္းမည္",
            "password err too many": "တစ္ႀကိမ္မွမေအာင္ျမင္ပါ၊ ေက်းဇူးျပဳၿပီးမနက္ဖန္မွႀကိဳးစားၾကည့္ေပးပါ။",
            "email verification": "Email Verification ({0})",
            "Enter Email Code": "ညာဘက္မွာရွိတဲ့ ခလုတ္ ကို ႏွိပ္ၿပီးလူႀကီးမင္းရဲ႕ Email Address ထဲသို႔ ပို႔ေပးတဲ့အတည္ျပဳ Code ကိုထည့္ၿပီးအတည္ျပဳျခင္းလုပ္ငန္းစဥ္ကို ၿပီးေျမာက္ေအာင္လုပ္ေဆာင္ႏိုင္ပါတယ္။",
            "Email verification successful": "Email အတည္ျပဳမႈလုပ္ငန္းစဥ္ေအာင္ျမင္ပါတယ္၊ ေက်းဇူးျပဳၿပီး လူႀကီးမင္းခ်ိတ္ဆက္လိုေသာ Phone Number ထည့္ေပးပါ။",
            "phone verification": "Phone Verification ({0})",
            "email sended and goto verify": "{0} ကိုအတည္ျပဳ Email ပို႔လိုက္ပါၿပီ၊ ေက်းဇူးျပဳၿပီးထို Email ထဲမွာပါတဲ့ Link ထဲသို႔ ဝင္ၿပီးအတည္ျပဳျခင္းလုပ္ငန္းစဥ္ကို ၿပီးေျမာက္ေအာင္လုပ္ေဆာင္ႏိုင္ပါတယ္။",
            "Phone Number Connected": "Phone Number မွန္ကန္ပါတယ္။",
            "add phone": "Phone Number ခ်ိတ္ဆက္မည္",
            "add email": "Email Address ခ်ိတ္ဆက္မည္",
            "email verification code holder": "အတည္ျပဳ Code",
            "phone verification successful": "Phone အတည္ျပဳမႈလုပ္ငန္းစဥ္ေအာင္ျမင္ပါတယ္၊ ေက်းဇူးျပဳၿပီးလူႀကီးမင္းခ်ိတ္ဆက္လိုေသာ Email Address ထည့္ေပးပါ။",
            "change passwrod tip": "မွတ္ခ်က္: လူႀကီးမင္း Moonton Account ခ်ိတ္ဆက္ထားတဲ့ Email Address ရွိေသာ Account ကိုသာ Password ေျပာင္းႏိုင္မွာျဖစ္ပါတယ္။",
            "enter call code": "လူႀကီးမင္းရဲ႕ Area Code ထည့္ေပးပါ",
            wait: "ႀကိမ္ဖန္မ်ားစြာႏွိပ္ေနပါတယ္၊ ေက်းဇူးျပဳၿပီး {time}s အတြင္းထပ္ႀကိဳးစားေပးပါ။",
            dofrequent: "ႀကိမ္ဖန္မ်ားစြာႏွိပ္ေနပါတယ္၊ ေက်းဇူးျပဳၿပီးေနာက္မွထပ္ႀကိဳးစားေပးပါ။",
            notman: "လုံၿခဳံေရးအရသင့္ရဲ႕ Login Request ကိုျငင္းပယ္ပါတယ္၊ ေမးစရာမ်ားရွိပါက Customer Services ကိုဆက္သြယ္ေမးျမန္းႏိုင္ပါတယ္။",
            hint: "သတိေပးခ်က္",
            "change binding tips": "Email ေျပာင္းလဲမႈကို စီစစ္အကဲျဖတ္လွ်က္ ရွိပါတယ္။ ေက်းဇူးျပဳ၍ ေစာင့္ဆိုင္းပါ။ အဆိုပါလုပ္ငန္းစဥ္အတြင္း ေျပာင္းလဲမႈကို ပယ္ဖ်က္ႏိုင္သည္။ Email လိပ္စာကို ေျပာင္းလဲမႈမျပဳလုပ္မီ က်န္ရွိသည့္အခ်ိန္: {x}",
            "contact customer service": "အကယ္၍ သင့္မွာ ေမးခြန္းမ်ားရွိပါက၊ Customer Service ကို ေက်းဇူးျပဳ၍ ဆက္သြယ္ေပးပါ။",
            "i know": "Okay",
            "cancel change": "ပယ္ဖ်က္မည္",
            "change pass": "သင့္ရဲ႕ Email ေျပာင္းလဲမႈကို အတည္ျပဳလိုက္ပါၿပီ၊ သင့္ရဲ႕ Email လိပ္စာအသစ္ကို ေက်းဇူးျပဳ၍ အတည္ျပဳပါ: {x}",
            "confirm change": "ေျပာင္းလဲမည္",
            LANG_STRID_Accountchangepassword_220501: "Password Reset စာတိုအား လက္ခံရရွိရန္ ေက်းဖူးျပဳ၍ ခ်ိတ္ဆက္ထားေသာ သင့္ရဲ႕ဖုန္းနံပါတ္ကို ထည့္သြင္းေပးပါ။",
            LANG_STRID_Accountchangepassword_220503: "မွတ္ခ်က္: သင္ထည့္သြင္းလိုက္ေသာဖုန္းနံပါတ္ျဖင့္ ခ်ိတ္ဆက္ထားတဲ့ Moonton အေကာင့္၏ Password ကိုသာ သင္ေျပာင္းလဲႏိုင္မွာျဖစ္ပါတယ္။",
            LANG_STRID_Accountchangepassword_220504: "Email အတည္ျပဳျခင္း",
            LANG_STRID_Accountchangepassword_220505: "ျပန္သြားမည္",
            LANG_STRID_Accountchangepassword_220506: "Moonton Password ကိုအသစ္ေျပာင္းမည္",
            LANG_STRID_Accountchangepassword_220507: "သင့္ဖုန္းနံပါတ္သို႔ Verification Code ပို႔ရန္ Send Code ကို ႏိုပ္၍ အတည္ျပဳျခင္းလုပ္ေဆာင္ရန္အတြက္ အဆိုပါ Code ကိုထည့္သြင္းပါ။",
            LANG_STRID_Accountchangepassword_220511: "Special အမွတ္အသားမ်ား မပါဝင္ပဲ၊ Uppercase ႏွင့္ Lowercase Letter မ်ား၊ နံပါတ္မ်ားပါဝင္သည့္ Character 6 လုံးႏွင့္အထက္ အတြဲအဆက္ကို အသုံးျပဳပါ",
            LANG_STRID_Accountchangepassword_220513: "Invalid password။ ေက်းဇူးျပဳ၍ ထပ္မံႀကိဳးစားၾကည့္ပါ။",
            LANG_STRID_Accountchangepassword_220514: "Password မ်ား တူညီမႈမရွိပါ။ ေက်းဇူးျပဳ၍ ထပ္မံႀကိဳးစားၾကည့္ပါ။",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification Code။ ေက်းဇူးျပဳ၍ ထပ္မံႀကိဳးစားၾကည့္ပါ။",
            LANG_STRID_Accountchangepassword_220516: "သင့္ Password အား Reset ျပဳလုပ္ၿပီးပါၿပီ။",
            LANG_STRID_Accountchangepassword_220517: "Code ကို ရယူပါ။",
            LANG_STRID_Accountchangepassword_220518: "Login အတည္ျပဳျခင္း",
            LANG_STRID_Accountchangepassword_220519: "အတည္ျပဳျခင္းေဆာင္႐ြက္ရန္ ေက်းဇူးျပဳ၍ သင့္ဖုန္းနံပါတ္ႏွင့္ Verification Code တို႔ကို ထည့္သြင္းေပးပါ။",
            LANG_STRID_Accountchangepassword_220520: "Verification Code လက္ခံရရွိရန္ မွန္ကန္တဲ့ဖုန္းနံပါတ္ကိုသာ ထည့္သြင္းပါ။",
            LANG_STRID_Accountchangepassword_220521: "Login အသိေပးခ်က္",
            LANG_STRID_Accountchangepassword_220522: "အေကာင့္ ေျပာင္းလဲၿပီးပါၿပီ။ ေက်းဇူးျပဳ၍ ဂိမ္းထဲသို႔ျပန္လည္ဝင္ေရာက္ေပးပါ။",
            LANG_STRID_Accountchangepassword_220523: "Login ဝင္ေရာက္ျခင္းေအာင္ျမင္ပါတယ္။ ေက်းဇူးျပဳ၍ ဂိမ္းထဲသို႔ျပန္လည္ဝင္ေရာက္ေပးပါ။",
            LANG_STRID_Accountchangepassword_220524: "Email လိပ္စာ/Moonton အေကာင့္/ဖုန္းနံပါတ္",
            LANG_STRID_Accountchangepassword_220525: "သင့္ရဲ႕ Moonton စကားဝွက္ကိုျပန္လည္ျပင္ဆင္ၿပီးပါၿပီ။",
            LANG_STRID_Accountswitch_220501: "Email Address ေျပာင္းရန္",
            LANG_STRID_Accountswitch_220502: "Email သို႔အတည္ျပဳကုဒ္ပို႔ပါ {0}",
            LANG_STRID_Accountswitch_220503: "Email အတည္ျပဳကုဒ္",
            LANG_STRID_Accountswitch_220504: "သင့္ရဲ႕ Email သို႔ အတည္ျပဳကုဒ္ ပို႔ရန္ညာဘက္ရွိ ခလုတ္ကိုႏွိပ္ၿပီး အတည္ျပဳမႈၿပီးေျမာက္ရန္ ကုဒ္ကို႐ိုက္ထည့္ပါ။",
            LANG_STRID_Accountswitch_220505: "Phone သို႔အတည္ျပဳကုဒ္ပို႔ပါ {0}",
            LANG_STRID_Accountswitch_220506: "ေက်းဇူးျပဳ၍ Email Address ႐ိုက္ထည့္ပါ။",
            LANG_STRID_Accountswitch_220507: "သင့္ရဲ႕ Email Address သို႔ အတည္ျပဳကုဒ္ပို႔ၿပီးပါၿပီ။",
            LANG_STRID_Accountswitch_220508: "ေက်းဇူးျပဳ၍ အတည္ျပဳကုဒ္ႏွင့္ သင့္ရဲ႕ Email Address အသစ္ကို ေအာက္တြင္ထည့္ၿပီး အတည္ျပဳျခင္းကိုၿပီးေျမာက္ေအာင္လုပ္ပါ။",
            LANG_STRID_Accountswitch_220509: "အတည္ျပဳျခင္းကိုၿပီးေျမာက္သည္အထိ သင့္ရဲ႕ Moonton အေကာင့္ဟာ သင့္ရဲ႕ယခင္ Email Address သို႔ခ်ိတ္ဆက္ထားတုန္းျဖစ္မွာပါ။\n",
            LANG_STRID_Accountswitch_220510: "သင့္ရဲ႕ Email Address အသစ္ထည့္ပါ။",
            LANG_STRID_Accountswitch_220511: "ေက်းဇူးျပဳ၍ အတည္ျပဳကုဒ္လက္ခံမည့္ Email Address ထည့္ပါ။",
            LANG_STRID_Accountswitch_220512: "ဤေတာင္းဆိုမႈကိုပယ္ဖ်က္ရန္ အတည္ျပဳပါသလား?",
            LANG_STRID_Accountswitch_220513: "ေတာင္းဆိုမႈပယ္ဖ်က္ပါတယ္။",
            LANG_STRID_Accountswitch_220514: "ေတာင္းဆိုမႈကို ျပန္လည္သုံးသပ္ေနပါတယ္။ ေက်းဇူးျပဳ၍ ေစာင့္ဆိုင္းပါ။ လုပ္ငန္းစဥ္အတြင္း ယခုေတာင္းဆိုထားမႈကိုပယ္ဖ်က္ႏိုင္ပါတယ္။ သင့္ရဲ႕ Email Address ကို {x}d {y}h {z}m အတြင္းအသစ္ေျပာင္းႏိုင္ပါမည္။ သင့္တြင္ ေမးခြန္းမ်ားရွိပါက ေက်းဇူးျပဳ၍ Customer Service သို႔ဆက္သြယ္ေပးပါ။",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "ျမန္ဆန္ေသာ Email မွတ္ပုံတင္ျခင္း",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "သင့္ရဲ႕ Moonton အေကာင့္ႏွင့္ စကားဝွက္ကို႐ိုက္ပါ။",
            LANG_STRID_MTregister_221104: "သင့္ရဲ႕ Moonton အေကာင့္ႏွင့္ စကားဝွက္ကိုအတည္ျပဳပါ။",
            LANG_STRID_MTregister_221105: "သင့္ရဲ႕စကားဝွက္ကိုျပန္႐ိုက္ပါ။",
            LANG_STRID_MTregister_221106: "Moonton အသုံးျပဳသူအမည္ (ေ႐ြးခ်ယ္ႏိုင္သည္)",
            LANG_STRID_MTregister_221107: "စကားလုံးအေရအတြက္ 6-20 လုံးအထိ၊ Underscores သို႔မဟုတ္ နံပါတ္မ်ား ပါဝင္ရမွာျဖစ္ၿပီး စာလုံးတစ္လုံးႏွင့္စတင္ရပါမယ္။",
            LANG_STRID_MTregister_221108: "Terms of Use ကိုဖတ္ၾကည့္ၿပီး သေဘာတူပါတယ္။",
            LANG_STRID_MTregister_221109: "သင့္ရဲ႕ Moonton အေကာင့္ကိုခ်ိတ္ဆက္ပါ။",
            LANG_STRID_MTregister_221110: "အတည္ျပဳ Email ကို သင့္ရဲ႕အေကာင့္ႏွင့္ခ်ိတ္ဆက္ထားေသာ Email သို႔ပို႔ၿပီးပါၿပီ။ ေက်းဇူးျပဳၿပီး 24 နာရီအတြင္း အတည္ျပဳပါ။ Email လက္ခံရရွိျခင္းမရွိပါက Junk ဖိုင္မ်ားတြင္ ေက်းဇူးျပ၍ စစ္ေဆးၾကည့္ပါ။",
            LANG_STRID_MTregister_221111: "သင့္ရဲ႕ Email ကိုအတည္ျပဳပါ",
            LANG_STRID_MTregister_221112: "သင့္ရဲ႕ Moonton အေကာင့္ကိုေအာင္ျမင္စြာခ်ိတ္ဆက္ၿပီးပါၿပီ။ ယခု သင့္ရဲ႕ Moonton Email ႏွင့္ စကားဝွက္ အသုံးျပဳၿပီး Log in ျပလုပ္ႏိုင္ပါၿပီ။",
            LANG_STRID_MTregister_221113: "Email မွန္ကန္မႈမရွိပါ",
            LANG_STRID_MTregister_221114: "သင့္ရဲ႕ ဖုန္းနံပါတ္ကို ေအာင္ျမင္စြာခ်ိတ္ဆက္ၿပီးပါၿပီ။",
            LANG_STRID_MTregister_221115: "ဖုန္းျဖင့္ ျမန္ဆန္စြာ မွတ္ပုံတင္ျခင္း",
            LANG_STRID_MTregister_221116: "သင့္ရဲ႕ ဖုန္းနံပါတ္ကို႐ိုက္ပါ။",
            LANG_STRID_MTregister_221117: "ကိုက္ညီမႈရွိမရွိ စစ္ေဆးႏိုင္ရန္ ေက်းဇူးျပဳ၍ လက္ရွိအသုံးျပဳေနေသာ သင့္ရဲ႕ Moonton အေကာင့္ႏွင့္ စကားဝွက္ကို ႐ိုက္ထည့္ပါ။",
            LANG_STRID_MTregister_221118: "ဖုန္းနံပါတ္ မွန္ကန္မႈမရွိပါ။",
            LANG_STRID_MTregister_221119: "သင့္ရဲ႕ စကားဝွက္မ်ားကိုက္ညီမႈမရွိပါ။ ေနာက္တစ္ႀကိမ္ ထပ္မံ႐ိုက္ထည့္ပါ။",
            LANG_STRID_accinterception03: "သင့္လက္ရွိ Network ဟာ မၿငိမ္သက္ပါ။ ေက်းဇူးျပဳ၍ ထပ္မံႀကိဳးစားပါ။",
            LANG_STRID_Accountswitch_220519: "Moonton Username (လိုအပ္သည္)",
            LANG_STRID_UnbindPhone_230701: "သင့္လက္ရွိခ်ိတ္ထားေသာဖုန္းနံပါတ္သည္ {0} ျဖစ္ပါသည္။",
            LANG_STRID_UnbindPhone_230702: "ျဖဳတ္လိုက္သည္ႏွင့္ ဖုန္းနံပါတ္အား ဂိမ္းထဲ Password ျဖင့္ဝင္ရာမွာ Moonton Account ID အျဖစ္သုံးႏိုင္မည္မဟုတ္ေတာ့ပါ။",
            LANG_STRID_UnbindPhone_230703: "ဖုန္းနံပါတ္မျဖဳတ္ခင္ သင့္ Moonton Account အား Email ျဖင့္ ခ်ိတ္ထားရန္ အႀကံျပဳပါသည္။",
            LANG_STRID_UnbindPhone_230704: "ဖုန္းႏွင့္ခ်ိတ္ထားမႈ ျဖဳတ္မည္",
            LANG_STRID_UnbindPhone_230705: "သင့္အေကာင့္ကို Moonton Email ႏွင့္ မခ်ိတ္ရေသးပါ။ ေက်းဇူးျပဳ၍ Moonton Email ႏွင့္ ခ်ိတ္ၿပီးေနာက္ ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            LANG_STRID_UnbindPhone_230706: "သင္၏ခ်ိတ္ဆက္ထားေသာ Moonton Email {0} သို႔ အတည္ျပဳ Code တစ္ခုေပးပို႔ရန္ ေအာက္ပါခလုတ္ကိုႏွိပ္ပါ။",
            LANG_STRID_UnbindPhone_230707: "အတည္ျပဳ Code တစ္ခုကို သင္၏ Moonton Email လိပ္စာ {0} သို႔ ေပးပို႔လိုက္ပါၿပီ။ ေက်းဇူးျပဳၿပီးစစ္ေဆးပါ။",
            LANG_STRID_UnbindPhone_230708: "သင့္ဖုန္းနံပါတ္ျဖင့္ ခ်ိတ္ဆက္မႈကို ေအာင္ျမင္စြာျဖဳတ္ၿပီးပါၿပီ။",
            passwordError: "သင္ျဖည့္သြင္းလိုက္သည့္ Password မွာ မွားယြင္းေနပါသည္။ ေက်းဇူးျပဳ၍ ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            passwordErrorWait: "သင္ျဖည့္သြင္းလိုက္တဲ့ Password မွာ မွားယြင္းေနပါတယ္။ ေက်းဇူးျပဳ၍ {x} မိနစ္ {y} စကၠန္႔အတြင္း ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            passwordErrorWaitSec: "သင္ျဖည့္သြင္းလိုက္တဲ့ Password မွာ မွားယြင္းေနပါတယ္။ ေက်းဇူးျပဳ၍ {y} စကၠန္႔အတြင္း ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            enterEmailTip: "ကြၽႏ္ုပ္တို႔၏စာတိုကိုလက္ခံရရွိရန္ မွန္ကန္ေသာအီးေမးလ္လိပ္စာကို ထည့္သြင္းပါ။",
            sendEmailTip: '"အတည္ျပဳ Code ကို ပို႔မည္" ကိုႏွိပ္ပါ။ သင္ေပးထားေသာလိပ္စာသို႔ အတည္ျပဳ Code ပါရွိသည့္ Email တစ္ေစာင္ကို ေပးပို႔ပါမည္။ အတည္ျပဳျခင္းလုပ္ငန္းစဥ္ကို အၿပီးသတ္ရန္ Code ကို ထည့္သြင္းပါ။',
            logInViaAccountPassword: "အေကာင့္ Password မွတစ္ဆင့္ ဝင္ေရာက္မည္",
            logInViaEmailVerification: "Email အတည္ျပဳျခင္း မွတစ္ဆင့္ ဝင္ေရာက္မည္",
            enterEmailFirst: "သင့္ Email လိပ္စာကို ဦးစြာထည့္သြင္းပါ",
            verificationCodeError: "အတည္ျပဳ Code မမွန္ကန္ပါ။ ထပ္စမ္းၾကည့္ပါ။",
            unbindEmail: "ဤ Email သည္ Moonton Account ျဖင့္ခ်ိတ္ဆက္ထားျခင္း မရွိပါ။"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Email Address",
            Password: "Password",
            "Sign up": "Sign Up",
            "Forgot password": "Password မေ့သွားပြီ",
            "Create Your Moonton Account": "Moonton Account ဖွင့်မည်",
            "To obtain the latest information about us, please sign up with a valid email": "Game နဲ့ပက်သက်တဲ့အကြောင်းအရာတွေကိုအမြဲသိရှိနေဖို့အတွက်မှန်ကန်တဲ့ Email Address ကိုကျေးဇူးပြုပြီးဖြည့်ပေးပါ",
            "Re-Enter Password": "အတည်ပြု Password",
            "Please agree to the Moonton": "Moonton ကပြဌာန်းထားသည်များကိုကျေးဇူးပြုပြီးသဘောတူလက်ခံပေးပါ",
            "terms of service": "Terms of Service",
            Submit: "တင်သွင်းမည်",
            "E-Mail format error": "Email Address မမှန်ပါ",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "ကျေးဇူးပြုပြီးအနည်းဆုံး Character 6 လုံးနဲ့အထက်ကိုအသုံးပြုပေးပါ၊ Uppercase နဲ့ Lowercase Letters များ၊ နံပါတ်များကိုအသုံးပြုနိုင်ပြီး Special symbols များကိုတော့အသုံးမပြုနိုင်ပါ",
            "These passwords dont' match": "Password နှစ်ခုမတူပါ",
            "Please enter your email address": "လူကြီးမင်းရဲ့ Email Address ကိုကျေးဇူးပြုပြီးထည့်ပေးပါ",
            "Please enter your password": "လူကြီးမင်းရဲ့ Password ကိုကျေးဇူးပြုပြီးထည့်ပေးပါ",
            "Please confirm your password": "လူကြီးမင်းရဲ့ Password ကိုကျေးဇူးပြုပြီးသေချာအောင်ထပ်ထည့်ပေးပါ",
            "Please agree to the Moonton Terms of Service": "Moonton က ပြဌာန်းထားသည့် Terms of Service များကို ကျေးဇူးပြုပြီး သဘောတူလက်ခံပေးပါ",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "လူကြီးမင်းရဲ့ Email Address ထံသို့အတည်ပြု Email ပို့လိုက်ပါပြီ။ ကျေးဇူးပြုပြီးထို Email ထဲမှာပါတဲ့ Link ထဲသို့ဝင်ပြီးအတည်ပြုပေးပါ။ တကယ်လို့ ထို Email ကိုမတွေ့ပါက Junk Folder ထဲမှာစစ်ပေးပါ။",
            Confirm: "အတည်ပြုမည်",
            "Please enter your email address to receive the email with a new password.": "ကျေးဇူးပြုပြီး Password reset email ရရှိဖို့ သင့်ရဲ့ချိတ်ဆက်ထားတဲ့ email address ကိုထည့်ပေးပါ",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "လူကြီးမင်းရဲ့ချိတ်ဆက်ထားတဲ့ Email ထံသို့ Password reset email ပို့ပြီးပါပြီ၊ Email ကိုတစ်ချက်စစ်ပေးပါ။",
            Continue: "ဆက်လုပ်မည်",
            "Sign in with your Moonton Account": "Moonton Account ဖြင့် Login ဝင်မည်",
            "Sign in": "Login",
            Congratulations: "ဂုဏ်ယူပါတယ်",
            "Your email": "လူကြီးမင်းရဲ့ Account (",
            "is confirmed. Thank you!": ") ကိုဖွင့်ပြီးပါပြီ၊ ပျော်ပျော်ရွှင်ရွှင်ဆော့နိုင်ပါပြီနော်!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "မှတ်ချက်",
            "Your account has already been confirmed.": "Account ဖွင့်ပြီးပါပြီ",
            "The link has expired Please request a new link in-gme. Thank you.": "Link သေသွားပါပြီ၊ ကျေးဇူးပြုပြီး Game ထဲမှ Link ထပ်ပို့ပေးပါ။",
            "Reset Password": "Password ပြန်ပြောင်းမည်",
            "New Password": "Password အသစ်",
            "Re-Enter-Password": "အတည်ပြု Password",
            "Please confirm your new password": "လူကြီးမင်းရဲ့ Password ကို သေချာအောင်ထပ်ထည့်ပေးပါ",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Password ပြောင်းပြီးပါပြီ၊ လူကြီးမင်းရဲ့ Password အသစ်ဖြင့် Login ဝင်ပေးပါ။",
            "Bind your Moonton Account": "Moonton Account ချိတ်မည်",
            "Check Your Email": "Email စစ်မည်",
            "Re-enter email": "Email သေချာပြီ",
            "Email incompatible": "Email Addresses နှစ်ခုမတူပါ",
            "Please enter your password again": "အတည်ပြု Password",
            "Moonton Account": "Moonton Account",
            "account rule": "စကားလုံး 6လုံး မှအလုံး 20 အထိ, ဂဏန်းများ, _ သုံးပြီး စကားလုံး နဲ့စတဲ့မည်သည့်စကားလုံးဖြင့်စရမည်",
            "Send Verification Email": "Email ပို့မည်",
            "to email": "အတည်ပြု Email ပို့လိုက်ပါပြီ",
            "sended email": "Mailbox ထဲမှာ Email တစ်ချက်စစ်ပေးပါ",
            "change email": "Email Address ပြောင်းမည်",
            "Email Registration": "Email ဖြင့် Sign Up ပြုလုပ်မည်",
            "Quick Registration": "Quick Sign Up",
            "Accept the agreement and register": "စာချုပ်ပါသဘောတူညီချက်များကိုသဘောတူပြီး Sign Up လုပ်မည်",
            "same account": "Username ရှိပြီးသားဖြစ်နေပါတယ်၊ တစ်ခြားတစ်ခုပြောင်းထည့်ကြည့်ပါ",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "အတည်ပြုဖို့လက်ရှိ Moonton Account ရဲ့ Password ကိုထည့်ပေးပါ",
            "congratulations account": "ဂုဏ်ယူပါတယ်! လူကြီးမင်းရဲ့ Game Progress များကိုလက်ရှိ Account သို့ချိတ်ဆက်ပြီးပါပြီ။",
            "empty email": "လူကြီးမင်းရဲ့ Account လုံခြုံရေးအတွက် လူကြီးမင်းရဲ့ Email Address နဲ့ Account ကို ချိတ်ဆက်ပေးဖို့ အကြံပြုလိုပါတယ်၊ သို့မှသာ ထို Email Address ဖြင့် login ဝင်နိုင်မှာဖြစ်ပြီး Password များပြောင်းနိုင်မှာဖြစ်ပါတယ်။",
            "used email": "Email Address ဟာ တခြား Account တစ်ခုနဲ့ ချိတ်ဆက်ပြီးပါပြီ။ Switch Account မှတစ်ဆင့် Account ပြောင်းချိတ်ကြည့်ခြင်း သို့မဟုတ် တစ်ခြားနည်းဖြင့်ကြိုးစားကြည့်ပါဦး။",
            "useful email": "လူကြီးမင်းရဲ့ Email Address ထံသို့အတည်ပြု Email ပို့လိုက်ပါပြီ။ကျေးဇူးပြုပြီးထို Email ထဲမှာပါတဲ့ Link ထဲသို့ဝင်ပြီး 24 နာရီအတွင်းအတည်ပြုပေးပါ။တကယ်လို့ထို Email ကိုမတွေ့ပါက Junk Folder ထဲမှာစစ်ပေးပါ။",
            "Connect to Email": "Email ချိတ်မည်",
            unreset: "တကယ်လို့သင့်ရဲ့ Email Address က Moonton Account ချိတ်ဆက်မထားဘူးဆိုရင် Password ပြောင်းလဲလို့ရမည်မဟုတ်ပါ။",
            emailtime1: "သင် Email ကို အောက်ပါအချိန်အတွင်း ပြန်လည်ပေးပို့ခိုင်းနိုင်ပါတယ်",
            emailtime2: "s.",
            "have fun": "Account ဖွင့်ပြီးပါပြီ၊ ပျော်ပျော်ရွှင်ရွှင်ဆော့နိုင်ပါပြီနော်!",
            "continue bind email": "Email Address ချိတ်မည်",
            "server error": "Server ကြပ်နေပါတယ်၊ ခဏနေမှတစ်ဖန်ပြန်ကြိုးစားကြည့်ပါ။",
            "wrong content": "လိုအပ်ချက်များမပြည့်စုံပါ။",
            "enter right account": "ကျေးဇူးပြုပြီး မှန်ကန်တဲ့ Email Address သို့မဟုတ် Moonton Account ကိုထည့်ပေးပါ။",
            "reset email": "Email Address ပြောင်းမည်",
            "send email1": "{x} သို့ အတည်ပြု Email ပို့လိုက်ပါပြီ။ Email တွင်ပါသော Link ကိုနှိတ်ပြီး ပြောင်းလဲမှုကို အတည်ပြုပါ။",
            "send email2": ". ကျေးဇူးပြုပြီး ထို Email ထဲမှာပါတဲ့ Link ထဲသို့ဝင်ပြီး ပြောင်းလဲပေးပါ။",
            "send email": "Email ပို့မည်",
            "sended email1": "အတည်ပြု Email ပို့လိုက်ပါပြီ",
            "sended email2": ". သင် Email ကို အောက်ပါအချိန်အတွင်း ပြန်လည်ပေးပို့ခိုင်းနိုင်ပါတယ်",
            "sended email3": "s.",
            "sended email4": "အတည်ပြု Email ပို့လိုက်ပါပြီ",
            "sended email5": ". ပြောင်းလဲမှုတွေ မလုပ်ခင်အထိ သင့်ရဲ့ Account ဟာ နဂို Email Address အဟောင်းနဲ့သာ ချိတ်ဆက်ထားမှာဖြစ်ပါတယ်။",
            "empty code": "အတည်ပြု Code ထည့်ရန်လိုအပ်သည်",
            "wrong code": "အတည်ပြု Code မမှန်ပါ",
            "enter new email code": "ကျေးဇူးပြုပြီး အတည်ပြု Code ထည့်ပေးပါ",
            "enter new email": "Email Address အသစ်",
            "send code fail": "လုပ်ဆောင်ချက်မအောင်မြင်ပါ။",
            "send code success": "အတည်ပြု Code ပို့လိုက်ပါပြီ",
            "reset email success": "Email Address ပြောင်းပြီးပါပြီ။",
            "reset emial fail": "လုပ်ဆောင်ချက် မအောင်မြင်ပါ။ ကျေးဇူးပြုပြီး ထပ်ကြိုးစားကြည့်ပေးပါ။",
            "binded email": "Email Address ဟာ တခြား Account တစ်ခုနဲ့ချိတ်ဆက်ပြီးပါပြီ။",
            "send email fail": "လုပ်ဆောင်ချက် မအောင်မြင်ပါ။ ကျေးဇူးပြုပြီးလူကြီးမင်းရဲ့ Email Address နဲ့ Moonton Account ချိတ်ဆက်ထားခြင်း ရှိမရှိတစ်ချက်စစ်ဆေးပေးပါ။",
            "send code": "Code ပို့ပေးပါ",
            "outdata link": "Link သေသွားပါပြီ",
            registed: "Email Address ဟာ တစ်ခြား Account တစ်ခုနဲ့ ချိတ်ဆက်ပြီးပါပြီ။ နောက်တစ်နည်းကြိုးစားကြည့်ပေးပါ။",
            frequent: "တစ်ကြိမ်မှ မအောင်မြင်ပါ၊ ကျေးဇူးပြုပြီး ခဏကြာမှ နောက်တစ်ကြိမ်ကြိုးစားကြည့်ပေးပါ။",
            "phone code wrong": "အတည်ပြု Code မမှန်ပါ",
            "binded phone": "ယခု Account ဟာ Phone Number တစ်ခုနဲ့ချိတ်ဆက်ပြီးဖြစ်ပါတယ်",
            "phone error": "Phone Number မမှန်ပါ",
            "unbinded phone": "ယခု Phone Number ဟာ Moonton Account ချိတ်ဆက်ထားခြင်းမရှိပါ",
            "zhanyong phone": "ယခု Phone Number ဟာ Moonton Account ချိတ်ဆက်ထားပြီးဖြစ်ပါတယ်",
            "Phone Registration": "Phone ဖြင့် Sign Up ပြုလုပ်မည်",
            Phone: "Phone Number",
            Code: "အတည်ပြု Code",
            "Enter Phone": "အတည်ပြု Code ရဖို့မှန်ကန်တဲ့ Phone Number ထည့်ပါ",
            "Enter Code": "ညာဘက်မှာရှိတဲ့ ခလုတ် ကို နှိပ်ပြီးလူကြီးမင်းရဲ့ Phone Number ထဲသို့ ပို့ပေးတဲ့အတည်ပြု Code ကိုထည့်ပြီးအတည်ပြုခြင်းလုပ်ငန်းစဉ်ကို ပြီးမြောက်အောင်လုပ်ဆောင်နိုင်ပါတယ်။",
            "send old phone1": "အတည်ပြု Code ကိုပို့ပေးပါ",
            "a code": ".",
            "enter new phone": "အတည်ပြု Code ကို ထည့်ပြီးအတည်ပြုခြင်းလုပ်ငန်းစဉ်ကို ပြီးမြောက်အောင်လုပ်ဆောင်နိုင်ပါတယ်။",
            "quit change fail": "အတည်ပြုခြင်း လုပ်ငန်းစဉ်မပြီးသေးသမျှ လူကြီးမင်းရဲ့ Moonton Account ဟာအရင် Phone Number နဲ့ပဲချိတ်ဆက်ပြီးသားဖြစ်နေမှာပါ။",
            "change phone success": "Phone Number ပြောင်းပြီးသွားပါပြီ။",
            "change phone": "Phone Number ပြောင်းမည်",
            "password err too many": "တစ်ကြိမ်မှမအောင်မြင်ပါ၊ ကျေးဇူးပြုပြီးမနက်ဖန်မှကြိုးစားကြည့်ပေးပါ။",
            "email verification": "Email Verification ({0})",
            "Enter Email Code": "ညာဘက်မှာရှိတဲ့ ခလုတ် ကို နှိပ်ပြီးလူကြီးမင်းရဲ့ Email Address ထဲသို့ ပို့ပေးတဲ့အတည်ပြု Code ကိုထည့်ပြီးအတည်ပြုခြင်းလုပ်ငန်းစဉ်ကို ပြီးမြောက်အောင်လုပ်ဆောင်နိုင်ပါတယ်။",
            "Email verification successful": "Email အတည်ပြုမှုလုပ်ငန်းစဉ်အောင်မြင်ပါတယ်၊ ကျေးဇူးပြုပြီး လူကြီးမင်းချိတ်ဆက်လိုသော Phone Number ထည့်ပေးပါ။",
            "phone verification": "Phone Verification ({0})",
            "email sended and goto verify": "{0} ကိုအတည်ပြု Email ပို့လိုက်ပါပြီ၊ ကျေးဇူးပြုပြီးထို Email ထဲမှာပါတဲ့ Link ထဲသို့ ဝင်ပြီးအတည်ပြုခြင်းလုပ်ငန်းစဉ်ကို ပြီးမြောက်အောင်လုပ်ဆောင်နိုင်ပါတယ်။",
            "Phone Number Connected": "Phone Number မှန်ကန်ပါတယ်။",
            "add phone": "Phone Number ချိတ်ဆက်မည်",
            "add email": "Email Address ချိတ်ဆက်မည်",
            "email verification code holder": "အတည်ပြု Code",
            "phone verification successful": "Phone အတည်ပြုမှုလုပ်ငန်းစဉ်အောင်မြင်ပါတယ်၊ ကျေးဇူးပြုပြီးလူကြီးမင်းချိတ်ဆက်လိုသော Email Address ထည့်ပေးပါ။",
            "change passwrod tip": "မှတ်ချက်: လူကြီးမင်း Moonton Account ချိတ်ဆက်ထားတဲ့ Email Address ရှိသော Account ကိုသာ Password ပြောင်းနိုင်မှာဖြစ်ပါတယ်။",
            "enter call code": "လူကြီးမင်းရဲ့ Area Code ထည့်ပေးပါ",
            wait: "ကြိမ်ဖန်များစွာနှိပ်နေပါတယ်၊ ကျေးဇူးပြုပြီး {time}s အတွင်းထပ်ကြိုးစားပေးပါ။",
            dofrequent: "ကြိမ်ဖန်များစွာနှိပ်နေပါတယ်၊ ကျေးဇူးပြုပြီးနောက်မှထပ်ကြိုးစားပေးပါ။",
            notman: "လုံခြုံရေးအရသင့်ရဲ့ Login Request ကိုငြင်းပယ်ပါတယ်၊ မေးစရာများရှိပါက Customer Services ကိုဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။",
            hint: "သတိပေးချက်",
            "change binding tips": "Email ပြောင်းလဲမှုကို စီစစ်အကဲဖြတ်လျှက် ရှိပါတယ်။ ကျေးဇူးပြု၍ စောင့်ဆိုင်းပါ။ အဆိုပါလုပ်ငန်းစဥ်အတွင်း ပြောင်းလဲမှုကို ပယ်ဖျက်နိုင်သည်။ Email လိပ်စာကို ပြောင်းလဲမှုမပြုလုပ်မီ ကျန်ရှိသည့်အချိန်: {x}",
            "contact customer service": "အကယ်၍ သင့်မှာ မေးခွန်းများရှိပါက၊ Customer Service ကို ကျေးဇူးပြု၍ ဆက်သွယ်ပေးပါ။",
            "i know": "Okay",
            "cancel change": "ပယ်ဖျက်မည်",
            "change pass": "သင့်ရဲ့ Email ပြောင်းလဲမှုကို အတည်ပြုလိုက်ပါပြီ၊ သင့်ရဲ့ Email လိပ်စာအသစ်ကို ကျေးဇူးပြု၍ အတည်ပြုပါ: {x}",
            "confirm change": "ပြောင်းလဲမည်",
            LANG_STRID_Accountchangepassword_220501: "Password Reset စာတိုအား လက်ခံရရှိရန် ကျေးဖူးပြု၍ ချိတ်ဆက်ထားသော သင့်ရဲ့ဖုန်းနံပါတ်ကို ထည့်သွင်းပေးပါ။",
            LANG_STRID_Accountchangepassword_220503: "မှတ်ချက်: သင်ထည့်သွင်းလိုက်သောဖုန်းနံပါတ်ဖြင့် ချိတ်ဆက်ထားတဲ့ Moonton အကောင့်၏ Password ကိုသာ သင်ပြောင်းလဲနိုင်မှာဖြစ်ပါတယ်။",
            LANG_STRID_Accountchangepassword_220504: "Email အတည်ပြုခြင်း",
            LANG_STRID_Accountchangepassword_220505: "ပြန်သွားမည်",
            LANG_STRID_Accountchangepassword_220506: "Moonton Password ကိုအသစ်ပြောင်းမည်",
            LANG_STRID_Accountchangepassword_220507: "သင့်ဖုန်းနံပါတ်သို့ Verification Code ပို့ရန် Send Code ကို နိုပ်၍ အတည်ပြုခြင်းလုပ်ဆောင်ရန်အတွက် အဆိုပါ Code ကိုထည့်သွင်းပါ။",
            LANG_STRID_Accountchangepassword_220511: "Special အမှတ်အသားများ မပါဝင်ပဲ၊ Uppercase နှင့် Lowercase Letter များ၊ နံပါတ်များပါဝင်သည့် Character 6 လုံးနှင့်အထက် အတွဲအဆက်ကို အသုံးပြုပါ",
            LANG_STRID_Accountchangepassword_220513: "Invalid password။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားကြည့်ပါ။",
            LANG_STRID_Accountchangepassword_220514: "Password များ တူညီမှုမရှိပါ။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားကြည့်ပါ။",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification Code။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားကြည့်ပါ။",
            LANG_STRID_Accountchangepassword_220516: "သင့် Password အား Reset ပြုလုပ်ပြီးပါပြီ။",
            LANG_STRID_Accountchangepassword_220517: "Code ကို ရယူပါ။",
            LANG_STRID_Accountchangepassword_220518: "Login အတည်ပြုခြင်း",
            LANG_STRID_Accountchangepassword_220519: "အတည်ပြုခြင်းဆောင်ရွက်ရန် ကျေးဇူးပြု၍ သင့်ဖုန်းနံပါတ်နှင့် Verification Code တို့ကို ထည့်သွင်းပေးပါ။",
            LANG_STRID_Accountchangepassword_220520: "Verification Code လက်ခံရရှိရန် မှန်ကန်တဲ့ဖုန်းနံပါတ်ကိုသာ ထည့်သွင်းပါ။",
            LANG_STRID_Accountchangepassword_220521: "Login အသိပေးချက်",
            LANG_STRID_Accountchangepassword_220522: "အကောင့် ပြောင်းလဲပြီးပါပြီ။ ကျေးဇူးပြု၍ ဂိမ်းထဲသို့ပြန်လည်ဝင်ရောက်ပေးပါ။",
            LANG_STRID_Accountchangepassword_220523: "Login ဝင်ရောက်ခြင်းအောင်မြင်ပါတယ်။ ကျေးဇူးပြု၍ ဂိမ်းထဲသို့ပြန်လည်ဝင်ရောက်ပေးပါ။",
            LANG_STRID_Accountchangepassword_220524: "Email လိပ်စာ/Moonton အကောင့်/ဖုန်းနံပါတ်",
            LANG_STRID_Accountchangepassword_220525: "သင့်ရဲ့ Moonton စကားဝှက်ကိုပြန်လည်ပြင်ဆင်ပြီးပါပြီ။",
            LANG_STRID_Accountswitch_220501: "Email Address ပြောင်းရန်",
            LANG_STRID_Accountswitch_220502: "Email သို့အတည်ပြုကုဒ်ပို့ပါ {0}",
            LANG_STRID_Accountswitch_220503: "Email အတည်ပြုကုဒ်",
            LANG_STRID_Accountswitch_220504: "သင့်ရဲ့ Email သို့ အတည်ပြုကုဒ် ပို့ရန်ညာဘက်ရှိ ခလုတ်ကိုနှိပ်ပြီး အတည်ပြုမှုပြီးမြောက်ရန် ကုဒ်ကိုရိုက်ထည့်ပါ။",
            LANG_STRID_Accountswitch_220505: "Phone သို့အတည်ပြုကုဒ်ပို့ပါ {0}",
            LANG_STRID_Accountswitch_220506: "ကျေးဇူးပြု၍ Email Address ရိုက်ထည့်ပါ။",
            LANG_STRID_Accountswitch_220507: "သင့်ရဲ့ Email Address သို့ အတည်ပြုကုဒ်ပို့ပြီးပါပြီ။",
            LANG_STRID_Accountswitch_220508: "ကျေးဇူးပြု၍ အတည်ပြုကုဒ်နှင့် သင့်ရဲ့ Email Address အသစ်ကို အောက်တွင်ထည့်ပြီး အတည်ပြုခြင်းကိုပြီးမြောက်အောင်လုပ်ပါ။",
            LANG_STRID_Accountswitch_220509: "အတည်ပြုခြင်းကိုပြီးမြောက်သည်အထိ သင့်ရဲ့ Moonton အကောင့်ဟာ သင့်ရဲ့ယခင် Email Address သို့ချိတ်ဆက်ထားတုန်းဖြစ်မှာပါ။\n",
            LANG_STRID_Accountswitch_220510: "သင့်ရဲ့ Email Address အသစ်ထည့်ပါ။",
            LANG_STRID_Accountswitch_220511: "ကျေးဇူးပြု၍ အတည်ပြုကုဒ်လက်ခံမည့် Email Address ထည့်ပါ။",
            LANG_STRID_Accountswitch_220512: "ဤတောင်းဆိုမှုကိုပယ်ဖျက်ရန် အတည်ပြုပါသလား?",
            LANG_STRID_Accountswitch_220513: "တောင်းဆိုမှုပယ်ဖျက်ပါတယ်။",
            LANG_STRID_Accountswitch_220514: "တောင်းဆိုမှုကို ပြန်လည်သုံးသပ်နေပါတယ်။ ကျေးဇူးပြု၍ စောင့်ဆိုင်းပါ။ လုပ်ငန်းစဉ်အတွင်း ယခုတောင်းဆိုထားမှုကိုပယ်ဖျက်နိုင်ပါတယ်။ သင့်ရဲ့ Email Address ကို {x}d {y}h {z}m အတွင်းအသစ်ပြောင်းနိုင်ပါမည်။ သင့်တွင် မေးခွန်းများရှိပါက ကျေးဇူးပြု၍ Customer Service သို့ဆက်သွယ်ပေးပါ။",
            LANG_STRID_Accountswitch_220516: "Send Verification Code to Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in <span>{x}d {y}h {z}m</span>. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220518: "Send Verification Code to Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "မြန်ဆန်သော Email မှတ်ပုံတင်ခြင်း",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "သင့်ရဲ့ Moonton အကောင့်နှင့် စကားဝှက်ကိုရိုက်ပါ။",
            LANG_STRID_MTregister_221104: "သင့်ရဲ့ Moonton အကောင့်နှင့် စကားဝှက်ကိုအတည်ပြုပါ။",
            LANG_STRID_MTregister_221105: "သင့်ရဲ့စကားဝှက်ကိုပြန်ရိုက်ပါ။",
            LANG_STRID_MTregister_221106: "Moonton အသုံးပြုသူအမည် (ရွေးချယ်နိုင်သည်)",
            LANG_STRID_MTregister_221107: "စကားလုံးအရေအတွက် 6-20 လုံးအထိ၊ Underscores သို့မဟုတ် နံပါတ်များ ပါဝင်ရမှာဖြစ်ပြီး စာလုံးတစ်လုံးနှင့်စတင်ရပါမယ်။",
            LANG_STRID_MTregister_221108: "Terms of Use ကိုဖတ်ကြည့်ပြီး သဘောတူပါတယ်။",
            LANG_STRID_MTregister_221109: "သင့်ရဲ့ Moonton အကောင့်ကိုချိတ်ဆက်ပါ။",
            LANG_STRID_MTregister_221110: "အတည်ပြု Email ကို သင့်ရဲ့အကောင့်နှင့်ချိတ်ဆက်ထားသော Email သို့ပို့ပြီးပါပြီ။ ကျေးဇူးပြုပြီး 24 နာရီအတွင်း အတည်ပြုပါ။ Email လက်ခံရရှိခြင်းမရှိပါက Junk ဖိုင်များတွင် ကျေးဇူးပြ၍ စစ်ဆေးကြည့်ပါ။",
            LANG_STRID_MTregister_221111: "သင့်ရဲ့ Email ကိုအတည်ပြုပါ",
            LANG_STRID_MTregister_221112: "သင့်ရဲ့ Moonton အကောင့်ကိုအောင်မြင်စွာချိတ်ဆက်ပြီးပါပြီ။ ယခု သင့်ရဲ့ Moonton Email နှင့် စကားဝှက် အသုံးပြုပြီး Log in ပြလုပ်နိုင်ပါပြီ။",
            LANG_STRID_MTregister_221113: "Email မှန်ကန်မှုမရှိပါ",
            LANG_STRID_MTregister_221114: "သင့်ရဲ့ ဖုန်းနံပါတ်ကို အောင်မြင်စွာချိတ်ဆက်ပြီးပါပြီ။",
            LANG_STRID_MTregister_221115: "ဖုန်းဖြင့် မြန်ဆန်စွာ မှတ်ပုံတင်ခြင်း",
            LANG_STRID_MTregister_221116: "သင့်ရဲ့ ဖုန်းနံပါတ်ကိုရိုက်ပါ။",
            LANG_STRID_MTregister_221117: "ကိုက်ညီမှုရှိမရှိ စစ်ဆေးနိုင်ရန် ကျေးဇူးပြု၍ လက်ရှိအသုံးပြုနေသော သင့်ရဲ့ Moonton အကောင့်နှင့် စကားဝှက်ကို ရိုက်ထည့်ပါ။",
            LANG_STRID_MTregister_221118: "ဖုန်းနံပါတ် မှန်ကန်မှုမရှိပါ။",
            LANG_STRID_MTregister_221119: "သင့်ရဲ့ စကားဝှက်များကိုက်ညီမှုမရှိပါ။ နောက်တစ်ကြိမ် ထပ်မံရိုက်ထည့်ပါ။",
            LANG_STRID_accinterception03: "သင့်လက်ရှိ Network ဟာ မငြိမ်သက်ပါ။ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ။",
            LANG_STRID_Accountswitch_220519: "Moonton Username (လိုအပ်သည်)",
            LANG_STRID_UnbindPhone_230701: "သင့်လက်ရှိချိတ်ထားသောဖုန်းနံပါတ်သည် {0} ဖြစ်ပါသည်။",
            LANG_STRID_UnbindPhone_230702: "ဖြုတ်လိုက်သည်နှင့် ဖုန်းနံပါတ်အား ဂိမ်းထဲ Password ဖြင့်ဝင်ရာမှာ Moonton Account ID အဖြစ်သုံးနိုင်မည်မဟုတ်တော့ပါ။",
            LANG_STRID_UnbindPhone_230703: "ဖုန်းနံပါတ်မဖြုတ်ခင် သင့် Moonton Account အား Email ဖြင့် ချိတ်ထားရန် အကြံပြုပါသည်။",
            LANG_STRID_UnbindPhone_230704: "ဖုန်းနှင့်ချိတ်ထားမှု ဖြုတ်မည်",
            LANG_STRID_UnbindPhone_230705: "သင့်အကောင့်ကို Moonton Email နှင့် မချိတ်ရသေးပါ။ ကျေးဇူးပြု၍ Moonton Email နှင့် ချိတ်ပြီးနောက် ပြန်လည်ကြိုးစားကြည့်ပါ။",
            LANG_STRID_UnbindPhone_230706: "သင်၏ချိတ်ဆက်ထားသော Moonton Email {0} သို့ အတည်ပြု Code တစ်ခုပေးပို့ရန် အောက်ပါခလုတ်ကိုနှိပ်ပါ။",
            LANG_STRID_UnbindPhone_230707: "အတည်ပြု Code တစ်ခုကို သင်၏ Moonton Email လိပ်စာ {0} သို့ ပေးပို့လိုက်ပါပြီ။ ကျေးဇူးပြုပြီးစစ်ဆေးပါ။",
            LANG_STRID_UnbindPhone_230708: "သင့်ဖုန်းနံပါတ်ဖြင့် ချိတ်ဆက်မှုကို အောင်မြင်စွာဖြုတ်ပြီးပါပြီ။",
            passwordError: "သင္ျဖည့္သြင္းလိုက္သည့္ Password မွာ မွားယြင္းေနပါသည္။ ေက်းဇူးျပဳ၍ ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            passwordErrorWait: "သင္ျဖည့္သြင္းလိုက္တဲ့ Password မွာ မွားယြင္းေနပါတယ္။ ေက်းဇူးျပဳ၍ {x} မိနစ္ {y} စကၠန္႔အတြင္း ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            passwordErrorWaitSec: "သင္ျဖည့္သြင္းလိုက္တဲ့ Password မွာ မွားယြင္းေနပါတယ္။ ေက်းဇူးျပဳ၍ {y} စကၠန္႔အတြင္း ျပန္လည္ႀကိဳးစားၾကည့္ပါ။",
            enterEmailTip: "ကျွန်ုပ်တို့၏စာတိုကိုလက်ခံရရှိရန် မှန်ကန်သောအီးမေးလ်လိပ်စာကို ထည့်သွင်းပါ။",
            sendEmailTip: '"အတည်ပြု Code ကို ပို့မည်" ကိုနှိပ်ပါ။ သင်ပေးထားသောလိပ်စာသို့ အတည်ပြု Code ပါရှိသည့် Email တစ်စောင်ကို ပေးပို့ပါမည်။ အတည်ပြုခြင်းလုပ်ငန်းစဉ်ကို အပြီးသတ်ရန် Code ကို ထည့်သွင်းပါ။',
            logInViaAccountPassword: "အကောင့် Password မှတစ်ဆင့် ဝင်ရောက်မည်",
            logInViaEmailVerification: "Email အတည်ပြုခြင်း မှတစ်ဆင့် ဝင်ရောက်မည်",
            enterEmailFirst: "သင့် Email လိပ်စာကို ဦးစွာထည့်သွင်းပါ",
            verificationCodeError: "အတည်ပြု Code မမှန်ကန်ပါ။ ထပ်စမ်းကြည့်ပါ။",
            unbindEmail: "ဤ Email သည် Moonton Account ဖြင့်ချိတ်ဆက်ထားခြင်း မရှိပါ။"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Endereço de e-mail",
            Password: "Senha",
            "Sign up": "Cadastrar-se",
            "Forgot password": "Esqueci a Senha",
            "Create Your Moonton Account": "Crie Conta Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Inscreva-se com um e-mail válido para obter as informações mais recentes do jogo.",
            "Re-Enter Password": "Confirme a Senha",
            "Please agree to the Moonton": "Por favor, concorde com a Moonton",
            "terms of service": "Termos de Serviço",
            Submit: "Enviar",
            "E-Mail format error": "Endereço de e-mail inválido",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Use 6 ou mais caracteres com uma mistura de letras maiúsculas e minúsculas, números e sem símbolos especiais.",
            "These passwords dont' match": "Essas senhas não combinam",
            "Please enter your email address": "Por favor, insira o seu endereço de e-mail",
            "Please enter your password": "Por favor, insira sua senha",
            "Please confirm your password": "Por favor, confirme sua senha",
            "Please agree to the Moonton Terms of Service": "Por favor, aceite os Termos de Serviço da Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Um e-mail de verificação foi enviado para seu endereço de e-mail. Por favor, toque no link incluído no e-mail e complete a verificação. Se você não o recebeu, verifique sua pasta de lixo eletrônico.",
            Confirm: "Confirmar",
            "Please enter your email address to receive the email with a new password.": "Por favor, digite seu endereço de e-mail conectado para receber o e-mail de redefinição de senha.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Um e-mail de redefinição de senha foi enviado para seu endereço de e-mail conectado. Por favor, verifique o e-mail a tempo!",
            Continue: "Continuar",
            "Sign in with your Moonton Account": "Entre com sua Conta Moonton",
            "Sign in": "Entrar",
            Congratulations: "Parabéns",
            "Your email": "Sua conta (",
            "is confirmed. Thank you!": ") foi confirmada. Divirta-se!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Aviso",
            "Your account has already been confirmed.": "Sua conta já foi criada.",
            "The link has expired Please request a new link in-gme. Thank you.": "O link expirou. Por favor, reenvie o link no jogo.",
            "Reset Password": "Redefinir Senha",
            "New Password": "Nova Senha",
            "Re-Enter-Password": "Confirme Senha",
            "Please confirm your new password": "Por favor, confirme sua senha",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Senha alterada. Por favor, faça o login novamente com sua nova senha.",
            "Bind your Moonton Account": "Vincule sua Conta Moonton",
            "Check Your Email": "Verifique E-mail",
            "Re-enter email": "Confirme E-mail",
            "Email incompatible": "Os endereços de e-mail não combinam",
            "Please enter your password again": "Confirme Senha",
            "Moonton Account": "Conta Moonton",
            "account rule": "Use 6-20 letras, dígitos, ou _ e comece com uma letra.",
            "Send Verification Email": "Enviar E-mail",
            "to email": "Um e-mail de verificação foi enviado para",
            "sended email": ". Por favor, verifique o e-mail em sua caixa de correio.",
            "change email": "Alterar endereço de e-mail",
            "Email Registration": "Com E-mail",
            "Quick Registration": "Cadastro Rápido",
            "Accept the agreement and register": "ACEITAR O TERMO & ENTRAR",
            "same account": "Esse nome já está em uso. Por favor, tente outro!",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Por favor, digite a senha da Conta Moonton atual para verificar.",
            "congratulations account": "Parabéns! Você criou uma Conta Moonton com sucesso e a conectou à sua conta atual.",
            "empty email": "Para a segurança de sua conta, recomendamos que você a conecte com o e-mail para que possa entrar na sua conta com ele e alterar a senha.",
            "used email": "O endereço de e-mail já está conectado a outra conta. Por favor, tente outro ou faça o login na conta via Mudar de Conta.",
            "useful email": "Um e-mail de verificação foi enviado para seu endereço de e-mail conectado. Por favor, toque no link incluído no e-mail e complete a verificação dentro de 24 horas. Se você não o recebeu, verifique sua pasta de lixo eletrônico.",
            "Connect to Email": "Conectar ao E-mail",
            unreset: "Você não pode redefinir a senha se sua Conta Moonton não estiver conectada a um endereço de e-mail.",
            emailtime1: "Você pode reenviar o e-mail em",
            emailtime2: "s.",
            "have fun": "Conta conectada. Divirta-se!",
            "continue bind email": "Conectar ao E-mail",
            "server error": "O servidor está ocupado agora. Por favor, tente novamente mais tarde.",
            "wrong content": "Requisitos não atendidos.",
            "enter right account": "Por favor, digite um endereço de e-mail válido ou uma Conta Moonton",
            "reset email": "Trocar Endereço de E-mail",
            "send email1": "Um e-mail de verificação será enviado para {x}. Por favor, toque no link incluído no e-mail para completar a mudança.",
            "send email2": ". Por favor, toque no link incluído no e-mail para completar a mudança.",
            "send email": "Enviar E-mail",
            "sended email1": "Um e-mail de verificação foi enviado para",
            "sended email2": ". Você pode reenviar o e-mail em",
            "sended email3": "s.",
            "sended email4": "Um e-mail de verificação foi enviado para",
            "sended email5": ". Nota: Antes que a mudança seja concluída, sua conta ainda estará conectada ao antigo endereço de e-mail.",
            "empty code": "O código de verificação não pode estar vazio",
            "wrong code": "Código de verificação inválido",
            "enter new email code": "Por favor, digite o código de verificação",
            "enter new email": "Novo Endereço de E-mail",
            "send code fail": "A operação falhou.",
            "send code success": "Código de Verificação enviado",
            "reset email success": "Endereço de e-mail alterado.",
            "reset emial fail": "A operação falhou. Por favor, tente novamente.",
            "binded email": "O endereço de e-mail já foi conectado a outra conta",
            "send email fail": "A operação falhou. Por favor, verifique se sua conta foi conectada a uma Conta Moonton e a um e-mail",
            "send code": "Enviar Código",
            "outdata link": "O link expirou.",
            registed: "O endereço de e-mail já foi conectado a outra conta. Por favor, tente outro.",
            frequent: "Muitas tentativas fracassadas. Por favor, tente novamente mais tarde.",
            "phone code wrong": "Código de Verificação Inválido",
            "binded phone": "A conta já foi conectada a um número de telefone",
            "phone error": "Número de Telefone Inválido",
            "unbinded phone": "O número de telefone não está conectado a uma conta",
            "zhanyong phone": "O número de telefone já foi conectado a uma conta",
            "Phone Registration": "Com Telefone",
            Phone: "Número de Telefone",
            Code: "Código de Verificação",
            "Enter Phone": "Por favor, digite seu número de telefone válido para receber o código de verificação",
            "Enter Code": "Toque no botão à direita para enviar o código de verificação para seu número de telefone e digite o código para concluir a verificação.",
            "send old phone1": "Envie o código de verificação para",
            "a code": ".",
            "enter new phone": "Por favor, insira o código de verificação para concluir a verificação.",
            "quit change fail": "Até que a verificação seja concluída, sua Conta Moonton ainda estará conectada ao seu número de telefone antigo.",
            "change phone success": "Número de Telefone Alterado.",
            "change phone": "Alterar Número de Telefone",
            "password err too many": "Muitas tentativas fracassadas. Por favor, tente novamente mais tarde.",
            "email verification": "Verificação de Email ({0})",
            "Enter Email Code": "Toque no botão à direita para enviar o código de verificação para seu endereço de e-mail e digite o código para concluir a verificação.",
            "Email verification successful": "A verificação do email foi bem-sucedida. Por favor, insira o número de telefone que deseja conectar:",
            "phone verification": "Verificação de Telefone ({0})",
            "email sended and goto verify": "Um e-mail de verificação foi enviado para {0}. Por favor, toque no link incluído no e-mail e complete a verificação.",
            "Phone Number Connected": "Número de Telefone Conectado.",
            "add phone": "Conectar número de telefone",
            "add email": "Conectar endereço de e-mail",
            "email verification code holder": "Código de Verificação",
            "phone verification successful": "A verificação de Telefone foi bem-sucedida. Por favor, insira o endereço de e-mail que deseja conectar:",
            "change passwrod tip": "Aviso: Você só pode alterar a senha da Conta Moonton que está conectada através do endereço de e-mail inserido.",
            "enter call code": "Por favor, selecione seu código de área",
            wait: "Muitas tentativas. Por favor, tente novamente em {time}s.",
            dofrequent: "Muitas tentativas. Por favor, tente novamente mais tarde.",
            notman: "Devido a razões de segurança, seu pedido de login foi recusado. Por favor, entre em contato com o Serviço de Atendimento ao Cliente se estiver com dúvidas.",
            hint: "Aviso",
            "change binding tips": "A mudança de e-mail está sendo revisada. Por favor, aguarde. Você pode cancelar a mudança durante esse processo. Tempo restante antes que você possa mudar de endereço de e-mail: {x}.",
            "contact customer service": "Se você tiver quaisquer dúvidas, por favor, entre em contato com o Serviço de Atendimento ao Cliente.",
            "i know": "Ok",
            "cancel change": "Cancelar",
            "change pass": "Sua mudança de e-mail foi aprovada, por favor, confirme seu novo endereço de e-mail: {x}.",
            "confirm change": "Mudar",
            LANG_STRID_Accountchangepassword_220501: "Por favor, digite o número do seu telefone conectado para receber a mensagem de redefinição de senha.",
            LANG_STRID_Accountchangepassword_220503: "Nota: Você só pode alterar a senha da conta Moonton conectada ao número de telefone que você inseriu.",
            LANG_STRID_Accountchangepassword_220504: "Verificação de E-mail",
            LANG_STRID_Accountchangepassword_220505: "Retornar",
            LANG_STRID_Accountchangepassword_220506: "Redefinir Senha Moonton",
            LANG_STRID_Accountchangepassword_220507: "Toque em Enviar Código para enviar um código de verificação para o número do seu telefone e insira o código para completar a verificação.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 ou mais caracteres com uma mistura de letras maiúsculas, minúsculas e números, mas sem símbolos especiais.",
            LANG_STRID_Accountchangepassword_220513: "Senha inválida. Por favor, tente novamente.",
            LANG_STRID_Accountchangepassword_220514: "As senhas não correspondem. Por favor, tente novamente.",
            LANG_STRID_Accountchangepassword_220515: "Código de Verificação inválido. Por favor, tente novamente.",
            LANG_STRID_Accountchangepassword_220516: "Sua senha foi redefinida.",
            LANG_STRID_Accountchangepassword_220517: "Obter Código.",
            LANG_STRID_Accountchangepassword_220518: "Verificação de Login",
            LANG_STRID_Accountchangepassword_220519: "Por favor, insira o número do seu telefone e o código de verificação para completar a verificação.",
            LANG_STRID_Accountchangepassword_220520: "Por favor, insira um número de telefone válido para receber o código de verificação.",
            LANG_STRID_Accountchangepassword_220521: "Aviso de Login",
            LANG_STRID_Accountchangepassword_220522: "Conta alterada. Por favor, entre no jogo novamente.",
            LANG_STRID_Accountchangepassword_220523: "Sucesso ao fazer Login. Por favor, entre no jogo novamente.",
            LANG_STRID_Accountchangepassword_220524: "Endereço de E-mail/Conta Moonton/Número de Telefone",
            LANG_STRID_Accountchangepassword_220525: "A Senha da sua Conta Moonton foi redefinida.",
            LANG_STRID_Accountswitch_220501: "Alterar Endereço de E-mail",
            LANG_STRID_Accountswitch_220502: "Enviar Código de Verificação para o E-mail {0}",
            LANG_STRID_Accountswitch_220503: "E-mail de Código de Verificação",
            LANG_STRID_Accountswitch_220504: "Toque no botão à direita para enviar um Código de Verificação para o seu Endereço de E-mail e insira o código para completar a verificação.",
            LANG_STRID_Accountswitch_220505: "Enviar Código de Verificação para o Número {0}",
            LANG_STRID_Accountswitch_220506: "Por favor, insira um Endereço de E-mail válido.",
            LANG_STRID_Accountswitch_220507: "O Código de Verificação foi enviado para seu Endereço de E-mail.",
            LANG_STRID_Accountswitch_220508: "Por favor, insira o Código de Verificação e seu novo Endereço de E-mail abaixo para concluir a verificação.",
            LANG_STRID_Accountswitch_220509: "Até que a verificação seja concluída, sua Conta Moonton permanecerá conectada ao seu Endereço de E-mail antigo.",
            LANG_STRID_Accountswitch_220510: "Por favor, insira seu novo Endereço de E-mail.",
            LANG_STRID_Accountswitch_220511: "Por favor, insira um Endereço de E-mail válido para receber o Código de Verificação.",
            LANG_STRID_Accountswitch_220512: "Você tem certeza que deseja cancelar a solicitação?",
            LANG_STRID_Accountswitch_220513: "Cancelar Solicitação",
            LANG_STRID_Accountswitch_220514: "Seu pedido está sendo analisado. Por favor, aguarde. Você pode escolher cancelar a solicitação durante esse processo. Seu Endereço de E-mail poderá ser trocado em {x}d, {y}h e {z}m. Se você tiver quaisquer dúvidas, por favor, entre em contato com o Serviço de Atendimento ao Cliente.",
            LANG_STRID_Accountswitch_220516: "Enviar Código de Verificação para o Número <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "A solicitação está em análise. Por favor, aguarde. Você pode cancelar a solicitação durante esse processo. Seu Endereço de E-mail poderá ser alterado em <span>{x}d, {y}h e {z}m</span>. Se você tiver quaisquer dúvidas, por favor, entre em contato com o Serviço de Atendimento ao Cliente.",
            LANG_STRID_Accountswitch_220518: "Enviar Código de Verificação para o E-mail <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Registro Rápido de E-mail",
            LANG_STRID_MTregister_221102: "E-mail",
            LANG_STRID_MTregister_221103: "Por favor, insira sua conta Moonton e senha",
            LANG_STRID_MTregister_221104: "Por favor, confirme a sua conta Moonton e senha",
            LANG_STRID_MTregister_221105: "Por favor, insira sua senha novamente",
            LANG_STRID_MTregister_221106: "Nome de Usuário Moonton (opcional)",
            LANG_STRID_MTregister_221107: "Deve ser composto de 6 a 20 letras, sublinhados ou números, e deve começar com uma letra.",
            LANG_STRID_MTregister_221108: "Eu li e concordo com os Termos de Uso.",
            LANG_STRID_MTregister_221109: "Vincular Sua Conta Moonton",
            LANG_STRID_MTregister_221110: "O e-mail de verificação foi enviado para o e-mail vinculado à sua conta. Por favor, verifique dentro de 24 horas. Se você não recebeu o e-mail, verifique seu arquivo de lixo eletrônico ou spam para ver se está lá.",
            LANG_STRID_MTregister_221111: "Verificar com e-mail",
            LANG_STRID_MTregister_221112: "Você vinculou com sucesso sua conta Moonton. Agora você pode fazer login com seu e-mail e senha Moonton.",
            LANG_STRID_MTregister_221113: "E-mail inválido",
            LANG_STRID_MTregister_221114: "Você vinculou seu número de telefone com sucesso.",
            LANG_STRID_MTregister_221115: "Registro Rápido com Telefone",
            LANG_STRID_MTregister_221116: "Inserir seu número de telefone",
            LANG_STRID_MTregister_221117: "Por favor, insira a conta Moonton e a senha que você está usando atualmente para nos ajudar a confirmar sua identidade.",
            LANG_STRID_MTregister_221118: "Número de telefone inválido",
            LANG_STRID_MTregister_221119: "Suas senhas não conferem. Por favor, insira novamente.",
            LANG_STRID_accinterception03: "Conexão instável. Por favor, tente novamente.",
            LANG_STRID_Accountswitch_220519: "Nome de Usuário Moonton (obrigatório)",
            LANG_STRID_UnbindPhone_230701: "Seu número de telefone atual conectado é {0}.",
            LANG_STRID_UnbindPhone_230702: "Uma vez desconectado, o número de telefone não poderá mais ser usado como seu ID de conta Moonton para fazer login no jogo com a senha.",
            LANG_STRID_UnbindPhone_230703: "Recomendamos que você conecte sua conta Moonton a um e-mail antes de desconectar seu número de telefone.",
            LANG_STRID_UnbindPhone_230704: "Desconectar Número de Telefone",
            LANG_STRID_UnbindPhone_230705: "Você não conectou um e-mail Moonton à sua conta. Por favor, tente novamente após conectar um e-mail Moonton.",
            LANG_STRID_UnbindPhone_230706: "Toque no botão abaixo para enviar um código de verificação para seu e-mail Moonton conectado {0}.",
            LANG_STRID_UnbindPhone_230707: "Um código de verificação foi enviado para seu endereço de e-mail Moonton {0}. Por favor, verifique.",
            LANG_STRID_UnbindPhone_230708: "Você desconectou seu número de telefone com sucesso.",
            passwordError: "A senha que você digitou está incorreta. Por favor, tente novamente.",
            passwordErrorWait: "A senha inserida está incorreta. Por favor, tente novamente em {x} minutos e {y} segundos.",
            passwordErrorWaitSec: "A senha inserida está incorreta. Por favor, tente novamente em e {y} segundos.",
            enterEmailTip: "Por favor, insira um endereço de e-mail válido para receber nossa mensagem.",
            sendEmailTip: 'Toque em "Enviar Código de Verificação" e enviaremos um e-mail contendo um código de verificação para o endereço que você forneceu. Digite o código para concluir o processo de verificação.',
            logInViaAccountPassword: "Login através da senha da conta",
            logInViaEmailVerification: "Login via verificação de e-mail",
            enterEmailFirst: "Por favor, insira seu endereço de e-mail primeiro",
            verificationCodeError: "Código de verificação inválido. Por favor, tente novamente.",
            unbindEmail: "Este e-mail não está conectado a uma conta Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Adresă de Email",
            Password: "Parolă",
            "Sign up": "Înregistrare",
            "Forgot password": "Parolă Uitată",
            "Create Your Moonton Account": "Creează Cont Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Te rugăm să introduci o adresă de email validă pentru a primi cele mai noi informații despre joc.",
            "Re-Enter Password": "Confirmă Parola",
            "Please agree to the Moonton": "Te rugăm să accepți",
            "terms of service": "Termenii Serviciului Moonton",
            Submit: "Trimite",
            "E-Mail format error": "Adresă de email invalidă",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Folosește 6 sau mai multe caractere, o combinație de litere mari și mici, numere și fără simboluri speciale",
            "These passwords dont' match": "Parolele nu se potrivesc",
            "Please enter your email address": "Te rugăm să îți introduci adresa de email",
            "Please enter your password": "Te rugăm să îți introduci parola",
            "Please confirm your password": "Te rugăm să îți confirmi parola",
            "Please agree to the Moonton Terms of Service": "Te rugăm să accepți Termenii Serviciului Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Un email de verificare a fost trimis pe adresa ta de email. Te rugăm să apeși link-ul inclus în email și să închei verificarea. Dacă nu vezi email-ul, te rugăm să verifici folderul spam.",
            Confirm: "Confirmă",
            "Please enter your email address to receive the email with a new password.": "Te rugăm să îți introduci adresa de email conectată pentru a primi email pentru resetarea parolei.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Un email pentru resetarea parolei ți-a fost trimis pe adresa de email conectată. Te rugăm să verifici la timp email-ul!",
            Continue: "Continuă",
            "Sign in with your Moonton Account": "Conectează-te cu Cont Moonton",
            "Sign in": "Conectare",
            Congratulations: "Felicitări",
            "Your email": "Contul tău (",
            "is confirmed. Thank you!": ") a fost creat. Gaming plăcut!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Notificare",
            "Your account has already been confirmed.": "Contul a fost deja creat.",
            "The link has expired Please request a new link in-gme. Thank you.": "Link-ul a expirat. Te rugăm să retrimiți link-ul în joc.",
            "Reset Password": "Resetează Parola",
            "New Password": "Parolă Nouă",
            "Re-Enter-Password": "Confirmă Parola",
            "Please confirm your new password": "Te rugăm să îți confirmi parola",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Parola a fost schimbată. Te rugăm să te reconectezi folosind noua parolă.",
            "Bind your Moonton Account": "Conectează Contul Moonton",
            "Check Your Email": "Verifică Email-ul",
            "Re-enter email": "Confirmă Email-ul",
            "Email incompatible": "Adresele de email nu se potrivesc",
            "Please enter your password again": "Confirmă Parola",
            "Moonton Account": "Cont Moonton",
            "account rule": "Foloseşte 6-20 litere, cifre, sau _ şi începe cu o literă",
            "Send Verification Email": "Trimite Email",
            "to email": "Un email de verificare a fost trimis pe adresa",
            "sended email": ".Te rugăm să verifici mail-ul din căsuța ta de mesaje.",
            "change email": "Schimbă Adresa de Email",
            "Email Registration": "Înregistrare prin Email",
            "Quick Registration": "Înregistrare Rapidă",
            "Accept the agreement and register": "ACCEPTĂ CONDIȚIILE ŞI ÎNREGISTREAZĂ-TE",
            "same account": "Numele de utilizator există deja. Te rugăm să încerci altul.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Pentru verificare te rugăm să introduci parola contului Moonton actual.",
            "congratulations account": "Felicitări! Ai creat un Cont Moonton şi l-ai conectat cu progresul tău actual de joc.",
            "empty email": "Pentru siguranța contului tău, îți recomandăm să conectezi contul cu o adresă de email pentru a te putea conecta folosind adresa de email şi pentru a-ți schimba parola.",
            "used email": "Email-ul este deja conectat cu alt cont. Te rugăm să încerci altul sau conectează-te prin Schimbarea Contului.",
            "useful email": "Un email de verificare a fost trimis pe adresa ta de email conectată. Te rugăm să apeşi link-ul inclus în email şi să închei verificarea în 24 de ore. Dacă nu vezi email-ul, te rugăm să îți verifici folderul spam.",
            "Connect to Email": "Conectează Email",
            unreset: "Nu îți poți reseta parola dacă Contul tău Moonton nu este conectat cu o adresă de email.",
            emailtime1: "Poți retrimite email-ul în",
            emailtime2: "s.",
            "have fun": "Contul este conectat. Gaming plăcut!",
            "continue bind email": "Conectează Adresa de Email",
            "server error": "Momentan serverul este prea solicitat. Te rugăm să încerci mai târziu.",
            "wrong content": "Condițiile nu sunt îndeplinite",
            "enter right account": "Te rugăm să introduci o adresă de email validă sau un Cont Moonton",
            "reset email": "Schimbă Adresa de Email",
            "send email1": "Un email de verificare va fi trimis pe adresa {x}. Te rugăm să apeși link-ul inclus în email pentru a încheia schimbarea.",
            "send email2": ". Te rugăm să apeşi link-ul inclus în email pentru a finaliza schimbarea.",
            "send email": "Trimite Email",
            "sended email1": "Un email de verificare a fost trimis pe adresa",
            "sended email2": ". Poți retrimite email-ul în",
            "sended email3": "s.",
            "sended email4": "Un email de verificare a fost trimis pe adresa",
            "sended email5": ". Notă. Înainte ca schimbarea să fie finalizată, contul va fi în continuare conectat cu adresa de email veche.",
            "empty code": "Codul de verificare nu poate fi gol",
            "wrong code": "Cod de verificare invalid",
            "enter new email code": "Te rugăm să introduci codul de verificare",
            "enter new email": "Adresa de Email Nouă",
            "send code fail": "Operațiunea a eşuat.",
            "send code success": "Codul de verificare a fost trimis",
            "reset email success": "Adresa de email a fost schimbată.",
            "reset emial fail": "Operațiunea a eşuat. Te rugăm să încerci din nou.",
            "binded email": "Adresa de email este deja conectată cu alt cont.",
            "send email fail": "Operațiunea a eşuat. Te rugăm să verifici dacă ai conectat un cont Moonton şi o adresă de email.",
            "send code": "Trimite Codul",
            "outdata link": "Link-ul a expirat.",
            registed: "Adresa de email este deja conectată cu un alt cont. Te rugăm să încerci alta.",
            frequent: "Prea multe încercări eşuate. Te rugăm să încerci mai târziu.",
            "phone code wrong": "Cod de verificare invalid",
            "binded phone": "Contul este deja conectat cu un număr de telefon",
            "phone error": "Număr de telefon invalid",
            "unbinded phone": "Numărul de telefon nu este conectat cu niciun cont.",
            "zhanyong phone": "Numărul de telefon este deja conectat cu un cont.",
            "Phone Registration": "Înregistrare cu Telefonul",
            Phone: "Număr de Telefon",
            Code: "Cod de Verificare",
            "Enter Phone": "Te rugăm să introduci un număr de telefon valid pentru a primi codul de verificare",
            "Enter Code": "Apasă butonul din dreapta pentru a trimite un cod de verificare pe numărul tău de telefon şi introdu codul pentru a încheia verificarea.",
            "send old phone1": "Trimite codul de verificare pe numărul",
            "a code": ".",
            "enter new phone": "Te rugăm să introduci codul de verificare pentru a încheia verificarea",
            "quit change fail": "Până ce verificarea va fi încheiată, contul tău Moonton va fi încă conectat cu vechiul tău număr de telefon.",
            "change phone success": "Numărul de telefon a fost schimbat.",
            "change phone": "Schimbă Numărul de Telefon",
            "password err too many": "Prea multe încercări eșuate. Te rugăm să încerci din nou mâine.",
            "email verification": "Verificare Email ({0})",
            "Enter Email Code": "Apasă butonul din dreapta pentru a trimite un cod de verificare pe adresa ta de email și introdu codul de verificare pentru a încheia verificarea.",
            "Email verification successful": "Email verificat cu succes. Te rugăm să introduci numărul de telefon pe care vrei să îl conectezi.",
            "phone verification": "Verificare Număr de Telefon ({0})",
            "email sended and goto verify": "Un email de verificare a fost trimis pe adresa {0}. Te rugăm să apeși link-ul inclus în email și să închei verificarea.",
            "Phone Number Connected": "Numărul de telefon a fost conectat.",
            "add phone": "Conectează Numărul de Telefon",
            "add email": "Conectează Adresa de Email",
            "email verification code holder": "Cod de Verificare",
            "phone verification successful": "Telefonul a fost verificat cu succes. Te rugăm să introduci adresa de email pe care vrei să o conectezi.",
            "change passwrod tip": "Notă: Poți schimba doar parola contului Moonton conectat adresei de email pe care ai introdus-o.",
            "enter call code": "Te rugăm să îți selectezi codul regiunii",
            wait: "Prea multe încercări. Te rugăm să încerci din nou în {time}s.",
            dofrequent: "Prea multe încercări. Te rugăm să încerci din nou mai târziu.",
            notman: "Din motive de securitate, cererea ta de autentificare a fost refuzată. Dacă ai întrebări, te rugăm să contactezi Serviciul Clienți.",
            hint: "",
            "change binding tips": "",
            "contact customer service": "",
            "i know": "",
            "cancel change": "",
            "change pass": "",
            "confirm change": "",
            LANG_STRID_Accountchangepassword_220501: "Please enter your connected phone number to receive the password reset message.",
            LANG_STRID_Accountchangepassword_220503: "Note: You can only change the password for the Moonton account connected to the phone number you entered.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Return",
            LANG_STRID_Accountchangepassword_220506: "Reset Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "Tap Send Code to send a verification code to your phone number and enter the code to complete the verification.",
            LANG_STRID_Accountchangepassword_220511: "Use 6 or more characters with a mix of uppercase and lowercase letters, numbers, and no special symbols.",
            LANG_STRID_Accountchangepassword_220513: "Invalid password. Please try again.",
            LANG_STRID_Accountchangepassword_220514: "The passwords don't match. Please try again.",
            LANG_STRID_Accountchangepassword_220515: "Invalid verification code. Please try again.",
            LANG_STRID_Accountchangepassword_220516: "Your password has been reset.",
            LANG_STRID_Accountchangepassword_220517: "Get Code",
            LANG_STRID_Accountchangepassword_220518: "Login Verification",
            LANG_STRID_Accountchangepassword_220519: "Please enter your phone number and verification code to complete the verification.",
            LANG_STRID_Accountchangepassword_220520: "Please enter a valid phone number to receive the verification code.",
            LANG_STRID_Accountchangepassword_220521: "Login Notice",
            LANG_STRID_Accountchangepassword_220522: "Account switched. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220523: "Login success. Please re-enter the game.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Parola ta Moonton a fost resetată.",
            LANG_STRID_Accountswitch_220501: "Change Email Address",
            LANG_STRID_Accountswitch_220502: "Send Verification Code to Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "Tap the button on the right to send a verification code to your email address and enter the code to complete the verification.",
            LANG_STRID_Accountswitch_220505: "Send Verification Code to Phone {0}",
            LANG_STRID_Accountswitch_220506: "Please enter a valid email address.",
            LANG_STRID_Accountswitch_220507: "The verification code has been sent to your email address.",
            LANG_STRID_Accountswitch_220508: "Please enter the verification code and your new email address below and complete the verification.",
            LANG_STRID_Accountswitch_220509: "Until the verification is complete, your Moonton account is still connected to your previous email address.",
            LANG_STRID_Accountswitch_220510: "Please enter your new email address.",
            LANG_STRID_Accountswitch_220511: "Please enter a valid email address to receive the verification code.",
            LANG_STRID_Accountswitch_220512: "Are you sure you want to cancel the request?",
            LANG_STRID_Accountswitch_220513: "Cancel Request",
            LANG_STRID_Accountswitch_220514: "The request is currently under review. Please wait. You can choose to cancel the request during this process. Your email address can be changed in {x}d {y}h {z}m. If you have any questions, please contact Customer Service.",
            LANG_STRID_Accountswitch_220516: "Trimite Cod de Verificare pe Telefon <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Cererea este în curs de examinare. Te rugăm să aștepți. Poți alege să anulezi cererea în timpul procesului. Adresa ta de e-mail poate fi modificată în <span>{x}d {y}h {z}m</span>. Dacă ai întrebări, te rugăm să contactezi Serviciul Clienți.",
            LANG_STRID_Accountswitch_220518: "Trimite Cod de Verificare pe Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Înregistrare Rapidă Email",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Te rugăm să introduci contul Moonton și parola",
            LANG_STRID_MTregister_221104: "Te rugăm să confirmi contul Moonton și parola",
            LANG_STRID_MTregister_221105: "Te rugăm să reintroduci contul Moonton și parola",
            LANG_STRID_MTregister_221106: "Nume de Utilizator Moonton (opțional)",
            LANG_STRID_MTregister_221107: "Trebuie să conțină 6-20 de litere, liniuțe sau cifre și trebuie să înceapă cu o literă.",
            LANG_STRID_MTregister_221108: "Am citit și sunt de acord cu Termenii de Utilizare.",
            LANG_STRID_MTregister_221109: "Legarea contului tău Moonton",
            LANG_STRID_MTregister_221110: "E-mailul de verificare a fost trimis la adresa de e-mail asociată contului tău. Te rugăm să verifici în termen de 24 de ore. Dacă nu ai primit e-mailul, te rugăm să verifici folderul de gunoi pentru a verifica dacă se află acolo.",
            LANG_STRID_MTregister_221111: "Verificare cu e-mail",
            LANG_STRID_MTregister_221112: "Ai legat cu succes contul tău Moonton. Acum te poți conecta cu e-mailul și parola Moonton.",
            LANG_STRID_MTregister_221113: "E-mail invalid",
            LANG_STRID_MTregister_221114: "Ai legat cu succes numărul tău de telefon.",
            LANG_STRID_MTregister_221115: "Înregistrare rapidă a telefonului",
            LANG_STRID_MTregister_221116: "Introdu numărul de telefon",
            LANG_STRID_MTregister_221117: "Te rugăm să introduci contul și parola Moonton pe care le folosești în prezent pentru a ne ajuta să îți confirmăm identitatea.",
            LANG_STRID_MTregister_221118: "Număr de telefon invalid",
            LANG_STRID_MTregister_221119: "Parolele tale nu s-au potrivit. Te rugăm să le introduci din nou.",
            LANG_STRID_accinterception03: "Rețeaua ta actuală este instabilă, te rugăm să încerci din nou.",
            LANG_STRID_Accountswitch_220519: "Moonton Username (required)",
            LANG_STRID_UnbindPhone_230701: "Your current connected phone number is {0}.",
            LANG_STRID_UnbindPhone_230702: "Once disconnected, the phone number can no longer be used as your Moonton account ID to log into the game with the password.",
            LANG_STRID_UnbindPhone_230703: "It is recommended to connect your Moonton account to an email before disconnecting your phone number.",
            LANG_STRID_UnbindPhone_230704: "Disconnect Phone Number",
            LANG_STRID_UnbindPhone_230705: "You have not connected a Moonton email to your account. Please try again after connecting a Moonton email.",
            LANG_STRID_UnbindPhone_230706: "Tap the button below to send a verification code to your connected Moonton email {0}.",
            LANG_STRID_UnbindPhone_230707: "A verification code has been sent to your Moonton email address {0}. Please check.",
            LANG_STRID_UnbindPhone_230708: "You have successfully disconnected your phone number.",
            passwordError: "The password you entered is incorrect. Please try again.",
            passwordErrorWait: "The password you entered is incorrect. Please try again in {x} minutes {y} seconds.",
            passwordErrorWaitSec: "The password you entered is incorrect. Please try again in {y} seconds.",
            enterEmailTip: "Please enter a valid email address to receive our message.",
            sendEmailTip: 'Tap "Send Verification Code" and we will send an email containing a verification code to the address you provided. Enter the code to complete the verification process.',
            logInViaAccountPassword: "Log in via account password",
            logInViaEmailVerification: "Log in via email verification",
            enterEmailFirst: "Please enter your email address first",
            verificationCodeError: "Invalid verification code. Please try again.",
            unbindEmail: "This email is not connected to a Moonton account"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Адрес электронной почты",
            Password: "Пароль",
            "Sign up": "Регистрация",
            "Forgot password": "Забыли пароль",
            "Create Your Moonton Account": "Создать аккаунт Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Введите действительный адрес электронной почты, чтобы получать свежую информацию об игре\n\n",
            "Re-Enter Password": "Подтвердить пароль",
            "Please agree to the Moonton": "Подтвердите согласие с:",
            "terms of service": "Условия использования",
            Submit: "Подтвердить",
            "E-Mail format error": "Некорректный адрес электронной почты",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Используйте 6 или более символов, включая прописные и строчные буквы и цифры, и исключая специальные символы",
            "These passwords dont' match": "Пароли не совпадают",
            "Please enter your email address": "Введите адрес электронной почты",
            "Please enter your password": "Введите пароль",
            "Please confirm your password": "Подтвердите пароль",
            "Please agree to the Moonton Terms of Service": "Подтвердите согласие с Условиями использования Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": 'Письмо с подтверждением отправлено на ваш адрес электронной почты. Пожалуйста, перейдите по ссылке в письме и завершите верификацию. Если вы не видите письмо, пожалуйста, проверьте папку "Спам".',
            Confirm: "Подтвердить",
            "Please enter your email address to receive the email with a new password.": "Введите ваш привязанный адрес электронной почты, чтобы получить письмо о сбросе пароля.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Письмо о сбросе пароля отправлено на ваш привязанный адрес электронной почты. Пожалуйста, проверьте почту!",
            Continue: "Продолжить",
            "Sign in with your Moonton Account": "Вход с аккаунтом Moonton",
            "Sign in": "Вход",
            Congratulations: "Поздравляем",
            "Your email": "Ваш аккаунт (",
            "is confirmed. Thank you!": ") был создан. Веселой игры!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Уведомление",
            "Your account has already been confirmed.": "Аккаунт уже был создан.",
            "The link has expired Please request a new link in-gme. Thank you.": "Время действия ссылки истекло. Пожалуйста, отправьте ее в игре повторно.",
            "Reset Password": "Сброс пароля",
            "New Password": "Новый пароль",
            "Re-Enter-Password": "Подтвердить пароль",
            "Please confirm your new password": "Подтвердите пароль",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Пароль изменен. Войдите заново с новым паролем.",
            "Bind your Moonton Account": "Привязать аккаунт Moonton",
            "Check Your Email": "Проверить адрес электронной почты",
            "Re-enter email": "Подтвердить адрес электронной почты",
            "Email incompatible": "Адреса электронной почты не совпадают",
            "Please enter your password again": "Подтвердить пароль",
            "Moonton Account": "Аккаунт Moonton",
            "account rule": "Используйте 6-20 букв, цифр или _ и начните с буквы",
            "Send Verification Email": "Отправить письмо",
            "to email": "Письмо с подтверждением было отправлено на",
            "sended email": ". Пожалуйста, проверьте почту.",
            "change email": "Изменить адрес электронной почты",
            "Email Registration": "Зарегистрироваться с электронной почтой",
            "Quick Registration": "Быстрая регистрация",
            "Accept the agreement and register": "ПРИНЯТЬ СОГЛАШЕНИЕ И ЗАРЕГИСТРИРОВАТЬСЯ",
            "same account": "Имя пользователя уже существует. Попробуйте другое.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Введите пароль от текущего аккаунта Moonton для подтверждения.",
            "congratulations account": "Поздравляем! Вы создали аккаунт Moonton и привязали его к текущему прогрессу игры.",
            "empty email": "Для безопасности вашего аккаунта мы рекомендуем привязать его к адресу электронной почты, чтобы вы смогли входить в аккаунт с помощью электронной почты и менять свой пароль.",
            "used email": "Адрес электронной почты уже привязан к другому аккаунту. Пожалуйста, попробуйте другой адрес или войдите в аккаунт с помощью смены аккаунта.",
            "useful email": 'Письмо с подтверждением отправлено на ваш адрес электронной почты. Пожалуйста, перейдите по ссылке в письме и завершите верификацию в течение 24 часов. Если вы не видите письмо, пожалуйста, проверьте папку "Спам".',
            "Connect to Email": "Привязать электронную почту",
            unreset: "Вы не можете сбросить пароль, если ваш аккаунт Moonton не привязан к адресу электронной почты.",
            emailtime1: "Вы можете повторно отправить письмо через",
            emailtime2: "сек.",
            "have fun": "Аккаунт привязан. Веселой игры!",
            "continue bind email": "Привязать адрес электронной почты",
            "server error": "Сервер занят. Повторите попытку позже.",
            "wrong content": "Требования не выполнены.",
            "enter right account": "Введите действительный адрес электронной почты или аккаунт Moonton",
            "reset email": "Изменить адрес электронной почты",
            "send email1": "Письмо с подтверждением будет отправлено на {x}. Пожалуйста, перейдите по ссылке в письме, чтобы завершить смену.",
            "send email2": ". Пожалуйста, перейдите по ссылке в письме, чтобы завершить смену.",
            "send email": "Отправить письмо",
            "sended email1": "Письмо с подтверждением отправлено на",
            "sended email2": ". Вы можете повторно отправить письмо через",
            "sended email3": "сек.",
            "sended email4": "Письмо с подтверждением отправлено на",
            "sended email5": ". Примечание: до завершения смены ваш аккаунт будет привязан к старому адресу электронной почты.",
            "empty code": "Код подтверждения не может быть пустым",
            "wrong code": "Некорректный код подтверждения",
            "enter new email code": "Введите код подтверждения",
            "enter new email": "Новый адрес электронной почты",
            "send code fail": "Действие не удалось.",
            "send code success": "Код подтверждения отправлен",
            "reset email success": "Адрес электронной почты изменен.",
            "reset emial fail": "Действие не удалось. Попробуйте еще раз.",
            "binded email": "Адрес электронной почты уже привязан к другому аккаунту.",
            "send email fail": "Действие не удалось. Пожалуйста, проверьте привязку аккаунта Moonton и адреса электронной почты.",
            "send code": "Отправить код",
            "outdata link": "Ссылка больше не действительна.",
            registed: "Адрес электронной почты уже привязан к другому аккаунту. Пожалуйста, попробуйте другой адрес.",
            frequent: "Слишком много неудачных попыток. Пожалуйста, попробуйте позже.",
            "phone code wrong": "Некорректный код подтверждения",
            "binded phone": "Аккаунт уже привязан к номеру телефона",
            "phone error": "Некорректный номер телефона",
            "unbinded phone": "Номер телефона не привязан к аккаунту",
            "zhanyong phone": "Номер телефона уже привязан к аккаунту",
            "Phone Registration": "Зарегистрироваться с номером телефона",
            Phone: "Номер телефона",
            Code: "Код подтверждения",
            "Enter Phone": "Введите действительный номер телефона, чтобы получить код подтверждения",
            "Enter Code": "Нажмите кнопку справа, чтобы отправить код подтверждения на ваш номер телефона, а затем введите код, чтобы завершить верификацию.",
            "send old phone1": "Отправить код подтверждения на",
            "a code": ".",
            "enter new phone": "Введите код подтверждения, чтобы завершить верификацию",
            "quit change fail": "До завершения верификации ваш аккаунт Moonton будет привязан к старому номеру телефона.",
            "change phone success": "Номер телефона изменен.",
            "change phone": "Изменить номер телефона",
            "password err too many": "Слишком много неудачных попыток. Пожалуйста, повторите попытку завтра.",
            "email verification": "Подтверждение электронной почты ({0})",
            "Enter Email Code": "Нажмите кнопку справа, чтобы отправить код подтверждения на ваш адрес электронной почты, а затем введите код, чтобы завершить верификацию.",
            "Email verification successful": "Адрес электронной почты успешно подтвержден. Пожалуйста, введите номер телефона, который вы хотите привязать.",
            "phone verification": "Подтверждение номера телефона ({0})",
            "email sended and goto verify": "Письмо с подтверждением было отправлено на {0}. Пожалуйста, перейдите по ссылке в письме и завершите верификацию.",
            "Phone Number Connected": "Номер телефона привязан.",
            "add phone": "Привязать номер телефона",
            "add email": "Привязать адрес электронной почты",
            "email verification code holder": "Код подтверждения",
            "phone verification successful": "Номер телефона успешно подтвержден. Пожалуйста, введите адрес электронной почты, который вы хотите привязать.",
            "change passwrod tip": "Примечание: вы можете изменить пароль только для аккаунта Moonton, привязанного к введенному адресу электронной почты.",
            "enter call code": "Введите ваш код региона",
            wait: "Слишком много попыток. Пожалуйста, попробуйте снова через {time} сек.",
            dofrequent: "Слишком много попыток. Пожалуйста, попробуйте снова позже.",
            notman: "По соображениям безопасности ваш запрос входа был отклонен. Пожалуйста, свяжитесь со службой поддержки, если у вас остались вопросы.",
            hint: "Уведомление",
            "change binding tips": "Изменение email-адреса в настоящее время находится на рассмотрении. Пожалуйста, подождите. Вы можете отменить изменение во время этого процесса. Время до того, как вы сможете изменить email-адрес: {x}.",
            "contact customer service": "Если у вас есть какие-либо вопросы, свяжитесь со службой поддержки.",
            "i know": "Хорошо",
            "cancel change": "Отменить",
            "change pass": "Ваше изменение email было одобрено, пожалуйста, подтвердите свой новый email-адрес: {x}",
            "confirm change": "Изменить",
            LANG_STRID_Accountchangepassword_220501: "Введите привязанный номер телефона, чтобы получить сообщение о сбросе пароля.",
            LANG_STRID_Accountchangepassword_220503: "Примечание: вы можете изменить пароль только для аккаунта Moonton, привязанного к номеру телефона, который вы ввели.",
            LANG_STRID_Accountchangepassword_220504: "Подтверждение email",
            LANG_STRID_Accountchangepassword_220505: "Назад",
            LANG_STRID_Accountchangepassword_220506: "Сбросить пароль Moonton",
            LANG_STRID_Accountchangepassword_220507: 'Коснитесь кнопки "Отправить код", чтобы отправить код подтверждения на номер телефона. Затем введите код и завершите подтверждение.',
            LANG_STRID_Accountchangepassword_220511: "Используйте не менее 6 символов, прописные и строчные буквы, цифры. Не используйте специальные символы.",
            LANG_STRID_Accountchangepassword_220513: "Некорректный пароль. Попробуйте снова.",
            LANG_STRID_Accountchangepassword_220514: "Пароли не совпадают. Попробуйте снова.",
            LANG_STRID_Accountchangepassword_220515: "Некорректный код подтверждения. Попробуйте снова.",
            LANG_STRID_Accountchangepassword_220516: "Пароль сброшен.",
            LANG_STRID_Accountchangepassword_220517: "Получить код",
            LANG_STRID_Accountchangepassword_220518: "Подтверждение входа",
            LANG_STRID_Accountchangepassword_220519: "Введите свой номер телефона и код подтверждения, чтобы завершить подтверждение.",
            LANG_STRID_Accountchangepassword_220520: "Введите свой номер телефона, чтобы получить код подтверждения.",
            LANG_STRID_Accountchangepassword_220521: "Уведомление входа",
            LANG_STRID_Accountchangepassword_220522: "Аккаунт переключен. Войдите в игру заново.",
            LANG_STRID_Accountchangepassword_220523: "Успешный вход. Войдите в игру заново.",
            LANG_STRID_Accountchangepassword_220524: "Адрес email/Аккаунт Moonton/Номер телефона",
            LANG_STRID_Accountchangepassword_220525: "Ваш пароль Moonton сброшен.",
            LANG_STRID_Accountswitch_220501: "Изменить адрес email",
            LANG_STRID_Accountswitch_220502: "Отправить код подтверждения на email {0}",
            LANG_STRID_Accountswitch_220503: "Код подтверждения email",
            LANG_STRID_Accountswitch_220504: "Коснитесь кнопки справа, чтобы отправить код подтверждения на ваш email. Затем введите код, чтобы завершить верификацию.",
            LANG_STRID_Accountswitch_220505: "Отправить код подтверждения на телефон {0}",
            LANG_STRID_Accountswitch_220506: "Введите действующий адрес email.",
            LANG_STRID_Accountswitch_220507: "Код подтверждения был отправлен на ваш email.",
            LANG_STRID_Accountswitch_220508: "Введите код подтверждения и ваш новый email ниже, чтобы завершить верификацию.",
            LANG_STRID_Accountswitch_220509: "До завершения верификации ваш аккаунт Moonton будет привязан к предыдущему адресу email.",
            LANG_STRID_Accountswitch_220510: "Введите новый адрес email.",
            LANG_STRID_Accountswitch_220511: "Введите действующий адрес email, чтобы получить код подтверждения.",
            LANG_STRID_Accountswitch_220512: "Уверены, что хотите отменить запрос?",
            LANG_STRID_Accountswitch_220513: "Отменить запрос",
            LANG_STRID_Accountswitch_220514: "Запрос находится на рассмотрении. Пожалуйста, подождите. Вы также можете отменить запрос во время процесса. Ваш адрес email можно будет изменить через {x} д. {y} ч. {z} м. По любым вопросам вы можете обратиться в службу поддержки.",
            LANG_STRID_Accountswitch_220516: "Отправить код подтверждения на телефон <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Запрос на рассмотрении. Пожалуйста, подождите. Вы можете отменить запрос во время процесса. Ваш адрес email можно изменить через <span>{x} д. {y} ч. {z} м.</span> По любым вопросам вы можете обратиться в службу поддержки.",
            LANG_STRID_Accountswitch_220518: "Отправить код подтверждения на email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Быстрая регистрация по email",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Введите ваш аккаунт Moonton и пароль",
            LANG_STRID_MTregister_221104: "Подтвердите ваш аккаунт Moonton и пароль",
            LANG_STRID_MTregister_221105: "Введите пароль повторно",
            LANG_STRID_MTregister_221106: "Имя пользователя Moonton (необязательно)",
            LANG_STRID_MTregister_221107: "Пароль должен состоять из 6–20 букв, знаков подчеркивания или цифр и начинаться с буквы.",
            LANG_STRID_MTregister_221108: "Я прочитал(а) и принимаю Условия использования.",
            LANG_STRID_MTregister_221109: "Привязать свой аккаунт Moonton",
            LANG_STRID_MTregister_221110: 'Письмо с подтверждением было отправлено на email, привязанный к аккаунту. Пожалуйста, подтвердите в течение 24 часов. Если вы не получили письмо, пожалуйста, проверьте папку "Спам".',
            LANG_STRID_MTregister_221111: "Подтвердить с помощью email",
            LANG_STRID_MTregister_221112: "Вы успешно привязали свой аккаунт Moonton. Теперь вы можете войти, используя почту Moonton и пароль.",
            LANG_STRID_MTregister_221113: "Неверный адрес email",
            LANG_STRID_MTregister_221114: "Вы успешно привязали свой номер телефона.",
            LANG_STRID_MTregister_221115: "Быстрая регистрация по номеру",
            LANG_STRID_MTregister_221116: "Введите свой номер телефона",
            LANG_STRID_MTregister_221117: "Введите аккаунт Moonton и пароль, который вы используете сейчас, чтобы помочь нам подтвердить вашу личность.",
            LANG_STRID_MTregister_221118: "Неверный номер телефона",
            LANG_STRID_MTregister_221119: "Ваши пароли не совпадают. Введите повторно.",
            LANG_STRID_accinterception03: "Ваша текущая сеть нестабильна, попробуйте еще раз.",
            LANG_STRID_Accountswitch_220519: "Имя пользователя Moonton (обязательно)",
            LANG_STRID_UnbindPhone_230701: "Ваш текущий привязанный номер телефона: {0}.",
            LANG_STRID_UnbindPhone_230702: "После отвязки номер телефона больше не может использоваться в качестве ID вашего аккаунта Moonton для входа в игру с паролем.",
            LANG_STRID_UnbindPhone_230703: "Рекомендуется привязать ваш аккаунт Moonton к электронной почте перед отвязкой номера телефона.",
            LANG_STRID_UnbindPhone_230704: "Отвязать номер телефона",
            LANG_STRID_UnbindPhone_230705: "Вы не привязали электронную почту Moonton к своему аккаунту. Повторите попытку после ее привязки.",
            LANG_STRID_UnbindPhone_230706: "Коснитесь кнопки ниже, чтобы отправить код подтверждения на вашу привязанную почту Moonton: {0}.",
            LANG_STRID_UnbindPhone_230707: "Код подтверждения был отправлен на ваш адрес почты Moonton: {0}. Пожалуйста, проверьте.",
            LANG_STRID_UnbindPhone_230708: "Вы успешно отвязали номер телефона.",
            passwordError: "Вы ввели неверный пароль. Попробуйте снова.",
            passwordErrorWait: "Вы ввели неверный пароль. Попробуйте снова через {x} мин. {y} сек.",
            passwordErrorWaitSec: "Вы ввели неверный пароль. Попробуйте снова через {y} сек.",
            enterEmailTip: "Укажите корректный email, чтобы получить сообщение.",
            sendEmailTip: 'Коснитесь "Отправить код подтверждения", и мы направим письмо с кодом на указанный email. Введите код для завершения процесса подтверждения.',
            logInViaAccountPassword: "Вход с помощью пароля аккаунта",
            logInViaEmailVerification: "Вход с помощью подтверждения по email",
            enterEmailFirst: "Сначала введите свой адрес email",
            verificationCodeError: "Неправильный код подтверждения. Попробуйте снова.",
            unbindEmail: "Этот email не привязан к аккаунту Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "อีเมล",
            Password: "รหัสผ่าน",
            "Sign up": "ลงทะเบียน",
            "Forgot password": "ลืมรหัสผ่าน",
            "Create Your Moonton Account": "สร้างบัญชี Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "โปรดลงทะเบียนด้วยอีเมลที่ถูกต้อง เพื่อรับข้อมูลล่าสุดจากเกม",
            "Re-Enter Password": "ยืนยันรหัสผ่าน",
            "Please agree to the Moonton": "โปรดยอมรับข้อตกลงของ Moonton",
            "terms of service": "เงื่อนไขการใช้บริการ",
            Submit: "ยืนยัน",
            "E-Mail format error": "ที่อยู่อีเมลผิดพลาด",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "ใช้อักขระอย่างน้อย 6 ตัว และต้องประกอบด้วยตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลข และห้ามใช้ตัวอักษรพิเศษ",
            "These passwords dont' match": "รหัสผ่านไม่ตรงกัน",
            "Please enter your email address": "โปรดป้อนที่อยู่อีเมล",
            "Please enter your password": "โปรดกรอกรหัสผ่าน",
            "Please confirm your password": "โปรดยืนยันรหัสผ่านอีกครั้ง",
            "Please agree to the Moonton Terms of Service": "โปรดยอมรับในเงื่อนไขการใช้บริการของ Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "ส่งอีเมลสำหรับการยืนยันไปที่อีเมลของคุณเรียบร้อยแล้ว กรุณาตรวจสอบอีเมลของคุณเพื่อทำการยืนยันให้เสร็จสิ้น ถ้าหากไม่พบอีเมล กรุณาเช็กที่จดหมายขยะ",
            Confirm: "ยืนยัน",
            "Please enter your email address to receive the email with a new password.": "โปรดกรอกที่อยู่อีเมลของคุณ เพื่อรับอีเมลพร้อมรหัสผ่านใหม่",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "ส่งอีเมลรีเซ็ตรหัสผ่าน ไปยังอีเมลที่คุณผูกเอาไว้เรียบร้อยแล้ว กรุณาตรวจสอบอีเมลก่อนหมดเวลา",
            Continue: "ดำเนินการต่อ",
            "Sign in with your Moonton Account": "ล็อกอินด้วยบัญชี Moonton",
            "Sign in": "ล็อกอิน",
            Congratulations: "ยินดีด้วย!",
            "Your email": "อีเมล",
            "is confirmed. Thank you!": "ของคุณ ได้ยืนยันแล้วเรียบร้อย ขอบคุณมากค่ะ!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "ประกาศ",
            "Your account has already been confirmed.": "บัญชีของคุณได้รับการยืนยันแล้ว",
            "The link has expired Please request a new link in-gme. Thank you.": "ลิงก์หมดอายุไปแล้ว กรุณารับลิงก์ที่เกมใหม่อีกครั้ง",
            "Reset Password": "รีเซ็ตรหัสผ่าน",
            "New Password": "รหัสผ่านใหม่",
            "Re-Enter-Password": "ยืนยันรหัสผ่าน",
            "Please confirm your new password": "กรุณายืนยันรหัสผ่านใหม่",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "เปลี่ยนรหัสผ่านแล้ว กรุณาล็อกอินอีกครั้งด้วยรหัสผ่านใหม่",
            "Bind your Moonton Account": "ผูกบัญชี Moonton",
            "Check Your Email": "เช็กอีเมล",
            "Re-enter email": "ยืนยันอีเมล",
            "Email incompatible": "ที่อยู่อีเมลไม่ตรงกัน",
            "Please enter your password again": "กรุณากรอกรหัสผ่านอีกครั้ง",
            "Moonton Account": "บัญชี Moonton",
            "account rule": "ใช้ตัวอักษร, ตัวเลข หรือ _ จำนวน 6-20 ตัว โดยต้องขึ้นต้นด้วยตัวอักษร",
            "Send Verification Email": "ส่งอีเมลยืนยัน",
            "to email": "กรุณาเช็กกล่องจดหมาย เพื่อทำการยืนยันให้เสร็จสิ้น",
            "sended email": "จดหมายสำหรับการยืนยัน ถูกส่งไปที่",
            "change email": "เปลี่ยนอีเมล",
            "Email Registration": "ลงทะเบียนด้วยอีเมล",
            "Quick Registration": "ลงทะเบียนด่วน",
            "Accept the agreement and register": "ยอมรับในข้อตกลง & ลงทะเบียน",
            "same account": "มีผู้ใช้ชื่อนี้ไปแล้ว กรุณาลองเปลี่ยนเป็นชื่ออื่น",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "โปรดกรอกรหัสผ่านของบัญชี Moonton ที่ใช้อยู่ เพื่อทำการยืนยัน",
            "congratulations account": "ยินดีด้วยค่ะ! ตอนนี้คุณสร้างบัญชี Moonton สำเร็จแล้ว และได้ผูกเข้ากับไอดีเกมเรียบร้อยแล้วค่ะ",
            "empty email": "เพื่อความปลอดภัยของบัญชี เราขอแนะนำให้คุณผูกบัญชีเข้ากับที่อยู่อีเมล เพื่อให้สามารถล็อกอินผ่านอีเมล และเปลี่ยนรหัสผ่านของคุณได้",
            "used email": "อีเมลนี้ได้เคยผูกเข้ากับบัญชีอื่นไปแล้ว กรุณากรอกอีเมลใหม่ หรือกดล็อกอินด้วยอีเมลนี้",
            "useful email": "ส่งอีเมลยืนยันเข้าอีเมลที่ผูกไว้เรียบร้อยแล้ว กรุณาเช็กอีเมล เพื่อทำการยืนยันภายใน 24 ชั่วโมง ถ้าหากไม่พบจดหมาย กรุณาเช็กที่จดหมายขยะ",
            "Connect to Email": "ผูกกับอีเมล",
            unreset: "คุณจะไม่สามารถรีเซ็ตรหัสผ่านได้ ถ้าหากว่าบัญชี Moonton ของคุณยังไม่ได้ผูกกับอีเมลใดไว้เลย",
            emailtime1: "ส่งอีเมลใหม่อีกครั้งได้ในอีก",
            emailtime2: "วินาที โดยกดที่ปุ่มส่งอีเมล",
            "have fun": "ผูกบัญชีแล้วเรียบร้อย ขอให้เล่นเกมให้สนุกนะคะ!",
            "continue bind email": "ดำเนินการต่อเพื่อผูกอีเมล",
            "server error": "เซิร์ฟเวอร์ไม่ว่าง กรุณาลองใหม่ในภายหลัง",
            "wrong content": "ไม่ตรงตามเงื่อนไข",
            "enter right account": "โปรดกรอกอีเมลหรือบัญชี Moonton ที่ถูกต้อง",
            "reset email": "เปลี่ยนอีเมล",
            "send email1": "อีเมลยืนยันจะส่งไปที่อีเมลของคุณ:",
            "send email2": "โปรดกดตรงลิงก์ที่แนบมากับอีเมล เพื่อเปลี่ยนแปลงให้เสร็จสิ้น",
            "send email": "ส่งอีเมลเลย",
            "sended email1": "ลิงก์ได้ส่งไปที่",
            "sended email2": "อีเมล Moonton",
            "sended email3": "วินาที เพื่อส่งใหม่",
            "sended email4": "ลิงก์สำหรับการยืนยันได้ถูกส่งไปที่ :",
            "sended email5": "หมายเหตุ: บัญชีของคุณจะยังคงผูกอยู่กับอีเมลเก่าอยู่ จนกว่าจะเสร็จสิ้นกระบวนการเปลี่ยนแปลง",
            "empty code": "รหัสยืนยันจะปล่อยว่างไม่ได้",
            "wrong code": "รหัสยืนยันไม่ถูกต้อง",
            "enter new email code": "โปรดกรอกรหัสยืนยันที่ส่งไปยังอีเมลใหม่",
            "enter new email": "อีเมลใหม่",
            "send code fail": "การส่งรหัสยืนยันล้มเหลว",
            "send code success": "ส่งรหัสยืนยัน",
            "reset email success": "อีเมลมีการเปลี่ยนแปลงแล้ว",
            "reset emial fail": "การเปลี่ยนอีเมลล้มเหลว โปรดลองใหม่อีกครั้ง",
            "binded email": "อีเมลนี้ใช้ผูกกับบัญชีอื่นไปแล้ว",
            "send email fail": "ไม่สามารถส่งอีเมลได้ กรุณาตรวจสอบว่าได้มีการผูกกับบัญชี Moonton หรืออีเมลไปแล้วหรือไม่",
            "send code": "ส่งรหัส",
            "outdata link": "ลิงก์หมดอายุไปแล้ว",
            registed: "อีเมลนี้ถูกใช้ลงทะเบียนไปแล้ว โปรดใช้อีเมลอื่นแทน",
            frequent: "ดำเนินการล้มเหลวบ่อยเกินไป กรุณาลองใหม่ในภายหลังนะคะ",
            "phone code wrong": "รหัสยืนยันไม่ถูกต้อง",
            "binded phone": "บัญชีนี้ได้มีการผูกกับเบอร์มือถือไปแล้ว",
            "phone error": "เบอร์โทรไม่ถูกต้อง",
            "unbinded phone": "เบอร์นี้ยังไม่ได้ผูกกับบัญชีเกมใด ๆ",
            "zhanyong phone": "เบอร์นี้ถูกผูกกับบัญชีเกมอื่นไปแล้ว",
            "Phone Registration": "ลงทะเบียนด้วยมือถือ",
            Phone: "เบอร์มือถือ",
            Code: "รหัสยืนยันข้อความ",
            "Enter Phone": "โปรดกรอกเบอร์มือถือที่ถูกต้อง เพื่อรับข้อความจากเรา และทำการสร้างบัญชี Moonton",
            "Enter Code": "กดที่ปุ่มด้านขวา เพื่อส่งรหัสยืนยันผ่านทางข้อความ แล้วกรอกรหัสเพื่อทำการยืนยันให้เสร็จสิ้น",
            "send old phone1": "ส่งรหัสยืนยันไปยังอุปกรณ์เก่า",
            "a code": ".",
            "enter new phone": "โปรดดกรอกรหัสยืนยันสำหรับอุปกรณ์ใหม่ เพื่อทำการยืนยันให้เสร็จสิ้น",
            "quit change fail": "บัญชี Moonton นี้ จะยังคงผูกอยู่กับเบอร์มือถือเบอร์เก่าของคุณ จนกว่าจะทำการยืนยันเสร็จสิ้น",
            "change phone success": "เปลี่ยนเบอร์มือถือแล้ว",
            "change phone": "เปลี่ยนเบอร์มือถือ",
            "password err too many": "ดำเนินการล้มเหลวบ่อยเกินไป กรุณาลองใหม่อีกครั้งวันพรุ่งนี้",
            "email verification": "การยืนยันผ่านอีเมล ({0})",
            "Enter Email Code": "กดที่ปุ่มด้านขวา เพื่อทำการส่งรหัสยืนยัน แล้วใส่รหัสยืนยัน เพื่อยืนยันให้เสร็จสิ้น",
            "Email verification successful": "ยืนยันอีเมลสำเร็จ กรุณากรอกเบอร์มือถือที่คุณต้องการผูกกับบัญชี",
            "phone verification": "การยืนยันทางข้อความผ่านเบอร์มือถือ ({0})",
            "email sended and goto verify": "ส่งอีเมลยืนยันไปยัง {0} แล้ว กรุณาตรวจสอบอีเมล เพื่อทำการยืนยันให้เสร็จสิ้น",
            "Phone Number Connected": "ผูกเบอร์มือถือแล้ว",
            "add phone": "เพิ่มโทรศัพท์เพื่อความปลอดภัย",
            "add email": "เพิ่มอีเมลเพื่อความปลอดภัย",
            "email verification code holder": "รหัสยืนยันอีเมล",
            "phone verification successful": "ยืนยันมือถือเรียบร้อย กรุณากรอกอีเมลที่คุณต้องการจะผูกเข้ากับบัญชี:",
            "change passwrod tip": "หมายเหตุ: คุณสามารถเปลี่ยนรหัสผ่านบัญชี Moonton ที่ผูกอยู่กับอีเมลที่คุณกรอกมาได้เท่านั้น",
            "enter call code": "โปรดกรอกรหัสพื้นที่",
            wait: "ดำเนินการบ่อยครั้งเกินไป โปรดลองใหม่ในอีก {time} วินาที",
            dofrequent: "ดำเนินการบ่อยครั้งเกินไป โปรดลองใหม่อีกครั้งในภายหลัง",
            notman: "คำขอของคุณถูกปฏิเสธ เนื่องจากปัญหาทางด้านความปลอดภัย หากมีข้อสงสัยใด ๆ กรุณาติดต่อฝ่ายบริการลูกค้าของเรา",
            hint: "ประกาศ",
            "change binding tips": "การเปลี่ยนอีเมลกำลังอยู่ระหว่างการตรวจสอบ กรุณาอดใจรอ คุณสามารถกดยกเลิกการเปลี่ยนแปลงได้ในระหว่างนี้ เวลาก่อนจะสามารถเปลี่ยนที่อยู่อีเมล: {x}\n",
            "contact customer service": "หากคุณมีข้อสงสัยใด ๆ กรุณาติดต่อฝ่ายบริการลูกค้า",
            "i know": "โอเค",
            "cancel change": "ยกเลิก",
            "change pass": "การเปลี่ยนแปลงอีเมลของคุณได้รับการอนุมัติแล้ว กรุณายืนยันที่อยู่อีเมลใหม่: {x}",
            "confirm change": "เปลี่ยน",
            LANG_STRID_Accountchangepassword_220501: "กรุณากรอกหมายเลขมือถือที่ใช้เชื่อมต่อ เพื่อรับข้อความแจ้งรหัสผ่านในการรีเซ็ต",
            LANG_STRID_Accountchangepassword_220503: "หมายเหต: คุณสามารถเปลี่ยนรหัสผ่านสำหรับบัญชี Moonton ที่ใช้ผูกกับเบอร์มือถือที่คุณได้กรอกเอาไว้เท่านั้น",
            LANG_STRID_Accountchangepassword_220504: "การยืนยันอีเมล",
            LANG_STRID_Accountchangepassword_220505: "กลับ",
            LANG_STRID_Accountchangepassword_220506: "รีเซ็ตรหัสผ่าน Moonton",
            LANG_STRID_Accountchangepassword_220507: "กดส่งรหัส เพื่อส่งรหัสยืนยันไปยังเบอร์มือถือ และกรอกรหัสที่ได้เพื่อเสร็จสิ้นการยืนยัน",
            LANG_STRID_Accountchangepassword_220511: "ใช้ 6 อักขระ ที่มีทั้ง ตัวพิมพ์เล็ก ตัวพิมพ์ใหญ่ ตัวเลข และต้องไม่มีสัญลักษณ์พิเศษ",
            LANG_STRID_Accountchangepassword_220513: "รหัสผ่านผิดพลาด กรุณาลองใหม่",
            LANG_STRID_Accountchangepassword_220514: "รหัสผ่านไม่ตรงกัน กรุณาลองใหม่",
            LANG_STRID_Accountchangepassword_220515: "รหัสยืนยันตัวผิด กรุณาลองใหม่",
            LANG_STRID_Accountchangepassword_220516: "รหัสผ่านได้รับการรีเซ็ตแล้ว",
            LANG_STRID_Accountchangepassword_220517: "รับรหัส",
            LANG_STRID_Accountchangepassword_220518: "ตรวจสอบการล็อกอิน",
            LANG_STRID_Accountchangepassword_220519: "โปรดกรอกเบอร์โทร และรหัสยืนยันให้ถูกต้อง เพื่อสิ้นสุดข้นตอนการตรวจสอบ",
            LANG_STRID_Accountchangepassword_220520: "โปรดกรอกเบอร์โทรที่ถูกต้อง เพื่อรับรหัสยืนยัน",
            LANG_STRID_Accountchangepassword_220521: "แจ้งเตือนการล็อกอิน",
            LANG_STRID_Accountchangepassword_220522: "สลับบัญชีเรียบร้อยแล้ว กรุณาเข้าเกมใหม่อีกครั้ง",
            LANG_STRID_Accountchangepassword_220523: "ล็อกอินสำเร็จ โปรดเข้าเกมใหม่อีกครั้ง",
            LANG_STRID_Accountchangepassword_220524: "ที่อยู่ Email/บัญชี Moonton/เบอร์โทร",
            LANG_STRID_Accountchangepassword_220525: "รหัสผ่าน Moonton ของคุณรีเซ็ตแล้วเรียบร้อย",
            LANG_STRID_Accountswitch_220501: "เปลี่ยนที่อยู่อีเมล",
            LANG_STRID_Accountswitch_220502: "ส่งรหัสยืนยันไปยังอีเมล {0}",
            LANG_STRID_Accountswitch_220503: "รหัสยืนยันอีเมล",
            LANG_STRID_Accountswitch_220504: "กดที่ปุ่มตรงด้านขวาเพื่อส่งรหัสยืนยันไปยังอีเมล แล้วกรอกรหัสเพื่อเสร็จสิ้นการยืนยันตัวตน",
            LANG_STRID_Accountswitch_220505: "ส่งรหัสยืนยันไปยังมือถือ {0}",
            LANG_STRID_Accountswitch_220506: "กรุณากรอกอีเมลที่ใช้งานได้",
            LANG_STRID_Accountswitch_220507: "ส่งรหัสยืนยันไปยังอีเมลของคุณแล้ว",
            LANG_STRID_Accountswitch_220508: "กรุณากรอกรหัสยืนยันและที่อยู่อีเมลให่ที่ด้านล่างนี้ แล้วทำการยืนยันตัวตนให้เสร็จสิ้น",
            LANG_STRID_Accountswitch_220509: "บัญชี Moonton ของคุณ จะยังคงเชื่อมต่อกับบัญชีอีเมลเก่าอยู่ จนกว่ากระบวนการยืนยันจะเสร็จสิ้น",
            LANG_STRID_Accountswitch_220510: "กรุณากรอกที่อยู่อีเมลอันใหม่",
            LANG_STRID_Accountswitch_220511: "กรุณากรอกที่อยู่อีเมลที่ใช้งานได้ เพื่อรับรหัสยืนยัน",
            LANG_STRID_Accountswitch_220512: "แน่ใจหรือไม่ว่าต้องการจะยกเลิกคำร้องขอ?",
            LANG_STRID_Accountswitch_220513: "ยกเลิกคำร้องขอ",
            LANG_STRID_Accountswitch_220514: "คำร้องขออยู่ในระหว่างการตรวจสอบ กรุณาอดใจรอ คุณสามารถเลือกยกเลิกคำร้องขอได้ในระหว่างกระบวนการนี้ อีเมลของคุณจะสามารถเปลี่ยนได้ใน {x} วัน {y} ชม. {z} น. หากมีข้อสงสัยประการใด กรุณาติดต่อฝ่ายบริการลูกค้า",
            LANG_STRID_Accountswitch_220516: "ส่งรหัสยืนยันเข้ามือถือ <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "คำขอกำลังอยู่ในระหว่างการตรวจสอบ โปรดรอก่อนสักครู่ ทั้งนี้ คุณสามารถกดยกเลิกคำขอในระหว่างกระบวนการนี้ได้ สามารถเปลี่ยนอีเมลได้ในอีก <span>{x}วัน {y}ชม. {z}น.</span> หากมีข้อสงสัยใด กรุณาติดต่อเราผ่านฝ่ายบริการได้ทันที",
            LANG_STRID_Accountswitch_220518: "ส่งรหัสยืนยันไปยังอีเมล <span>{0}</span>",
            LANG_STRID_MTregister_221101: "ลงทะเบียนอีเมลด่วน",
            LANG_STRID_MTregister_221102: "อีเมล",
            LANG_STRID_MTregister_221103: "กรุณาใส่บัญชีและรหัสผ่าน Moonton ของคุณ",
            LANG_STRID_MTregister_221104: "กรุณายืนยันว่าบัญชีและรหัสผ่าน Moonton ถูกต้อง",
            LANG_STRID_MTregister_221105: "กรุณาใส่รหัสผ่านใหม่อีกครั้ง",
            LANG_STRID_MTregister_221106: "บัญชี Moonton ตั้งเอง (ไม่บังคับ)",
            LANG_STRID_MTregister_221107: "จำเป็นต้องมี 6-20 ตัวอักษร หรือขีดล่าง หรือตัวเลข แต่ต้องขึ้นต้นด้วยตัวอักษร",
            LANG_STRID_MTregister_221108: "ฉันอ่านและยอมรับข้อตกลงการใช้งานแล้ว",
            LANG_STRID_MTregister_221109: "ผูกบัญชี Moonton ของคุณ",
            LANG_STRID_MTregister_221110: "อีเมลยืนยันตัวตนได้ส่งไปยังอีเมลที่คุณผูกกับบัญชีเอาไว้แล้ว กรุณาทำการยืนยันภายใน 24 ชม. ถ้าหากว่าคุณยังไม่ได้รับอีเมล กรุณาตรวจสอบที่โฟลเดอร์ขยะว่ามีหรือไม่",
            LANG_STRID_MTregister_221111: "ยืนยันด้วยอีเมล",
            LANG_STRID_MTregister_221112: "คุณได้ทำการผูกบัญชี Moonton เรียบร้อยแล้ว ตอนนี้จะสามารถล็อกอินบัญชีด้วยอีเมลและรหัสผ่าน Moonton ได้แล้ว",
            LANG_STRID_MTregister_221113: "อีเมลไม่ถูกต้อง",
            LANG_STRID_MTregister_221114: "คุณผูกเบอร์โทรศัพท์เรียบร้อยแล้ว",
            LANG_STRID_MTregister_221115: "ลงทะเบียนเบอร์โทรแบบด่วน",
            LANG_STRID_MTregister_221116: "กรอกเบอร์โทรศัพท์ของคุณ",
            LANG_STRID_MTregister_221117: "กรุณาใส่บัญชีและรหัสผ่าน Moonton ที่คุณใช้อยู่ เพื่อให้เรายืนยันตัวตนของคุณได้",
            LANG_STRID_MTregister_221118: "เบอร์โทรไม่ถูกต้อง",
            LANG_STRID_MTregister_221119: "รหัสผ่านของคุณไม่ตรงกัน กรุณาใส่ใหม่อีกครั้ง",
            LANG_STRID_accinterception03: "เครือข่ายปัจจุบันของคุณไม่เสถียร โปรดลองอีกครั้ง",
            LANG_STRID_Accountswitch_220519: "ชื่อผู้ใช้งาน Moonton (ต้องมี)",
            LANG_STRID_UnbindPhone_230701: "เบอร์โทรศัพท์ที่คุณใช้ผูกอยู่ตอนนี้คือ {0}",
            LANG_STRID_UnbindPhone_230702: "เมื่อยกเลิกการผูกไปแล้ว เบอร์โทรศัพท์เบอร์นี้จะไม่สามารถใช้เป็น ID บัญชี Moonton เพื่อล็อกอินเข้าสู่เกมพร้อมรหัสผ่านได้อีก",
            LANG_STRID_UnbindPhone_230703: "เราขอแนะนำให้ทำการผูกบัญชี Moonton เข้ากับอีเมลก่อนที่จะยกเลิกการผูกกับเบอร์โทรศัพท์นี้",
            LANG_STRID_UnbindPhone_230704: "ยกเลิกการผูกกับเบอร์โทรศัพท์",
            LANG_STRID_UnbindPhone_230705: "คุณยังไม่ได้เชื่อมต่ออีเมล Moonton เข้ากับบัญชีของคุณ โปรดลองอีกครั้งหลังจากเชื่อมต่อกับอีเมล Moonton",
            LANG_STRID_UnbindPhone_230706: "กดที่ปุ่มด้านล่างนี้ เพื่อส่งรหัสยืนยันเข้าอีเมลของคุณที่ผูกไว้กับบัญชี Moonton {0}",
            LANG_STRID_UnbindPhone_230707: "ส่งรหัสยืนยันเข้าอีเมล Moonton นี้แล้ว {0} กรุณาเช็กอีเมล",
            LANG_STRID_UnbindPhone_230708: "คุณยกเลิกการผูกกับเบอร์โทรศัพท์เรียบร้อยแล้ว",
            passwordError: "รหัสผ่านที่คุณป้อนมาไม่ถูกต้อง โปรดลองใหม่อีกครั้ง",
            passwordErrorWait: "รหัสผ่านที่คุณป้อนนั้นไม่ถูกต้อง กรุณาลองใหม่ในอีก {x} นาที {y} วินาที",
            passwordErrorWaitSec: "รหัสผ่านที่คุณป้อนนั้นไม่ถูกต้อง กรุณาลองใหม่ในอีก {y} วินาที",
            enterEmailTip: "กรุณากรอกที่อยู่อีเมลที่ถูกต้องเพื่อรับข้อความจากเรา",
            sendEmailTip: 'แตะ "ส่งรหัสยืนยัน" แล้วเราจะส่งอีเมลที่มีรหัสยืนยันไปยังที่อยู่ที่คุณให้ไว้ ป้อนรหัสเพื่อเสร็จสิ้นกระบวนการตรวจสอบ',
            logInViaAccountPassword: "ล็อกอินด้วยรหัสผ่านบัญชี",
            logInViaEmailVerification: "ล็อกอินผ่านการยืนยันอีเมล",
            enterEmailFirst: "กรุณากรอกที่อยู่อีเมลของคุณก่อน",
            verificationCodeError: "รหัสยืนยันไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง",
            unbindEmail: "อีเมลนี้ผูกกับบัญชี Moonton ไปแล้ว"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Email Address",
            Password: "Password",
            "Sign up": "Sign Up",
            "Forgot password": "Nakalimutan ang Password",
            "Create Your Moonton Account": "Gumawa ng Moonton Account",
            "To obtain the latest information about us, please sign up with a valid email": "Mangyaring ilagay ang isang valid na email address upang matanggap ang pinakabagong impormasyon ng laro",
            "Re-Enter Password": "Kumpirmahin ang Password",
            "Please agree to the Moonton": "Mangyaring sumang-ayon sa Moonton",
            "terms of service": "Terms of Service",
            Submit: "I-submit",
            "E-Mail format error": "Invalid ang email address",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Gumamit ng 6 o higit pang mga character na may kasamang mga malalaki at maliliit na letra, numero, at walang mga espesyal na simbolo",
            "These passwords dont' match": "Ang mga password ay hindi nagtugma",
            "Please enter your email address": "Mangyaring ilagay ang iyong email address",
            "Please enter your password": "Mangyaring ilagay ang iyong password",
            "Please confirm your password": "Mangyaring kumpirmahin ang iyong password",
            "Please agree to the Moonton Terms of Service": "Mangyaring sumang-ayon para sa Terms of Service ng Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Isang verification email ang naipadala sa iyong email address. Mangyaring i-tap ang link na kalakip sa email at kumpletuhin ang verification. Kung hindi mo nakikita ang email, mangyaring tignan ang iyong junk folder.",
            Confirm: "Kumpirmahin",
            "Please enter your email address to receive the email with a new password.": "Mangyaring ilagay ang iyong nakakonektang email address upang matanggap ang password reset email.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Isang password reset email ang naipadala sa iyong nakakonekta na email address. Mangyaring tignan ang email sa tamang oras!",
            Continue: "Magpatuloy",
            "Sign in with your Moonton Account": "Mag-login gamit ang Moonton Account",
            "Sign in": "Mag-login",
            Congratulations: "Congratulations",
            "Your email": "Ang iyong account (",
            "is confirmed. Thank you!": ") ay nagawa na. Maligayang paglalaro!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Paunawa",
            "Your account has already been confirmed.": "Ang account ay nagawa na.",
            "The link has expired Please request a new link in-gme. Thank you.": "Ang link ay nag-expire na. Mangyaring ipadala muli ang link sa laro.",
            "Reset Password": "I-reset ang Password",
            "New Password": "Bagong Password",
            "Re-Enter-Password": "Kumpirmahin ang Password",
            "Please confirm your new password": "Mangyaring kumpirmahin ang iyong password",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Nabago na ang password. Mangyaring mag-log in muli gamit ang iyong bagong password.",
            "Bind your Moonton Account": "Ikonekta ang Moonton Account",
            "Check Your Email": "I-check ang Email",
            "Re-enter email": "Kumpirmahin ang Email",
            "Email incompatible": "Ang mga email address ay hindi nagtugma",
            "Please enter your password again": "Kumpirmahin ang Password",
            "Moonton Account": "Moonton Account",
            "account rule": "Gumamit ang 6-20 na mga letra, digit, o _ at magsimula gamit ang isang letra",
            "Send Verification Email": "Ipadala ang Email",
            "to email": "Isang verification email ang naipadala sa iyong",
            "sended email": ". Mangyaring suriin ang tignan sa iyong mailbox.",
            "change email": "Palitan ang Email Address",
            "Email Registration": "Mag-Sign Up gamit ang Email",
            "Quick Registration": "Mabilis na Sign Up",
            "Accept the agreement and register": "TANGGAPIN ANG AGREEMENT AT MAG-SIGN UP",
            "same account": "Ang username ay nagamit na. Mangyaring sumubok ng isa pa.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Mangyaring ilagay ang password para sa kasalukuyang Moonton account para sa verification.",
            "congratulations account": "Congratulations! Ikaw ay nakagawa ng isang Moonton Account at naikonekta ito sa iyong kasalukuyang game progress.",
            "empty email": "Para sa seguridad ng iyong account, inirerekomenda namin na ikonekta mo ang account sa isang email address para ikaw ay maka-log in sa account gamit ang email address at palitan ang iyong password.",
            "used email": "Ang email address ay nakakonekta na sa isa pang account. Mangyaring subukan ang iba pa o mag-log in sa account sa pamamagitan ng Switch Account.",
            "useful email": "Isang verification email ay naipadala sa iyong nakakonekta na email address. Mangyaring i-tap ang link na kasama sa email at kumpletuhin ang verification sa loob ng 24 oras. Kung hindi mo nakita ang email, mangyaring tignan ang iyong junk folder.",
            "Connect to Email": "Ikonekta ang Email",
            unreset: "Hindi mo mare-reset ang password kung ang iyong Moonton Account ay hindi kontektado sa isang email address.",
            emailtime1: "Maaari mong ipadala muli ang email sa loob ng",
            emailtime2: "segundo.",
            "have fun": "Nakakonekta na ang account. Maligayang paglalaro!",
            "continue bind email": "Ikonekta ang Email Address",
            "server error": "Busy ang server ngayon. Mangyaring subukan muli mamaya.",
            "wrong content": "Ang mga kinakailangan ay hindi naabot.",
            "enter right account": "Mangyaring ilagay ang isang valid email address o Moonton account",
            "reset email": "Palitan ang Email Address",
            "send email1": "Isang verification email ang ipapadala sa {x}. Mangyaring i-tap ang link na kasama sa email upang kumpletuhin ang pagpapalit.",
            "send email2": "Mangyaring i-tap ang link na kasama sa email para kumpletuhin ang pagpalit.",
            "send email": "Ipadala ang Email",
            "sended email1": "Isang verification email ang naipadala sa",
            "sended email2": ". Maaari mong ipadala muli ang email sa loob ng",
            "sended email3": "segundo.",
            "sended email4": "Isang verification email ang naipadala sa",
            "sended email5": ". Tandaan: Bago makumpleto ang pagpapalit, ang iyong account ay mananatiling nakakonekta sa iyong lumang email address.",
            "empty code": "Hindi pwedeng blangko ang Verification code",
            "wrong code": "Invalid ang verification code",
            "enter new email code": "Mangyaring ilagay ang verification code",
            "enter new email": "Bagong Email Address",
            "send code fail": "Nabigo ang Operation.",
            "send code success": "Naipadala ang Verification code",
            "reset email success": "Napalitan na ang Email address.",
            "reset emial fail": "Nabigo ang Operation. Mangyaring subukan muli.",
            "binded email": "Ang email address ay nakakonekta na sa iba pang account.",
            "send email fail": "Nabigo ang Operation. Mangyaring suriin kung nakonekta mo na ang isang Moonton account at email address.",
            "send code": "Ipadala ang Code",
            "outdata link": "Ang link ay nag-expire.",
            registed: "Ang email address ay nakakonekta sa iba pang account. Mangyaring sumubok ng iba pa.",
            frequent: "Masyadong maraming mga nabigong pagsubok. Mangyaring subukan muli mamaya.",
            "phone code wrong": "Invalid ang verification code",
            "binded phone": "Ang account ay nakakonekta na sa isang phone number",
            "phone error": "Invalid ang phone number",
            "unbinded phone": "Ang phone number ay hindi nakakonekta sa isang account",
            "zhanyong phone": "Ang phone number ay nakakonekta na sa isang account",
            "Phone Registration": "Mag-Sign Up gamit ang Phone",
            Phone: "Phone Number",
            Code: "Verification Code",
            "Enter Phone": "Mangyaring ilagay ang isang valid phone number para matanggap ang verification code",
            "Enter Code": "I-tap ang button sa kanan para ipadala ang isang verification code sa iyong phone number at ilagay ang code para kumpletuhin ang verification.",
            "send old phone1": "Ipadala ang isang verification code sa",
            "a code": ".",
            "enter new phone": "Mangyaring ilagay ang verification code para kumpletuhin ang verification",
            "quit change fail": "Hanggang makumpleto ang verification, ang iyong Moonton account ay nakakonekta pa din sa iyong lumang phone number.",
            "change phone success": "Nabago na ang phone number.",
            "change phone": "Palitan ang Phone Number",
            "password err too many": "Masyadong madaming nabigong mga pagsubok. Mangyaring subukan muli bukas.",
            "email verification": "Email Verification ({0})",
            "Enter Email Code": "I-tap ang button sa kanan para ipadala ang isang verification code sa iyong email address at ilagay ang verification code para kumpletuhin ang verification.",
            "Email verification successful": "Nagtagumpay ang Email verification. Mangyaring ilagay ang phone number na gusto mong ikonekta.",
            "phone verification": "Phone Verification ({0})",
            "email sended and goto verify": "Isang verification email ang naipadala sa {0}. Mangyaring i-tap ang link na kasama sa email at kumpletuhin ang verification.",
            "Phone Number Connected": "Nakonekta na ang Phone number.",
            "add phone": "Ikonekta ang Phone Number",
            "add email": "Ikonekta ang Email Address",
            "email verification code holder": "Verification Code",
            "phone verification successful": "Ang Phone verification ay nagtagumpay. Mangyaring ilagay ang email address na gusto mong ikonekta.",
            "change passwrod tip": "Tandaan: Maaari mo lamang palitan ang password para sa Moonton account na nakakonekta sa email address na iyong nilagay.",
            "enter call code": "Mangyaring pumili ng iyong area code",
            wait: "Masyadong maraming mga pagsubok. Mangyaring subukan muli sa loob ng {time}s.",
            dofrequent: "Masyadong maraming mga pagsubok. Mangyaring subukan muli mamaya.",
            notman: "Dahil sa mga kadahilanang pangseguridad, tinanggihan ang iyong request sa pag-log in. Mangyaring makipag-ugnayan sa Customer Service kung mayroon kang anumang mga katanungan.",
            hint: "Paunawa",
            "change binding tips": "Kasalukuyang sinusuri ang pagbabago ng email. Mangyaring maghintay. Maaari mong kanselahin ang pagbabago sa panahon ng prosesong ito. Ang oras bago mo mapalitan ang email address: {x}.",
            "contact customer service": "Kung mayroon kang anumang mga katanungan, mangyaring makipag-ugnayan sa Customer Service.",
            "i know": "Okay",
            "cancel change": "Kanselahin",
            "change pass": "Ang iyong pagbabago ng email ay naaprubahan, mangyaring kumpirmahin ang iyong bagong email address: {x}",
            "confirm change": "Palitan",
            LANG_STRID_Accountchangepassword_220501: "Mangyaring ilagay ang iyong nakakonektang phone number upang matanggap ang mensahe sa pag-reset ng password..",
            LANG_STRID_Accountchangepassword_220503: "Tandaan: Maaari mo lamang baguhin ang password para sa Moonton account na konektado sa phone number na iyong inilagay.",
            LANG_STRID_Accountchangepassword_220504: "Email Verification",
            LANG_STRID_Accountchangepassword_220505: "Bumalik",
            LANG_STRID_Accountchangepassword_220506: "I-reset ang Moonton Password",
            LANG_STRID_Accountchangepassword_220507: "I-tap ang Send Code upang magpadala ng verification code sa iyong phone number at ilagay ang code upang makumpleto ang verification.",
            LANG_STRID_Accountchangepassword_220511: "Gumamit ng 6 o higit pang mga character na may pinaghalong malalaking titik at maliliit na titik, numero, at walang mga espesyal na simbolo.",
            LANG_STRID_Accountchangepassword_220513: "Hindi valid na password. Mangyaring subukan muli.",
            LANG_STRID_Accountchangepassword_220514: "Ang mga password ay hindi tugma. Mangyaring subukan muli.",
            LANG_STRID_Accountchangepassword_220515: "Hindi valid na verification code. Mangyaring subukan muli.",
            LANG_STRID_Accountchangepassword_220516: "Na-reset ang iyong password.",
            LANG_STRID_Accountchangepassword_220517: "Kunin ang Code",
            LANG_STRID_Accountchangepassword_220518: "Pag-verify sa Pag-login",
            LANG_STRID_Accountchangepassword_220519: "Mangyaring ilagay ang iyong phone number at verification code upang makumpleto ang pag-verify.",
            LANG_STRID_Accountchangepassword_220520: "Mangyaring maglagay ng valid na phone number upang matanggap ang verification code.",
            LANG_STRID_Accountchangepassword_220521: "Paunawa sa Pag-login",
            LANG_STRID_Accountchangepassword_220522: "Lumipat ng account. Mangyaring pumasok muli sa laro.",
            LANG_STRID_Accountchangepassword_220523: "Tagumpay sa pag-log in. Mangyaring pumasok muli sa laro.",
            LANG_STRID_Accountchangepassword_220524: "Email Address/Moonton Account/Phone Number",
            LANG_STRID_Accountchangepassword_220525: "Ang iyong Moonton password ay na-reset.",
            LANG_STRID_Accountswitch_220501: "Palitan ang Email Address",
            LANG_STRID_Accountswitch_220502: "Ipadala ang Verification Code sa Email {0}",
            LANG_STRID_Accountswitch_220503: "Email Verification Code",
            LANG_STRID_Accountswitch_220504: "I-tap ang button sa kanan upang magpadala ng verification code sa iyong email address at ilagay ang code upang makumpleto ang pag-verify.",
            LANG_STRID_Accountswitch_220505: "Ipadala ang Verification Code sa Phone {0}",
            LANG_STRID_Accountswitch_220506: "Mangyaring ilagay ang valid na email address.",
            LANG_STRID_Accountswitch_220507: "Naipadala na ang verification code sa iyong email address.",
            LANG_STRID_Accountswitch_220508: "Mangyaring ilgay ang verification code at ang iyong bagong email address sa ibaba at kumpletuhin ang pag-verify.",
            LANG_STRID_Accountswitch_220509: "Hanggang sa makumpleto ang pag-verify, nakakonekta pa rin ang iyong Moonton account sa iyong nakaraang email address.",
            LANG_STRID_Accountswitch_220510: "Mangyaring ilagay ang iyong bagong email address.",
            LANG_STRID_Accountswitch_220511: "Mangyaring ilagay ang valid na email address upang matanggap ang verification code.",
            LANG_STRID_Accountswitch_220512: "Sigurado ka bang gusto mong kanselahin ang request?",
            LANG_STRID_Accountswitch_220513: "Kanselahin ang Request",
            LANG_STRID_Accountswitch_220514: "Kasalukuyang sinusuri ang request. Mangyaring maghintay. Maaari mong piliing kanselahin ang request sa panahon ng prosesong ito. Maaaring baguhin ang iyong email address sa {x}d {y}h {z}m. Kung mayroon kang anumang mga katanungan, mangyaring makipag-ugnayan sa Customer Service.",
            LANG_STRID_Accountswitch_220516: "Ipdala ang Verification Code sa Phone <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Kasalukuyang nire-review ang request. Mangyaring maghintay. Maaari mong piliing kanselahin ang request sa panahon ng prosesong ito. Maaaring baguhin ang iyong email address sa <span>{x}d {y}h {z}m</span>. Kung mayroon kang anumang mga katanungan, mangyaring makipag-ugnayan sa Customer Service.",
            LANG_STRID_Accountswitch_220518: "Ipadala ang Verification Code sa Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Quick Email Registration",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Mangyaring ilagay ang iyong Moonton account at password",
            LANG_STRID_MTregister_221104: "Mangyaring kumpirmahin ang iyong Moonton account at password",
            LANG_STRID_MTregister_221105: "Mangyaring ilagay muli ang iyong password",
            LANG_STRID_MTregister_221106: "Moonton Username (opsyonal)",
            LANG_STRID_MTregister_221107: "Dapat binubuo ng mga 6-20 letra, underscore, o numero, at dapat magsimula sa isang letra.",
            LANG_STRID_MTregister_221108: "Nabasa ko at sumasang-ayon ako sa mga Tuntunin ng Paggamit.",
            LANG_STRID_MTregister_221109: "I-bind ang Iyong Moonton Account",
            LANG_STRID_MTregister_221110: "Naipadala na ang verification email sa email na naka-bind sa iyong account. Mangyarig i-verify sa loob ng 24 na oras. Kung hindi mo pa natatanggap ang email, mangyaring tignan ang junk folder upang makita kung naroon ito.",
            LANG_STRID_MTregister_221111: "I-verify gamit ang email",
            LANG_STRID_MTregister_221112: "Matagumpay mong nai-bind ang iyong Moonton Account. Ngayon ay maaari ka nang mag-log in gamit ang iyong Moonton email at password.",
            LANG_STRID_MTregister_221113: "Invalid email",
            LANG_STRID_MTregister_221114: "Matagumpay mong nai-bind ang iyong phone number.",
            LANG_STRID_MTregister_221115: "Mabilis na Pagpaparehistro ng Phone",
            LANG_STRID_MTregister_221116: "Ilagay ang iyong phone number",
            LANG_STRID_MTregister_221117: "Mangyaring ilagay ang Moonton account at password na kasalukuyan mong ginagamit upang matulungan kaming kumpirmahin ang iyong pagkakakilanlan.",
            LANG_STRID_MTregister_221118: "Di-wastong phone number",
            LANG_STRID_MTregister_221119: "Hindi nagtutugma ang iyong mga password. Mangyaring ilagay muli.",
            LANG_STRID_accinterception03: "Ang iyong kasalukuyang network ay hindi maayos. Mangyaring subukuan muli. ",
            LANG_STRID_Accountswitch_220519: "Moonton Username (kinakailangan)",
            LANG_STRID_UnbindPhone_230701: "Ang iyong kasalukuyang nakakonektang numero ng phone ay {0}. ",
            LANG_STRID_UnbindPhone_230702: "Sa oras na ma-disconnect, hindi na magagamit ang numero ng phone bilang iyong Moonton account ID upang mag-log in sa laro gamit ang password. ",
            LANG_STRID_UnbindPhone_230703: "Inirerekomenda na ikonekta ang iyong Moonton account sa email bago i-disconnect ang iyong numero ng phone.",
            LANG_STRID_UnbindPhone_230704: "I-disconnect ang Phone Number",
            LANG_STRID_UnbindPhone_230705: "Hindi pa nakakonekta ang Moonton email sa iyong account. Mnagyaring subukan muli pagkatapos kumonekta sa isang Moonton email.",
            LANG_STRID_UnbindPhone_230706: "I-tap ang button sa ibaba upang magpadala ng verification code sa iyong nakakonektang Moonton email {0}.",
            LANG_STRID_UnbindPhone_230707: "Isang verification code ang ipinadala sa iyong Moonton email address {0}. Mangyaring tignan.",
            LANG_STRID_UnbindPhone_230708: "Matagumpay mong na-disconnect ang iyong phone number.",
            passwordError: "Ang password na iyong inilagay ay mali. Mangyaring subukan muli.",
            passwordErrorWait: "Ang password na iyong inilagay ay mali. Mangyaring subukan muli sa loob ng {x} minuto {y} segundo.",
            passwordErrorWaitSec: "Ang password na iyong inilagay ay mali. Mangyaring subukan muli sa loob ng {y} segundo.",
            enterEmailTip: "Mangyaring maglagay ng valid na email address upang matanggap ang aming mensahe.",
            sendEmailTip: 'I-tap ang "Ipadala ang Verification Code" at magpapadala kami ng email na naglalaman ng verification code sa address na iyong ibinigay. Ilagay ang code upang makumpleto ang proseso ng pag-verify.',
            logInViaAccountPassword: "Mag-log in sa pamamagitan ng account password",
            logInViaEmailVerification: "Mag-log in sa pamamagitan ng email verification",
            enterEmailFirst: "Mangyaring ilagay muna ang iyong email address",
            verificationCodeError: "Hindi valid na verification code. Mangyaring subukan muli.",
            unbindEmail: "Ang email ay hindi konektado sa isang na Moonton account"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "E-posta Adresi",
            Password: "Şifre",
            "Sign up": "Kayıt Ol",
            "Forgot password": "Şifremi Unuttum",
            "Create Your Moonton Account": "Moonton Hesabı Oluştur",
            "To obtain the latest information about us, please sign up with a valid email": "Oyunla ilgili en son haberleri almak için lütfen geçerli bir e-posta adresi gir",
            "Re-Enter Password": "Şifreyi Onayla",
            "Please agree to the Moonton": "Lütfen kabul et",
            "terms of service": "Hizmet Koşulları",
            Submit: "Gönder",
            "E-Mail format error": "Geçersiz e-posta adresi",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Büyük harf, küçük harf ve sayıların karışımıyla 6 veya daha fazla karakter kullan. Özel semboller kabul edilmez",
            "These passwords dont' match": "Şifreler uyuşmuyor",
            "Please enter your email address": "Lütfen e-posta adresini gir",
            "Please enter your password": "Lütfen şifreni gir",
            "Please confirm your password": "Lütfen şifreni onayla",
            "Please agree to the Moonton Terms of Service": "Lütfen Moonton Hizmet Koşullarını kabul et",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "E-posta adresine bir doğrulama e-postası gönderildi. Lütfen e-postada bulunan linke tıkla ve doğrulamayı tamamla. E-postayı bulamıyorsan lütfen önemsiz klasörünü kontrol et.",
            Confirm: "Onayla",
            "Please enter your email address to receive the email with a new password.": "Şifre sıfırlama e-postası almak için lütfen bağlı e-posta adresini gir.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Bağlı e-posta adresine bir şifre sıfırlama e-postası gönderildi. Lütfen e-postanı zamanında kontrol etmeyi unutma!",
            Continue: "Devam",
            "Sign in with your Moonton Account": "Moonton Hesabı ile Giriş Yap",
            "Sign in": "Giriş Yap",
            Congratulations: "Tebrikler",
            "Your email": "Hesabın (",
            "is confirmed. Thank you!": ") oluşturuldu. Mutlu oyunlar!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Duyuru",
            "Your account has already been confirmed.": "Hesap zaten oluşturuldu.",
            "The link has expired Please request a new link in-gme. Thank you.": "Linkin süresi doldu. Lütfen oyundaki linki tekrar gönder.",
            "Reset Password": "Şifreyi Sıfırla",
            "New Password": "Yeni Şifre",
            "Re-Enter-Password": "Şifreyi Onayla",
            "Please confirm your new password": "Lütfen şifreni onayla",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Şifre değiştirildi. Lütfen yeni şifrenle tekrardan giriş yap.",
            "Bind your Moonton Account": "Moonton Hesabını Bağla",
            "Check Your Email": "E-postanı kontrol et",
            "Re-enter email": "E-postanı Onayla",
            "Email incompatible": "E-posta adresleri uyuşmuyor",
            "Please enter your password again": "Şifreyi Onayla",
            "Moonton Account": "Moonton Hesabı",
            "account rule": "6-20 harf, rakam veya _ kullan ve bir harfle başla",
            "Send Verification Email": "E-posta Gönder",
            "to email": "Doğrulama e-postası şu adrese gönderildi:",
            "sended email": ". Lütfen posta kutundaki e-postayı kontrol et.",
            "change email": "E-posta Adresini Değiştir",
            "Email Registration": "E-posta ile Kaydol",
            "Quick Registration": "Hızlı Kayıt",
            "Accept the agreement and register": "SÖZLEŞMEYİ KABUL ET & KAYDOL",
            "same account": "Bu kullanıcı adı zaten kullanılmakta. Lütfen başka bir ad seç.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Lütfen doğrulama için mevcut Moonton hesabının şifresini gir.",
            "congratulations account": "Tebrikler! Bir Moonton Hesabı oluşturdun ve bunu mevcut oyun ilerlemene bağladın.",
            "empty email": "Hesap güvenliği için, hesabını bir e-posta adresine bağlamanı öneririz. Böylece e-posta adresiyle hesaba giriş yapabilir ve şifreni değiştirebilirsin.",
            "used email": "E-posta adresi zaten başka bir hesaba bağlı. Lütfen başka bir e-posta adresiyle dene veya Hesap Değiştir ile hesaba giriş yap.",
            "useful email": "Bağlı e-posta adresine bir doğrulama e-postası gönderildi. Lütfen e-postada bulunan linke tıkla ve doğrulamayı 24 saat içinde tamamla. E-postayı görmüyorsan lütfen önemsiz klasörünü kontrol et.",
            "Connect to Email": "E-postayı Bağla",
            unreset: "Moonton Hesabın bir e-posta adresine bağlı değilse şifreni sıfırlayamazsın.",
            emailtime1: "E-postanın yeniden gönderilebilmesine:",
            emailtime2: "sn.",
            "have fun": "Hesap bağlandı. İyi oyunlar!",
            "continue bind email": "E-posta Adresini Bağla",
            "server error": "Sunucu şu anda meşgul. Lütfen daha sonra tekrar dene.",
            "wrong content": "Koşullar karşılanmadı.",
            "enter right account": "Lütfen geçerli bir e-posta adresi veya Moonton hesabı gir",
            "reset email": "E-posta adresini değiştir",
            "send email1": "{x} adresine doğrulama e-postası gönderilecektir. E-postaya gelen linke tıklayarak değişiklikleri tamamlayabilirsin.",
            "send email2": ". Lütfen değişikliği tamamlamak için e-postana gelen linke tıkla.",
            "send email": "E-posta Gönder",
            "sended email1": "Doğrulama e-postası şu adrese gönderildi:",
            "sended email2": ". E-postanın yeniden gönderilebilmesine:",
            "sended email3": "sn.",
            "sended email4": "Doğrulama e-postası şu adrese gönderildi:",
            "sended email5": ". Not: Değişiklik tamamlanana kadar hesabın eski e-posta adresine bağlı kalmaya devam edecektir.",
            "empty code": "Doğrulama kodu boş bırakılamaz",
            "wrong code": "Geçersiz doğrulama kodu",
            "enter new email code": "Lütfen doğrulama kodunu gir",
            "enter new email": "Yeni E-posta Adresi",
            "send code fail": "Doğrulama kodu gönderilemedi",
            "send code success": "Doğrulama kodu gönderildi",
            "reset email success": "E-posta adresi değiştirildi.",
            "reset emial fail": "İşlem başarısız. Lütfen tekrar dene.",
            "binded email": "E-posta adresi zaten başka bir hesaba bağlı.",
            "send email fail": "İşlem başarısız. Lütfen bir Moonton hesabı ve e-posta adresi bağlayıp bağlamadığını kontrol et.",
            "send code": "Kodu Gönder",
            "outdata link": "Linkin süresi doldu.",
            registed: "E-posta adresi zaten başka bir hesaba bağlı. Lütfen başka bir e-posta adresi dene.",
            frequent: "Çok fazla başarısız girişim. Lütfen daha sonra tekrar dene.",
            "phone code wrong": "Geçersiz doğrulama kodu",
            "binded phone": "Hesap zaten bir telefon numarasına bağlı",
            "phone error": "Geçersiz telefon numarası",
            "unbinded phone": "Telefon numarası bir hesaba bağlı değil",
            "zhanyong phone": "Telefon numarası zaten bir hesaba bağlı",
            "Phone Registration": "Telefonla Kaydol",
            Phone: "Telefon Numarası",
            Code: "Doğrulama Kodu",
            "Enter Phone": "Doğrulama kodu alabilmek için lütfen geçerli bir telefon numarası gir",
            "Enter Code": "Telefon numarana doğrulama kodu göndermek için sağdaki butona tıkla ve doğrulamayı tamamlamak için kodu gir.",
            "send old phone1": "Doğrulama kodu gönderildi:",
            "a code": ".",
            "enter new phone": "Doğrulamayı tamamlamak için lütfen doğrulama kodunu gir",
            "quit change fail": "Doğrulama tamamlanana kadar Moonton hesabın eski telefon numarana bağlı kalacaktır.",
            "change phone success": "Telefon numarası değiştirildi.",
            "change phone": "Telefon Numarasını Değiştir",
            "password err too many": "Çok fazla başarısız girişim. Lütfen yarın tekrar dene.",
            "email verification": "E-posta Doğrulaması ({0})",
            "Enter Email Code": "E-posta adresine doğrulama kodu göndermek için sağdaki butona tıkla ve doğrulamayı tamamlamak için kodu gir.",
            "Email verification successful": "E-posta doğrulaması başarılı. Lütfen bağlamak istediğin telefon numarasını gir.",
            "phone verification": "Telefon Doğrulaması ({0})",
            "email sended and goto verify": "{0} adresine bir doğrulama e-postası gönderildi. Lütfen e-postada bulunan linke tıkla ve doğrulamayı tamamla.",
            "Phone Number Connected": "Telefon numarası bağlandı.",
            "add phone": "Telefon Numarası Bağla",
            "add email": "E-posta Adresi Bağla",
            "email verification code holder": "Doğrulama Kodu",
            "phone verification successful": "Telefon doğrulaması başarılı. Lütfen bağlamak istediğin e-posta adresini gir.",
            "change passwrod tip": "Not: Yalnızca girdiğin e-posta adresine bağlı Moonton hesabının şifresini değiştirebilirsin.",
            "enter call code": "Lütfen alan kodunu seç",
            wait: "Çok sık deniyorsun. Lütfen {time}sn sonra tekrar dene.",
            dofrequent: "Çok sık deniyorsun. Lütfen daha sonra tekrar dene.",
            notman: "Güvenlik nedeniyle giriş talebin reddedildi. Herhangi bir sorun varsa lütfen Müşteri Hizmetleri ile iletişime geç.",
            hint: "Dikkat",
            "change binding tips": "E-posta değişikliği şu anda inceleme altında. Lütfen bekle. Bu işlem sırasında değişikliği iptal edebilirsin. E-posta adresini değiştirebilmen için kalan süre: {x}.\n",
            "contact customer service": "Kafana takılan herhangi bir sorun varsa, lütfen Müşteri Hizmetleriyle iletişime geçmekten çekinme.",
            "i know": "Tamam",
            "cancel change": "İptal",
            "change pass": "E-posta değişikliğin onaylandı, lütfen yeni e-posta adresini onayla: {x}",
            "confirm change": "Değiştir",
            LANG_STRID_Accountchangepassword_220501: "Şifre sıfırlama mesajı almak için lütfen bağlı telefon numaranı gir.",
            LANG_STRID_Accountchangepassword_220503: "Not: Yalnızca girdiğin telefon numarasına bağlı olan Moonton hesabının şifresini değiştirebilirsin.",
            LANG_STRID_Accountchangepassword_220504: "E-Posta Doğrulama",
            LANG_STRID_Accountchangepassword_220505: "Geri",
            LANG_STRID_Accountchangepassword_220506: "Moonton Şifresini Sıfırla",
            LANG_STRID_Accountchangepassword_220507: "Telefon numarana bir doğrulama kodu göndermek için Kod Gönder butonuna tıkla ve doğrulamayı tamamlamak için gelen kodu gir.",
            LANG_STRID_Accountchangepassword_220511: "Şifre en az 6 karakterden oluşmalıdır. Büyük, küçük harfler ile sayılar içermeli ve özel karakterler içermemelidir.",
            LANG_STRID_Accountchangepassword_220513: "Geçersiz şifre. Lütfen tekrar dene.",
            LANG_STRID_Accountchangepassword_220514: "Şifreler uyuşmuyor. Lütfen tekrar dene.",
            LANG_STRID_Accountchangepassword_220515: "Geçersiz doğrulama kodu. Lütfen tekrar dene.",
            LANG_STRID_Accountchangepassword_220516: "Şifren sıfırlandı.",
            LANG_STRID_Accountchangepassword_220517: "Kod Al",
            LANG_STRID_Accountchangepassword_220518: "Giriş Doğrulaması",
            LANG_STRID_Accountchangepassword_220519: "Doğrulamayı tamamlamak için lütfen telefon numaranı ve doğrulama kodunu gir.",
            LANG_STRID_Accountchangepassword_220520: "Doğrulama kodu almak için lütfen geçerli bir telefon numarası gir.",
            LANG_STRID_Accountchangepassword_220521: "Giriş Bildirimi",
            LANG_STRID_Accountchangepassword_220522: "Hesap değiştirildi. Lütfen oyuna tekrar giriş yap.",
            LANG_STRID_Accountchangepassword_220523: "Giriş başarılı. Lütfen oyuna tekrar giriş yap.",
            LANG_STRID_Accountchangepassword_220524: "E-posta Adresi/Moonton Hesabı/Telefon Numarası",
            LANG_STRID_Accountchangepassword_220525: "Moonton şifren sıfırlandı.",
            LANG_STRID_Accountswitch_220501: "E-Posta Adresini Değiştir",
            LANG_STRID_Accountswitch_220502: "Doğrulama Kodunu E-Postaya Gönder {0}",
            LANG_STRID_Accountswitch_220503: "E-Posta Doğrulama Kodu",
            LANG_STRID_Accountswitch_220504: "E-Posta adresine doğrulama kodu göndermek için sağdaki butona tıkla ve gelen kodu girerek doğrulamayı tamamla.",
            LANG_STRID_Accountswitch_220505: "Telefona Doğrulama Kodu Gönder {0}",
            LANG_STRID_Accountswitch_220506: "Lütfen geçerli bir e-posta adresi gir.",
            LANG_STRID_Accountswitch_220507: "Doğrulama kodu e-posta adresine gönderildi.",
            LANG_STRID_Accountswitch_220508: "Doğrulamayı tamamlamak için lütfen aldığın doğrulama kodunu ve yeni e-posta adresini gir.",
            LANG_STRID_Accountswitch_220509: "Doğrulama tamamlanana kadar Moonton hesabın önceki e-posta adresine bağlı kalacaktır.",
            LANG_STRID_Accountswitch_220510: "Lütfen yeni e-posta adresini gir.",
            LANG_STRID_Accountswitch_220511: "Doğrulama kodu almak için lütfen geçerli bir e-posta adresi gir.",
            LANG_STRID_Accountswitch_220512: "İsteği iptal etmek istediğine emin misin?",
            LANG_STRID_Accountswitch_220513: "İsteği İptal Et",
            LANG_STRID_Accountswitch_220514: "İstek şu anda inceleme altında, lütfen bekle. İnceleme sürecinde isteği iptal etmeyi seçebilirsin. E-posta adresin {x}g {y}sa {z}dk sonra değiştirilebilir. Aklına takılan herhangi bir soru için lütfen Müşteri Hizmetleri ile iletişime geçmekten çekinme.",
            LANG_STRID_Accountswitch_220516: "Telefona Doğrulama Kodu Gönder <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "İstek şu anda inceleme altında, lütfen bekle. İnceleme süreci devam ederken isteği iptal etmeyi seçebilirsin. E-posta adresin <span>{x}g {y}sa {z}dk</span> içinde değiştirilebilir. Aklına takılan herhangi bir soru için Müşteri Hizmetlerimizle iletişime geçmekten çekinme.",
            LANG_STRID_Accountswitch_220518: "E-postaya Doğrulama Kodu Gönder <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Hızlı E-posta Kaydı",
            LANG_STRID_MTregister_221102: "E-posta",
            LANG_STRID_MTregister_221103: "Lütfen Moonton hesabını ve şifreni gir",
            LANG_STRID_MTregister_221104: "Lütfen Moonton hesabını ve şifreni onayla",
            LANG_STRID_MTregister_221105: "Lütfen şifreni tekrar gir",
            LANG_STRID_MTregister_221106: "Moonton Kullanıcı Adı (isteğe bağlı)",
            LANG_STRID_MTregister_221107: "6-20 harf, alt çizgi veya sayılardan oluşmalı ve ilk karakter bir harfle başlamalıdır.",
            LANG_STRID_MTregister_221108: "Kullanım Koşullarını okudum ve kabul ediyorum.",
            LANG_STRID_MTregister_221109: "Moonton Hesabını Bağla",
            LANG_STRID_MTregister_221110: 'Doğrulama e-postası, hesabına bağlı e-postaya gönderildi. Lütfen 24 saat içinde doğrulama işlemini tamamla. Hesabına e-posta gelmediyse, lütfen "Gereksiz/Spam/Tüm Postalar" klasörünü de kontrol etmeyi unutma.',
            LANG_STRID_MTregister_221111: "E-posta ile doğrula",
            LANG_STRID_MTregister_221112: "Moonton Hesabın başarıyla bağlandı. Artık Moonton e-postanı ve şifreni kullanarak giriş yapabilirsin.",
            LANG_STRID_MTregister_221113: "Geçersiz e-posta",
            LANG_STRID_MTregister_221114: "Telefon numaran başarıyla bağlandı.",
            LANG_STRID_MTregister_221115: "Hızlı Telefon Kaydı",
            LANG_STRID_MTregister_221116: "Lütfen telefon numaranı gir",
            LANG_STRID_MTregister_221117: "Kimliğini doğrulamamıza yardımcı olması için lütfen kullanmakta olduğun Moonton hesabını ve şifreni gir.",
            LANG_STRID_MTregister_221118: "Geçersiz telefon numarası",
            LANG_STRID_MTregister_221119: "Şifreler uyuşmuyor. Lütfen tekrar dene.",
            LANG_STRID_accinterception03: "Mevcut ağın kararsız, lütfen tekrar dene.",
            LANG_STRID_Accountswitch_220519: "Moonton Kullanıcı Adı (gerekli)",
            LANG_STRID_UnbindPhone_230701: "Şu anda bağlı olan telefon numaran {0}.",
            LANG_STRID_UnbindPhone_230702: "Bağlantıyı kestikten sonra, oyuna şifreyle giriş yapmak için artık telefon numaranı Moonton hesap ID'si olarak kullanamazsın.",
            LANG_STRID_UnbindPhone_230703: "Telefon numaranın bağlantısını kaldırmadan önce Moonton hesabını bir e-postaya bağlamanı öneririz.",
            LANG_STRID_UnbindPhone_230704: "Telefon Numarasının Bağlantısını Kaldır",
            LANG_STRID_UnbindPhone_230705: "Hesabın bir Moonton e-postasına bağlı değil. Lütfen bir Moonton e-postası bağladıktan sonra tekrar dene.",
            LANG_STRID_UnbindPhone_230706: "Bağlı Moonton e-postana ({0}) doğrulama kodu göndermek için aşağıdaki butona tıkla.",
            LANG_STRID_UnbindPhone_230707: "Moonton e-posta adresine ({0}) doğrulama kodu gönderildi. Lütfen kontrol et.",
            LANG_STRID_UnbindPhone_230708: "Telefon numarasının bağlantısı başarıyla kaldırıldı.",
            passwordError: "Girmiş olduğun şifre yanlış. Lütfen tekrar dene.",
            passwordErrorWait: "Girmiş olduğun şifre yanlış. Lütfen {x} dakika {y} saniye sonra tekrar dene.",
            passwordErrorWaitSec: "Girmiş olduğun şifre yanlış. Lütfen {y} saniye sonra tekrar dene.",
            enterEmailTip: "Mesajımızı almak için lütfen geçerli bir e-posta adresi girin.",
            sendEmailTip: '"Doğrulama Kodu Gönder" butonuna tıkladığınızda, verdiğiniz adrese doğrulama kodu içeren bir e-posta göndereceğiz. Doğrulama işlemini tamamlamak için lütfen kodu girin.',
            logInViaAccountPassword: "Hesap şifresi ile giriş yap",
            logInViaEmailVerification: "E-posta doğrulaması ile giriş yap",
            enterEmailFirst: "Lütfen önce e-posta adresini gir",
            verificationCodeError: "Geçersiz doğrulama kodu. Lütfen tekrar deneyin.",
            unbindEmail: "Bu e-posta bir Moonton hesabına bağlı değil"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "電子郵箱",
            Password: "密碼",
            "Sign up": "註冊帳號",
            "Forgot password": "忘記密碼",
            "Create Your Moonton Account": "創建您的沐瞳帳號",
            "To obtain the latest information about us, please sign up with a valid email": "請使用有效的電子郵寄地址來創建您的沐瞳帳號，以接受來自我們的消息",
            "Re-Enter Password": "請在這裡確認您的密碼",
            "Please agree to the Moonton": "同意沐瞳",
            "terms of service": "使用者服務協定",
            Submit: "提交",
            "E-Mail format error": "郵箱格式錯誤",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "密碼需要6位以上，必須包含大小寫英文字母以及數位，不能包含特殊字元",
            "These passwords dont' match": "您兩次輸入的密碼不一致",
            "Please enter your email address": "請輸入郵箱",
            "Please enter your password": "請輸入密碼",
            "Please confirm your password": "請確認密碼",
            "Please agree to the Moonton Terms of Service": "請同意沐瞳使用者服務協定",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "驗證郵件已經發送到您的註冊郵箱。請前往您的註冊郵箱進行確認。如果未收到郵件，請前往垃圾郵件查收",
            Confirm: "確定",
            "Please enter your email address to receive the email with a new password.": "請輸入您的註冊郵箱位址，以接收重置密碼的郵件。",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "重置密碼郵件已發送到您的註冊郵箱，請及時查收，謝謝。",
            Continue: "繼續",
            "Sign in with your Moonton Account": "登錄您的沐瞳帳號",
            "Sign in": "登錄",
            Congratulations: "恭喜",
            "Your email": "您的郵箱",
            "is confirmed. Thank you!": "已註冊成功。謝謝。",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co.,Ltd.",
            Notice: "注意",
            "Your account has already been confirmed.": "您的郵箱已註冊為沐瞳帳號。",
            "The link has expired Please request a new link in-gme. Thank you.": "連結已失效，請前往遊戲重新獲取連結。謝謝。",
            "Reset Password": "重置密碼",
            "New Password": "新密碼",
            "Re-Enter-Password": "請在這裡確認您的密碼",
            "Please confirm your new password": "請確認新密碼",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "密碼已經修改成，請前往遊戲並重新登錄沐瞳帳號。",
            "Bind your Moonton Account": "綁定您的沐曈帳號",
            "Check Your Email": "前往您的郵箱",
            "Re-enter email": "Re-enter email",
            "Email incompatible": "Email incompatible",
            "Moonton Account": "沐瞳帳號",
            "account rule": "6~20位元字母、底線或數位，首位為字母。",
            "Send Verification Email": "發送驗證郵件",
            "to email": "已對郵箱",
            "sended email": "發送了綁定驗證郵件，請前往郵箱進行驗證。",
            "change email": "更換綁定郵箱",
            "Email Registration": "郵箱註冊",
            "Quick Registration": "快捷註冊",
            "Accept the agreement and register": "接受協議並註冊",
            "same account": "用戶名重複！建議您更換用戶名。",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "請輸入當前登錄的沐瞳帳號密碼以確認是您本人操作",
            "congratulations account": "恭喜您！沐瞳帳號已成功創建並與當前角色綁定。",
            "empty email": "為了您的帳號安全，推薦您繼續為帳號綁定郵箱，綁定成功後可以同時通過郵箱登錄帳號，並將可以更改密碼。",
            "used email": "您所填寫的綁定郵箱已被註冊，推薦您更換其他郵箱，或通過切換帳號功能進行登錄。",
            "useful email": "驗證郵件已經發送到了您的綁定郵箱中。請在24小時內確認綁定。如果未收到郵件，請檢查是否被收入垃圾郵件。",
            "Connect to Email": "綁定郵箱",
            unreset: "未綁定郵箱的沐瞳帳號無法重置密碼。",
            emailtime1: "",
            emailtime2: "秒後可點擊沐瞳帳號郵箱按鈕再次發送",
            "have fun": "帳號綁定成功，祝您玩的開心。",
            "continue bind email": "繼續綁定郵箱",
            "server error": "伺服器繁忙，請稍後再試。",
            "wrong content": "塡寫的內容不符合要求!",
            "enter right account": "請輸入正确的郵箱地址或沐瞳賬號",
            "Please enter your password again": "請再次輸入密碼",
            "send code success": "驗證碼已發送",
            "send code": "發送驗證碼",
            "reset email": "更改郵箱",
            "empty code": "驗證碼不能為空",
            "enter new email code": "輸入新郵箱內的驗證碼",
            "send code fail": "發送驗證碼失敗",
            "reset email success": "換綁成功",
            "reset emial fail": "換綁失敗，請重試",
            "wrong code": "驗證碼錯誤",
            "binded email": "郵箱已被綁定",
            "send email fail": "郵件發送失敗，請檢查是否已綁定沐瞳賬號及郵箱",
            "outdata link": "鏈接已失效",
            "enter new email": "請輸入新郵箱",
            "send email1": "即將向您的沐瞳郵箱",
            "send email2": "發送鏈接，前往郵箱，點擊鏈接完成換綁。",
            "send email": "發送郵件",
            "sended email1": "已經向您的沐瞳郵箱",
            "sended email2": "發送了郵件，",
            "sended email3": "秒後可重新發送。",
            "sended email4": "我們已經向您的新郵箱",
            "sended email5": "發送了一封驗證郵件，請前往郵箱獲取驗證碼由此輸入完成換綁。\n請注意，在完成新郵箱驗證之前，您的賬號將仍舊和舊郵箱綁定。",
            registed: "該郵箱已被注册，請重新輸入",
            frequent: "失敗次數過多,請稍後再試",
            "phone code wrong": "手機驗證碼錯誤",
            "binded phone": "已經綁定手機了",
            "phone error": "非法的手機號",
            "unbinded phone": "該手機號沒有被綁定過",
            "zhanyong phone": "手機號已經被占用",
            "Phone Registration": "手機號注册",
            Phone: "手機號碼",
            Code: "手機短信驗證碼",
            "Enter Phone": "請輸入有效的手機號碼以接收我們的消息，創建您的沐瞳賬號。",
            "Enter Code": "點擊右側發送驗證碼，我們將給您發送一條包含驗證碼的短信。輸入驗證碼以完成驗證。",
            "send old phone1": "向您的舊手機",
            "a code": "發送驗證碼。",
            "enter new phone": "請在下方輸入新手機驗證碼，幷完成驗證。",
            "quit change fail": "在驗證完成之前，您的Moonton賬號將仍然和您的舊手機號綁定。",
            "change phone success": "手機號換綁成功！",
            "change phone": "手機號換綁",
            "password err too many": "密碼輸入錯誤次數過多，請明天再進行嘗試。",
            "email verification": "郵箱({0})驗證碼驗證",
            "Enter Email Code": "點擊右側發送驗證碼，在上框中輸入您郵箱中收到的驗證碼進行驗證",
            "Email verification successful": "成功驗證郵箱，請輸入需要綁定的手機號：",
            "phone verification": "手機號({0})短信驗證碼驗證",
            "email sended and goto verify": "已經向您的郵箱{0}發送了驗證郵件，請前往郵箱進行驗證，完成郵箱綁定。",
            "Phone Number Connected": "手機號綁定成功！",
            "add phone": "添加安全手機號",
            "add email": "添加安全郵箱",
            "email verification code holder": "郵箱驗證碼",
            "phone verification successful": "安全手機驗證成功。請輸入您要綁定的郵箱：",
            "change passwrod tip": "請注意，您只能修改您輸入的郵箱所對應的Moonton賬戶密碼。",
            "enter call code": "請選擇您的手機區號",
            wait: "操作過於頻繁，請稍後再試 （{time}秒）",
            dofrequent: "操作過於頻繁，請稍後再試",
            notman: "由於存在安全隱患，您的本次登入請求已被拒絶。如有任何問題，請聯繫客服。",
            hint: "提示",
            "change binding tips": "換綁正在審核中，請您耐心等待，審核期間可以取消換綁。更改沐瞳綁定郵箱還需：{x}",
            "contact customer service": "如有任何問題，請聯繫客服。",
            "i know": "我知道了",
            "cancel change": "取消換綁",
            "change pass": "換綁審核已通過，請确認您的換綁郵箱：{x}",
            "confirm change": "确認換綁",
            LANG_STRID_Accountchangepassword_220501: "請輸入您的注册手機號，以便接收重置密碼的短信。",
            LANG_STRID_Accountchangepassword_220503: "請注意，您只能修改您輸入的手機號所對應的Moonton賬戶密碼",
            LANG_STRID_Accountchangepassword_220504: "郵箱驗證",
            LANG_STRID_Accountchangepassword_220505: "返回",
            LANG_STRID_Accountchangepassword_220506: "重置沐瞳賬號密碼",
            LANG_STRID_Accountchangepassword_220507: "點擊“發送驗證碼”，我們將向您發送一條包含驗證碼的短信。輸入驗證碼以完成驗證。",
            LANG_STRID_Accountchangepassword_220511: "密碼需要6位以上，必須包含大小寫英文字母及整數，不能包含特殊字元",
            LANG_STRID_Accountchangepassword_220513: "該密碼不符合規則，請重新輸入",
            LANG_STRID_Accountchangepassword_220514: "兩次輸入的密碼不同，請重新輸入",
            LANG_STRID_Accountchangepassword_220515: "驗證碼輸入錯誤，請重新輸入",
            LANG_STRID_Accountchangepassword_220516: "當前沐瞳賬號密碼已重置成功",
            LANG_STRID_Accountchangepassword_220517: "驗證碼登錄",
            LANG_STRID_Accountchangepassword_220518: "登錄驗證",
            LANG_STRID_Accountchangepassword_220519: "請在下方輸入手機號及驗證碼，幷完成驗證",
            LANG_STRID_Accountchangepassword_220520: "請輸入有效的手機號碼以接收我們的消息",
            LANG_STRID_Accountchangepassword_220521: "登錄提示",
            LANG_STRID_Accountchangepassword_220522: "切換賬號成功，請重新登錄客戶端",
            LANG_STRID_Accountchangepassword_220523: "登錄賬號成功，請重新登錄客戶端",
            LANG_STRID_Accountchangepassword_220524: "電子郵箱/沐瞳賬號/手機號碼",
            LANG_STRID_Accountchangepassword_220525: "沐潼賬號重置密碼成功",
            LANG_STRID_Accountswitch_220501: "郵箱換綁",
            LANG_STRID_Accountswitch_220502: "向您的郵箱{0}發送驗證碼",
            LANG_STRID_Accountswitch_220503: "郵箱驗證碼",
            LANG_STRID_Accountswitch_220504: "點擊右側發送驗證碼，我們將向您發送一條包含驗證碼的郵件。輸入驗證碼以完成驗證。",
            LANG_STRID_Accountswitch_220505: "向您的手機{0}發送驗證碼",
            LANG_STRID_Accountswitch_220506: "輸入有效的郵箱",
            LANG_STRID_Accountswitch_220507: "已發送郵箱驗證碼，請及時查看",
            LANG_STRID_Accountswitch_220508: "請在下方輸入新郵箱及驗證碼，幷完成驗證。",
            LANG_STRID_Accountswitch_220509: "在完成驗證之前，您的Moonton賬號仍和您的舊郵箱綁定。",
            LANG_STRID_Accountswitch_220510: "請輸入新郵箱",
            LANG_STRID_Accountswitch_220511: "請輸入有效的郵箱賬號以便接收我們的消息。",
            LANG_STRID_Accountswitch_220512: "是否确認取消換綁？",
            LANG_STRID_Accountswitch_220513: "取消換綁",
            LANG_STRID_Accountswitch_220514: "換綁正在審核中，請您耐心等待，審核期間可以取消換綁。更改沐瞳綁定郵箱還需{x}天{y}小時{z}分鍾。如有任何問題，請聯繫客服。",
            LANG_STRID_Accountswitch_220516: "向您的手機<span>{0}</span>發送驗證碼",
            LANG_STRID_Accountswitch_220517: "換綁正在審核中，請您耐心等待，審核期間可以取消換綁。更改沐瞳綁定郵箱還需<span>{x}天{y}小時{z}分鍾</span>。如有任何問題，請聯繫客服。",
            LANG_STRID_Accountswitch_220518: "向您的郵箱<span>{0}</span>發送驗證碼",
            LANG_STRID_MTregister_221101: "郵箱快捷注册",
            LANG_STRID_MTregister_221102: "電子郵箱",
            LANG_STRID_MTregister_221103: "請輸入沐瞳賬號密碼",
            LANG_STRID_MTregister_221104: "請確認沐瞳賬號密碼",
            LANG_STRID_MTregister_221105: "請再次輸入您的密碼",
            LANG_STRID_MTregister_221106: "沐瞳自定義賬號（非必填）",
            LANG_STRID_MTregister_221107: "6~20位字母、下劃綫或數字，首位必須爲字母。",
            LANG_STRID_MTregister_221108: "我已閱讀幷接受使用者服務協議",
            LANG_STRID_MTregister_221109: "綁定您的沐瞳賬號",
            LANG_STRID_MTregister_221110: "驗證郵件已發送到了您的綁定郵箱中，請在24小時內確認綁定。如未收到郵件，請檢查是否被收入了垃圾郵件中。",
            LANG_STRID_MTregister_221111: "前往郵箱驗證",
            LANG_STRID_MTregister_221112: "您已成功綁定沐瞳賬號，您可以通過沐瞳郵箱及密碼進行登入。",
            LANG_STRID_MTregister_221113: "郵箱格式錯誤",
            LANG_STRID_MTregister_221114: "您已成功綁定沐瞳手機號",
            LANG_STRID_MTregister_221115: "手機號快捷注册",
            LANG_STRID_MTregister_221116: "輸入手機號",
            LANG_STRID_MTregister_221117: "請輸入當前登入的沐瞳賬號密碼，以確認是您本人操作。",
            LANG_STRID_MTregister_221118: "手機號格式錯誤",
            LANG_STRID_MTregister_221119: "您兩次輸入的密碼不一致，請校對。",
            LANG_STRID_accinterception03: "當前網絡環境異常，請重新嘗試。",
            LANG_STRID_Accountswitch_220519: "沐瞳自定義賬號（必塡）",
            LANG_STRID_UnbindPhone_230701: "您當前綁定的沐瞳手機號為：{0}",
            LANG_STRID_UnbindPhone_230702: "解綁沐瞳手機號後，您的沐瞳手機號將不再能够作為沐瞳昵稱，通過昵稱+密碼的形式登入。",
            LANG_STRID_UnbindPhone_230703: "因此，請您務必綁定沐瞳郵箱後再進行解綁沐瞳手機號。",
            LANG_STRID_UnbindPhone_230704: "解綁沐瞳手機號",
            LANG_STRID_UnbindPhone_230705: "當前帳號未綁定沐瞳郵箱，請綁定沐瞳郵箱後再進行該操作。",
            LANG_STRID_UnbindPhone_230706: "點擊下方按鈕，我們將向您綁定的沐瞳郵箱{0}發送一條驗證碼。",
            LANG_STRID_UnbindPhone_230707: "我們已向您的沐瞳郵箱{0}發送驗證，請注意查收",
            LANG_STRID_UnbindPhone_230708: "已成功解綁沐瞳手機號。",
            passwordError: "您輸入的密碼錯誤，請重試。",
            passwordErrorWait: "您輸入的密碼錯誤，請{x}分鍾{y}秒後重試。",
            passwordErrorWaitSec: "您輸入的密碼錯誤，請{y}秒後重試。",
            enterEmailTip: "請輸入有效的電子郵箱以便接收我們的消息。",
            sendEmailTip: "點擊“發送驗證碼”，我們將向您塡寫的郵箱發送一條包含驗證碼的郵件。輸入驗證以完成驗證。",
            logInViaAccountPassword: "帳號密碼登入",
            logInViaEmailVerification: "郵箱驗證碼登入",
            enterEmailFirst: "請先輸入郵箱",
            verificationCodeError: "驗證碼錯誤，請重新輸入。",
            unbindEmail: "該郵箱未綁定過Moonton帳號"
        }
    }
}
, function(e, a, n) {
    "use strict";
    a.a = {
        message: {
            "Email address": "Địa Chỉ Email",
            Password: "Mật Khẩu",
            "Sign up": "Đăng Ký",
            "Forgot password": "Quên Mật Khẩu",
            "Create Your Moonton Account": "Tạo Tài Khoản Moonton",
            "To obtain the latest information about us, please sign up with a valid email": "Hãy nhập một địa chỉ email hợp lệ để nhận tin tức mới nhất từ game",
            "Re-Enter Password": "Xác Nhận Mật Khẩu",
            "Please agree to the Moonton": "Đồng ý với",
            "terms of service": "Điều Khoản Dịch Vụ",
            Submit: "Gửi",
            "E-Mail format error": "Địa chỉ email không hợp lệ",
            "Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it": "Dùng ít nhất 6 ký tự, có cả chữ hoa lẫn thường, số, và không có ký tự đặc biệt",
            "These passwords dont' match": "Mật khẩu không khớp",
            "Please enter your email address": "Nhập địa chỉ email của bạn",
            "Please enter your password": "Nhập mật khẩu của bạn",
            "Please confirm your password": "Xác nhận mật khẩu của bạn",
            "Please agree to the Moonton Terms of Service": "Đồng ý với Điều Khoản Dịch Vụ của Moonton",
            "A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder.": "Một email xác minh đã được gửi tới địa chỉ email của bạn. Hãy ấn vào link trong email và hoàn tất xác minh. Nếu không thấy email, bạn hãy thử kiểm tra hòm thư rác (Spam) nhé.",
            Confirm: "Xác nhận",
            "Please enter your email address to receive the email with a new password.": "Hãy nhập địa chỉ email đã liên kết để nhận email khôi phục mật khẩu.",
            "Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!": "Một email khôi phục mật khẩu đã được gửi tới địa chỉ email đã liên kết của bạn. Hãy kiểm tra email ngay nhé!",
            Continue: "Tiếp tục",
            "Sign in with your Moonton Account": "Đăng nhập bằng Tài Khoản Moonton",
            "Sign in": "Đăng nhập",
            Congratulations: "Chúc mừng",
            "Your email": "Tài khoản của bạn (",
            "is confirmed. Thank you!": ") đã được tạo. Chúc bạn chơi game vui vẻ!",
            "Shanghai Moonton Technology Co.Ltd.": "Shanghai Moonton Technology Co., Ltd.",
            Notice: "Thông Báo",
            "Your account has already been confirmed.": "Tài khoản đã được tạo.",
            "The link has expired Please request a new link in-gme. Thank you.": "Link đã hết hạn. Hãy gửi lại link trong game.",
            "Reset Password": "Khôi Phục Mật Khẩu",
            "New Password": "Mật Khẩu Mới",
            "Re-Enter-Password": "Xác Nhận Mật Khẩu",
            "Please confirm your new password": "Xác nhận mật khẩu của bạn",
            "Password has been successfully changed. Please go to the game and log in to your Moonton account.": "Đã đổi mật khẩu. Hãy đăng nhập lại với mật khẩu mới.",
            "Bind your Moonton Account": "Liên Kết Tài Khoản Moonton",
            "Check Your Email": "Kiểm Tra Email",
            "Re-enter email": "Xác Nhận Email",
            "Email incompatible": "Địa chỉ email không khớp",
            "Please enter your password again": "Xác Nhận Mật Khẩu",
            "Moonton Account": "Tài Khoản Moonton",
            "account rule": "Dùng 6-20 chữ cái, chữ số hoặc dấu gạch dưới (_) và bắt đầu bằng một chữ cái",
            "Send Verification Email": "Gửi Email",
            "to email": "Một email xác minh đã được gửi tới",
            "sended email": ". Hãy kiểm tra email trong hộp thư.",
            "change email": "Đổi Mật Khẩu Email",
            "Email Registration": "Đăng Ký Bằng Email",
            "Quick Registration": "Đăng Ký Nhanh",
            "Accept the agreement and register": "ĐỒNG Ý VỚI THOẢ THUẬN & ĐĂNG KÝ",
            "same account": "Tên người dùng đã tồn tại. Hãy đặt tên khác.",
            "Please enter the password of the current MOONTON ACCOUNT to continue": "Nhập mật khẩu của Tài Khoản Moonton hiện tại để xác minh.",
            "congratulations account": "Chúc mừng! Bạn đã lập xong một Tài Khoản Moonton và liên kết với tiến trình game hiện tại.",
            "empty email": "Để bảo mật tài khoản, chúng tôi đề xuất bạn liên kết tài khoản với một địa chỉ email, để sau bạn có thể đăng nhập vào địa chỉ email đó và đổi mật khẩu.",
            "used email": "Địa chỉ email đã được liên kết với một tài khoản khác. Hãy thử email khác, hoặc đăng nhập tài khoản qua Đổi Tài Khoản.",
            "useful email": "Email xác minh đã được gửi tới địa chỉ email đã liên kết của bạn. Hãy ấn vào link đính kèm trong email và hoàn tất xác minh trong vòng 24h. Nếu không thấy email, bạn hãy thử kiểm tra hòm thư rác (Spam) nhé.",
            "Connect to Email": "Liên Kết Email",
            unreset: "Bạn không thể khôi phục mật khẩu nếu Tài Khoản Moonton của bạn chưa liên kết với một địa chỉ email.",
            emailtime1: "Bạn có thể gửi lại email sau",
            emailtime2: "s.",
            "have fun": "Đã liên kết tài khoản. Chúc bạn chơi game vui vẻ!",
            "continue bind email": "Liên Kết Địa Chỉ Email",
            "server error": "Server đang bận. Hãy thử lại sau.",
            "wrong content": "Chưa đạt điều kiện.",
            "enter right account": "Hãy nhập một địa chỉ email hợp lệ, hoặc Tài Khoản Moonton",
            "reset email": "Đổi Địa Chỉ Email",
            "send email1": "Một email xác minh sẽ được gửi tới {x}. Hãy ấn vào link đính kèm trong email để hoàn tất thay đổi.",
            "send email2": ". Hãy ấn vào link đính kèm trong email để hoàn tất thay đổi.",
            "send email": "Gửi Email",
            "sended email1": "Một email xác minh đã được gửi tới",
            "sended email2": ". Bạn có thể gửi lại email sau",
            "sended email3": "s.",
            "sended email4": "Một email xác minh đã được gửi tới",
            "sended email5": ". Lưu ý: Trước khi hoàn tất thay đổi, tài khoản của bạn vẫn sẽ liên kết với địa chỉ email cũ.",
            "empty code": "Không thể để trống mã xác minh",
            "wrong code": "Mã xác minh không hợp lệ",
            "enter new email code": "Nhập mã xác minh",
            "enter new email": "Địa Chỉ Email Mới",
            "send code fail": "Gửi mã thất bại.",
            "send code success": "Đã gửi mã xác minh.",
            "reset email success": "Đã đổi địa chỉ email.",
            "reset emial fail": "Đổi thất bại. Hãy thử lại sau.",
            "binded email": "Địa chỉ email đã liên kết với một tài khoản khác.",
            "send email fail": "Gửi email thất bại. Hãy kiểm tra lại xem bạn đã liên kết Tài Khoản Moonton với địa chỉ email chưa.",
            "send code": "Gửi Mã",
            "outdata link": "Link đã quá hạn.",
            registed: "Địa chỉ email đã liên kết với một tài khoản khác. Hãy thử email khác.",
            frequent: "Thất bại quá nhiều lần. Hãy thử lại sau.",
            "phone code wrong": "Mã xác minh không hợp lệ",
            "binded phone": "Tài khoản đã liên kết với một SĐT",
            "phone error": "SĐT không hợp lệ",
            "unbinded phone": "SĐT chưa liên kết với tài khoản nào",
            "zhanyong phone": "SĐT đã liên kết với một tài khoản",
            "Phone Registration": "Đăng Ký Bằng SĐT",
            Phone: "SĐT",
            Code: "Mã Xác Minh",
            "Enter Phone": "Hãy nhập SĐT hợp lệ để nhận mã xác minh",
            "Enter Code": "Chạm vào nút bên phải để gửi mã xác minh tới SĐT của bạn, và nhập mã để hoàn tất xác minh.",
            "send old phone1": "Gửi mã xác minh tới",
            "a code": ".",
            "enter new phone": "Hãy nhập mã xác minh để hoàn tất xác minh",
            "quit change fail": "Trước khi hoàn tất xác minh, Tài Khoản Moonton của bạn vẫn sẽ liên kết với SĐT cũ.",
            "change phone success": "Đã đổi SĐT.",
            "change phone": "Đổi SĐT",
            "password err too many": "Thất bại quá nhiều lần. Hãy thử lại ngày mai.",
            "email verification": "Email Xác Minh ({0})",
            "Enter Email Code": "Chạm vào nút bên phải để gửi mã xác minh tới địa chỉ email của bạn, và nhập mã xác minh để hoàn tất xác minh.",
            "Email verification successful": "Xác minh email thành công. Hãy nhập SĐT mà bạn muốn liên kết.",
            "phone verification": "SĐT Xác Minh ({0})",
            "email sended and goto verify": "Email xác minh đã được gửi tới {0}. Hãy ấn vào link đính kèm trong email và hoàn tất xác minh.",
            "Phone Number Connected": "Đã liên kết SĐT.",
            "add phone": "Liên Kết SĐT",
            "add email": "Liên Kết Địa Chỉ Email",
            "email verification code holder": "Mã Xác Minh",
            "phone verification successful": "Xác minh SĐT thành công. Hãy nhập địa chỉ email mà bạn muốn liên kết.",
            "change passwrod tip": "Lưu ý: Bạn chỉ có thể đổi mật khẩu cho Tài Khoản Moonton đã liên kết với địa chỉ email bạn nhập trước đó.",
            "enter call code": "Hãy chọn mã vùng của bạn",
            wait: "Thử quá nhiều lần. Hãy thử lại sau {time}s.",
            dofrequent: "Thử quá nhiều lần. Hãy thử lại sau.",
            notman: "Do yếu tố bảo mật, yêu cầu đăng nhập của bạn đã bị từ chối. Hãy liên hệ bộ phận CSKH nếu bạn có khúc mắc cần giải đáp.",
            hint: "Lưu Ý",
            "change binding tips": "Email thay đổi đang trong quá trình kiểm định. Vui lòng chờ. Bạn có thể huỷ thay đổi khi quá trình này đang diễn ra. Thời gian cần đợi để bạn có thể thay đổi địa chỉ email là: {x}.",
            "contact customer service": "Nếu có bất kỳ câu hỏi nào, hãy liên hệ với bộ phận CSKH.",
            "i know": "OK",
            "cancel change": "Huỷ",
            "change pass": "Email thay đổi đã được chấp thuận, hãy xác nhận địa chỉ email mới của bạn: {x}",
            "confirm change": "Đổi",
            LANG_STRID_Accountchangepassword_220501: "Hãy nhập SĐT đã liên kết của bạn để nhận tin nhắn khôi phục mật khẩu.",
            LANG_STRID_Accountchangepassword_220503: "Lưu ý: Bạn chỉ có thể đổi mật khẩu của Tài Khoản Moonton tương ứng với SĐT bạn dùng để liên kết.",
            LANG_STRID_Accountchangepassword_220504: "Xác Minh Email",
            LANG_STRID_Accountchangepassword_220505: "Trở Lại",
            LANG_STRID_Accountchangepassword_220506: "Khôi Phục Mật Khẩu Moonton",
            LANG_STRID_Accountchangepassword_220507: "Chạm Gửi Mã để gửi một mã xác minh tới SĐT của bạn, và nhập mã để hoàn tất xác minh",
            LANG_STRID_Accountchangepassword_220511: "Dùng ít nhất 6 ký tự có chứa chữ cái viết hoa và viết thường, số, và không có ký tự đặc biệt",
            LANG_STRID_Accountchangepassword_220513: "Mật khẩu không hợp lệ. Hãy thử lại.",
            LANG_STRID_Accountchangepassword_220514: "Mật khẩu không khớp. Hãy thử lại.",
            LANG_STRID_Accountchangepassword_220515: "Mã xác minh không hợp lệ. Hãy thử lại.",
            LANG_STRID_Accountchangepassword_220516: "Mật khẩu của bạn đã được khôi phục.",
            LANG_STRID_Accountchangepassword_220517: "Lấy Mã",
            LANG_STRID_Accountchangepassword_220518: "Xác Minh Đăng Nhập",
            LANG_STRID_Accountchangepassword_220519: "Hãy nhập SĐT của bạn và mã xác minh để hoàn tất xác minh",
            LANG_STRID_Accountchangepassword_220520: "Hãy nhập một SĐT hợp lệ để nhận mã xác minh",
            LANG_STRID_Accountchangepassword_220521: "Thông Báo Đăng Nhập",
            LANG_STRID_Accountchangepassword_220522: "Đã đổi tài khoản. Hãy vào lại game.",
            LANG_STRID_Accountchangepassword_220523: "Đăng nhập thành công. Hãy vào lại game.",
            LANG_STRID_Accountchangepassword_220524: "Địa Chỉ Email/Tài Khoản Moonton/SĐT",
            LANG_STRID_Accountchangepassword_220525: "Mật khẩu Moonton của bạn đã được khôi phục.",
            LANG_STRID_Accountswitch_220501: "Đổi Địa Chỉ Email",
            LANG_STRID_Accountswitch_220502: "Gửi Mã Xác Minh đến Email {0}",
            LANG_STRID_Accountswitch_220503: "Mã Xác Minh Email",
            LANG_STRID_Accountswitch_220504: "Chạm vào nút bên phải để gửi một mã xác minh tới địa chỉ email của bạn, và nhập mã xác minh để hoàn tất quá trình xác minh.",
            LANG_STRID_Accountswitch_220505: "Gửi Mã Xác Minh tới SĐT {0}",
            LANG_STRID_Accountswitch_220506: "Hãy nhập một địa chỉ email hợp lệ.",
            LANG_STRID_Accountswitch_220507: "Mã xác minh đã được gửi đến địa chỉ email của bạn.",
            LANG_STRID_Accountswitch_220508: "Hãy nhập mã xác minh và địa chỉ email mới của bạn bên dưới và hoàn tất xác minh.",
            LANG_STRID_Accountswitch_220509: "Trong thời gian chờ xác minh, tài khoản Moonton của bạn vẫn sẽ liên kết với địa chỉ email trước đó của bạn.",
            LANG_STRID_Accountswitch_220510: "Hãy nhập địa chỉ email mới của bạn.",
            LANG_STRID_Accountswitch_220511: "Hãy nhập một địa chỉ email hợp lệ để nhận mã xác minh.",
            LANG_STRID_Accountswitch_220512: "Bạn có chắc muốn huỷ yêu cầu không?",
            LANG_STRID_Accountswitch_220513: "Huỷ Yêu Cầu",
            LANG_STRID_Accountswitch_220514: "Yêu cầu đang được xử lý. Xin chờ. Bạn có thể huỷ yêu cầu trong thời gian này. Địa chỉ email của bạn có thể đổi sau {x} ngày {y} giờ {z} phút. Nếu có bất kỳ khúc mắc nào, hãy liên hệ với bộ phận CSKH của chúng tôi.",
            LANG_STRID_Accountswitch_220516: "Gửi Mã Xác Minh tới SĐT <span>{0}</span>",
            LANG_STRID_Accountswitch_220517: "Yêu cầu đang được xét duyệt. Xin chờ. Bạn có thể chọn huỷ yêu cầu trong thời gian này. Địa chỉ email của bạn có thể thay đổi sau <span>{x} ngày {y} giờ {z} phút</span>. Nếu có khúc mắc nào khác, vui lòng liên hệ với bộ phận CSKH.",
            LANG_STRID_Accountswitch_220518: "Gửi Mã Xác Minh tới Email <span>{0}</span>",
            LANG_STRID_MTregister_221101: "Đăng Ký Email Nhanh",
            LANG_STRID_MTregister_221102: "Email",
            LANG_STRID_MTregister_221103: "Hãy nhập tài khoản Moonton và mật khẩu của bạn",
            LANG_STRID_MTregister_221104: "Xác nhận tài khoản Moonton và mật khẩu của bạn",
            LANG_STRID_MTregister_221105: "Hãy nhập lại mật khẩu của bạn",
            LANG_STRID_MTregister_221106: "Tên Người Dùng Moonton (tuỳ chọn)",
            LANG_STRID_MTregister_221107: "Phải bao gồm 6-20 chữ cái, dấu gạch dưới hoặc số, và phải bắt đầu bằng một chữ cái.",
            LANG_STRID_MTregister_221108: "Tôi đã đọc và đồng ý với Điều Khoản Sử Dụng",
            LANG_STRID_MTregister_221109: "Liên Kết Tài Khoản Moonton Của Bạn",
            LANG_STRID_MTregister_221110: "Email xác minh đã được gửi tới email liên kết với tài khoản của bạn. Hãy xác minh trong vòng 24 giờ. Nếu chưa nhận được email, bạn hãy thử kiểm tra hòm thư spam xem sao.",
            LANG_STRID_MTregister_221111: "Xác minh bằng email",
            LANG_STRID_MTregister_221112: "Bạn đã liên kết Tài Khoản Moonton thành công. Giờ bạn có thể đăng nhập bằng email và mật khẩu Moonton.",
            LANG_STRID_MTregister_221113: "Email không hợp lệ",
            LANG_STRID_MTregister_221114: "Bạn đã liên kết SĐT thành công.",
            LANG_STRID_MTregister_221115: "Đăng Ký SĐT Nhanh",
            LANG_STRID_MTregister_221116: "Nhập SĐT của bạn",
            LANG_STRID_MTregister_221117: "Hãy nhập tài khoản và mật khẩu Moonton bạn đang dùng để giúp chúng tôi xác minh danh tính.",
            LANG_STRID_MTregister_221118: "SĐT không hợp lệ",
            LANG_STRID_MTregister_221119: "Mật khẩu không khớp. Hãy thử lại.",
            LANG_STRID_accinterception03: "Đường truyền của bạn đang thiếu ổn định, hãy thử lại sau.",
            LANG_STRID_Accountswitch_220519: "Tên Người Dùng Moonton (bắt buộc)",
            LANG_STRID_UnbindPhone_230701: "SĐT liên kết hiện tại của bạn là {0}.",
            LANG_STRID_UnbindPhone_230702: "Sau khi gỡ liên kết, bạn sẽ không thể dùng SĐT để làm ID tài khoản Moonton đăng nhập vào game kèm mật khẩu nữa.",
            LANG_STRID_UnbindPhone_230703: "Bạn nên liên kết tài khoản Moonton của bản thân với một email trước khi gỡ liên kết SĐT.",
            LANG_STRID_UnbindPhone_230704: "Gỡ Liên Kết SĐT",
            LANG_STRID_UnbindPhone_230705: "Bạn chưa liên kết email Moonton với tài khoản của bạn. Hãy liên kết với một email Moonton trước và thử lại sau.",
            LANG_STRID_UnbindPhone_230706: "Ấn vào nút bên dưới để gửi mã xác minh tới email Moonton đã liên kết của bạn {0}",
            LANG_STRID_UnbindPhone_230707: "Một mã xác minh đã được gửi tới địa chỉ email Moonton {0} của bạn. Kiểm tra ngay nhé.",
            LANG_STRID_UnbindPhone_230708: "Bạn đã gỡ liên kết SĐT thành công.",
            passwordError: "Mật khẩu bạn vừa nhập không đúng. Hãy thử lại.",
            passwordErrorWait: "Mật khẩu bạn vừa nhập không đúng. Hãy thử lại sau {x} phút {y} giây.",
            passwordErrorWaitSec: "Mật khẩu bạn vừa nhập không đúng. Hãy thử lại sau {y} giây.",
            enterEmailTip: "Vui lòng nhập địa chỉ email hợp lệ để nhận tin nhắn từ chúng tôi.",
            sendEmailTip: 'Ấn chọn "Gửi Mã Xác Minh" và chúng tôi sẽ gửi email chứa mã xác minh đến địa chỉ bạn đã cung cấp. Nhập mã để hoàn tất quá trình xác minh.',
            logInViaAccountPassword: "Đăng nhập bằng mật khẩu tài khoản",
            logInViaEmailVerification: "Đăng nhập bằng xác minh email",
            enterEmailFirst: "Hãy nhập địa chỉ email của bạn trước",
            verificationCodeError: "Mã xác minh không hợp lệ. Hãy thử lại.",
            unbindEmail: "Email này chưa được liên kết với tài khoản Moonton"
        }
    }
}
, function(e, a, n) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    n.d(a, "i18n", function() {
        return _
    });
    var t = n(50)
      , o = n(116)
      , i = n.n(o)
      , s = n(114)
      , r = n(112)
      , c = (n.n(r),
    n(49))
      , d = n.n(c)
      , l = (n(113),
    n(48))
      , u = n(115)
      , m = n(1);
    if (t.a.config.productionTip = !1,
    t.a.prototype.Hub = new t.a,
    t.a.prototype.Mlog = new Mlog({
        activity: "mtacc"
    }),
    t.a.use(u.a),
    window.localStorage.getItem("emailsended")) {
        var h = window.localStorage.getItem("emailsended")
          , g = m.a.b64DecodeUnicode(h);
        d.a.set("userId", JSON.parse(g).roleid),
        d.a.set("userGroup", JSON.parse(g).zoneid)
    }
    var p = localStorage.getItem("language") || "cn"
      , _ = new u.a({
        locale: p,
        messages: l.a
    })
      , f = window.location.href.split("?")[1];
    if (f) {
        var v = {};
        f.split("&").map(function(e) {
            v[e.split("=")[0]] = e.split("=")[1]
        }),
        1 == v.tt && window.sessionStorage.setItem("tt", "1")
    }
    t.a.prototype.$codeErrorToast = function(e, a) {
        m.a.codeErrorToast.call(this, e, a)
    }
    ,
    new t.a({
        el: "#app",
        router: s.a,
        i18n: _,
        template: "<App/>",
        components: {
            App: i.a
        }
    })
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, function(e, a) {}
, , , , , , , , , , , , , , , , , , , , function(e, a, n) {
    e.exports = n.p + "static/img/bg@3x.f45b442.png"
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzdBRjZDNTlDMEIxMUU5QTQ3QjhGNUQyRjFDNTAxQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MzdBRjZDNjlDMEIxMUU5QTQ3QjhGNUQyRjFDNTAxQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjczN0FGNkMzOUMwQjExRTlBNDdCOEY1RDJGMUM1MDFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjczN0FGNkM0OUMwQjExRTlBNDdCOEY1RDJGMUM1MDFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xgdnfgAAA1ZJREFUeNqs1ttP01AcB/Ce0Rd945rgA14IDLKu7W7hNkBNDIGY7k/QLTH8FT7wJ/imiS78CdgHeRUERVnZhRExQ6MGGBLlURNDnL9fezbO2tN1czYcytpzvp9zTs/oIdfvPRbaOT4tL7bcRuRcG4QyDmUXSqGdDt24/0SGUxDKFnTuY/W6z1ZvSBTFxTsLCw8DsrwEn7U2QA0zMAsz4fMQDx2Emw9uz80nurp7/QFZTQRkJfkvsAUqSczALMzEbLg+aEfHb83Na53dPcMC8cFPBwkoIYDVlmALVJPYFjMwCzMxmz62umdaLB8d7Xf19A0TOPAC/CJSKJIQ4ONePouXdE9QCSUlNZyoZuBRgeP48HCfrpM6NF/M7aSxZwElrNVggnDMgnM7rrAJqmEAow6wmDd06HQaFlOBt3r1YjaDIxQggIEJCYYgDKeDAyMoIRhygns5AHMGgrU2HZ3qXXunP5yeHP8kPnK5t7/fD2dizjOc+/qv+CHq0ulJ+RfWw8qPVgxNCgEYAZDWxVIBspg19KINdEMtuMzAhMKEgcsm7JfCDcCsE3T751Cb6l0jY4ZIEWaqgQ7GogmBTmIwynmGGQB3+KAXasEZDkwoTP9mwV0DQMMdbAa14O0MLl5BitaPmK1UG2GmMdgsasKFd3TEsQu4boTbBnTOG2wFpeF/KvA1to0Rb1h323nL8A4tOBZOyuP1i6Z64DV5wlpc8J0V/sf0avJEJAVFsy8adiHhM1amsFPesOgJTgI46QQLbwwzlL2HsBz3HrHYEJyKpJQpDvja0KGkBfpWYOuYI55uDIuuYBzAuBPMbwK4aYJmGPxtwXEbPOMO81BNmQZwmjPCDQA3LkC6R9IxGGuybRBWZ/nPWOSCM5wRvjJ0KGneq60K48G2xbMy6xwxi8rQIKXOcsB1d9ABQ0s2wxzxzRr8Gd+p7HZFHhi5Oko6oLLP2shUSKWSQ3C9McjCWBfbYNtqDmYOjFwbRcO+R3q7uqw/P/v2o1R9PeXWAFxrDqyDoQ22xQzMOjv5XoJszNiyT2/p/Pf50xfPVoT5lJb4uv/lff5layDvGcPsjaymdR2z4fqBOeWcHT7uT8foRrvQBOC12ZbpZvug0VemREvbB92IOTr+V4ABAJMc3bPimj2kAAAAAElFTkSuQmCC"
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAABcElEQVRIicXWTU7DMBCG4RfETSoQWdB1D5A14QogcSgEKmeg6xwAlhQkEAWJmxQNGiPHtZ2ZsOgnRUodZ57YzY/ZRw6C2fd92J0BC+AFWP/zmubAGfAIfElD27YcJZ2OgWvgHHgD7oHVTilbpMYl0GiNW2AjZ8boTMEOONEtxAsHsNPZ7LT9RkYcowvtHLC4Mw44BdGa0v6coq/Au3YInb1wDpRstbbcJ4PplatYRid74Rq40trrFE0LemAL+HdOik6BXWAJ9cB4wRrqgV3gGGqFXaAFHYPjmEArWoNDzKDkcKelnm3laO3YINaRlh6LkNLjlI0FFfAqM61hZLmbqwqPoTUwfjm44Bo6Bi6Tvma4hFrA3PvXBOdQL1h6nIpwik4ZoRuO0flE0AN/yzc1RZuJoAVu1BigT8ADcKGrQi9YgzfaLkvRwfTKgTvd73QJ6gVz8Kn+ltqfKSr50PWprGXCNjUCyX8oUyoj/AX3E+AH/nqKEY+HwVEAAAAASUVORK5CYII="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAAAXNSR0IArs4c6QAAFWFJREFUaEPlW4lzG9d5/961u7hBgOBNSqJIyjosW5aVyHGk2LXVNIkdt5lxZuo20z+lyZ/SJk6m9UwSO3bd1HaiWIklR5JPnRRF8b5AkLixu+/qvCVXhiCQkiW5qeOlZrCgsHzv993v+35A8BW+0FcYO9wZvNZ3/kyzBBHSX5hAH/Betga2zUI//slnQvvxv8LWYB+EIL7AfbQH37JgM9g7abWtMO5FCG1A39c+2uzhdvBNi7YudnHfKzc/n7+Uu3mf25e/Rfv7L7148/1twthOENsIvXlto4B7Wr9l7VvBtwG+FeCx3sTNZ8cXK7eAD4WxpRDaCWALoYfrN4NtXtsIonn9ZkWE69+igKa124IPNb7dwuuLkduspqO3EQjh/HmARN+GQJoFsW182PQns3brupWFBDp8GKDdmuaxcN12QrhNAG3Bt0i+eQNG0uYP5y7m9WTHMO6yU7iRnWsbLyKZgQB0fM3XzZtqZw2t8aN1TfP/BnA1YwVrNda2WLMwoFe8khpen1T5/Tl0c7+b7mgE0E77nwHYBN+sdWNqoYnNXkjhcLMGeC5pB8+65Y2NmctJ+gHwfNkLXo0gjBBC7YSaaY0RzT5s1gs1bECHgO+0XqSwIXRzDR4oqdAdzFpbab8t+FazixQGyNjuQjqexNZUVZX8UzMuDAyQUl8M+7W1WyzAimU0LAPYca6NMOZmAdK7cgquXYN4dkdgDc1uYTbZbNbVwjSC0VEo3sjjgcEN4XpVhqAboHWtwK1KtoTUnOzJDDnJOE4tl5U/fz1bbGTn5JZut2n6W4IPA4wx9WrPIfrYofWuwSztXq0DzCyrlcUirFagonLQRcFpkFDqVVdoFklrgFWwGx26FBParm0IItbRq6empwKLaDV5o+Fm7aZjDLk1irzIOuINGuwz7my8mstbc1U5ynkCErg3DZ27B2RXglA9sSBXLl/pWIkvfSiMC4QCuMX07wa8MUGjJePjvQPSGh6q78klxGMNH6/P570PFhZJfq0AYGdtzG1yc2PMkwE45ki9IQyhQ0GY3xthtIL3Yix4PtUE2IDl7sbfbf37XsFTmSxAXy/N9efgMctSHfNr9IPFxejVxTnimxhggmQQqzZN/6bftwPfzt9nvRQOtHIxr+JHd3Y/vAOeSCX0vpqLKlPLcPraAh4XIHzsRgl2/MACqLUBvu7HNbXNfQmYF9ceeIEvbljGrRdvFBF3KIq7BHG7igBSYJUbGBIbnxP+hhD8kq9wCgsK1HpogO8Z6mJPxG0dXy3qS5fm4HT1zNRyfn8OG+satEuqGbx5PhDAduBPwkkcBp48rODAHGcB3JqFHjoMvQPd6h86YvBEzdcTE0v45NU8uuiuQ4n4PommNJUsiQBqQHhEG0FUjUB8pZ1kREG5BMyO3w7eqyJhEWRACgujuAHMCJJ+AwHEAGo18BqKS8uSTgek9uf0/uEe9bRjo5FiFb93dd7/9WzeWnBKvobBjaCbgy5lYowRwFPwVCD4ewJfkkFwk7lGwt45yg+M9NLvxx14strQsxMr6LWpZXy2Wq6VkO0QCjTIDIq7CDOlKXN0rQZALHMf0QaIa0VuCsAxAGMxELyBpI9RLAYguIsUxwgzJ/icAKG058p4MpYa61VHhrr0CzEbBst1/acby/jVqWvoQj5S8Yycc0lbfm7wgWR+AqhV8yaoVKCCc9AF1UIFp7PU6hvUR8Z69b8kI7C/3IDZmTx+eyqvTq2u4TmAOjAWZaFhE2brBjSCt0SoAAyhG6/mkgIHJi0pRhHzyjfehxfndQ4Qhd4MGRjq4seHuuCZqKWHyjV0YXwJ/fviPPpzsSB8E1vKUa4TkFCbwfgWzW/r8yF4k+pMtM9BFzZmH4Lvz0Rwbc3GxneJQ9P7u+Gbwz3qRzEbjno+ujG/in4zuah/XxR0yvOwQFQSJCSxbdvEZ+DC0gDuhhDagAdwgFEfAdjgeR5oSqRoCBWNM5KmYufuAf03Axl43mJoZ7Whz1xbxD+9tOT9SQuyboONTYDNuxXZCn69Y1J97mjfCj7nJEhdWxhKAJ72VUca5fb0yxd2dsE/OwxG655eXC2h388X0BurNTxebABnAiNsC6wlRwAWIKLbHoG1RJva9gEJphVQZQSQ7rBYf1aNDXTC99Ix9bTDoLfuwrUby/CziWXy6/WiztvIwpACiCJftYLPw4q6q2jfqvnNMpGYgJcveyQEjz2fBFHXESSTdXaO9cLzvR3wksNgp5Booerh08vr8M7UMnxSqKh1AQLbNEooNgLY/uIcwNdIUFCqK0UyI73wSFcaPROL6Ccw0r0NT9+YLahfTCyx19YKlSnlUmmlLKxsS4bgm33+7sCbPW2WuC++8goOS1uT6uIij03AI7UGwXaUGPAUPOwBCwJbNkn37O1X/9Sd0s9ZFHUhQuucw5mlNf3WxWn4qLAuVjlDgoGmjKibBVGzGIRZXmIpJXClgPVnUO7RUevR7jQ6wSgcBS0jrq9WFgrwxuUZ+XLZR1ddrrTJItqi0oBXXl3KWESmSE1VaU41p7pXXnwxiPZhmgtub9FDU31v/H7y7WHcdWAjz1vVDHFyNsaNBkGWT6SOUuCceH5VRxIJuz8hHhkbxC91JvB3GcUxgnFdAR5fKeqTH9/gp2cLalZLKQkBRiRCCodmDoCJ1tLT2pXAAVH60BAbfHyYPNGZxk9hpEe11lHXl7Xlonjz0rx4eX6dftyoVDzbiiNgTBJUF9q3pIlFshqRfnxNmjy/cqGkhp9t7+93BN8a9FDEJbgR2wSvKXCLKK2oREwlIyIx0g3HRvrID5NRcpRRErMI5hrQ9XxRnz036b9/dda7Krl0iU0ZAxVYTaBxgZUnBY8wiO7bFdtzdE/0a50JdARADUulGBeyVqjIMxPz/D8vL6hT5QatEM0xRlgA8yVBKACvIjWpG44MI/12Jn87+E3TDyu9MOWFpg/lFDF1fNmNkCgIynmNAbWIYhhJoVlnBDoP7KDHdvfTlxIRsg8jbNmUSIvi1dUKfPDHC/VT4/PeeI2rCggBCjAGjCRWCDkRnDi4097z1MOJ49kEOeRJmTWGAlr761V+6dKM//NPZv1TqxVYJRRxzJUG4UuWjnFYcyVNEQFuREKyJJtNvl1xE1r7lm2ssKnQsT6MzRFzrlQiib7P/D6qBfX8OlPaoRppigQlJrB1JujQ0b3su7t72d9FbTpCKaEOI5oRUlmvyvHz1xt/On+99uFyXhQ9KSFqExjMssyh0fijj4/GnuyIkzEuZZwLhaRSsuqKa5dnG789daH+X4WynqZAlaZCIo0ERq6wrSivIyqMv3fGInJioaYGUilpKrutUtzW4Ju035zvzdmarpWIMX2pNFU6RiPG5LVNCdFMCI/VPYyZUM5ALxs9diDy3EiPfcKxSRcCjB2LgEWJW26o6x9dr587N1H5ZK3C1/s6ncyR3fFHDg7HDiccsptLZQtpTqNa1z2xcnnWfesPF+q/mV52r2GNXWIrRanNfdcXlgW8gbDAqCYIRsKYvMikpOkh3Gbyd9XAbIr6zdqfvbCC47vS2Jg+B59KkNT3gemoonGCGPe4JaXFhNQaE5UY7bMPn3g0+b2d3c43GMVJhAgYATiMyFJNLl5daJwv1cRST9ruHe23Dycc2uMKRaRSgEGDK2RlYqHx3m/PFV+/PNc4rySuUIIQIT5nNvOl1Nyt40AABIhgYInA5G8U1eCBLnUnrbf3+Sbw5jZMe6bggWSJmJSnJKcJJannIyYoMFvbFCS3MQbmc001UIqRSO/f4Rx57kj6BwOdzn6MsUMxAYsRIBgpLqEoFbg2RQ6jqEMDICnNgUuB1NqdXKxf/NXpwi8/vVE/qzQtIhDCYkgoBRwI8zzkCSqA25bmFUwEJkyYFAfllAy1fjO9taS47c2+Rfth4BtfrBArliEm38dBUY8lmAl6lCCGAFtII0sraUtAlscxjlu4+/jB+LGnH06d6MnYezDCBACDRTHYViAEMPWekBqU1kAJgFJKzuUb4//z0fpbv/uw/G617i/bEawIaB9h4mmkfQ3KF1JzxmLc5hVeBSxMfjcHr7HehAxPca21fGt5tX3FpTUKTT/M+Rt+Hydx5dNqpW5xC24DDxjbUiDLV8B6kqTv2UfTTx3dm3wmm7S7McYMIwyMYsAYgfnZ+KfND19e91bevbD2zjsfln4/v+4vWBg40doHorzbwPvA44moX8WW0I1q4O+35fZt5gR3Dd7k/EhmgDSDX/U0s+iG5pWgdqh5pYkDWtmer4jWJLJ3yBn52yOZ44dHkk8mI1bWaJtSAtSARwjMGc6UPMUaL5y5vP7HN8+uvnt1vnFda6hbVCtA2MNIuiF4TIVnNO+LGO+0EW8G31ibk7fU8n8p8A0fmC+UPdRlZb/9WPbrTz+afa4zwfpMIUkJAUpwADrwMtP1LboLb57Lv/rf5wp/Xi566xbDHsOm6vt/CL7hacbvoHmEUPSR3fGRE4cyxx/eFX8yGbUyxshZC3gjgHKdr74/vn7qjTP5U1fmGpNKyoZtYfkXB/95fF5p7XBOmTmg7Oil/c8+0vH043sSz2Ridg4TzAxwE/SM5o0gTLDTwUlX8ZWSt/SHT9beefNc4eTiqlzE2PQu/699vumQczfRHiQJUl0Q7TmyakLhRNTq/vah5Le+dTB1ojttjyKECcEYbLaR8xHamINIqUAqDRiZqK/k3Kp35fWzK2/97pPyqbrLV2x252hPgQpT099/tG8aXd1TnueaIqo6Do3Ejjz3tcwP+jL2foyJbVEKUYcARkh7HNaF1K5jkYhjobTWgDwuQWtlon7jxlL9wn+cyv/SVIMI6RICdEueFxI4Ak/EkjG/Wq4Eqa6vMylr03V1f3m+5Whr6vvwcOMtKYqjMRJWeE5UURJWeNhiPgegAsf372KPn3gs/vxQLmJOeAkT4EwdbzMi16ti6fKse361xJf6O+3efYPRw+k47fa4JJ5QAFqBJ0R5YqHxxzfeL75xadr7gGNds0z7a7PCq0rN0RdV4YX5vd2xtrm2NyWu5VhU1DxWN6c0pJyxHjZ2/EDs+eFe+1mbki5GCIo61AQ5r1iT189P1M6fHa9+nC96631ZO/ONvamDj+2OP55OkGEulO1uWICqu3Lp8mzt7bc/qb4+NeNNcIrd6GZtLyXiBHniwdb2bbQenupG+mJ4dbOb0+5U58sG6c7aO761L/KdXX3Ot22GRx2LkqhNNMGkWijL8bPjtfc+uFb9cKnI13xPAmMI9efsjiNjyUNH98af7EqSUaF0vOFJxIUUNV9cuzTTePMPF703Vwre7HanOmP6lfs61W1WdSYQbXWeFyVJIeMQXvzsPM9d3+pNWZ0Hh+mx3T3WS4ko2csothzLdFrw2kpJfnjy0/K74wv8iueqitg8z2NQSmOEYhGWeHjQ2XPicOp4LoEPca0zXEgipfSLNXHh0rT3iw+ui1MrNVG45TzPYrwOVCSdhry/83yL1u+2k+MLpVMxmjgwiI8N96EfpqL0qM1o1LYI1xpPLqzJc2evuu9fnatd5ZrWbQIMbXZyjJC5wEoiMG2+6IFdiT1PPBT5en+WPA6gjRswT4hqoSzOXJkVr1yc419QJ+cOPTwSbxDTHzfBDjGbhD08K5Jydmd50MPLJMl3IhYJenhc4Imlojr50aR/enpFzQAgQQhnSJsWFm06ZwjQCCvpMg5M0+EePHRkNPpEfxY9RbAeUUpF676s5UvijU9n5M+vrcDHIIQXTIaaengqEpFu3lP31cO7m+4t8gUxMzXJMOp34KF9Q/BSLg3fsxnpQgg3PI7PzK/rty9N849WS2rFpCq9Tfc2sIDN7q1pcnamcNfhEfvRvgw+YTP9dQQq0vDV8mxevf7plH45XxXj5pkH073dxuS369vn0pFdY0P6+Z4O9I82hV1S48VqHZ9eLul3ppfh46U1d50RG2lL05vzq9azZbMNKK09IaQJbF1ZkhnpwY/0daBnE44+irHuqbnqxnRevTw+o99Y03RK5d0t+/ZhwXNPQ4utJjZipYrMtNRMbPb26xd2dqkfMQajDQ8trpbRyYU1eH25iMeLdZ/bYEPzxCboK7SZ2twysSFMK48qDzzoilqsJ6vGerL4uVxKPxVhqrfqwtXJRfSzi3PwarUKq2Y6TLvi+oFNbMLGZfOszkxsDFkgnNUd7IZv7upRP4ra6GjdVTNza+i1G/P4d2VFbtSrXNKIaeh8NqsDD4CTrQeVW87qGCPpmNi5s1c/M9Cpvx+38VDVhfcm58lPP5lV70kkilvN6u5uYtOmljf5vRl8ss4CigjNUmvfoD4ybKa0DhwwU9qpPLwzvYzeLZTQbOuU1mibMKXNnPZeprRVpPwoAKQjaGhXtz6+qweeidkwUKzBhckl+Lcrc/icKAg/nk2Y0hbuaUrb2q8PwYc+b2YMwXx+rz4wklMvxBz0ZLUOsxPL+LXpPPpztYxKyBZ3NZ8nVkTXIKAdQEBA2GY+b+b7Lq9q7VEZT+rUaI/+2lCX+n7MgcFqXf/x2iJ6dXlBXZiHhm/abKaX97nn89uBD5gZKQuNDPh9Iz3W38cd9Y1aY4OZcWXZv+hX7KLxPTuCmQESMDOsiKb8M2aGYWlQJ67bsTP452Rm7Mnp/aNd6ulIBI2U6/DezCL/1dQVtBDEzvthZoT9ejOlNfw7w7sbW0hI2Ae9+3eoo4kI7K+4uDK3qk/PzaGrRRC+KilqpqVh4A54ORUA31BRNjk5VUdqdpOtdWvIv1tOjnItqZy6TAO1BjY5OVFbx9cq+tKlaTjNruKl8b4KMbw8w8e7a06O2U7zgaaZjfXwgLQ6dpQfSifQY9WGXp8p4PNri+Ku2VhQAHBziWBS+qDZWL1ZdTjmQDpfoR9MztwjG6sVvHkf8PCOHaIHU6Xu3g7SXShzmFrFy67y88avknXG7IxzU+OGemaeC+lnTkzo4iYPz/zePPMgeXgmHnVgK7erR3VHogwmF+XytQup5fvi4QUb3aSVGwZm/+5COhqhdsETRX9txoXSAMmnvLazdqua0c0MTDu1ATjk4xpun7kMOdmwL819SCz+PAxMw/ZMLdQUzM3JnmNDTtSm6UJDePM4WzRd3EB57fi325EQzUPNfm/ef2m4t6MAhpRg9tzW34Mqa+OrMLfRT5tNP9T+bazrTcJCuyr1y8m6NkjaMK+bzd/chyzs7bjvXz6+fRP4UPuh+Yca/rzfdvhyfdNiCwG0CqHVGv46vmMTqvgr++2qLQTQHNz+ur9X14z0AX+LsV2GuOvfPeC93JERedcb+xJ+8CsN/n8BHmVfPyl7A5wAAAAASUVORK5CYII="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4T62TQU7CUBCG53/GYiwLjlCXBIw9At6gxQRlJTeQI/QGcgR2KIkUT2A9gSRCXMoRugCiJbwx02QQWLgQunuTN///zT+voD0/7NlPhxV4HIy7Dty2UGW0uGPLHohSMkhB9NwIK6Nd4i2CXvxeM4x7B+7lkhaeNuR1SzUGfANEm0Jrgf7TpGXBAeOobXgVKcmSvy4a9fKrOMfxZynjeQeMpHFV6UotF+jHE98yRzf1avB7cTZ0UAwyO2sT4F3Xqy3FfxiMh2LUDMvTXEAKBbitMDxL5azI0igkImINJc3wPFGDb553xfBPAccUO4Ks46iBjLIl0Is/PPCqoyOIi2yEiF4YXAJTKOOogBBrmLsh+gW40eYoInZCxZGSLO0iz2krRA1HwwTwBjaJpi+ZwOIWIF9WrAbrLew+DhFiawMGSvkl5hTGDI/pdCokmxs57FP+z4+1N8EPSbG/ER4avmQAAAAASUVORK5CYII="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVQ4T7WTXU7CQBSF7xmimPDCEvRRrRF20B1IMRF46xJYAkvoEnxDSWjrCuwOxFDioy6BFxJ/4hxzJympKPGH0Jemc3q+e+7MHciGDzb0y3YAo2TWoMiZWNZdQoM5RG4uguPJauJPCdRoyQHIiTWS9YKTTA3DZOobKz6BhgEGZdASMBrPQgs2qqgNguBgrkYF6rswJMlj/ZWLSGDSTnCUquYAReVu22sVEa/jaUbC/SQQv6xdxXlKVPq94PDJAXShilpYrmwt/e65Fzl9nPdpKqka9FuTvHBxqdDfAeI8IirRWsAwedgH36PVmALeug6IZqfthUV7X1pw+zCehQT9XdT6RSsKVq1c+dtNLMjLYwTuQJPtYO9etTc+nxLWJ9lce4zlAXGDZG2LgBskkHMYk/44SP+5F9u5C39J8gFqobsRMl8sAwAAAABJRU5ErkJggg=="
}
, function(e, a) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i57uEXzEiIGRhdGEtbmFtZT0i57uEIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjM1IiBoZWlnaHQ9IjIzLjE1NiIgdmlld0JveD0iMCAwIDM1IDIzLjE1NiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzZjOGZiMTsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLmpK3lnIZfMTVf5ou36LSdIiBkYXRhLW5hbWU9IuakreWchiAxNSDmi7fotJ0iIGNsYXNzPSJjbHMtMSIgZD0iTTI5LjE2NiwxOS40NDRsLTEuODYtMS44NmEyMi4xNDUsMjIuMTQ1LDAsMCwwLDQuNy00LjU5MnMtNS42LTktMTQuNS05YTEzLjMxNSwxMy4zMTUsMCwwLDAtMy4zNTIuNDM5bC0yLjMtMi4zQTE1LjAxNiwxNS4wMTYsMCwwLDEsMTcuNSwxQzI4LjIzNywxLDM0Ljk5NSwxMywzNC45OTUsMTNBMjguODQ1LDI4Ljg0NSwwLDAsMSwyOS4xNjYsMTkuNDQ0Wk0xMS44MjMsMTMuOTg3bDMuNzQ0LDMuNzQ0QTUuNTc3LDUuNTc3LDAsMCwxLDExLjgyMywxMy45ODdabTUuMzQzLTcuMmE1LjYsNS42LDAsMCwxLDUuNiw1LjYsNS41MTYsNS41MTYsMCwwLDEtLjA2LjZMMTYuNTY3LDYuODQ1QTUuNSw1LjUsMCwwLDEsMTcuMTY3LDYuNzg1Wk00Ljc4Niw2Ljk1TDYuNjEzLDguNzc2QTIzLjU2NiwyMy41NjYsMCwwLDAsMywxMi45OTFzNS42LDgsMTQuNSw4YzAuNDI5LDAsLjg0Mi0wLjAzNCwxLjI1NS0wLjA2OWwyLjU5MywyLjU5M2ExNS44NzksMTUuODc5LDAsMCwxLTMuODUuNDc3QzYuNzY5LDIzLjk5My4wMTEsMTMsLjAxMSwxM0EzMC43MSwzMC43MSwwLDAsMSw0Ljc4Niw2Ljk1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC44NDQpIi8+CiAgPHBhdGggaWQ9IuefqeW9ol8xIiBkYXRhLW5hbWU9IuefqeW9oiAxIiBjbGFzcz0iY2xzLTEiIGQ9Ik04LjUsMS4zNDRMMjguMDE2LDIwLjg2MkExLjgsMS44LDAsMCwxLDI1LjQ3NCwyMy40TDUuOTU3LDMuODg2QTEuOCwxLjgsMCwwLDEsOC41LDEuMzQ0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMC44NDQpIi8+Cjwvc3ZnPgo="
}
, function(e, a) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIyMyIgdmlld0JveD0iMCAwIDM1IDIzIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNmM4ZmIxOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IuakreWchl8xNSIgZGF0YS1uYW1lPSLmpK3lnIYgMTUiIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjUsMjMuOTkzQzYuNzY5LDIzLjk5MywwLDEzLDAsMTNTNi43NjksMSwxNy41LDEsMzUsMTMsMzUsMTMsMjguMjM3LDIzLjk5MywxNy41LDIzLjk5M1ptMC0yMEM4LjYsMy45OTEsMywxMywzLDEzczUuNiw3Ljk5MywxNC41LDcuOTkzUzMyLDEzLDMyLDEzLDI2LjQsMy45OTEsMTcuNSwzLjk5MVptLTAuMzM3LDE0LjI5YTUuNTM0LDUuNTM0LDAsMCwxLTUuNTA2LTYuNTdBMy4yNjgsMy4yNjgsMCwxLDAsMTYuMiw3LjE3NCw1LjYsNS42LDAsMSwxLDE3LjE2NywxOC4yODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xKSIvPgo8L3N2Zz4K"
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAAXNSR0IArs4c6QAAAYtJREFUOE+tkj1IHFEUhc+ZHzZECyMpTCB2NmmE1DYLabS1TVJIcDcjoxKwSHZweO6sKYRAVhx3oighadNqI9hYCzY26SKYFCE2QZT5uTKLK9kwjmbZW13eu+c7510e7Wog6GLRrgZnAApdYp7T9hoOhNVuAKnB4ay72Rcb5wHAcQB6h+AYkK96VCgxBdgLjWFo3IDgSUdAYh+JTCzPlw+aQNd1tV/mgxEN3IHA/C8oESaQp/fDH3tKqaQJbNW09/G5iDQA3L0l9JRkue5Mfm7NtwFdd9f4bXzzBDJD4E4eVIAzgh/6oyFHqWKUCUwPLXdlQNeNdWgcg0ib4ZUBKUhkK46jl76a+vm3cabAXmw8ZsRtIQazUlLwXQwZXX5bPvz3PjsBgGkVFEXjF0Aetot4TE2e1Sul3UyzvD3ZtbUXTMQXSM/l3GlCWCtO6dN1umsTXu6zVzeNGkSsJoD04zCq+GrqT0fAVPTa23gUSriU9ibNuffOxFHeq3ITtoSv3vn30n71jXVy0/+8AEUfgr4TdF+5AAAAAElFTkSuQmCC"
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABjUlEQVQ4T6WTTTIDURSFz2n6GSFDVQSZkB5hBXoHYgWRFYgdsANWIHYQKxArEKNWJvlpqsx0xYT3KrnqJf3kR9pED9+59+v7cy7xx/eUV3UQRyJSCWJTywpllhBtLIb0vLtUbxe7uvAviACdoKu3/wcRuQ9iE2ZCWjnkvlb8MoFE9cxtIUFig0fv6n2YKLgtxrrkIENteeHQG3idnVfTZJT3GyQPRwGSELxUPX1lYU+bSkYMXARdfW6T9Yo6FUgVYC7NOWO0qdoEtqZLHcEGQMVqInLjASJEaZycIoALPq/7+wMPNZB7f617ribyuPRhwp8VR2vYpvJLEIaghABXZxPtlihogtIQberBG9o2Jtsneb9GsuxAFKntxqYyr6K5kCjvn5C8TofacTPLAv2CzAKgdUilWq4Ct6nJiqYgwyEv8GHcQv94N+7Xo5nWZm/pB5KaruVWKBMuTYfeHA9bkqWeKThjjrczfXDw+nJg3eiqmmzTvk3qU5V8Lvt1696s0x+CgCoEjeKLqboffAOcy8P2UyLeYwAAAABJRU5ErkJggg=="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAMAAACfvvDEAAAAS1BMVEUAAAAh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15kh15l1mq3vAAAAGHRSTlMAyPcQ8kfiXZlgGcLAdVcmZuXNPjbnzr3uB5Z6AAAA8klEQVQ4y43V23KDIBSF4aWhnD21tl3v/6SdZoiJuCH7v/5G1IENzkXn82ZotuxdRDuX+Vp2Dbda1tkguGWg1LDUcDaUM/MZTmw3VVBHZ/abj48x7GeWIge+ayj/ke9b79IqpP2Hobfq/lgwAMgdeDtWzEDsww+WIlwfjiw5eB2kR9JBJlgd5AbD0q8fO5AGLH0DX6MIS8czTSy0Ac3zPT9vhYqQGxIrKkMmeFZUhvRwPNNdhnSIrKgMGYFcURnmy/782YMEGdR7Xn+O1GdTf971M0Q/l3R0Us9P/Uy+FoQ5v0IupJNLAe2i8+l+H6XLffQHaGhvQ+7Ef1YAAAAASUVORK5CYII="
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAMAAAA5QerMAAAAjVBMVEUAAAD/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/Rkb/RkYYL66nAAAALnRSTlMABLP49bxJ/Nqtf0ASD5l4a2dRIuLfwTfs1Malkog88C4oHhUJqaGMWubLdF0N+AWCuQAAAWdJREFUOMuNlFeSwjAQBds2zgEcyCazwCbd/3j7seUqSzNQ9GfXU5gZy2h4vEHZ9GEXGDNJ/Cx/tSJKAzNiVR3Ryb+MIG2RlFujEWTiGsu5ecLi4txyYp4yP1nJwLyga0en23um5+PaEkkxJIvOjIkLiIyFP0RvTtHA3tjUgKINkDtqVQCwcaMlRK7bMWxgUUDjukMJyCmd4SFkDb+y+Seo5dAgMoIjzISMS3YyuoeptBG+lDlk0k5JtPXaWRUHKRvopfWJpXxAJW1IIGUNWy26knIGH9KmrLVatb70pFJmECpnac3ewUbaJUsptzAXcuLhfUo77bWq4G7eogHa+J3k3AOlh9VpuVB6DbQT226A0nGJByA+zgpwJhPv+ccLxQ5t4Axl4JLYz+intvvqezDQduYF4ZUR5+R50r9iUaZGJ5a/beqVllznKFzu4p11Mw+dYrYZTTnwGyso0k12CxehX33nV2z+AAly4aBcgPlUAAAAAElFTkSuQmCC"
}
, function(e, a) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMsAAAAICAYAAADnXnirAAAAAXNSR0IArs4c6QAAAi5JREFUeF7t3c1OE1EYxvHnnUMJNhRiuA/jFSiYYKIwEkD2rti54BLmApSPuNCVCxLSaAgJBe6DkELpDfDhVpJq2/PqFGpilBuY+Z/FzOKsnl9m9eScd0x3a/rN57GJyfE0htA+qB2fKMvicI83AggggAACCCCAAAIIIIAAAggggAACRRJIVxvVUP3xvN9Tq/Fh+Vwyz/NZ/njx9miiEjqpFJ+463LEkvrextJZkQDIggACCCCAAAIIIIAAAggggAACCCCAQC6wsvblQTcmL13+zGU31o/bj6eazSzLot2eKJtMZfGppMqgQXNduio7+5sL5xAigAACCCCAAAIIIIAAAggggAACCCBQFIG8KOtFm49Kpt18JM/l0rcYk/rh1mLT0rWvC+Y2OyzKhsHN/cZNnaJAkAMBBBBAAAEEEEAAAQQQQAABBBBAAAFzJZJqbjYoyvJlMnfFa/VGP1KW8Y0ggAACCCCAAAIIIIAAAggggAACCJRG4L6yTOZX3u1++u81zER+YUnY2Xu/1C6NFEERQAABBBBAAAEEEEAAAQQQQAABBAovkF/D/OlhTh5n/pwuM7t2eb2xvnz6z4B/yS8qweq77163Cq9DQAQQQAABBBBAAAEEEEAAAQQQQACB0gn8NeDfku8h2vajh8engwH/Q43bQf/jaQz99kHt7ERZFksnRWAEEEAAAQQQQAABBBBAAAEEEEAAgVIIpKuNqsY6s2ajrf3NV+3BLy9/r1+ouZ0JqqoG4AAAAABJRU5ErkJggg=="
}
, function(e, a, n) {
    var t = n(0)(n(136), n(411), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    var t = n(0)(n(141), n(439), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(269)
    }
    var o = n(0)(n(148), n(396), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(297)
    }
    var o = n(0)(n(149), n(431), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(270)
    }
    var o = n(0)(n(150), n(397), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(278)
    }
    var o = n(0)(n(151), n(407), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(302)
    }
    var o = n(0)(n(152), n(437), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(277)
    }
    var o = n(0)(n(153), n(405), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(288)
    }
    var o = n(0)(n(154), n(422), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(271)
    }
    var o = n(0)(n(155), n(398), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(304)
    }
    var o = n(0)(n(156), n(440), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(291)
    }
    var o = n(0)(n(157), n(425), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(268)
    }
    var o = n(0)(n(158), n(395), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(267)
    }
    var o = n(0)(n(159), n(394), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(284)
    }
    var o = n(0)(n(160), n(416), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(280)
    }
    var o = n(0)(n(161), n(409), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    var t = n(0)(n(162), n(393), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    var t = n(0)(n(163), n(419), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(272)
    }
    var o = n(0)(n(164), n(400), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(265)
    }
    var o = n(0)(n(165), n(389), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(275)
    }
    var o = n(0)(n(166), n(403), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(289)
    }
    var o = n(0)(n(167), n(423), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(292)
    }
    var o = n(0)(n(168), n(426), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(303)
    }
    var o = n(0)(n(169), n(438), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    var t = n(0)(n(170), n(413), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    var t = n(0)(n(171), n(406), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    var t = n(0)(n(172), n(392), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(273)
    }
    var o = n(0)(n(173), n(401), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(309)
    }
    var o = n(0)(n(174), n(446), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(286)
    }
    var o = n(0)(n(175), n(420), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    var t = n(0)(n(176), n(432), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(300)
    }
    var o = n(0)(n(177), n(435), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(299)
    }
    var o = n(0)(n(178), n(434), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(298)
    }
    var o = n(0)(n(179), n(433), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(290)
    }
    var o = n(0)(n(180), n(424), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(294)
    }
    var o = n(0)(n(181), n(428), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(281)
    }
    var o = n(0)(n(182), n(410), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(283)
    }
    var o = n(0)(n(183), n(415), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(293)
    }
    var o = n(0)(n(184), n(427), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(307)
    }
    var o = n(0)(n(185), n(443), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(287)
    }
    var o = n(0)(n(186), n(421), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(306)
    }
    var o = n(0)(n(187), n(442), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(282)
    }
    var o = n(0)(n(188), n(412), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(285)
    }
    var o = n(0)(n(189), n(417), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    function t(e) {
        n(279)
    }
    var o = n(0)(n(190), n(408), t, null, null);
    e.exports = o.exports
}
, function(e, a, n) {
    var t = n(0)(n(191), n(444), null, null, null);
    e.exports = t.exports
}
, function(e, a, n) {
    function t(e) {
        n(305)
    }
    var o = n(0)(n(192), n(441), t, null, null);
    e.exports = o.exports
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["Connect to Email"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MInput", {
                attrs: {
                    type: "email",
                    placeholder: e.placeholder.email,
                    tips: e.translate.email
                },
                on: {
                    input: e.setemailvalue,
                    checkout: e.checkemail
                }
            }), e._v(" "), n("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password,
                    tips: e.translate.password
                },
                on: {
                    checkout: e.checkpassword,
                    input: e.setpassword
                }
            }), e._v(" "), n("MInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.mtaccount,
                    tips: e.translate.mtaccount
                },
                on: {
                    input: e.setmtaccount,
                    checkout: e.onCheckmtaccount
                }
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but login-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.Bind
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Submit"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "content-input"
            }, [t("div", {
                staticClass: "input-box",
                class: "password" == e.type || e.login ? "input-box1" : ""
            }, ["phone" == e.kind ? t("div", {
                staticClass: "phone-pre",
                class: "" != e.country ? "select" : "",
                on: {
                    click: e.selectPre
                }
            }, [t("div", [t("span", [e._v(e._s(e.country))]), e._v(" +"), t("span", [e._v(e._s(e.pre))])]), e._v(" "), t("img", {
                attrs: {
                    src: n(337)
                }
            })]) : e._e(), e._v(" "), e.showPre && "phone" == e.kind ? t("div", {
                staticClass: "pre-list"
            }, e._l(e.prelist, function(a, n) {
                return t("p", {
                    key: n,
                    staticClass: "pre-list-item",
                    on: {
                        click: function(n) {
                            e.chosePre(a)
                        }
                    }
                }, [t("span", [e._v(e._s(a.country))]), e._v(" "), t("span", [e._v("+" + e._s(a.phone))])])
            }), 0) : e._e(), e._v(" "), "open" == e.eye ? t("input", {
                staticClass: "input ff",
                class: [e.iserror ? "error" : "", "phone" == e.kind ? "phone-select" : ""],
                attrs: {
                    type: e.type,
                    placeholder: e.placeholder,
                    autocomplete: "off",
                    onkeyup: "this.value=this.value.replace(/[, ]/g,'')",
                    maxlength: "codes" == e.kind ? "6" : ""
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: e.handleInput,
                    keyup: function(a) {
                        return "button"in a || !e._k(a.keyCode, "enter", 13, a.key, "Enter") ? e.keyup(a) : null
                    },
                    focus: e.handlefocus,
                    blur: e.handleblur
                }
            }) : t("input", {
                staticClass: "input",
                class: e.iserror ? "error" : "",
                attrs: {
                    onpaste: "return false",
                    oncopy: "return false",
                    type: "text",
                    placeholder: e.placeholder,
                    autocomplete: "off",
                    onkeyup: "this.value=this.value.replace(/[, ]/g,'')"
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: e.handleInput,
                    keyup: function(a) {
                        return "button"in a || !e._k(a.keyCode, "enter", 13, a.key, "Enter") ? e.keyup(a) : null
                    },
                    focus: e.handlefocus,
                    blur: e.handleblur
                }
            }), e._v(" "), "code" == e.kind && e.time > 0 ? t("div", {
                staticClass: "send-code"
            }, [e._v(e._s(e.time) + " S")]) : e._e(), e._v(" "), "code" != e.kind || e.time ? e._e() : t("div", {
                staticClass: "send-code",
                on: {
                    click: e.sendCode
                }
            }, [e._v(e._s("email" == e.type ? e.$t('message["Send Verification Email"]') : e.$t('message["send code"]')))]), e._v(" "), "email" == e.type && e.emailShow ? t("div", {
                staticClass: "mailwrapper-input"
            }, e._l(e.emailList, function(a) {
                return t("div", {
                    key: a,
                    on: {
                        click: function(n) {
                            e.choseMail(a)
                        }
                    }
                }, [e._v(e._s(a))])
            }), 0) : e._e(), e._v(" "), "password" == e.type && "open" == e.eye ? t("img", {
                staticClass: "eye",
                attrs: {
                    src: n(335)
                },
                on: {
                    click: e.eyeOpen
                }
            }) : e._e(), e._v(" "), "password" == e.type && "close" == e.eye ? t("img", {
                staticClass: "eye",
                attrs: {
                    src: n(336)
                },
                on: {
                    click: e.eyeClose
                }
            }) : e._e(), e._v(" "), "" != e.tips ? t("p", {
                staticClass: "tip",
                domProps: {
                    textContent: e._s(e.tips)
                }
            }) : e._e()])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("button", {
                class: {
                    btn: !0,
                    btnactive: e.isactive
                },
                on: {
                    click: e.handleClick,
                    touchend: e.handleend,
                    touchstart: e.handlestart
                }
            }, [e._t("default")], 2)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content-1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["hint"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), e._m(0), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["reset email success"]')) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "popup-icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "quickCreate"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["Bind your Moonton Account"]')))]), e._v(" "), n("Mtab"), e._v(" "), n("Minput", {
                attrs: {
                    placeholder: e.translate.account,
                    iserror: e.accountError,
                    tips: e.translate.accountTips,
                    needError: e.accountErrorDes
                },
                on: {
                    input: e.setAccount,
                    checkout: e.checksameaccount
                }
            }), e._v(" "), n("Minput", {
                attrs: {
                    value: e.password,
                    tips: e.translate.passwordTip,
                    type: "password",
                    placeholder: e.translate.password,
                    iserror: e.passworderror,
                    needError: e.passworderrordesc
                },
                on: {
                    input: e.setpasswordvalue
                }
            }), e._v(" "), n("Minput", {
                attrs: {
                    value: e.passwordrepeat,
                    tips: e.translate.passwordAgain,
                    iserror: e.passwordrepeaterror,
                    type: "password",
                    placeholder: e.translate.passwordrepeat,
                    needError: e.passwordrepeaterrordesc
                },
                on: {
                    input: e.setpasswordrepeatvalue
                }
            }), e._v(" "), n("Minput", {
                attrs: {
                    type: "email",
                    placeholder: e.translate.email,
                    iserror: e.emailerror,
                    isUnNeed: e.unneed,
                    tips: e.translate.noticecontent,
                    needError: e.emailerrordesc
                },
                on: {
                    input: e.setemailvalue
                }
            }), e._v(" "), n("div", {
                staticClass: "terms"
            }, [n("span", {
                on: {
                    click: e.toRule
                }
            }, [e._v(e._s(e.$t('message["terms of service"]')))])]), e._v(" "), n("Mbutton", {
                staticClass: "loginbtn",
                class: e.submitforbiden ? "forbiden" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Accept the agreement and register"]')))]), e._v(" "), n("div", {
                staticClass: "bindothers",
                on: {
                    click: function(a) {
                        e.jump("bind")
                    }
                }
            }, [e._v("\n    " + e._s(e.$t('message["Bind your Moonton Account"]')) + "\n  ")])], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                staticStyle: {
                    width: "auto"
                },
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["Reset Password"]')))]), e._v(" "), n("Icon", {
                attrs: {
                    type: "success"
                }
            }), e._v(" "), n("p", {
                staticClass: "blackp"
            }, [e._v("\n        " + e._s(e.$t('message["Password has been successfully changed. Please go to the game and log in to your Moonton account."]')) + "\n    ")]), e._v(" "), n("Mbtn", {
                staticClass: "confir"
            }, [n("a", {
                staticClass: "go-game",
                attrs: {
                    href: e.src
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])])], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                staticStyle: {
                    width: "auto"
                },
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["Reset Password"]')))]), e._v(" "), n("div", {
                staticClass: "inputgroup"
            }, [n("label", [e._v(e._s(e.$t('message["New Password"]')))]), e._v(" "), n("Minput", {
                attrs: {
                    iserror: e.passworderror,
                    type: "password",
                    placeholder: ""
                },
                on: {
                    input: e.setpasswordvalue,
                    checkout: e.checkpassword
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "inputgroup"
            }, [n("label", [e._v(e._s(e.$t('message["Re-Enter-Password"]')))]), e._v(" "), n("Minput", {
                attrs: {
                    iserror: e.passwordrepeaterror,
                    type: "password",
                    placeholder: ""
                },
                on: {
                    input: e.setnewpasswordvalue,
                    checkout: e.checkpasswordrepeat
                }
            })], 1), e._v(" "), n("p", {
                staticClass: "littlep"
            }, [e._v(e._s(e.$t('message["Use at least 6 characters and a mix of higher and lower case letters and numbers with no special character in it"]')))]), e._v(" "), n("Mbtn", {
                attrs: {
                    backgroundColor: "#ff4d4d"
                },
                on: {
                    clicked: e.confirm
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "unbind"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["Forgot password"]')))]), e._v(" "), n("Icon", {
                attrs: {
                    type: "success"
                }
            }), e._v(" "), n("p", {
                staticClass: "commonp"
            }, [e._v(e._s(e.$t('message["Password reset mail has been sent to your registration e-mail. Please check it in time. Thank you!"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("div", {
                staticClass: "activitation"
            })
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "fircommon"
                }
            }, [n("img", {
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["Notice"]')))]), e._v(" "), n("p", {
                staticClass: "desc"
            }, [e._v(e._s(e.$t('message["Your account has already been confirmed."]')))])])
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "m-head-box"
            }, ["phone" == e.type ? t("div", {
                staticClass: "return",
                on: {
                    click: e.returnGo
                }
            }, [t("img", {
                staticClass: "icon",
                attrs: {
                    src: n(16)
                }
            }), e._v(" "), t("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220505"]')))])]) : e._e(), e._v(" "), t("p", {
                staticClass: "m-head"
            }, [e._t("default")], 2), e._v(" "), t("img", {
                staticClass: "close",
                class: e.touch ? "touch" : "",
                attrs: {
                    src: n(330)
                },
                on: {
                    touchstart: e.touchenter,
                    touchend: e.touchleave
                }
            }), e._v(" "), t("img", {
                staticClass: "close2 touch",
                attrs: {
                    src: n(331)
                }
            })])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["Connect to Email"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MInput", {
                attrs: {
                    type: "email",
                    placeholder: e.placeholder.email,
                    tips: e.translate.email
                },
                on: {
                    input: e.setemailvalue,
                    checkout: e.checkemail
                }
            }), e._v(" "), n("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password,
                    tips: e.translate.password
                },
                on: {
                    checkout: e.checkpassword,
                    input: e.setpassword
                }
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but login-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.Bind
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Submit"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220501"]')))]), e._v(" "), n("div", {
                staticClass: "headerWrapper"
            }, [n("div", {
                staticClass: "content-title content-title1"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220508"]')))]), e._v(" "), n("div", {
                staticClass: "content-title-tip"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220509"]')))])]), e._v(" "), n("MphoneInput", {
                attrs: {
                    type: "email",
                    placeholder: e.translate.email,
                    iserror: e.emailerror,
                    tips: e.translate.tip,
                    login: !0
                },
                on: {
                    input: e.setemail,
                    checkout: e.checkemail
                }
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip2,
                    kind: "codes",
                    needError: e.translate.needErrorcode
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "botm-but login-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.submit
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Confirm"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("div", {
                class: {
                    btn: !0,
                    btnactive: e.isactive
                },
                on: {
                    click: e.handleClick,
                    touchend: e.handleend,
                    touchstart: e.handlestart
                }
            }, [e._t("default")], 2)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [0 === e.step ? n("div", [n("Mhead", [e._v(e._s(e.$t('message["add email"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.code,
                    tips: e.translate.code,
                    kind: "codes"
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n        ")])], 1)], 1) : e._e(), e._v(" "), 0 != e.step ? n("div", [n("Mhead", [e._v(e._s(e.$t('message["add email"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.$t('message["phone verification successful"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    type: "email",
                    placeholder: e.placeholder.email,
                    tips: e.translate.email
                },
                on: {
                    input: e.setemail,
                    checkout: e.onCheckemail
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbidenEmail ? "content-but-no" : "",
                on: {
                    clicked: e.submitEmail
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n        ")])], 1)], 1) : e._e()])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content-notice"
            }, [n("p", {
                staticClass: "descs"
            }, [e._v(e._s(e.content))])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "fircommon"
                }
            }, [n("img", {
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["Congratulations"]')))]), e._v(" "), n("p", {
                staticClass: "desc"
            }, [e._v("\n    " + e._s(e.$t('message["Your email"]')) + "\n    "), n("a", {
                attrs: {
                    href: "javascript:void(0);"
                }
            }, [e._v(e._s(e.account))]), e._v("\n    " + e._s(e.$t('message["is confirmed. Thank you!"]')) + "\n  ")])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["hint"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["change pass"]', {
                x: e.rebindEmail
            })) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group"
            }, [n("Mbutton", {
                staticClass: "but hint-btn",
                on: {
                    clicked: e.cancel
                }
            }, [e._v(e._s(e.$t('message["cancel change"]')))]), e._v(" "), n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.confirm
                }
            }, [e._v(e._s(e.$t('message["confirm change"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("div", {
                staticClass: "activitation"
            })
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220506"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    type: "password",
                    placeholder: e.translate.password1,
                    iserror: e.errornew,
                    tips: e.translate.tip1,
                    needError: e.translate.needErrorNew
                },
                on: {
                    input: e.setenew,
                    checkout: e.checkenew
                }
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    type: "password",
                    placeholder: e.translate.password2,
                    iserror: e.errorConfirm,
                    tips: e.translate.tip2,
                    needError: e.translate.needErrorConfirm
                },
                on: {
                    input: e.seteConfirm,
                    checkout: e.checkeConfirm
                }
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.submit
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Confirm"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["reset email success"]')))]), e._v(" "), n("Icon", {
                attrs: {
                    type: "success"
                }
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220506"]')))]), e._v(" "), n("div", {
                staticClass: "height2"
            }), e._v(" "), n("Notice", {
                attrs: {
                    content: e.translate.notice,
                    icon: !1
                }
            }), e._v(" "), n("div", {
                staticClass: "height2"
            }), e._v(" "), n("div", {
                staticClass: "send-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "number",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip,
                    needError: e.translate.needError
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.countDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height2"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "forbiden-2" : "",
                on: {
                    click: e.jump
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Submit"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return e.showLoading ? n("div", {
                staticClass: "loading-icon",
                style: {
                    background: e.backgroundColor
                }
            }, [e._m(0)]) : e._e()
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "loading"
            }, [n("div"), e._v(" "), n("div"), e._v(" "), n("div"), e._v(" "), n("div"), e._v(" "), n("div"), e._v(" "), n("div"), e._v(" "), n("div"), e._v(" "), n("div")])
        }
        ]
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                attrs: {
                    id: "content"
                }
            }, [t("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_MTregister_221115"]')))]), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e.init ? t("div", {
                staticClass: "scroll-list"
            }, [t("MInput", {
                attrs: {
                    value: e.phone,
                    tips: e.translate.phone,
                    placeholder: e.placeholder.phone,
                    country: e.country,
                    pre: e.prephone,
                    kind: "phone",
                    prelist: e.preList
                },
                on: {
                    input: e.setephone,
                    chosepre: e.chosePre,
                    checkout: e.onCheckphone
                }
            }), e._v(" "), t("div", {
                staticClass: "send-input login-input"
            }, [t("MInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.code,
                    tips: e.translate.code,
                    kind: "codes"
                },
                on: {
                    input: e.setecode,
                    checkout: e.onCheckecode
                }
            }), e._v(" "), "" != e.timeText ? t("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? t("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), t("MInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.mtaccount,
                    tips: e.translate.mtaccount
                },
                on: {
                    input: e.setmtaccount,
                    checkout: e.onCheckmtaccount
                }
            }), e._v(" "), t("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password,
                    tips: e.translate.password
                },
                on: {
                    checkout: e.onCheckpassword,
                    input: e.setpasswordvalue
                }
            }), e._v(" "), t("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password2,
                    tips: e.translate.password2
                },
                on: {
                    input: e.setePasswordConfirm,
                    checkout: e.checkePasswordConfirm
                }
            }), e._v(" "), t("div", {
                staticClass: "service"
            }, [t("div", {
                staticClass: "service-icon",
                on: {
                    click: e.service
                }
            }, [e.isservice ? e._e() : t("img", {
                attrs: {
                    src: n(110)
                }
            }), e._v(" "), e.isservice ? t("img", {
                attrs: {
                    src: n(109)
                }
            }) : e._e()]), e._v(" "), t("div", {
                staticClass: "text",
                on: {
                    click: e.toRule
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_MTregister_221108"]')))])])], 1) : e._e(), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), t("div", {
                staticClass: "botm-but"
            }, [t("Mbutton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(" \n        " + e._s(e.$t('message["Submit"]')) + "\n      ")]), e._v(" "), t("div", {
                staticClass: "email-but",
                on: {
                    click: e.jump
                }
            }, [t("div", {
                staticClass: "text "
            }, [e._v(e._s(e.$t('message["Email Registration"]')))]), e._v(" "), e._m(0)])], 1)], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content-1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["hint"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["LANG_STRID_Accountswitch_220512"]')) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group-1"
            }, [n("Mbutton", {
                staticClass: "but hint-btn",
                on: {
                    clicked: e.returnGo
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220505"]')))]), e._v(" "), n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.confirm
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220513"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "m-input"
            }, [t("div", {
                staticClass: "star-box"
            }, [t("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isUnNeed,
                    expression: "!isUnNeed"
                }],
                staticClass: "star",
                attrs: {
                    src: n(338)
                }
            })]), e._v(" "), t("div", {
                staticClass: "input-box"
            }, ["phone" == e.kind ? t("div", {
                staticClass: "phone-pre",
                on: {
                    click: e.selectPre
                }
            }, [t("span", [e._v(e._s(e.country))]), e._v(" "), t("span", [e._v("+" + e._s(e.pre))])]) : e._e(), e._v(" "), e.showPre && "phone" == e.kind ? t("div", {
                staticClass: "pre-list"
            }, e._l(e.prelist, function(a, n) {
                return t("p", {
                    key: n,
                    staticClass: "pre-list-item",
                    on: {
                        click: function(n) {
                            e.chosePre(a)
                        }
                    }
                }, [t("span", [e._v(e._s(a.country))]), e._v(" "), t("span", [e._v("+" + e._s(a.phone))])])
            }), 0) : e._e(), e._v(" "), "open" == e.eye ? t("input", {
                staticClass: "input ff",
                class: [e.iserror ? "error" : "", "phone" == e.kind ? "phone-select" : ""],
                attrs: {
                    type: e.type,
                    placeholder: e.placeholder,
                    autocomplete: "off",
                    onkeyup: "this.value=this.value.replace(/[, ]/g,'')",
                    maxlength: "phone" == e.kind ? "20" : ""
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: e.handleInput,
                    keyup: function(a) {
                        return "button"in a || !e._k(a.keyCode, "enter", 13, a.key, "Enter") ? e.keyup(a) : null
                    },
                    focus: e.handlefocus,
                    blur: e.handleblur
                }
            }) : t("input", {
                staticClass: "input",
                class: e.iserror ? "error" : "",
                attrs: {
                    onpaste: "return false",
                    oncopy: "return false",
                    type: "text",
                    placeholder: e.placeholder,
                    autocomplete: "off",
                    onkeyup: "this.value=this.value.replace(/[, ]/g,'')"
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: e.handleInput,
                    keyup: function(a) {
                        return "button"in a || !e._k(a.keyCode, "enter", 13, a.key, "Enter") ? e.keyup(a) : null
                    },
                    focus: e.handlefocus,
                    blur: e.handleblur
                }
            }), e._v(" "), "code" == e.kind && e.time > 0 ? t("div", {
                staticClass: "send-code"
            }, [e._v(e._s(e.time) + " S")]) : e._e(), e._v(" "), "code" != e.kind || e.time ? e._e() : t("div", {
                staticClass: "send-code",
                on: {
                    click: e.sendCode
                }
            }, [e._v(e._s("email" == e.type ? e.$t('message["Send Verification Email"]') : e.$t('message["send code"]')))]), e._v(" "), "email" == e.type && e.emailShow ? t("ul", {
                staticClass: "mailwrapper"
            }, [t("li", {
                on: {
                    click: function(a) {
                        e.choseMail(e.value + "@gmail.com")
                    }
                }
            }, [e._v(e._s(e.value) + "@gmail.com")]), e._v(" "), t("li", {
                on: {
                    click: function(a) {
                        e.choseMail(e.value + "@hotmail.com")
                    }
                }
            }, [e._v(e._s(e.value) + "@hotmail.com")]), e._v(" "), t("li", {
                on: {
                    click: function(a) {
                        e.choseMail(e.value + "@yahoo.com")
                    }
                }
            }, [e._v(e._s(e.value) + "@yahoo.com")])]) : e._e(), e._v(" "), "password" == e.type && "open" == e.eye ? t("img", {
                staticClass: "eye",
                attrs: {
                    src: n(334)
                },
                on: {
                    click: e.eyeOpen
                }
            }) : e._e(), e._v(" "), "password" == e.type && "close" == e.eye ? t("img", {
                staticClass: "eye",
                attrs: {
                    src: n(333)
                },
                on: {
                    click: e.eyeClose
                }
            }) : e._e(), e._v(" "), t("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.iserror && !e.needError,
                    expression: "!iserror && !needError"
                }],
                staticClass: "tip",
                domProps: {
                    textContent: e._s(e.tips)
                }
            }), e._v(" "), t("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.iserror && e.needError,
                    expression: "iserror && needError"
                }],
                staticClass: "tip-error",
                domProps: {
                    textContent: e._s(e.needError)
                }
            })])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Forgot password"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip1,
                    kind: "codes",
                    needError: e.translate.needCodeError
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n      ")])], 1)], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v("换绑失败")]), e._v(" "), n("Icon", {
                attrs: {
                    type: "warn"
                }
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    phone: e.phone,
                    session: e.session,
                    guid: e.guid
                }
            }, [e._v(e._s("password" == e.type ? e.$t('message["LANG_STRID_Accountchangepassword_220506"]') : e.$t('message["LANG_STRID_Accountchangepassword_220521"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), e._m(0), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("p", {
                staticClass: "commonp-2"
            }, [e._v(e._s("password" == e.type ? e.$t('message["LANG_STRID_Accountchangepassword_220525"]') : e.$t('message["LANG_STRID_Accountchangepassword_220523"]')))])], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "popup-icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "content-head-box"
            }, ["phone" == e.type || "email" == e.type ? t("div", {
                staticClass: "return",
                on: {
                    click: e.returnGo
                }
            }, [e._m(0), e._v(" "), t("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220505"]')))])]) : e._e(), e._v(" "), t("p", {
                staticClass: "m-head"
            }, [e._t("default")], 2), e._v(" "), t("img", {
                staticClass: "close",
                class: e.touch ? "touch" : "",
                attrs: {
                    src: n(332)
                },
                on: {
                    touchstart: e.touchenter,
                    touchend: e.touchleave,
                    click: e.onClose
                }
            }), e._v(" "), t("img", {
                staticClass: "xian",
                attrs: {
                    src: n(341)
                }
            })])
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "rule"
                }
            }, [n("div", {
                staticClass: "title"
            }, [n("Mhead", [e._v("Rule")])], 1), e._v(" "), n("h3", [e._v("[Terms of Service] Mobile Legends: Bang bang")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("Accepting  the Terms")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v('This Statement of Rights and  Responsibilities ("Statement", "Terms") derives from the  Principles, and is our terms of service that governs our relationship with  users and others who interact with MOONTON, as well as MOONTON brands, products  and services, which we call the “MOONTON Services” or “Services”. By using or  accessing the MOONTON Services, you agree to this Statement, as updated from  time to time. Additionally, you will find resources at the end of this  document that help you understand how MOONTON works.')]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Because MOONTON provides a  wide range of Services, we may ask you to review and accept supplemental  terms. To the extent those supplemental terms conflict with this Terms, the  supplemental terms associated with the app, product, or service govern with  respect to your use of such app, product or service to the extent of the  conflict.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("These Terms of Service  (“Terms”) are a legal agreement between Shanghai MOONTON Technology CO.,  Ltd. (“Moonton” or “we”) and you (“you”). By using or accessing any Moonton  game or application (“Service”) you agree to be bound by these Terms. By accessing  or using the Service, you agree that you have read, understood, and accept to  be bound by the Terms. Moonton reserves the right, in its sole discretion,  modify or revise these Terms at any time, and you agree to be bound by such  modifications or revisions.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Users are responsible for  periodically viewing the Terms. Your continued use of the Service after a  change or update has been made will constitute your acceptance to the revised  Terms. If you do not agree to the Terms your only remedy is to discontinue your  use of the Service and cancel any accounts you have made using the Service.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("If you violate the Terms,  Moonton reserves the right to issue you a warning regarding the violation or  immediately terminate or suspend any or all accounts you have created using  the Service. You agree that Moonton need not provide you notice before terminating  or suspending your account(s), but it may do so.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Moonton reserves the right to  refuse any user access to the Services without notice for any reason,  including, but not limited to, a violation of the Terms.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that Moonton may  discontinue the Service or change the content of the Service at any time, for  any reason, with or without notice to you, without liability.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("MOONTON suggests that minors  shall not access internet without prior written consent of their parents or  other legal guardians.")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("Intellectual  Property/Ownership")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("All materials that are part  of the Service (including, but not limited to, designs, text, graphics,  pictures, video, information, applications, software, music, sound and other  files, and their selection and arrangement) are protected by law from unauthorized  use. The entire contents of the Service are copyrighted under the United  States copyright laws and/or similar laws of other jurisdictions.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that no materials  that are part of the Service may be modified, copied, distributed, framed,  reproduced, republished, downloaded, scraped, displayed, posted, transmitted,  or sold in any form or by any means, in whole or in part, or otherwise exploited  without MOONTON’s express prior written permission, except that the foregoing  does not apply to your own User Content (as defined below) that you legally  post on the Site. All other uses of copyrighted material, including any  derivative use, requires express prior written permission from MOONTON. Any  reproduction or redistribution of materials not in accordance with these  Terms is expressly prohibited and may result in severe civil and criminal  penalties.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Moonton and its licensors  remain the owners of right, title, and interest, including copyrights and  other intellectual property rights, in and to all materials posted on the  Services by Moonton. You acknowledge that you do not acquire any ownership  rights by using the Service or by accessing any materials posted on the  Service by Moonton, or any derivative works thereof.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Moonton grants you a  personal, non-exclusive, non-transferable, revocable, limited scope license  to use the Service solely for the purpose of viewing and using the applicable  Services and for no other purpose whatsoever. Your license to use the  Services is limited by these Terms.")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("User Content")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that you are  willingly publishing the content on the Service using technology and tools  provided by Moonton. You understand and agree that you may not distribute,  sell, transfer or license this content and/or application in any manner, in  any country, or on any social network or other medium without the explicit  written permission of Moonton. You grant Moonton the right to act as an agent  on your behalf as operator of the application.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Any data, text, graphics,  photographs and their selection and arrangement, (hereinafter “User Content”)  uploaded to the Service are subject, whether in whole or in part, to  unlimited commercial, non-commercial and/or promotional use by Moonton. Text,  graphics, and photographs are uploaded by you and are the sole responsibility  of the person from whom the User Content originated. Thus, users are  responsible, and Moonton is not responsible for any files users upload, post,  or otherwise make available. Moonton may or may not regulate User Content and  does not guarantee the accuracy, quality, or integrity of any User Content  posted via the Moonton application. By using Moonton you acknowledge and  accept that you may be exposed to material you find offensive or  objectionable. You agree that Moonton will not under any circumstances be  liable for any User Content, including, but not limited to, errors in any  User Content, or any loss or damage incurred by use of the User Content.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Moonton reserves the right to  remove and permanently delete any User Content from the Service with or  without notice.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Your purchase of Virtual  Currency is final and is not refundable, exchangeable, transferable, except  in Moonton’s sole discretion. You may not purchase, sell, or exchange Virtual  Currency outside the Service. Doing so is a violation of the Terms and may result  in termination of your account with the Service and/or legal action.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("Moonton retains the right to  modify, manage, control and/or eliminate Virtual Currency at its sole  discretion. Prices and availability of virtual in game goods are subject to  change without notice.")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("Rules of Conduct/Usage")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("The Moonton Service may  provide communication channels such as forums, communities, or chat areas  (“Communication Channels”) designed to enable you to communicate with other  Service users. Moonton has no obligation to monitor these communication  channels but it may do so and reserves the right to review materials posted  to the Communication Channels and to remove any materials, at any time, with  or without notice for any reason, at its sole discretion. Moonton may also  terminate or suspend your access to any Communication Channels at any time,  without notice, for any reason. You acknowledge that chats, postings, or  materials posted by users on the Communication Channels are neither endorsed  nor controlled by Moonton, and these communications should not be considered  reviewed or approved by Moonton. Moonton will not under any circumstances by  liable for any activity within Communication Channels.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that all your  communications with the Communication Channels are public, and thus you have  no expectation of privacy regarding your use of the Communication Channels.  Moonton is not responsible for information that you choose to share on the Communication  Channels, or for the actions of other users.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that your use of  the Service shall be lawful and that you will comply with the usage rules. In  furtherance of the foregoing, and as an example and not as a limitation, you  agree not to use the Service in order to:")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("post, upload, transmit or  otherwise disseminate information that is obscene, indecent, vulgar,  pornographic, sexual or otherwise objectionable")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("defame, libel, ridicule,  mock, stalk, threaten, harass, intimidate or abuse anyone, hatefully,  racially, ethnically or, in a reasonable person’s view, otherwise offensive  or objectionable")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("upload or transmit (or  attempt to upload or transmit) files that contain viruses, Trojan horses,  worms, time bombs, cancelbots, corrupted files or data, or any other similar  software or programs that may damage the operation of the Service or other  users’ computers")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("violate the contractual,  personal, intellectual property or other rights of any party including using,  uploading, transmitting, distributing, or otherwise making available any  information made available through the Service in any manner that infringes  any copyright, trademark, patent, trade secret, or other right of any party  (including rights of privacy or publicity)")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("attempt to obtain passwords  or other private information from other members")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("improperly use support  channels or complaint buttons to make false reports to Moonton")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("develop, distribute, or  publicly inform other members of “auto” software programs, “macro” software  programs or other “cheat utility” software program or applications in  violation of the applicable License Agreements")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("exploit, distribute or  publicly inform other members of any game error, miscue or bug which gives an  unintended advantage")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("violate any applicable laws  or regulations, or promote or encourage any illegal activity including, but  not limited to, hacking, cracking or distribution of counterfeit software, or  cheats or hacks for the Service")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("Disclaimer of Warranty;  Limitation of Liability")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree that your use of  the Service shall be at your sole risk. To the fullest extent permitted by  law, Moonton, its officers, directors, employees, and agents disclaim all  warranties, express or implies, in connection with the website and your use  thereof including implied warranties of title, merchantability, fitness for a  particular purpose or non-infringement, accuracy, authority, completeness,  usefulness, and timeliness. Moonton makes no warranties or representations  about the accuracy or completeness of the content of the Service of the  content of any sites linked to the Service and assumes no liability or  responsibility for any (i) errors, mistakes, or inaccuracies of content, (ii)  personal injury or property damage, of any nature whatsoever, resulting from  your access to and use of the Service, (iii) any unauthorized access to or  use of our secure servers and/or any and all personal information and/or  financial information stored therein, (iv) any interruption or cessation of  transmission to or from the Service, (v) any bugs, viruses, trojan horses, or  the like which may be transmitted to or through the Service by any third  party, and/or (vi) any errors or omissions in any content or for any loss or  damage of any kind incurred as a result of the use of any content posted,  emailed, transmitted, or otherwise made available via the Service.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("In no event will Moonton, its  directors, officers, agents, contractors, partners and employees, be liable  to you or any third person for any special, direct, indirect, incidental,  special, punitive, or consequential damages whatsoever including any lost profits  or lost data arising from your use of the Service or other materials on,  accessed through or downloaded from the Service, whether based on warranty,  contract, tort, or any other legal theory, and whether or not Moonton has  been advised of the possibility of these damages. The foregoing limitation of  liability shall apply to the fullest extent permitted by law in the  applicable jurisdiction. You specifically acknowledge that Moonton shall not  be liable for user submissions or the defamatory, offensive, or illegal  conduct of any third party and that the risk of harm or damage from the  foregoing rests entirely with you.")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("You agree to indemnify and  hold Moonton, and each of its directors, officers, agents, contractors,  partners and employees, harmless from and against any loss, liability, claim,  demand, damages, costs and expenses, including reasonable attorney’s fees, arising  out of or in connection with (i) your use of and access to the Service; (ii)  your violation of any term of these Terms of Service; (iii) your violation of  any third party right, including without limitation any copyright, property,  or privacy right; (iv) any claim that one of your User Submissions caused  damage to a third party; or (v) any Content you post or share on or through  the Service.")]), e._v(" "), n("p", {
                staticClass: "text",
                staticStyle: {
                    color: "red"
                }
            }, [e._v("General")]), e._v(" "), n("p", {
                staticClass: "text"
            }, [e._v("By visiting or using the the  Service, you agree that the laws of The People's Republic of China, without  regard to principles of conflict of laws and regardless of your location,  will govern these Terms of Service and any dispute of any sort that might arise  between you and Moonton. Any claim or dispute between you and Moonton that  arises in whole or in part from your use of the Service shall be decided  exclusively by a court of competent jurisdiction located in Minhang District,  Shanghai, and you hereby consent to, and waive all defenses of lack of  personal jurisdiction and forum non conveniens with respect to venue and  jurisdiction in Shanghai. Moonton reserves the right to amend these Terms of  Service at any time and without notice, and it is your responsibility to  review these Terms of Service for any changes. Your use of Moonton following  any amendment of these Terms of Service will signify your assent to and  acceptance of its revised terms. YOU AND MOONTON AGREE THAT ANY CAUSE OF  ACTION ARISING OUT OF OR RELATED TO THE SERVICE MUST COMMENCE WITHIN ONE (1)  YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS  PERMANENTLY BARRED.")]), e._v(" "), n("div", {
                staticStyle: {
                    height: "20px"
                }
            })])
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220501"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip1,
                    kind: "codes",
                    needError: e.translate.needCodeError
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n      ")]), e._v(" "), "" != e.isemail && "***" != e.isemail ? n("div", {
                staticClass: "email-but",
                on: {
                    click: e.jump
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220504"]')))]), e._v(" "), e._m(0)]) : e._e()], 1)], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Sign in with your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    value: e.email,
                    tips: e.translate.tip,
                    placeholder: e.translate.emailInputTip,
                    iserror: e.emailerror,
                    country: e.country,
                    kind: "login",
                    needError: e.phoneerrordesc,
                    login: !0
                },
                on: {
                    input: e.setephone
                }
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.emailVerificationCode,
                    iserror: e.codeerror,
                    tips: e.translate.tip2,
                    kind: "codes",
                    needError: e.translate.needErrorcode
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but login-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.submit
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Sign in"]')))])]), e._v(" "), "" == e.isShowEmail || e.returnType ? e._e() : n("div", {
                staticClass: "email-but",
                on: {
                    click: function(a) {
                        e.jump("login-new", "email", "")
                    }
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["logInViaAccountPassword"]')) + " ")]), e._v(" "), e._m(0)])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "v2-1"
            }, [n("div", {
                staticClass: "inemail"
            }, [n("div", {
                staticClass: "bac"
            }, [n("Toast", {
                class: {
                    hide: !e.toastshow
                },
                attrs: {
                    content: e.toastcontent
                }
            }), e._v(" "), n("div", {
                staticClass: "maincontent"
            }, [n("router-view")], 1), e._v(" "), n("div", {
                staticClass: "footer"
            }, [n("img", {
                attrs: {
                    src: e.moonton_logo
                }
            }), e._v(" "), n("span", [e._v("Shanghai Moonton Technology Co.,Ltd.")])])], 1)])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["add phone"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e.init ? n("div", {
                staticClass: "scroll-list"
            }, [n("MInput", {
                attrs: {
                    value: e.phone,
                    tips: e.translate.phone,
                    placeholder: e.placeholder.phone,
                    country: e.country,
                    pre: e.prephone,
                    kind: "phone",
                    prelist: e.preList
                },
                on: {
                    input: e.setephone,
                    chosepre: e.chosePre,
                    checkout: e.onCheckphone
                }
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.code,
                    tips: e.translate.code,
                    kind: "codes"
                },
                on: {
                    input: e.setecode,
                    checkout: e.onCheckecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password,
                    tips: e.translate.password
                },
                on: {
                    checkout: e.onCheckpassword,
                    input: e.setpasswordvalue
                }
            })], 1) : e._e(), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("Mbutton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(" \n        " + e._s(e.$t('message["Submit"]')) + "\n      ")])], 1)], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                attrs: {
                    id: "content"
                }
            }, [t("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_MTregister_221101"]')))]), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e.init ? t("div", {
                staticClass: "scroll-list"
            }, [t("MInput", {
                attrs: {
                    type: "email",
                    placeholder: e.placeholder.email,
                    tips: e.translate.email
                },
                on: {
                    input: e.setemail,
                    checkout: e.onCheckemail
                }
            }), e._v(" "), t("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password,
                    tips: e.translate.password
                },
                on: {
                    checkout: e.onCheckpassword,
                    input: e.setpasswordvalue
                }
            }), e._v(" "), t("MInput", {
                attrs: {
                    type: "password",
                    placeholder: e.placeholder.password2,
                    tips: e.translate.password2
                },
                on: {
                    input: e.setePasswordConfirm,
                    checkout: e.checkePasswordConfirm
                }
            }), e._v(" "), t("MInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.mtaccount,
                    tips: e.translate.mtaccount
                },
                on: {
                    input: e.setmtaccount,
                    checkout: e.onCheckmtaccount
                }
            }), e._v(" "), t("div", {
                staticClass: "service"
            }, [t("div", {
                staticClass: "service-icon",
                on: {
                    click: e.service
                }
            }, [e.isservice ? e._e() : t("img", {
                attrs: {
                    src: n(110)
                }
            }), e._v(" "), e.isservice ? t("img", {
                attrs: {
                    src: n(109)
                }
            }) : e._e()]), e._v(" "), t("div", {
                staticClass: "text",
                on: {
                    click: e.toRule
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_MTregister_221108"]')))])])], 1) : e._e(), e._v(" "), t("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), t("div", {
                staticClass: "botm-but"
            }, [t("Mbutton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v("\n        " + e._s(e.$t('message["Submit"]')) + "\n      ")]), e._v(" "), "1" == e.isphone ? t("div", {
                staticClass: "email-but",
                on: {
                    click: e.jump
                }
            }, [t("div", {
                staticClass: "text "
            }, [e._v(e._s(e.$t('message["Phone Registration"]')) + " ")]), e._v(" "), e._m(0)]) : e._e()], 1)], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["outdata link"]')))]), e._v(" "), n("Icon", {
                attrs: {
                    type: "warn"
                }
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [0 === e.step ? n("div", [n("Mhead", [e._v(e._s(e.$t('message["add phone"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.code,
                    tips: e.translate.code,
                    kind: "codes"
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n        ")])], 1)], 1) : e._e(), e._v(" "), 0 != e.step ? n("div", [n("Mhead", [e._v(e._s(e.$t('message["add phone"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.$t('message["Email verification successful"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    value: e.phone,
                    tips: e.translate.phone,
                    placeholder: e.placeholder.phone,
                    country: e.country,
                    pre: e.prephone,
                    kind: "phone",
                    prelist: e.preList
                },
                on: {
                    input: e.setephone,
                    chosepre: e.chosePre,
                    checkout: e.onCheckphone
                }
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.phonecode,
                    tips: e.translate.phonecode,
                    kind: "codes"
                },
                on: {
                    input: e.setphonecode,
                    checkout: e.onCheckephonecode
                }
            }), e._v(" "), "" != e.timePhoneText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickPhoneCountDown
                }
            }, [e._v(e._s(e.timePhoneText))]) : e._e(), e._v(" "), "" == e.timePhoneText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.timePhone) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbidenPhone ? "content-but-no" : "",
                on: {
                    clicked: e.submitphone
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n        ")])], 1)], 1) : e._e()])
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Forgot password"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip1,
                    kind: "codes",
                    needError: e.translate.needCodeError
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n    ")]), e._v(" "), "" != e.isemail && "***" != e.isemail || "forgotpassword" == e.emailbut ? n("div", {
                staticClass: "email-but",
                on: {
                    click: e.jump
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220504"]')))]), e._v(" "), e._m(0)]) : e._e()], 1)], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Forgot password"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("Notice", {
                attrs: {
                    content: e.translate.notice,
                    icon: !0
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("Minput", {
                attrs: {
                    type: "email",
                    placeholder: e.translate.email,
                    iserror: e.emailerror,
                    tips: e.translate.tip,
                    login: !0
                },
                on: {
                    input: e.setemail,
                    checkout: e.checkemail
                }
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("Mbutton", {
                staticClass: "content-but",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])], 1)], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("div", {
                staticClass: "but-2",
                class: {
                    btn: !0,
                    btnactive: e.isactive
                },
                on: {
                    click: e.handleClick,
                    touchend: e.handleend,
                    touchstart: e.handlestart
                }
            }, [e._t("default")], 2)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("img", {
                staticStyle: {
                    display: "none",
                    position: "absolute",
                    top: "-1000000"
                },
                attrs: {
                    src: n(329)
                }
            }), e._v(" "), t("router-view")], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "v2-1"
            }, [n("div", {
                staticClass: "inapp v2-1 v2-2",
                class: e.$i18n.locale
            }, [n("div", {
                staticClass: "bac"
            }, [n("Toast", {
                class: {
                    hide: !e.toastshow
                },
                attrs: {
                    content: e.toastcontent
                }
            }), e._v(" "), n("div", {
                staticClass: "bigwrapper"
            }, [n("router-view", {
                on: {
                    rule: e.ruleFn
                }
            })], 1)], 1)])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["hint"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "tips-success tips-success-1",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group"
            }, [n("Mbutton", {
                staticClass: "but hint-btn",
                on: {
                    clicked: e.close
                }
            }, [e._v(e._s(e.$t('message["i know"]')))]), e._v(" "), n("Mbutton", {
                staticClass: "but ",
                on: {
                    clicked: e.cancel
                }
            }, [e._v(e._s(e.$t('message["cancel change"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["Create Your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e._m(0), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["congratulations account"]')) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group-1"
            }, [n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.bindlink
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s("1" == e.type ? e.$t('message["add email"]') : e.$t('message["Create Your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e._m(0), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["A verification email has been sent to the email address. Please check your email to verify your email address.If you have not received the email, please check your junk email folder."]')) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group-1"
            }, [n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.bindlink
                }
            }, [e._v(e._s(e.$t('message["Check Your Email"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(3 == e.emailtype ? e.$t('message["Connect to Email"]') : e.$t('message["Create Your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e._m(0), e._v(" "), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.needMonntAccount,
                    expression: "needMonntAccount"
                }],
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["congratulations account"]')) + "\n    ")]), e._v(" "), n("p", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.needMonntAccount,
                    expression: "!needMonntAccount"
                }],
                staticClass: "tips-success",
                staticStyle: {
                    "text-align": "left"
                }
            }, [e._v(e._s(e.tips))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), 3 == e.emailtype ? n("div", {
                staticClass: "btn-group group-1"
            }, [n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.bindlink
                }
            }, [e._v(e._s(e.$t('message["Check Your Email"]')))])], 1) : e._e(), e._v(" "), 3 != e.emailtype ? n("div", {
                staticClass: "btn-group group-1"
            }, [n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.continuebind
                }
            }, [e._v(e._s(e.$t('message["continue bind email"]')))])], 1) : e._e(), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement;
            return (e._self._c || a)("p", {
                staticClass: "toast"
            }, [e._v(e._s(e.content))])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "seccommon"
                }
            }, [n("img", {
                staticClass: "mt-logo",
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["reset email"]')))]), e._v(" "), n("div", {
                staticClass: "inputgroup",
                staticStyle: {
                    position: "relative"
                }
            }, [n("label", [e._v(e._s(e.$t('message["enter new email"]')))]), e._v(" "), n("Minput", {
                attrs: {
                    iserror: e.emailerror,
                    placeholder: ""
                },
                on: {
                    input: e.setemailvalue,
                    checkout: e.checkemail
                }
            }), e._v(" "), e.time > 0 ? n("div", {
                staticClass: "sendCode"
            }, [e._v(e._s(e.time) + "S")]) : n("div", {
                staticClass: "sendCode",
                on: {
                    click: e.sendCode
                }
            }, [e._v(e._s(e.$t('message["send code"]')))])], 1), e._v(" "), n("div", {
                staticClass: "inputgroup"
            }, [n("label", [e._v(e._s(e.$t('message["enter new email code"]')))]), e._v(" "), n("Minput", {
                attrs: {
                    iserror: e.codeerror,
                    placeholder: ""
                },
                on: {
                    input: e.setcode,
                    checkout: e.checkcode
                }
            })], 1), e._v(" "), n("Mbtn", {
                attrs: {
                    backgroundColor: "#ff4d4d"
                },
                on: {
                    clicked: e.confirm
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "content1",
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["add phone"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e._m(0), e._v(" "), n("p", {
                staticClass: "tips-success"
            }, [e._v("\n        " + e._s(e.$t('message["LANG_STRID_MTregister_221114"]')) + "\n    ")]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon"
            }, [t("img", {
                attrs: {
                    src: n(23)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "tab"
            }, [n("div", {
                staticClass: "item",
                class: ["1" == e.currentIndex ? "router-link-exact-active" : "", e.showPhone ? "item2" : ""],
                on: {
                    click: function(a) {
                        e.jump("quickcreate", "1")
                    }
                }
            }, [n("span", [e._v(e._s(e.$t('message["Quick Registration"]')))]), e._v(" "), n("div", {
                staticClass: "bottom"
            })]), e._v(" "), e.showPhone ? n("div", {
                staticClass: "item mid",
                class: ["3" == e.currentIndex ? "router-link-exact-active" : "", e.showPhone ? "item2" : ""],
                on: {
                    click: function(a) {
                        e.jump("phoneregist", "3")
                    }
                }
            }, [n("span", [e._v(e._s(e.$t('message["Phone Registration"]')))]), e._v(" "), n("div", {
                staticClass: "bottom"
            })]) : e._e(), e._v(" "), n("div", {
                staticClass: "item right",
                class: ["2" == e.currentIndex ? "router-link-exact-active" : "", e.showPhone ? "item2" : ""],
                on: {
                    click: function(a) {
                        e.jump("createaccount", "2")
                    }
                }
            }, [n("span", [e._v(e._s(e.$t('message["Email Registration"]')))]), e._v(" "), n("div", {
                staticClass: "bottom"
            })])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "fircommon"
                }
            }, [n("img", {
                attrs: {
                    src: e.mlbb_logo
                }
            }), e._v(" "), n("h2", [e._v(e._s(e.$t('message["Notice"]')))]), e._v(" "), n("p", {
                staticClass: "desc"
            }, [e._v(e._s(e.$t('message["The link has expired Please request a new link in-gme. Thank you."]')))])])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("div", [n("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_UnbindPhone_230704"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.placeholder.code,
                    tips: e.translate.code,
                    kind: "codes"
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n        ")])], 1)], 1)])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Sign in with your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("MphoneInput", {
                attrs: {
                    value: e.phone,
                    tips: e.translate.tip,
                    placeholder: e.translate.phone,
                    iserror: e.phoneerror,
                    country: e.country,
                    pre: e.prephone,
                    kind: "phone",
                    prelist: e.preList,
                    needError: e.phoneerrordesc,
                    login: !0
                },
                on: {
                    input: e.setephone,
                    chosepre: e.chosePre
                }
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip2,
                    kind: "codes",
                    needError: e.translate.needErrorcode
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "botm-but login-but"
            }, [n("div", {
                staticClass: "next-but",
                class: e.submitforbiden ? "next-but-no" : "",
                on: {
                    click: e.submit
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["Sign in"]')))])])]), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["Sign in with your Moonton Account"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), e.init ? n("div", [n("MPhoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.email + "/" + e.translate.account + "/" + e.translate.phone,
                    iserror: e.emailerror,
                    tips: e.translate.noticecontent,
                    needError: e.emailerrordesc
                },
                on: {
                    input: e.setemailvalue,
                    checkout: e.checkemail
                }
            }), e._v(" "), n("MPhoneInput", {
                attrs: {
                    type: "password",
                    placeholder: e.translate.password,
                    iserror: e.passworderror,
                    tips: e.translate.passwordTip,
                    needError: e.passworderrordesc
                },
                on: {
                    checkout: e.checkpassword,
                    input: e.setpasswordvalue
                }
            }), e._v(" "), n("div", {
                staticClass: "forgot"
            }, [n("div", {
                on: {
                    click: function(a) {
                        e.jump(e.isphoneState ? "forgotpassword-phone" : "forgotpassword-3", "phone", "forgotpassword")
                    }
                }
            }, [e._v(e._s(e.$t('message["Forgot password"]')) + "?\n      ")])]), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("Mbutton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v("\n         " + e._s(e.$t('message["Sign in"]')) + "\n      ")]), e._v(" "), "" == e.isShowEmail && "" != e.isphone ? n("div", {
                staticClass: "email-but",
                on: {
                    click: function(a) {
                        e.jump("phonelogin", "phone", "")
                    }
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220517"]')) + " ")]), e._v(" "), e._m(0)]) : e._e(), e._v(" "), "" == e.isShowEmail || e.returnType ? e._e() : n("div", {
                staticClass: "email-but",
                on: {
                    click: function(a) {
                        e.jump("loginbyemail", "email", "")
                    }
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.$t('message["logInViaEmailVerification"]')) + " ")]), e._v(" "), e._m(1)])], 1)], 1) : e._e()], 1)
        },
        staticRenderFns: [function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        , function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon-1"
            }, [t("img", {
                attrs: {
                    src: n(16)
                }
            })])
        }
        ]
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", [e._v(e._s(e.$t('message["LANG_STRID_UnbindPhone_230704"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), 1 === e.step ? n("div", [n("div", {
                staticClass: "tips-text"
            }, [e._v("\n            " + e._s(e.$t('message["LANG_STRID_UnbindPhone_230701"]', {
                0: e.phonehide
            })) + "\n        ")]), e._v(" "), n("div", {
                staticClass: "tips-text"
            }, [e._v("\n            " + e._s(e.$t('message["LANG_STRID_UnbindPhone_230702"]')) + "\n        ")]), e._v(" "), n("div", {
                staticClass: "tips-text"
            }, [e._v("\n            " + e._s(e.$t('message["LANG_STRID_UnbindPhone_230703"]')) + "\n        ")])]) : e._e(), e._v(" "), 2 === e.step ? n("div", [n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "tips-text"
            }, [e._v("\n            " + e._s(e.$t('message["LANG_STRID_UnbindPhone_230705"]')) + "\n        ")])]) : e._e(), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "btn-group group"
            }, [1 === e.step ? n("Mbutton", {
                staticClass: "but hint-btn",
                on: {
                    clicked: e.cancel
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountchangepassword_220505"]')))]) : e._e(), e._v(" "), n("Mbutton", {
                staticClass: "but",
                on: {
                    clicked: e.confirm
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')))])], 1), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            })], 1)
        },
        staticRenderFns: []
    }
}
, function(e, a, n) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                staticClass: "icon"
            }, ["success" == e.type ? t("img", {
                staticClass: "icon-statue",
                attrs: {
                    src: n(339),
                    alt: ""
                }
            }) : e._e(), e._v(" "), "warn" == e.type ? t("img", {
                staticClass: "icon-statue",
                attrs: {
                    src: n(340),
                    alt: ""
                }
            }) : e._e()])
        },
        staticRenderFns: []
    }
}
, function(e, a) {
    e.exports = {
        render: function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                attrs: {
                    id: "content"
                }
            }, [n("Mhead", {
                attrs: {
                    type: e.returnType
                }
            }, [e._v(e._s(e.$t('message["LANG_STRID_Accountswitch_220501"]')))]), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "content-title",
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "bottomHeight"
            }), e._v(" "), n("div", {
                staticClass: "send-input login-input"
            }, [n("MphoneInput", {
                attrs: {
                    type: "text",
                    placeholder: e.translate.code,
                    iserror: e.codeerror,
                    tips: e.translate.tip1,
                    kind: "codes",
                    needError: e.translate.needCodeError
                },
                on: {
                    input: e.setecode,
                    checkout: e.checkecode
                }
            }), e._v(" "), "" != e.timeText ? n("div", {
                staticClass: "send-but",
                on: {
                    click: e.clickCountDown
                }
            }, [e._v(e._s(e.timeText))]) : e._e(), e._v(" "), "" == e.timeText ? n("div", {
                staticClass: "send-but time"
            }, [e._v(e._s(e.time) + "S")]) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "height-div"
            }), e._v(" "), n("div", {
                staticClass: "botm-but"
            }, [n("MphoneButton", {
                staticClass: "content-but phonebut",
                class: e.submitforbiden ? "content-but-no" : "",
                on: {
                    clicked: e.submit
                }
            }, [e._v(e._s(e.$t('message["Confirm"]')) + "\n      ")])], 1)], 1)
        },
        staticRenderFns: []
    }
}
], [218]);
