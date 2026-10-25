module.exports = async (sock, m) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  await sock.sendMessage(m.key.remoteJid, { text: `🎲 Ou lanse zo a: ${faces[roll - 1]} (*${roll}*)` }, { quoted: m });
};
