module.exports = async (sock, m) => {
  const jid = m.key.remoteJid;
  const target = m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] ||
    m.message?.extendedTextMessage?.contextInfo?.participant || jid;
  try {
    const url = await sock.profilePictureUrl(target, "image");
    await sock.sendMessage(jid, { image: { url }, caption: `🖼️ Foto pwofil: @${target.split("@")[0]}`, mentions: [target] }, { quoted: m });
  } catch {
    await sock.sendMessage(jid, { text: "❌ Mwen pa ka jwenn foto pwofil sa a; li ka prive oswa li pa disponib." }, { quoted: m });
  }
};
