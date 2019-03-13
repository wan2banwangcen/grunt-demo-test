#!/user/bin/nodei

const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();

  var addr = url.parse(req.url).query;
  var rect = qs.parse(addr);
  var result ={
    area:Number(rect.width)*Number(rect.height),
    perimeter:2*(Number(rect.width)+Number(rect.height))
  }
  log(rect.width,rect.height);
  res.end(JSON.stringify(result));
}).listen(8080);
