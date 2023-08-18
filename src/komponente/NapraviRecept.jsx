import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const NapraviRecept = ({dodajRecept }) => {
  const navigate = useNavigate();
   
  const [naziv, setNaziv] = useState('');
  const [slika, setSlika] = useState('');
  const [sastojci, setSastojci] = useState(['']);

  const handleDodajSastojak = () => {
    setSastojci([...sastojci, '']);
  };

  const handleSastojakChange = (index, value) => {
    const noviSastojci = [...sastojci];
    noviSastojci[index] = value;
    setSastojci(noviSastojci);
  };

  const handleObrisiSastojak = (index) => {
    const noviSastojci = sastojci.filter((_, i) => i !== index);
    setSastojci(noviSastojci);
  };

  const handleObrisiSve = () => {
    setNaziv('');
    setSlika('');
    setSastojci(['']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime(); // jednostavna logika za generisanje jedinstvenog ID-a
    const noviRecept = {
      id: id,
      naziv: naziv,
      slika: slika,
      sastojci: sastojci,
      omiljen: 0
    };
  
    dodajRecept(noviRecept);
    navigate('/recepti');
  };

  const handleSlikaBlur = (e) => {
    setSlika(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#141414', zIndex: -1 }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFD700' }}>
          <h2 style={{ textAlign: 'center' }}>Napravi novi recept</h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Naziv koktela:
              <input type="text" style={{ width: 'calc(100% - 2em)', borderRadius: '10px', padding: '10px' }} value={naziv} onChange={(e) => setNaziv(e.target.value)} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Slika koktela (opciono):
              <input type="text" style={{ width: 'calc(100% - 2em)', borderRadius: '10px', padding: '10px' }} value={slika} onChange={(e) => setSlika(e.target.value)} onBlur={handleSlikaBlur} />
            </label>
            <label style={{ display: 'block', marginBottom: '10px' }}>
              Sastojci:
              {sastojci.map((sastojak, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: '5px' }}>
                  <input
                    type="text"
                    style={{ width: 'calc(100% - 50px)', borderRadius: '10px', padding: '10px', marginRight: '10px' }}
                    value={sastojak}
                    onChange={(e) => handleSastojakChange(index, e.target.value)}
                  />
                  <button type="button" onClick={() => handleObrisiSastojak(index)}>Obriši</button>
                </div>
              ))}
              <button type="button" onClick={handleDodajSastojak}>Dodaj sastojak</button>
            </label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="button" onClick={handleObrisiSve} style={{ flex: 1, backgroundColor: '#8B0000', color: 'white', border: 'none', borderRadius: '10px', padding: '10px', cursor: 'pointer', marginRight: '1em', marginTop: '2em', }}>Obriši sve uslove</button>
              <button type="submit" style={{ flex: 1, backgroundColor: '#4169E1', color: 'white', border: 'none', borderRadius: '10px', padding: '10px', cursor: 'pointer', marginLeft: '1em',  marginTop: '2em',}}>Dodaj u recepte</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NapraviRecept;
