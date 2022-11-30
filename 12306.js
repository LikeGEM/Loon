#!name= 12306
#!desc= 12306优化
#!homepage= https://ocd0522.tk/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/12306.png

[Script]

http-response ^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList script-path=https://github.com/ddgksf2013/Scripts/raw/master/12306.js, requires-body=true, timeout=10, tag=12306

[MITM]

hostname = ad.12306.cn
