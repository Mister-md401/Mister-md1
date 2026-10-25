module.exports = async (sock, m, args) => {
  const jid = m.key.remoteJid;
  const expr = args.join(" ");
  if (!expr) return sock.sendMessage(jid, { text: "Itilizasyon: .calc 12 * (4 + 2)" }, { quoted: m });
  if (!/^[0-9+\-*/().%\s]+$/.test(expr)) return sock.sendMessage(jid, { text: "❌ Ekspresyon sa a pa valab. Sèvi ak chif ak + - * / % ( )." }, { quoted: m });
  try {
    const result = Function(`"use strict"; return (${expr});`)();
    if (!Number.isFinite(result)) throw new Error("invalid");
    await sock.sendMessage(jid, { text: `🧮 ${expr} = *${result}*` }, { quoted: m });
  } catch {
    await sock.sendMessage(jid, { text: "❌ Mwen pa ka kalkile ekspresyon sa a." }, { quoted: m });
  }
};
