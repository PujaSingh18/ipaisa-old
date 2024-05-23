import ABHI from "../SvgImages/ABHI";
import AComponent from "../SvgImages/AComponent";
import BikeComponent from "../SvgImages/BikeComponent";
import BusComponent from "../SvgImages/BusComponent";
import CADComponent from "../SvgImages/CADComponent";
import CCDComponent from "../SvgImages/CCDComponent";
import CarComponent from "../SvgImages/CarComponent";
import DamageComponent from "../SvgImages/DamageComponent";
import ETDComponent from "../SvgImages/ETDComponent";
import FastagComponent from "../SvgImages/FastagComponent";
import FlightComponent from "../SvgImages/FlightComponent";
import GPWComponent from "../SvgImages/GPWComponent";
import HealthInsuranceComponent from "../SvgImages/HealthInsuranceComponent";
import HotelComponent from "../SvgImages/HotelComponent";
import IDComponent from "../SvgImages/IDComponent";
import LPDComponent from "../SvgImages/LPDComponent";
import MRUDComponent from "../SvgImages/MRUDComponent";
import MSDComponent from "../SvgImages/MSDComponent";
import MTDComponent from "../SvgImages/MTDComponent";
import MobileComponent from "../SvgImages/MobileComponent";
import RUDComponent from "../SvgImages/RUDComponent";
import SBIComponent from "../SvgImages/SBIComponent";
import TeamLifeComponent from "../SvgImages/TeamLifeComponent";
import TrainComponent from "../SvgImages/TrainComponent";
import TravelComponent from "../SvgImages/TravelComponent";
import ABH from './../SvgImages/ABH';
import ACKO from './../SvgImages/ACKO';
import ALI from './../SvgImages/ALI';
import BUDComponent from './../SvgImages/BUDComponent';
import CanaraBComponent from './../SvgImages/CanaraBComponent';
import CreditComponent from './../SvgImages/CreditComponent';
import DthComponent from './../SvgImages/DthComponent';
import EUDComponent from './../SvgImages/EUDComponent';
import GBUDComponent from './../SvgImages/GBUDComponent';
import HDFCComponent from './../SvgImages/HDFCComponent';
import HSBCComponent from './../SvgImages/HSBCComponent';
import KMCComponent from './../SvgImages/KMCComponent';
import LIC from './../SvgImages/LIC';
import LLUDComponent from './../SvgImages/LLUDComponent';
import MCGMComponent from './../SvgImages/MCGMComponent';
import MTUDComponent from './../SvgImages/MTUDComponent';
import PCMCComponent from './../SvgImages/PCMCComponent';
import PMComponent from './../SvgImages/PMComponent';
import PNBComponent from './../SvgImages/PNBComponent';
import UBComponent from './../SvgImages/UBComponent';
import VVMComponent from './../SvgImages/VVMComponent';
import WUDComponent from './../SvgImages/WUDComponent';

/* eslint-disable prettier/prettier */
export const planArr = [
  {
    id: 1,
    amount: 349,
    data: '2.5 GB/Day',
    validity: '365 Days',
    voice: 'Unlimited calls, sms 100/day',
  },
  {
    id: 2,
    amount: 349,
    data: '2.5 GB/Day',
    validity: '365 Days',
    voice: 'Unlimited calls, sms 100/day',
  },
  {
    id: 3,
    amount: 349,
    data: '2.5 GB/Day',
    validity: '365 Days',
    voice: 'Unlimited calls, sms 100/day',
  },
];

//Recharges Array

export const arrInfo = [
  {
    id: 1,
    img: <MobileComponent/>,
    path:'Recharge1',
  },

  {
    id: 2,
    img: <DthComponent/>,
    path:'MainDTH',
  },

  {
    id: 3,
    img: <FastagComponent/>,
    path: 'Main_Fastag_Home',
  },

  {
    id: 4,
    img: <CreditComponent/>,
    path: 'MainDiscovery',
  },
];

//Utilities Array

export const arrUtil = [
  {
    id: 1,
    img:<MRUDComponent/>,
    path: 'MainPBList',
  },

  {
    id: 2,
    img: <EUDComponent/>,
    path:'MainPage',
  },

  {
    id: 3,
    img: <WUDComponent/>,
    path: 'WaterMain'
  },

  {
    id: 4,
    img:<GBUDComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 5,
    img: <BUDComponent/>,
    path:'BroadbandMain',
  },

  {
    id: 6,
    img: <LLUDComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 7,
    img: <RUDComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 8,
    img: <MTUDComponent/>,
    path:'PipedMain',
  },
];

//Financial Services Array

export const arrfinaS = [
  {
    id: 1,
    img: <CCDComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 2,
    img: <LPDComponent/>,
    path:'LoanMain',
  },

  {
    id: 3,
    img: <IDComponent/>,
    path:'InsuranceMain',
  },

  {
    id: 4,
    img: <MTDComponent/>,
    path:'MunicipalMain',
  },
];

