import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide07(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "CONTENT ENGINE");
 title(slide, ctx, "One YouTube video becomes a week of distribution."); subtitle(slide, ctx, "The long-form video is the source asset. Every platform gets a native cut, not a lazy repost."); rect(slide, ctx,82,336,240,150,'#0D2532',{lineColor:'#1B5366',weight:2}); addText(slide, ctx, 'SOURCE',112,360,120,18,{size:10,bold:true,color:style.gold}); addText(slide, ctx, 'YouTube\n7 min',112,392,180,62,{size:34,bold:true,face:style.serif}); rect(slide, ctx, 400,314,170,74,'#101A24',{lineColor:'#243241',weight:1}); addText(slide, ctx, "3 Shorts", 420,336,130,24,{size:16,bold:true,color:style.ink});rect(slide, ctx, 610,314,170,74,'#101A24',{lineColor:'#243241',weight:1}); addText(slide, ctx, "LinkedIn lesson", 630,336,130,24,{size:16,bold:true,color:style.ink});rect(slide, ctx, 820,314,170,74,'#101A24',{lineColor:'#243241',weight:1}); addText(slide, ctx, "IG carousel", 840,336,130,24,{size:16,bold:true,color:style.ink});rect(slide, ctx, 400,426,170,74,'#101A24',{lineColor:'#243241',weight:1}); addText(slide, ctx, "Email invite", 420,448,130,24,{size:16,bold:true,color:style.ink});rect(slide, ctx, 610,426,170,74,'#101A24',{lineColor:'#243241',weight:1}); addText(slide, ctx, "Blog recap", 630,448,130,24,{size:16,bold:true,color:style.ink});
 note(slide, ctx, "This helps you stay consistent. Record once, repurpose deliberately.");
 footer(slide, ctx, 7);
 return slide;
}
