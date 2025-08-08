
'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'zh' | 'ja';
type I18nCtx = { lang: Lang; setLang: (l: Lang)=>void };

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh');
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export const labels = {
  ja: {
    appTitle: 'Leanmodels',
    openProject: 'Open Project',
    aiSync: 'AIと同期',
    inputHint: '箇条書きで入力…',
    add: '+ 追加',
    chatPlaceholder: 'Write or code',
    sections: [
      '顧客セグメント','課題','独自の価値提案','ソリューション','チャネル','収益の流れ','コスト構造','主要指標','圧倒的優位性'
    ],
    helper: '例：都市部の20〜40代ビジネスパーソン／効率重視／アプリ利用率が高い',
    botGreeting: 'マウスホバーでポップアップを出すコードを書いて、など自由に指示してください。'
  },
  zh: {
    appTitle: 'Leanmodels',
    openProject: 'Open Project',
    aiSync: '與 AI 同步',
    inputHint: '以條列方式輸入…',
    add: '+ 新增一項',
    chatPlaceholder: '輸入說明或程式碼',
    sections: [
      '顧客區隔','痛點 / 課題','獨特價值主張','解決方案','通路','收入來源','成本結構','關鍵指標','不易被複製的優勢'
    ],
    helper: '例：都會區 20〜40 歲商務族／重效率／高 App 使用率',
    botGreeting: '可以直接要求：例如「做個滑鼠滑過的彈出提示」等。'
  }
} as const;
