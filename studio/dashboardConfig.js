export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '609301deaee1e6228461263d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n6518wwj',
                  apiId: '7752e2ea-1b3f-4dc6-b358-41d42c4eaa04'
                },
                {
                  buildHookId: '609301ded91cc41c447771da',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3h713b7z',
                  apiId: '4d97a093-8abe-4767-8301-d4727c7dfb92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChrisReutter/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3h713b7z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
