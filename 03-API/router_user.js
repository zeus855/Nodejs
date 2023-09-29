import express from 'express'

const router = express.Router()




const data = [
    {
      id: 1,
      name: "Izuku",
      email: "Izuku@yahoo.com"
    },
    {
      id: 2,
      name: "Drake",
      email: "Drake@yahoo.com",
    },
    {
      id: 3,
      name: "Marion",
      email: "Marion@yahoo.com",
    },
  ];
  
  //...

  router.get('/all', (req, res)=>{
    res.status(200).json(data)

  })

router.post('/add', (req, res) => {
    data.push({
        id: 4,
        name: 'Yacoub',
        email : 'yacoub@gmail.com'
    })
    res.status(201).json(data)
})

router.put('/update/:id', (req, res) => {
     const { id } = req.params
     const { name } = req.body
            
      // on verifie si l'id existe
      const checkParams = data.some(user => user.id == id)
      try{
        // USE IF TO CHECK ID
        if(checkParams)
        {
            // USE FILTER
            const result = data.filter((user) => {
                if(user.id == id) user.name = name;                
                return user
            });
            res.status(200).json({
                message : 'The user has been updated',
                data : result
            })


        }
        
        if(!checkParams) res.status(404).json({ message: 'User not found !'})
      }catch(error){
       next(error) 

      }

    

      res.status(200).json(name)

})

router.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    const checkParams = data.some(user => user.id == id)
    try{
        if(checkParams)
        {
            const result = [...data].filter(user => user.id != id)
            res.status(200).json({
                message : 'The user has been deleted',
                data : result
            })              
            

        }
        if(!checkParams) res.status(404).json({ message: 'User not found !'})

    }catch(error){
        next(error)
    }
})


  
  export default router;