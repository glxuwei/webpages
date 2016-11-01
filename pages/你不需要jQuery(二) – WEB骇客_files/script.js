var focus_top,practice_top,product_top,core_top,impression_top,remarketing_top,cloud_top,bigdata_top,datacenter_top,target_top;
var tab1_top,tab2_top,tab3_top;
var way;
var content,tag;
var getTab=false;
var tag;
var curTab;
var impressionTmp;
var timer;
var targetM;
var showCore;
var targetTab;
var coreTab;
var dataName;
var canvas, stage, exportRoot;
var tmp=0;
window.onload=function()
{
     if (Enabler.isInitialized()) {
          enablerInitHandler();
      } else {
          Enabler.addEventListener(studio.events.StudioEvent.INIT,
    enablerInitHandler);
      }
}

function clickBanner(e){
    if(impressionTmp<2000) Enabler.exit("General to Banner Exit");
    else Enabler.exit("Content to Banner Exit");
}
function initCanvas() {
    canvas = document.getElementById("canvas");
    canvas.style.display = "block";
    images = images||{};
    canvas.addEventListener('click',clickBanner,true);
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    exportRoot = new lib._336x280_h5();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}

function stopAnimation(){
    tmp++;
    if(tmp>1){

        exportRoot.stop();
    }
    
}
function enablerInitHandler()
{
    way = new WAY();
   Enabler.setProfileId(1083422);
    var devDynamicContent = {};

    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core= [{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Content_Priority = "Core";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Key_Initiatvies = ["bigdata", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Biz_Industry = "Helthcare";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Content_Category = "\u65B9\u6848";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Article_Title = "\u82F1\u7279\u5C14\u00AE \u533B\u7597\u884C\u4E1A\u89E3\u51B3\u65B9\u6848\u5EFA\u8BAE\u4E66\uFF0836\u9875\uFF09";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Short_Description = "\u5305\u62EC\u56DB\u5927\u91CD\u70B9\uFF1A1\u4E91\u533B\u9662\u53CA\u533B\u7597\u6570\u636E\u4E2D\u5FC3\u5EFA\u8BBE\uFF0C2 \u4E34\u5E8A\u53CA\u533B\u7597\u7BA1\u7406\u5927\u6570\u636E\u5206\u6790\uFF0C3 \u533B\u7597\u7EC8\u7AEF\u521B\u65B0\u4E0E\u7528\u6237\u4F53\u9A8C\uFF0C 4 \u533B\u7597\u7269\u8054\u7F51\u3002";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144159,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Image_URL = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Image_URL.Url = "https://s0.2mdn.net/ads/richmedia/studio/43901112/image2.jpg";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing= [{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0].Id = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0].tab = "bigdata";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0].remarketing_id = ["102"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression= [{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].Id = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].tab = "core";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].impression_id = ["1000"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].impression_times = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target= [{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0].Id = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0].tab = "cloud";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0].key = ["10001"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[0].Tname = "cloud";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[1].Tname = "cloud";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud[2].Tname = "cloud";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Content_Category = "\u65B9\u6848";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Article_Title = "\u6316\u6398\u4F01\u4E1A\u5927\u6570\u636E\uFF0C\u6210\u5C31\u66F4\u4F73\u5546\u4E1A\u667A\u80FD (\u767D\u76AE\u4E66\uFF09";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Short_Description = "\u82F1\u7279\u5C14IT\uFF1A \u90E8\u7F72\u7CFB\u7EDF\u548C\u5F00\u53D1\u6280\u80FD\u7684\u65B9\u6848\u548C\u5B9E\u8DF5\u5206\u4EAB";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144004,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[0].Tname = "bigdata";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Content_Category = "\u65B9\u6848";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Article_Title = "\u6316\u6398\u4F01\u4E1A\u5927\u6570\u636E\uFF0C\u6210\u5C31\u66F4\u4F73\u5546\u4E1A\u667A\u80FD (\u767D\u76AE\u4E66\uFF09";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Short_Description = "\u82F1\u7279\u5C14IT\uFF1A \u90E8\u7F72\u7CFB\u7EDF\u548C\u5F00\u53D1\u6280\u80FD\u7684\u65B9\u6848\u548C\u5B9E\u8DF5\u5206\u4EAB";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144004,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[1].Tname = "bigdata";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Content_Category = "\u65B9\u6848";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Article_Title = "\u6316\u6398\u4F01\u4E1A\u5927\u6570\u636E\uFF0C\u6210\u5C31\u66F4\u4F73\u5546\u4E1A\u667A\u80FD (\u767D\u76AE\u4E66\uFF09";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Short_Description = "\u82F1\u7279\u5C14IT\uFF1A \u90E8\u7F72\u7CFB\u7EDF\u548C\u5F00\u53D1\u6280\u80FD\u7684\u65B9\u6848\u548C\u5B9E\u8DF5\u5206\u4EAB";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144004,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata[2].Tname = "bigdata";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[0].Tname = "datacenter";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[1].Tname = "datacenter";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter[2].Tname = "datacenter";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[0].Tname = "practice";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[1].Tname = "practice";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Key_Initiatvies = ["dc", "cloud"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Content_Category = "\u6848\u4F8B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Article_Title = "\u9762\u5BF9\u7F51\u7EDC\u548C\u6570\u636E\u7684\u9700\u6C42\u5B9A\u5236\u667A\u80FD\u4E91";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Short_Description = "\u84DD\u6C5B\u56FD\u9645\u6784\u5EFA\u91C7\u7528\u57FA\u4E8E\u82F1\u7279\u5C14\u7684\u5185\u5BB9\u611F\u77E5\u4E00\u7AD9\u5F0F\u4E91\u670D\u52A1\u6765\u5E94\u5BF9\u5F53\u4ECA\u65E5\u76CA\u589E\u957F\u7684\u7F51\u7EDC\u548C\u6570\u636E\u6311\u6218";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144008,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice[2].Tname = "practice";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Content_Category = "\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Article_Title = "\u5206\u5E03\u5F0F\u6570\u636E\u6316\u6398\u4E0E\u5927\u6570\u636E";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Short_Description = "\u82F1\u7279\u5C14\u5BF9\u4E8E\u7F51\u7EDC\u524D\u7AEF\u7684\u4F20\u611F\u5668\u548C\u8BBE\u5907\u6240\u4EA7\u751F\u7684\u5927\u6570\u636E\u8FDB\u884C\u5206\u6790\u7684\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144005,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[0].Tname = "focus";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Content_Category = "\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Article_Title = "\u5206\u5E03\u5F0F\u6570\u636E\u6316\u6398\u4E0E\u5927\u6570\u636E";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Short_Description = "\u82F1\u7279\u5C14\u5BF9\u4E8E\u7F51\u7EDC\u524D\u7AEF\u7684\u4F20\u611F\u5668\u548C\u8BBE\u5907\u6240\u4EA7\u751F\u7684\u5927\u6570\u636E\u8FDB\u884C\u5206\u6790\u7684\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144005,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[1].Tname = "focus";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Key_Initiatvies = ["bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Biz_Industry = "General";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Content_Category = "\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Article_Title = "\u5206\u5E03\u5F0F\u6570\u636E\u6316\u6398\u4E0E\u5927\u6570\u636E";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Short_Description = "\u82F1\u7279\u5C14\u5BF9\u4E8E\u7F51\u7EDC\u524D\u7AEF\u7684\u4F20\u611F\u5668\u548C\u8BBE\u5907\u6240\u4EA7\u751F\u7684\u5927\u6570\u636E\u8FDB\u884C\u5206\u6790\u7684\u89C2\u70B9";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144005,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus[2].Tname = "focus";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product= [{},{},{}];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0]._id = 0;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Key_Initiatvies = ["dc", "bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Content_Category = "\u4EA7\u54C1";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Article_Title = "\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14* \u5185\u5B58\u4E00\u4F53\u673A";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Short_Description = "\u5982\u4F55\u7B80\u5316\u90E8\u7F72\uFF0C\u4F18\u5316\u914D\u7F6E\u5E76\u4F18\u5316Apache Hadoop* \u8F6F\u4EF6\uFF0C\u5C3D\u65E9\u63D0\u4F9B\u5FEB\u901F\u7684\u5206\u6790\u80FD\u529B\uFF1F\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14\u5185\u5B58\u4E00\u4F53\u673A\u91C7\u7528\u6700\u65B0\u82F1\u7279\u5C14\u81F3\u5F3A\u5904\u7406\u5668 E7 \u4EA7\u54C1\u5BB6\u65CF\uFF0C\u5C06\u4E3A\u60A8\u5E26\u6765\u6240\u6709\u8FD9\u4E9B\u80FD\u529B\u3002";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144077,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[0].Tname = "product";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Key_Initiatvies = ["dc", "bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Content_Category = "\u4EA7\u54C1";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Article_Title = "\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14* \u5185\u5B58\u4E00\u4F53\u673A";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Short_Description = "\u5982\u4F55\u7B80\u5316\u90E8\u7F72\uFF0C\u4F18\u5316\u914D\u7F6E\u5E76\u4F18\u5316Apache Hadoop* \u8F6F\u4EF6\uFF0C\u5C3D\u65E9\u63D0\u4F9B\u5FEB\u901F\u7684\u5206\u6790\u80FD\u529B\uFF1F\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14\u5185\u5B58\u4E00\u4F53\u673A\u91C7\u7528\u6700\u65B0\u82F1\u7279\u5C14\u81F3\u5F3A\u5904\u7406\u5668 E7 \u4EA7\u54C1\u5BB6\u65CF\uFF0C\u5C06\u4E3A\u60A8\u5E26\u6765\u6240\u6709\u8FD9\u4E9B\u80FD\u529B\u3002";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144077,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[1].Tname = "product";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Unique_ID = 1;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Client = "Intel";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Business_Unit = "B2B";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Key_Initiatvies = ["dc", "bigdata"];
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Biz_Industry = "IT";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Form_Factor = "Server";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Content_Category = "\u4EA7\u54C1";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Content_Format = "PDF";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Article_Title = "\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14* \u5185\u5B58\u4E00\u4F53\u673A";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Short_Description = "\u5982\u4F55\u7B80\u5316\u90E8\u7F72\uFF0C\u4F18\u5316\u914D\u7F6E\u5E76\u4F18\u5316Apache Hadoop* \u8F6F\u4EF6\uFF0C\u5C3D\u65E9\u63D0\u4F9B\u5FEB\u901F\u7684\u5206\u6790\u80FD\u529B\uFF1F\u9002\u7528\u4E8E Cloudera* Enterprise \u7684\u6234\u5C14\u5185\u5B58\u4E00\u4F53\u673A\u91C7\u7528\u6700\u65B0\u82F1\u7279\u5C14\u81F3\u5F3A\u5904\u7406\u5668 E7 \u4EA7\u54C1\u5BB6\u65CF\uFF0C\u5C06\u4E3A\u60A8\u5E26\u6765\u6240\u6709\u8FD9\u4E9B\u80FD\u529B\u3002";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Destination = {};
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Destination.Url = "http://c.admaster.com.cn/c/a69463,b1144077,c1046,i0,m101,h";
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Active = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Default = true;
    devDynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product[2].Tname = "product";
    Enabler.setDevDynamicContent(devDynamicContent);

    impression_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0];
    remarketing_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_remarketing[0];
    target_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0];
    core_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_core;

    focus_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_focus;
    practice_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_practice;
    product_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_product;
    
    cloud_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_cloud;
    bigdata_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_bigdata;
    datacenter_top = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_datacenter;

    impressionTmp = impression_top.impression_id[0];
    showCore = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_impression[0].tab

    var firstTab = remarketing_top.remarketing_id[0];
    var tabNum=0; 
    switch(Enabler.getParameter("targetKey")){
        case "cloud":
            tabNum = 0;
            break;

        case "bigdata":
            tabNum = 1;
            break;

        case "dc":
            tabNum = 2;
            break;

        default:
            tabNum = 0;
    }
    if(firstTab==104){
        tabNum = Math.floor(Math.random()*3);
    }
    

    

    

    var dataType1 = impression_top.tab;
    var dataType2 = dynamicContent.CN_Intel_GDN_10in1_Jun_27_2016_target[0].tab;

    if(dataType1!="general" && dataType1!="banner"){
        
        switch(remarketing_top.remarketing_id[0]){
            case "101":
                tabNum = 0;
                break;

            case "102":
                tabNum = 1;
                break;

            case "103":
                tabNum = 2;
                break;

            default:
                tabNum=0;
                if(dataType2 == "cloud") tabNum = 1;
                else if(dataType2 == "bigdata") tabNum = 1;
                else if(dataType2 == "dc") abNum = 0;
        }
    }

    curTab =tabNum+1
    var u1num = 100+curTab;
    if(dataType1 == "general"){

        dataType = dataType1;
        impressionTmp++;
        triggerFls(u1num,impressionTmp,10001);
    }
    else if(dataType1 == "banner") {
        triggerFls(u1num,impressionTmp,10001);
        //banner code
        
        initCanvas();
        document.getElementById("mainbox").style.display = "block";
        return;
        
    }
    else{

        dataType = dataType2;
        impressionTmp++;
        triggerFls(u1num,impressionTmp,target_top.key[0]);

    } 
    
    switch(dataType)
    {
        case "cloud":
        dataName = "Cloud";
            document.getElementById("tabSelection").style.backgroundImage= 'url(tit_cloud.jpg)';
            document.getElementById("topImage").src = "top_cloud.jpg";
            tab1_top = focus_top;
            tab2_top = practice_top;
            tab3_top = product_top;
            coreTab = 2;
            document.getElementById("nocore1").style.display = "block";
                document.getElementById("core1").style.display = "none";
            if(showCore == "core"){
                if(curTab!=coreTab) Enabler.counter("Cloud Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Cloud Tab"+curTab+"_Core Default Show",true);
                }
                document.getElementById("nocore2").style.display = "none";
                document.getElementById("core2").style.display = "block";
            }
            else{
                if(curTab!=coreTab) Enabler.counter("Cloud Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Cloud Tab"+curTab+"_Content Default Show",true);
                }
                document.getElementById("nocore2").style.display = "block";
                document.getElementById("core2").style.display = "none";
            }
            break;
        case "bigdata":
        document.getElementById("tabSelection").style.backgroundImage= 'url(tit_bigdata.jpg)';
            document.getElementById("topImage").src = "top_bigdata.jpg";
        dataName = "Bigdata";
            tab1_top = focus_top;
            tab2_top = practice_top;
            tab3_top = product_top;
            coreTab = 2;
            document.getElementById("nocore1").style.display = "block";
                document.getElementById("core1").style.display = "none";
            if(showCore == "core"){
                if(curTab!=coreTab) Enabler.counter("Bigdata Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Bigdata Tab"+curTab+"_Core Default Show",true);
                }
                document.getElementById("nocore2").style.display = "none";
                document.getElementById("core2").style.display = "block";
            }
            else{
                if(curTab!=coreTab) Enabler.counter("Bigdata Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Bigdata Tab"+curTab+"_Content Default Show",true);
                }
                document.getElementById("nocore2").style.display = "block";
                document.getElementById("core2").style.display = "none";
            }
            break;
        case "dc":
        dataName = "Datacenter";
            document.getElementById("topImage").src = "top_dc.jpg";
