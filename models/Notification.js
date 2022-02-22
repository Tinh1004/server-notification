const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        state: {
            type: Boolean,
            default: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Notification', notificationSchema);