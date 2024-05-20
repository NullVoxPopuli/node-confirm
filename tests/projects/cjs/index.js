const { confirm } = require("node-confirm");

async function main() {
  let result = await confirm();

  console.log({ result });
}
main();