document.getElementById("tabSelection").style.backgroundImage= 'url(tit_dc.jpg)';
            document.getElementById("topImage").src = "top_general.jpg"
            tab1_top = practice_top;
            tab2_top = focus_top;
            tab3_top = product_top;
            coreTab = 1;
             document.getElementById("nocore2").style.display = "block";
            document.getElementById("core2").style.display = "none";
            if(showCore == "core"){
                if(curTab!=coreTab) Enabler.counter("Datacenter Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Datacenter Tab"+curTab+"_Core Default Show",true);
                }
                document.getElementById("nocore1").style.display = "none";
                document.getElementById("core1").style.display = "block";
            }
            else{
                if(curTab!=coreTab) Enabler.counter("Datacenter Tab"+curTab+" Default Show",true);
                else{
                    Enabler.counter("Datacenter Tab"+curTab+"_Content Default Show",true);
                }
                document.getElementById("nocore1").style.display = "block";
                document.getElementById("core1").style.display = "none";
            }
            break;
        case "general":
            dataName = "General";
            document.getElementById("tabSelection").style.backgroundImage= 'url(tit_general.jpg)';
            document.getElementById("topImage").src = "top_general.jpg";
            tab1_top = cloud_top;
            tab2_top = bigdata_top;
            tab3_top = datacenter_top;

            document.getElementById("nocore2").style.display = "block";
            document.getElementById("core2").style.display = "none";
             document.getElementById("nocore1").style.display = "block";
                document.getElementById("core1").style.display = "none";

            Enabler.counter("General Tab"+curTab+" Default Show",true);
            break;    
    }
   
    initDisplay();
    iniMenu(tabNum); 
