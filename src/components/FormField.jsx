function FormField({ id, label, name, type = 'text', required = false, children, error = '', ...props }) {
  return (
    <div className={`field${error ? ' bad' : ''}`}>
      <label htmlFor={id}>{label}{required ? ' *' : ''}</label>
      {children || <input id={id} name={name} type={type} required={required} {...props} />}
      <span className="err" aria-live="polite">{error}</span>
    </div>
  );
}

export default FormField;
