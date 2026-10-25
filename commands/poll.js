module.exports = async (sock, m, args) => {
  const jid = m.key.remoteJid;
  const raw = args.join(" ");
  const pieces = raw.split("|").map(x => x.trim()).filter(Boolean);
  if (pieces.length < 3) return sock.sendMessage(jid, { text: "Itilizasyon: .poll Kesyon an? | Opsyon 1 | Opsyon 2" }, { quoted: m });
  const question = pieces.shift();
  const options = pieces.slice(0, 12);
  await sock.sendMessage(jid, { poll: { name: question, values: options, selectableCount: 1 } }, { quoted: m });
};
