exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `⚡ *DONASI KUYY ${BotName}* ⚡
  
Hi, *${id.split("@s.whatsapp.net")[0]}* Hay👋
DONASI KUYY? 🐔

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

🆘 Mau Bot Tetap Di Bot Kamu Gampang Kok Tinggal Pilih Jalur Donasi Apa Yang Kamu Mau Pakai, Kalo Sudah Kirim ScreenShot Ke Instagram Admin🆘:
   
🐔 *#PULSA*: 081329896085
🐧 *#INSTAGRAM*: @serenyemnyem

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⛔ INFORMASI COVID-19 TERBARU! ⛔

☣️ POSITIF: *${corohelp.confirmed.value}*
🔝 SEMBUH: *${corohelp.recovered.value}*
☢️ MENINGGAL: *${corohelp.deaths.value}*
☣️ UPDATE: *${corohelp.lastUpdate}*

☣️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

📺 MAU PROMOSI DI *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
➥Gunakan dengan bijak ‼️
➥ Bot ini berjalan ${kapanbotaktif} ‼️

㋡Group Ngobrol [1] : ${grupch1}

㋡Chill Group [2] : ${grupch2}

  
⚡ *POWERED BY ${BotName}* ②⓪②⓪ ⚡`
}
