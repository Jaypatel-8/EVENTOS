const express = require ('express')
const router = express.Router();

const { newBooking } = require('../controllers/bookingController')


router.route('/booking').post(newBooking)

module.exports =router;