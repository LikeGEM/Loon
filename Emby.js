#!name= Emby
#!desc= Emby 解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/Emby.png

[Script]

http-request ^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/Emby.js, requires-body=false, timeout=10, tag=Emby

[MITM]

hostname = mb3admin.com
