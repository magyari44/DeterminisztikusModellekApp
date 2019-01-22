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
  sys: { id: 'optimal-lot-size' },
  fields: {
    title: 'Optimal lot size',
    description: 'Optimal lot size model',
    slug: 'optimal-lot-size'
  }
}

const optimalLotSizeWithRate = {
  sys: { id: 'optimal-lot-size-with-rate' },
  fields: {
    title: 'Optimal lot size with rate',
    description: 'Optimal lot size with rate model',
    slug: 'optimal-lot-size-with-rate'
  }
}

const optimalLotSizeWithDiscount = {
  sys: { id: 'optimal-lot-size-with-discount' },
  fields: {
    title: 'Optimal lot size with discount',
    description: 'Optimal lot size with discount model',
    slug: 'optimal-lot-size-with-discount'
  }
}

const optimalLotSizeWithStorageShortage = {
  sys: { id: 'optimal-lot-size-with-storage-shortage' },
  fields: {
    title: 'Optimal lot size with storage shortage',
    description: 'Optimal lot size with storage shortage model',
    slug: 'optimal-lot-size-with-storage-shortage'
  }
}

const models = [optimalLotSize, optimalLotSizeWithRate, optimalLotSizeWithDiscount, optimalLotSizeWithStorageShortage]

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
  let model = models.find(o => o.sys.id === request.params.slug)

  response.render(model.sys.id, {title: 'asdasd', model})
}
