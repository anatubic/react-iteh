// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Pocetna from './Komponente/Pocetna';
import Recepti from './Komponente/Recepti';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Omiljeni from './Komponente/Omiljeni';
import NapraviRecept from './Komponente/NapraviRecept'; 
import axios from 'axios';

function App() {
  const [recepti,setRecepti] = useState(  [
    // // Dummy podaci za prikaz kartica
    // { id: 1, naziv: 'Koktel 1', slika: 'putanja_do_slike_1', sastojci: ['sastojak1', 'sastojak2'] ,omiljen:0},
    // { id: 2, naziv: 'Koktel 2', slika: 'putanja_do_slike_2', sastojci: ['sastojak3', 'sastojak4'],omiljen:0 },
    // { id: 3, naziv: 'Koktel 3', slika: 'putanja_do_slike_3', sastojci: ['sastojak5', 'sastojak6'],omiljen:0 },
    // // Dodajte više kartica prema potrebi

  ]);
  useEffect(() => {
    const ucitajKoktele = async () => {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
        const kokteli = response.data.drinks.slice(0, 5).map(koktel => ({
          id: koktel.idDrink,
          naziv: koktel.strDrink,
          slika: koktel.strDrinkThumb,
          sastojci: ["sastojak1", "sastojak2"], // Dodato prazno jer API ne daje sastojke u ovom pozivu
          omiljen: 0
        }));
        setRecepti(kokteli);
        console.log(kokteli)
        console.log(recepti)
        if (sessionStorage.getItem('recepti') === null) {
          sessionStorage.setItem('recepti', JSON.stringify(kokteli));
        }

      } catch (error) {
        console.error("Greška prilikom učitavanja koktela:", error);
      }
    };

    ucitajKoktele();
  }, []);

 

  const setOmiljenStatus = (id) => {
    const noviRecepti =  JSON.parse(sessionStorage.getItem('recepti')); // Pravimo kopiju niza recepti
  
    for (let i = 0; i < noviRecepti.length; i++) {
      if (noviRecepti[i].id === id) {
        noviRecepti[i].omiljen = noviRecepti[i].omiljen === 1 ? 0 : 1;
        break;
      }
    }
  
    setRecepti(noviRecepti); // Postavljamo novi ažurirani niz kao state
    sessionStorage.setItem('recepti', JSON.stringify(noviRecepti));
    console.log(recepti)
  }
  
  const setObrisiStatus = (id) => {
    const noviRecepti = [...recepti]; // Pravimo kopiju niza recepti
  
    for (let i = 0; i < noviRecepti.length; i++) {
      if (noviRecepti[i].id === id) {
        noviRecepti[i].omiljen = noviRecepti[i].omiljen ===0 ? 1 : 0;
        break;
      }
    }
  
    setRecepti(noviRecepti); // Postavljamo novi ažurirani niz kao state
    sessionStorage.setItem('recepti', JSON.stringify(noviRecepti));
    console.log(recepti)
  }
  console.log(recepti)


  const dodajRecept = (noviRecept) => {
    const noviRecepti = [...recepti, noviRecept];
    setRecepti(noviRecepti);
    sessionStorage.setItem('recepti', JSON.stringify(noviRecepti));
  };



  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/recepti" element={<Recepti recepti ={recepti} setOmiljenStatus={setOmiljenStatus}   />} />
            <Route path="/omiljeni" element={<Omiljeni  setObrisiStatus={setObrisiStatus} />} />
            <Route path="/napravi-recept" element={<NapraviRecept dodajRecept={dodajRecept} />} />
          </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
