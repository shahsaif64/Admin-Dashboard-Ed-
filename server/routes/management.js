import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("manage world!");
})

export default router;