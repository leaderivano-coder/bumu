// @ts-ignore
import slide1 from './assets/images/market_vendor_real_1784109194160.jpg';
// @ts-ignore
import slide2 from './assets/images/shopkeeper_real_1784109206460.jpg';
// @ts-ignore
import slide3 from './assets/images/group_business_real_1784109219570.jpg';

// @ts-ignore
import serviceQuickLoans from './assets/images/market_vendor_real_1784109194160.jpg';
// @ts-ignore
import serviceGroupLoans from './assets/images/group_business_real_1784109219570.jpg';
// @ts-ignore
import serviceCommercialLoans from './assets/images/commercial_loans_offloaders_1784197253662.jpg';
// @ts-ignore
import serviceSchoolFees from './assets/images/ugandan_graduates_real_1784109637417.jpg';
// @ts-ignore
import serviceAssetFinancing from './assets/images/asset_financing_real_1784111589151.jpg';
// @ts-ignore
import serviceMicroInsurance from './assets/images/micro_insurance_1783780060929.jpg';
// @ts-ignore
import serviceSalaryLoans from './assets/images/salary_loans_uganda_shillings_1784195659119.jpg';
// @ts-ignore
import serviceAgencyBanking from './assets/images/agency_banking_1783780080164.jpg';

export interface Branch {
  name: string;
  address: string;
  room: string;
  googleMapUrl: string;
  phone?: string;
  whatsapp?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

export const BRANCHES: Branch[] = [
  {
    name: "Genesis Plaza Container Village",
    address: "Genesis Plaza, Nakivubo Container Village, Kampala",
    room: "Room GLD 01 (1st floor)",
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7594951466087!2d32.5739074!3d0.3110292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc800f40bfb7%3A0xc07c936081e6a100!2sNakivubo%20Container%20Village%2C%20Kampala!5e0!3m2!1sen!2sug!4v1710000000000!5m2!1sen!2sug",
    phone: "+256 754 064499"
  },
  {
    name: "Donata Plaza Kafumbe Mukasa",
    address: "Donata Building, Kafumbe Mukasa Road, Kampala",
    room: "Room B4 (Rooms 17 & 18)",
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7615923985764!2d32.5721111!3d0.3087413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7debffffff%3A0xefd309224ee3128!2sKafumbe%20Mukasa%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1710000000002!5m2!1sen!2sug",
    phone: "+256 754 064499"
  },
  {
    name: "Nansana Branch",
    address: "Njovu Building, opposite Ngabo Stage, next to Tex Bar, Nansana",
    room: "Room B4, Second Floor",
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.728994781488!2d32.5369012!3d0.3448902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db931bc1ef38b%3A0x9bf864ba23bf3950!2sNansana%2C%20Kampala!5e0!3m2!1sen!2sug!4v1710000000003!5m2!1sen!2sug",
    phone: "0793 193191",
    whatsapp: "0707 950229"
  },
  {
    name: "Owino Market Branch",
    address: "St. Balikuddembe Market (Owino), Nakivubo Road, Kampala",
    room: "Owino Main Market Desk, Zone A",
    googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.75968128373!2d32.574512!3d0.31062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc81efc1b505%3A0x7d0a64e1dfcb6e04!2sSt.%20Balikuddembe%20Market%20(Owino)!5e0!3m2!1sen!2sug!4v1710000000004!5m2!1sen!2sug",
    phone: "+256 754 064499"
  }
];

export const SERVICES: Service[] = [
  {
    id: "quick-loans",
    title: "Bumu Quick Loans",
    description: "Tailored to meet your urgent financial needs for essential working capital or unexpected family expenses with absolutely no collateral required.",
    iconName: "Zap",
    image: serviceQuickLoans
  },
  {
    id: "commercial-loans",
    title: "Bumu Business Loans",
    description: "Designed for clients in income-generating ventures who are eager to expand, offering generous maximum repayment terms of up to 18 months.",
    iconName: "TrendingUp",
    image: serviceCommercialLoans
  },
  {
    id: "salary-loans",
    title: "Bumu Salary Loans",
    description: "Empowering salaried employees of recognized private and public companies to address immediate financial needs, such as school fees or asset purchases.",
    iconName: "Briefcase",
    image: serviceSalaryLoans
  },
  {
    id: "asset-financing",
    title: "Bumu Asset Financing Loans",
    description: "Acquire business assets, commercial land plots, or retail structures with up to 50% co-financing from Bumu, using the asset itself as collateral.",
    iconName: "Home",
    image: serviceAssetFinancing
  },
  {
    id: "group-loans",
    title: "Bumu Group Loans",
    description: "Group-guaranteed loans extended to low-income entrepreneurs operating small and micro businesses, with self-selecting groups of 5 to 10 members.",
    iconName: "Users",
    image: slide3
  },
  {
    id: "school-fees",
    title: "Bumu School Fees Loans",
    description: "Access tuition funds immediately to clear school fees at once, and pay back later in manageable installments spread over up to 6 months.",
    iconName: "GraduationCap",
    image: serviceSchoolFees
  }
];

export const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: "Empowering Uganda's Informal Economy",
    description: "From market vendor roots in Owino and Usafi to a formal MoFPED-licensed financial institution.",
    image: slide1,
    alt: "Uganda market vendors"
  },
  {
    id: 2,
    title: "Financial Solutions Tailored for Growth",
    description: "With offices in Genesis Plaza Container Village, Donata Plaza Kafumbe Mukasa, and Nansana, we are always close to your business.",
    image: slide2,
    alt: "Bumu Microfinance office context"
  },
  {
    id: 3,
    title: "Empowering Entrepreneurs Nationwide",
    description: "Providing customized credit facilities, asset financing, and essential financial training for sustainable enterprise development.",
    image: slide3,
    alt: "Kampala cityscape and local development context"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Joseph Mukasa",
    role: "Owino Market Vendor",
    location: "Owino Market",
    rating: 5,
    avatar: "JM",
    quote: "Bumu Microfinance didn't just give me an asset loan, they trained me in debt management. My daily record-keeping has doubled my profits and simplified my stock ordering."
  },
  {
    id: 2,
    name: "Sarah Nsubuga",
    role: "Kafumbe Mukasa Boutique Owner",
    location: "Kafumbe Mukasa Rd",
    rating: 5,
    avatar: "SN",
    quote: "The School Fees loan program allowed my kids to stay in school while my capital remained working in my shop. The flexible repayment terms with no hidden fees are a blessing."
  },
  {
    id: 3,
    name: "Grace Namubiru",
    role: "Nansana Cosmetics Wholesale",
    location: "Njovu Complex, Nansana",
    rating: 5,
    avatar: "GN",
    quote: "With their group loan system, our market association was able to secure funding to import stock in bulk. Their team even visited our shop to help structure payments."
  }
];
