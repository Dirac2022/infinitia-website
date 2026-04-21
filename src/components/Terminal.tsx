import { useEffect, useRef } from 'react';

import { TermLine } from '../types/types';

const LINES: TermLine[] = [
  { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">infinitia deploy --client new-project</span>' },
  { t: 800, html: '<span class="term-out">→ Iniciando entorno seguro...</span>' },
  { t: 400, html: '<span class="term-out">→ Stack: <span class="term-key">React</span> · <span class="term-key">Node</span> · <span class="term-key">Docker</span></span>' },
  { t: 500, html: '<span class="term-out"><span class="term-ok">✓</span> Conexión · <span class="term-val">prod-01.infinitia.io</span></span>' },
  { t: 800, html: '<span class="term-prompt">$</span> <span class="term-cmd">pipeline run --env production</span>' },
  { t: 600, html: '<span class="term-out"><span class="term-key">[01/06]</span> Build ................. <span class="term-ok">OK</span></span>' },
  { t: 250, html: '<span class="term-out"><span class="term-key">[02/06]</span> Tests ................. <span class="term-ok">OK</span></span>' },
  { t: 250, html: '<span class="term-out"><span class="term-key">[03/06]</span> Security scan ......... <span class="term-ok">OK</span></span>' },
  { t: 250, html: '<span class="term-out"><span class="term-key">[04/06]</span> Infrastructure (IaC) .. <span class="term-ok">OK</span></span>' },
  { t: 250, html: '<span class="term-out"><span class="term-key">[05/06]</span> Deploy to cloud ........ <span class="term-ok">OK</span></span>' },
  { t: 250, html: '<span class="term-out"><span class="term-key">[06/06]</span> Monitoring active ...... <span class="term-ok">OK</span></span>' },
  { t: 700, html: '<span class="term-out"><span class="term-warn">▲</span> Sistema operando al <span class="term-val">99.9%</span> uptime</span>' },
  { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cmd">status</span>' },
  { t: 400, html: '<span class="term-out"><span class="term-ok">●</span> Listo para escalar.</span>' },
  { t: 500, html: '<span class="term-prompt">$</span> <span class="term-cursor-el"></span>' },
];

export function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let loopTimer: ReturnType<typeof setTimeout>;

    function run() {
      el!.innerHTML = '';
      let delay = 200;
      LINES.forEach((line) => {
        delay += line.t;
        const timer = setTimeout(() => {
          const div = document.createElement('div');
          div.className = 'term-line';
          div.innerHTML = line.html;
          el!.appendChild(div);
          if (el!.scrollHeight > el!.clientHeight) {
            el!.scrollTop = el!.scrollHeight;
          }
        }, delay);
        timers.push(timer);
      });
      loopTimer = setTimeout(run, delay + 4000);
    }

    run();
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="term-dot red" />
        <span className="term-dot yellow" />
        <span className="term-dot green" />
        <span className="terminal-title">
          <span className="live-dot" />
          infinitia ~ deploy
        </span>
      </div>
      <div className="terminal-body" ref={bodyRef} />
    </div>
  );
}
