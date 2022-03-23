const express = require ('express')
const router = express.Router();
const cloudinary = require('../utils/cloudinary')
const upload = require ("../utils/multer")


const { getProfiles, newProfile,getSingleProfile,updateProfile} = require ("../controllers/profileController")

const {isAuthenticatedUser} = require('../middlewares/auth')

// router.use(express.json({limit:'50mb'}))
// router.use(express.urlencoded({limit:'50mb',extentded:true}))


 router.post("/profileUpload",upload.single("image"),async (req,res) => {

//     // cloudinary.config({
//     //     cloud_name: 'dsw5rd61y', 
//     //    api_key: '277396182583125',
//     //    api_secret: 'op2AELSOSAbcejCk6Uwd7bU3-Ks'

//     // })

    try{
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset:'Eventos_uploader'
        })
        console.log(uploadedResponse);
        res.json({msg:"YAYAYA"})
        
        // const result = await cloudinary.uploader.upload(req.file.path);
        // res.json(result);

    }catch(err){
        console.log(err);
        res.status(500).json({err : "Something went wrong"})
    }
})


router.route ('/profiles').get(isAuthenticatedUser,getProfiles);
router.route ('/profile/:id').get(getSingleProfile);
router.route ('/admin/profile/new').post(newProfile);
router.route ('/admin/profile/:id').put(updateProfile);



module.exports =router;

