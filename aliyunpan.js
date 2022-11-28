#!name=阿里云盘
#!desc=阿里云盘首页优化
#!homepage= https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Rewrite/AdBlock/StartUp.conf
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/ailiyunpan.png

[Script]

http-response ^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/alidrive.js, requires-body=true, timeout=10, tag=alidrive

[MITM]

hostname = api.aliyundrive.com
