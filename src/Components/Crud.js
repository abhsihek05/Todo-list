import React from "react";
import '../AllCss/Crud.css';
import { Link } from 'react-router-dom';

export default class Crud extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Tdata: [] };


    }
    componentDidMount() {
        let Fdata = window.localStorage.getItem("form_data");
        let newFdata = JSON.parse(Fdata);
        console.log(newFdata);
        this.setState({ Tdata: [{ name: 'nishant' }] });

        // console.log(this.state.Tdata);

    }

    render() {
        return (
            <>
                <h1 >this is my list</h1>

                <div className="table-main-div">


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
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
                {

                }
            </>
        )
    }
}