var cron = require('node-schedule');
/* run the job at 18:55:30 on Dec. 14 2018*/
cron.scheduleJob('*/1 * * * *', function(){
    console.log('This runs at the 30th mintue of every hour.');
});
