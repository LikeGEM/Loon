#!name= Pixiv
#!desc= Pixiv优化
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/Pixiv.png

[Script]

http-response ^https?:\/\/oauth\.secure\.pixiv\.net\/(auth\/token) script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/PixivAD.js, requires-body=true, timeout=10, tag=PixivAD

[MITM]

hostname = oauth.secure.pixiv.net
