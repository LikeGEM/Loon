#!name= Ps Express
#!desc= Ps Express解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/PsExpress.png

[Script]

http-response ^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/PsExpress.js, requires-body=true, timeout=10, tag=PsExpress

[MITM]

hostname = lcs-mobile-cops.adobe.io, photos.adobe.io
