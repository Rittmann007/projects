import { useState, useCallback, useEffect, useRef } from "react";
import Layout from "./Layout";

// learn to use api and render using reusable components
function App() {
  const [user, setuser] = useState("Rittmann007");
  const [userdata, setuserdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  async function fetchdata() {
    try {
      setloading(true);
      const response = await fetch(`https://api.github.com/users/${user}`);
      const data = await response.json();

      if (data) {
        setuserdata(data);
        setloading(false);
      }
    } catch (error) {
      seterror(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function submit() {
    fetchdata();
  }

 if (loading) {
  return (<p>loading please wait</p>)
 }

 if (error!="") {
  return(<p>error</p>)
 }

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-black h-screen">
        <div className="my-2">
          <input
            type="text"
            value={user}
            onChange={(e) => {
              setuser(e.target.value);
            }}
            placeholder="enter username ..."
            name="search input"
            className="border rounded m-2"
          />
          <button onClick={submit} className="border rounded bg-blue-700 p-1 text-stone-100">search</button>
        </div>
        {userdata && <Layout data={userdata} />}
      </div>
    </>
  );
}

export default App;
