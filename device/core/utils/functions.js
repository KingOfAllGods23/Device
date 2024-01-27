badword_detector = require('../functions/profanity_check.js');
int_detect = require('../functions/interaction_detector.js');
cmd_reg = require('../functions/command_reg.js');
msg_log = require('../functions/msg_log.js');

f1 = (client, message) => { badword_detector(client, message)};
f2 = (client, queue) => {int_detect(client, queue)};
f3 = (client) => {cmd_reg(client)};
f4 = (client, type, del_message) => { msg_log(client, type, del_message)};
f5 = (client, type, msg, new_msg) => { msg_log(client, type, msg, new_msg)};
f6 = (client, type, msg, new_msg) => { msg_log(client, type, msg, new_msg)};

f = {
  f1: f1,
  f2: f2,
  f3: f3,
  f4: f4,
  f5: f5,
  f6: f6
} 

module.exports = { f }