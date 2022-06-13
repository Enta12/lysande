import PjCard from '../../components/pjCard';
import SubTitle from '../../components/subTitle';
import Title from '../../components/title';
import addIcon from '../../assets/add.svg';
import {pjsMocked, playerMocked} from '../../moockedData';
import Calendar from '../../components/calendar/calendar';
import {PossibleDate} from '../../types';
import {useParams} from 'react-router-dom';
import React from 'react';

type Availability = 'no' | 'yes' | 'maybe'
const availability : Availability[] = [];
const dates: PossibleDate[] = [];


const setDates = () => {
  new Array(7).fill('').forEach((value, index) => {
    dates.push({
      day: index,
      moment: 'journée',
    });
    availability.push(index === 0 || index === 6 ? 'yes' : 'no');
    dates.push({
      day: index,
      moment: 'soirée',
    });
    availability.push(index === 0 || index === 6 ? 'yes' : 'no');
  });
};

setDates();

const Player = () => {
  const params = useParams();
  const id = parseInt(params.id || '0');
  const selectedPlayer = playerMocked[id];
  const pjs = pjsMocked.filter((pj) => pj.player === id);
  return (
    <div className='
      pt-8
      w-full
      flex
      flex-col
      gap-8
    '>
      <Title title={selectedPlayer.name} />
      <SubTitle title="PERSONAGES" />
      <div className="grid grid-cols-4 grid-flow-rows gap-4 w-[62rem]">
        { pjs.map((pjData, index) => <PjCard key={index} pjData={pjData}/>) }
        <a href="/newPj">
          <button className="
            border-dashed
            h-96
            w-56
            border-orange
            border-8
            rounded-2xl
            flex
            justify-center
            items-center
          ">
            <img className="max-h-20" alt="add pj" src={addIcon} />
          </button>
        </a>
      </div>
      <SubTitle title="DATES" />
      <form >
        <Calendar dates={dates} availability={availability}/>
      </form>
    </div>
  );
};

export default Player;
