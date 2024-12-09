import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AuthProvider } from './common/AuthContext';
import Loader from './common/Loader';
import PrivateRoute from './common/PrivateRoute';
import PageTitle from './components/PageTitle';
import DefaultLayout from './layout/DefaultLayout';
import NotFoundLayout from './layout/NotFoundLayout';
import UnauthLayout from './layout/UnauthLayout';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Claim from './pages/Claim';
import ClaimDetail from './pages/Claim/ClaimDetail';
import Contract from './pages/Contract';
import ContractGuestInfo from './pages/Contract/ContractGuestInfo';
import ContractInfo from './pages/Contract/ContractInfo';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import NotFoundPage from './pages/NotFound';
import Products from './pages/Product/Products';
import AddProduct from './pages/Product/Products/AddProduct';
import Program from './pages/Product/Program';
import AddProgram from './pages/Product/Program/AddProgram';
import Question from './pages/Product/Question';
import AddQuestion from './pages/Product/Question/AddQuestion';
import Profile from './pages/Profile';
import ProviderRegistration from './pages/Registration';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import { getUserInfo } from './services/userService';
import Provider from './pages/Provider';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [role, setRole] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const userInfo = () => {
      const data = getUserInfo();
      if (data) {
        setRole(data.userRoleId);
      }
    };
    userInfo();
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <Routes>
        {/* Routes with DefaultLayout */}
        <Route
          element={
            <>
              <PrivateRoute>
                <DefaultLayout />
              </PrivateRoute>
            </>
          }
        >
          <Route
            index
            element={
              <>
                <PageTitle title="BHHD" />
                {role === 1 ? <ProviderRegistration /> : <Program />}
              </>
            }
          />
          <Route
            path="/product/question"
            element={
              <>
                <PageTitle title="Câu hỏi" />
                <Question />
              </>
            }
          />
          <Route
            path="/createprovider"
            element={
              <>
                <PageTitle title="Tạo TK nhà cung cấp" />
                <ProviderRegistration />
              </>
            }
          />
          <Route
            path="/providers"
            element={
              <>
                <PageTitle title="Nhà cung cấp" />
                <Provider />
              </>
            }
          />
          <Route
            path="/product/question/add-question"
            element={
              <>
                <PageTitle title="Thêm câu hỏi" />
                <AddQuestion />
              </>
            }
          />
          <Route
            path="/product/program"
            element={
              <>
                <PageTitle title="Chương trình" />
                <Program />
              </>
            }
          />
          <Route
            path="/product/program/add-program"
            element={
              <>
                <PageTitle title="Thêm chương trình" />
                <AddProgram />
              </>
            }
          />
          <Route
            path="/product/products"
            element={
              <>
                <PageTitle title="Bảo hiểm" />
                <Products />
              </>
            }
          />
          <Route
            path="/product/products/:id"
            element={
              <>
                <PageTitle title="Bảo hiểm" />
                <ProductDetail />
              </>
            }
          />
          
          <Route
            path="/product/products/add-product"
            element={
              <>
                <PageTitle title="Thêm bảo hiểm" />
                <AddProduct />
              </>
            }
          />
          <Route
            path="/contract"
            element={
              <>
                <PageTitle title="Hợp đồng" />
                <Contract />
              </>
            }
          />
          <Route
            path="/contract/detail/guestinfo/:id"
            element={
              <>
                <PageTitle title="Chi tiết hợp đồng" />
                <ContractGuestInfo />
              </>
            }
          />
          <Route
            path="/contract/detail/contractinfo/:id"
            element={
              <>
                <PageTitle title="Chi tiết hợp đồng" />
                <ContractInfo />
              </>
            }
          />
          <Route
            path="/claim"
            element={
              <>
                <PageTitle title="Bồi thường" />
                <Claim />
              </>
            }
          />
          <Route
            path="/claim/detail/:id"
            element={
              <>
                <PageTitle title="Chi tiết bồi thường" />
                <ClaimDetail />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            }
          />
        </Route>

        {/* Routes with UnauthLayout */}
        <Route element={<UnauthLayout />}>
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
              </>
            }
          />
        </Route>

        {/* Not Found Route */}
        <Route element={<NotFoundLayout />}>
          <Route
            path="*"
            element={
              <>
                <PageTitle title="404 Not Found" />
                <NotFoundPage />
              </>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
