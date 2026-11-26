import type MarkdownIt from 'markdown-it';

// Obsidian [[Page]] / [[Page|text]] / [[Page#Heading]] -> markdown links.
// A page is found by its file name: [[USB stick]] -> /usb-stick, so notes keep working in Obsidian.
// ponytail: rewrites the raw source, so a [[...]] inside a code block is rewritten too; switch to an inline rule if that bites.
export const slug = (s: string) => s.trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');

export function rewrite(src: string, pages: Record<string, string>): string {
  return src.replace(/\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (_, page: string, hash = '', text?: string) => {
    const path = pages[slug(page)] ?? `/${slug(page)}`;
    return `[${text ?? page.trim()}](${path}${hash ? `#${slug(hash.slice(1))}` : ''})`;
  });
}

// file-name slug -> site path, filled from the pages of the site
const pages: Record<string, string> = {
  'update-firmware': '/guides/update-firmware',
  'usb-stick': '/guides/usb-stick',
  'install-store': '/guides/install-store',
  'link-car': '/guides/link-car',
  'build-with-ai': '/develop/build-with-ai',
};

export default function wikilinks(md: MarkdownIt, extra: Record<string, string> = {}) {
  const all = { ...extra, ...pages };
  md.core.ruler.before('normalize', 'wikilinks', (state) => {
    state.src = rewrite(state.src, all);
  });
}
