const schedule = require('node-schedule')
const moment = require('moment')
const mongoose = require('../mongoose')
exports.scheduleCronstyle = ()=>{
    schedule.scheduleJob('3 * * * * *',()=>{
        console.log('scheduleCronstyle:'+new Date())
        console.log(mongoose)
    });
}

