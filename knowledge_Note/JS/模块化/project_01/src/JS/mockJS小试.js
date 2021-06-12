const Mock = require('mockjs')
const data = Mock.mock('@id')

let obj = Mock.mock({
    id: '@id()',
    username: '@cname()'
})
console.log(data)
console.log(obj)