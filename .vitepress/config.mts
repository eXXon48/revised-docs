import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import wikilinks from './wikilinks';
import { researchPages, researchSidebar } from './research';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// only revised-sdk/docs is on the site; docs/agents/ and guide-intro.md are the parts guide.md is assembled from
const sdkRoot = join(__dirname, '..', 'external', 'revised-sdk');

export default withMermaid(defineConfig({
  title: 'CMU-REvised Docs',
  description: 'How to update, prepare and mod a Mazda Connect (CMU150) unit.',
  lang: 'en',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo-mark.svg' }]],
  // pages that live in other repositories, linked in as submodules under external/
  rewrites: (id) => id
    .replace(/^external\/research-vault\/((?:.*\/)?)README\.md$/, 'research/$1index.md')
    .replace(/^external\/research-vault\//, 'research/')
    .replace(/^external\/revised-sdk\/docs\//, 'develop/sdk/'),
  srcExclude: [...readdirSync(sdkRoot).filter((n) => n !== 'docs').map((n) => `external/revised-sdk/${n}/**`),
    'external/revised-sdk/*.md', 'external/revised-sdk/docs/agents/**', 'external/revised-sdk/docs/guide-intro.md'],
  markdown: {
    config: (md) => {
      md.use(wikilinks, researchPages());
      // `{{ key }}` in inline code is text, not a Vue expression
      const code = md.renderer.rules.code_inline!;
      md.renderer.rules.code_inline = (...a) => code(...a).replace(/^<code/, '<code v-pre');
    },
  },
  // same font for measuring and drawing, or labels get clipped
  mermaid: { themeVariables: { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' } },
  themeConfig: {
    logo: { light: '/logo-mark-light.svg', dark: '/logo-mark.svg' },
    siteTitle: false,
    nav: [
      { text: 'Guides', link: '/guides/update-firmware', activeMatch: '^/guides/' },
      { text: 'Develop', link: '/develop/', activeMatch: '^/develop/' },
      { text: 'Reference', link: '/research/', activeMatch: '^/research/' },
      { text: 'Store', link: 'https://cmu-revised.com/apps' },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Update to 74.00.324A', link: '/guides/update-firmware' },
            { text: 'Prepare a USB stick', link: '/guides/usb-stick' },
            { text: 'Install the Store', link: '/guides/install-store' },
            { text: 'Link your car', link: '/guides/link-car' },
          ],
        },
      ],
      '/develop/': [
        {
          text: 'Develop',
          items: [
            { text: 'Overview', link: '/develop/' },
            { text: 'Build with an AI agent', link: '/develop/build-with-ai' },
            { text: 'Reference', link: '/research/' },
          ],
        },
        {
          text: 'SDK',
          items: [
            { text: 'SDK overview', link: '/develop/sdk/developer-sdk' },
            { text: 'SDK guide', link: '/develop/sdk/guide' },
            { text: 'Package settings', link: '/develop/sdk/config' },
          ],
        },
      ],
      '/research/': researchSidebar(),
    },
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    footer: { message: 'Not affiliated with Mazda. Modding your car is at your own risk.' },
  },
}));
