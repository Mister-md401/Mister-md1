module.exports = async (sock, m, args) => {
  const text = args.join(" ");
  if (!text) return sock.sendMessage(m.key.remoteJid, { text: "Itilizasyon: .reverse ekri yon bagay" }, { quoted: m });
  await sock.sendMessage(m.key.remoteJid, { text: `🔁 ${Array.from(text).reverse().join("")}` }, { quoted: m });
};
