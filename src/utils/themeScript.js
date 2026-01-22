export const themeScript = `(function(){
  const stored = localStorage.getItem('theme');
  const theme = (stored && ['light', 'dark'].includes(stored)) 
    ? stored 
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();`;
