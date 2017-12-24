function resTemplate (statusCode, message, params) {
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
    return json
  } catch (e) {
    return e
  }
}

module.exports = resTemplate