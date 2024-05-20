# are-you-sure?

A CLI tool to ask if you are sure. Will exit if you are not.

## Usage

```js
import { areYouSure } from "are-you-sure";

let toDelete = getFiles();

console.log('Will delete: ', toDelete);
await areYouSure();
// execution stops if the user answers "no" or "n"
```

There is also an alias, `conform`

```js
import { confirm } from "are-you-sure";

let toDelete = getFiles();

console.log('Will delete: ', toDelete);
await confirm();
// execution stops if the user answers "no" or "n"
```
