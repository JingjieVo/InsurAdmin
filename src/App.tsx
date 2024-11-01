import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import NotFoundPage from './pages/NotFound';
import UnauthLayout from './layout/UnauthLayout';
import NotFoundLayout from './layout/NotFoundLayout';
import { AuthProvider } from './common/AuthContext';
import PrivateRoute from './common/PrivateRoute';
import Question from './pages/Product/Question';
import Contract from './pages/Contract';
import Claim from './pages/Claim';
import Program from './pages/Product/Program';
import Products from './pages/Product/Products';
import AddQuestion from './pages/Product/Question/AddQuestion';
import AddProgram from './pages/Product/Program/AddProgram';
import AddProduct from './pages/Product/Products/AddProduct';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
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
                <ECommerce />
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
            path="/claim"
            element={
              <>
                <PageTitle title="Bồi thường" />
                <Claim />
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
