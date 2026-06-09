import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide10(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "NEXT 7 DAYS");
 title(slide, ctx, "Publish, measure, then improve the offer."); subtitle(slide, ctx, "The goal is not perfection. The goal is a first signal: views, comments, replies, email signups, and course interest."); rect(slide, ctx, 86,322,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 92,324,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Restart site and confirm /blog", 132,319,330,34,{size:18,bold:true,color:style.ink});rect(slide, ctx, 536,322,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 542,324,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Record video from this deck", 582,319,330,34,{size:18,bold:true,color:style.ink});rect(slide, ctx, 86,394,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 92,396,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Post YouTube + 3 Shorts", 132,391,330,34,{size:18,bold:true,color:style.ink});rect(slide, ctx, 536,394,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 542,396,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Link to Monarc University waitlist", 582,391,330,34,{size:18,bold:true,color:style.ink});rect(slide, ctx, 86,466,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 92,468,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Track comments and questions", 132,463,330,34,{size:18,bold:true,color:style.ink});rect(slide, ctx, 536,466,28,28,'#0D2532',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, '✓', 542,468,20,20,{size:15,bold:true,color:style.cyan}); addText(slide, ctx, "Use questions for video #2", 582,463,330,34,{size:18,bold:true,color:style.ink});
 note(slide, ctx, "This is the action slide. After publishing, the audience tells you what lesson to make next.");
 footer(slide, ctx, 10);
 return slide;
}
