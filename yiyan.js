#!name= 一言
#!desc= 一言解锁订阅
#!homepage= https://github.com/LikeGEM
#!author=LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/yiyan.png

[Script]

http-response ^https:\/\/app\.yiyan\.art\/yiyan\/ script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/yiyan.js, requires-body=true, timeout=10, tag=yiyan

[MITM]

hostname = app.yiyan.art
