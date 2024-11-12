const pagePaths = {
    '/main': { pageName: 'Home', leftNavPath: '/left', rightNavPath: '/right' },
    '/left': { pageName: 'Projects', leftNavPath: '', rightNavPath: '/main' },
    '/right': { pageName: 'Resume / Contact', leftNavPath: '/main', rightNavPath: '' },
  };
  
export default pagePaths;