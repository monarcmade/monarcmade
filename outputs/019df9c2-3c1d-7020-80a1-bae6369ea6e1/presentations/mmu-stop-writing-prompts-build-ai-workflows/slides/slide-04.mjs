import { style, addText, rect, bg, kicker, title, footer, step } from './common.mjs';

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE FORMULA');
  title(slide, ctx, 'Use the five-part workflow prompt.', 92, 46, 780);
  step(slide, ctx, '01', 'Role', 'Tell AI who it is acting as and what standard it should use.', 78, 250);
  step(slide, ctx, '02', 'Context', 'Give background, audience, constraints, examples, and source material.', 468, 250);
  step(slide, ctx, '03', 'Task', 'State the job clearly: analyze, draft, score, summarize, plan, or rewrite.', 858, 250);
  step(slide, ctx, '04', 'Format', 'Define the exact structure: bullets, table, script, JSON, checklist, or brief.', 270, 432);
  step(slide, ctx, '05', 'Review', 'Ask it to check gaps, risks, assumptions, and ways to improve the result.', 660, 432);
  footer(slide, ctx, 4);
  return slide;
}
