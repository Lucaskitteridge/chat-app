const TheirMessage = ({ message, lastMessage }) => {

  const isFirstMessage = !lastMessage || lastMessage.sender.userName !== message.sender.userName
  return (
    <div className='messageRoom'>
      {isFirstMessage && (
        <div
          className="messageAvatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt='message_attachment'
            className='messageimg'
            styles={{ marginLeft: isFirstMessage ? '4px' : '48px' }}
          />
        ) : (
          <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessage ? '4px' : '48px'  }}>
            {message.text}
          </div>
        )
      }
    </div>
  )
}

export default TheirMessage 