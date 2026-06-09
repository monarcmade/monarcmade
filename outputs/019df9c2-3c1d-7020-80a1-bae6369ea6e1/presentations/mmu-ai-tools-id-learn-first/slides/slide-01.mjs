import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill } from './common.mjs';

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'MONARC UNIVERSITY');
  title(slide, ctx, 'The AI tools I would learn first if I was starting over.', 130, 54, 790);
  subtitle(slide, ctx, 'A beginner-friendly tools roadmap that reduces overwhelm and points viewers toward the Monarc University builder path.', 344, 710);
  rect(slide, ctx, 842, 120, 330, 278, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'VIDEO PACKAGE 3', 874, 150, 220, 18, { size: 11, bold: true, color: style.gold });
  pill(slide, ctx, 'Audience: tool-overwhelmed beginners', 874, 198, 254);
  pill(slide, ctx, 'Promise: clear first stack', 874, 246, 254);
  pill(slide, ctx, 'CTA: apply for cohort', 874, 294, 254);
  line(slide, ctx, 64, 488, 690, style.cyan, 2);
  addText(slide, ctx, 'The message: do not learn every tool. Learn the stack that helps you build.', 66, 522, 670, 44, { size: 24, bold: true });
  footer(slide, ctx, 1);
  return slide;
}