document.getElementById("mainbox").style.display = "block";
    
}


function showTab(tabNum)
{
    /*for(var n=0; n<3; n++){
        tag[n].className="";
        content[n].style.display="none"; 
    }   
    tag[tabNum].className = "current"; 
    //document.getElementById("tab").className ="tab no"+(tabNum + 1);
    content[tabNum].style.display = "block"; */

    document.getElementById("tabSelection").className = "tabNo"+ tabNum;
}



function getParam(e)
{
    try{
        var tabsFromPage = ['focus', 'practice', 'product'];
        var tabFromPage = e.data;
       // console.log("FromParent:" + e.data);
        var currentTabNum = tabsFromPage.indexOf(tabFromPage);
        if(currentTabNum != -1)
        {
           if(!getTab)
            {
                showTab(currentTabNum);
                getTab = true;
            }
        }
    }catch(e){return;}
}

function initDisplay()
{

    way.set("tab1_line1", tab1_top [0].Article_Title.substr(0, 17));
    way.set("tab1_line1_descri", tab1_top[0].Short_Description.substr(0, 30)+ '...');
    way.set("tab1_line2", tab1_top[1].Article_Title.substr(0, 17));
    way.set("tab1_line2_descri", tab1_top[1].Short_Description.substr(0, 30) + '...');
    way.set("tab1_line3", tab1_top[2].Article_Title.substr(0, 17));
    way.set("tab1_line3_descri", tab1_top[2].Short_Description.substr(0, 30) + '...');
    
    way.set("tab2_line1", tab2_top[0].Article_Title.substr(0, 17));
    way.set("tab2_line1_descri", tab2_top[0].Short_Description.substr(0, 30) + '...');
    way.set("tab2_line2", tab2_top[1].Article_Title.substr(0, 17));
    way.set("tab2_line2_descri", tab2_top[1].Short_Description.substr(0, 30) + '...');
    way.set("tab2_line3", tab2_top[2].Article_Title.substr(0, 17));
    way.set("tab2_line3_descri", tab2_top[2].Short_Description.substr(0, 30) + '...');
    
    way.set("tab3_line1", tab3_top[0].Article_Title.substr(0, 17));
    way.set("tab3_line1_descri", tab3_top[0].Short_Description.substr(0, 30) + '...');
    way.set("tab3_line2", tab3_top[1].Article_Title.substr(0, 17));
    way.set("tab3_line2_descri", tab3_top[1].Short_Description.substr(0, 30) + '...');
    way.set("tab3_line3", tab3_top[2].Article_Title.substr(0, 17));
    way.set("tab3_line3_descri", tab3_top[2].Short_Description.substr(0, 30) + '...');

    way.set("core1_line1", core_top[0].Article_Title.substr(0, 17));
    way.set("core1_line1_descri", core_top[0].Short_Description.substr(0, 60) + '...');

     way.set("core2_line1", core_top[0].Article_Title.substr(0, 17));
    way.set("core2_line1_descri", core_top[0].Short_Description.substr(0, 60) + '...');

    
    way.set("core1_image",core_top[0].Image_URL.Url);
    way.set("core2_image",core_top[0].Image_URL.Url);
    initExits();

}

