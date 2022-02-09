import { exit } from 'process';
import { readFile, writeFile } from 'fs/promises';
import yaml from 'js-yaml';
import YamlPatcher from '../src/index.js';

interface Content extends Record<string, unknown> {
  date?: string;
  lastmod?: string;
  tags?: string[];
}

(async function updateTest(): Promise<void> {
  const old = (await readFile('test/before.yml')).toString();
  const expected = (await readFile('test/after.yml')).toString();
  const before = yaml.load(old) as Content;
  const after = {
    date: new Date().toISOString(),
    ...before,
    lastmod: '2022-02-09T12:34:56.789Z',
    tags: ['before', ...(before.tags || []), 'after'],
    newProperty: 'added',
    custom: 'Modified ' + before.custom + '!',
  };
  const result = YamlPatcher(old, after);
  if (result !== expected) {
    console.error("Failed");
    exit(1);
  }
})();
