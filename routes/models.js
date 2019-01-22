/*
 * The purpose of this module is to render the category page when the route is requested
 */

const {
  getModels,
  getModel
} = require('./../services/contentful')

const attachEntryState = require('../lib/entry-state')
const enhanceBreadcrumb = require('../lib/enhance-breadcrumb')
const shouldAttachEntryState = require('../lib/should-attach-entry-state')
const { updateCookie } = require('../lib/cookies')
const { translate } = require('../i18n/i18n')

/**
 * Renders courses list when `/courses` route is requested
 *
 * @param request - Object - Express request object
 * @param response - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {undefined}
 */
module.exports.getModels = async (request, response, next) => {
  // Get all the entries of content type course
  let courses = []
  let categories = []

  response.render('models', {
    title: `${translate('allCoursesLabel', response.locals.currentLocale.code)} (${courses.length})`,
    categories,
    courses
  })
}

/**
 * Renders a course when `/courses/:slug` route is requested
 *
 * @param request - Object - Express request object
 * @param response - Object - Express response object
 * @param next - Function - express callback
 *
 * @returns {undefined}
 */
module.exports.getModel = async (request, response, next) => {

  response.render('models', {title: 'asd'})
}
