const token="xoxb-762680223989-1775907225299-PKJ5EnU9z1HtTFKVpHf49eXb"
var Slack = require('slack')
const bot = new Slack({token})

// logs {args:{hyper:'card'}}
bot.api.test({hyper:'card'}).then(console.log)
