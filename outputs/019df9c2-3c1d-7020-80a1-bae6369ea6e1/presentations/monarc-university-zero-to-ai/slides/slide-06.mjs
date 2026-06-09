import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide06(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "STARTER PRICING");
 title(slide, ctx, "Launch with simple first-cohort pricing."); subtitle(slide, ctx, "These are professional starter prices to validate demand. Adjust once curriculum and demand are proven."); rect(slide, ctx, 76,334,300,210,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "Starter", 104,362,190,22,{size:15,bold:true,color:style.gold}); addText(slide, ctx, "$197", 104,398,160,42,{size:36,bold:true,face:style.serif,color:style.ink}); addText(slide, ctx, "Self-paced beginner roadmap + project templates", 104,464,232,48,{size:13,color:style.muted});rect(slide, ctx, 428,334,300,210,'#0F2B39',{lineColor:'#00A6D6',weight:2}); addText(slide, ctx, "Builder", 456,362,190,22,{size:15,bold:true,color:style.gold}); addText(slide, ctx, "$497", 456,398,160,42,{size:36,bold:true,face:style.serif,color:style.ink}); addText(slide, ctx, "Course + live sessions + project reviews", 456,464,232,48,{size:13,color:style.muted});rect(slide, ctx, 780,334,300,210,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "Founding", 808,362,190,22,{size:15,bold:true,color:style.gold}); addText(slide, ctx, "$997", 808,398,160,42,{size:36,bold:true,face:style.serif,color:style.ink}); addText(slide, ctx, "Builder + small-group office hours + implementation help", 808,464,232,48,{size:13,color:style.muted}); addText(slide, ctx, 'Starter recommendation: launch “Founding Cohort” pricing for the first 25 students.', 78,586,760,28,{size:19,bold:true,color:style.cyan2});
 note(slide, ctx, "Frame pricing as beta/founding cohort. Scarcity should be honest: limited feedback capacity, not fake urgency.");
 footer(slide, ctx, 6);
 return slide;
}
