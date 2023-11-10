export const signUpFormData = {
  firstName: {
    defaultValue: "",
    regex: /^[A-Za-z]+$/, // Only allow letters in the first name
    validation: function (value) {
      return !/^[A-Za-z]+$/.test(value)
        ? "Please enter a valid first name"
        : "";
    }
  },
  lastName: {
    defaultValue: "",
    regex: /^[A-Za-z]+$/, // Only allow letters in the last name
    validation: function (value) {
      return !/^[A-Za-z]+$/.test(value) ? "Please enter a valid last name" : "";
    }
  },
  phoneNumber: {
    defaultValue: "",
    regex: /^[0-9]+$/, // Only allow numbers in the phone number
    validation: function (value) {
      return !/^[0-9]+$/.test(value) ? "Please enter a valid phone number" : "";
    }
  },
  address: {
    defaultValue: "",
    regex: /^[A-Za-z0-9\s,.-]+$/, // Allow letters, numbers, spaces, and common address characters
    validation: function (value) {
      return !/^[A-Za-z0-9\s,.-]+$/.test(value)
        ? "Please enter a valid address"
        : "";
    }
  }
};
