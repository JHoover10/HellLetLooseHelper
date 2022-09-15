var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JHoover10/HellLetLooseHelper.git', // Update to point to your repository  
        user: {
            name: 'Jeffrey Hoover', // update to use your name
            email: 'jeffreyhoover1@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)