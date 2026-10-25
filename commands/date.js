module.exports = async (sock, m) => {
  const now = new Date();
  const date = new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeZone: "America/Port-au-Prince" }).format(now);
  await sock.sendMessage(m.key.remoteJid, { text: `📅 Dat jodi a: *${date}*` }, { quoted: m });
};
