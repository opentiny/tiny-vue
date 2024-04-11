
    import { renderless, api } from '@opentiny/vue-renderless/user-link/vue'
    import '@opentiny/vue-theme/user-link/index.less'
    import { vc, If, Component, Slot, useSetup, useVm, $props, m } from '@opentiny/react-common'
    import {useRef} from 'react'
    export default function userLink(props) {
      const {fetchUser,fetchW3Accounts,getUserImageUrl,fetchUserByUserId,userCache,valueSplit,card,textSplit,textField,valueField,modelValue,service,cache,cacheKey,cacheFields,batch} = props
      const defaultProps = {
        ...$props,
        ...props,
        fetchUser,fetchW3Accounts,getUserImageUrl,fetchUserByUserId,userCache,valueSplit,card,textSplit,textField,valueField,modelValue,service,cache,cacheKey,cacheFields,batch
      }
      const { ref, current: vm, parent } = useVm()
      
      const { state,showCard,showDetail } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent,
        doms:[]
      })
      return (
          
<div  className="tiny-userlink">    

  {
    state.options.map((user, index)=>(
      <li  key={index}>      
<span style={{display:!card?'block':'none'}}>{user[state.textField] + (index !== state.options.length - 1 ? textSplit : '')}</span>

      
<tinyPopover style={{display:!(!card)?'block':'none'}} trigger="click" visible-arrow={false} placement="bottom-start" popper-class="tiny-user-card">        
<template slot>          
<a onClick={showCard($event, user)}>{user[state.textField] + (index !== state.options.length - 1 ? textSplit : '')}

          </a>

        </template>

        
<div  loading className="card-box">          
<div  className="card-box__header"></div>

          
<div  className="card-box__body">            
<div  className="card-top-img">              
<img src={state.imgUrl}></img>

            </div>

            
<div  className="card-top-text">              
<span >{state.data.english_Name}</span>

              
<span >(
{state.data.last_Name}
)</span>

              
<p >{t('ui.usercard.empno')}
:
{state.data.employee_Number}</p>

              
<p >{state.data.l4_Name}
(
{state.data.l1_Name}
)</p>

            </div>

            
<div  className="card-center">              
<p >                
<strong >{t('ui.usercard.phone')}</strong>
：
{state.data.person_Phone_Code}

              </p>

              
<p >                
<strong >{t('ui.usercard.internal')}</strong>
：
{state.data.person_Internal_Code}

              </p>

              
<p >                
<strong >{t('ui.usercard.mobile')}</strong>
：
{state.data.person_Mobile_Code}

              </p>

              
<p >                
<strong >{t('ui.usercard.email')}</strong>
：
<a href={`mailto:${state.data.person_Mail}`}>{state.data.person_Mail}</a>

              </p>

              
<p >                
<strong >{t('ui.usercard.address')}</strong>
：
{state.data.person_Location}

              </p>

            </div>

            
<div  style={{display:state.expand?'block':'none'}} className="card-center">              
<p >                
<strong >{t('ui.usercard.manager')}</strong>
：
{state.data.organization_manager}

              </p>

              
<p >                
<strong >{t('ui.usercard.viop')}</strong>
：
{state.data.person_Viop}

              </p>

              
<p >                
<strong >{t('ui.usercard.fax')}</strong>
：
{state.data.person_Fax_Code}

              </p>

              
<p >                
<strong >{t('ui.usercard.travelcode')}</strong>
：
{state.data.person_Travel_Code}

              </p>

              
<p >                
<strong >{t('ui.usercard.timezone')}</strong>
：
{state.data.person_Difference_Time}

              </p>

              
<p >                
<strong >{t('ui.usercard.other')}</strong>
：
{state.data.person_Other}

              </p>

            </div>

          </div>

          
<div  onClick={showDetail} className="box__footer">            
<div style={{display:!state.expand?'block':'none'}}>{t('ui.usercard.expand')}
 
<IconChevronDown ></IconChevronDown></div>

            
<div style={{display:state.expand?'block':'none'}}>{t('ui.usercard.collapse')}
 
<IconChevronUp ></IconChevronUp></div>

          </div>

        </div>

      </tinyPopover>

    </li>
    ))
  }
  

  </div>


      );
    }
    