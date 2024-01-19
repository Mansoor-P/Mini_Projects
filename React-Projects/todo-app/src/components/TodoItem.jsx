function TodoItem({todoName,todoDate}){
return <div className="container ms-row">
  <div className="row">
<div className="col-6">{todoName}</div>
<div className="col-4">{todoDate}</div>
<div className="col-2">
  <button className="btn btn-danger ms-button">Delete</button>
</div>
</div>
</div>

}
export default TodoItem;