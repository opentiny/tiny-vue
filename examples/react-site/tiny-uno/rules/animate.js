// 所有的动画效果
import { toEscapedSelector as e } from 'unocss';
const _s = {
  run: 'running',
  pause: 'paused', //

  none: 'none',
  both: 'both',
  stay: 'forwards',
  start: 'backwards',

  ease: 'ease',
  in: 'ease-in',
  out: 'ease-out',
  inout: 'ease-in-out',
  linear: 'linear',
};
import * as keyframes from './keyframes/index';
export default function builder(option) {
  return {
    rules: [
      // 动画效果及动画影响属性  ani-bounce-width#0px#-100px
      // 操作的属性只能是纯数值+单位或无单位。只能操作1个属性
      [
        /^ani-(line|bounce|shake)-(\w+)#(-?\w+)#(-?\w+)$/,
        ([, name, prop, from, to], { rawSelector, currentSelector, variantHandlers, theme }) => {
          return `
          ${e(currentSelector)}{
            animation-name:${name + prop};
          }
          @keyframes ${name + prop} {
            ${keyframes[name](prop, from, to)}
          }
          `;
        },
      ],
      // 时长 last   ani-l#3s           ani-last#3s                     必填项
      [/^ani-(l|last)#(\d+\.?\d*)s$/, ([, tag, time]) => ({ 'animation-duration': `${time}s` })],
      // 延迟 delay  ani-d#3s  ani-d#-3s  ani-delay#-3s                 默认0
      [/^ani-(d|delay)#(-?\d+\.?\d*)s$/, ([, tag, time]) => ({ 'animation-delay': `${time}s` })],
      // 次数  count  ani-c#3  ani-count#3.5 ani-c#infinite  ani-c#keep  默认1     小数表示执行一半就结束
      [/^ani-(c|count)#(\d+\.?\d*)$/, ([, tag, time]) => ({ 'animation-iteration-count': `${time}` })],
      [/^ani-(c|count)#(infinite|keep)$/, ([, tag]) => ({ 'animation-iteration-count': 'infinite' })],

      // 是否循环往返   ani-round    添加则往返。                          默认为： ani-normal 。不添加则每次循环，即每个周期都从头开始
      ['ani-round', { 'animation-direction': 'alternate' }],
      ['ani-normal', { 'animation-direction': 'normal' }],

      // 结束时停住位置，    ani-stop-stay   ani-stop-none       默认为： 结束时，清除动画属性.   有delay时间时，  stop-start表示，未开始时，位置于0%
      [/^ani-stop-(stay|none|both|start)$/, ([, pos]) => ({ 'animation-fill-mode': `${_s[pos]}` })],

      // 动画函数    ani-fun-ease                       默认值 ease
      [/^ani-(f|fun|function)-(ease|in|out|inout|linear)$/, ([, tag, pos]) => ({ 'animation-timing-function': `${_s[pos]}` })],
      //            ani-fun-step4
      [/^ani-(f|fun|function)-step(\d)$/, ([, tag, num]) => ({ 'animation-timing-function': `steps(${num},start)` })],
      // 动画开关，    ani-run ani-pause          不添加则结束时，清除动画属性  【ani-stop-start还不行】
      [/^ani-(run|pause)$/, ([, pos]) => ({ 'animation-play-state': `${_s[pos]}` })],
    ],
    shortcuts: [],
  };
}
