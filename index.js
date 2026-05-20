const B = '\x1b[38;2;144;152;252m'; 
const G = '\x1b[38;2;150;149;146m'; 
const E = '\x1b[38;2;144;252;209m'; 
const Red = '\x1b[38;2;250;51;69m'; 
const R = '\x1b[0m'; 

const Surprise = `
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
                ${Red}Test${R}
${B}██████████████████████████████████████${R}
${G}██████████████████████████████████████${R}
${E}██████████████████████████████████████${R}
`;

const HTML = `<!DOCTYPE html>
<html>
<head>
  <title>Hey there!</title>
  <script>
    const styles = {
      title: 'font-size:24px; font-weight:bold; color:#a855f7;',
      subtitle: 'font-size:11px; color:#94b8ae;',
      label: 'font-size:12.5px; color:#64748b; font-weight:bold',
      value: 'font-size:12px; color:#e2e8f0;',
      Regular: 'font-size:12px; color:#00276c;',
      Blue: 'color:#9098fc; font-size:13px;',
      Grey: 'color:#969592; font-size:13px;',
      Green: 'color:#90fcd1; font-size:13px;',
    };

    console.log('%c██████████████████████████████████████', styles.Blue);
    console.log('%c██████████████████████████████████████', styles.Grey);
    console.log('%c██████████████████████████████████████', styles.Green);
        
    console.log('%cYou seem curious, stranger...',  styles.Regular);
    
    console.log('%c██████████████████████████████████████', styles.Blue);
    console.log('%c██████████████████████████████████████', styles.Grey);
    console.log('%c██████████████████████████████████████', styles.Green);

    console.log('%cIn case you want to contact me:', styles.Regular);
    console.log('%c GITHUB %c github.com/yourname', styles.label, styles.value);
    console.log('%c EMAIL  %c you@example.com',  styles.label, styles.value);

    
    console.log('%c If you are reading this, you might be an interesting individual...', styles.subtitle);
  </script>
</head>
<body>
  <h1>Hello!</h1>
  <h2>Do not expect much from me.</h2>
  <a href="https://github.com/VuqarAhadli">Github</a>
  <a href="mailto:vuqarahadli17@gmail.com">Mail me.</a>
  <h2>A red panda:</h2>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkKOa2nZ_ogJtS6jPyKSgZG-Jct43BGeh4w&s" alt="A red panda.">
</body>
</html>`;

export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isBrowser = /Mozilla\/|Chrome\/|Safari\/|Firefox\/|Edg\//i.test(ua);

  if (!isBrowser) {
    res.setHeader('Content-Type', 'text/plain');
    return res.send(Surprise);
  }

  res.setHeader('Content-Type', 'text/html');
  res.send(HTML);
}
