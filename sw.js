/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ad55519d6ff048ab0c59b366c4fc8964"],["/about/index.html","1e4c2e66683df41855c1d3e8da8a5dfc"],["/about/node_modules/jpegtran-bin/cli.js","633e721e55920dbb4f02cf2e270a3622"],["/about/node_modules/jpegtran-bin/index.js","03afec67e009968e4d5b730826913cdc"],["/about/node_modules/jpegtran-bin/lib/index.js","88e82507c7e28e9406840a2543fb2969"],["/about/node_modules/jpegtran-bin/lib/install.js","a8cd2ee3f6e135a0143baca615cfb06f"],["/about/node_modules/jpegtran-bin/readme.html","b4d8ac86212e4956f966449e47e71e43"],["/about/node_modules/jpegtran-bin/test/fixtures/test-optimized.jpg","f6a5fbb5f8001eb51114c693a808d061"],["/about/node_modules/jpegtran-bin/test/fixtures/test.jpg","2cb83f1d35816232fb3775f973dd4bcd"],["/about/node_modules/jpegtran-bin/test/test.js","212a44fa618c955fc11d962108528a2f"],["/about/node_modules/mozjpeg/cli.js","629f2b7b9aba34e527aa9368a4d2612e"],["/about/node_modules/mozjpeg/index.js","03afec67e009968e4d5b730826913cdc"],["/about/node_modules/mozjpeg/lib/index.js","3f01b511535ebbacffc003807700193b"],["/about/node_modules/mozjpeg/lib/install.js","686f644bfae993d9957a06cd1ddcfff0"],["/about/node_modules/mozjpeg/readme.html","0557bfa651398e0e69a830a1ea7076fb"],["/about/node_modules/optipng-bin/cli.js","2a1567569b2639f22ff984ff79235f18"],["/about/node_modules/optipng-bin/index.js","191a9079f244c4a26344988de931a6c3"],["/about/node_modules/optipng-bin/lib/index.js","1a09ee0ed4fb011cb1bb6e5a4ed2fcfe"],["/about/node_modules/optipng-bin/lib/install.js","3c1a64528bd6b2bc35d18403c919950d"],["/about/node_modules/optipng-bin/readme.html","4cf90d005571310fe1bc17beb7a83761"],["/archives/2024/08/index.html","0a67fdfab44f916e3829a86d1be3b457"],["/archives/2024/index.html","d3a2fbbdcab900ae6bab8fc7f33c8ec6"],["/archives/index.html","4536f42c89dcd6c6dab3d8d992a2e7c5"],["/categories/hexo/index.html","f5223cf6e9609e79ca3994d9e0f3902f"],["/categories/index.html","c99235f09d27abc3214dce672eaf3fc4"],["/categories/前端/index.html","6239b0ac554f3ff594193ef9ac0b00a6"],["/categories/博客操作/index.html","8fa2b0470e9abf4772d5b5c10d860102"],["/categories/恋爱/index.html","a6fa5bf51c7019452c08ca4d4a0ada7c"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","0d6c8d30cfa8c169d5f85ae331c118cb"],["/img/1.png","b33f2e0d03bd2f6322f82be720580b53"],["/img/2.png","21abeafe665ccf2a711a285d20899263"],["/img/3.png","c4ba8c83b1ac07260477339ce904fdba"],["/img/4.png","923e227ca801c6d93ca6efed9e4faf5b"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/favicon.png","16d73d7e7dd32e10b224c791ea8ae855"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mongoDB.png","3387409f5b2833d3a15fa16479e6b6d9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/qixi.png","a8c7f6e3bd2fdbdc02a4d4a68ea7d838"],["/img/主页.png","ed67badffd47f96f3263a0fd37a644d6"],["/index.html","d6882b6bcbedbd98eeee63c8cec6922a"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","74a8184d783389c92c5fd74e17d93d3f"],["/music/index.html","ad903d7e6afd6d1812813a387869638c"],["/posts/seourl.html","98f7a116a75dd37cadd2f8300a4b7682"],["/sw-register.js","91ee0492eb627c2c8502f9bb49eb7b12"],["/tags/CSS/index.html","8aad4930d6abe4c16513afe9a6165a16"],["/tags/Fluid/index.html","143cb01c094b4b6b4585bb110f048a0e"],["/tags/HTML/index.html","34bcff31ed384515af79f142952d0252"],["/tags/JavaScript/index.html","1e131f589feff35445ed45ce127eced6"],["/tags/hexo/index.html","ebaceec690b102a73199a14e48b34428"],["/tags/index.html","aed4b29b95f92ce48d4cbd4055b38412"],["/tags/博客/index.html","1d428b140c7659f62f609ed6275b2a46"]];
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
