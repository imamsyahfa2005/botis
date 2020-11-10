exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🐊 *MENU ${BotName}*🐊
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
🐔 *AUTHOR*: IMAM SYAHFA. 
🐔 *DESIGNER*: IMAM SYAHFA. 
🐔 *INSTAGRAM*: @serenyemnyem
🐔 *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻ INFO LAIN! :

*BOT AKAN TERUS BERJALAN JIKA ADMIN MEMILIK PAKET INTERNET, JADI SILAH KAN KETIK #DONASI*

♻️ DONASI NYA YAH KAK JANGAN LUPA
♻️ DONASI KUY? SILAHKAN KETIK #donasi

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⛔ INFORMASI COVID-19 TERBARU! ⛔

☢️ POSITIF: *${corohelp.confirmed.value}*
🔝 SEMBUH: *${corohelp.recovered.value}*
☣️ MENINGGAL: *${corohelp.deaths.value}*
🔝 UPDATE: *${corohelp.lastUpdate}*

⛔ _JANGAN KERAS KEPALA, IKUTI PROTOKOL KESEHATAN YAH!_

📺 Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
🐔 Gunakan dengan bijak ‼️
🐔 Bot ini berjalan ${kapanbotaktif} ‼️

♨️GROUP NGOBROL [1] : ${grupch1}

♨️CHILL GROUP [2] : ${grupch2}

  
②⓪②⓪ *COPYRIGHT BY ${BotName}* ②⓪②⓪ `
}
