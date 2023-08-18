import React from 'react';
import Navbar from './Navbar';

const Pocetna = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ backgroundColor: '#FFD700', padding: '40px', flex: 1, textAlign: 'left', borderRadius: '0 0 150px 0' }}>
          <h1 style={{ fontSize: '50px', margin: 0 }}>
            Dobrodošli!<br />
          </h1>
          <h1 style={{ fontSize: '30px', margin: 0 }}>
            Ovde možete pronaći<br />
            najbolje recepte za koktele!
          </h1>
        </div>
        <div style={{ backgroundColor: '#000000 ', color: '#FFD700', padding: '110px', flex: 2 }}>
          <p style={{ fontSize: '20px', lineHeight: '1.6', margin: 0, textAlign: 'right' }}>
            Ova aplikacija vam omogućava da istražite<br />
            razne recepte za koktele.  Bilo da tražite klasične koktele  <br />
            ili želite isprobati nešto novo i kreativno,  ovde ćete pronaći inspiraciju za<br />
             vaše omiljene mešavine. Uživajte u pripremi i dijeljenju koktela sa prijateljima i porodicom!<br />
            
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: '#000000', textAlign: 'center', padding: '30px', position: 'relative' }}>
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: '#000000', zIndex: -1 }} />
        <a href="https://cafebarrestoran.rs/wp-content/uploads/2023/01/Kokteli-portal.jpg">
          <img   style={{ width: '100%', height: 'auto' }}
            src="https://cafebarrestoran.rs/wp-content/uploads/2023/01/Kokteli-portal.jpg"
            alt="Egzotični kokteli"
          
          />
        </a>
      </div>
    </div>
  );
};

export default Pocetna;
