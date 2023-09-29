import express from 'express';

const router = express.Router()

router.get('/all', (req, res ) => {
    res.status(200).json({
        response : ''
    })
})











export default router; 