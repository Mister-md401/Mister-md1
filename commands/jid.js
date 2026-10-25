module.exports = async (sock, m) => {
  const jid = m.key.remoteJid;
  const target = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || jid;
  await sock.sendMessage(jid, { text: `🆔 *JID INFO*\nChat: ${jid}\nTarget: ${target}` }, { quoted: m });
};
