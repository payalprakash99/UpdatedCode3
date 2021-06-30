import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


import "./ag_grid.css";

class Sample extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      columnDefs: [
        {
          headerName: "Athlete",
          field: "athlete",
          width: 150,
          suppressSizeToFit: true
        },
        {
          headerName: "Age",
          field: "age",
          width: 90,
          minWidth: 50,
          maxWidth: 100
        },
        {
          headerName: "Country",
          field: "country",
          width: 120
        },
        {
          headerName: "Year",
          field: "year",
          width: 90
        },
        {
          headerName: "Date",
          field: "date",
          width: 110
        },
        {
          headerName: "Sport",
          field: "sport",
          width: 110
        },
        {
          headerName: "Gold",
          field: "gold",
          width: 100
        },
        {
          headerName: "Silver",
          field: "silver",
          width: 100
        },
        {
          headerName: "Bronze",
          field: "bronze",
          width: 100
        },
        {
          headerName: "Total",
          field: "total",
          width: 100
        }
      ],
      rowData: []
    };
  }

  _fetchData(cb) {
    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      // this.setState({ rowData: data });
      cb(data);
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  }

  onGridReady(params) {
    console.log(params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    var that = this;
    params.api.setDatasource({
      getRows(params) {
        console.log("getRows", params);
        that._fetchData(data => params.successCallback(data));
      }
    });
  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }
  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div class="grid-wrapper">
          <div
            id="myGrid"
            style={{
              boxSizing: "border-box",
              height: "105%",
              width: "100%",
              border: "3px"
            }}
            className="ag-theme-balham"
          >
          <div >
          <button className="button1" onClick={this.sizeToFit.bind(this)}>Size to Fit</button>
          <button className="button1" onClick={this.autoSizeAll.bind(this)}>Auto-Size All</button>
        </div>
            <AgGridReact
              rowModelType="infinite"
              columnDefs={this.state.columnDefs}
              enableColResize={true}
              onGridReady={this.onGridReady.bind(this)}
              rowData={this.state.rowData}
              enableFilter={true}
              enableSorting={true}
              enableServerSideFilter={true}
              enableServerSideSorting={true}
              onFilterModified={(...a) => console.log("onFilterModified", ...a)}
              onFilterChanged={(...a) => console.log("onFilterChanged", ...a)}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham">
        <Sample />
      </div>
    );
  }
}
export default Sample
