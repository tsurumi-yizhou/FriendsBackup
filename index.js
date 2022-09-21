const { createClient } = require("oicq")
const account = parseInt(process.argv[2], 10)
const client = createClient(account, {
	platform: 5
})
const fs = require("fs")

client.on("system.online", () => {
		client.fl.forEach((key, value, map) => {
			fs.appendFileSync(process.argv[3], key.user_id + ' ' + key.remark + '\n');
		})
		process.exit();
})

client.on("system.login.qrcode", function (e) {
		process.stdin.once("data", () => {
				this.login()
		})
}).login()