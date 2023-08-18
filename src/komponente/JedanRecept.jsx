import React, { useState } from 'react';
import { useLocation,  } from 'react-router-dom';  
import { GrFavorite } from 'react-icons/gr';
import '../App.css';

const JedanRecept = ({ koktel ,setOmiljenStatus,setObrisiStatus}) => {
 
  

  const handleOmiljeniClick = () => {
 
    setOmiljenStatus(koktel.id); 
  };

  const location = useLocation(); // Dobavljanje trenutne putanje
  const isOmiljeniPage = location.pathname === '/omiljeni'; // Provera da li je trenutna putanja '/omiljeni'
 
  const handleObrisiClick = () => { 
    
     console.log(koktel.id)
    setObrisiStatus(koktel.id); 
  };
 

  return (
    <div className={`jedan-recept-kartica `}>
      <div className="koktel-slika-container">
        <img className="koktel-slika" src={koktel.slika} alt={koktel.naziv} />
      </div>
      <h2>{koktel.naziv}</h2>
      <h3>Sastojci:</h3>
      <ul>
        {koktel.sastojci.map((sastojak, index) => (
          <li key={index}>{sastojak}</li>
        ))}
      </ul>
      {isOmiljeniPage ? (
        <button
          className="obrisi-dugme"
          onClick={handleObrisiClick} // Ovo bi trebalo da bude funkcija za brisanje ako imate posebnu funkciju za to
        >
          Obriši
        </button>
      ) : (
        <button
          className={`omiljeni-dugme  'omiljeni'   `}
          onClick={handleOmiljeniClick}
        >
          <GrFavorite />
        </button>
      )}
    </div>
  );
};

export default JedanRecept;
