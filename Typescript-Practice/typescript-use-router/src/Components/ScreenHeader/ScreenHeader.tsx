import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScreenHeaderWrap, { ChatScreenWrap } from './ScreenHeaderStyles';

type ScreenHeaderProps = {
  title : string;
}

const getUpperCase = (title : string) => title.charAt(1).toUpperCase() + title.slice(2);

const isButton = {
  comment: ['/chats'],
  music: ['/friends', '/chats', '/more'],
};

const ButtonList = ({ title } : ScreenHeaderProps) => (
  <>
    <span><i className="fas fa-search fa-lg" /></span>
    {isButton.comment.includes(title) && <span><i className="far fa-comment-dots fa-lg" /></span>}
    {isButton.music.includes(title) && <span><i className="fas fa-music fa-lg" /></span>}
    <span><i className="fas fa-cog fa-lg" /></span>
  </>
);

const ScreenHeader = ({ title } : ScreenHeaderProps) => (
  <ScreenHeaderWrap>
    <h1>{getUpperCase(title)}</h1>
    <div>
      <ButtonList title={title} />
    </div>
  </ScreenHeaderWrap>
);

export const ChatScreenHeader = ({ title } : ScreenHeaderProps) => {
  const history = useNavigate();
  const backbuttonHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    history(-1);
  };
  return (
    <ChatScreenWrap>
      <div>
        <button type="button" onClick={backbuttonHandler}>
          <i className="fas fa-angle-left fa-3x" />
        </button>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <span><i className="fas fa-search fa-lg" /></span>
        <span><i className="fas fa-bars fa-lg" /></span>
      </div>
    </ChatScreenWrap>
  );
};

export default ScreenHeader;
