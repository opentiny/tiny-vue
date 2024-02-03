export default {
  templates: [
    // size
    '(w|h|wp|hp|box|left|right|top|bottom)<nums>',
    '(m|p)(x|y|r|l|b|t)<nums>',
    '(m|p)(x|y|r|l|b|t)-auto',

    // color
    '(c|bg)-<colors>',
    '(c|bg)#<nums>',

    // font
    '(f|lh)<nums>',
    'fw-<fontweights>',
    'text-<aligns>',
    'text-<textlines>',
    'text-<textlines>-<textlinestyles>',
    'ts-<sizes>',

    // border
    '(b|nb)-<borders>',
    'b-<borders>-<colors>',
    'b-<borders>#<nums>',
    'bs-<borderStyles>',
    'br-<sizes>',
    'br-circle',
    'bs-<sizes>', // box-shadow

    // layout
    'd-<displays>',
    '<positions>',
    '(abs|fixed)-0',
    'f-(r|c)',
    'f-pos-<pos>',
    'f-box-<box>',
    'f-<wraps>',
    'fi-<num>',
    'f-center',

    // utils
    'ellipsis',
    'ellipsis<nums>',
    'cur-<cursors>',
    'of(|x|y)<overflows>',
    'img-<imagefits>',
    'z-<nums>',
    'op<nums>',
    '(noselect|allselect|noevent|hide|show)',

    // transform
    'trans',
    'to-<transOrigins><transOrigins>',
    'tt<signnums>',
    'tt<signnums>#<signnums>',
    'tr<signnums>',
    'ts<nums>',

    // animations
    'ani-<animations>-<aniProps>#<nums>#<nums>',
    'ani-(l|last)#<nums>s',
    'ani-(d|delay)#<nums>s',
    'ani-(c|count)#<nums>',
    'ani-(c|count)#(infinite|loop|keep)',
    'ani-(round|normal)',
    'ani-stop-(stay|none|both|start)',
    'ani-(f|fun|function)-(ease|in|out|inout|linear)',
    'ani-(f|fun|function)-step<nums>',
    'ani-(run|pause)'
  ],
  shorthands: {
    nums: '(0|1|2|3|4|5|6|7|8|9)',
    signnums:'(-|0|1|2|3|4|5|6|7|8|9)',

    colors:
      '(white|black|main|mainless|second|secondless|light|lightless|\
primary|success|warning|error|primaryless|successless|warningless|errorless)',

    fontweights: '(bold|thin|normal|100|200|300|400|500|600|700|800|900)',
    aligns: '(right|left|center)',

    textlines: '(underline|overline|through|none)',
    textlinestyles: '(solid|double|dotted|dashed|wavy)',
    sizes: '(sm|lg)',

    borders: '(a|r|l|b|t)',
    borderStyles: '(none|dotted|dashed|solid|double|groove|ridge|inset|outset)',

    displays: '(none|block|flex|inline|grid|ib|if|ig)',
    positions: '(rel|abs|fixed|sticky|static)',
    pos: '(start|center|end|around|between|evenly|stretch)',
    box: '(start|center|end|stretch)',
    wraps: '(wrap|nowrap)',

    overflows:'(auto|scroll|hidden|visible)',
    cursors:'(def|hand|disable)',
    imagefits:'(cover|contain|fill)',

    transOrigins:'(c|l|t|r|b)',
    animations:'(line|bounce|shake)',
    aniProps:'(width|height|opacity)'
  }
}
