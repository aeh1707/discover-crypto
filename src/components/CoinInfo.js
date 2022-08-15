import './CoinInfo.css';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins, selectCoinData } from '../redux/cryptoReducer';

const CoinInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);
  const { id } = useParams();
  const det = useSelector(selectCoinData);
  const index = det.findIndex((item) => item.id === id);
  return (
    <main className="coin-info">
      <Link to="/">
        <button type="button" className="go-back">
          &#60;
        </button>
      </Link>
      <div className="coin-info-container">
        <div className="coin-info-image">
          <img src={det[index].image} alt="crypto" />
        </div>
        <div className="coin-info-name">
          <h4>Coin Name</h4>
          <p>{det[index].name}</p>
        </div>
        <div className="coin-info-price bg-dark-blue">
          <h4>Current price</h4>
          <p>
            {det[index].current_price}
            $
          </p>
        </div>
        <div className="coin-info-cap">
          <h4>Market Price</h4>
          <p>{det[index].market_cap}</p>
        </div>
        <div className="coin-info-cap-rank bg-dark-blue">
          <h4>Rank</h4>
          <p>{det[index].market_cap_rank}</p>
        </div>
        <div className="coin-total-supply">
          <h4>Total Supply</h4>
          <p>{det[index].total_supply}</p>
        </div>
        <div className="coin-max-supply bg-dark-blue">
          <h4>Max Supply</h4>
          <p>{det[index].max_supply ? det[index].max_supply : 'Unknown'}</p>
        </div>
        <div className="coin-info-price-change-percent">
          <h4>Price change percentage</h4>
          <p
            className={
                det[index].price_change_percentage_24h < 0 ? 'less' : 'more'
              }
          >
            {det[index].price_change_percentage_24h}
            %
          </p>
        </div>
        <div className="coin-info-price-change bg-dark-blue">
          <h4>Price change</h4>
          <p
            className={
                det[index].price_change_percentage_24h < 0 ? 'less' : 'more'
              }
          >
            {det[index].price_change_24h}
          </p>
        </div>
      </div>
    </main>
  );
};

export default CoinInfo;
