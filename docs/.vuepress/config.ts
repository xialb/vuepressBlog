import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 部署到github相关的配置
  base: '/',
  // 站点配置
  lang: '/',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['link', { rel: 'manifest', href: '/images/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/favicon.png' }],
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '春风再美亦不及你的笑',
      description: '春风再美亦不及你的笑',
    },
    '/en/': {
      lang: 'en-US',
      title: 'spring breeze',
      description: 'spring breeze',
    },
  },
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/ace.jpg',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        navbar: [
          {
            text: '关于',
            link: '/about'
          },
          {
            text: 'BLOG',
            children: [
              {
                text: 'GitHub',
                link: 'https://github.com/xialb',
              },
              {
                text: 'Gitee',
                link: 'https://gitee.com/pickmoon',
              },
              {
                text: '博客园',
                link: 'https://www.cnblogs.com/Artislong',
              },
              {
                text: '掘金',
                link: 'https://juejin.cn/user/3861909042372840',
              },
              {
                text: '简书',
                link: 'https://www.jianshu.com/u/00c7d155a207',
              },
              {
                text: 'CSDN',
                link: 'https://blog.csdn.net/xialb',
              },
              {
                text: 'segmentfault',
                link: 'https://segmentfault.com/u/pickmoon',
              },
            ],
          },
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
        navbar: [
          {
            text: 'about',
            link: '/about'
          },
          {
            text: 'BLOG',
            children: [
              {
                text: 'GitHub',
                link: 'https://github.com/xialb',
              },
              {
                text: 'Gitee',
                link: 'https://gitee.com/pickmoon',
              },
              {
                text: 'cnblogs',
                link: 'https://www.cnblogs.com/Artislong',
              },
              {
                text: 'juejin',
                link: 'https://juejin.cn/user/3861909042372840',
              },
              {
                text: 'jianshu',
                link: 'https://www.jianshu.com/u/00c7d155a207',
              },
              {
                text: 'CSDN',
                link: 'https://blog.csdn.net/xialb',
              },
              {
                text: 'segmentfault',
                link: 'https://segmentfault.com/u/pickmoon',
              },
            ],
          },
        ],
      },
    },
  },
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
          '/en/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
        },
      },
    ],
  ],
})