//Others Services Array

export const arrOtherS = [
  {
    id: 1,
    img: <MSDComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 2,
    img: <CADComponent/>,
    path: 'MainDiscovery',
  },

  {
    id: 3,
    img: <ETDComponent/>,
    path: 'MainDiscovery',
  },
];

//Travel and Bookings Array

export const arrTrvlBkng = [
  {
    id: 1,
    img: <TrainComponent/>,
    path: 'HomeMainScreen',
  },

  {
    id: 2,
    img: <BusComponent/>,
    path: 'HomeMainScreen',
  },

  {
    id: 3,
    img: <FlightComponent/>,
    path: 'HomeMainScreen',
  },

  {
    id: 4,
    img: <HotelComponent/>,
    path: 'HomeMainScreen',
  },
];

//Insurance Array

export const arrInsurance = [
  {
    id: 1,
    img: <BikeComponent/>,
    path:'HomeMainScreen',
  },

  {
    id: 2,
    img: <CarComponent/>,
    path:'HomeMainScreen',
  },

  {
    id: 3,
    img: <HealthInsuranceComponent/>,
    path:'HomeMainScreen',
  },

  {
    id: 4,
    img: <TravelComponent/>,
    path:'HomeMainScreen',
  },

  {
    id: 5,
    img: <DamageComponent/>,
    path:'HomeMainScreen',
  },

  {
    id: 6,
    img: <TeamLifeComponent/>,
    path:'HomeMainScreen',
  },
];

//DTH Suppliers Array

export const arrDTH = [
  {
    id: 1,
    title: 'Airtel',
    img: <AComponent/>,
  },

  {
    id: 2,
    title: 'Dish TV',
    img: <AComponent/>,
  },

  {
    id: 3,
    title: 'Sun Direct',
    img: <AComponent/>,
  },

  {
    id: 4,
    title: 'Tata Play',
    img: <AComponent/>,
  },

  {
    id: 5,
    title: 'D2H',
    img: <AComponent/>,
  },
];

//Broadband Images
export const ArrBroadband = [
  {
    id: 1,
    title: 'Broadband Linear',
    img:  <AComponent/>,
    path:'BroadBSNLMain',
  },
  {
    id: 2,
    title: 'Airtal Landline',
    img:  <CanaraBComponent/>,
    path:'BroadBSNLMain',
  },
  {
    id: 3,
    title: 'MTNL Mumbai',
    img: <HSBCComponent/>,
    path: 'BroadMTNLMain',
  },
  {
    id: 4,
    title: 'BSNL Broadband/Landline',
    img:  <PNBComponent/>,
    path:'BroadBSNLMain',
  },
  {
    id: 5,
    title: 'Hathway Broadband',
    img:  <UBComponent/>,
  },
  {
    id: 6,
    title: 'Tata Play Fiber',
    img: <HDFCComponent/>,
  },
];

//Fastag Home Array

export const arrFastag = [
  {
    id: 1,
    title: 'State Bank Of India',
    img: <SBIComponent/>,
  },

  {
    id: 2,
    title: 'Canara Bank',
    img: <CanaraBComponent/>,
  },

  {
    id: 3,
    title: 'HSBC Bank',
    img: <HSBCComponent/>,
  },

  {
    id: 4,
    title: 'Punjab National Bank',
    img:<PNBComponent/>,
  },

  {
    id: 5,
    title: 'Union Bank',
    img: <UBComponent/>,
  },

  {
    id: 6,
    title: 'HDFC Bank',
    img: <HDFCComponent/>,
  },
];

//Postpaid Contacts Array

export const arrPostpaid = [
  {
    id: 1,
    title: 'Reubin',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Reubin.png'),
    subTitle: '+91 99929 29292',
    path: 'MainPBOperators',
  },

  {
    id: 2,
    title: 'Ankita',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Ankita.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 3,
    title: 'Ash',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Ash.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 4,
    title: 'Kiara',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Kiara.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 5,
    title: 'Reubin',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Reubin2.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 6,
    title: 'Ankita',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Ankita2.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 7,
    title: 'Ash',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Ash.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 8,
    title: 'Kiara',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Kiara.png'),
    subTitle: '+91 99929 29292',
  },

  {
    id: 9,
    title: 'Ash',
    img: require('../PostpaidBill/PostpaidBill/PBImages/Ash.png'),
    subTitle: '+91 99929 29292',
  },
];

//PostpaidBill Operators Array

export const arrPBOperators = [
  {
    id: 1,
    title: 'Jio',
    img: require('../PostpaidBill/PostpaidBill/PBImages/JIO.png'),
    path: 'MainPBBill',
  },

  {
    id: 2,
    title: 'VI',
    img: require('../PostpaidBill/PostpaidBill/PBImages/VI.png'),
  },

  {
    id: 3,
    title: 'Airtel',
    img: require('../PostpaidBill/PostpaidBill/PBImages/ARTL.png'),
  },

  {
    id: 4,
    title: 'BSNL',
    img: require('../PostpaidBill/PostpaidBill/PBImages/BSNL.png'),
  },
];

