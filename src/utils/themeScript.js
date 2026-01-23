export const themeScript = `(function(){
  const stored = localStorage.getItem('theme');
  const themeName = (stored && ['light', 'dark'].includes(stored)) 
    ? stored 
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', themeName);
  const customProperties = {
    '--about-bg': themeName === 'light' 
      ? 'rgba(229, 228, 226, 0.1)' 
      : 'rgba(34, 34, 34, 0.3)',
    '--about-border': themeName === 'light' 
      ? 'rgba(18, 18, 18, 0.1)' 
      : 'rgba(229, 228, 226, 0.1)',
    '--about-text': themeName === 'light' 
      ? '#121212' 
      : '#e5e4e2',
    '--about-text-secondary': themeName === 'light' 
      ? 'rgba(18, 18, 18, 0.8)' 
      : 'rgba(229, 228, 226, 0.9)',
    '--about-accent': themeName === 'light' 
      ? 'rgba(18, 18, 18, 0.2)' 
      : 'rgba(229, 228, 226, 0.3)',
    '--about-stat-bg': themeName === 'light' 
      ? 'rgba(229, 228, 226, 0.2)' 
      : 'rgba(34, 34, 34, 0.4)',
    '--about-stat-hover': themeName === 'light' 
      ? 'rgba(229, 228, 226, 0.3)' 
      : 'rgba(34, 34, 34, 0.6)',
  };
  
  Object.entries(customProperties).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
})();`;
