import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const last = messages?.[messages.length-1]?.text || '';

  const code = `/* HTML */
<div class="trigger">Hover me
  <div class="popup">Hello!</div>
</div>

/* CSS */
.trigger { position: relative; display:inline-block; }
.popup { position:absolute; top:100%; left:0; padding:.5rem; border:1px solid #ddd; background:#fff; opacity:0; pointer-events:none; transition:opacity .15s; }
.trigger:hover .popup { opacity:1; }

/* JS（任意） */
// 必要なら遅延/追従などを追加
`;

  const text = last.toLowerCase().includes('hover')
    ? "基本はCSSで十分。サンプル：\n\n" + code
    : "Lean Canvasのどのセクションを更新しますか？（顧客セグメント／課題…）";

  return NextResponse.json({ text });
}
