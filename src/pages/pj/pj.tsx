import addIcon from '../../assets/add.svg';
import PjCard from '../../components/pjCard';
import React, {useState, useEffect} from 'react';
import axios from '../../api/axios';
import {PjType} from '../../types';

const Pj = () => {
  const EmptyCards : JSX.Element[] = [];
  const [pjData, setPjData] = useState<PjType[]>([]);

  useEffect(() => {
    const fetchData = async () =>{
      const res = await axios.get('/characters');
      setPjData(res.data);
    };
    fetchData();
  }, []);

  for (let i = 0; i < (4 - ((pjData.length+1)%4)); i++) {
    EmptyCards.push(
        <div key={i} className='
          border-dashed
          h-96
          w-56
          border-orange
          border-8
          rounded-2xl
        '/>,
    );
  }
  return (
    <div className="grid grid-cols-4 grid-flow-rows gap-4 w-[62rem]">

      { pjData.map((pjData, index) =>
        <PjCard key={index} pjData={pjData}/>) }

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
      {EmptyCards}
    </div>
  );
};

export default Pj;
