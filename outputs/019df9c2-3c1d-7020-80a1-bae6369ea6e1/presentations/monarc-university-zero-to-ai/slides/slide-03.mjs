import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide03(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "THE PROMISE");
 title(slide, ctx, "The transformation is practical AI confidence."); subtitle(slide, ctx, "Position the course around outcomes a beginner can feel: save time, build small automations, understand agents, and ship useful projects."); rect(slide, ctx,70,330,430,210,'#180F16',{lineColor:'#55303E',weight:1}); rect(slide, ctx,548,330,430,210,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, "Before", 105,360,330,30,{size:22,bold:true,color:style.red});addText(slide, ctx, "Prompt guessing", 105,412,330,30,{size:18,bold:false,color:style.muted});addText(slide, ctx, "Tool hopping", 105,464,330,30,{size:18,bold:false,color:style.muted});addText(slide, ctx, "AI feels random", 105,516,330,30,{size:18,bold:false,color:style.muted}); addText(slide, ctx, "After", 584,360,330,30,{size:22,bold:true,color:style.green});addText(slide, ctx, "Clear workflow", 584,412,330,30,{size:18,bold:false,color:style.ink});addText(slide, ctx, "Useful projects", 584,464,330,30,{size:18,bold:false,color:style.ink});addText(slide, ctx, "AI becomes a skill", 584,516,330,30,{size:18,bold:false,color:style.ink}); addText(slide, ctx, 'Course promise: learn the repeatable workflow behind useful AI systems.', 72,572,640,34,{size:19,color:style.gold,bold:true});
 note(slide, ctx, "This is where Monarc University starts sounding valuable without sounding salesy.");
 footer(slide, ctx, 3);
 return slide;
}
