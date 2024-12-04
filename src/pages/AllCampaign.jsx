import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";


const AllCampaign = () => {
      const campaigns = useLoaderData()

      return (
            <div>
                  <h3 className="text-center text-3xl font-bold">
                        Our Campaigns{campaigns.length}
                  </h3>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid gap-8 my-5">

                        {
                              campaigns.map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                        }
                  </div>
            </div>
      );
};

export default AllCampaign;