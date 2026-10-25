const facts = [
  "Kè yon moun bat plizyè dizèn milye fwa chak jou.",
  "Limyè solèy la pran anviwon 8 minit ak 20 segonn pou rive sou Latè.",
  "Pyèv gen twa kè.",
  "Myèl kominike kote manje ye atravè mouvman yo rele dans.",
  "Dlo ka egziste kòm glas, likid, ak vapè."
];
module.exports = async (sock, m) => {
  await sock.sendMessage(m.key.remoteJid, { text: `🧠 *Ti enfòmasyon*\n${facts[Math.floor(Math.random() * facts.length)]}` }, { quoted: m });
};
