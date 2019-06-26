const express = require('express')
const router = express.Router()


router.get('/:id', function(req, res, next) {
    const id = req.params.id
    console.log(id)
    
    res.send("Hola, me dicen que quieres acceso al marker con la id de " + id)
})



module.exports = router
