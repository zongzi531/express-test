const resTemplate = require('./resTemplate')
const { statusCodeError, messageMissingParams } = require('./resConst')

function checkParams (params = {}) {
  return new Promise ((resolve, reject) => {
    for (let [key, value] of Object.entries(params)) {
      if (!value) {
        reject(resTemplate(statusCodeError, `${messageMissingParams} [${key}] is undefined.`))
      }
    }
    resolve()
  })
}

module.exports = checkParams
