#!name= WallCraft
#!desc= WallCraft Pro
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/WallCraft.png

[Script]

http-response ^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ script-path=https://raw.githubusercontent.com/LikeGEM/QuanCX/main/Wallcraft.js, requires-body=true, timeout=10, tag=Wallcraft

[MITM]

hostname = *.wallpaperscraft.com
