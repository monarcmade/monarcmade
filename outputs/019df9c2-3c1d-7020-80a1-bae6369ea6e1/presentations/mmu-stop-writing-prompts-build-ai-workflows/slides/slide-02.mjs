import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE PROBLEM');
  title(slide, ctx, 'Most people are collecting prompts instead of building systems.', 92, 40, 760);
  addText(slide, ctx, 'Prompt collecting feels productive, but it usually creates a folder full of disconnected commands.', 66, 246, 620, 52, { size: 18, color: style.muted });
  rect(slide, ctx, 760, 118, 360, 360, '#180F12', { lineColor: '#55313A', weight: 1 });
  addText(slide, ctx, 'Random prompt', 796, 154, 260, 28, { size: 24, bold: true, color: style.red });
  addText(slide, ctx, '• Works once\n• No context memory\n• No repeatable quality\n• Hard to hand off\n• Easy to forget', 796, 218, 260, 170, { size: 20, color: style.ink });
  rect(slide, ctx, 66, 382, 550, 92, style.panel, { lineColor: style.line, weight: 1 });
  addText(slide, ctx, 'Audience pain', 92, 404, 160, 18, { size: 11, bold: true, color: style.gold });
  addText(slide, ctx, '“I know AI can help, but I do not know how to make it reliable.”', 92, 430, 470, 28, { size: 18 });
  footer(slide, ctx, 2);
  return slide;
}
