import KitchenImage from "../../assets/images/kitchen.jpeg";
import Balcony from "../../assets/images/balcony.jpeg";
import LivingRoomWithKitchen from "../../assets/images/livingRoomWithKitchen.jpeg";
import LivingRoomWithDoors from "../../assets/images/livingRoomWithDoors.jpeg";
import LivingRoomWithTv from "../../assets/images/livingRoomWithTv.jpeg";
import OldMoneyKitchen from "../../assets/images/oldMoneyKitchen.jpeg";
import RetroKitchen from "../../assets/images/retroKitchen.jpeg";
import Room from "../../assets/images/room.jpeg";
import { HomePageDataType, NavigationListType } from "../../types/types";

export const navigationList: NavigationListType = [
  "About",
  "Projects Info",
  "Contact Us",
];

export const homePageData: Array<HomePageDataType> = [
  {
    title: "Gourmet Kitchen",
    description:
      "Modern kitchen space with retro accents for a warm, inviting atmosphere.",
    image: KitchenImage,
    id: 1,
  },
  {
    title: "Scenic Balcony",
    description:
      "Spacious balcony with a relaxing view, perfect for unwinding.",
    image: Balcony,
    id: 2,
  },
  {
    title: "Open-Concept Living Area",
    description:
      "Open concept living room seamlessly integrated with the kitchen.",
    image: LivingRoomWithKitchen,
    id: 3,
  },
  {
    title: "Sunlit Living Room",
    description:
      "Elegant living room with large glass doors for natural lighting.",
    image: LivingRoomWithDoors,
    id: 4,
  },
  {
    title: "Entertainment Lounge",
    description:
      "A cozy living area featuring a stylish TV setup and comfortable seating.",
    image: LivingRoomWithTv,
    id: 5,
  },
  {
    title: "Classic Elegance Kitchen",
    description:
      "Vintage-inspired kitchen with classic details and luxury finishes.",
    image: OldMoneyKitchen,
    id: 6,
  },
  {
    title: "Retro-Inspired Kitchen",
    description:
      "Bold retro kitchen design with vibrant colors and classic appliances.",
    image: RetroKitchen,
    id: 7,
  },
  {
    title: "Tranquil Bedroom",
    description:
      "Comfortable bedroom with soft lighting and a tranquil aesthetic.",
    image: Room,
    id: 8,
  },
];
