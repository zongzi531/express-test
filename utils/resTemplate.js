function resTemplate (res, statusCode, message, params) {
  return new Promise((reslove, reject) => {
    try {
      const json = {
        statusCode,
        message
      }
      if (params) {
        for (let [key, value] of Object.entries(params)) {
          json[key] = value
        }
      }
      res.json(json)
      reslove()
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = resTemplate