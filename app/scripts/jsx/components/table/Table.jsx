define(function(require,exports, module) {
  var React  = require('react');
  var TableRow  = require('./TableRow');
  var Table = React.createClass({
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
          return <th key={c.key} className={c.className || ''}>{c.title}</th>;
      });
    },
    getRowsByData(data, visible) {
      var props = this.props;
      var columns = props.columns;
      var rst = [];
      var keyFn = props.rowKey;
      for (var i = 0; i < data.length; i++) {
        var record = data[i];
        rst.push(<TableRow
          record={record}
          index={i}
          columns={columns}
          />);
      }
      return rst;
    },

    getRows() {
      return this.getRowsByData(this.state.data, true);
    },
    render:function(){
      var columns = this.getThs();
      var rows = this.getRows();
      var thead = <thead className=''>
        <tr>
          {columns}
        </tr>
        </thead>;
      return (
          <div>
            <table>
              {thead}
              <tbody>
              {rows}
              </tbody>
              </table>
          </div>
      );
    }
  });
  module.exports=Table;
});
