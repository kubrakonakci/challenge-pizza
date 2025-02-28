
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
  const [orderNote, setOrderNote] = useState('');
  const [pizzaCount, setPizzaCount] = useState(1);

  

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

   const handleText = (event) => {
      setOrderNote(event.target.value);
    };


    const increasePizza = () => {
        setPizzaCount(pizzaCount + 1);
      };
    
      // Eksi butonuna tıklanınca pizza sayısını azaltan fonksiyon
      const decreasePizza = () => {
        if (pizzaCount > 1) {  // Pizza sayısı 1'den küçük olmasın diye kontrol ekledik
          setPizzaCount(pizzaCount - 1);
        }
      };

      

  
  return (
    
      <div>
        <header className='header'>
          <img src="../images/iteration-1-images/logo.svg" alt="" />
          <nav className='navigation'>
            <Link to="/home">Anasayfa-</Link>
            <Link to="/">Seçenekler-</Link>
            <Link to="/order">Sipariş Oluştur</Link> {/* Home'a yönlendiren link */}
          </nav>
        </header>

        <div className='center'>
          <h3>Position Absolute Acı Pizza</h3>
          <h2>85.50₺</h2>
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
          <p>En fazla on malzeme seçebilirsiniz. 5₺</p>
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
          <form>
        {/* Sipariş notu alanı */}
        <label className="not" htmlFor="orderNote">Sipariş Notu:</label>
        <textarea className='textarea'
          id="orderNote"
          value={orderNote}
          onChange={handleChange}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          rows="2" // textarea'nın yüksekliği
          cols="60" // textarea'nın genişliği
        />
        </form> 

        <div className="order-container">  
      
          <div className="counter-container">                                   
           <button onClick={decreasePizza} className="button">-</button>
           <span className="pizza-count">{pizzaCount}</span>
           <button onClick={increasePizza} className="button">+</button>

        
           <div className="text-box">
            <h5>Sipariş Toplamı</h5>
            <p>Seçimler    25.00₺</p>
            <p>Toplam      110.00₺</p>
            <button className='button'>
              <Link to="/success">Sipariş Ver</Link> {/* Butona tıklanınca /success sayfasına yönlendirme */}
            </button>
          </div>
        </div>

      
      
    </div>

      
     
    </div>
    </div>
       
        

    
    
  );
}

export default Order;