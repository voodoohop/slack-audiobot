// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
const { createReadStream, rmSync } = require('fs');
const glob = require("glob")
const {basename} = require("path");;
// options is optional
glob("/tmp/screenshots/*.png", async function (er, files) {

});

async function run(path) {
// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-762680223989-1775907225299-PKJ5EnU9z1HtTFKVpHf49eXb", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});
// ID of the channel you want to send the message to
const channelId = "C01PGRWGGF2";

try {
    const filename = basename(path);

  // Call the chat.postMessage method using the WebClient
//   const result = await client.chat.postMessage({
//     channel: channelId,
//     text: "Hello world"
//   });

//   console.log(result);
const result = await client.files.upload({
    filename,
    channels:channelId,
    // You can use a ReadableStream or a Buffer for the file option
    // This file is located in the current directory (`process.pwd()`), so the relative path resolves
    file: createReadStream(path),
  })

  // `res` contains information about the uploaded file
  console.log('File uploaded: ', result.file.id);
}
catch (error) {
  console.error(error);
}
};

// run();l