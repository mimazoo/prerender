#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
   #pageDoneCheckInterval: 500,
   #pageLoadTimeout: 20000,
   waitAfterLastRequest: 5000
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.use(require('prerender-redis-cache'));

server.start();
