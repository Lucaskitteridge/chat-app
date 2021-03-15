import { ChatEngine } from 'react-chat-engine'

import './App.css'
import ChatFeed from './components/ChatFeed'

const app = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='ec70c76a-83d6-4f89-ba2f-292254f009ef'
      userName='Lucas'
      userSecret='123123'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default app