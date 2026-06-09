import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide09(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "CTA LANGUAGE");
 title(slide, ctx, "Sell the next step like an invitation."); subtitle(slide, ctx, "The CTA should sound calm and practical: if you want the roadmap, join the first cohort."); line(slide, ctx, 86,334,36,style.cyan,3); addText(slide, ctx, "Join the first Monarc University cohort", 144,320,680,32,{size:24,bold:true,face:style.serif,color:style.ink});line(slide, ctx, 86,392,36,style.gold,3); addText(slide, ctx, "Get the AI roadmap and projects", 144,378,680,32,{size:24,bold:true,face:style.serif,color:style.ink});line(slide, ctx, 86,450,36,style.cyan,3); addText(slide, ctx, "Learn AI by building useful systems", 144,436,680,32,{size:24,bold:true,face:style.serif,color:style.ink});line(slide, ctx, 86,508,36,style.gold,3); addText(slide, ctx, "Start with the beginner track", 144,494,680,32,{size:24,bold:true,face:style.serif,color:style.ink}); addText(slide, ctx, 'On video: “If you want the full roadmap, projects, and live help, I’m opening the first Monarc University cohort.”', 88,584,760,44,{size:18,color:style.cyan2});
 note(slide, ctx, "End with confidence. Do not apologize for selling. You gave value; now invite them.");
 footer(slide, ctx, 9);
 return slide;
}
