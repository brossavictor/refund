import foodSvg from "../assets/food.svg";
import accommodationSvg from "../assets/accommodation.svg";
import servicesSvg from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import otherSvg from "../assets/other.svg";

export const CATEGORIES = {
  food: { name: "Food", icon: foodSvg },
  accommodation: { name: "Accommodation", icon: accommodationSvg },
  services: { name: "Services", icon: servicesSvg },
  transport: { name: "Transport", icon: transportSvg },
  other: { name: "Other", icon: otherSvg },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
