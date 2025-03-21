import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
let sentMessages = {};
export function send(bot, message, groupID) {
    const key = `${groupID}:${message}`;
    if (sentMessages[key]) {
        // console.log("This message has already been sent to this group in the past 30 seconds.");
        return;
    }
    if (!message)
        return;
    if (message.includes('undefined') || message.includes('NaN')) {
        console.log('Error: Invalid message content:', message);
        return;
    }
    bot.sendMessage(groupID, message, { parse_mode: 'HTML', disable_web_page_preview: 'true' });
    if (!message.startsWith('last seen')) {
        // Track the message as sent
        sentMessages[key] = true;
        // Delete the message from tracking after 30 seconds
        setTimeout(() => {
            delete sentMessages[key];
        }, 30000); // 30000 ms = 30 seconds
    }
}
export async function telegramBotMain(env, eventEmitter) {
    eventEmitter.on('newMessage', (message) => {
        if (groupID) {
            send(bot, message, parseInt(groupID));
        }
    });
    let telegramGroupToken;
    let groupID;
    if (env == 'prod') {
        telegramGroupToken = process.env.TELEGRAM_RESUPPLY_PROD_KEY;
        groupID = process.env.TELEGRAM_PROD_GROUP_ID;
    }
    if (env == 'test') {
        telegramGroupToken = process.env.TELEGRAM_RESUPPLY_TEST_KEY;
        groupID = process.env.TELEGRAM_TEST_GROUP_ID;
    }
    const bot = new TelegramBot(telegramGroupToken, { polling: true });
    bot.on('message', async (msg) => {
        if (msg && msg.text && msg.text.toLowerCase() === 'bot u with us') {
            await new Promise((resolve) => setTimeout(resolve, 950));
            bot.sendMessage(msg.chat.id, 'with you');
        }
    });
}
//# sourceMappingURL=TelegramBot.js.map