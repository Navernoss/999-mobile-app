import React from 'react';

import {Profile} from 'src/components/Profile';
import {useTypedNavigation} from 'src/hooks';
const url =
  'data:image/jpeg;base64,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';

export function ProfileScreen() {
  const {navigate, goBack} = useTypedNavigation();
  const onPressCreateEvent = () => {
    navigate('createEvent');
  };

  return (
    <Profile
      onBack={goBack}
      bgImageUrl="https://gruppoconcorde-cdn.thron.com/delivery/public/image/gruppoconcorde/ef4bee72-c2c9-4a61-8f38-0a1d9c8a6e74/sccw3m/std/1920x844/AtlasConcorde_Villa%20Privata_Australia_003.jpg?scalemode=auto&format=WEBP"
      onPressCreateEvent={onPressCreateEvent}
      avaUrl={url}
      ticketsData={fakedata}
      cryptoAddress="0x638C4c657F80a8A99faeca550B733aaae81174ef"
    />
  );
}

// REMOVE WHEN THERE IS A WORKING API
const item1Sample = {
  id: '1',
  name: 'Garage drunkenness',
  tags: ['Relax', 'Drunk'],
  startData: 1698231832274,
  endData: 1700231832274,
  geoPosition: 'United States, 2373 Ingram Road, Winston Salem, North Carolina',
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rCIJzZ_df7K7WycovWQfsBlgG91B6bLneA&usqp=CAU',
};

const item2Sample = {
  id: '2',
  name: 'Bastau Concert',
  tags: ['Music'],
  startData: 1678231832274,
  endData: 1679231832274,
  geoPosition: 'Hua Mak, Bang Kapi, Bang Kok, Thai Land',
  imageUrl:
    'https://astanait.edu.kz/wp-content/uploads/2018/08/austin-neill-247047-unsplash.jpg',
};

const item3Sample = {
  id: '3',
  name: 'Pizza party',
  tags: ['Eat'],
  startData: 1778231832274,
  endData: 1779231832274,
  geoPosition: 'Call to find out +0854925383429',
  imageUrl:
    'https://www.creativefabrica.com/wp-content/uploads/2020/01/09/1578559481/Pizza-Party-580x386.jpg',
};

const fakedata = [
  {
    title: `Issued ${1}`,
    data: [item3Sample],
  },
  {
    title: `Sold ${1}`,
    data: [item1Sample],
  },
  {
    title: `Bought ${3}`,
    data: [item1Sample, item2Sample, item3Sample],
  },
  {
    title: `Favorited ${0}`,
    data: [],
  },
];
