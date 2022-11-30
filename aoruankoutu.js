#!name= 傲软抠图
#!desc= 傲软抠图解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/aoruankoutu.png

[Script]

http-response https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/aoruankoutu.js, requires-body=true, timeout=10, tag=aoruankoutu

[MITM]

hostname = *.aoscdn.com
