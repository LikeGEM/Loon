#!name= 音乐弹幕/趣听音乐
#!desc= 免输入激活码，自动激活APP，免弹窗
#!homepage= https://t.me/ddgksf2021
#!author= Cuttlefish
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/yinyuedanmu.png

[Script]

# ～ 趣听音乐☆自动激活APP（2022-10-26）@ddgksf2013
http-response ^https?:\/\/api\.bspapp\.com\/client$ script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Crack/qtmusic.js, requires-body=true, timeout=10, tag=qtmusic

[MITM]

hostname = api.bspapp.com
