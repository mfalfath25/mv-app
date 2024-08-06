import BannerImage from "@/assets/banner-1.jpg";

const Banner = () => {
  return (
    <div>
      <img
        src={BannerImage}
        alt="Movie Banner"
        className="h-72 w-full object-cover"
      />
    </div>
  );
};

export default Banner;
