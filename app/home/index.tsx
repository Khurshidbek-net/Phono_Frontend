import React from 'react';
import { HomeWrapper } from './Home.styled';
import { VscSettings } from 'react-icons/vsc';
import { SearchButton } from '../../components/Button/Button.style';
import { IoIosSearch } from "react-icons/io";
import Card from '../../components/Cards';
import LargeCard from '../../components/Cards/LargeCard';
import { title } from 'process';

const Home = () => {
  const images = [
    { img: '/images/apple.svg', title: 'Apple' },
    { img: '/images/huawei.svg', title: 'Huawei' },
    { img: '/images/xiaomi.svg', title: 'Xiaomi' },
    { img: '/images/samsung.svg', title: 'Samsung' },
    { img: '/images/blackview.svg', title: 'Blackview' },
    { img: '/images/philips.svg', title: 'Philips' },
    { img: '/images/xiaomi.svg', title: 'Xiaomi' },
    { img: '/images/apple.svg', title: 'Apple' },
    { img: '/images/blackview.svg', title: 'Blackview' },
    { img: '/images/samsung.svg', title: 'Samsung' },
    { img: '/images/huawei.svg', title: 'Huawei' },
    { img: '/images/smotretvse.svg', title: 'Смотреть все' },
  ];

  const phone = [
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
    // { imgs: '/images/phono.svg', labels: ['Xiaomi Redmi Note 12', 'Состояние: Новый', 'Память: 64 GB', '1 680 000 UZS']},
  ]
  

  return (
    <div className='container'>
      <HomeWrapper>
        <div className='search-input container'>
          <IoIosSearch className='searchIcon' />
          <input type="text" placeholder='Type e.g Slots games' />
          <div className='settings-icon'>
            <VscSettings />
          </div>
          <SearchButton>Поиск</SearchButton>
        </div>
        <h3>Категории</h3>
        <div className='cards-group container'>
          {images.map((item, i) => (
            <div key={i} className="card-container">
              {/* Card komponenti */}
              <Card img={item.img} alt={`Card ${i + 1}`} />
              {/* Carddan tashqarida joylashgan p elementi */}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <h3>Объявления</h3>
        <div className='product-cards container'>
          {phone.map((item, i) => (
            <div key={i} className='product-container container'>
              <LargeCard img={item.imgs} alt={`Card ${i + 1}`} labels={item.labels}/>
            </div>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default Home;

// ---------------------------------Api dan olish

/**
 * import React, { useEffect, useState } from 'react';
import { HomeWrapper } from './Home.styled';
import { VscSettings } from 'react-icons/vsc';
import { SearchButton } from '../../components/Button/Button.style';
import { IoIosSearch } from "react-icons/io";
import Card from '../../components/Cards';
import LargeCard from '../../components/Cards/LargeCard';
import axios from 'axios';

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Brendlarni olish
    axios.get('http://3.72.3.67:3000/api/brand')
      .then(res => setBrands(res.data))
      .catch(err => console.error('Brand fetch error:', err));

    // Telefonlarni olish
    axios.get('http://3.72.3.67:3000/api/phone')
      .then(res => setPhones(res.data))
      .catch(err => console.error('Phone fetch error:', err));
  }, []);

  return (
    <div className='container'>
      <HomeWrapper>

        <div className='search-input container'>
          <IoIosSearch className='searchIcon' />
          <input type="text" placeholder='Type e.g Slots games' />
          <div className='settings-icon'>
            <VscSettings />
          </div>
          <SearchButton>Поиск</SearchButton>
        </div>

        <h3>Бренды</h3>
        <div className='cards-group container'>
          {brands.map((item: any, i: number) => (
            <div key={i} className="card-container">
              <Card
                img={`http://3.72.3.67:3000${item.image}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>


        <h3>Телефоны</h3>
        <div className='product-cards container'>
          {phones.map((item: any, i: number) => (
            <div key={i} className='product-container'>
              <LargeCard
                img={`http://3.72.3.67:3000${item.image}`}
                alt={item.title}
                labels={item.labels || []}
              />
            </div>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default Home;
 */