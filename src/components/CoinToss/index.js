// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    coinTossImg: HEADS_IMG,
    headsCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeads = headsCount
    let latestTails = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG
      latestHeads += 1
    } else {
      tossImage = TAILS_IMG
      latestTails += 1
    }

    this.setState({
      coinTossImg: tossImage,
      headsCount: latestHeads,
      tailsCount: latestTails,
    })
  }

  render() {
    const {coinTossImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={coinTossImg} alt="toss result" className="toss-result" />
          <button type="button" className="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
