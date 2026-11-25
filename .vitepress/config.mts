import { defineConfig } from 'vitepress';
import wikilinks from './wikilinks';

export default defineConfig({
  title: 'CMU-REvised Docs',
  description: 'How to update, prepare and mod a Mazda Connect (CMU150) unit.',
  lang: 'en',
  cleanUrls: true,
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/logo-mark.svg' }]],
  markdown: { config: (md) => md.use(wikilinks) },
  themeConfig: {
    logo: '/logo-mark.svg',
    siteTitle: false,
    nav: [
      { text: 'Guides', link: '/guides/update-firmware' },
      { text: 'Store', link: 'https://cmu-revised.com/apps' },
    ],
    sidebar: [
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
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    footer: { message: 'Not affiliated with Mazda. Modding your car is at your own risk.' },
  },
});
