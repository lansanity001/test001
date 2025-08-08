'use client';
import { useState } from 'react';
import { useI18n, labels } from '@/components/i18n';


function useSections() {
  const { lang } = useI18n();
  const titles = labels[lang].sections;
  return titles.map((title, idx)=> ({
    key: ['customer_segments','problem','unique_value','solution','channels','revenue','cost','metrics','advantage'][idx],
    title
  }));
}


export default function CanvasPanel({ projectId }: { projectId: string }) {
  const [sections] = useState(useSections());
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-6">
      {sections.map((s, i) => (
        <div key={s.key} className="bg-white rounded-lg border p-5 shadow-sm">
          <header className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">{i+1}. {s.title}</h2>
            <div className="text-sm text-gray-500">{labels[lang].aiSync}</div>
          </header>
          <SectionItems sectionKey={s.key}/>
        </div>
      ))}
    </div>
  );
}

function SectionItems({ sectionKey }: { sectionKey: string }) {
  const [items, setItems] = useState<string[]>(['']);

  return (
    <div className="space-y-2">
      {items.map((v, idx) => (
        <div key={idx} className="group relative">
          <textarea
            className="w-full resize-y rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1"
            rows={3}
            value={v}
            onChange={(e)=> {
              const next=[...items]; next[idx]=e.target.value; setItems(next);
            }}
            placeholder="{labels[lang].inputHint}"
          />
          <HoverHint text={labels[lang].helper} />
        </div>
      ))}
      <button
        className="text-sm underline"
        onClick={()=> setItems([...items, ''])}
      >{labels[lang].add}</button>
    </div>
  );
}

function HoverHint({ text }: { text: string }) {
  return (
    <div className="absolute -right-1 top-2 translate-x-full">
      <div className="relative">
        <span className="text-xs text-gray-400">ⓘ</span>
        <div className="invisible group-hover:visible absolute left-4 top-0 w-64 rounded border bg-white p-3 text-xs shadow">
          {text}
        </div>
      </div>
    </div>
  );
}
