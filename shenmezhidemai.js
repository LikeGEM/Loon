#!name= 什么值得买
#!desc= 什么值得买优化
#!homepage= https://github.com/blackmatrix7
#!author= blackmatrix7
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/shenmezhidemai.png

[Rewrite]

# 好价详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/other_modul reject
# 好价详情页红包小助手
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/user_related_modul reject
# Wiki(618晒物活动推广，将来可能不是广告)
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/wiki_related_modul reject

[Script]

# 开屏去广告
http-response ^https?:\/\/app-api\.smzdm\.com\/util\/loading script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 首页去广告
http-response ^https?:\/\/homepage-api\.smzdm\.com\/v3\/home script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 好价去广告
http-response ^https?:\/\/haojia-api\.smzdm\.com\/home\/list script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 好价详情页去广告
http-response ^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 百科去广告
http-response ^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 搜索结果去广告
http-response ^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10 script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 搜索标签去广告
http-response ^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads
# 值会员权益中心banner广告
http-response ^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner script-path=https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js, requires-body=true, timeout=10, tag=smzdm_remove_ads

[MITM]

hostname = app-api.smzdm.com,homepage-api.smzdm.com,haojia-api.smzdm.com,haojia.m.smzdm.com,baike-api.smzdm.com,s-api.smzdm.com,zhiyou.m.smzdm.com
