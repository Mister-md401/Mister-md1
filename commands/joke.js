const jokes = [
  "Poukisa telefòn nan al dòmi bonè? Paske batri li te fatige! 🔋😂",
  "Mwen mande Wi-Fi a pou l rete avè m… li di koneksyon an pa estab. 📶🤣",
  "Poukisa òdinatè a te pote jakèt? Paske li te gen Windows! 🪟😄",
  "Mwen pa parese; mwen nan mòd ekonomize enèji. 😴"
];
module.exports = async (sock, m) => {
  await sock.sendMessage(m.key.remoteJid, { text: `😂 *Ti blag MISTER-MD*\n${jokes[Math.floor(Math.random() * jokes.length)]}` }, { quoted: m });
};
