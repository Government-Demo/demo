import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../store/action/itemsAction";

class items extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.items;
    console.log(items);

    return (
      <div>
        {items.map((i) => (
          <h6 key={i.id}>{i.title}</h6>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ items: state.items });

export default connect(mapStateToProps, { getItems })(items);