//Water Bill Pay Image

export const ArrWater = [
  {
    id: 1,
    title: 'Gram Panchayat Wangi-Water',
    img: <GPWComponent/>,
    path: 'WaterFieldMain'
  },
  {
    id: 2,
    title: 'Kolhapur Municipal',
    img: <KMCComponent/>,
    subtitle: 'Corporation',
    path: 'WaterFieldMain',
  },
  {
    id: 3,
    title: 'PCMC',
    img:<PCMCComponent/>,
    path: 'WaterFieldMain',
  },
  {
    id: 4,
    title: 'Vasai Virar Municipal',
    img: <VVMComponent/>,
    subtitle: 'Corporation',
    path: 'WaterFieldMain',
  },
  {
    id: 5,
    title: 'MCGM Water Department',
    img: <MCGMComponent/>,
    path: 'WaterFieldMain',
  },
  {
    id: 6,
    title: 'Pune Municipal Corporation',
    img: <PMComponent/>,
    path: 'WaterFieldMain',
  },
];

//Municipal Taxes Images
export const ArrMunicipal=[
  {
      id:1,
      title:'Gram Panchayat Wangi-Water',
      img:require('../images/GramP.png'),
      path:'MunicipalFileMain',
  },
  {
      id:2,
      title:'Kolhapur Municipal',
      img:require('../images/UMC.png'),
      subtitle:'Corporation',
      path:'MunicipalFileMain',
  },
  {
      id:3,
      title:'PCMC',
      img:require('../images/PCMC.png'),
  },
  {
      id:4,
      title:'Vasai Virar Municipal',
      img:require('../images/Vasai.png'),
      subtitle:'Corporation',
  },
  {
      id:5,
      title:'Pune Municipal Corporation',
      img:require('../images/MCGM.png'),
  },
  {
      id:6,
      title:'Talegaon Dabhade Nagar ',
      img:require('../images/Pune.png'),
      subtitle:'Parishad-Municipal Taxes',
  }
]

// Insurance Taxes Bill Payment Images

export const ArrInsurance=[
  {
      id:1,
      title:'Life Insurance Corporation',
      img:<LIC/>,
      path:'InsuranceBillMain',
  },
  {
      id:2,
      title:'Acko General Insurance Hea...',
      img:<ACKO/>,
      subtitle:'Corporation',
      path:'InsuranceBillMain',
  },
  {
      id:3,
      title:'Acko General Insurance Mot...',
      img:<ACKO/>,
      path:'InsuranceBillMain',
  },
  {
      id:4,
      title:'Aditya Birla Health Insurance',
      img:<ABH/>,
      path:'InsuranceBillMain',
  },
  {
      id:5,
      title:'Aditya Birla Sun Life Insura...',
      img:<ABHI/>,
      path:'InsuranceBillMain',
  },
  {
      id:6,
      title:'Aegon Life Insurance',
      img:<ALI/>,
      path:'InsuranceBillMain',
  }
]

//Loan Repayment Images

export const ArrLoan=[
  {
      id:1,
      title:'Adani Capital',
      img:require('../images/ac.png')
  },
  {
      id:2,
      title:'Aeon Credit',
      img:require('../images/aeon.png'),
  },
  {
      id:3,
      title:'Amarpadma Credits Pvt Ltd',
      img:require('../images/acp.png')
  },
  {
      id:4,
      title:'Ambit Finvest Pvt Ltd',
      img:require('../images/afc.png'),
      subtitle:'Corporation'
  },
  {
      id:5,
      title:'Aris Capital Pvt Limited',
      img:require('../images/acl.png')
  }
]


// Piped Gas Bill Payment Images

export const ArrPiped=[
  {
      id:1,
      title:'AGP CGD India Pvt Ltd',
      img:require('../images/AGPLogo.png'),
      path:'PipedAGPMain',
  },
  {
      id:2,
      title:'AGP City Gas Pvt Ltd',
      img:require('../images/AGPLogo.png'),
      subtitle:'Corporation',
      path:'PipedAGPMain',
  },
  {
      id:3,
      title:'Bhagyanagar Gas Limited',
      img:require('../images/Gas_Limited.png'),
      path:'PipedAGPMain',
  },
  {
      id:4,
      title:'GAIL Gas Limited',
      img:require('../images/Gailgas.png'),
      path:'PipedAGPMain',
  },
  {
      id:5,
      title:'GAIL India',
      img:require('../images/GAIL.png'),
      path:'PipedAGPMain',
  },
  {
      id:6,
      title:'Mahanagar Gas',
      img:require('../images/Mahanagar.png')
  }
]