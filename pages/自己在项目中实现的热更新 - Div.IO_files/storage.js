define(function(require){
    var Storage = function(options){
        this.$el = options.$el;
        this.init();
    };
    /*获取key的前缀pre*/
    var getPreKey = function () {
        var href = document.location.href,
            preKey = ['/new-topic', '/node/', '/topic/'],
            index;
        for (var i = 0; i< preKey.length; i++) {
            index = href.indexOf(preKey[i]);
            if(index != -1){
                if (preKey[i] == '/new-topic' || preKey[i] == '/node/' ){
                    return preKey[i];
                } else {
                    return href.substr(index+preKey[i].length);
                }
            }   
        }
    };


    /**
     * 离线存储 
     * @param key 存储在离线的文档
     * @param value 存储的值
     */
    var store = function (key, value) { 
        var preKey = getPreKey();
        if (arguments.length === 2) {
            localStorage.setItem(preKey + key, value);
            return value;
        } else if (arguments.length == 1){
            return localStorage.getItem(preKey+key);
        } else {
            return "";
        }
    };
    /**
     * Dom Storage  dom数据缓存
     * @param dom 存储在离线的文档
     * @param value 存储的值
     */
     var domCache = function (dom, value) {
        if (arguments.length === 2) {
            dom.val(value);
            store(dom.attr('name'), value);
        } else {
            return dom.val() ? dom.val() : store(dom.attr('name'));
        }
     };

    Storage.prototype = {
        init:function(){  
            this.cacheInit();
        },
        cacheInit: function () {
            var ele = ['title', 'content'];
            ele.forEach(function (v,  k) {
                var element = $("[name='" + v + "']");
                if (element.length) {
                    element.bind("input", function () {
                        store(v, $(this).val());   
                    });
                }
                if (store(v) && element.length) {
                    domCache(element, store(v));
                }
            });
            $('input[type=submit]').bind("click",function (){
                localStorage.removeItem(getPreKey() + "title");
                localStorage.removeItem(getPreKey() + "content");
            });
        }

    };
    return Storage;
});