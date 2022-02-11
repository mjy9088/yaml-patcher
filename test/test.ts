import { readFile } from 'fs/promises';
import yaml from 'js-yaml';
import YamlPatcher from '../src/index.js';

interface Content extends Record<string, unknown> {
  date?: string;
  lastmod?: string;
  tags?: string[];
}

test('snapshot', async () => {
  const before = (await readFile('test/before.yml')).toString();
  const content = yaml.load(before) as Content;
  const after = YamlPatcher(before, {
    date: new Date().toISOString(),
    ...content,
    lastmod: '2022-02-09T12:34:56.789Z',
    tags: ['content', ...(content.tags || []), 'after'],
    newProperty: 'added',
    custom: 'Modified ' + content.custom + '!',
  });
  expect(after).toMatchSnapshot();
});

