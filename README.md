# Display As Tree

Simple function to display data as a tree structure.
<br>
![Display As Tree](.github/displayastree.png)
<br>
\*Screenshot taken from [DevScript](https://www.npmjs.com/package/ts-devscript) to be used as an example.\*

## Compatability

You are able to pass strings that are colored using [Chalk](https://www.npmjs.com/package/chalk).

## Installation

```bash
# global
npm i -g displayastree

# npm
npm i displayastree

# yarn
yarn add displayastree
```

## Usage

### Tree with inner sections:

```TypeScript
import { DisplayAsTree, TreeSection } from "displayastree";

//* Chalk is not needed but is just used in this example.
import chalk from "chalk";

//* Make the main tree.
const tree = new DisplayAsTree(chalk.hex("#FF8C00")("Found 2 TODO's"));

//* Make sections.
const sectionOne = new TreeSection(chalk.cyan("config.ts")).addSection([chalk.yellow("src/config.ts")]);
const sectionsTwo = new TreeSection(chalk.cyan("index.ts")).addSection([chalk.yellow("src/modules/status/index.ts")]);

//* Add the sections to the main tree and log
tree.addSection([sectionOne, sectionsTwo]).log();
```

Will log:
<br>
![Display As Tree](.github/usageexampleone.png)

### Tree without inner sections:

```TypeScript
new DisplayAsTree("A test").addSection(["a", "b", "c"]).log();
```

Will log:
<br>
![Display As Tree](.github/usageexampletwo.png)

## Options

Simply include the options while creating the DisplayAsTree instance.

```Typescript
const tree = new DisplayAsTree("Tree Name", { startChar: "* " });
```

| Options   | Type   | Description                                                     | Default |
| --------- | ------ | --------------------------------------------------------------- | ------- |
| startChar | string | String of the character that the tree will start with.          | `● `    |
| treeChar  | string | String of the character that the tree will split with.          | `├─ `   |
| midChar   | string | String of the character that the tree will display at overlaps. | `│ `    |
| endChar   | string | String of the character that the tree will end with.            | `╰─ `   |

**Note**: treeChar, midChar, and endChar must have the same length.
