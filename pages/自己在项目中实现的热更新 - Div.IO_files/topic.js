define(function(require){
    $(".aj_like").click(function(e){
        var ele = this;
        e.preventDefault();

        if($(ele).hasClass("answer-liked")){
            return false;
        }
        $.get(ele.href,{}, function(data){
            if(!data.error){
                if($(ele).find("span").length){
                    $(ele).find("span").html(data.data.likes);
                    $(ele).addClass("answer-liked");
                    $(ele).next().removeClass("answer-disliked");
                }else{
                    $(ele).html("已" + $(ele).html());
                }
            }else{
                alert(data.error);
            }
        }, "json");
        return false;
    });
    $(".aj_dislike").click(function(e){
        var ele = this;
        e.preventDefault();

        if($(ele).hasClass("answer-disliked")){
            return false;
        }
        $.get(ele.href, {}, function(data){
            if(!data.error){
                $(ele).prev().find("span").html(data.data.likes);
                $(ele).addClass("answer-disliked");
                $(ele).prev().removeClass("answer-liked");

            }else{
                alert(data.error);
            }
        }, "json");
        return false;
    });

    $(".topic-firstfloor a.additional").click(function(){
        $(".additional_form").show();
    });
    $(".user-actions .share-to-weibo").click(function(){
        (function(s,d,e,r,l,p,t,z,c){var f='http://v.t.sina.com.cn/share/share.php?appkey=真实的appkey',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent,'','','','','','utf-8')
    });
    $(".rir-reply button").click(function(e){
        $(this).attr("disabled","disabled");
       var self = this;
        $(this).attr("disabled","disabled");
        $(this).toggleClass("disabled");
       var container = $(self).closest(".reply").find("textarea");
       e.preventDefault();
        var inputPara ={};
        if(container.val()!=""){
            var objList = $(this).closest("form").find("input,textarea,button");
            for(var i =0;i<objList.length;i++){
                inputPara[objList.eq(i).attr("name")]= objList.eq(i).val();
            }
            $.ajax({
                type:"post",
                dataType:"json",
                data:inputPara,
                url:"/knot/reply_knot",
                success:function(data){
                    $(self).removeAttr("disabled");
                   $(self).toggleClass("disabled");
                    if(data["msg"]  == "回复楼中楼成功"){
                        insertDom(data,$(self));
                    }
                }
            });
        }else{
            alert("对不起，请填写回复内容");
            $(self).removeAttr("disabled");
            $(self).toggleClass("disabled");
        }

    });

    /*插入楼中楼*/
    var insertDom = function(data,dom){
//        var html = "<li> 1秒前，<a href='http://www.div.io/user/id/" + data["data"]["uid"]+ "'>" + data["data"]["username"] + "</a> 说：<p>" + data["data"]["inputObject"]["content"].replace(/[\n\r]/gi,"<br>");
//             html += "</p></li>";
        console.log(data["data"]["html"]);
        var html = $(data["data"]["html"]);
        var $html =$(html);
        var Reply =  dom.closest(".reply");
        var ReplyList = Reply.find(".rir-list");
        if(ReplyList.length == 0){
            Reply.prepend("<ul class='rir-list'></ul> ");
        }
        dom.closest(".reply").find(".rir-list").append($html);
        $html.css({"animation":"myfirst 5s",
            "-moz-animation": "myfirst 5s",
            "-webkit-animation":"myfirst 5s"});

        dom.closest(".reply").find("textarea").val("");
    };
    $(".topic-sidebar .manage-actions .pro_action").click(function(){
        var ele = this;
        $.ajax({
            type:"get",
            dataType:"json",
            url: $(ele).attr("href"),
            success:function(data){
                if(data.notice){
                    $(ele).attr("href", "#").html($(ele).html() + "成功").addClass("action-done");
                }
            }
        });
        return false;
    });
    $(".topic-firstfloor .topic-firstfloor-content .user-actions a.go-reply").click(function(){
        scroll($("#reply_content"));
        $('#reply_content').focus();
        $('.reply-container').attr("style", "");
        var a  = $('.reply-container')[0].offsetWidth; //触发repaint
        $('.reply-container').css({"animation":"myfirst 5s",
            "-moz-animation": "myfirst 5s",
            "-webkit-animation":"myfirst 5s"});
    });
    $(".item-info-extra a.go-reply-sub").click(function(){
        scroll($("#reply_content"));
        $('#reply_content').focus();
        $('#reply_content').html($('#reply_content').html() + "@" + $(this).attr("data-author") + " ");
        $('.reply-container').attr("style", "");
        var a  = $('.reply-container')[0].offsetWidth; //触发repaint
        $('.reply-container').css({"animation":"myfirst 5s",
            "-moz-animation": "myfirst 5s",
            "-webkit-animation":"myfirst 5s"});
        return false;
    });

   /**
    * 专题hash
   *
   *  className a的class钩子
   *  parentDom 代表父节点
   *  每个节点元素的name比如topic 就是
   * */

    var srollPos = function(className,parentDom,nodeDomName){
        if(location.hash.length > 0){
            var hashName = location.hash.substr(1,location.hash.length);
        } else{
            return;
        }
        var Dom;
        var Doms = parentDom.eq(0).find("." + className);
        for (var i= 0;i<Doms.length ;i++){
            if(Doms.eq(i).attr("name") == hashName){
                Dom = Doms.eq(i);
            }
        }
        /*dom 的滑动到的节点重点提示*/
        var posInit = function(dom){
            dom.show().css({"animation":"myfirst 5s",
                "-moz-animation": "myfirst 5s",
            "-webkit-animation":"myfirst 5s"});
        };
        /*开始scroll*/
        if(Dom){
            window.scrollTo(0,Dom[0].offsetTop);
            posInit(Dom.next());
        }

    };
    srollPos("j_topic_replay",$(".topic-lists ul"),"li");

    $(".rir-reply-handler").click(function(){
        $(this).siblings("form").show();
        $(this).siblings("form").find("textarea").focus();
        return false;
    });
    /*关注以及取消关注*/
    var favAction = function(e){
        var self = $(e.target);
        e.preventDefault();
        $.ajax({
            type:"get",
            dataType:"json",
            url: $(e.target).attr("href"),
            success:function(data){
                if($(self).attr("class") == "btn-fav"){
                    if(data["notice"] == "成功添加收藏"){
                        $(self).attr("class","btn-unfav").html("<i class='iconfont icon-woguanzhudepinpai'></i>取消关注").attr("href", $(self).attr("href").replace("/add/","/remove/"));
                    }else{
                        alert(data["notice"]);
                    }
                }else{
                    if(data["notice"] == "成功移除收藏"){
                        $(self).attr("class","btn-fav").html("<i class='iconfont icon-pinpai'></i>关注主题").attr("href", $(self).attr("href").replace("/remove/","/add/"));
                    }else{
                        alert(data["notice"]);
                    }
                }

            }
        });
    };

    $(".btn-fav").bind("click",function(e){
        favAction(e);
    });
    $(".btn-unfav").bind("click",function(e){
        favAction(e);

    });

    /*ctrl + enter 提交*/
    $("body").on("keypress",".reply-rir",function(e){
        if(e.ctrlKey && e.which == 13 || e.which == 10) {
            $(this).closest("form").find("button").click();
        }
    });
    $("#reply_content").keypress(function(e){
        if(e.ctrlKey && e.which == 13 || e.which == 10) {
           $(this).closest("form").submit();
        }
    });

     $(".reply-container button").bind("click",function(e){
         $(this).addClass("disabled");
         $(this).attr("disabled","disabled");
         $(this).closest("form").submit();
         setTimeout(function(){
             $(this).removeAttr("disabled");
         },3000);
     });

    $(".j_move_topic").bind("click",function(e){
        e.preventDefault();
        $.ajax({
            type:"get",
            dataType:"json",
            url: "/admin/topic/move/" + $(this).attr("data-tid") +"/to/"+$("#selectSlug").val(),
            success:function(data){
                if(data["msg"]){
                    alert(data["msg"]);
                    setTimeout(function(){
                        document.location.reload();
                    },1000);
                }
            }
        });
    });
    $(".j-delete-topic").bind("click",function(e){
        var id=prompt("请输入你要删除的主题id","")
        if (id!=null && id!="" && id == $(this).attr("data-tid")) {
            document.location = $(this).attr("href");
        }else{
            alert("输入有误，你是不是看错了？哥。");
        }
        return false;
    });

    $(function(){
        $(".topic-main img").error(function(){
            $(this).attr("src", "/images/image-404.jpg");
        })

        var _idsForDigg = [];
        var _hashsForDigg = [];
        var _idsMapForDigg = [];



        // 处理跟digg相关的链接  -----------------------------------------------------------------


        $("span[digg]").each(function(){
            var id = $(this).attr("digg");
            if(!_hashsForDigg[id]){
                _idsForDigg.push(id);
                _hashsForDigg[id] = true;
            }
        });
        _idsForDigg = _idsForDigg.join(",");
        if(_idsForDigg){
            $.get("/api/digg_detail/" + _idsForDigg, function(data){
                for(var i = 0; i < data.length; i++){
                    if(data[i].id){
                        _idsMapForDigg[data[i].id] = i;
                    }
                }

                $("span[digg]").each(function() {
                    var id = $(this).attr("digg");
                    var parent = $(this).parents(".list-item");
                    if(!parent.length){
                        parent = $(this).parents(".topic-firstfloor-detail");
                    }

                    if(!parent.length){
                        return ;
                    }
                    if(_idsMapForDigg[id] != undefined){
                        parent.append("<div class='digg-detail' rel='" + $(this).attr("digg") + "'>"  + data[_idsMapForDigg[id]].html  + "</div>");
                        $(this).prepend("<i class=\"fa link-icon fa-magic\"></i> ");
                        $(this).parent().addClass("digg-detail-trigger");
                        $(this).parent().attr("rel", $(this).attr("digg"));}else{
                    }
                });


                function adjustMargin(showBody){
                    var margin = parseInt($(".topic-main").css("margin-left"));
                    if(showBody){
                        $(".topic-main").css("margin-left", (margin + 230 + 30) + "px");
                    }else{
                        $(".topic-main").css("margin-left", (margin - 230 - 30) + "px");
                    }
                }

                function closeByBodyClick(e, ele){
                    if(!$.contains( e.data.get(0), e.target)){
                        closeDigg(e.data);
                    }
                }
                function closeDigg(ele){
                    $("body").unbind("click", closeByBodyClick);
                    ele.hide();
                    adjustMargin(true);
                }

                $(".digg-detail-trigger").click(function(){
                    var ele = $(this);

                    var parent = $(this).parents(".list-item");
                    if(!parent.length){
                        parent = $(this).parents(".topic-firstfloor-detail");
                    }

                    var diggDetailAll = parent.find('.digg-detail');
                    var diggDetail;
                    diggDetailAll.each(function(i, e){
                        if($(e).attr("rel") == ele.attr('rel')){
                            diggDetail = $(e);
                        }
                    });
                    if(!diggDetail){
                        return ;
                    }

                    if(diggDetail.css("display") == "none"){
                        diggDetail.show();
                        $("body").one("click", diggDetail, closeByBodyClick);
                        diggDetail.css("top", $(this).position().top);
                        adjustMargin(false);
                    }else{
                        closeDigg(diggDetail);
                    }
                    return false;
                });
            });
        }
    });

});