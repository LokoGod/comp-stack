import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

export function CompCard(params: any) {
  const cardData = [
    {
      name: "Sysco LABS",
      size: "501-1,000 employees",
      logo: "https://media.licdn.com/dms/image/D560BAQHe1jLow77zGg/company-logo_200_200/0/1688472902715/syscolabssl_logo?e=1704931200&v=beta&t=Vr5Ml-IcZkqe6HF9v0tJDE1EvSZCkz7JZO_Ze5WH4G8",
    },
    {
      name: "99x",
      size: "201-500 employees",
      logo: "https://media.licdn.com/dms/image/C560BAQEVg8fDYKXBCw/company-logo_200_200/0/1601228756308?e=1704931200&v=beta&t=2X-bU3RE3g8w57tYU_3UD_7FqGlco6Xvbn2WYGv1Bh4",
    },
    {
      name: "Ascentic",
      size: "51-200 employees",
      logo: "https://media.licdn.com/dms/image/D560BAQFJCyexxrdgVQ/company-logo_200_200/0/1692700549587?e=1704931200&v=beta&t=Pfqp7Za_UobkIRv1SP4pS1DF5vf-bz9LFx8ZWddKN0s",
    },
    {
      name: "Insighture",
      size: "51-200 employees",
      logo: "https://media.licdn.com/dms/image/D560BAQGA-fudDOJL6Q/company-logo_200_200/0/1688564300546/insighture_logo?e=1704931200&v=beta&t=2E4CmZQIcM8ZrqfivpfacVI8iXeWzgSekYB6g7FHcwc",
    },
    {
      name: "Rooster Technology",
      size: "11-50 employees",
      logo: "https://media.licdn.com/dms/image/C4D0BAQE0VYCblFbhow/company-logo_200_200/0/1589456808611?e=1704931200&v=beta&t=Lfk84koV5qx2glIn63yqVqV1MJO4rARp7656gXPuQ_Y",
    },

    {
      name: "Creative Software",
      size: "201-500 employees",
      logo: "https://media.licdn.com/dms/image/D560BAQE6diZwj0bz9w/company-logo_200_200/0/1682655230323/creativesoftware_logo?e=1704931200&v=beta&t=a8geNSVG-EltQ4itO2-uhyhVSJsqZ5U9LyuugfYtVi0",
    },
    {
      name: "Surge Global",
      size: "201-500 employees",
      logo: "https://media.licdn.com/dms/image/C560BAQHqn4DpxPTRXA/company-logo_200_200/0/1613375620800/surge_global_logo?e=1704931200&v=beta&t=ly6kvONWvIIoVknP8SAS8ymavmSpuiijKBYgDjQI2HU",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card key={index} className="w-72 max-w-xs">
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-xl text-gray-800">{card.name}</CardTitle>
            <CardDescription className="text-gray-500">
              {card.size}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <img
              src={card.logo}
              alt="Company Image"
              className="w-18 h-12 mr-2 rounded-lg"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              View Stack
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
