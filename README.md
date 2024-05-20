# node-confirm 

A CLI tool to confirm if you are sure. Will exit if you are not.

## Usage

```js
import { confirm } from "node-confirm";

let toDelete = getFiles();

console.log('Will delete: ', toDelete);
await confirm();
// execution stops if the user answers "no" or "n"
```

Use old software? cjs support is included:
```js
const { confirm } = require("node-confirm");

async function main() {
    let toDelete = getFiles();

    console.log('Will delete: ', toDelete);
    await confirm();
    // execution stops if the user answers "no" or "n"
}

main();
```


## Install

```bash
npm add node-confirm
```
