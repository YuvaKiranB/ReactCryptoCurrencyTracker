// Write your JS code here

import './index.css'

const GetCurrencyItem = props => {
  const {data} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = data

  return (
    <li className="li">
      <div className="currencyNameContainer">
        <img className="image2" src={currencyLogo} alt={currencyName} />
        <p className="p1">{currencyName}</p>
      </div>
      <div className="valueContainer2">
        <p className="p1">{usdValue}</p>
        <p className="p1">{euroValue}</p>
      </div>
    </li>
  )
}

export default GetCurrencyItem
