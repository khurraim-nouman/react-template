import React from 'react'
import './Profit.css'

export default function Profit() {
    return (
        <>

        <div className='container mt-5'>

            <div className='d-flex heading'>
                <i class="fa fa-check" aria-hidden="true"></i>
                <p>Element Transactions</p>
            </div>

            <div className='item mb-3'>
                Lorem Ipsum
            </div>

            <div className='item mb-3'>
                Lorem ipsum
            </div>

            <div className='item mb-3'>
                Lorem ipsum
            </div>


            <div className='d-flex heading-second'>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <p>Element Transactions</p>
            </div>

            <div className='item mb-3'>
                <span className='pe-5'>Lorem Ipsum</span>
                <i className="fa fa-upload" aria-hidden="true"></i>
            </div>

            <div className='item mb-3'>
                <span className='pe-5'>Lorem Ipsum</span>
                <i className="fa fa-upload" aria-hidden="true"></i>
            </div>



        </div>    
        </>
    )
}
