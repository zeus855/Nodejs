import express from 'express'

const router = express.Router()


const data = [
    {
    "name": "Air Force 1 '07",
    "category": "f",
    "brand": "Nike",
    "price": 129.99,
    "content": "On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
    "stock": 10,
    "online": true,
    "size": ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
    "avis": {
      "stars": 4,
      "nb": 11
    }
  },
  {
    "name": "Nike Air Max 90 Futura",
    "category": "f",
    "brand": "Nike",
    "price": 169.99,
    "content": "Chaussure pour femme",
    "stock": 7,
    "online": true,
    "avis": {
      "stars": 4,
      "nb": 267 
    },
    "size": ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
   }
  ]

  router.get('/all', (req, res) => {
    res.status(200).json(data)
  })

  router.post('/add', (req, res ) => {
    data.push({
      name : "Air Force 1 '07",
    category : "f",
    brand : "Nike",
    price : 129.99,
    content : "On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
    stock : 10,
    online : true,
    size : ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
    avis : {
    stars : 4,
    nb : 11
    }
  })

    res.status(201).json(data)
  })


  export default router;