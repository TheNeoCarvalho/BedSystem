import Vue from 'vue'

// export const userKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20uYnIiLCJhZG1pbiI6MCwiaWF0IjoxNTg2NDcxMzA3LCJleHAiOjE1ODY3MzA1MDd9.yQvlrKdEZhOtvEj7XJWLJS_F5goB5u-UjzTx3Jcc4YY'
export const userKey = 'UjzTx3Jcc4YY'
export const baseApiUrl = 'http://localhost:21200'

export function showError(e) {
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg : e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg : e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }