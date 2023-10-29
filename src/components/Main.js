import React, {Component} from 'react';
import ws from '../Ws.png'



class Main extends Component{
    render() {
        return (
            <div id='content' className='mt-3'>
                <table className = 'table text-muted text-center'>
                    <thead>
                        <tr style={{color:'black'}}>
                            <th scope='col'>보낸 토큰</th>
                            <th scope='col'>Reward 토큰</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{color:'black'}}>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT</td>
                            <td>{window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')} RWD</td>
                        </tr>
                    </tbody>
                </table>
                <div className='card mb-2' style={{opacity:'.9'}}>
                <form 
                onSubmit={(event) =>{
                    event.preventDefault()
                    let amount
                    amount = this.input.value.toString()
                    amount = window.web3.utils.toWei(amount, 'Ether')
                    this.props.stakeTokens(amount)
                }}
                className='mb-3'>
                    <div style={{borderSpacing:'0 1em'}}>
                        <label className='float-left' style={{marginLeft:'15px'}}><b>보낼 토큰</b></label>
                        <span className='float-right' style={{marginRight:'8px'}}>
                        Balance: {window.web3.utils.fromWei(this.props.wsBalance, 'Ether')}
                        </span>
                        <div className='input-group mb-4'>
                            <input
                            ref={(input) => {this.input = input} }
                            type='text'
                            placeholder='0'
                            required/>
                            <div className='input-group-open'>
                                <div className='input-group-text'>
                                    <img src={ws} alt='ws' height='32'/>
                                    &nbsp;&nbsp;&nbsp; USDT
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-primary btn-lg btn-block'>전송</button>

                    </div>
                </form>
                <button 
                type='sumbit'
                onClick={(event) =>{
                    event.preventDefault(
                       this.props.unstakeTokens() 
                    )
                }}
                className='btn btn-primary btn-lg btn-block'>가져오기</button>
                </div>
            </div>
        )
    }
}
export default Main;