var koa = require('koa');

const router = require('koa-router')();

var app = new koa();

router.get('/',async (rtx,next)=>{
    rtx.body="miku";
}).get('/news',async(ctx)=>{
    ctx.body="this is a new"
})

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);