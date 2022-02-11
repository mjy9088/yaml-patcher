# yaml-patcher

YAML patcher to keep comments

[![NPM Version][npm-image]][npm-url]

## Install

Note: This module is dependent on `yawn-yaml` module

```sh
npm install yaml-patcher
```

## Why

YAML is a human-readable data-serialization language, and **may contains comments**

With no consideration about it, parse, manipulate, serialize it leads **all comments gone** :sob:

## Usage

```javascript
import yaml from 'js-yaml';
import YamlPatcher from 'yaml-patcher';

import CONFIG_PATH from '@src/constants';
import { readFile, writeFile } from '@src/utils';

export async function updateConfig(configUpdateAction) {
  const oldContent = await readFile(CONFIG_PATH);
  const oldConfig = yaml.load(oldContent);
  const newConfig = configUpdateAction(oldConfig);
  const newContent = YamlPatcher(oldContent, newConfig);
  await writeFile(CONFIG_PATH, newContent);
}
```

## Notice

There may be any breaking changes before the first stable version.

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/yaml-patcher.svg
[npm-url]: https://npmjs.org/package/yaml-patcher
