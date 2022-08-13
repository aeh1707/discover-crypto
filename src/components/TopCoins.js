import './TopCoins.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoins, selectFilteredCoins } from '../redux/cryptoReducer';
import Search from './Search';

const TopCoins = () => {
  const dispatch = useDispatch();
  const topCoins = useSelector(selectFilteredCoins);
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  return (
    <>
      <Search />
      <main className="top-coins">
        {topCoins.map((coin) => (
          <Link
            to={`/coininfo/${coin.id}`}
            key={coin.id}
          >
            <article className="coin-brief">
              <div className="coin-image-container">
                <img className="coin-image" src={coin.image} alt={coin.name} />
              </div>
              <div className="coin-brief-info">
                <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                <div className="coin-price">
                  $
                  {coin.current_price}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </>

  );
};

export default TopCoins;
