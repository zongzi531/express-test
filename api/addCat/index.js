const db = require('../../mongo')
const CatSchema = require('../../schema/cat')
const checkParams = require('../../utils/checkParams')
const resTemplate = require('../../utils/resTemplate')
const { statusCodeSuccess, messageSuccess } = require('../../utils/resConst')

const path = '/addcat'

const callback = function (req, res, next) {
  const { name, sex } = req.body
  checkParams(req, res, next, [name, sex])
  .then(() => {
    const Cat = db.model('test', CatSchema, 'Cat')

    const kitty = new Cat({
      name,
      sex
    })

    kitty.save((dbErr, dbRes) => {
      if (dbErr) return console.log(dbErr)
      resTemplate(res, statusCodeSuccess, messageSuccess, dbRes._doc)
      .then(() => next())
      .catch(e => next())
    })

  })
  .catch(e => next())
}

module.exports.path = path
module.exports.callback = callback
