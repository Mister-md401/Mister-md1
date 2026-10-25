module.exports = async (sock, m) => {
  const jid = m.key.remoteJid;
  if (!jid.endsWith("@g.us")) return sock.sendMessage(jid, { text: "❌ Kòmand sa a mache nan gwoup sèlman." }, { quoted: m });
  const g = await sock.groupMetadata(jid);
  const admins = g.participants.filter(p => p.admin).length;
  await sock.sendMessage(jid, { text: `╭━━〔 GROUP INFO 〕━━╮\n┃ Non: ${g.subject}\n┃ Manm: ${g.participants.length}\n┃ Admin: ${admins}\n┃ ID: ${jid}\n╰━━━━━━━━━━━━━━━━━━╯` }, { quoted: m });
};
