import busImg01 from "../images/bus1.jpg";
import busImg02 from "../images/bus2.jpg";
import busImg03 from "../images/bus3.jpg";

export const busses = [
  {
    id: "01",
    name: "Express Shuttle",
    type: "Luxury",
    rating: 4.8,
    totalRatings: 1200,
    image: busImg01,
    totalSeats: 50,
    operator: "TravelXpress",
  },
  {
    id: "02",
    name: "City Explorer",
    type: "Standard",
    rating: 4.2,
    totalRatings: 800,
    image: busImg02,
    totalSeats: 40,
    operator: "CityTravels",
  },
  {
    id: "03",
    name: "GreenLine Deluxe",
    type: "Deluxe",
    rating: 4.5,
    totalRatings: 1000,
    image: busImg03,
    totalSeats: 45,
    operator: "GreenLine Travels",
  },
];
