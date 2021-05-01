export const loginHandler = (function () {
    let auth = ''
    return function (value) {
        if (value) {
            auth = value
        } else {
            return auth
        }
    }
})()