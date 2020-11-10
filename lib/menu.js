exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🐔 *MENU ${BotName}* 🐔
  
Hi, *${id.split("@s.whatsapp.net")[0]}* HAY 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

⏳*${tampilTanggal}*
⏳ *${tampilWaktu}*

❤️ Command / Perintah :

😁FUN😁

➥1.Membuat Foto Menjadi Sticker
_${BotName} akan mengirimkan stickermu dengan caption #sticker!_
Perintah: #sticker
Contoh: kirim gambar dengan caption #sticker   

➥2.Pantun
_${BotName} akan mengirimkan pantun secara random!_
Perintah: #pantun
Contoh: #pantun

➥3.Kata-Kata Bijak
_${BotName} akan mengirimkan katabijak secara random!_
Perintah: #quotes
Contoh: #quotes

➥4.Mengirim Foto Anime
_${BotName} akan mengirimkan gambar anime secara random!_
Perintah: #randomanime
Contoh: #randomanime

➥5.SAY
_${BotName} akan mengirimkan kata kata sesuai yang kamu kirim!_
Perintah: #say [kata]
Contoh: #say HALLO IMAM KAMU GANTENG

➥6.Rahim Anget
_${BotName} akan mengirimkan gambar cogan/cecan sesuai yang kamu kirim!_
Perintah: #ptl [cewek/cowok]
Contoh: #ptl cewek

📥DOWNLOADER MENU📥

➥1.Donwload Youtube Video
_${BotName} akan mengirimkan video downloader dari yt sesuai perintah kamu!_
Perintah: #yt [link]
Contoh: #yt https://youtu.be/imamsyahfa

➥2.Download Youtube Audio
_${BotName} akan mengirimkan lagu sesuai perintah yang kamu kirim!_
Perintah: #ytmp3 [link]
Contoh: #ytmp3 https://youtu.be/OrangKonyol

➥3.Instagram Downloader
_${BotName} akan mengirimkan video/foto ig sesuai perintah yang kamu kirim!_
Perintah: #ig [link]
Contoh: #ig https://instagram.com/serenyemnyem

➥4.Facebook Downloader
_${BotName} akan mengirimkan video/foto fb (tidak bisa export video dari group)!_
Perintah: #fb [link]
Contoh: #fb https://facebook.com/kamudanaku

➥5.Twitter Downloader
_${BotName} akan mengirimkan video/foto twitter sesuai perintah yang kamu kirim!_
Perintah: #twt [link]
Contoh: #twt https://twitter.com/yoi

🌎MEDIA🌎

➥1.Bot Menulis
_${BotName} akan mengirimkan tulisan di buku sesuai yang kamu kirim!_
Perintah: #nulis [kata]
Contoh: #nulis imam is the best

➥2.Bot Ngomong (Kadang Error)
_${BotName} akan mengirimkan suara vn dari google sesuai perintah yang kamu kirim!_
Perintah: #ttsid [kata]
Contoh: #ttsid fiks imam cogan no debat

🙏SLAMIC🙏

➥1.Quran
_${BotName} akan mengirimkan ayat-ayat quran secara random!_
Perintah: #quran
Contoh: #quran

😊INFO😊

➥1.WIKIPEDIA
_${BotName} akan mengirimkan hasil dari wikipedia sesuai perintah yang kamu kirim!_
Perintah: #wiki [query]
Contoh: #wiki imam syahfa

➥2.TENTANG BOT
_${BotName} akan mengirimkan informasi tentang bot!_
Perintah: #info
Contoh: #info

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

🤧 INFORMASI COVID-19 TERBARU!

😷 POSITIF: *${corohelp.confirmed.value}*
😄 SEMBUH: *${corohelp.recovered.value}*
😭 MENINGGAL: *${corohelp.deaths.value}*
😡 UPDATE: *${corohelp.lastUpdate}*

♨️️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_♨️

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

♨️ GROUP NGOBROL [1] : ${grupch1}

♨️ CHILL GROUP [2] : ${grupch2}

  
(②⓪②⓪ COPYRIGHT BY* ${BotName}* ②⓪②⓪)`
}
