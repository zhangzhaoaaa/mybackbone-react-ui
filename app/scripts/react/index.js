define(function(require,exports, module) {
  var $ = require('jquery');
  var React = require('react');
  var Backbone = require('backbone');
  var MyTable = require('./components/table/Table');
  var ReactApp={
    getJsonData:function(data){
      alert('收集数据！'+data);
    },
    getInstance:function(model,options){
      var modelData = new Backbone.Model(model);
      React.render(React.createElement(MyTable, {data: modelData, onGetJsonData: this.getJsonData}), $('#example')[0]);
    }
  };
  return ReactApp;
});
