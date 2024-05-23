import AEPSComponent from "../SvgImages/AEPSComponent";
import AirtelComponent from "../SvgImages/AirtelComponent";
import AirtelPComponent from "../SvgImages/AirtelPComponent";
import BComponent from "../SvgImages/BComponent";
import BSCom from "../SvgImages/BSCom";
import BsnlComponent from "../SvgImages/BsnlComponent";
import BsnlPComponent from "../SvgImages/BsnlPComponent";
import CCComponent from "../SvgImages/CCComponent";
import CardComponent from "../SvgImages/CardComponent";
import DComponent from "../SvgImages/DComponent";
import EComponent from "../SvgImages/EComponent";
import GBPComponent from "../SvgImages/GBPComponent";
import JioComponent from "../SvgImages/JioComponent";
import JioPComponent from "../SvgImages/JioPComponent";
import LPComponent from "../SvgImages/LPComponent";
import MComponent from "../SvgImages/MComponent";
import MRComponent from "../SvgImages/MRComponent";
import Netflix from "../SvgImages/Netflix";
import Person from "../SvgImages/Person";
import PersonBoy from "../SvgImages/PersonBoy";
import QRComponent from "../SvgImages/QRComponent";
import QuickDeposite from "../SvgImages/QuickDeposite";
import UPIComponent from "../SvgImages/UPIComponent";
import ViComponent from "../SvgImages/ViComponent";
import ViPComponent from "../SvgImages/ViPComponent";
import WTBComponent from "../SvgImages/WTBComponent";
import WalletToBank from "../SvgImages/WalletToBank";
import Water from "../SvgImages/Water";
import EaseOfAccess from './../SvgImages/EaseOfAccess';
import ElecComponent from './../SvgImages/ElecComponent';
import FasterWithdrawal from './../SvgImages/FasterWithdrawal';
import Mobile from './../SvgImages/Mobile';

/* eslint-disable prettier/prettier */
export const Arr = [
  {
    id: '1',
    title: 'Reubin',
    img: <JioPComponent/>,
    subtitle: '+91 1234567890',
  },
  {
    id: '2',
    title: 'Ankita',
    img: <ViPComponent/>,
    subtitle: '+91 1234567890',
  },
  {
    id: '3',
    title: 'Harsh',
    img: <AirtelPComponent/>,
    subtitle: '+91 1234567890',
  },
  {
    id: '4',
    title: 'Pooja',
    img: <BsnlPComponent/>,
    subtitle: '+91 1234567890',
  },
];

export const Arr1 = [
  {
    id: 1,
    title: 'JIO',
    img: <JioComponent/>,
  },
  {
    id: 2,
    title: 'VI',
    img: <ViComponent/>,
  },
  {
    id: 3,
    title: 'Airtel',
    img: <AirtelComponent/>,
  },
  {
    id: 4,
    title: 'BSNL',
    img: <BsnlComponent/>,
  },
];

export const ArrIATM = [
  {
    id:1,
    img: <QuickDeposite/>,
    title:'Quick Deposit',
    subtitle:'Spend more to earn more with i-Invest!',
    color:"#E05252",
  },
  {
    id:2,
    img: <FasterWithdrawal/>,
    title:'Faster Withdrawal',
    subtitle:'Spend more to earn more with i-Invest!',
    color:"#F56E22",
  },
  {
    id:3,
    img: <EaseOfAccess/>,
    title:'Ease of access',
    subtitle:'Spend more to earn more with i-Invest!',
    color:"#810B9E",
  },
];


// Payment Modes Images

export const ArrPhoneMode =[
  {
    id:1,
    img:<QRComponent/>,
    path:'HomeMainScreen'
  },
  {
    id:2,
    img:<WTBComponent/>,
    path:'AccountDetailsScreen'
  },
  {
    id:3,
    img:<UPIComponent/>,
    path:'HomeMainScreen'
  },
  {
    id:4,
    img:<AEPSComponent/>,
    path:'HomeMainScreen'
  },
];


//Utility Payment Image
export const ArrUMode =[
  {
    id:1,
    img:<MRComponent/>,
    path:'Recharge1',
  },
  {
    id:2,
    img:<DComponent/>,
    path:'MainDTH',
  },
  {
    id:3,
    img:<EComponent/>,
    path:'MainPage',
  },
  {
    id:4,
    img:<CCComponent/>,
    path:'HomeMainScreen',
  },
  {
    id:5,
    img:<LPComponent/>,
    path:'LoanMain',
  },
  {
    id:6,
    img:<GBPComponent/>,
    path:'HomeMainScreen',
  },
  {
    id:7,
    img:<BComponent/>,
    path:'BroadbandMain',
  },
  {
    id:8,
    img:<MComponent/>,
    path:'MainDiscovery',
  },
]


export const ArrHis =[
  {
    id:1,
    img:<ElecComponent/>,
    title:'Mahavitaran',
    subtitle:'12 July 2024',
    rupees:'- ₹567',
  },
  {
    id:2,
    img:<Netflix/>,
    title:'Paid for Netflix',
    subtitle:'12 July 2024',
    rupees:'- ₹567',
  },
  {
    id:3,
    img:<Mobile/>,
    title:'Mobile Recharge',
    subtitle:'12 July 2024',
    rupees:'- ₹567',
  },
  {
    id:4,
    img:<Water/>,
    title:'Received for Water Bill',
    subtitle:'12 July 2024',
    rupees:'+ ₹210',
  },
  {
    id:5,
    img:<CardComponent/>,
    title:'Received for Card Payment',
    subtitle:'12 July 2024',
    rupees:'+ ₹2',
  },
  {
    id:6,
    img:<WalletToBank/>,
    title:'Received for Bank Transfer',
    subtitle:'12 July 2024',
    rupees:'+ ₹2',
  }
]

//Transaction Images
export const ArrTransactions =[
  {
    id:1,
    img:<BSCom/>,
    title:'Bescom',
  },
  {
    id:2,
    img:<Person/>,
    title:'Reubin',
    subtitle:'Chetta',
  },
  {
    id:3,
    img:<Netflix/>,
    title:'Netflix',
  },
  {
    id:4,
    img:<PersonBoy/>,
    title:'Reubin',
    subtitle:'Chetta',
  }
]