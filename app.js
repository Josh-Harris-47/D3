var data = [
  { number: 23,
  string: "blah" },
  { number: 45,
  string: "hey" },
  { number: 132,
  string: "hello" },
  { number: 55,
  string: "how are you" },
  { number: 664,
  string: "what is up" },
  { number:12,
  string: "i/'m a boss" }
];

var max = d3.max(data.map(function(x){
return x.number;
}));


d3.select('.barchart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .style('height', '50px')
    .style('width',0)
    .style('background-color', function(d,i){
        return d3.hsl(d.number/max*150, 0.5, 0.5);
    })
    .style('margin', '5px 0');

d3.select('.barchart')
    .selectAll('div')
    .data(data)
    .transition()
    .duration(3000)
    .style('width', function(d,i){
      console.log(d.number);
        return d.number/max*100 + "%";
    });
