module.exports = async (sock, m, args) => {
  const text = args.join(" ");
  if (!text) return sock.sendMessage(m.key.remoteJid, { text: "Itilizasyon: .count ekri tèks ou a" }, { quoted: m });
  await sock.sendMessage(m.key.remoteJid, { text: `📊 *Kantite tèks*\nKaraktè: ${Array.from(text).length}\nMo: ${text.trim().split(/\s+/).length}\nLiy: ${text.split(/\n/).length}` }, { quoted: m });
};
