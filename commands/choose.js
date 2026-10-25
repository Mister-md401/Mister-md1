module.exports = async (sock, m, args) => {
  const jid = m.key.remoteJid;
  const raw = args.join(" ");
  const options = raw.split("|").map(x => x.trim()).filter(Boolean);
  if (options.length < 2) return sock.sendMessage(jid, { text: "Itilizasyon: .choose diri | espageti | mayi" }, { quoted: m });
  const choice = options[Math.floor(Math.random() * options.length)];
  await sock.sendMessage(jid, { text: `🎯 Mwen chwazi: *${choice}*` }, { quoted: m });
};
