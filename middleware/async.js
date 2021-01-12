// generic wrapper function for all routes
module.exports = function (expressHandler) {
    return async (req, res, next) => {
        try {
            await expressHandler(req, res);
        } catch (e) {
            next(e);
        }
    }
};