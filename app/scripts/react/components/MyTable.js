define(function(require,exports, module) {
  var React  = require('react');
  var Table  = require('./Table');
  var CheckBox = React.createClass({displayName: "CheckBox",
    render: function () {
      return (
        React.createElement("label", null, 
          React.createElement("input", {type: "checkbox"}), 
          this.props.id
        )
      );
    }
  });
  var MyTable = React.createClass({displayName: "MyTable",
    getInitialState: function () {
      return {
        data: this.props.data
      };
    },
    handleClick: function (index) {
      var self = this;
      return function () {
        self.remove(index);
      };
    },
    remove: function (index) {
      var rows = this.state.data;
      rows.splice(index, 1);
      this.setState({
        data: rows
      });
    },
    renderAction: function (o, row, index) {
      return React.createElement("a", {href: "#", onClick: this.handleClick(index)}, "删除");
    },
    getRowKey(record) {
      return record.a;
    },
    render: function () {
      var state = this.state;
      var columns = [
        {title: '表头1', dataIndex: 'a', key: 'a', width: 100,render:this.checkbox},
        {title: '表头2', dataIndex: 'b', key: 'b', width: 100},
        {title: '表头3', dataIndex: 'c', key: 'c', width: 200},
        {title: '操作', dataIndex: '', key: 'x', render: this.renderAction}
      ];
      return (
        React.createElement(Table, {columns: columns, data: state.data, className: "table", rowKey: this.getRowKey}
          )
      );
    },
    checkbox: function (a) {
      return React.createElement(CheckBox, {id: a});
    }
  });
  module.exports=MyTable;
});
