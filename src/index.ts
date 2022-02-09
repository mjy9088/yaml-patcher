import YAWN from 'yawn-yaml/cjs';

export default function YamlPatcher(yamlContent: string, newContent: object): string {
  const yawn = new YAWN(yamlContent);
  yawn.json = newContent;
  return yawn.yaml;
}
