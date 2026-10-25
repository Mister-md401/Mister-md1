const quotes = [
  "Ti pa chak jou ka mennen w lwen.",
  "Konfyans grandi lè ou respekte pwòp pwomès ou.",
  "Pa konpare chapit pa w ak chapit yon lòt moun.",
  "Disiplin ede rèv vin tounen plan.",
  "Lapè nan lespri se yon richès tou."
];
module.exports = async (sock, m) => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  await sock.sendMessage(m.key.remoteJid, { text: `💭 *Panse jounen an*\n\n“${q}”` }, { quoted: m });
};
