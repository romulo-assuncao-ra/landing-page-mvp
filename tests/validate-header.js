const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('js/main.js', 'utf8');
const css = fs.readFileSync('css/responsive.css', 'utf8');
const components = fs.readFileSync('css/components.css', 'utf8');

const checks = [
  ['CT01 header', /<header\b[^>]*>/i.test(html)],
  ['CT02 Início', /href="#inicio"/i.test(html)],
  ['CT03 Sobre', /href="#sobre"/i.test(html)],
  ['CT04 Serviços', /href="#servicos"/i.test(html)],
  ['CT05 Contato', /href="#contato"/i.test(html)],
  ['CT06 hamburger/mobile', /class="menu-toggle"/.test(html) && /\.menu-toggle\s*\{\s*display:none/.test(components) && /\.menu-toggle\s*\{\s*display:block/.test(css)],
  ['CT07 fechamento após seleção', /navigation\.querySelectorAll\('a'\)/.test(js) && /link\.addEventListener\('click', closeMenu\)/.test(js)],
  ['CT08 teclado/acessibilidade', /aria-expanded="false"/.test(html) && /aria-controls="main-navigation"/.test(html) && /:focus-visible/.test(fs.readFileSync('css/reset.css','utf8')) && /event\.key === 'Escape'/.test(js)]
];
let failed = 0;
for (const [name, ok] of checks) { console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`); if (!ok) failed++; }
process.exitCode = failed ? 1 : 0;
