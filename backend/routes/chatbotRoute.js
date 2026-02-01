import express from 'express';
import { Message } from '../Controllers/Chatbot.message.js';

const router = express.Router();
router.post('/message',Message)

export default router;



