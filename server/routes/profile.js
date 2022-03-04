const express = require ('express')
const router = express.Router();

const { getProfiles, newProfile,getSingleProfile,updateProfile } = require ("../controllers/profileController")

const {isAuthenticatedUser} = require('../middlewares/auth')

router.route ('/profiles').get(isAuthenticatedUser,getProfiles);
router.route ('/profile/:id').get(getSingleProfile);
router.route ('/admin/profile/new').post(newProfile);
router.route ('/admin/profile/:id').put(updateProfile);


module.exports =router;

