const { Application } = require('mikudos-node-app');

module.exports = class {
    constructor(options = {}, app) {
        this.options = options || {};
        this.app = app;
    }

    async SayHello(ctx) {
        const app = ctx.app;
        ctx.res = { message: 'Hello '.concat(ctx.req.name) };
    }
}
