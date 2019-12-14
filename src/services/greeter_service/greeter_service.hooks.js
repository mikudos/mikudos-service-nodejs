module.exports = {
    before: {
        all: [
            async function (ctx, next) {
                // TransactionManager.beginTransaction(hook, skipPath)
                await next();
            }
        ]
    },
    after: {
        all: [
            async function (ctx, next) {
                // TransactionManager.commitTransaction
                await next();
            }
        ]
    }
};
