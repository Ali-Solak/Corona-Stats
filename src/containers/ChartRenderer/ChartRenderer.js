import React, {Component} from 'react';
import axios from 'axios';
import CountryChart from "../../components/charts/mapChart/mapChart";
import Switch from "../../components/UI/Switch/Switch";
import Container from '@material-ui/core/Container';
import classes from './ChartRenderer.css';
import Chip from '@material-ui/core/Chip';
import Spinner from "../../components/UI/Spinner/Spinner";


class ChartRenderer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countriesData: [],
            stats: [],
            loading: false,
            isOn: false,
            content: ""
        };
    }


    componentDidMount() {
        this.setState({loading: true});
        axios.get("https://corona.lmao.ninja/v2/countries").then(response => {
            this.setState({countriesData: response.data});
            this.setState({loading: false});
            return response;
        }).catch(error => {
            console.log(error);
            return null;
        });
    };

    setTooltipContent = (content) => {
        this.setState({content: content});
    }

    switchHandler = () => {
        this.state.isOn ? this.setState({isOn: false}) : this.setState({isOn: true});
    }

    render() {
        let stats = [];

        if (this.state.isOn) {
            this.state.countriesData.map(d => {
                return stats.push({
                    ISO3: d.countryInfo.iso3,
                    value: d.cases
                })
            });
        } else {
            this.state.countriesData.map(d => {
                return stats.push({
                    ISO3: d.countryInfo.iso3,
                    value: d.deaths
                })
            });
        }

        return (
            <React.Fragment>
                <div className={classes.info}>
                    <Switch
                        isOn={this.state.isOn}
                        handleToggle={() => this.switchHandler()}
                    />
                    <Chip label={this.state.isOn ? `Cases: ${this.state.content}` : `Deaths: ${this.state.content}`}/>
                </div>
                <Container fixed>
                    <p>{this.state.loading ? <Spinner/> : null}</p>
                    <div className={classes.blox}>
                        <CountryChart stats={stats} setTooltipContent={(param) => this.setTooltipContent(param)}/>
                    </div>
                </Container>
            </React.Fragment>
        );

    }
}

export default ChartRenderer;