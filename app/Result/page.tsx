import {
  algorithm,
  getDiningTimeDetails,
  retrieveLogo,
  updatePickedRestaurant,
} from "@/actions/functions";
import Banner from "@/components/Result/Banner";
import RestaurantImagesCarousel from "@/components/Result/RestaurantImagesCarousel";
import ResultInfo from "@/components/Result/ResultInfo";
import React from "react";

type Props = {
  searchParams: {
    groupId: string;
  };
};

// Since we're using async operations, we need to mark the component as async
const Page = async ({ searchParams }: Props) => {
  // Convert groupId to number since you mentioned it should be a number
  const groupId = parseInt(searchParams.groupId);
  const now = new Date();

  // Validate groupId
  if (isNaN(groupId)) {
    throw new Error("Invalid group ID provided");
  }

  try {
    const result = await getDiningTimeDetails(groupId);

    // Get restaurant recommendation
    const restaurant = await algorithm(
      groupId,
      result!.day,
      result!.hour,
      result!.minute,
      // now.getDay(),
      // now.getHours(),
      // now.getMinutes(),
    );

    await updatePickedRestaurant(groupId, restaurant.bestRestaurant.id);
    // Fetch restaurant logo
    const restaurant_logo = await retrieveLogo(restaurant.bestRestaurant.id);

    console.log("Results - Received groupId:", groupId); // debug line

    return (
      <div>
        <Banner restaurantUrl={restaurant_logo?.url2 || ""} />
        <ResultInfo
          simularity={restaurant.similarity}
          restaurant={restaurant.bestRestaurant}
        />
      </div>
    );
  } catch (error) {
    // Handle any errors that might occur during the async operations
    console.error("Error fetching restaurant data:", error);
    return (
      <div className="p-4">
        <p>Error loading restaurant information. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
