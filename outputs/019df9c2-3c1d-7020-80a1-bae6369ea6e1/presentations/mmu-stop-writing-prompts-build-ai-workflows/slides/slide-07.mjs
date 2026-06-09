import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE ROADMAP');
  title(slide, ctx, 'Monarc University teaches the workflow behind the tool.', 92, 46, 900);
  const phases = ['AI foundations', 'Prompt systems', 'APIs and apps', 'RAG', 'Agents', 'Capstone'];
  phases.forEach((phase, i) => {
    const x = 90 + i * 178;
    rect(slide, ctx, x, 318, 128, 128, i === 1 ? '#103448' : style.panel, { lineColor: i === 1 ? style.cyan : style.line, weight: i === 1 ? 2 : 1 });
    addText(slide, ctx, String(i + 1).padStart(2, '0'), x + 20, 340, 44, 24, { size: 18, bold: true, color: style.gold });
    addText(slide, ctx, phase, x + 20, 382, 88, 44, { size: 15, bold: true });
  });
  addText(slide, ctx, 'The course is not “here are prompts.” It is “here is how to think, design, build, and ship with AI.”', 164, 526, 860, 50, { size: 24, bold: true, align: 'center' });
  footer(slide, ctx, 7);
  return slide;
}
