import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required'),
});

export const VerifyTokenSchema = yup
  .object({
    token: yup
      .string()
      .required('Supply the token to verify')
      .test('len', 'Token must be exactly 6 digits', (val) => {
        if (val) {
          const stringValue = val.toString();
          return stringValue.length === 6;
        }
        return false;
      }),
  })
  .required();

export const AddUserSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    middleName: yup.string().required('Middle name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required').email('Email not valid'),
    department: yup.string().required('Department is required'),
    staffNumber: yup.string().required('Staff Number is required'),
  })
  .required();

export const CreatePasswordSchema = yup
  .object({
    password: yup
      .string()
      .required('Password is required')
      .min(8)
      .max(100)
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one digit')
      .matches(
        /[@$!%*?&#]/,
        'Password must contain at least one special character'
      ),
    password_confirmation: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'Password confirmation must match the password'
      ),
  })
  .required();
