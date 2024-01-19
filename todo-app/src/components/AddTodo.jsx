function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row ms-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" placeholder="dd/mm/yyyy" />
        </div>
        <div className="col-2">
          <button className="btn btn-success ms-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
