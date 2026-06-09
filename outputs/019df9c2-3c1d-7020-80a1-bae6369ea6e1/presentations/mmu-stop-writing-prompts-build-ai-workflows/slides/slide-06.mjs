import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'WHAT TO BUILD FIRST');
  title(slide, ctx, 'Your first workflow should save time or create money.', 92, 46, 850);
  const examples = [
    ['Client intake', 'Sort leads, spot missing info, draft follow-up questions.'],
    ['Content engine', 'Turn one idea into scripts, posts, Shorts, and thumbnails.'],
    ['Proposal helper', 'Turn a messy brief into scope, risk, timeline, and pricing notes.'],
    ['Knowledge assistant', 'Answer from docs, SOPs, past work, or business files.']
  ];
  examples.forEach(([h, b], i) => {
    const x = i % 2 === 0 ? 96 : 670;
    const y = i < 2 ? 250 : 420;
    rect(slide, ctx, x, y, 440, 114, style.panel, { lineColor: style.line, weight: 1 });
    addText(slide, ctx, h, x + 24, y + 22, 260, 32, { size: h.length > 18 ? 18 : 22, bold: true, color: style.cyan2 });
    addText(slide, ctx, b, x + 24, y + 62, 374, 34, { size: 14, color: style.muted });
  });
  footer(slide, ctx, 6);
  return slide;
}
