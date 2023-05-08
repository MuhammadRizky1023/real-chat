import React from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';
import {PrettyChatWindow} from 'react-chat-engine-pretty'

const Chat = (props) => {
  const chatProps = useMultiChatLogic("08d47b2a-980c-4fc0-8312-5ef077fc58e3", props.user.username, props.user.secret);
    return (
        <div className="background">
        <PrettyChatWindow
          projectId={"08d47b2a-980c-4fc0-8312-5ef077fc58e3"}
          username={props.user.username}
          secret={props.user.secret}
        />
    </div>
  );
};

export default Chat;