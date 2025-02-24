

import './App.css'
import React, { useState } from 'react';

function App() {
  const toppingsList = [
    { name: 'pepperoni', label: 'Pepperoni' },
    { name: 'sosis', label: 'Sosis' },
    { name: 'kanadajambonu', label: 'Kanada Jambonu' },
    { name: 'soğan', label: 'Soğan' },
    { name: 'tavukizgara', label: 'Tavuk Izgara' },
    { name: 'domates', label: 'Domates' },
    { name: 'misir', label: 'Mısır' },
    { name: 'sucuk', label: 'Sucuk' },
    { name: 'jalepeno', label: 'Jalepeno' },
    { name: 'sarimsak', label: 'Sarımsak' },
    { name: 'biber', label: 'Ispanak' },
    { name: 'mantar', label: 'Mantar' },
    { name: 'ananas', label: 'Ananas' },
    { name: 'kabak', label: 'Kabak' }
  ];

  const [toppings, setToppings] = useState(
    toppingsList.reduce((acc, topping) => {
      acc[topping.name] = false;
      return acc;
    }, {})
  );

  const [message, setMessage] = useState('');

  // Checkbox durumunu değiştiren fonksiyon
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Seçilen malzeme sayısını kontrol et
    const selectedToppingsCount = Object.values(toppings).filter(Boolean).length;

    // Eğer 10'dan fazla seçilirse, uyarı mesajı göster
    if (checked && selectedToppingsCount >= 10) {
      setMessage('En fazla 10 malzeme seçebilirsiniz.');
      return; // 10'dan fazla malzeme seçilmesine izin vermez
    } else {
      setMessage('');
    }

    // State'i güncelle
    setToppings((prevToppings) => ({
      ...prevToppings,
      [name]: checked,
    }));
  };

  return (
    <>
      <header className='header'>
        <h1>Teknolojik Yemekler</h1>
        <nav className='navigation'>
          <a href="">Anasayfa-</a>
          <a href="">Seçenekler-</a>
          <a href="">Sipariş Oluştur</a>
        </nav>
      </header>
      <div className='center'>
        <h3>Position Absolute Acı Pizza</h3>
        <h2>85.50TL</h2>
        <p>asdfojpdofıjpdsfoıjdpsfıjsapdfıjpasdfıjfpfjpsdofjpfosjfdapsfdpfıp
          sdoıjpodsjofpıdjspodfjpsdfjpodfıj
          sadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
        <h3>Ek Malzemeler</h3>
        <p>En fazla on malzeme seçebilirsiniz. 5TL</p>
        <form className='form'>
          {toppingsList.map((topping) => (
            <label key={topping.name}>
              <input className='input'
                type="checkbox"
                name={topping.name}
                checked={toppings[topping.name]}
                onChange={handleCheckboxChange}
              />
              {topping.label}
            </label>
          ))}
        </form>
        {message && <p style={{ color: 'red' }}>{message}</p>}
      </div>

      
    </>
  );
}

export default App;