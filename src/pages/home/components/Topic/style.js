import styled from 'styled-components';

export const TopicWrapper = styled.div`
  width: 485px;
  margin-bottom: 10px;
`;
export const TopicItem = styled.div`
  display: inline-block;
  line-height: 25px;
  padding: 5px 5px;
  padding-top: 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 10px;
  margin-top: 10px;
  .img {
    width: 30px;
    height: 25px;
    position: relative;
    top: 7px;
    right: 2px;
  }
  .info {
    color: #787878;
    font-size: 14px;
  }
`;