import express from 'express'
import { verifieToken } from '../middlewares/auth.js';

import { signup, allPlayers, onePlayer, deletePlayer, putPlayer, sign} from '../controllers/player.controller.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/sign', sign)
router.get('/all', allPlayers)
router.get('/findById/:id', onePlayer)
router.delete('/delete/:id', verifieToken, deletePlayer)
router.put('/update/:id', verifieToken, putPlayer)

export default router;