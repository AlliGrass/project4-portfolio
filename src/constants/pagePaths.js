const pagePaths = {
    '/main': { pageName: 'Home', leftNavPath: '/left', rightNavPath: '/right' },
    '/left': { pageName: 'Projects', leftNavPath: '', rightNavPath: '/main' },
    '/right': { pageName: 'Resume\nContact', leftNavPath: '/main', rightNavPath: '' },
  };
  
export default pagePaths;