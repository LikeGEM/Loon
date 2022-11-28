#!name= 哔哩哔哩1080p
#!desc= AdBlock_DIY
#!homepage= https://ocd0522.tk/ddgksf2013
#!author= ddgksf2013
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/bilibili.png

[Rewrite]

# ～ BiliBili_哔哩哔哩_屏蔽直播间商品广告浮窗@ddgksf2013
^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\? reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive reject-dict
# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip reject
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/app\.bilibili\.com\/bilibili\.app\.interface\.v1\.Search\/Default reject
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show reject-dict
# ～ BiliBili_哔哩哔哩_Defaultword@ddgksf2013
^https://app.bilibili.com/x/v2/search/defaultwords reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards reject-dict
# ～ BiliBili_哔哩哔哩_去除动态中的话题@bm7
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr reject-dict
# ～ BiliBili_哔哩哔哩_漫画去广告@ddgksf2013
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash) reject-dict

[Script]

# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动[卸载重装]@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_启动时开启直连模式[自行启用]@ddgksf2013
;http-response ^https?:\/\/app\.bilibili\.com\/x\/resource\/domain script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_startup_direct.js, requires-body=true, timeout=10, tag=bilibili_startup_direct
# ～ BiliBili_哔哩哔哩_繁体CC字幕转中文简体[自行启用]@ddgksf2013
;http-response ^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_cc.js, requires-body=true, timeout=10, tag=bilibili_cc
# ～ BiliBili_哔哩哔哩_观影页面去广告@ddgksf2013
http-response ^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
http-response ^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_去除统一设置的皮肤@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_1080P高码率+4K画质(番剧和影视除外)@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
http-response ^https://app.bilibili.com/x/v2/search/square script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_推荐去广告@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_追番去广告@ddgksf2013
http-response ^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_直播去广告@bm7
http-response ^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_标签页处理@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json
# ～ BiliBili_哔哩哔哩_我的页面处理@ddgksf2013
http-response ^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine script-path=https://ocd0522.tk/ddgksf2013/Cuttlefish/raw/branch/master/Script/bilibili_json.js, requires-body=true, timeout=10, tag=bilibili_json

# ～ BiliBili_哔哩哔哩_Proto去广告@app2smile
http-response ^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js, requires-body=true, binary-body-mode=true, timeout=10, tag=bilibili-proto

[MITM]

hostname = app.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com, api.bilibili.com, manga.bilibili.com, grpc.biliapi.net,api.biliapi.net, -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net
