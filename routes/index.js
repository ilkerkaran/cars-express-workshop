import { Router } from "express";
var router = Router();

//default route definition
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// split up route handling
router.use("/car",require('./car'));


module.exports = router;