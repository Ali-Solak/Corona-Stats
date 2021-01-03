import React, {Component} from 'react';
import axios from 'axios';
import Tag from '../../components/charts/tags/tag';
import TagBox from '../../components/charts/tags/tagBox/tagBox';
import Spinner from "../../components/UI/Spinner/Spinner";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import CountryChart from '../../components/charts/countryChart/countryChart';

class DetailedView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: [],
            loading: false,
            countries: [],
            countryHist: [],
            selectedCountry: ""
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        axios.all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries"),
            axios.get(`https://disease.sh/v2/historical/${this.state.selectedCountry}?lastdays=30`)
        ])
            .then(axios.spread((...responses) => {
                this.setState({total: responses[0].data});
                this.setState({countries: responses[1].data});
                this.setState({countryHist: responses[2].data});
                this.setState({loading: false});
                return responses[0];
            })).catch(error => {
            console.log(error);
            return null;
        });
    };

    handleChange = (e) => {
        this.setState({selectedCountry: e.target.value});
    }

    render() {
        let spinner = null;
        if (this.state.loading) {
            spinner = <Spinner/>;
        }

        let countryData = null;
        let histChart = null;

        if (this.state.selectedCountry) {
            countryData = this.state.countryHist.find(c => c.country === this.state.selectedCountry && c.province === null);
            if (countryData) {
                histChart = (
                    <CountryChart countryData={countryData}/>
                )
            }
        }

        return (
            <div>
                <TagBox>
                    <Tag titel={"Total Deaths:"} spinner={spinner}>{this.state.total.deaths}</Tag>
                    <Tag titel={"Total Cases:"} spinner={spinner}>{this.state.total.cases}</Tag>
                    <Tag titel={"Total Deaths Today:"} spinner={spinner}>{this.state.total.todayDeaths}</Tag>
                    <Tag titel={"Total Cases Today:"} spinner={spinner}>{this.state.total.todayCases}</Tag>
                </TagBox>
                <Dropdown countries={this.state.countries} handleChange={this.handleChange}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                {histChart}
                </div>
            </div>
        );
    }
}

export default DetailedView;