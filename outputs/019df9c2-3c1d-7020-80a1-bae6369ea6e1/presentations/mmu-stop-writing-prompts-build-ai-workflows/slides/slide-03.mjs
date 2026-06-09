import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE REFRAME');
  title(slide, ctx, 'A workflow turns AI into a repeatable business asset.', 92, 46, 820);
  const items = [
    ['Input', 'What information does AI need?'],
    ['Context', 'What rules, voice, examples, or sources matter?'],
    ['Process', 'What steps should AI follow every time?'],
    ['Output', 'What format should the answer come back in?'],
    ['Review', 'What does a human check before using it?']
  ];
  items.forEach(([h, b], i) => {
    const x = 72 + i * 232;
    rect(slide, ctx, x, 292, 184, 148, style.panel, { lineColor: i === 2 ? style.cyan : style.line, weight: i === 2 ? 2 : 1 });
    addText(slide, ctx, h, x + 18, 318, 148, 24, { size: 20, bold: true, color: i === 2 ? style.cyan2 : style.ink });
    addText(slide, ctx, b, x + 18, 362, 148, 44, { size: 12, color: style.muted });
  });
  addText(slide, ctx, 'This is the core Monarc University shift: learn AI as a system design skill, not a prompt scavenger hunt.', 118, 518, 920, 46, { size: 22, bold: true, align: 'center' });
  footer(slide, ctx, 3);
  return slide;
}
