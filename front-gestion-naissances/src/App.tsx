import Users from "./pages/Users";
import { USERS } from "./utils/data";

function App() {
  return (
    <section className="container mx-autto border border-gray-200">
       <Users users={USERS}/>
         
    </section>
  );
}
export default App;