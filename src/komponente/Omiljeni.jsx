import React, { useState } from 'react';
import Navbar from './Navbar';
import JedanRecept from './JedanRecept';

const Omiljeni = ({setObrisiStatus}) => {
  const [kokteli, setKokteli] = useState(() => {
     
    const sacuvaniRecepti = sessionStorage.getItem('recepti');
    return sacuvaniRecepti ? JSON.parse(sacuvaniRecepti) : [];
});
  const omiljeniKokteli = kokteli.filter(k=> k.omiljen==1);
  function obrisi(id){
    const noviKokteli = kokteli.filter(koktel => koktel.id !== id);
    setKokteli(noviKokteli);
    sessionStorage.setItem('recepti', JSON.stringify(noviKokteli)); // Ažuriramo i session storage
    setObrisiStatus(id)
  }
  return (
    <div>
      <Navbar />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#141414', zIndex: -1 }}>
      </div>
      <div style={{ marginTop: '7em', marginLeft: '15em', display: 'flex', flexWrap: 'wrap', gap: '10em' }}>
        {omiljeniKokteli.map((koktel) => (
          <JedanRecept key={koktel.id} koktel={koktel} setObrisiStatus={obrisi}/>
        ))}
      </div>
    </div>
  );
};

export default Omiljeni;
