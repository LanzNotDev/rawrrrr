exports.konek = async ({ Putzz, update, startingBot, DisconnectReason, Boom, exec}) => {
const { connection, lastDisconnect, receivedPendingNotifications } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.connectionLost) {
console.log('Connection to Server Lost, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startingBot()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection Timed Out, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.badSession) {
console.log('Delete Session and Scan again...');
startingBot()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Close current Session first...');
startingBot()
} else if (reason === DisconnectReason.loggedOut) {
console.log('Scan again and Run...');
exec('rm -rf ./library/Putzsession/*')
process.exit(1)
} else if (reason === DisconnectReason.Multidevicemismatch) {
console.log('Scan again...');
exec('rm -rf ./library/Putzsession/*')
process.exit(0)
} else {		
Putzz.end(`Unknown DisconnectReason : ${reason}|${connection}`)
}}
else if (connection == 'open') {
        Putzz.newsletterFollow("120363421440393775@newsletter")
        Putzz.newsletterFollow("120363402368986048@newsletter")
        Putzz.newsletterFollow("120363404782325678@newsletter")
        Putzz.newsletterFollow("120363421047876942@newsletter") 
        console.log('berhasil tersambung')
        }
}