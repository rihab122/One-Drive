const express = require('express');
const router = express.Router();
const { addNewReading, fetchReadings, fetchReadingHistory, computeMonthlyStats } = require('./middleware/readingsMiddleware');

router.post('/', addNewReading, (req, res) => {
    if (req.success) {
        res.status(201).json({ message: "מדידה נוספה בהצלחה", readingId: req.insertId });
    } else {
        res.status(500).json({ message: "שגיאה בהוספת מדידה" });
    }
});

router.get('/all', fetchReadingHistory, (req, res) => {
    if (req.success) {
        res.status(200).json({ readings: req.readings });
    } else {
        res.status(500).json({ message: "שגיאה בשליפת היסטוריה" });
    }
});

router.get('/monthly/:year/:month', computeMonthlyStats, (req, res) => {
    if (req.success) {
        res.status(200).json({ summary: req.summary });
    } else {
        res.status(500).json({ message: "שגיאה בשליפת סיכום חודשי" });
    }
});

router.get('/log/:person_id', fetchReadings, (req, res) => {
    if (req.success) {
        res.status(200).json({ readings: req.readings });
    } else {
        res.status(500).json({ message: "שגיאה בשליפת מדידות" });
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { addNewReading } = require('./middleware/readingsMiddleware');

router.post('/', addNewReading, (req, res) => {
    if (req.success) {
        res.status(201).json({ message: "מדידה נוספה בהצלחה", readingId: req.insertId });
    } else {
        res.status(500).json({ message: "שגיאה בהוספת מדידה" });
    }
});

module.exports = router;

