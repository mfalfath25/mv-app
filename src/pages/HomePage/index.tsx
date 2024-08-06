import Search from "@/components/Search";
import { useLocation } from "react-router-dom";
import { useGetMoviesQuery } from "@/services/movie";

import Banner from "./_components/Banner";
import PopularList from "./_components/PopularList";
import SearchedList from "./_components/SearchedList";
import DefaultList from "./_components/DefaultList";

const HomePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchParam = params.get("search");
  const { currentData, isLoading } = useGetMoviesQuery(
    {
      s: searchParam || "2024",
      type: "movie",
      page: "1",
    },
    { skip: !searchParam }
  );

  return (
    <>
      <div>
        <Banner />
        <div className="container mx-auto px-4">
          <Search />
          {!searchParam && <PopularList />}
          {!searchParam && <DefaultList />}
          {searchParam && (
            <SearchedList
              data={currentData}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
