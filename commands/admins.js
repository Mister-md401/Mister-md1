module.exports = async (sock, m) => {
  const jid = m.key.remoteJid;
  if (!jid.endsWith("@g.us")) return sock.sendMessage(jid, { text: "❌ Kòmand sa a mache nan gwoup sèlman." }, { quoted: m });
  const g = await sock.groupMetadata(jid);
  const admins = g.participants.filter(p => p.admin);
  const mentions = admins.map(p => p.id);
  const list = admins.map((p, i) => `${i + 1}. @${p.id.split("@")[0]}${p.admin === "superadmin" ? " 👑" : " 🛡️"}`).join("\n") || "Pa gen admin jwenn.";
  await sock.sendMessage(jid, { text: `🛡️ *ADMIN GWoup la*\n\n${list}`, mentions }, { quoted: m });
};
