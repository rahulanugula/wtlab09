
// Week-4: Registration form validation
(function(){
  const form = document.getElementById('registrationForm');
  if(!form) return;

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const phone = document.getElementById('phone');
  const dob = document.getElementById('dob');
  const address = document.getElementById('address');
  const course = document.getElementById('course');
  const roll = document.getElementById('roll');
  const terms = document.getElementById('terms');

  function setValidity(input, valid) {
    if (valid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
    }
  }

  function validateName() {
    const ok = /^[A-Za-z ]{3,}$/.test(fullName.value.trim());
    setValidity(fullName, ok);
    return ok;
  }
  function validateEmail() {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    setValidity(email, ok);
    return ok;
  }
  function validatePassword() {
    const ok = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value);
    setValidity(password, ok);
    return ok;
  }
  function validateConfirm() {
    const ok = password.value && confirmPassword.value === password.value;
    setValidity(confirmPassword, ok);
    return ok;
  }
  function validatePhone() {
    const ok = /^\d{10}$/.test(phone.value.trim());
    setValidity(phone, ok);
    return ok;
  }
  function validateDOB() {
    const ok = !!dob.value;
    setValidity(dob, ok);
    return ok;
  }
  function validateAddress() {
    const ok = address.value.trim().length > 5;
    setValidity(address, ok);
    return ok;
  }
  function validateCourse() {
    const ok = !!course.value;
    setValidity(course, ok);
    return ok;
  }
  function validateRoll() {
    const ok = roll.value.trim().length >= 5;
    setValidity(roll, ok);
    return ok;
  }
  function validateTerms() {
    const ok = terms.checked;
    setValidity(terms, ok);
    return ok;
  }

  [fullName,email,password,confirmPassword,phone,dob,address,course,roll,terms].forEach(el=>{
    el.addEventListener('input', ()=>{
      switch(el){
        case fullName: return validateName();
        case email: return validateEmail();
        case password: validatePassword(); return validateConfirm();
        case confirmPassword: return validateConfirm();
        case phone: return validatePhone();
        case dob: return validateDOB();
        case address: return validateAddress();
        case course: return validateCourse();
        case roll: return validateRoll();
        case terms: return validateTerms();
      }
    });
  });

  form.addEventListener('submit', function(e){
    const ok = [
      validateName(),
      validateEmail(),
      validatePassword(),
      validateConfirm(),
      validatePhone(),
      validateDOB(),
      validateAddress(),
      validateCourse(),
      validateRoll(),
      validateTerms()
    ].every(Boolean);
    if(!ok){
      e.preventDefault();
      e.stopPropagation();
      alert('Please fix validation errors before submitting.');
    } else {
      e.preventDefault();
      alert('Registration successful! (demo)');
      window.location.href = 'index.html';
    }
  });
})();
