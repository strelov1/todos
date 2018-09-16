import { connect } from "react-redux";

import ToDoItem from "../components/ToDoItem";
import * as actions from "../actions";
import { IStoreState, Item } from "../types";

const mapDispatchToProps = dispatch => ({
  deleteItem: (index: number) => dispatch(actions.deleteAction(index))
});

export default connect(
  null,
  mapDispatchToProps
)(ToDoItem);
