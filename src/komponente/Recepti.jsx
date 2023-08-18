 
import React, { createContext, useContext, useState } from 'react';
import Navbar from './Navbar';
import JedanRecept from './JedanRecept';

  
const Recepti = ({recepti,setOmiljenStatus}) => {


  return (
    
      <div>
        <Navbar />
        <div style={{ position: 'relative' }}>
           
          <div className="bg-recepti">
            <div style={{ marginTop: '11em', marginLeft: '15em', display: 'flex', flexWrap: 'wrap', gap: '10em' }}>
              {recepti.map((koktel) => (
               <JedanRecept key={koktel.id} koktel={koktel} setOmiljenStatus={setOmiljenStatus}   />
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Recepti;
