import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "わらびのメモ帳",
  description: "備忘録です",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quantum', link: '/quantum' },
      { text: 'Math', link: '/math' },
      { text: 'Computer Science', link: '/cs' },
      { text: 'Physics', link: '/physics' },
    ],

    sidebar: {
      '/quantum/': [
        {
          text: '量子コンピュータ',
          items: [
          ]
        },
        {
          text: '量子情報',
          items: [
          ]
        }
      ],
      '/math/': [
        {
          text: '数学',
          items: [
          ]
        }
      ],
      '/cs/': [
        {
          text: 'コンピュータサイエンス',
          link: '/cs',
          items: [
              { 
                text: '数理最適化',
                link: '/cs/optimization',
                items: [
                  {
                    text: '線形計画法',
                    link: '/cs/optimization/linear/linearProgramming',
                    items: [
                      {text: '線形計画法', link: '/cs/optimization/linear/linearProgramming'},
                      {text: 'シンプレックス法', link: '/cs/optimization/linear/simplexMethod'},
                      {text: '双対問題', link: '/cs/optimization/linear/dualProblem'},
                    ]
                  }
                ]
              }
          ]
        }
      ],
      '/physics/': [
        {
          text: '物理学',
          items: [
          ]
        }
      ]
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/warabi0141' },
      { icon: 'x', link: 'https://x.com/inu__warabi' }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  },
  markdown: {
    math: true
  }
})