// React Codes
// class Menu extends React.Component
// {
//     constructor() {
//         super()
//         this.state = {
//             sQuery: "",
//             sResponse: "Response will show here"
//         }

//         // Functions need to be bind to be used
//         this.TestGet = this.TestGet.bind(this);
//         this.DisplayResponse = this.DisplayResponse.bind(this);
//     }



//     // Function to display server response
//     DisplayResponse(objData) {
//         console.log("DisplayResponse: " + JSON.stringify(objData));
//         this.setState({
//             sResponse: JSON.stringify(objData)
//         });
//     }

//     // Function to Test GET with server
//     TestGet() {
//         axios.get('http://localhost:3000/api', { params: { message: "Hello World!" } })
//         .then((response) => {
//             console.log(response.data); //View in Browser's Developer Tools

//             this.DisplayResponse(response.data);
//         })
//         .catch(function (error) {
//             this.DisplayResponse(error);
//             console.log(error);
//         });
//     }

//     render()
//     {
//         return (
//             <div>
//                 <div>
//                     <div id="Response">{this.state.sResponse}</div>
//                 </div>

//                 <div>
//                     <button onClick = {this.TestGet}>Test GET</button>
//                 </div>
//             </div>


//         );
//     }
// }

// RecatDom.render(
//     React.createElement(menu, {}),
//     document.getElementById('root')
// );



class Menu extends React.Component
{
    constructor() {
        super()
        this.state = {
            sResponse: "Response will show here."
        }

        // Functions need to be bind to be used
        this.TestGet = this.TestGet.bind(this);
        this.TestPost = this.TestPost.bind(this);
        this.CreateTable = this.CreateTable.bind(this);
        this.DisplayResponse = this.DisplayResponse.bind(this);

    }

    // Function to display server response
    DisplayResponse(objData) {
        console.log("DisplayResponse: " + JSON.stringify(objData));
        this.setState({
            sResponse: JSON.stringify(objData)
        });
    }

    // Function to Test GET with server
    TestGet() {
        axios.get('http://localhost:3000/api', { params: { message: "Hello World!" } })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
            console.log(error);
        });
    }

    // Function to Test POST
    TestPost(){
        axios.post('http://localhost:3000/api/', { message: "Hello Again!" })
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

            this.DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
            console.log(error);
        });
    }

    // Function to Create Table (incomplete)
    CreateTable(){
        axios.post('http://localhost:3000/api/table', {})
        .then((response) => {
            console.log(response.data); //View in Browser's Developer Tools

           this. DisplayResponse(response.data);
        })
        .catch(function (error) {
            this.DisplayResponse(error);
            console.log(error);
        });
    }

    render()
    {
        return (
            <div>
                <div>
                    <div id="Response">{this.state.sResponse}</div>
                </div>
                <div>
                    <button onClick = {this.TestGet}>Test GET</button>
                    <button onClick = {this.TestPost}>Test POST</button>
                </div>
                 <div>
                    <button onClick = {this.CreateTable}>Create Table</button>
                    <button id="dropTable">Drop Table</button>
                </div>
                <div>
                    {/* <input type="text" id="messageToSend" name="messageToSend"> */}
                    <button id = "insertMessage">Send</button>
                </div>
                <div>
                    <button id = "getMessages">Retrieve</button>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(Menu, {}),
    document.getElementById('root')
);