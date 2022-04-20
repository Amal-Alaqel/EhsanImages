const qs = require('qs');
var http = require('http');

const query = qs.stringify({
  filters: {
    name: {
      $eq: 'المشاريع',
    },
  },
    populate: {                          
            ihsans:{
              populate: ['Image']
            }          
       },  
}, 
{
  encodeValuesOnly: true,
});

  
var options = {
    host: 'localhost',
    port:1339,
    path: `/api/categories?${query}`,
    method: 'GET'
};
  
http.get(options, function(res) {
    console.log("Path: " + options.path);
    //console.log("Got response: " + res.statusCode);
  
    res.on("data", function(chunk) {    
      //console.log("BODY: " + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  