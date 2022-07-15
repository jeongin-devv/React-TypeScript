import styled from 'styled-components';
import { CommonIconRow } from '../../Components/Common/CommonStyles';

export const MoreIconRow = styled(CommonIconRow)`
  margin-top: 35px;
`;

export const MoreSuggestions = styled.div`
  margin-top: 50px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 40px;
`;

export const MoreSuggestionsTitle = styled.h4`
  text-align: left;
  margin-bottom: 30px;
`;

export const MoreSuggestionsIcons = styled.div`
  display: flex;
`;

export const MoreSuggestionsIcon = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoreSuggestionsIconImage = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fae100;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & i {
    font-size: 32px;
    color: white;
  }
`;
