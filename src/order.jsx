
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Order = () => {
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
  const [secim, setSecim] = useState('');//radiobutton
  const [message, setMessage] = useState('');//pizza malzemeleri
  const [hamur, setHamur] = useState('');

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
  }

  //radio button
  const boyutlar = ['Küçük', 'Orta', 'Büyük'];  // Seçenekler

  const handleChange = (event) => {
    setSecim(event.target.value);  // Seçilen değeri state'e kaydet
  };

  const handleHamurChange = (event) => {
    setHamur(event.target.value);  // Seçilen değeri state'e kaydet
  };

  return (
    <Router> {/* BrowserRouter (Router) en üst seviyeye yerleştirildi */}
      <div>
        <header className='header'>
          <img src="../images/iteration-1-images/logo.svg" alt="" />
          <nav className='navigation'>
            <Link to="/">Go to Home</Link> {/* Home'a yönlendiren link */}
          </nav>
        </header>

        <div className='center'>
          <h3>Position Absolute Acı Pizza</h3>
          <h2>85.50TL</h2>
          <p>Frontend developer olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.</p>

          <div className='button-select'>
            <section>
              <h3>Boyut Seç</h3>
              <form>
                {boyutlar.map((boyut, index) => (
                  <label key={index} className="radio-label">
                    <input
                      type="radio"
                      name="boyut"
                      value={boyut.toLowerCase()}
                      onChange={handleChange}
                    />
                    {boyut}
                  </label>
                ))}
              </form>
            </section>
            <section>
              <h3>Hamur Seç</h3>
              <form>
                <label htmlFor="hamur">Hamur Kalınlığı:</label>
                <select id="hamur" name="hamur" onChange={handleHamurChange} value={hamur}>
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalin">Kalın</option>
                </select>
              </form>
            </section>
          </div>

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
      </div>
    </Router>
  );
}

export default Order;