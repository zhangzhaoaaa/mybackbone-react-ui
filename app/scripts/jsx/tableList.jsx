define(function(require,exports, module) {
  var $ = require('jquery');
  var React = require('react');
  var Backbone = require('backbone');
  var MyTable = require('./components/table/MyTable');
  var ReactApp={
    getJsonData:function(data){
      alert('Collect1 data！'+data);
    },
    getInstance:function(model,options){
      var data = [{a: '123'}, {a: 'cdd', b: 'edd'}, {a: '1333', c: 'eee', d: 2}];
      React.render(<MyTable data={data} onGetJsonData={this.getJsonData} />, $('#example')[0]);
    }
  };
  return ReactApp;
  //module.exports=ReactApp;
});
