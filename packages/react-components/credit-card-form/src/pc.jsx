
    import { renderless, api } from '@opentiny/vue-renderless/credit-card-form/vue'
    import '@opentiny/vue-theme/credit-card-form/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function creditCard(props) {
      const {formData,backgroundImage} = props
      const defaultProps = {
        ...$props,
        ...props,
        formData,backgroundImage
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,changeNumber,focusCardNumber,blurCardNumber,toggleMask,changeName,changeMonth,changeYear,changeCvv,handleSubmit } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="credit-card-form">    
<div  className="credit-card-list">      
<tinyCredit fields={state.fields} labels={formData} isCardNumberMasked={state.isCardNumberMasked} backgroundImage={backgroundImage}></tinyCredit>

    </div>

    
<div  className="credit-card-form__inner">      
<div  className="credit-card-input">        
<label for="cardNumber"  className="credit-card-input__label">Card Number</label>

        
<input type="tel" id={state.fields.cardNumber} onInput={changeNumber} onFocus={focusCardNumber} onBlur={blurCardNumber}  value={state.formData.cardNumber} maxlength={state.cardNumberMaxLength} data-credit-card-field autocomplete="off" className="credit-card-input__input"></input>

        
<button type="button"   title="Show/Hide card number" tabindex="-1" disabled={formData.cardNumber === ''} onClick={toggleMask} className={vc({ '-active': !state.isCardNumberMasked },'credit-card-input__eye')}></button>

      </div>

      
<div  className="credit-card-input">        
<label for="cardName"  className="credit-card-input__label">Card Holder</label>

        
<input type="text" id={state.fields.cardName} letter-only onInput={changeName}  value={state.formData.cardName} data-credit-card-field autocomplete="off" className="credit-card-input__input"></input>

      </div>

      
<div  className="credit-card-form__row">        
<div  className="credit-card-form__col">          
<div  className="credit-card-form__group">            
<label for="cardMonth"  className="credit-card-input__label">Expiration Date</label>

            
<select  id={state.fields.cardMonth} value={state.cardMonth} onChange={(e)=>state.cardMonth = e.value} onChange={changeMonth} data-credit-card-field className="credit-card-input__input -select">              
<option value disabled selected>Month</option>

              

  {
    12.map(n=>(
      <option value={n < 10 ? '0' + n : n}  disabled={n < state.minCardMonth} key={n}>                
{generateMonthValue(n)}

              </option>
    ))
  }
  

            </select>

            
<select  id={state.fields.cardYear} value={state.cardYear} onChange={(e)=>state.cardYear = e.value} onChange={changeYear} data-credit-card-field className="credit-card-input__input -select">              
<option value disabled selected>Year</option>

              

  {
    12.map((n, $index)=>(
      <option value={$index + state.minCardYear}  key={n}>                
{$index + state.minCardYear}

              </option>
    ))
  }
  

            </select>

          </div>

        </div>

        
<div  className="credit-card-form__col -cvv">          
<div  className="credit-card-input">            
<label for="cardCvv"  className="credit-card-input__label">CVV</label>

            
<input type="tel"  number-only id={state.fields.cardCvv} maxlength="4" value={state.formData.cardCvv} onInput={changeCvv} data-credit-card-field autocomplete="off" className="credit-card-input__input"></input>

          </div>

        </div>

      </div>

      
<button type="button"  onClick={handleSubmit} className="credit-card-form__button">        
{t('ui.creditCardForm.submit')}

      </button>

    </div>

  </div>


      );
    }
    