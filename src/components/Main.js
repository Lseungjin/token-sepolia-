import React, { Component } from 'react';
import mvp from '../Mvp.png';
import './Main.css';

class Main extends Component{
    render() {
        return (
            <div id='content' className='main-container'>
                <img src={mvp} alt="Logo" className="logo" />
                <table className = 'table text-muted text-center'>
                    <thead>
                        <tr style={{color:'black'}}>
                            <th scope='col'>사용자 총 투표 횟수</th>
                            <th scope='col'>투표 종료 횟수 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{color:'black'}}>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} 회</td>
                            {/* replace count function ... 수정 필요 */}
                            <td>{this.props.unstakeCount} 회</td>
                        </tr>
                    </tbody>
                </table>
                <span className='balance-text'>
                    투표 종료까지 남은 투표수: {window.web3.utils.fromWei(this.props.mvpBalance, 'Ether')}
                </span>
                <div>
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
            <label className='float-left' style={{marginLeft:'15px'}}><b>증가시킬 투표 횟수</b></label>
            <span className='float-right' style={{marginRight:'8px'}}>
            남은 MVP토큰: {window.web3.utils.fromWei(this.props.mvpBalance, 'Ether')} 개
            </span>
            <div className='input-group mb-4'>
                <input
                ref={(input) => {this.input = input} }
                type='text'
                placeholder='0'
                required/>
                <div className='input-group-append'>
                    <div className='input-group-text'>
                        &nbsp;&nbsp;&nbsp;회
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type='submit' className='btn btn-send action-btn'>사용자 총 투표 횟수 증가시키기</button>
                <button 
                    onClick={(event) =>{
                        event.preventDefault()
                        this.props.unstakeTokens()
                    }}
                    className='btn btn-take action-btn'>투표 종료 횟수 증가시키기</button>
            </div>
        </div>
    </form>
</div>
                    <div className='button-container' style={{ justifyContent: 'center' }}>
                        <button
                            onClick={() => window.location.href='https://sony-babba.vercel.app/admin'}
                            className='btn btn-back action-btn'>뒤로가기</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
