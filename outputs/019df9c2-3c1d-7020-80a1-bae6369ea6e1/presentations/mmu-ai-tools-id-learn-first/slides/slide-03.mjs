import { style, addText, bg, kicker, title, footer, toolCard } from './common.mjs';

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'THE FIRST STACK');
  title(slide, ctx, 'Start with five tool categories, not fifty tools.', 92, 48, 830);
  toolCard(slide, ctx, 'Thinking', 'ChatGPT or Claude for brainstorming, planning, and reasoning.', 78, 248, 330, style.cyan);
  toolCard(slide, ctx, 'Building', 'Cursor or Claude Code for turning ideas into working prototypes.', 476, 248, 330, style.green);
  toolCard(slide, ctx, 'Automation', 'Zapier, Make, or n8n for moving work between apps.', 874, 248, 330, style.gold);
  toolCard(slide, ctx, 'Knowledge', 'NotebookLM, custom RAG, or docs assistants for your files.', 278, 432, 330, style.cyan2);
  toolCard(slide, ctx, 'Publishing', 'Canva, CapCut, Descript, or native platform tools for content.', 674, 432, 330, style.green);
  addText(slide, ctx, 'This keeps the learner focused on jobs-to-be-done instead of tool collecting.', 250, 602, 780, 30, { size: 20, bold: true, align: 'center' });
  footer(slide, ctx, 3);
  return slide;
}
