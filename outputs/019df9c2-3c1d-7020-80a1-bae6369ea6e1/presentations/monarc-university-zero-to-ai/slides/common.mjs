export const style = { bg:'#081018', panel:'#101A24', ink:'#F4F8FB', muted:'#95A7B8', cyan:'#00A6D6', cyan2:'#B7F3FF', gold:'#D6A84A', paper:'#F5F8FB', dark:'#081018', line:'#243241', red:'#FF6262', green:'#66D98B', sans:'Avenir Next', serif:'Georgia' };

export function addText(slide, ctx, text, x, y, w, h, opts={}) {
  return ctx.addText(slide, { text: String(text ?? ''), left:x, top:y, width:w, height:h, fontSize:opts.size ?? 24, color:opts.color ?? style.ink, bold:!!opts.bold, typeface:opts.face ?? style.sans, align:opts.align ?? 'left', valign:opts.valign ?? 'top', fill:opts.fill ?? '#00000000', line:opts.line ?? ctx.line(), insets:opts.insets ?? {left:0,right:0,top:0,bottom:0}, name:opts.name });
}
export function rect(slide, ctx, x,y,w,h, fill, opts = {}) { return ctx.addShape(slide, { left:x, top:y, width:w, height:h, geometry:opts.geometry ?? 'rect', fill, line:opts.line ?? ctx.line(opts.lineColor ?? '#00000000', opts.weight ?? 0), name:opts.name }); }
export function line(slide, ctx, x,y,w, color=style.cyan, weight=2) { return rect(slide, ctx, x,y,w,weight,color); }
export function bg(slide, ctx) { rect(slide, ctx, 0,0,1280,720,style.bg); rect(slide, ctx, 880,-120,520,520,'#083044'); rect(slide, ctx, -120,520,420,260,'#0B2432'); }
export function kicker(slide, ctx, k) { line(slide, ctx, 62,58,44,style.cyan,3); addText(slide, ctx, k, 118,50,360,26,{size:11,bold:true,color:style.cyan, name:'kicker-label'}); }
export function title(slide, ctx, t, y=94, size=42) { addText(slide, ctx, t, 62,y,780,116,{size,bold:true,face:style.serif,color:style.ink}); }
export function subtitle(slide, ctx, s, y=224, w=650) { addText(slide, ctx, s, 64,y,w,78,{size:18,color:style.muted}); }
export function footer(slide, ctx, n) { addText(slide, ctx, 'Monarc University launch kit', 64,676,360,18,{size:9,color:'#607080'}); addText(slide, ctx, String(n).padStart(2,'0'), 1160,674,54,20,{size:10,color:'#607080',align:'right'}); }
export function pill(slide, ctx, text, x,y,w=180) { rect(slide, ctx, x,y,w,34,'#0D2532',{lineColor:'#164356',weight:1}); addText(slide, ctx, text, x+14,y+9,w-28,16,{size:10,bold:true,color:style.cyan2}); }
export function note(slide, ctx, text) { rect(slide, ctx, 876,510,318,92,'#0D2532',{lineColor:'#1B5366',weight:1}); addText(slide, ctx, 'SPEAKER NOTE', 898,528,120,14,{size:9,bold:true,color:style.gold}); addText(slide, ctx, text, 898,550,268,40,{size:11,color:style.muted}); }
