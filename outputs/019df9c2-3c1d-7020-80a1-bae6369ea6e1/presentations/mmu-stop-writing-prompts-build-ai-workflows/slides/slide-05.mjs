import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'EXAMPLE');
  title(slide, ctx, 'Turn content creation into a workflow, not a blank page.', 92, 44, 860);
  rect(slide, ctx, 82, 236, 430, 286, '#180F12', { lineColor: '#55313A', weight: 1 });
  addText(slide, ctx, 'Weak prompt', 116, 270, 180, 24, { size: 22, bold: true, color: style.red });
  addText(slide, ctx, '“Write me a YouTube script about AI.”', 116, 342, 330, 68, { size: 28, face: style.serif });
  rect(slide, ctx, 620, 196, 500, 370, style.panel, { lineColor: '#1B5366', weight: 1 });
  addText(slide, ctx, 'Workflow prompt', 656, 228, 220, 24, { size: 22, bold: true, color: style.cyan2 });
  addText(slide, ctx, '1. Define the viewer\n2. Pick one painful problem\n3. Write 5 hooks\n4. Build a 7-minute script\n5. Pull 3 Shorts cutdowns\n6. Create title and thumbnail angles', 656, 292, 390, 190, { size: 21 });
  footer(slide, ctx, 5);
  return slide;
}
