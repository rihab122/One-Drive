const express = require('express');
const router = express.Router();
const IndividualsMiddleware = require('./middleware/individualsMiddleware');
router.post('/', [IndividualsMiddleware.addPerson], (req, res) => {
    if (req.success) {
        res.status(201).json({ msg: "ok", userId: req.insertId });
    } else {
        res.status(500).json({ message: "שגיאה בהוספת משתמש" });
    }
});

router.get('/', [IndividualsMiddleware.listPeople], (req, res) => {
    if (req.success) {
        res.status(200).json({ msg: "ok", data: req.people });
    } else {
        res.status(500).json({ message: "שגיאה בשליפת משתמשים" });
    }
});

module.exports = router;
