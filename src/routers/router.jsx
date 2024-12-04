import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import RunningCampaign from "../components/RunningCampaign";
import Target from "../components/target";
import History from "../components/History";
import Loging from "../components/Loging";
import Register from "../components/Register";

const router = createBrowserRouter([
      {
            path:"/",
            element:<MainLayouts></MainLayouts>,
            children:[
                  {
                        path:'home',
                        element:<Home></Home>,
                        children: [
                              {
                                    path:"runningCampaign",
                                    element:<RunningCampaign></RunningCampaign>
                              },
                              {
                                    path:"target",
                                    element:<Target></Target>
                              },
                              {
                                    path:"history",
                                    element:<History></History>
                              }
                        ]
                  },
                  {
                        path:'/',
                        element:<AllCampaign></AllCampaign>,
                        loader:()=>fetch('http://localhost:5000/newCampaign')
                  },
                  {
                        path:'addNewCampaign',
                        element:<AddNewCampaign></AddNewCampaign>,
                        
                  },
                  {
                        path:'myCampaign',
                        element:<MyCampaign></MyCampaign>
                  },
                  {
                        path:'myDonation',
                        element:<MyDonation></MyDonation>
                  },
                  {
                        path:'login',
                        element:<Loging></Loging>
                  },
                  {
                        path:'register',
                        element:<Register></Register>
                  },

            ]
      },
])
export default router;