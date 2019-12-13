import React from 'react';

import {parseISO, format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import MeetupDetails from './MeetupDetails';

import {
  Container,
  Info,
  Banner,
  Title,
  Subscription,
  InfoContainer,
} from './styles';

export default function Meetup({data, onPress, buttonText}) {
  const dateParsed = format(parseISO(data.date), "dd' de 'MMMM', às 'HH'h'", {
    locale: pt,
  });

  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.banner
            ? data.banner.url.replace('localhost', '10.0.2.2')
            : `https://api.adorable.io/avatar/50/${data.organizer.name}.png`,
        }}
      />
      <InfoContainer>
        <Info>
          <Title>{data.title}</Title>
          <MeetupDetails icon="event" text={dateParsed} />
          <MeetupDetails icon="place" text={data.location} />
          <MeetupDetails
            icon="person"
            text={`Organizador: ${data.organizer.name}`}
          />
        </Info>
        {!data.past && (
          <Subscription onPress={onPress}>{buttonText}</Subscription>
        )}
      </InfoContainer>
    </Container>
  );
}
