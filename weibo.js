#!name= 微博
#!desc= 微博优化
#!homepage= https://github.com/zmqcherish
#!author= zmqcherish
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/weibo.png

[Script]

# 微博去广告以及去除各部分推广模块 - cherish
http-response ^https?://m?api\.weibo\.c(n|om)/2/(cardlist|searchall|page|messageflow|statuses/(unread_)?friends(/|_)timeline|groups/timeline|statuses/(container_timeline|unread_hot_timeline|extend|video_mixtimeline|unread_topic_timeline)|profile/(me|container_timeline)|video/(community_tab|remind_info|tiny_stream_video_list)|checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item|search/(finder|container_timeline|container_discover)) script-path=https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js, requires-body=true, timeout=10, tag=weibo_main
# 删除微博开屏广告 - cherish
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) script-path=https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js, requires-body=true, timeout=10, tag=weibo_launch
# 自定义tab皮肤
http-response ^https://api.weibo.cn/2/!/client/light_skin script-path=https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js, requires-body=true, timeout=10, tag=weibo_main
# 非会员设置tab皮肤 - cherish
http-response ^https://new.vip.weibo.cn/littleskin/preview script-path=https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js, requires-body=true, timeout=10, tag=weibo_main

[MITM]

hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn
