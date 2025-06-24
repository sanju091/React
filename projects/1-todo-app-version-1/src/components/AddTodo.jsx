function AddTodo() {
    return ( <div class="row kg-row">
        <div class="col-6"><input type="text" placeholder="Enter Todo Here!" /></div>
        <div class="col-4"><input type="date" /></div>
        <div class="col-2 kg-button"><button type="button" class="btn btn-success">Add</button></div>
      </div>);
}
export default AddTodo;