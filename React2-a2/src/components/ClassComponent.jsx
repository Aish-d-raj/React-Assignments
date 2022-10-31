import React from 'react';   
    
class ClassComponent extends React.Component { 
    render() {
        return (
            <div className="class">
                <h1>Class Component</h1>
                <table className="tbl">
                    <tr><th>ID</th><th>Name</th><th>Author</th><th>Publication</th></tr>
                {
                    this.props.books.map((book)=>
                    <tr><td>{book.id}</td><td>{book.name}</td>
                    <td>{book.author}</td><td>{book.publication}</td>
                    </tr>
                    )
                }
                </table>
               
            </div>
        );
    }
}
export default ClassComponent;