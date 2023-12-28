if (process.argv.length < 3) {
  console.error("Bot token not specified. Please give it as a first argument.");
  process.exit(1);
}

const c = {
  re: "\x1b[0m",
  r: "\x1b[31m",
  g: "\x1b[32m",
  y: "\x1b[33m",
  b: "\x1b[34m",
  m: "\x1b[35m",
  c: "\x1b[36m",
};

const b = {
  bl: "\x1b[40m",
  r: "\x1b[41m",
  g: "\x1b[42m",
  y: "\x1b[43m",
  b: "\x1b[44m",
  m: "\x1b[45m",
  c: "\x1b[46m",
  w: "\x1b[47m",
};

const botToken = process.argv[2];
const urlMe = `https://api.telegram.org/bot${botToken}/getMe`;
const urlUpdates = `https://api.telegram.org/bot${botToken}/getUpdates`;

console.log('token is: ', botToken);
console.log('requesting stat...');

function printMe(map) {

  console.info(`${b.g}           BOT INFO           ${c.re}`);

  map.forEach((value, key) => {
    console.info(`${c.g}${key}:${c.re} ${c.y}${value}${c.re}`);
  })
}

function printUpdates(data) {

  console.info(`${b.g}          BOT UPDATES         ${c.re}`);

  if (data.length) {
    data.forEach(update => {
      if (update.message) {
        const message = update.message;
        const chat = message.chat;

        console.log(`${b.b}Message:${c.re} ${c.g}${chat.type}${c.re} chat with id ${c.y}${chat.id} ${c.re}`);
      }
    });
  } else {
    console.info(`${b.y} No updates. Start bot or add it to some chat. ${c.re}`);
  }
}

function getMe() {
  fetch(urlMe)
    .then(response => {
      if (!response.ok) {
        switch (response.status) {
          case 401: case 404:
            console.error('Invalid bot token. Check and try again.');
            process.exit(1);
          default:
            console.error('Unknown error occurred.', response.status);
            process.exit(1);
        }
      }
      return response.text();
    })
    .then(data => {
      data = JSON.parse(data);
      if (data.ok) {
        data = data.result;
        const map = new Map(Object.entries(data));
        printMe(map);
      }
    })
    .catch(error => {
      console.error('Error while request. Is there network troubles?');
      process.exit(1);
    })
    .finally(() => {
      getUpdates();
    })
}

function getUpdates() {
  fetch(urlUpdates)
    .then(response => {
      if (!response.ok) {
        switch (response.status) {
          case 401: case 404:
            console.error('Invalid bot token. Check and try again.');
            process.exit(1);
          default:
            console.error('Unknown error occurred.', response.status);
            process.exit(1);
        }
      }
      return response.text();
    })
    .then(data => {
      data = JSON.parse(data);
      if (data.ok) {
        data = data.result;
        printUpdates(data);
      }
    })
    .catch(error => {
      console.error('Error while request. Is there network troubles?');
      process.exit(1);
    })
}

getMe();