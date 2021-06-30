import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {Col,Row,Container} from 'react-bootstrap';
import WidgetText from './widgetText'
import Sample from './ag_grid'
import SearchBox from './SearchBox';
import TestingChart from './drilldown';
import { NavLink } from 'react-router-dom';


import Box from '@material-ui/core/Box';
class dashboard extends Component {
      render() {
        const options = {
          
            title: {
              text: 'Historical Cummulative Returns',
              style: {
                fontSize: "2em",
                fontWeight: "600",
                fontFamily: "Roboto",
                color: "black"
              },
            },
            /*legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
            },*/
            series: [{
              name: 'ICICI Prudential Focused Bluechip Equity Fund.',
              data: [-50 , 0, 550, 300, 100, 650, 350, 100, 1000],
              type: 'line'
            },
            {
              name: 'Aditya Birla Sun Life Small & Midcap Fund.',
              data: [-108 , 0, 507, 415, 1000, 560, 300, 800, 250],
              type: 'line'
            },
            {
              name: 'Tata Equity PE Fund',
              data: [-60 , 0, 100, 200, 300, 600, 700, 850, 900],
              type: 'line'
            },
            {
              name: 'HDFC Monthly Income Plan – MTP.    ',
              data: [-50 , 100, 200, 300, 400, 300, 350, 500, 700],
              type: 'line'
            },
          ],
            yAxis: {
              title: {
                text: 'Cummulative return (In percentages)', 
              },
              labels: {
                formatter: function() {
                    return this.value + ' %';
                }
            },
            },
          
            xAxis: {
              accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
              }
            },
            plotOptions: {
              series: {
                      pointStart: 2010
              }
            },
            /*responsive: {  
              rules: [{  
                condition: {  
                  maxWidth: 1000  
                }  
                chartOptions: {  
                  legend: {  
                    enabled: true  
                  }  
                }  
              }]  
            }*/   
          }
          
        return (
          <div>
 <Container fluid>
<Row className='TopHeader'>
 <Col>
 <img src="./MarketviewLogo.ico" alt="MarketViewLogo" width="100" height="100" align="left"></img> </Col>
<Col className="skewtext">
 Market  View
</Col>
<br></br>
<Col align="right"> 
<NavLink to="/contact">Contact</NavLink></Col>
  </Row>
</Container>
<br></br>
<Container fluid>
<Row>
  <Col >
  <SearchBox ></SearchBox>
  </Col>
</Row>
</Container>
<br></br>
<Box className="BoxChart">
<Container fluid>
<Row >
<Col>
    <WidgetText title='NAV' value='58.88₹' description='Net Asset Value' />
</Col>
<Col>
    <WidgetText title='One Day Returns' value='100₹' description='Returns' />
</Col>
<Col>
    <WidgetText title='Weekly Returns' value='300₹' description='Returns' />
</Col>
</Row>

<Row>
<Col>
   <WidgetText title='Yearly Returns' value='1000₹' description ='Returns'/>
</Col>
<Col>
   <WidgetText title='Week to Date' value='800₹' description ='Returns'/>
</Col>
<Col>
   <WidgetText title='Month to Date' value='400₹' description ='Returns'/>
</Col>
</Row>
</Container>
</Box>
<Box className="BoxChart">
<Container fluid>
<br></br>
<Row width="100%">
<Col>
<TestingChart />
</Col>
<br></br>
</Row>
</Container>
<br></br>
<br></br>

<HighchartsReact  highcharts={Highcharts} options={options}/>
<br></br>
<Container fluid>
<Row>
    <Col >
    <Sample /> 
    </Col>   
    <Col>

            <Box className="BoxValue">
            <hX className="AssetTitle">Similar Assets</hX>
              <ul>
              <li>ICICI Prudential Focused Bluechip Equity Fund</li>
              <li>Aditya Birla Sun Life Small & Midcap Fund</li>
              <li>Tata Equity PE Fund</li>
              <li>L&T Tax Advantage Fund</li>
              <li>SBI Nifty Index Fund.</li>
              <li>Kotak Corporate Bond Fund.</li>
              <li>ICICI Prudential Focused Bluechip Equity Fund</li>
              <li>Aditya Birla Sun Life Small & Midcap Fund</li>
              <li>Tata Equity PE Fund</li>
              <li>L&T Tax Advantage Fund</li>
              <li>SBI Nifty Index Fund.</li>
              <li>Kotak Corporate Bond Fund.</li>
              </ul></Box>
              
     </Col>
</Row>
</Container>
</Box>
              
          </div>
          
        );
    }
    
}

export default dashboard;