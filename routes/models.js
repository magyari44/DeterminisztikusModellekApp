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
const optimalLotSize = {
  sys: { id: 'modelId' },
  fields: {
    title: 'Optimal lot size',
    description: 'Optimal lot size model'
  }
}

const optimalLotSizeWithRate = {
  sys: { id: 'modelId' },
  fields: {
    title: 'Optimal lot size with rate',
    description: 'Optimal lot size with rate model'
  }
}

const optimalLotSizeWithDiscount = {
  sys: { id: 'modelId' },
  fields: {
    title: 'Optimal lot size with discount',
    description: 'Optimal lot size with discount model'
  }
}

const optimalLotSizeWithStorageShortage = {
  sys: { id: 'modelId' },
  fields: {
    title: 'Optimal lot size with storage shortage',
    description: 'Optimal lot size with storage shortage model'
  }
}

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
  let models = [optimalLotSize, optimalLotSizeWithRate, optimalLotSizeWithDiscount, optimalLotSizeWithStorageShortage]

  response.render('models', {
    title: `${translate('allModelsLabel', response.locals.currentLocale.code)} (${models.length})`,
    models
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
