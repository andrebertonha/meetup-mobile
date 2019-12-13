import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {addDays, subDays} from 'date-fns';
import {withNavigationFocus} from 'react-navigation';

import api from '~/services/api';

import Backgroud from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';
import DateInput from '~/components/DateInput';

import {Container, List, DateContainer, SelectDateButton} from './styles';

function Dashboard({isFocused}) {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  async function decreaseDate() {
    setDate(subDays(date, 1));
  }

  async function increaseDate() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('daymeetups', {
        params: {
          date: date.getTime(),
        },
      });
      setMeetups(response.data);
    }
    loadMeetups();
  }, [date, isFocused]);

  async function subscribeToMeetup(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);
      Alert.alert('Inscrição', 'Inscrição efetuada com sucesso!');
    } catch (err) {
      console.tron.log('subscribe error', err);
      Alert.alert('Inscrição', 'Erro ao se inscrever!');
    }
  }

  return (
    <Backgroud>
      <Header />
      <Container>
        <DateContainer>
          <SelectDateButton onPress={decreaseDate}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </SelectDateButton>
          <DateInput date={date} onChange={setDate} />
          <SelectDateButton onPress={increaseDate}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </SelectDateButton>
        </DateContainer>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetup
              data={item}
              buttonText="Realizar inscrição"
              onPress={() => subscribeToMeetup(item.id)}
            />
          )}
        />
      </Container>
    </Backgroud>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
