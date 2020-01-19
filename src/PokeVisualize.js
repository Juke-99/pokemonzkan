import React, { Component } from 'react';
import * as d3 from 'd3';

var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 1200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var x = d3.scaleBand().range([0, width]).round(.05);
var y = d3.scaleLinear().range([height, 0]);

var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y).ticks(10);
var svg = d3.select(".visualize").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

class PokeVisualize extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    svg = d3.select(".visualize").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  }

  renderGraph(event) {
    let self = this;
    this.props.species.data.map((data, i) => {
      switch(parseInt(event.target.dataset.cell)) {
        case 1:
          self.props.species.data.forEach(d => {
            d.x = d.name;
            d.y = d.HP;
          });

          x.domain(self.props.species.data.map(d => d.name));
          y.domain([0, d3.max(self.props.species.data, d => d.HP)]);
          break;
        default:
          self.props.species.data.forEach(d => {
            d.x = d.name;
            d.y = d.HP;
          });

          x.domain(self.props.species.data.map(d => d.name));
          y.domain([0, d3.max(self.props.species.data, d => d.HP)]);
          break;
      }

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + self.height + ")")
          .call(self.xAxis)
        .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );
    
      svg.append("g")
          .attr("class", "y axis")
          .call(self.yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 5)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Frequency");

      svg.selectAll("bar")
          .data(self.props.species.data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", d => self.x(d.x))
          .attr("width", self.x.rangeBand())
          .attr("y", d => self.y(d.y))
          .attr("height", d => self.height - self.y(d.y));
    });
  }
  
  render() {
    return (
      <div>
        <div className="visualize"></div>
        <p><button data-cell="1" onClick={this.renderGraph.bind(this)}>HP</button></p>
      </div>
    );
  }
}

export default PokeVisualize;