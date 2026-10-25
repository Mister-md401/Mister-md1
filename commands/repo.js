module.exports = async (sock, m, args) => {
    const repoText = `╭━━━〔 🤖 *MISTER-MD REPOSITORY* 〕━━━⬣
┃ 🤖 *Bot Name:* MISTER-MD
┃ 👑 *Owner:* MISTER-md
┃ 📦 *GitHub:* https://github.com/MISTER-md/MISTER-MD
╰━━━━━━━━━━━━━━━━━━━━⬣`;

    const channelInfo = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363413121615710@newsletter',
                newsletterName: 'MISTER-MD',
                serverMessageId: -1
            }
        }
    };

    await sock.sendMessage(m.key.remoteJid, {
        image: { url: "https://files.catbox.moe/jk9nuf.png" },
        caption: repoText,
        ...channelInfo
    }, { quoted: m });
};

// MISTER-MD repository: https://github.com/Mister-md401/MISTER-MD.git
