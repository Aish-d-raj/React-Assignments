import './css/FunctionComponent.css';
function FunctionComponent(props){
    return (
        <div className="function">
            <h1>Function Component</h1>
            <table className="tbl">
                <tr><th>ID</th><th>Name</th><th>Author</th><th>Publication</th></tr>
            {
                props.books.map((book)=>
                <tr><td>{book.id}</td><td>{book.name}</td>
                <td>{book.author}</td><td>{book.publication}</td>
                </tr>
                )
            }
            </table>
           
        </div>
    );
    }
    
    export default FunctionComponent;