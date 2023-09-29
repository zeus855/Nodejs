import express from 'express';

const router = express.Router()



router.get('/all', (req, res)=>{
    res.status(200).json({
        response: 'L\'élement a été recupéré.'
    })
})










export default router;