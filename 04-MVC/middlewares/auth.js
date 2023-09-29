import jwt from 'jsonwebtoken'
import { env } from '../config/index.js'
import { createError } from './error.js'

export const verifieToken = (req, res, next) => {
    // recupere le jeton (token) JWT à partir des cookies de la requete
    const token = req.cookies.access_token;
    console.log(token)
    // verifie si le jeton n'est pas present
    if(!token) return next(createError(401, 'Access Denied'))
    

    // verifier la validité du jeton en utilisant jwt.verify
    jwt.verify(token, env.token, (err, player) => {

        // si une erreur se produit lors de la verification du jeton
        if(err){
            // Renvoie une erreur 403 (interdit) car le jeton (token) n'est pas valide
            return next(createError(403, 'Token non valide!'))
        }

        // si la verification reussit, ajoute les informations du joueur dans l'objet req })
        req.player = player

        next();
 })
}