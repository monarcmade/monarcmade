import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide08(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "THUMBNAILS");
 title(slide, ctx, "Each platform needs one clear promise."); subtitle(slide, ctx, "The thumbnail should sell the result, not decorate the video. Keep text short and high contrast."); rect(slide, ctx, 78,328,360,82,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "YouTube", 102,350,96,18,{size:10,bold:true,color:style.gold}); addText(slide, ctx, "AI FROM ZERO", 210,342,190,30,{size:21,bold:true,color:style.ink});rect(slide, ctx, 518,328,360,82,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "Shorts", 542,350,96,18,{size:10,bold:true,color:style.gold}); addText(slide, ctx, "START HERE", 650,342,190,30,{size:21,bold:true,color:style.ink});rect(slide, ctx, 78,444,360,82,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "IG square", 102,466,96,18,{size:10,bold:true,color:style.gold}); addText(slide, ctx, "LEARN AI", 210,458,190,30,{size:21,bold:true,color:style.ink});rect(slide, ctx, 518,444,360,82,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "LinkedIn", 542,466,96,18,{size:10,bold:true,color:style.gold}); addText(slide, ctx, "2026 AI ROADMAP", 650,458,190,30,{size:21,bold:true,color:style.ink});
 note(slide, ctx, "Use the exported PNGs as first drafts. Later we can add your face/headshot for stronger trust.");
 footer(slide, ctx, 8);
 return slide;
}
