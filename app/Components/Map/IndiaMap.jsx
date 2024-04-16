import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { buttonStyles } from '../../phasesData';

export let handleClick;
export let AddColors;
const IndiaMap = ({type,Data}) => {
  const [key,setKey]=useState('array')
	
	
  console.log(key)
useEffect(()=>{
  if (type === 'assembly') {
    setKey('array2')
  }
  else {
    setKey('array')
  }
  
},[type])

    // console.log(Data,"akjs")
    const svgRef = useRef();
    const tooltipRef = useRef(null);

    useEffect(() => {
        const width = 600;
        const height = 550;
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .classed("svg-container", true)
            .style("cursor", "pointer"); 
   
            
            

        const projection = d3.geoMercator()
            .center([102, 21])
            .scale(720);

        const path = d3.geoPath().projection(projection);

        const g = svg.append("g")
            .attr("class", "regions");

            handleClick = (color, arr,type) => {
                console.log(type)
                let key;
                if(type==='assembly'){
                    key='AC_NAME'
                }
                else{
                    key='displayName'
                }
                console.log(key)
            
              svg.selectAll("path")
                .style("fill", d => arr.includes(d.properties[key]) ? color : "white"); 
              console.log(svg.selectAll("path"))
            };
            AddColors = (color, arr,type) => {
              console.log(type)
              let key;
              if(type==='assembly'){
                  key='AC_NAME'
              }
              else{
                  key='displayName'
              }
              console.log(key)
          
            svg.selectAll("path")
              .style("fill", d => arr.includes(d.properties[key]) && color  ); 
            console.log(svg.selectAll("path"))
          };    
        // const mapData = topojson.feature(indiaJSON, indiaJSON.objects.india_pc_2014);
        // const mapData_ = topojson.feature(indiaJSON_);
        // console.log(indiaJSON_['features'])      // const stateData=mapData.feature.ST_NAME

        g.selectAll("path")
            .data(Data)
            .enter().append("path")
            .attr("d", path)
            .style("stroke", "lightGray")
            .style("stroke-width", 0.7)
            .style("opacity", 1)
            .style("fill", "white")
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);

        return () => {
            g.selectAll("path").remove();
        };
    },[Data] );
    
    const handleMouseOver = (event, d) => {
        let key;
        let fillColor;
        if(type==='assembly'){
          key='AC_NAME'
        }
        else{
            key='displayName'
        }
        
        const [x, y] = d3.pointer(event);
        const name = d.properties[key];
        showTooltip(x + 20, y, name);
        d3.select(event.target).style("fill", "yellow");
    };
    

    const handleMouseOut = (event) => {
        hideTooltip();
        d3.select(event.target).style("fill", "white");
        buttonStyles.map((e)=>AddColors(e.borderColor,e[key],type))
    };
    useEffect(()=>{ buttonStyles.map((e)=>AddColors(e.borderColor,e[key],type))},[Data])
    const showTooltip = (x, y, name) => {
        d3.select(tooltipRef.current)
            .style("display", "block")
            .style("left", x + "px")
            .style("top", y + "px")
            .text(name);
    };
    
    
    
    const hideTooltip = () => {
        d3.select(tooltipRef.current).style("display", "none");
    };


    return (
        <div style={{ position: 'relative' }}>
            <svg ref={svgRef}></svg>
            <div ref={tooltipRef} style={{ position: 'absolute', display: 'none', backgroundColor: 'white', padding: '5px', border: '1px solid black' }}></div>
        </div>
    )
}

export default IndiaMap;
