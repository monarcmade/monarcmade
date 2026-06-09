import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'WHAT NOT TO DO');
  title(slide, ctx, 'Do not measure progress by how many tools you know.', 92, 48, 850);
  rect(slide, ctx, 104, 256, 430, 236, '#180F12', { lineColor: '#55313A', weight: 1 });
  addText(slide, ctx, 'Wrong scoreboard', 142, 294, 240, 26, { size: 24, bold: true, color: style.red });
  addText(slide, ctx, '“I tried every new AI app this month.”', 142, 372, 300, 82, { size: 30, face: style.serif });
  rect(slide, ctx, 650, 220, 430, 304, '#102533', { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'Right scoreboard', 688, 258, 240, 26, { size: 24, bold: true, color: style.green });
  addText(slide, ctx, '“I built one workflow that saves time, creates content, helps clients, or supports my business.”', 688, 334, 310, 124, { size: 30, face: style.serif });
  footer(slide, ctx, 7);
  return slide;
}
