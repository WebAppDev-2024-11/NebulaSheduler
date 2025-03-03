const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const CalendarEvent = sequelize.define('CalendarEvent', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    priority: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'todo', // По умолчанию задача в статусе "todo"
    },
});

module.exports = CalendarEvent;
