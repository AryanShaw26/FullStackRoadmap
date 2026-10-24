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
            <div className="table-implementations">
            </div>

        </div>
    );
}
export default Contacts;