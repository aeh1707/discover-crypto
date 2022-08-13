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
  // console.log(topCoins);
  return (
    <>
      <Search />
      <main className="top-coins">
        <h1>This is a coin..</h1>
        {topCoins.map((coin) => (
          <Link
            to={`/coininfo/${coin.id}`}
            key={coin.id}
          >
            <article className="coin-brief">
              <img src={coin.image} alt={coin.name} />
              <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
              <div className="coin-price">
                $
                {coin.current_price}
              </div>
            </article>
          </Link>
        ))}
      </main>
    </>

  );
};

export default TopCoins;
