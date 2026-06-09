export const style = {
  bg: '#071018',
  panel: '#0E1A24',
  panel2: '#132433',
  ink: '#F5F8FB',
  muted: '#94A6B8',
  cyan: '#00A6D6',
  cyan2: '#B7F3FF',
  gold: '#D6A84A',
  green: '#62D68B',
  red: '#FF6969',
  line: '#243545',
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
  rect(slide, ctx, 900, -120, 500, 500, '#082E41');
  rect(slide, ctx, -120, 540, 420, 240, '#0B2432');
}

export function kicker(slide, ctx, text) {
  line(slide, ctx, 62, 58, 44, style.cyan, 3);
  addText(slide, ctx, text, 118, 50, 440, 26, { size: 11, bold: true, color: style.cyan, name: 'kicker-label' });
}

export function title(slide, ctx, text, y = 94, size = 42, w = 820) {
  addText(slide, ctx, text, 62, y, w, 128, { size, bold: true, face: style.serif, color: style.ink });
}

export function subtitle(slide, ctx, text, y = 232, w = 660) {
  addText(slide, ctx, text, 64, y, w, 78, { size: 18, color: style.muted });
}

export function pill(slide, ctx, text, x, y, w = 210) {
  rect(slide, ctx, x, y, w, 34, '#0D2532', { lineColor: '#164356', weight: 1 });
  addText(slide, ctx, text, x + 14, y + 9, w - 28, 16, { size: 10, bold: true, color: style.cyan2 });
}

export function footer(slide, ctx, n) {
  addText(slide, ctx, 'Monarc University - Video Package 2', 64, 676, 380, 18, { size: 9, color: '#607080' });
  addText(slide, ctx, String(n).padStart(2, '0'), 1160, 674, 54, 20, { size: 10, color: '#607080', align: 'right' });
}

export function step(slide, ctx, num, heading, body, x, y, w = 342) {
  rect(slide, ctx, x, y, w, 120, style.panel, { lineColor: style.line, weight: 1 });
  addText(slide, ctx, num, x + 18, y + 18, 44, 26, { size: 18, bold: true, color: style.cyan });
  addText(slide, ctx, heading, x + 68, y + 18, w - 88, 24, { size: 17, bold: true });
  addText(slide, ctx, body, x + 20, y + 58, w - 40, 44, { size: 12, color: style.muted });
}
