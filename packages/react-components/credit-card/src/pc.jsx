
    import { renderless, api } from '@opentiny/vue-renderless/credit-card/vue'
    import '@opentiny/vue-theme/credit-card/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function creditCard(props) {
      const {labels,fields,isCardNumberMasked,backgroundImage} = props
      const defaultProps = {
        ...$props,
        ...props,
        labels,fields,isCardNumberMasked,backgroundImage
      }
      const { ref, current: vm, parent } = useVm()
      const focusElement=useRef()
const cardDate=useRef()
      const { state, } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[focusElement,cardDate]
      })
      return (
          
<div   className={vc({ '-active': state.isCardFlipped },'credit-card-item')}>    
<div  className="credit-card-item__side -front">      
<div   style={state.focusElementStyle} ref={focusElement} v-ref="focusElement" className={vc({ '-active': state.focusElementStyle },'credit-card-item__focus')}></div>

      
<div  className="credit-card-item__cover">        
<img  src={backgroundImage || images.background} className="credit-card-item__bg"></img>

      </div>

      
<div  className="credit-card-item__wrapper">        
<div  className="credit-card-item__top">          
<img src={images.chip}  className="credit-card-item__chip"></img>

          
<div  className="credit-card-item__type">            
<transition name="slide-fade-up">              
<img style={{display:state.cardType?'block':'none'}}  src={images[state.cardType]} key={state.cardType} alt className="credit-card-item__typeImg"></img>

            </transition>

          </div>

        </div>

        
<label for={fields.cardNumber}  ref={fields.cardNumber} className="credit-card-item__number">          

  {
    state.currentPlaceholder.map((n, $index)=>(
      <span  key={$index}>            
<transition name="slide-fade-up">              
<div style={{display:getIsNumberMasked($index, n)?'block':'none'}}  className="credit-card-item__numberItem">*</div>

              
<div style={{display:!(getIsNumberMasked($index, n))?'block':'none'}}   key={state.currentPlaceholder} className={vc({ '-active': n.trim() === '' },'credit-card-item__numberItem')}>                
{labels.cardNumber[$index]}

              </div>

              
<div style={{display:!(!(getIsNumberMasked($index, n)))?'block':'none'}}   key={state.currentPlaceholder + 1} className={vc({ '-active': n.trim() === '' },'credit-card-item__numberItem')}>                
{n}

              </div>

            </transition>

          </span>
    ))
  }
  

        </label>

        
<div  className="credit-card-item__content">          
<label for={fields.cardName}  ref={fields.cardName} className="credit-card-item__info">            
<div  className="credit-card-item__holder">Card Holder</div>

            
<transition name="slide-fade-up">              
<div  style={{display:labels.cardName.length?'block':'none'}} key="1" className="credit-card-item__name">                
<transitionGroup name="slide-fade-right">                  

  {
    labels.cardName.replace(/\s\s+/g, ' ').map((n, $index)=>(
      <span   key={$index + 1} className="credit-card-item__nameItem">{n}</span>
    ))
  }
  

                </transitionGroup>

              </div>

              
<div  style={{display:!(labels.cardName.length)?'block':'none'}} key="2" className="credit-card-item__name">Full Name</div>

            </transition>

          </label>

          
<div  ref={cardDate} v-ref="cardDate" className="credit-card-item__date">            
<label  for={fields.cardMonth} className="credit-card-item__dateTitle">Expires</label>

            
<label  for={fields.cardMonth} className="credit-card-item__dateItem">              
<transition name="slide-fade-up">                
<span style={{display:labels.cardMonth?'block':'none'}} key={labels.cardMonth} text></span>

                
<span style={{display:!(labels.cardMonth)?'block':'none'}} key="2" text></span>

              </transition>

            </label>

            
<span >/</span>

            
<label  for="cardYear" className="credit-card-item__dateItem">              
<transition name="slide-fade-up">                
<span style={{display:labels.cardYear?'block':'none'}} key={labels.cardYear} text></span>

                
<span style={{display:!(labels.cardYear)?'block':'none'}} key="2" text></span>

              </transition>

            </label>

          </div>

        </div>

      </div>

    </div>

    
<div  className="credit-card-item__side -back">      
<div  className="credit-card-item__cover">        
<img src={backgroundImage || images.background}  className="credit-card-item__bg"></img>

      </div>

      
<div  className="credit-card-item__band"></div>

      
<div  className="credit-card-item__cvv">        
<div  className="credit-card-item__cvvTitle">CVV</div>

        
<div  className="credit-card-item__cvvBand">          

  {
    labels.cardCvv.map((n, $index)=>(
      <span  key={$index}>*</span>
    ))
  }
  

        </div>

        
<div  className="credit-card-item__type">          
<img src={images[state.cardType]} style={{display:state.cardType?'block':'none'}}  className="credit-card-item__typeImg"></img>

        </div>

      </div>

    </div>

  </div>


      );
    }
    