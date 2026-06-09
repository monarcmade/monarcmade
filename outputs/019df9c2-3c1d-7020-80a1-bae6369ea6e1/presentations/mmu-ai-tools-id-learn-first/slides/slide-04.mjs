import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'TOOL 1');
  title(slide, ctx, 'Learn one thinking model deeply before adding more.', 92, 48, 820);
  rect(slide, ctx, 88, 266, 466, 210, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'Use it for', 122, 302, 180, 22, { size: 18, bold: true, color: style.gold });
  addText(slide, ctx, '• Brainstorming\n• Research questions\n• Outlines\n• Decisions\n• Scripts\n• Strategy', 122, 350, 280, 118, { size: 22 });
  rect(slide, ctx, 674, 210, 392, 300, '#102533', { lineColor: style.line, weight: 1 });
  addText(slide, ctx, 'Practice prompt', 714, 250, 220, 22, { size: 18, bold: true, color: style.cyan2 });
  addText(slide, ctx, '“Ask me questions until you understand my goal, then create a practical action plan I can execute this week.”', 714, 310, 300, 120, { size: 27, face: style.serif });
  footer(slide, ctx, 4);
  return slide;
}
