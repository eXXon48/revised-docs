import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { slug } from './wikilinks';

// The research vault is the submodule external/research-vault, served under /research/.
// Sidebar and the wikilink map come from its files; config.mts rewrites the paths.
const src = 'external/research-vault';
const root = join(__dirname, '..', src);

type Page = { file: string; rel: string; link: string; title: string };

function title(file: string, fallback: string): string {
  const m = readFileSync(file, 'utf8').match(/^# (.+)$/m);
  return m ? m[1].trim() : fallback;
}

const dirs = (dir: string) =>
  readdirSync(dir).filter((n) => !n.startsWith('.') && statSync(join(dir, n)).isDirectory()).sort();

function pagesIn(dir: string): Page[] {
  return readdirSync(dir)
    .filter((n) => n.endsWith('.md'))
    .map((n) => {
      const file = join(dir, n);
      const rel = relative(root, file).replace(/\\/g, '/'); // "6-vehicle/GPS (LDS).md"
      // README.md is the folder's landing page
      const link = '/research/' + rel.replace(/\.md$/, '').replace(/(^|\/)README$/, '$1');
      return { file, rel, link, title: title(file, n.replace(/\.md$/, '')) };
    })
    .sort((a, b) => (a.link.endsWith('/') ? -1 : b.link.endsWith('/') ? 1 : a.title.localeCompare(b.title)));
}

function allPages(dir = root, depth = 0, acc: [number, Page][] = []): [number, Page][] {
  for (const p of pagesIn(dir)) acc.push([depth, p]);
  for (const d of dirs(dir)) allPages(join(dir, d), depth + 1, acc);
  return acc;
}

// "1-hardware" -> section title from the vault README ("### 1. Hardware and storage (`1-hardware/`)")
function sectionTitle(name: string): string {
  const readme = join(root, 'README.md');
  const m = existsSync(readme) && readFileSync(readme, 'utf8').match(new RegExp('^### \\d+\\. (.+?) \\(`' + name + '/`\\)', 'm'));
  return m ? m[1] : name.replace(/^\d+-/, '');
}

function group(dir: string, text: string): any {
  const items: any[] = pagesIn(dir).map((p) => ({ text: p.title, link: p.link }));
  for (const sub of dirs(dir)) {
    const subItems = group(join(dir, sub), sub === 'commands' ? 'BusyBox commands' : sub);
    subItems.collapsed = true;
    items.push(subItems);
  }
  return { text, items };
}

export function researchSidebar(): any[] {
  if (!existsSync(root)) return [];
  const top = pagesIn(root).map((p) => ({ text: p.link === '/research/' ? 'Overview' : p.title, link: p.link }));
  return [
    { text: 'Reference', items: top },
    ...dirs(root).map((d) => ({ ...group(join(root, d), sectionTitle(d)), collapsed: true })),
  ];
}

// Obsidian link target -> site path. Keys: file name and vault-relative path; README = folder landing page.
export function researchPages(): Record<string, string> {
  const map: Record<string, string> = {};
  if (!existsSync(root)) return map;
  // shallow files first, so [[README]] means the vault root
  for (const [, p] of allPages().sort((a, b) => a[0] - b[0])) {
    const rel = p.rel.replace(/\.md$/, '');
    const base = rel.split('/').pop()!;
    // file names have spaces and parentheses; a markdown link target must not
    const url = p.link.split('/').map((s) => encodeURIComponent(s).replace(/\(/g, '%28').replace(/\)/g, '%29')).join('/');
    map[slug(base)] ??= url;
    map[slug(rel)] ??= url;
  }
  return map;
}
