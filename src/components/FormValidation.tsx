import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  disabled?: boolean;
  className?: string;
  rows?: number;
}

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface FormValidationProps {
  rules: Record<string, ValidationRule>;
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  className?: string;
}

// Enhanced Form Field Component
export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  minLength,
  maxLength,
  pattern,
  disabled = false,
  className = '',
  rows = 4
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const isError = touched && error;
  const isValid = touched && !error && hasValue;

  const fieldVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.02 },
    error: { scale: 1, x: [-2, 2, -2, 2, 0] },
    success: { scale: 1.01 }
  };

  const inputVariants = {
    initial: { borderColor: 'rgb(209, 213, 219)' },
    focus: { borderColor: 'rgb(99, 102, 241)' },
    error: { borderColor: 'rgb(239, 68, 68)' },
    success: { borderColor: 'rgb(34, 197, 94)' }
  };

  const renderInput = () => {
    const baseClasses = `w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
      isError
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
        : isValid
        ? 'border-green-500 focus:ring-green-500 focus:border-green-500'
        : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`;

    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          rows={rows}
          className={`${baseClasses} resize-none`}
          aria-invalid={isError ? 'true' : 'false'}
          aria-describedby={isError ? `${name}-error` : undefined}
        />
      );
    }

    if (type === 'password') {
      return (
        <div className="relative">
          <input
            id={name}
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            onFocus={() => setIsFocused(true)}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            disabled={disabled}
            className={`${baseClasses} pr-12`}
            aria-invalid={isError ? 'true' : 'false'}
            aria-describedby={isError ? `${name}-error` : undefined}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      );
    }

    return (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        disabled={disabled}
        className={baseClasses}
        aria-invalid={isError ? 'true' : 'false'}
        aria-describedby={isError ? `${name}-error` : undefined}
      />
    );
  };

  return (
    <motion.div
      className={`space-y-2 ${className}`}
      variants={fieldVariants}
      initial="initial"
      animate={isFocused ? 'focus' : isError ? 'error' : isValid ? 'success' : 'initial'}
      transition={{ duration: 0.2 }}
    >
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <motion.div
        variants={inputVariants}
        animate={isFocused ? 'focus' : isError ? 'error' : isValid ? 'success' : 'initial'}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        {renderInput()}

        {/* Status Icons */}
        <AnimatePresence>
          {isValid && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <CheckCircle className="h-5 w-5 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {isError && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start space-x-2"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p id={`${name}-error`} className="text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {isValid && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start space-x-2"
          >
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-600 dark:text-green-400">
              Looks good!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Enhanced Form Validation Hook
export const useFormValidation = (rules: Record<string, ValidationRule>) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string | null => {
    const rule = rules[name];
    if (!rule) return null;

    if (rule.required && !value.trim()) {
      return `${name} is required`;
    }

    if (rule.minLength && value.length < rule.minLength) {
      return `${name} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value.length > rule.maxLength) {
      return `${name} must be no more than ${rule.maxLength} characters`;
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return `${name} format is invalid`;
    }

    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(rules).forEach((name) => {
      const error = validateField(name, values[name] || '');
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, values[name] || '');
    setErrors(prev => ({ ...prev, [name]: error || '' }));
  };

  const handleSubmit = async (onSubmit: (data: any) => void) => {
    // Mark all fields as touched
    const allTouched = Object.keys(rules).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    validateForm
  };
};

// Enhanced Submit Button Component
interface SubmitButtonProps {
  children: React.ReactNode;
  isSubmitting?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isSubmitting = false,
  disabled = false,
  className = '',
  onClick
}) => {
  const buttonVariants = {
    idle: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -2 },
    tap: { scale: 0.98, y: 0 },
    submitting: { scale: 0.98 }
  };

  return (
    <motion.button
      type="submit"
      disabled={disabled || isSubmitting}
      onClick={onClick}
      variants={buttonVariants}
      initial="idle"
      animate={isSubmitting ? 'submitting' : 'idle'}
      whileHover={!disabled && !isSubmitting ? 'hover' : 'idle'}
      whileTap={!disabled && !isSubmitting ? 'tap' : 'idle'}
      className={`relative px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        background: disabled || isSubmitting 
          ? 'linear-gradient(135deg, #9ca3af, #6b7280)'
          : 'linear-gradient(135deg, #6366f1, #8b5cf6)'
      }}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={isSubmitting ? { opacity: 0.7 } : { opacity: 1 }}
      >
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="mr-2"
          >
            <Loader2 className="h-5 w-5 animate-spin" />
          </motion.div>
        )}
        {children}
      </motion.div>

      {/* Loading overlay */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/20 rounded-lg flex items-center justify-center"
          >
            <Loader2 className="h-6 w-6 animate-spin text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// Form Validation Wrapper Component
export const FormValidation: React.FC<FormValidationProps> = ({
  rules,
  onSubmit,
  children,
  className = ''
}) => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormValidation(rules);

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.form
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur
          });
        }
        return child;
      })}
    </motion.form>
  );
};

export default FormValidation;
