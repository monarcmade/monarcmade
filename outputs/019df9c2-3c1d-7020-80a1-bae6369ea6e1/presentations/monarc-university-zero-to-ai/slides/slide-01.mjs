import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide01(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "MONARC UNIVERSITY");
 rect(slide, ctx, 810,76,360,210,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, 'FIRST VIDEO PACKAGE', 842,106,260,18,{size:11,bold:true,color:style.gold}); addText(slide, ctx, "How I’d learn AI from zero in 2026", 62,154,700,180,{size:56,bold:true,face:style.serif}); addText(slide, ctx, "A 7-minute sales video that teaches first, then invites beginners into the first cohort.", 66,360,640,64,{size:20,color:style.muted}); pill(slide, ctx, "Target length: 6-8 min", 842,150,260);pill(slide, ctx, "Offer: first cohort", 842,198,260);pill(slide, ctx, "CTA: join waitlist", 842,246,260); line(slide, ctx,64,474,650,style.cyan,2); addText(slide, ctx, 'Position the course as a roadmap for beginners who want practical AI skills, not hype.', 66,504,610,54,{size:20,color:style.ink});
 note(slide, ctx, "Open with the audience pain. Tell them this is the roadmap you wish you had if starting from zero today.");
 footer(slide, ctx, 1);
 return slide;
}
