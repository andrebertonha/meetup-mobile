import React, {useMemo} from 'react';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {Container, DateText} from './styles';

export default function DateInput({date, onChange}) {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", {locale: pt}),
    [date],
  );

  return (
    <Container>
      <DateText>{dateFormatted}</DateText>
    </Container>
  );
}
