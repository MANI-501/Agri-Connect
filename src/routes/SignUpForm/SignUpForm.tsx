import React, { useState } from "react";
import { validateEmail } from "src/globals/utils";
import styles from "./SignUpForm.module.scss";
import { Link } from "react-router-dom";

// Define a type for form fields
interface FormField {
  value: string;
  error?: string;
}

// Define the form state
interface FormState {
  activeTab: "customer" | "farmer";
  email: FormField;
  password: FormField;
  confirmPassword: FormField;
  name?: FormField;
  mobileNumber?: FormField;
  identificationNumber?: FormField;
  dob?: FormField;
  address?: FormField;
}

// Initial state for the form
const initialFormState: FormState = {
  activeTab: "customer",
  email: { value: "" },
  password: { value: "" },
  confirmPassword: { value: "" },
};

// Custom hook to manage form state and validation
const useForm = (initialState: FormState) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [showErrors, setShowErrors] = useState(false);

  // Function to handle input change and clear error messages
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: { value, error: "" } as FormField, // Update field value and clear error
    }));
  };

  // Function to validate a field and set errors
  const validateField = (name: keyof FormState, value: string) => {
    let error = "";

    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Invalid email format";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;

      case "confirmPassword":
        if (!value) {
          error = "Confirm password is required";
        } else if (value !== formState.password.value) {
          error = "Passwords do not match";
        }
        break;

      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;

      case "mobileNumber":
        if (!value) {
          error = "Mobile number is required";
        } else if (value.length !== 10 || !/^\d+$/.test(value)) {
          error = "Invalid mobile number";
        }
        break;

      case "identificationNumber":
        if (!value) {
          error = "Aadhar number is required";
        } else if (
          !/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(value)
        ) {
          error = "Invalid Aadhar number format";
        }
        break;

      case "dob":
        if (!value) {
          error = "Date of birth is required";
        }
        break;

      case "address":
        if (!value) {
          error = "Address is required";
        }
        break;

      default:
        break;
    }

    setFormState((prevState) => {
      const val = prevState[name] as FormField;

      return {
        ...prevState,
        [name]: { ...val, error } as FormField,
      };
    });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    // Validate each field
    for (const key in formState) {
      if (key === "activeTab") continue;
      const field = formState[key as keyof FormState] as FormField;
      if (field) {
        validateField(key as keyof FormState, field.value);
        if (field.error) {
          isValid = false;
        }
      }
    }

    if (isValid) {
      alert("Form is valid and ready for submission");
    } else {
      setShowErrors(true);
    }
  };

  return {
    formState,
    handleInputChange,
    handleSubmit,
    showErrors,
    validateField,
    setFormState,
  };
};

const SignUpForm = () => {
  const {
    formState,
    handleInputChange,
    handleSubmit,
    showErrors,
    validateField,
    setFormState,
  } = useForm(initialFormState);

  const handleTabChange = (tab: "customer" | "farmer") => {
    setFormState({ ...initialFormState, activeTab: tab });
  };

  return (
    <div>
      <div className={`d-flex ${styles.register}`}>
        <div>
          <div className={`d-flex justify-content-center ${styles.headerText}`}>
            SignUp
          </div>
          <div className="d-flex flex-row justify-content-space-between">
            <button
              onClick={() => handleTabChange("customer")}
              className={formState.activeTab === "customer" ? styles.active : ""}
            >
              For Customer
            </button>
            <button
              onClick={() => handleTabChange("farmer")}
              className={formState.activeTab === "farmer" ? styles.active : ""}
            >
              For Farmer
            </button>
          </div>
          <div className="p-2">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                {formState.activeTab === "customer" && (
                  <div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your email.."
                        name="email"
                        value={formState.email.value}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField("email", e.target.value)}
                        className={`form-control ${
                          showErrors && formState.email.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.email.error && (
                        <small className={styles.invalidText}>
                          {formState.email.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Your password.."
                        name="password"
                        value={formState.password.value}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("password", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.password.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.password.error && (
                        <small className={styles.invalidText}>
                          {formState.password.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Confirm password.."
                        name="confirmPassword"
                        value={formState.confirmPassword.value}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("confirmPassword", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.confirmPassword.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.confirmPassword.error && (
                        <small className={styles.invalidText}>
                          {formState.confirmPassword.error}
                        </small>
                      )}
                    </div>
                  </div>
                )}

                {formState.activeTab === "farmer" && (
                  <div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your name.."
                        name="name"
                        value={formState.name?.value || ""}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField("name", e.target.value)}
                        className={`form-control ${
                          showErrors && formState.name?.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.name?.error && (
                        <small className={styles.invalidText}>
                          {formState.name?.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your email.."
                        name="email"
                        value={formState.email.value}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField("email", e.target.value)}
                        className={`form-control ${
                          showErrors && formState.email.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.email.error && (
                        <small className={styles.invalidText}>
                          {formState.email.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Your Mobile number.."
                        name="mobileNumber"
                        value={formState.mobileNumber?.value || ""}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("mobileNumber", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.mobileNumber?.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.mobileNumber?.error && (
                        <small className={styles.invalidText}>
                          {formState.mobileNumber?.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Identification number (xxxx xxxx xxxx)"
                        name="identificationNumber"
                        value={formState.identificationNumber?.value || ""}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("identificationNumber", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.identificationNumber?.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.identificationNumber?.error && (
                        <small className={styles.invalidText}>
                          {formState.identificationNumber?.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group mt-3">
                      <textarea
                        placeholder="Your Address.."
                        name="address"
                        value={formState.address?.value || ""}
                        onChange={handleInputChange}
                        onBlur={(e) => validateField("address", e.target.value)}
                        className={`form-control ${
                          showErrors && formState.address?.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      ></textarea>
                      {showErrors && formState.address?.error && (
                        <small className={styles.invalidText}>
                          {formState.address?.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Your password.."
                        name="password"
                        value={formState.password.value}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("password", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.password.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.password.error && (
                        <small className={styles.invalidText}>
                          {formState.password.error}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Confirm password.."
                        name="confirmPassword"
                        value={formState.confirmPassword.value}
                        onChange={handleInputChange}
                        onBlur={(e) =>
                          validateField("confirmPassword", e.target.value)
                        }
                        className={`form-control ${
                          showErrors && formState.confirmPassword.error
                            ? styles.invalidBorder
                            : ""
                        }`}
                      />
                      {showErrors && formState.confirmPassword.error && (
                        <small className={styles.invalidText}>
                          {formState.confirmPassword.error}
                        </small>
                      )}
                    </div>
                  </div>
                )}

                <button type="submit">SignUp</button>
              </form>
            </div>
          </div>
          <p>
            Already have an account? <Link to={"/login"}> Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
