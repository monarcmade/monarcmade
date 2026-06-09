import { style, addText, rect, line, bg, kicker, title, subtitle, footer, pill, note } from './common.mjs';

export async function slide04(presentation, ctx) {
 const slide = presentation.slides.add();
 bg(slide, ctx);
 kicker(slide, ctx, "ROADMAP");
 title(slide, ctx, "Teach AI in five stages, not fifty tabs."); subtitle(slide, ctx, "A beginner-friendly path that becomes the structure of the video and the course."); line(slide, ctx, 152,350,100,style.cyan,8); addText(slide, ctx, '1', 78,337,42,34,{size:28,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "Prompting basics", 152,333,360,26,{size:20,bold:true});line(slide, ctx, 152,398,226,style.gold,8); addText(slide, ctx, '2', 78,385,42,34,{size:28,bold:true,face:style.serif,color:style.gold}); addText(slide, ctx, "Workflows & context", 152,381,360,26,{size:20,bold:true});line(slide, ctx, 152,446,352,style.cyan,8); addText(slide, ctx, '3', 78,433,42,34,{size:28,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "Automations", 152,429,360,26,{size:20,bold:true});line(slide, ctx, 152,494,478,style.gold,8); addText(slide, ctx, '4', 78,481,42,34,{size:28,bold:true,face:style.serif,color:style.gold}); addText(slide, ctx, "Agents & tools", 152,477,360,26,{size:20,bold:true});line(slide, ctx, 152,542,604,style.cyan,8); addText(slide, ctx, '5', 78,529,42,34,{size:28,bold:true,face:style.serif,color:style.cyan}); addText(slide, ctx, "Projects that sell", 152,525,360,26,{size:20,bold:true}); rect(slide, ctx,760,300,300,238,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, 'MONARC UNIVERSITY',790,330,220,20,{size:10,bold:true,color:style.gold}); addText(slide, ctx, 'Beginner track → builder track → paid implementation confidence',790,370,220,94,{size:24,bold:true,face:style.serif});
 note(slide, ctx, "Walk through the five stages quickly. Make the viewer feel relief: finally, there is a sequence.");
 footer(slide, ctx, 4);
 return slide;
}
