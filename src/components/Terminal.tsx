import { useEffect, useRef } from 'react';
import { useLang } from '../context/LangContext';
import { content } from '../i18n/content';

export function Terminal() {
  const { lang } = useLang();
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const lines = content[lang].terminal;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let loopTimer: ReturnType<typeof setTimeout>;

    function run() {
      el!.innerHTML = '';
      let delay = 200;
      lines.forEach((line) => {
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
  }, [lang]);

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
