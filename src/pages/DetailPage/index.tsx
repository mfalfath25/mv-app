import { useParams } from "react-router-dom";
import Banner from "./_components/Banner";
import { useGetMovieByIdQuery } from "@/services/movie";
import Details from "./_components/Details";
import Loader from "@/components/Loader";

const DetailPage = () => {
  const params = useParams();

  const { currentData, isLoading } = useGetMovieByIdQuery(
    {
      i: params.id,
      plot: "full",
    },
    { skip: !params }
  );
  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Banner data={currentData} />
            <Details data={currentData} />
          </>
        )}
      </div>
    </>
  );
};

export default DetailPage;
