import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill } from './common.mjs';

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'MONARC UNIVERSITY');
  title(slide, ctx, 'Stop writing prompts. Build AI workflows instead.', 134, 56, 760);
  subtitle(slide, ctx, 'A 6-8 minute teaching video that reframes AI from one-off commands into repeatable systems people can use for business, content, clients, and career growth.', 332, 704);
  rect(slide, ctx, 842, 118, 320, 260, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'VIDEO PACKAGE 2', 870, 146, 220, 20, { size: 11, bold: true, color: style.gold });
  pill(slide, ctx, 'Audience: beginners', 870, 188, 230);
  pill(slide, ctx, 'Offer: founding cohort', 870, 236, 230);
  pill(slide, ctx, 'CTA: apply now', 870, 284, 230);
  line(slide, ctx, 64, 468, 680, style.cyan, 2);
  addText(slide, ctx, 'The shift: prompts are moments. Workflows are assets.', 66, 500, 650, 44, { size: 24, bold: true });
  footer(slide, ctx, 1);
  return slide;
}
