const {check} = require('express-validator')
const handleValidationErrors = require('./handleValidationErrors')

const validateTweetInput = [
    check('text')
    .exists({checkFalsy: true})
    .isLength({max: 144})
    .withMessage('Tweet must be less that 144 characters'),
    handleValidationErrors
]

module.exports = validateTweetInput