import ReactDOM from 'react-dom/client'
import React from 'react'
import TINYModal from './src'

const types = ['alert', 'confirm', 'message', 'popconfirm']

const defOpts = {
  alert: {
    showFooter: true,
    type: 'alert'
  },
  confirm: {
    showFooter: true,
    status: 'question',
    type: 'confirm'
  },
  message: {
    mask: false,
    lockView: false,
    showHeader: false,
    showClose: false,
    type: 'message'
  },
  popconfirm: {}
}

types.forEach((type) => {
  TINYModal[type] = function (message, title, options) {
    let opts

    if (typeof message === 'object' && message !== null) {
      opts = message
    } else if (title) {
      opts = { title }
    }

    if (message === undefined || message === null) {
      message = ''
    }

    const modalContainer = document.createElement('div')
    document.body.appendChild(modalContainer)

    const instance = React.createElement(TINYModal, {
      message: message.toString(),
      ...defOpts[type],
      ...opts,
      ...options,
      ref: (ref) => {
        ref.open()
      },
      events: {
        hide: ({ $modal }) => {
          if ($modal.beforeUnmouted) {
            $modal.beforeUnmouted()
          }
          document.body.removeChild(modalContainer)
        }
      }
    })

    ReactDOM.createRoot(modalContainer).render(instance)
  }
})

export default TINYModal
