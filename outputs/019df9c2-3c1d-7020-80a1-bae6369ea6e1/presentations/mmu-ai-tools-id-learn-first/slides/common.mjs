export const style = {
  bg: '#071018',
  panel: '#0E1A24',
  panel2: '#122A3A',
  ink: '#F5F8FB',
  muted: '#93A7B8',
  cyan: '#00A6D6',
  cyan2: '#B7F3FF',
  gold: '#D6A84A',
  green: '#64D98B',
  red: '#FF6969',
  line: '#263747',
  sans: 'Avenir Next',
  serif: 'Georgia'
};

export function addText(slide, ctx, text, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text: String(text ?? ''),
    left: x,
    top: y,
    width: w,
    height: h,
    fontSize: opts.size ?? 24,
    color: opts.color ?? style.ink,
    bold: !!opts.bold,
    typeface: opts.face ?? style.sans,
    align: opts.align ?? 'left',
    valign: opts.valign ?? 'top',
    fill: opts.fill ?? '#00000000',
    line: opts.line ?? ctx.line(),
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    name: opts.name
  });
}

export function rect(slide, ctx, x, y, w, h, fill, opts = {}) {
  return ctx.addShape(slide, {
    left: x,
    top: y,
    width: w,
    height: h,
    geometry: opts.geometry ?? 'rect',
    fill,
    line: opts.line ?? ctx.line(opts.lineColor ?? '#00000000', opts.weight ?? 0),
    name: opts.name
  });
}

export function line(slide, ctx, x, y, w, color = style.cyan, weight = 2) {
  return rect(slide, ctx, x, y, w, weight, color);
}

export function bg(slide, ctx) {
  rect(slide, ctx, 0, 0, 1280, 720, style.bg);
  rect(slide, ctx, 912, -120, 500, 500, '#083348');
  rect(slide, ctx, -120, 540, 420, 240, '#0B2432');
}

export function kicker(slide, ctx, text) {
  line(slide, ctx, 62, 58, 44, style.cyan, 3);
  addText(slide, ctx, text, 118, 50, 440, 26, { size: 11, bold: true, color: style.cyan, name: 'kicker-label' });
}

export function title(slide, ctx, text, y = 92, size = 44, w = 860) {
  addText(slide, ctx, text, 62, y, w, 132, { size, bold: true, face: style.serif, color: style.ink });
}

export function subtitle(slide, ctx, text, y = 238, w = 680) {
  addText(slide, ctx, text, 64, y, w, 80, { size: 18, color: style.muted });
}

export function pill(slide, ctx, text, x, y, w = 220) {
  rect(slide, ctx, x, y, w, 34, '#0D2532', { lineColor: '#164356', weight: 1 });
  addText(slide, ctx, text, x + 14, y + 9, w - 28, 16, { size: 10, bold: true, color: style.cyan2 });
}

export function footer(slide, ctx, n) {
  addText(slide, ctx, 'Monarc University - Video Package 3', 64, 676, 380, 18, { size: 9, color: '#607080' });
  addText(slide, ctx, String(n).padStart(2, '0'), 1160, 674, 54, 20, { size: 10, color: '#607080', align: 'right' });
}

export function toolCard(slide, ctx, heading, body, x, y, w = 330, accent = style.cyan) {
  rect(slide, ctx, x, y, w, 118, style.panel, { lineColor: style.line, weight: 1 });
  line(slide, ctx, x, y, w, accent, 3);
  addText(slide, ctx, heading, x + 20, y + 22, w - 40, 24, { size: 21, bold: true, color: style.ink });
  addText(slide, ctx, body, x + 20, y + 60, w - 40, 38, { size: 12, color: style.muted });
}
