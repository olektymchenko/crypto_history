import React, { Component } from 'react';
import Select from './Select';
import Chart from './Chart';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            selectedCurrency: 'BTC',
            dateFrom: '',
            dateTo: '',
            dataToCurve: []
        }
    }
    API_KEY = "e5716abb77f73b515b8ba46d2cb97e68";

    setCurrency = (e) => {
        let currency = e.target.value;
        this.setState({ selectedCurrency: currency })
    }
    setDateFrom = (e) => {
        let dateFrom = e.target.value + "T00%3A00%3A00Z";
        this.setState({ dateFrom: dateFrom })
    }
    setDateTo = (e) => {
        let dateTo = e.target.value + "T00%3A00%3A00Z";
        this.setState({ dateTo: dateTo })
    }
    getData = () => {
        fetch(`https://api.nomics.com/v1/exchange-rates/history?key=${this.API_KEY}&currency=${this.state.selectedCurrency}&start=${this.state.dateFrom}&end=${this.state.dateTo}`)
            .then(response => response.json())
            .then(data => {
                let allDayPrices = [];
                for (let i = 0; i < data.length; i++) {
                    let oneDayPrice = {};
                    oneDayPrice.day = data[i].timestamp.split("T")[0];
                    oneDayPrice.price = data[i].rate.split(".")[0];
                    allDayPrices.push(oneDayPrice);
                }
                this.setState({ dataToCurve: allDayPrices });
            })
    }

    render() {
        return (
            <div className="Body">
                <Select setCurrency={this.setCurrency} value={this.state.selectedCurrency} setDateFrom={this.setDateFrom} setDateTo={this.setDateTo} getData={this.getData} />
                {this.state.dataToCurve && <Chart dataToCurve={this.state.dataToCurve} />}
            </div>
        )
    }

}
export default Body;