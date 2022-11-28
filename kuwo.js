#!name= 酷我音乐
#!desc= 代码重构,这版是最完美的酷我解锁
#!homepage= https://github.com/I-am-R-E
#!author= R·E
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/kuwo.png

[Script]
http-response ^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* script-path=https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/kw.js,requires-body=true, timeout=10, tag=酷我音乐

[MITM]
hostname = *.kuwo.cn, *.lrts.me
