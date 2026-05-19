/**
 * Form Validation Utilities
 * Contains validation functions for form inputs
 * 
 * Functions:
 * - validateEmail: Validates email format
 * - validatePassword: Validates password requirements
 * - validateForm: Validates entire form
 */

/**
 * Validates if the email format is correct
 * Uses regex pattern to check for valid email format
 * 
 * @param {string} email - The email address to validate
 * @returns {boolean} True if email is valid, false otherwise
 * 
 * @example
 * validateEmail('user@example.com') // true
 * validateEmail('invalid-email') // false
 */
export const validateEmail = (email) => {
  // Regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates if the password meets minimum requirements
 * Requirements:
 * - Minimum length: 6 characters
 * 
 * @param {string} password - The password to validate
 * @returns {boolean} True if password is valid, false otherwise
 * 
 * @example
 * validatePassword('password123') // true
 * validatePassword('pass') // false
 */
export const validatePassword = (password) => {
  // Minimum password length is 6 characters
  return password && password.length >= 6;
};

/**
 * Validates entire login form
 * Checks both email and password fields
 * 
 * @param {Object} formData - Form data object
 * @param {string} formData.email - The email to validate
 * @param {string} formData.password - The password to validate
 * @returns {Object} Object containing validation status and errors
 * 
 * @example
 * validateForm({ email: 'user@example.com', password: 'pass123' })
 * // { isValid: true, errors: {} }
 */
export const validateForm = (formData) => {
  const errors = {};

  // Validate email
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate password
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(formData.password)) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Sanitizes email input by trimming whitespace
 * 
 * @param {string} email - The email to sanitize
 * @returns {string} The sanitized email
 */
export const sanitizeEmail = (email) => {
  return email.trim().toLowerCase();
};

/**
 * Sanitizes password input by trimming whitespace
 * 
 * @param {string} password - The password to sanitize
 * @returns {string} The sanitized password
 */
export const sanitizePassword = (password) => {
  return password.trim();
};
