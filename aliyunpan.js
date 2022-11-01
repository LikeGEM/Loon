#!name=阿里云盘
#!desc=阿里云盘首页优化
#!homepage= https://gitlab.com/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/ailiyunpan.png
[MITM]
hostname= api.aliyundrive.com

[Script]
http-response ^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/(users|apps\/widgets) requires-body=1,script-path=https://gitlab.com/ddgksf2013/Cuttlefish/-/raw/master/Script/alidrive.js
