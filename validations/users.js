export default class UsersValidation {
    userAddValidation(req) {
      let err = [];
  
      const userData = req.body;
      const alphanumeric = /^[A-Za-z0-9]+$/;
      const emailRegex = /^\S+@\S+\.\S+$/;
      const phoneRegex = /^\d+$/;
      // Validation for ID
      if (!userData.id && !req.params.id) {
        err.push('id:Mandatory field');
      }
  
      // Validation for firstName
      if (!userData.firstName) {
        err.push('firstName:Mandatory field');
      } else if (!userData.firstName.match(/^[A-Za-z]+$/)) {
        err.push('firstName:Only alphabets allowed');
      } else if (userData.firstName.length < 3) {
        err.push('firstName:Minimum length should be 3');
      }
  
      // Validation for lastName
      if (!userData.lastName) {
        err.push('lastName:Mandatory field');
      } else if (!userData.lastName.match(/^[A-Za-z]+$/)) {
        err.push('lastName:Only alphabets allowed');
      } else if (userData.lastName.length < 3) {
        err.push('lastName:Minimum length should be 3');
      }
  
      // Validation for gender
      if (!userData.gender) {
        err.push('gender:Mandatory field');
      } else if (!['MALE', 'FEMALE', 'OTHERS'].includes(userData.gender.toUpperCase())) {
        err.push('gender:Invalid gender value');
      }
  
      // Validation for address
      if (!userData.address) {
        err.push('address:Mandatory field');
      } else {
        const address = userData.address;
        if (!address.line1) {
          err.push('address.line1:Mandatory field');
        } else if (address.line1.length < 8) {
          err.push('address.line1:Minimum length should be 8');
        }
  
        if (address.line2 && address.line2.length === 0) {
          err.push('address.line2:Invalid length');
        }
  
        if (!address.city) {
          err.push('address.city:Mandatory field');
        }
  
        if (!address.country) {
          err.push('address.country:Mandatory field');
        } else if (!address.country.match(/^[A-Z]+$/)) {
          err.push('address.country:Only uppercase alphabets allowed');
        }
  
        if (!address.zipCode) {
          err.push('address.zipCode:Mandatory field');
        } else if (address.zipCode.length > 10) {
          err.push('address.zipCode:Maximum length should be 10');
        }
      }
  
      // Validation for email
      if (!userData.email) {
        err.push('email:Mandatory field');
      } else if (!userData.email.match(emailRegex)) {
        err.push('email:Invalid email format');
      }
  
      // Validation for phone
      if (!userData.phone) {
        err.push('phone:Mandatory field');
      } else if (!userData.phone.match(phoneRegex)) {
        err.push('phone:Invalid phone number format');
      }
  
      return err;
    }
  }
  