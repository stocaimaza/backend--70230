const express = require("express"); 
const router = express.Router(); 

//Punto 2: realtimeproducts

router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts"); 
})




module.exports = router; 