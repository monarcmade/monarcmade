import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'TOOL 2');
  title(slide, ctx, 'Use a coding assistant to learn how AI becomes software.', 92, 48, 860);
  addText(slide, ctx, 'Even if you are not trying to become a full-time engineer, tools like Cursor and Claude Code help you understand how AI connects to real products.', 66, 230, 720, 58, { size: 20, color: style.muted });
  const rows = [
    ['Beginner use', 'Edit pages, inspect code, generate simple components.'],
    ['Builder use', 'Create prototypes, APIs, dashboards, and automations.'],
    ['Business use', 'Understand what is possible before hiring or scoping.']
  ];
  rows.forEach(([h, b], i) => {
    const y = 350 + i * 82;
    rect(slide, ctx, 104, y, 880, 56, style.panel, { lineColor: style.line, weight: 1 });
    addText(slide, ctx, h, 132, y + 16, 190, 20, { size: 16, bold: true, color: style.cyan2 });
    addText(slide, ctx, b, 350, y + 16, 560, 20, { size: 16, color: style.ink });
  });
  footer(slide, ctx, 5);
  return slide;
}
