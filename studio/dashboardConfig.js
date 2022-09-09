export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631b234999897430496b06cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i2qhp5zr',
                  apiId: '3c53c516-0abb-4627-8045-63b281bc57a6'
                },
                {
                  buildHookId: '631b2349d66a3a2fdd8dc80d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e771zpgc',
                  apiId: 'fd645675-3012-4b75-a700-5c6e654722c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rinzlerte/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e771zpgc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
