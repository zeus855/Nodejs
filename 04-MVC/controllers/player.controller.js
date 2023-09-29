import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { env } from '../config/index.js';

// MODEL
import Model from '../models/Player.js';

export const signup = async (req, res, next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        

        //..requete mongo
        await Model.create({ 
            ...req.body,
            password: hashedPassword
             
        });

        res.status(201).json('Player has been created! ');
    }catch(error){
        next(error);
    }
};

export const sign = async (req, res) => {
    try{
        //Recherche le joueur dans la base de donnée par son email
        const player = await Model.findOne({ email: req.body.email })
        // si le joueur n'est pas trouvé, renvoie une erreur 404.
        if(!player) return res.status(404).json('Email not found! ');

        // Compare le mot de passe fourni dans la requete avec le mot de passe du joueur (qui est dans la bdd)
        const comparePassword = await bcrypt.compare(
            req.body.password,
            player.password
        )
        if(!comparePassword)return res.status(400).json('Wrong Credentials! ') // si le mot de passe est incorrect, renvoie une erreur 400.

        // creer un jeton JWT pour le joueur avec son ID, expire après 24 heures

        const token = jwt.sign({ id: player._id}, env.token, { expiresIn:'24h'})
        // supprime le mot de passe du joueur
        const { password, ...others} = player._doc
        
        // envoie le jeton (token) JWT sous forme de cookie HTTPOnly
        res.cookie('access_token', token,{ httpOnly: true }).status(200).json(others)
        // .json renvoi les donnees du joueur en reponse (à l'exception du password)

    }catch(error){
        next(error)
    }
};


export const allPlayers = async (req, res, next) =>{
    try{
        const players = await Model.find()
        res.status(200).json(players)

    }catch(error){

    }
};
export const onePlayer = async (req, res, next) => {
    try{
        const {id} = req.params

        const players = await Model.findById(id);
        
        res.status(200).json(players);
    }catch (error) {
        next (error);
    }
};

export const deletePlayer = async (req, res, next) => {
    try{
        const {id} = req.params
        const player = await Model.findById(id)
        if (!player) return res.status(404).json('Player not found. ')
        
        await Model.findByIdAndRemove(id)    
        res.status(200).json('The hero has been deleted. ')
    }catch(error){
        next(error);
    }
};

export const putPlayer = async (req, res, next) => {
    try{
        const player = await Model.findById(req.params.id);
        if (!player) return res.status(404).json('Player not found. ');

       const updatePlayer = await Model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true}
       )

       res.status(200).json({
        message: 'Player updated.',
        updatePlayer
       }) 
       
    }catch(error){
        next(error)
    }
}