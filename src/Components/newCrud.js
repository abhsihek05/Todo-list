import React from 'react'
import '../AllCss/Crud.css';
import {Link} from 'react-router-dom';

export default class newCrud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tdata: [], count: 2, val: "click here" };
        // this.Click = this.Click.bind(this);

    }
    componentDidMount(){
        let Fdata = window.localStorage.getItem("form_data");
        let newFdata = JSON.parse(Fdata);
        this.setState({ Tdata: newFdata });
        console.log(this.state.Tdata);
    }
    deleteItem(even){
        window.localStorage.clear(even);
        let arra = this.state.Tdata;
        console.log(arra);
        arra.splice(even ,1);
        this.setState({Tdata:arra});
    }


    render() {
        return (
            <>
                <h1>hello abhishek</h1>
            
                <h2>
                    this is list
                </h2>
                <div className="table-main-div">
                <Link to="/log"><button className="add-new-btn">Add new</button></Link>
                    <table>
                        {/* <Link to="/log"><button className="add-new-btn">Add new</button></Link> */}
                        <tbody>
                            <tr>
                                <th># Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                      
                                {
                                    this.state.Tdata.map((x, i) =>
                                    <tr><td>{i}</td>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{x.password}</td>
                                        <td>{x.phone}</td>
                                        <td><button onClick={()=>this.deleteItem(i)}>Delete</button></td>
                                        <td><button onClick={()=>this.updataItem(i)}>Updata</button></td>

                                   </tr>
                                    )
                                }

                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}



// {
//     this.state.Tdata.map((x,i) => {
//         <>
//             <td>{i}</td>
//             <td>{x.name}</td>
//             <td>{x.email}</td>
//             <td>{x.password}</td>
//             <td>{x.phone}</td>
//         </>
   

//     })
// }