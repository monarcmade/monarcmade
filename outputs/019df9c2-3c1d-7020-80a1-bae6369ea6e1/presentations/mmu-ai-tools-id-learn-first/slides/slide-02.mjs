import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE OVERWHELM');
  title(slide, ctx, 'The beginner mistake is trying to learn every AI tool at once.', 92, 42, 830);
  addText(slide, ctx, 'New tools appear every week. The goal is not to chase them. The goal is to build judgment about which tool belongs in which workflow.', 66, 246, 680, 60, { size: 20, color: style.muted });
  rect(slide, ctx, 800, 138, 326, 326, '#180F12', { lineColor: '#55313A', weight: 1 });
  addText(slide, ctx, 'Bad path', 838, 176, 200, 28, { size: 24, bold: true, color: style.red });
  addText(slide, ctx, '• Save 50 tools\n• Watch 100 tutorials\n• Build nothing\n• Feel behind again', 838, 244, 230, 132, { size: 22 });
  rect(slide, ctx, 66, 390, 550, 94, style.panel, { lineColor: style.line, weight: 1 });
  addText(slide, ctx, 'Better question', 92, 412, 160, 18, { size: 11, bold: true, color: style.gold });
  addText(slide, ctx, 'What small stack helps me think, create, build, and automate?', 92, 438, 470, 28, { size: 18 });
  footer(slide, ctx, 2);
  return slide;
}
