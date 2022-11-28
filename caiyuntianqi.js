#!name= 彩云天气
#!desc= 彩云天气解锁订阅
#!homepage= https://ocd0522.tk/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/caiyuntianqi.png

[Script]

# >  彩云天气 （2020-11-21） by ddgksf2013
http-response https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/caiyun.js, requires-body=true, timeout=10, tag=caiyun

[MITM]

hostname = biz.caiyunapp.com
