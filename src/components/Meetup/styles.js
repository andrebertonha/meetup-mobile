import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.View`
  flex: 1;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 20px;
  overflow: hidden;

  opacity: ${props => (props.past ? 0.9 : 1)};
`;

export const InfoContainer = styled.View`
  padding: 10px 20px;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const Banner = styled.Image`
  align-self: stretch;
  height: 150px;
`;

export const Subscription = styled(Button)`
  height: 46px;
  background: #f94d6a;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const SubscriptionText = styled.Text`
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
