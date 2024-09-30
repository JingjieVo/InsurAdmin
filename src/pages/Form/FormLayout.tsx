import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import FormPro from '../../components/Forms/FormPro';
import FormSignup from './FormSignup';
import FormSignin from './FormSignin';
import FormContact from './FormContact';

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <FormContact />
        </div>

        <div className="flex flex-col gap-9 mb-6">
          {/* <!-- Sign In Form --> */}
          <FormSignin />

          {/* <!-- Sign Up Form --> */}
          <FormSignup />
        </div>
      </div>
      <FormPro />
    </>
  );
};

export default FormLayout;
