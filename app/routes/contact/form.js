import contactValidations from "../../validations/contact";
import Route from '@ember/routing/route';
import EmberObject, { get, setProperties } from '@ember/object';
import { getOwner } from '@ember/application';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default Route.extend({
  flashMessages: service(),
  headData: service(),

  model() {
    // return this.store.findAll('contact');
    return EmberObject.extend(contactValidations).create(
      getOwner(this).ownerInjection(),
      {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        subject: null,
        message: null
      }
    );

  },

  afterModel() {
    return setProperties(this.headData, {
      title: 'Contact Us - Prio Wealth Management',
      // description:
      // '',
      // type: 'website',
      url: 'https://priowealth.com/contact/form'
    });
  },

  actions: {
    sendContactRequest(contact) {
      if (get(contact, 'validations.isValid')) {
        const data = contact.getProperties('firstName', 'lastName', 'phone', 'email', 'subject', 'message');
        data['form-name'] = 'contact';
        const body = this._encode(data);

        return fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body
        })
          .then(this._successMessage.bind(this))
          .catch(this._errorMessage.bind(this));
      } else {
        get(contact, 'validations.errors').forEach((error) => {
          this.flashMessages.danger(error.message);
        });
      }
    }
  },

  _successMessage() {
    this.flashMessages.success('Thanks for contacting us! We\'ll be in touch shortly.');
  },

  _errorMessage() {
    this.flashMessages.danger('Something went wrong :(. Please refresh and try again.');
  },

  /**
   * Util function to encode data for netify forms
   * @param data
   * @returns {string}
   * @private
   */
  _encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }
});
