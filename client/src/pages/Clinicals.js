

// import React from "react";
// import API from "../api/Users";

// class Clinicals extends React.Component {


//     constructor(props) {
//         super(props);
//         this.state = {
//             viewData: ""
//         };
//     }

//     componentDidMount() {
//         // this.setState({
//         //     res: "testing"
//         // })
//         API.getClinicals().then((response) => {
//             console.log(response);
//             this.setState({
//                 viewData: response.data
//             })
//         })
//     }

//     render() {
//         return (
//             <div>

//                    {this.state.viewData ? (
//                     this.state.viewData.map(view => (
                    
//                             <div>{view.nameClass}</div>
                     
//                     )
//                     )
//                 ) : null}

//                 <h3>Viewing clinicals</h3>
//                 {this.props.nameClass}
    
//             </div>
//         );
//     }
// }

// export default Clinicals;
