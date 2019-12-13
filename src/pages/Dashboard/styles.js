import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

export const SelectDateButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background: transparent;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 30px;
  padding: 0 20px;
`;
