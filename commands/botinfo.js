const settings = require("../settings");
module.exports = async (sock, m) => {
  const text = `╭━━〔 🤖 MISTER-MD INFO 〕━━╮
┃ Name: ${settings.botName}
┃ Owner: ${settings.ownerName}
┃ Version: ${settings.version}
┃ Prefix: ${settings.prefix}
┃ Commands: 54
╰━━━━━━━━━━━━━━━━━━━━╯`;
  await sock.sendMessage(m.key.remoteJid, { text }, { quoted: m });
};
