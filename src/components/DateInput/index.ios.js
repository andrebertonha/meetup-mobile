import React, {useMemo} from 'react';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateText} from './styles';

export default function DateInput({date}) {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", {locale: pt}),
    [date],
  );

  return (
    <Container>
      <Icon name="event" color="#FFF" size={20} />
      <DateText>{dateFormatted}</DateText>
    </Container>
  );
}
