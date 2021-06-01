import express from 'express'
var router = express.Router();
import invitations from '../../public/invitations.json';
import invitations_update from '../../public/invitations_update.json';


router.get('/', (req, res, next) => {
    console.log(req.session);
    const invites = invitations.invites;
    res.send(invites);
    next();
});

/* GET invites by listing. */
router.get('/:userId', (req, res, next) => {
    // console.log(req);
    const invites = invitations.invites.filter((invite) => invite.user_id == req.params.userId);
    res.send(invites);
    next();
});


router.get('/latest/:userId', (req, res, next) => {
    // console.log(req);
    const invites = invitations_update.invites.filter((invite) => invite.user_id == req.params.userId);
    res.send(invites);
    next();
});

export default router;