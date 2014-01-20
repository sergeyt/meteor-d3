Package.describe({
  summary: 'd3 - a small, free JavaScript library for manipulating documents based on data.'
});

Package.on_use(function(api){
  api.add_files('d3/d3.min.js', 'client');
});

