function TodoItem1() {
    let todoname = 'Buy Milk';
    let tododate = '4/10/2023'
    return (   <div class="container">
        <div class="row kg-row">
            <div class="col-6">{todoname}</div>
            <div class="col-4">{tododate}</div>
            <div class="col-2 kg-button"><button type="button" class="btn btn-danger">Danger</button></div>
        </div>
    </div>);
 
}
export default TodoItem1;