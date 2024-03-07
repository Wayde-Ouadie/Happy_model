// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import NotificationStyle from './Notification.module.scss'
const cg = StyleNameGestion(NotificationStyle)

const Notification = ({ text, type }: {text: string, type: 'error'}) => {
      
      return (
            <>
                  <div className={cg('container', 'notification')} >
                        <span className={cg(`state_${type}`,'text')} >{text}</span>
                  </div>
            </>
      )
}

export default Notification;