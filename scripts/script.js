var svg = d3.select("svg");

d3.csv("../data/baseball-war.csv", function(error, data) {
    console.log(data);    
});
