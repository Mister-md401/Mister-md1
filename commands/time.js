module.exports = async (sock, m) => {
  const now = new Intl.DateTimeFormat("fr-FR", { timeStyle: "medium", dateStyle: "short", timeZone: "America/Port-au-Prince" }).format(new Date());
  await sock.sendMessage(m.key.remoteJid, { text: `🕒 Lè Ayiti: *${now}*` }, { quoted: m });
};
