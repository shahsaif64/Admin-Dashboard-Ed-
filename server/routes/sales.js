import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("sales world!");
})

export default router;