import { style, addText, rect, line, bg, kicker, title, footer, pill } from './common.mjs';

export async function slide08(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'CALL TO ACTION');
  title(slide, ctx, 'Apply if you want the guided version.', 112, 54, 760);
  addText(slide, ctx, 'If you are tired of guessing what to learn next, Monarc University gives you the roadmap, the labs, the projects, and the capstone.', 66, 270, 720, 72, { size: 24, color: style.muted });
  line(slide, ctx, 66, 382, 680, style.cyan, 2);
  addText(slide, ctx, 'Apply for the founding cohort at monarcmade.com/university', 66, 420, 690, 48, { size: 28, bold: true });
  rect(slide, ctx, 844, 168, 284, 260, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'CTA STACK', 876, 202, 160, 18, { size: 11, bold: true, color: style.gold });
  pill(slide, ctx, 'Apply', 876, 244, 196);
  pill(slide, ctx, 'Build a workflow', 876, 292, 196);
  pill(slide, ctx, 'Ship a capstone', 876, 340, 196);
  footer(slide, ctx, 8);
  return slide;
}
