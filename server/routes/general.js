import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("general world!");
})

export default router;