import "./Contacts.css";
function Contacts(){
    return(
        <div>
            <h1 className="Title">Contact Books</h1>
            <div className="heading-tag">
                <form>
                    <label>Enter your name</label>
                    <input type="text"></input>
                    <label>Enter your phone number</label>
                    <input type="text"></input>
                    <label>ADD</label>
                    <input type="button"></input>
                </form>
               <form>
                <label>Search</label>
                <input type="text"></input>
               </form>
            </div>
            <div className="table-container">

                <table>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Contacts</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Aryan Shaw</td>
                            <td>7439xxxxxx</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Rahul Agarwal</td>
                            <td>85839xxxx</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Harsh Gupta</td>
                            <td>88888xxxxx</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );
}
export default Contacts;