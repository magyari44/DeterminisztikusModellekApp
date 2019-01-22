/**
 * This module connects rendering modules to routes
 */

const express = require('express')
const router = express.Router()

const { catchErrors } = require('../handlers/errorHandlers')

const { getCourses, getCourse, getLesson, getCoursesByCategory } = require('./courses')
const { getModels, getModel  } = require('./models')
const { getSettings, postSettings } = require('./settings')
const { getLandingPage } = require('./landingPage')

// Display settings in case of invalid credentials
router.all('*', async (request, response, next) => {
  if (response.locals.forceSettingsRoute) {
    await getSettings(request, response, next)
    return
  }
  next()
})

// GET the home landing page
router.get('/', catchErrors(getLandingPage))

// Courses routes
router.get('/courses', catchErrors(getCourses))
router.get('/courses/categories', catchErrors(getCourses))
router.get('/courses/categories/:category', catchErrors(getCoursesByCategory))
router.get('/courses/:slug', catchErrors(getCourse))
router.get('/courses/:slug/lessons', catchErrors(getCourse))
router.get('/courses/:cslug/lessons/:lslug', catchErrors(getLesson))

// Models routes
router.get('/models', catchErrors(getModels))
router.get('/models/:slug', catchErrors(getModel))

module.exports = router
