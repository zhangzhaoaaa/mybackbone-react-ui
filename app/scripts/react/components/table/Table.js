define(function(require,exports, module) {
  var React  = require('react');
  var TableRow  = require('./TableRow');
  var Table = React.createClass({displayName: "Table",
    getInitialState:function() {
      return {
        data: (this.props.data || []).concat()
      };
    },
    componentWillReceiveProps(nextProps) {
      if ('data' in nextProps) {
        this.setState({
          data: (nextProps.data || []).concat()
        });
      }
    },
    getThs() {
      return this.props.columns.map(function(c){
          return React.createElement("th", {key: c.key, className: c.className || ''}, c.title);
      });
    },
    getRowsByData(data, visible) {
      var props = this.props;
      var columns = props.columns;
      var rst = [];
      var keyFn = props.rowKey;
      for (var i = 0; i < data.length; i++) {
        var record = data[i];
        rst.push(React.createElement(TableRow, {
          record: record, 
          index: i, 
          columns: columns}
          ));
      }
      return rst;
    },

    getRows() {
      return this.getRowsByData(this.state.data, true);
    },
    render:function(){
      var columns = this.getThs();
      var rows = this.getRows();
      var thead = React.createElement("thead", {className: ""}, 
        React.createElement("tr", null, 
          columns
        )
        );
      return (
          React.createElement("div", null, 
            React.createElement("table", null, 
              thead, 
              React.createElement("tbody", null, 
              rows
              )
              )
          )
      );
    }
  });
  module.exports=Table;
});
