#!name= 克拉壁纸
#!desc= 克拉壁纸解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/kelabizhi.png

[Script]

http-response ^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/kelabizhi.js, requires-body=true, timeout=10, tag=kelabizhi

[MITM]

hostname = claritywallpaper.com
