// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import GetCurrencyList from '../CryptocurrenciesList'

class cryptoCurrencyTracker extends Component {
  state = {isLoading: true, cryptoData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({isLoading: false, cryptoData: updatedData})
  }

  render() {
    const {isLoading, cryptoData} = this.state
    return (
      <div className="mainContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <GetCurrencyList content={cryptoData} />
        )}
      </div>
    )
  }
}

export default cryptoCurrencyTracker
