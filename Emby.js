/******************************
#!name= Emby
#!desc= Emby 解锁订阅
#!homepage= https://github.com/LikeGEM
#!author= LikeGEM
#!icon= https://raw.githubusercontent.com/LikeGEM/Loon/main/png/Emby.png

[Script]

http-response ^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice requires-body=true, script-path= https://raw.githubusercontent.com/LikeGEM/Loon/main/Emby.js,tag=embyUnlocked

emby.js = type=http-response,pattern=^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice,requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/LikeGEM/Loon/main/Emby.js

[MITM]

hostname = mb3admin.com
*******************************/

const CHECK_URL = 'mb3admin.com/admin/service/registration/validateDevice'

const url = $request.url
const isCheckUrl = (url) => url.includes(CHECK_URL)

if (isCheckUrl(url) && $response.status != 200) {
  const unlock = {
    cacheExpirationDays: 999,
    resultCode: 'GOOD',
    message: 'Device Valid'
  }

  const status = 200
  const headers = $response.headers
  const body = JSON.stringify(unlock)

  $done({ status, headers, body })
} else {
  $done({})
}
