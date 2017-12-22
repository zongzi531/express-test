const resTemplate = require('./resTemplate')
const { statusCodeError, messageMissingParams } = require('./resConst')

function checkParams (req, res, next, params) {
  return new Promise ((resolve, reject) => {
    for (let i of params) {
      if (!i) {
        resTemplate(res, statusCodeError, messageMissingParams)
        reject()
      }
      resolve()
    }
  })
}

module.exports = checkParams
