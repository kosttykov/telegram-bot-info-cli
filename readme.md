# Telegram Bot Info CLI

![GitHub](https://img.shields.io/github/license/kosttykov/telegram-bot-info-cli)
![GitHub last commit](https://img.shields.io/github/last-commit/kosttykov/telegram-bot-info-cli)
![GitHub issues](https://img.shields.io/github/issues/kosttykov/telegram-bot-info-cli)

**Easily get Chat IDs and Basic Bot Information**

The Telegram Bot Info CLI is a simple command-line tool designed to streamline the process of obtaining chat IDs your bot has interacted with. Additionally, it provides basic information about your Telegram bot, including its ID, whether it's a bot, its first name, username, and more.

## Features

- Quickly retrieve chat IDs of chats where your bot has received messages.
- Obtain essential bot information, including ID, bot status, first name, and username.
- Pure JS, lightweight and easy-to-use, requiring only a bot token as input.

## Use Cases

- Developers building Telegram bots can use this tool to identify chat IDs for targeted interactions.
- Bot administrators can quickly gather basic information about their bots for monitoring and management.

## Output example

```js
token is:  1234:abcd
requesting stat...
           BOT INFO
id: 12345678
is_bot: true
first_name: bot
username: bot
can_join_groups: true
can_read_all_group_messages: false
supports_inline_queries: false
          BOT UPDATES
Message: private chat with id 87654321
Message: group chat with id 87654321
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Usage

#### Option 1: Run Without Cloning

1. Download the script:

   ```bash
   curl -O https://raw.githubusercontent.com/kosttykov/telegram-bot-info-cli/main/index.mjs
   ```

2. Run the script:

   ```bash
   node index.mjs <your_bot_token>
   ```

#### Option 2: Clone and Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kosttykov/telegram-bot-info-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd telegram-bot-info-cli
   ```

3. Run the script:

   ```bash
   node index.mjs <your_bot_token>
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The script uses colors to enhance the command line output.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/kosttykov/telegram-bot-info-cli/issues).

## Author

kosttykov - [GitHub Profile](https://github.com/kosttykov)
