import {Title, Calendar} from '../../components';
import React from 'react';

type Availability = 'no' | 'yes' | 'maybe'
type PossibleDate = {
    date: Date,
    moment: 'soirée' | 'journée'
}

const availability : Availability[] = [];
const dates: PossibleDate[] = [];
const oneDay = 86400000;
const oneMounth = oneDay * 31;


const setDates = () => {
  const today = new Date();
  let currentDate = today;

  while (currentDate < new Date(today.getTime() + oneMounth)) {
    dates.push({
      date: currentDate,
      moment: 'journée',
    });
    availability.push(currentDate.getDay() === 0 ||
      currentDate.getDay() === 6 ? 'yes' : 'no');
    dates.push({
      date: currentDate,
      moment: 'soirée',
    });
    availability.push(currentDate.getDay() === 0 ||
      currentDate.getDay() === 6 ||
      currentDate.getDay() === 5 ? 'yes' : 'no');
    currentDate = new Date(currentDate.getTime() + oneDay);
  }
};

setDates();


const CalendarPage = () => {
  return (
    <div className='pt-8 w-full'>
      <Title title="MES DISPONIBILITE POUR LE PROCHAIN MOIS"/>
      <form>
        <Calendar dates={dates} availability={availability}/>
      </form>
      <div className='m-8 flex justify-center'>
        <PrimaryButton text={'Envoyer'} />
      </div>

    </div>
  );
};


export default CalendarPage;
