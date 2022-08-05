import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../AppRoute';
import {ShortSelect} from '../components';
import PjSessionSelector from '../components/pjSessionSelector';
import PrimaryButton from '../components/primary-button';
import {User, PjType} from '../types';
import api from '../api/axios';

const CreateSession = () => {
  const {setUser} = useContext(AuthContext);
  const [selectedPjs, setSelectedPjs] = useState<string[]>([]);
  const [lastQuest, setLastQuest] = useState(-1);
  const [selectedDate, setSelectedDate] = useState(0);
  const [players, setPlayers] = useState<User[]>([]);
  const [characters, setCharacters] = useState<PjType[]>([]);
  useEffect(() => {
    const fetchData = async () =>{
      const userRes = await api(setUser).get('/users');
      const charactersRes = await api(setUser).get('/characters');
      setPlayers(userRes.data);
      setCharacters(charactersRes.data);
    };
    fetchData();
  }, []);

  const getById = (id: string) => {
    return characters?.filter((el) => el.id === id)[0];
  };

  const setSelectedPj = (playerIndex: number, pjID: string ) => {
    const selectedPjsTemp = [...selectedPjs];
    selectedPjsTemp[playerIndex] = pjID;
    setSelectedPjs(selectedPjsTemp);
    const newSelectedCharacter = getById(pjID);
    setLastQuest(selectedPjs.some(
        (element) => {
          const currentCharacter = getById(element);
          return (
            newSelectedCharacter.quest !== currentCharacter.quest &&
             newSelectedCharacter.quest !== undefined &&
            currentCharacter.quest !== undefined
          );
        }) ?
          -1 :
          (newSelectedCharacter.quest || lastQuest ));
  };
  const handleChange = (value : number) => {
    setSelectedDate(value);
  };
  const dates = ['22/23 journnée', '24/23 journnée'];
  return (
    <div className="w-full flex items-center flex-col gap-4">
      <span className='
        w-full
        flex
        font-bubblegum
        text-brown
        items-center
        gap-5
        text-lg
      '>
        Selectionner la date
        <ShortSelect
          showValue
          options={dates}
          handleChange={handleChange}
          value={[selectedDate]}
        />
      </span>
      {players.map((player, index) => {
        return (
          <PjSessionSelector
            quest={lastQuest}
            selectedPj={selectedPjs[index]}
            setSelectedPj={setSelectedPj}
            playerIndex={index}
            key={index}
            pjs={characters.filter((pj) => pj.player === player.id)}
            playerName={player.name} />
        );
      })}
      <PrimaryButton text={'Create Session'} />
    </div>
  );
};

export default CreateSession;
