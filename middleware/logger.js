const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, label, prettyPrint } = format;

exports.loggerSetup = (msg) => {
    var transport = new (transports.DailyRotateFile)({
        filename: 'user%DATE%.log',
        dir: 'log',
        // zippedArchived: true,
        datePattern: 'YYYY-DD-MM',
        maxSize: '20m',
        maxFiles: '5d'
    });
    var logger = createLogger({
        format: combine(
            timestamp(),
            prettyPrint(),
        ),
        transports: [
            transport
        ]
    });
    console.log('here to log info');
    logger.info({ level: 'info', message: '%s', msg });
    logger.end();
};