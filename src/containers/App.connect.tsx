import { connect } from "react-redux";

import App from "../components/App";
import * as actions from "../actions";
import { IStoreState, Item } from "../types";

const mapStateToProps = (state: IStoreState) => ({
  todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
  addItem: (item: Item) => dispatch(actions.addAction(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
