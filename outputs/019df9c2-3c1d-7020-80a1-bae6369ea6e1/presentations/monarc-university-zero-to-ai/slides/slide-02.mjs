import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide02(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "THE PROBLEM");
 title(slide, ctx, "Beginners are not lazy. They are overloaded."); subtitle(slide, ctx, "Most AI advice jumps between tools, trends, and hype. Monarc University wins by giving people the order of operations."); rect(slide, ctx, 70,356,170,118,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, '01', 92,378,42,24,{size:22,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "Too many tools", 92,420,120,34,{size:18,bold:true});rect(slide, ctx, 290,356,170,118,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, '02', 312,378,42,24,{size:22,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "No learning order", 312,420,120,34,{size:18,bold:true});rect(slide, ctx, 510,356,170,118,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, '03', 532,378,42,24,{size:22,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "No projects", 532,420,120,34,{size:18,bold:true});rect(slide, ctx, 730,356,170,118,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, '04', 752,378,42,24,{size:22,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "No confidence", 752,420,120,34,{size:18,bold:true});rect(slide, ctx, 950,356,170,118,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, '05', 972,378,42,24,{size:22,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "No business use", 972,420,120,34,{size:18,bold:true}); addText(slide, ctx, 'The video hook: “If AI feels confusing, it is probably because you learned it in the wrong order.”', 72,540,700,54,{size:20,color:style.cyan2});
 note(slide, ctx, "Say: If you feel behind, the problem is not you. The problem is that nobody gave you a clean path.");
 footer(slide, ctx, 2);
 return slide;
}
