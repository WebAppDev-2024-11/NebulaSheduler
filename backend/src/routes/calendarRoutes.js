const express = require('express');
const {
    getCalendareEvents,
    getKanbanEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/calendarController'); // Проверьте, что путь и названия функций совпадают

const authenticateToken = require('../middlewares/authMiddlewares');

const router = express.Router();

// Маршрут для получения событий календаря
router.get('/calendar', authenticateToken, getCalendareEvents);

// Маршрут для получения задач канбан-доски
router.get('/kanban', authenticateToken, getKanbanEvents);

// Маршрут для создания события/задачи
router.post('/', authenticateToken, createEvent);

// Маршрут для обновления события/задачи
router.put('/:id', authenticateToken, updateEvent);

// Маршрут для удаления события/задачи
router.delete('/:id', authenticateToken, deleteEvent);

module.exports = router;