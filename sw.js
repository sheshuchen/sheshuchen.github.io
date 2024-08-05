/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","615f71c1d2f3d76af2bbf7ebf315513c"],["/about/index.html","a60fb24f295ecefcb0efd06aca5b5b86"],["/about/node_modules/jpegtran-bin/cli.js","633e721e55920dbb4f02cf2e270a3622"],["/about/node_modules/jpegtran-bin/index.js","03afec67e009968e4d5b730826913cdc"],["/about/node_modules/jpegtran-bin/lib/index.js","88e82507c7e28e9406840a2543fb2969"],["/about/node_modules/jpegtran-bin/lib/install.js","a8cd2ee3f6e135a0143baca615cfb06f"],["/about/node_modules/jpegtran-bin/readme.html","48b03474896319b5817895397d3ada82"],["/about/node_modules/jpegtran-bin/test/fixtures/test-optimized.jpg","f6a5fbb5f8001eb51114c693a808d061"],["/about/node_modules/jpegtran-bin/test/fixtures/test.jpg","2cb83f1d35816232fb3775f973dd4bcd"],["/about/node_modules/jpegtran-bin/test/test.js","212a44fa618c955fc11d962108528a2f"],["/about/node_modules/mozjpeg/cli.js","629f2b7b9aba34e527aa9368a4d2612e"],["/about/node_modules/mozjpeg/index.js","03afec67e009968e4d5b730826913cdc"],["/about/node_modules/mozjpeg/lib/index.js","3f01b511535ebbacffc003807700193b"],["/about/node_modules/mozjpeg/lib/install.js","686f644bfae993d9957a06cd1ddcfff0"],["/about/node_modules/mozjpeg/readme.html","33bfc9a28dd206f01b443624ac265582"],["/about/node_modules/optipng-bin/cli.js","2a1567569b2639f22ff984ff79235f18"],["/about/node_modules/optipng-bin/index.js","191a9079f244c4a26344988de931a6c3"],["/about/node_modules/optipng-bin/lib/index.js","1a09ee0ed4fb011cb1bb6e5a4ed2fcfe"],["/about/node_modules/optipng-bin/lib/install.js","3c1a64528bd6b2bc35d18403c919950d"],["/about/node_modules/optipng-bin/readme.html","1bd5043a70c93e37aed37df0a1cd2ac5"],["/archives/2024/08/index.html","f9812dc3efa5f7e23759c653d928f1c7"],["/archives/2024/index.html","90591d614491b6453f62cfc2cb2932cd"],["/archives/index.html","5bf2a494f9aa02711b6c4b684f42124a"],["/categories/hexo/index.html","66098911daa24ede22705a357d392eee"],["/categories/index.html","dabb18ca3092daf59f830e55dd83e337"],["/categories/前端/index.html","b2d30dc1f8d17eb7c4a123dad17ac9b7"],["/categories/博客操作/index.html","9910338874a5ca5339e6fbce8d47b4b9"],["/categories/恋爱/index.html","1e075733aa028fc15f7bcf7ab0614e88"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","0d6c8d30cfa8c169d5f85ae331c118cb"],["/img/1.png","b33f2e0d03bd2f6322f82be720580b53"],["/img/2.png","21abeafe665ccf2a711a285d20899263"],["/img/3.png","c4ba8c83b1ac07260477339ce904fdba"],["/img/4.png","923e227ca801c6d93ca6efed9e4faf5b"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/background.jpg","8a4d8bd56a5984f653189c445eafe4bb"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","16d73d7e7dd32e10b224c791ea8ae855"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mongoDB.png","3387409f5b2833d3a15fa16479e6b6d9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/qixi.png","a8c7f6e3bd2fdbdc02a4d4a68ea7d838"],["/img/silent.jpg","6dffcb00d10427e20052d9437feea8ce"],["/img/主页.png","ed67badffd47f96f3263a0fd37a644d6"],["/index.html","f4252f5d7af0fbe0295923d29d0f0441"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","045a44c898c362a753821b1ca4801013"],["/music/index.html","c987336a56fb09339f9fccdc203356cd"],["/posts/5e72dd04/index.html","9b467c766164e0374a6207aaed4c5210"],["/posts/f20f8f03/index.html","14d5cb35a8f311ecbb94f15dd3cefc14"],["/sw-register.js","90f7ec96e6c8c33c6356ea248b0463c9"],["/tags/CSS/index.html","76f31fe1b46e28dc401812274c9cb08f"],["/tags/Fluid/index.html","32f7383879175da4cbe71f48dcd203e7"],["/tags/HTML/index.html","3935597201b69b44242d65dd1e9b2af3"],["/tags/JavaScript/index.html","ffe2df2a2276c8f1a4d111e5b438b1e5"],["/tags/hexo/index.html","cd1e825112c60db956e1aadb6cdd294f"],["/tags/index.html","ecade129eba34e28d89134f9def0c292"],["/tags/博客/index.html","a2c2c321a369b3a152351f3f469a2722"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
