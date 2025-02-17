const express = require('express');
const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/calendarController'); // Проверьте, что путь и названия функций совпадают

const authenticateToken = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/', authenticateToken, getEvents); // Проверить, что `getEvents` определена
router.post('/', authenticateToken, createEvent);
router.put('/:id', authenticateToken, updateEvent);
router.delete('/:id', authenticateToken, deleteEvent);

module.exports = router;
