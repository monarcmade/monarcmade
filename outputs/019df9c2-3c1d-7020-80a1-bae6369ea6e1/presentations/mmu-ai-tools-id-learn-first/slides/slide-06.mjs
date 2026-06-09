import { style, addText, rect, bg, kicker, title, footer } from './common.mjs';

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, 'TOOL 3');
  title(slide, ctx, 'Automation tools make AI useful outside the chat window.', 92, 48, 870);
  const steps = [
    ['Form', 'A person submits information.'],
    ['AI', 'The model summarizes, scores, drafts, or classifies.'],
    ['App', 'The result goes to Airtable, Slack, email, CRM, or docs.'],
    ['Human', 'A person reviews and takes the final action.']
  ];
  steps.forEach(([h, b], i) => {
    const x = 100 + i * 274;
    rect(slide, ctx, x, 304, 210, 146, i === 1 ? '#103448' : style.panel, { lineColor: i === 1 ? style.cyan : style.line, weight: i === 1 ? 2 : 1 });
    addText(slide, ctx, h, x + 22, 330, 130, 28, { size: 24, bold: true, color: i === 1 ? style.cyan2 : style.ink });
    addText(slide, ctx, b, x + 22, 378, 160, 44, { size: 13, color: style.muted });
  });
  addText(slide, ctx, 'This is where AI starts saving real time because it enters the workflow.', 230, 542, 800, 36, { size: 24, bold: true, align: 'center' });
  footer(slide, ctx, 6);
  return slide;
}
