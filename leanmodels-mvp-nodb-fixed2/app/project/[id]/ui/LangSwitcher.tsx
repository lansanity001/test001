
'use client';
import { useI18n } from '@/components/i18n';

export default function LangSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        className={`px-2 py-1 rounded ${lang==='zh' ? 'bg-black text-white' : 'bg-gray-100'}`}
        onClick={()=>setLang('zh')}
      >中文</button>
      <button
        className={`px-2 py-1 rounded ${lang==='ja' ? 'bg-black text-white' : 'bg-gray-100'}`}
        onClick={()=>setLang('ja')}
      >日本語</button>
    </div>
  );
}
