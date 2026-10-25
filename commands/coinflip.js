module.exports = async (sock, m) => {
  const result = Math.random() < 0.5 ? "🪙 PILE" : "🪙 FAS";
  await sock.sendMessage(m.key.remoteJid, { text: `Rezilta pyès la: *${result}*` }, { quoted: m });
};
