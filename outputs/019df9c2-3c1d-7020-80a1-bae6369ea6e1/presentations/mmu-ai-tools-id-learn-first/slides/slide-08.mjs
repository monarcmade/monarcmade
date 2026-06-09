import { style, addText, rect, line, bg, kicker, title, footer, pill } from './common.mjs';

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'CALL TO ACTION');
  title(slide, ctx, 'Monarc University gives you the stack and the roadmap.', 112, 48, 820);
  addText(slide, ctx, 'If you want to stop guessing which AI tools matter and start building useful systems, apply for the founding cohort.', 66, 292, 720, 60, { size: 24, color: style.muted });
  line(slide, ctx, 66, 402, 690, style.cyan, 2);
  addText(slide, ctx, 'Apply at monarcmade.com/university', 66, 442, 690, 48, { size: 30, bold: true });
  rect(slide, ctx, 850, 174, 286, 260, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'FIRST STACK', 884, 208, 160, 18, { size: 11, bold: true, color: style.gold });
  pill(slide, ctx, 'Think', 884, 250, 196);
  pill(slide, ctx, 'Build', 884, 298, 196);
  pill(slide, ctx, 'Automate', 884, 346, 196);
  footer(slide, ctx, 8);
  return slide;
}
