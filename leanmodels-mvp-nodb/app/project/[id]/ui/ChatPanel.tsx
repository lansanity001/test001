'use client';
import { useState } from 'react';
import { useI18n, labels } from '@/components/i18n';
import LangSwitcher from './LangSwitcher';

export default function ChatPanel({ projectId }: { projectId: string }) {
  const [input, setInput] = useState('');
  const { lang } = useI18n();
  const [msgs, setMsgs] = useState<{role:'user'|'assistant', text:string}[]>([
    { role:'assistant', text: labels[lang].botGreeting }
  ]);

  async function send() {
    if (!input.trim()) return;
    const next = [...msgs, { role:'user', text: input }];
    setMsgs(next);
    setInput('');

    const res = await fetch('/api/ai/chat', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ projectId, messages: next })
    });
    const data = await res.json();
    setMsgs([...next, { role:'assistant', text: data.text }]);
  }

  return (
    <div className="h-full flex flex-col">
      <header className="p-4 border-b font-medium flex items-center justify-between"><div>{labels[lang].appTitle}</div><LangSwitcher /></header>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {msgs.map((m,i)=> (
          <div key={i} className={m.role==='user' ? 'text-right' : ''}>
            <div className={`inline-block max-w-[90%] rounded px-3 py-2 text-sm ${m.role==='user' ? 'bg-black text-white' : 'bg-gray-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <footer className="p-3 border-t">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded border px-3 py-2 text-sm"
            value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder={labels[lang].chatPlaceholder}
          />
          <button onClick={send} className="rounded bg-black px-4 py-2 text-white text-sm">送信</button>
        </div>
      </footer>
    </div>
  );
}
