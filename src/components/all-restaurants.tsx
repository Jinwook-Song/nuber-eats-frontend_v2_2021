import { RestaurantsPageQuery_restaurants_results } from "../__generated__/RestaurantsPageQuery";

function AllRestaurants({
  id,
  coverImg,
  name,
  category,
  address,
}: Partial<RestaurantsPageQuery_restaurants_results>) {
  return (
    <div className="w-full h-40 grid grid-cols-5 overflow-hidden hover:bg-yellow-50 transition-colors">
      <img
        className="col-span-3 w-full h-full"
        src={coverImg}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
        alt={id?.toString()}
      />
      <div className="col-span-2 ml-3 flex flex-col">
        <h5 className="font-bold text-lg">{name}</h5>
        <span className="opacity-70 text-sm mb-1 font-light capitalize">
          {category?.name}
        </span>
        <span className="opacity-70 text-sm font-light">{address}</span>
      </div>
    </div>
  );
}

export default AllRestaurants;
