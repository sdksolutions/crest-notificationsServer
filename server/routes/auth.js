import express from 'express'
import users from '../../public/users.json'
var router = express.Router();


router.post('/', (req, res, next) => {
    try {
        const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
        console.log(user);
        if (!user) {
            res.status(401).send({
                error: 'invalid email/password'
            });
            next();
        } else {
            req.session = {
                id: user.userId,
                timestamp: Date.now()
            }
            res.session = {
                id: user.userId,
                timestamp: Date.now()
            }
            res.status(200).send({
                userId:user.userId,
                message: 'Login Successful'
            });
            next();
        }
    } catch (err) {
        next(err);
    }
});

export default router;