import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [filteredData, setFilteredData] = useState(null);
  const [data, setDAta] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Eror, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("All");
  const filterFood = (type) => {
    if (type === "All") {
      setFilteredData(data);
      setSelectedBtn("All");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setDAta(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchdata();
  }, []);
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };
  if (Eror) return <div>{Eror}</div>;
  if (Loading) return <div>Loading....</div>;
  return (
    <div className="max-w-[1270px]  gap-10 ">
      <div className="min-h-[140px] flex justify-between items-center bg-gray-800 ">
        <div className="w-70 flex justify-center">
          <img src="./Foody.svg" alt="" />
        </div>
        <div className="flex justify-baseline flex-col">
          <input
            onChange={searchFood}
            type="text"
            placeholder="search food"
            className="border-2 h-10 text-[14px] px-10 py-0 placeholder:text-gray-600 bg-transparent  border-red-600 rounded-sm w-50 mr-14
            text-white placeholder:text-[20px]"
          />
          <p className="mt-1 px-1 text-red-400">"Click Enter Key for Search"</p>
        </div>
      </div>
      <div className="  flex justify-center content-center gap-4 border-none text-white  pb-5 bg-gray-800  ">
        <button
          className="bg-[#ff4343] rounded-sm border-none w-10 cursor-pointer"
          onClick={() => filterFood("All")}
        >
          All
        </button>

        <button
          className="bg-[#ff4343] rounded-sm px-6  border-none w-23 h-8 flex items-center content-center justify-center cursor-pointer"
          onClick={() => filterFood("Breakfast")}
        >
          Breakfast
        </button>

        <button
          className="bg-[#ff4343] rounded-sm px-6  border-none w-20 cursor-pointer"
          onClick={() => filterFood("Lunch")}
        >
          Lunch
        </button>

        <button
          className="bg-[#ff4343] border-r-[5px] rounded-sm w-20 border-none cursor-pointer"
          onClick={() => filterFood("Dinner")}
        >
          Dinner
        </button>
      </div>
      <SearchResult data={filteredData} />
    </div>
  );
}

export default App;
