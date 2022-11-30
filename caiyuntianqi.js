#!name= 彩云天气
#!desc= 彩云天气解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/caiyuntianqi.png

[Script]

http-response ^https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/caiyuntianqi.js, requires-body=true, timeout=10, tag=caiyuntianqi

[MITM]

hostname = biz.caiyunapp.com
