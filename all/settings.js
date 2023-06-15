require("./module")

global.owner = "62881036690566"
global.namabot = "KirBotz"
global.autoJoin = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})