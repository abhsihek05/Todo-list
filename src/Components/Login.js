import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../AllCss/Login.css';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.islogin);
        this.state = { fields: { name: "", email: "", password: "", phone: "",type:"signup" }, arr: [], count: 1, postId: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
     


    }

    async postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    handleSubmit(event) {
        let  x = this.state.fields;
        event.preventDefault();
        // this.setState({ count: this.state.count++ });
        this.postData('https://103.82.191.222/api/api.php', x)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
            let form = localStorage.getItem("form_data");
            if(form==null){
                
             let arr = [];
             arr.push(x);
             localStorage.setItem("form_data",JSON.stringify(arr));
            }
            else{
                let arr = JSON.parse(form);
                arr.push(x);
                localStorage.setItem("form_data",JSON.stringify(arr));
            }
           // window.localStorage.setItem("form_data", JSON.stringify(this.state.fields));
    }

    handleChange(event) {
        let obj = this.state.fields;
        obj[event.target.name] = event.target.value;
        this.setState({ fields: obj });
    }


    componentDidMount() {

    }


    render() {
        // if(this.props.islogin){
        //     console.log(this.props.islogin);
        //  this.props.history.push("/")
        // }
        return (
            <>
                <div className="parent-form">
                    <div className="form-parent-div">
                        <h3>FILL UP THE FORM</h3>
                        <form onSubmit={this.handleSubmit} id="main-login"
                            action={this.props.action}
                            method={this.props.method}>
                            <label>
                                Essay:
                                <label>User Name</label>
                                <input name="name" type="text" value={this.state.fields.name} placeholder="Enter Name" onChange={this.handleChange} />
                                <label>Email</label>
                                <input name="email" type="text" value={this.state.fields.email} placeholder="Enter Email" onChange={this.handleChange} />
                                <label>Password</label>
                                <input name="password" type="text" value={this.state.fields.password} placeholder="Enter password" onChange={this.handleChange} />
                                <label>Phone</label>
                                <input name="phone" type="text" value={this.state.fields.phone} placeholder="Enter phone" onChange={this.handleChange} />
                            </label>
                                <input type="submit" value="Submit"  onLoad />
                            {/* <Link to="/"></Link> */}
                        </form>
                        <h1>{this.state.fields.name}</h1>

                    </div>
                </div>
            </>
        )




    }



    // AAP.defaultProps = {
    //     action: 'http://192.168.0.20/api/api.php',
    //     method: 'post'
    // };

    // module.exports = AAP;



}

