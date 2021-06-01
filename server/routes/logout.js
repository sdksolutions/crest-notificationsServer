import express from 'express'
var router = express.Router();

router.get('/', (req, res, next) => {
    try {
        req.session = null;
        res.send();
        next();
    } catch (err) {
        next(err);
    }
});

export default router;