import { validator, buildValidations } from 'ember-cp-validations';

export default buildValidations({
  firstName: validator('presence', true),
  lastName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  phone: [
    validator('presence', true),
    validator('format', { type: 'phone' })
  ],
  subject: validator('presence', true),
  message: validator('presence', true)
});