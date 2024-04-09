// Write your JS code here

import './index.css'

import GetCurrencyItem from '../CryptocurrencyItem'

const GetCurrencyList = props => {
  const {content} = props

  return (
    <div className="cryptoListContainer">
      <h1 className="h1">Cryptocurrency Tracker</h1>
      <img
        className="image1"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />

      <div className="currencyListContainer">
        <div className="header">
          <h2 className="h2">Coin Type</h2>
          <div className="valueContainer">
            <h2 className="h2">USD</h2>
            <h2 className="h2">EURO</h2>
          </div>
        </div>
        <ul className="ul">
          {content.map(eachItem => (
            <GetCurrencyItem data={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GetCurrencyList
