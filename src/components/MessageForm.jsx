import {useState} from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

const MessageForm = (props) => {

  const [value, setValue] = useState('')
  const {chatId , creds } = props

  const renderReadReceipts = (message, isMyMessage) => {
    return chatId.people.map((person, index) => {
      person.last_read === message.id && (
        <div key={`read_${index}`} className='read-receipt' style={{flaot: isMyMessage ? 'right' : 'left', backgroundImage: `url(${person.person.avatar})`}} />
      )
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim()

    if(text.length > 0){
      sendMessage(creds, chatId, {text});
    }
  }

  const handleUpload = (event) => {
    sendMessage(creds, chatId, {files: event.target.files, text: ''})
  }

  const handleChange = (event) => {
    setValue(event.target.value)

    isTyping(props, chatId)
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input className='message-input' placeholder='Send a message...' value={value} onChange={handleChange} onSubmit={handleSubmit}/>
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className='picture-icon'/>
        </span>
      </label>
      <input typeof='file' multiple={false} id='upload-button' style={{display:'none'}} onChange={handleUpload}/>
      <button type="submit" className="send-button">
        <SendOutlined  className='send-icon'/>
      </button>
    </form>
  )
}

export default MessageForm