import React, { useState } from 'react';
import './styles.css'; // Import the CSS file for styling
import investImage from './images/invest_image.jpg';
import financeImage from './images/finance_image.jpg';

function TVMCalculator() {
    const [presentValue, setPresentValue] = useState('');
    const [futureValue, setFutureValue] = useState('');
    const [annualRate, setAnnualRate] = useState('');
    const [periods, setPeriods] = useState('');

    const calculateFutureValue = () => {
        const pv = parseFloat(presentValue);
        const rate = parseFloat(annualRate);
        const n = parseFloat(periods);
        const fv = pv * Math.pow(1 + rate, n);
        setFutureValue(fv.toFixed(2));
    };

    const calculatePresentValue = () => {
        const fv = parseFloat(futureValue);
        const rate = parseFloat(annualRate);
        const n = parseFloat(periods);
        const pv = fv / Math.pow(1 + rate, n);
        setPresentValue(pv.toFixed(2));
    };

    const calculateNumberOfPeriods = () => {
        const pv = parseFloat(presentValue);
        const fv = parseFloat(futureValue);
        const rate = parseFloat(annualRate);
        const n = Math.log(fv / pv) / Math.log(1 + rate);
        setPeriods(n.toFixed(2));
    };

    const calculateAnnualInterestRate = () => {
        const pv = parseFloat(presentValue);
        const fv = parseFloat(futureValue);
        const n = parseFloat(periods);
        const rate = Math.pow(fv / pv, 1 / n) - 1;
        setAnnualRate(rate.toFixed(4));
    };

    return (
        <div className="calculator-container"><center>
            <h2 className="calculator-title">Time Value of Money Calculator</h2>
            <div className="input-section">
                <div className="input-item">
                    <label>Present Value : มูลค่าปัจจุบัน</label>
                    <input type="number" value={presentValue} onChange={e => setPresentValue(e.target.value)} />
                </div>
                <div className="input-item">
                    <label>Future Value : มูลค่าในอนาคต</label>
                    <input type="number" value={futureValue} onChange={e => setFutureValue(e.target.value)} />
                </div>
                <div className="input-item">
                    <label>Annual Rate (as decimal) : ผลตอบแทน %</label>
                    <input type="number" value={annualRate} onChange={e => setAnnualRate(e.target.value)} />
                </div>
                <div className="input-item">
                    <label>Periods : ระยะเวลา ปี </label>
                    <input type="number" value={periods} onChange={e => setPeriods(e.target.value)} />
                </div>
            </div>
            <div className="button-section">
                <button onClick={calculateFutureValue}>Calculate Future Value</button>
                <button onClick={calculatePresentValue}>Calculate Present Value</button>
                <button onClick={calculateNumberOfPeriods}>Calculate Number of Periods</button>
                <button onClick={calculateAnnualInterestRate}>Calculate Annual Interest Rate</button>
            </div>
            {/* <div className="image-section">
                <img src={investImage} alt="Investing" className="fixed-image" />
                <img src={financeImage} alt="Finance" className="fixed1-image" />
            </div> */}
            </center>
        </div>
    );
}

export default TVMCalculator;