function initExits()
{

    var clickElements = ['tab1_line1_exit',  'tab1_line2_exit','tab1_line3_exit','tab1_more_exit',
                        'tab1_core1_line1_exit','tab1_core1_more_exit',
                        'tab2_line1_exit','tab2_line2_exit','tab2_line3_exit','tab2_more_exit',
                        'tab2_core2_line1_exit','tab2_core2_more_exit',
                        'tab3_line1_exit', 'tab3_line2_exit','tab3_line3_exit','tab3_more_exit',
                        'logo_exit'];
    var exitsNum = clickElements.length;
    for(i=0;i<exitsNum;i++)
    {   
        var ele = document.getElementById(clickElements[i]);
        //console.log(i);
        if(window.addEventListener)
        {
            if(window.ontouchend)
            {
                ele.addEventListener('touchend', setExits(i));
            }
            else
            {
                ele.addEventListener('click', setExits(i));
            }
           

        }
        else if(window.attachEvent)
        {
            ele.attachEvent("onclick", setExits(i));
        }

    }                     

}

function setExits(ele)
{
    var str1;
    var u1Tab;
    return function()
    {
        switch(ele)
        {
            case 0:
                Enabler.exitOverride(dataName + ' Tab1_Content1 Exit', tab1_top[0].Destination.Url);
                str1 = tab1_top[0].Tname+"_"+tab1_top[0].Unique_ID
                break;
            case 1:
                Enabler.exitOverride(dataName + ' Tab1_Content2 Exit', tab1_top[1].Destination.Url);
                str1 = tab1_top[1].Tname+"_"+tab1_top[1].Unique_ID;
                break;   
            case 2:
                Enabler.exitOverride(dataName +' Tab1_Content3 Exit', tab1_top[2].Destination.Url);
                str1 = tab1_top[2].Tname+"_"+tab1_top[2].Unique_ID;
                break;   
            case 3:
                if(dataName=="Datacenter") Enabler.exit(dataName+ ' Tab1_Content_LearnMore Exit');
                else Enabler.exit(dataName+ ' Tab1_LearnMore Exit');
                str1 = tab1_top[0].Tname +'_more_exit';
                break;
            case 4:
                Enabler.exitOverride(dataName + ' Tab1_Core Exit', core_top[0].Destination.Url);
                str1 = "core_" + core_top[0].Unique_ID;
                break;
            case 5:
                Enabler.exit(dataName + ' Tab1_Core_LearnMore Exit');
                str1 = "core_" + core_top[0].Unique_ID;
                break;
            case 6:
                Enabler.exitOverride(dataName + ' Tab2_Content1 Exit', tab2_top[0].Destination.Url);
                str1 = tab2_top[0].Tname+"_"+tab2_top[0].Unique_ID
                break;
            case 7:
                Enabler.exitOverride(dataName + ' Tab2_Content2 Exit', tab2_top[1].Destination.Url);
                str1 = tab2_top[1].Tname+"_"+tab2_top[1].Unique_ID
                break;
            case 8:
                Enabler.exitOverride(dataName + ' Tab2_Content3 Exit', tab2_top[2].Destination.Url);
                str1 = tab2_top[2].Tname+"_"+tab2_top[2].Unique_ID
                break;
            case 9:
                if(dataName!="Datacenter" && dataName!="General") Enabler.exit(dataName + ' Tab2_Content_LearnMore Exit');
                else Enabler.exit(dataName + ' Tab2_LearnMore Exit');
                str1 = tab2_top[2].Tname+ '_more_exit';
                break;
            case 10:
                Enabler.exitOverride(dataName + ' Tab2_Core Exit', core_top[0].Destination.Url);
                str1 = "core_" + core_top[0].Unique_ID;
                break;
            case 11:
                Enabler.exit(dataName + ' Tab2_Core_LearnMore Exit');
                str1 = "core_" + core_top[0].Unique_ID;
                break;
            case 12:
                Enabler.exitOverride(dataName + ' Tab3_Content1 Exit', tab3_top[0].Destination.Url);
                str1 = tab3_top[0].Tname+"_"+tab3_top[0].Unique_ID
                
                break;
            case 13:
                Enabler.exitOverride(dataName + ' Tab3_Content2 Exit', tab3_top[1].Destination.Url);
                str1 = tab3_top[1].Tname+"_"+tab3_top[1].Unique_ID;
                break;
            case 14:
                Enabler.exitOverride(dataName + ' Tab3_Content3 Exit', tab3_top[2].Destination.Url);
                str1 = tab3_top[2].Tname+"_"+tab3_top[2].Unique_ID
                break;        
            case 15:
                Enabler.exit(dataName + ' Tab3_LearnMore Exit');
                str1 = tab3_top[0].Tname +'_more_exit';
                break;
            case 16:
                var estr
                if(dataType=="general"){
                    estr = "General Logo Exit";
                }
                else if(curTab != coreTab) estr =dataName+ " Tab" + curTab + "_Logo Exit";
                else {
                    if(showCore=="core") estr = dataName+ " Tab" + curTab + "_Core_Logo Exit";
                    else estr = dataName+ " Tab" + curTab + "_Content_Logo Exit";
                }
                Enabler.exit(estr);
                str1 = estr;
        }
        Enabler.reportCustomVariableCount2(str1);
        if(ele < 6)
        {
            if(dataType=="general"){
                impressionTmp = 2000;
                triggerFls(102,impressionTmp,10001);
            } 
            else triggerFls(101,impressionTmp,target_top.key[0]);
            
        }else if(ele < 12)
        {
            if(dataType=="general"){
                impressionTmp = 2000;
                 triggerFls(102,impressionTmp,10002);
            }
            else triggerFls(102,impressionTmp,target_top.key[0]);
            
        }
        else if(ele < 16)
        {
            if(dataType=="general"){
                impressionTmp = 2000;
                triggerFls(101,impressionTmp,10003);
            } 
            else triggerFls(103,impressionTmp,target_top.key[0]);
        }
        else
        {
            var numtmp = 100+ curTab;
            var protmp = 10000 + curTab;
            if(dataType == "general") triggerFls(104,1001,target_top.key[0]);
            else triggerFls(numtmp,impressionTmp,target_top.key[0]);
        }
    }
    
    
}


 function iniMenu(currentTab)
{
    tag=document.getElementById("tabArea").getElementsByTagName("span");
    //tag=document.getElementById("tab").children; 
    content=document.getElementById("cont").children; 
    content[currentTab].style.display = "block"; 
        
    //tag[currentTab].className = "current"; 
   // document.getElementById("tab").className ="tab no"+(currentTab + 1);
   
   var len= tag.length; 
    for(var i=0; i<len; i++)  
    { 
        tag[i].index=i; 
        tag[i].onmouseover = function()     
        {     
            targetM = this;
            timer = setTimeout(function(){
                
            for(var n=0; n<len; n++){
                tag[n].className="";
                content[n].style.display="none"; 
            }   
            curTab = targetM.index+1;
            tag[targetM.index].className = "current"; 

            var ctr ;
            if(curTab !=coreTab) ctr= dataName + " Tab" + (targetM.index+1) +" Selected" ;
            else {
                if(showCore == "core") ctr =dataName + " Tab" + (targetM.index+1) +"_Core Selected" ;
                else ctr =  dataName + " Tab" + (targetM.index+1) +"_Content Selected" ;
            }
            document.getElementById("tabSelection").className = "tabNo"+ targetM.index;
            Enabler.counter(ctr,true);
            //document.getElementById("tab").className ="tab no"+(this.index+1);
            content[targetM.index].style.display = "block"; 
            },500);
        }
        tag[i].onmouseout = function(){
            clearTimeout(timer);}
    }

    for(var p=0;p<3;p++)
    {
        if(p!=currentTab){
            content[p].style.display="none"; 
        tag[p].className="";

        } 
    }
    document.getElementById("tabSelection").className = "tabNo"+ currentTab;

}
function namecounter(){
    Enabler.counter("General Tab1 Selected",true);
    Enabler.counter("General Tab2 Selected",true);
    Enabler.counter("General Tab3 Selected",true);
    Enabler.counter("General Tab1 Default Show",true);
    Enabler.counter("General Tab2 Default Show",true);
    Enabler.counter("General Tab3 Default Show",true);
    Enabler.exit("General Logo Exit");
    Enabler.exit("General Tab1_Content1 Exit");
    Enabler.exit("General Tab1_Content2 Exit");
    Enabler.exit("General Tab1_Content3 Exit");
    Enabler.exit("General Tab2_Content1 Exit");
    Enabler.exit("General Tab2_Content2 Exit");
    Enabler.exit("General Tab2_Content3 Exit");
    Enabler.exit("General Tab3_Content1 Exit");
    Enabler.exit("General Tab3_Content2 Exit");
    Enabler.exit("General Tab3_Content3 Exit");
    Enabler.exit("General Tab1_LearnMore Exit");
    Enabler.exit("General Tab2_LearnMore Exit");
    Enabler.exit("General Tab3_LearnMore Exit");

    Enabler.counter("Bigdata Tab1 Selected",true);
    Enabler.counter("Bigdata Tab2_Core Selected",true);
    Enabler.counter("Bigdata Tab2_Content Selected",true);
    Enabler.counter("Bigdata Tab3 Selected",true);
    Enabler.counter("Bigdata Tab1 Default Show",true);
    Enabler.counter("Bigdata Tab2_Core Default Show",true);
    Enabler.counter("Bigdata Tab2_Content Default Show",true);
    Enabler.counter("Bigdata Tab3 Default Show",true);
    Enabler.exit("Bigdata Tab1_Logo Exit");
    Enabler.exit("Bigdata Tab2_Core_Logo Exit");
    Enabler.exit("Bigdata Tab2_Content_Logo Exit");
    Enabler.exit("Bigdata Tab3_Logo Exit");
    Enabler.exit("Bigdata Tab1_Content1 Exit");
    Enabler.exit("Bigdata Tab1_Content2 Exit");
    Enabler.exit("Bigdata Tab1_Content3 Exit");
    Enabler.exit("Bigdata Tab2_Content1 Exit");
    Enabler.exit("Bigdata Tab2_Content2 Exit");
    Enabler.exit("Bigdata Tab2_Content3 Exit");
    Enabler.exit("Bigdata Tab3_Content1 Exit");
    Enabler.exit("Bigdata Tab3_Content2 Exit");
    Enabler.exit("Bigdata Tab3_Content3 Exit");
    Enabler.exit("Bigdata Tab1_LearnMore Exit");
    Enabler.exit("Bigdata Tab2_Core_LearnMore Exit");
    Enabler.exit("Bigdata Tab2_Content_LearnMore Exit");
    Enabler.exit("Bigdata Tab3_LearnMore Exit");
    Enabler.exit("Bigdata Tab2_Core Exit");

    Enabler.counter("Cloud Tab1 Selected",true);
    Enabler.counter("Cloud Tab2_Core Selected",true);
    Enabler.counter("Cloud Tab2_Content Selected",true);
    Enabler.counter("Cloud Tab3 Selected",true);
    Enabler.counter("Cloud Tab1 Default Show",true);
    Enabler.counter("Cloud Tab2_Core Default Show",true);
    Enabler.counter("Cloud Tab2_Content Default Show",true);
    Enabler.counter("Cloud Tab3 Default Show",true);
    Enabler.exit("Cloud Tab1_Logo Exit");
    Enabler.exit("Cloud Tab2_Core_Logo Exit");
    Enabler.exit("Cloud Tab2_Content_Logo Exit");
    Enabler.exit("Cloud Tab3_Logo Exit");
    Enabler.exit("Cloud Tab1_Content1 Exit");
    Enabler.exit("Cloud Tab1_Content2 Exit");
    Enabler.exit("Cloud Tab1_Content3 Exit");
    Enabler.exit("Cloud Tab2_Content1 Exit");
    Enabler.exit("Cloud Tab2_Content2 Exit");
    Enabler.exit("Cloud Tab2_Content3 Exit");
    Enabler.exit("Cloud Tab3_Content1 Exit");
    Enabler.exit("Cloud Tab3_Content2 Exit");
    Enabler.exit("Cloud Tab3_Content3 Exit");
    Enabler.exit("Cloud Tab1_LearnMore Exit");
    Enabler.exit("Cloud Tab2_Core_LearnMore Exit");
    Enabler.exit("Cloud Tab2_Content_LearnMore Exit");
    Enabler.exit("Cloud Tab3_LearnMore Exit");
    Enabler.exit("Cloud Tab2_Core Exit");

    Enabler.counter("Datacenter Tab1_Core Selected",true);
    Enabler.counter("Datacenter Tab1_Content Selected",true);
    Enabler.counter("Datacenter Tab2 Selected",true);
    Enabler.counter("Datacenter Tab3 Selected",true);
    Enabler.counter("Datacenter Tab1_Core Default Show",true);
    Enabler.counter("Datacenter Tab1_Content Default Show",true);
    Enabler.counter("Datacenter Tab2 Default Show",true);
    Enabler.counter("Datacenter Tab3 Default Show",true);
    Enabler.exit("Datacenter Tab1_Core_Logo Exit");
    Enabler.exit("Datacenter Tab1_Content_Logo Exit");
    Enabler.exit("Datacenter Tab2_Logo Exit");
    Enabler.exit("Datacenter Tab3_Logo Exit");
    Enabler.exit("Datacenter Tab1_Content1 Exit");
    Enabler.exit("Datacenter Tab1_Content2 Exit");
    Enabler.exit("Datacenter Tab1_Content3 Exit");
    Enabler.exit("Datacenter Tab2_Content1 Exit");
    Enabler.exit("Datacenter Tab2_Content2 Exit");
    Enabler.exit("Datacenter Tab2_Content3 Exit");
    Enabler.exit("Datacenter Tab3_Content1 Exit");
    Enabler.exit("Datacenter Tab3_Content2 Exit");
    Enabler.exit("Datacenter Tab3_Content3 Exit");
    Enabler.exit("Datacenter Tab1_Core_LearnMore Exit");
    Enabler.exit("Datacenter Tab1_Content_LearnMore Exit");
    Enabler.exit("Datacenter Tab2_LearnMore Exit");
    Enabler.exit("Datacenter Tab3_LearnMore Exit");
    Enabler.exit("Datacenter Tab1_Core Exit");
    Enabler.exit("General to Banner Exit");
    Enabler.exit("Content to Banner Exit");


}
//http://2218289.fls.doubleclick.net/activityi;src=2218289;type=2015dycr;cat=2015d001;
//trigger floodlight tag
function triggerFls(u1,u2,u3)
{
    if (document.getElementById("DCLK_FLDiv"))
    {
        var flDiv = document.getElementById("DCLK_FLDiv"); 
    }
    else { 
        var flDiv = document.body.appendChild(document.createElement("div"));
        flDiv.id="DCLK_FLDiv"; 
        flDiv.style.display = "none"; 
    }
    var DCLK_FLIframe = document.createElement("iframe"); 
    DCLK_FLIframe.id = "DCLK_FLIframe_9012";
    DCLK_FLIframe.src = "http://2218289.fls.doubleclick.net/activityi;src=2218289;type=y16bi0;cat=googl0;u1=" + u1+ ";u2="+ u2 + ";u3="+ u3 + ";ord=1;num=" + new Date()*1;
    flDiv.appendChild(DCLK_FLIframe);

    

}