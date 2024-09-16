/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon, StarIcon, UsersIcon } from "lucide-react";
import placeholder from "@/assets/placeholder.png";

interface Props {
  details: {
    title?: string;
    price?: number;
    rating?: number;
    location?: string;
    dates?: string;
    booked?: number;
    mainImage?: string;
    subImage1?: string;
    subImage2?: string;
  };
}

export default function AccommodationItem(props: Props) {
  const {
    details: {
      booked,
      dates,
      location,
      price,
      rating,
      mainImage = placeholder.src,
      subImage1 = placeholder.src,
      subImage2 = placeholder.src,
      title,
    },
  } = props;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold">
            ${price}
          </div>
          <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold flex items-center">
            <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
            {rating}
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex gap-2">
            <img
              src={subImage1}
              alt="Sub image 1"
              className="w-1/2 h-16 object-cover rounded-md"
            />
            <img
              src={subImage2}
              alt="Sub image 2"
              className="w-1/2 h-16 object-cover rounded-md"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <MapPinIcon className="w-4 h-4 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {dates}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <UsersIcon className="w-4 h-4 mr-1" />
          {booked} Capacidad
        </div>
        <Badge variant="secondary">Detalles</Badge>
      </CardFooter>
    </Card>
  );
}
