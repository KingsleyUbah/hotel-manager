type CoverImage = {
    url: string;
  };
  
  export type Image = {
    _key: string;
    url: string;
  };
  
  type Amenity = {
    _key: string;
    amenity: string;
    icon: string;
  };

  type Review = {
    text: string;
    user: { name: string };
    userRating: number;
    _createdAt: Date;
    _id: string;
  };
  
  type Slug = {
    _type: string;
    current: string;
  };
  
  export type Room = {
    _id: string;
    coverImage: CoverImage;
    description: string;
    dimension: string;
    discount: number;
    images: Image[];
    isBooked: boolean;
    isFeatured: boolean;
    name: string;
    numberOfBeds: number;
    offeredAmenities: Amenity[];
    reviews: Review[];
    price: number;
    slug: Slug;
    specialNote: string;
    type: string;
  };
  
  export type CreateBookingDto = {
    user: string;
    hotelRoom: string;
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
  };