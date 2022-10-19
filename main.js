__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', async(req, res) => {
	res.sendFile(__path + '/views/index.html')
})
router.get('/css/style.css', async(req, res) => {
	res.sendFile(__path + '/views/css/style.css')
})


//RANDOM ANIME
router.get('/randomimg/waifu', async (req, res, next) => {
fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
.then(response => response.json())
.then(async data => {
let result = data;
let buffer = await fetch(data.url)
res.type('png')
res.send(await buffer.buffer())
})
.catch(e => {
res.json(loghandler.error)
 })
})
router.get('/randomimg/neko', async (req, res, next) => {
fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
.then(response => response.json())
.then(async data => {
let result = data;
let buffer = await fetch(data.url)
res.type('png')
res.send(await buffer.buffer())
})
.catch(e => {
res.json(loghandler.error)
})
})
router.get('/randomimg/husbu', async (req, res, next) => {
let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
let result = waif[Math.floor(Math.random() * (waif.length))]
let data = await getBuffer(result)
await fs.writeFileSync(__path +'/database/waifu.png', data)
await res.sendFile(__path +'/database/waifu.png')
await sleep(3000)
await fs.unlinkSync(__path + '/database/waifu.png')
})
router.get('/randomimg/loli', async (req, res, next) => {
let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
let result = waif[Math.floor(Math.random() * (waif.length))]
let data = await getBuffer(result)
await fs.writeFileSync(__path +'/database/waifu.png', data)
await res.sendFile(__path +'/database/waifu.png')
await sleep(3000)
await fs.unlinkSync(__path + '/database/waifu.png')
})
router.get('/randomimg/milf', async (req, res, next) => {
let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
let result = waif[Math.floor(Math.random() * (waif.length))]
let data = await getBuffer(result)
await fs.writeFileSync(__path +'/database/waifu.png', data)
await res.sendFile(__path +'/database/waifu.png')
await sleep(3000)
await fs.unlinkSync(__path + '/database/waifu.png')
})
router.get('/randomimg/cosplay', async (req, res, next) => {
let waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
let result = waif[Math.floor(Math.random() * (waif.length))]
let data = await getBuffer(result)
await fs.writeFileSync(__path +'/database/waifu.png', data)
await res.sendFile(__path +'/database/waifu.png')
await sleep(3000)
await fs.unlinkSync(__path + '/database/waifu.png')
})


//Kalo page yang di cari engga ada, nanti muncul ini:v
router.use(function (req, res) {
res.status(404)
.sendFile(__path + '/views/404.html')
});


module.exports = router
