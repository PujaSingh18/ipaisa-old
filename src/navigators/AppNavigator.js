/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AtmMain from './BannerOfBanks/I-ATM/AtmMain';
import AtmScreenMain from './BannerOfBanks/I-ATMScreen/AtmScreenMain';
import InvestMain from './BannerOfBanks/I-Invest/InvestMain';
import WalletMain from './BannerOfBanks/I-Wallet/WalletMain';
import TransactionMain from './BannerOfBanks/Transaction/TransactionMain';
import Main_Biller from './BillScreen/Biller_Info/Main_Biller';
import PayMain from './BillScreen/PayBill/PayMain';
import MainPage from './BillScreen/billscreens/MainPage';
import CommingSoon from './CommingSoon';
import Main_Fastag_Bill from './Fastag/Fastag/Fastag_Bill/Main_Fastag_Bill';
import Main_Fastag_Home from './Fastag/Fastag/Fastag_Home/Main_Fastag_Home';
import Main_Fastag_Recharge from './Fastag/Fastag/Fastag_Recharge/Main_Fastag_Recharge';
import InsuranceBillMain from './Insurance/Insurance_Bill/InsuranceBillMain';
import InsuranceMain from './Insurance/Insurance_Home/InsuranceMain';
import LoanMain from './Loan Repayment/Loan_Home/LoanMain';
import MunicipalMain from './Municipal Taxes/MunicipalTxaes_Home/MunicipalMain';
import MunicipalBillMain from './Municipal Taxes/Municipal_Bill/MunicipalBillMain';
import MunicipalFileMain from './Municipal Taxes/Municipal_File/MunicipalFileMain';
import MunicipalFilesMain from './Municipal Taxes/Municipal_Files/MunicipalFilesMain';
import MunicipalPNMain from './Municipal Taxes/Municipal_Provider_Name/MunicipalPNMain';
import PipedAGPMain from './PipedGasBillPayment/Piped_AGP/PipedAGPMain';
import PipedBillMain from './PipedGasBillPayment/Piped_Bill/PipedBillMain';
import PipedMain from './PipedGasBillPayment/Piped_Home/PipedMain';
import MainPBBill from './PostpaidBill/PostpaidBill/PBBill/MainPBBill';
import MainPBList from './PostpaidBill/PostpaidBill/PBList/MainPBList';
import MainPBOperators from './PostpaidBill/PostpaidBill/PBOperators/MainPBOperators';
import ChangeOldPasswordMain from './Profile/ChangePassword/ChangeOldPasswordMain';
import CheckPhoneNumberMain from './Profile/ChangePassword/CheckPhoneNumberMain';
import MessageCardMain from './Profile/ChangePassword/MessageCardMain';
import NewPasswordMain from './Profile/ChangePassword/NewPasswordMain';
import LanguageMain from './Profile/Languages/LanguageMain';
import ProfileMain from './Profile/ProfileMain';
import ReceiveMoneyMain from './Profile/ReceiveMoney/ReceiveMoneyMain';
import ThemesMain from './Profile/Themes/ThemesMain';
import WaterBillMain from './WaterPay/Water_Bill/WaterBillMain';
import WaterFieldMain from './WaterPay/Water_Field/WaterFieldMain';
import WaterMain from './WaterPay/Water_Home/WaterMain';
import BroadBSNLMain from './broadband/Broadband_BSNL/BroadBSNLMain';
import BroadBillMain from './broadband/Broadband_Bill/BroadBillMain';
import BroadbandMain from './broadband/Broadband_Home/BroadbandMain';
import BroadMTNLMain from './broadband/Broadband_MTNL/BroadMTNLMain';
import Main from './dthRecharge/Airtel/Main';
import Main_DTH from './dthRecharge/DTHRecharge/Main_DTH';
import MainDTH from './dthRecharge/DTH_Providers/MainDTH';
import MainDiscovery from './homeScreen/Discovery/MainDiscovery';
import HomeMainScreen from './homeScreen/HomeMainScreen';
import MFLUserScreen from './mobileRechargeScreen/MFLUserScreen';
import PaymentDetails from './mobileRechargeScreen/PaymentDetails';
import Recharge1 from './mobileRechargeScreen/Recharge1';
import RechargeSuccessfully from './mobileRechargeScreen/Successfully/RechargeSuccessfully';
import AccountDetailsScreen from './walletToAccountScreen/AccountDetailsScreen';
import EnterAmount from './walletToAccountScreen/EnterAmount';
import ReviewScreen from './walletToAccountScreen/ReviewScreen';
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          component={Splash}
          name="splash"
          options={{headerShown: false}}
        /> */}
        
        <Stack.Screen
          component={HomeMainScreen}
          name="HomeMainScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AccountDetailsScreen}
          name="AccountDetailsScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={EnterAmount}
          name="EnterAmount"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ReviewScreen}
          name="ReviewScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Recharge1}
          name="Recharge1"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PaymentDetails}
          name="PaymentDetails"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MFLUserScreen}
          name="MFLUserScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainPage}
          name="MainPage"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main_Biller}
          name="Main_Biller"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PayMain}
          name="PayMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainDiscovery}
          name="MainDiscovery"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={RechargeSuccessfully}
          name="RechargeSuccessfully"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main_DTH}
          name="Main_DTH"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainDTH}
          name="MainDTH"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BroadbandMain}
          name="BroadbandMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BroadBSNLMain}
          name="BroadBSNLMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BroadMTNLMain}
          name="BroadMTNLMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BroadBillMain}
          name="BroadBillMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main_Fastag_Home}
          name="Main_Fastag_Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main_Fastag_Recharge}
          name="Main_Fastag_Recharge"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Main_Fastag_Bill}
          name="Main_Fastag_Bill"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainPBList}
          name="MainPBList"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainPBOperators}
          name="MainPBOperators"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MainPBBill}
          name="MainPBBill"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={WaterMain}
          name="WaterMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={WaterFieldMain}
          name="WaterFieldMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={WaterBillMain}
          name="WaterBillMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MunicipalMain}
          name="MunicipalMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MunicipalFileMain}
          name="MunicipalFileMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MunicipalFilesMain}
          name="MunicipalFilesMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MunicipalBillMain}
          name="MunicipalBillMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MunicipalPNMain}
          name="MunicipalPNMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={InsuranceMain}
          name="InsuranceMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={InsuranceBillMain}
          name="InsuranceBillMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoanMain}
          name="LoanMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PipedMain}
          name="PipedMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PipedAGPMain}
          name="PipedAGPMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PipedBillMain}
          name="PipedBillMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CommingSoon}
          name="CommingSoon"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ProfileMain}
          name="ProfileMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AtmMain}
          name="AtmMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={InvestMain}
          name="InvestMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={WalletMain}
          name="WalletMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AtmScreenMain}
          name="AtmScreenMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={TransactionMain}
          name="TransactionMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LanguageMain}
          name="LanguageMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ThemesMain}
          name="ThemesMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ChangeOldPasswordMain}
          name="ChangeOldPasswordMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CheckPhoneNumberMain}
          name="CheckPhoneNumberMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={NewPasswordMain}
          name="NewPasswordMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={MessageCardMain}
          name="MessageCardMain"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ReceiveMoneyMain}
          name="ReceiveMoneyMain"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
