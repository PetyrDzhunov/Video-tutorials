const router = require(express).Router();

router.get('/', (req, res) => {
    res.send("In Authentication controller");
});
module.exports = router;