define(function(require,exports, module) {
  var React  = require('react');
  var TableRow = React.createClass({displayName: "TableRow",
    render:function(){
      var props = this.props;
      var columns = props.columns;
      var record = props.record;
      var index = props.index;
      var cells=[];
      for (var i=0,len=columns.length;i<len;i++){
        var col = columns[i];
        var colClassName = col.className||'';
        var render = col.render;
        var text = record[col.dataIndex];
        if (render){
          text = render(text,record,index);
        }
        cells.push(
          React.createElement("td", {key: col.key, className: colClassName}, 
            text
          )
        );
      }
      return (React.createElement("tr", null, cells));
    }
  });
  module.exports=TableRow;
});
