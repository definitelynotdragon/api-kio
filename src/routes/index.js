const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "User",
        "idea": "Content",
    }
    res.json(data);
});

module.exports = router;
