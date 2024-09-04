const validateForm = (form) => (value) => {
  let errors = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const numberRegex = /\d/;
  if (form === "newsletter") {
    if (!value.email) {
      errors.email = "Пожалуйста введите email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Пожалуйста введите корректный email";
    }
  } else if (form === "registration") {
    if (!value.fullname) {
      errors.fullname = "Пожалуйста введите имя";
    } else if (value.fullname.length < 3) {
      errors.fullname = "Имя слишком короткое";
    } else if (
      value.fullname === "test" ||
      value.fullname === "testtest" ||
      value.fullname === "Test" ||
      value.fullname === "admin" ||
      value.fullname === "name" ||
      value.fullname === "Name" ||
      value.fullname === "Fullname"
    ) {
      errors.fullname = "Недопустимое имя!";
    }
    if (!value.email) {
      errors.email = "Пожалуйста введите email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Пожалуйста введите корректный email";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "Неверный email!";
    }
    if (!value.password) {
      errors.password = "Пожалуйста введите корректный пароль";
    } else if (value.password.length < 8 || value.repeatPassword.length < 8) {
      errors.password = "Пароль должен быть не менее 8 символов";
    } else if (
      value.password === "12345678" ||
      value.password === "qwerty1" ||
      value.password === "test1234" ||
      value.password === "abcd1234" ||
      value.password === "123456789" ||
      value.password === "1234567890"
    ) {
      errors.password = "Слишком слабый пароль!";
    } else if (/\s/.test(value.password)) {
      errors.password = "Пароль не должен содержать пробелы";
    }
    if (!value.repeatPassword) {
      errors.repeatPassword = "Пожалуйста повторите пароль";
    }
    if (value.password !== value.repeatPassword) {
      errors.password = "Пароль не совпадает";
    }
  } else if (form === "profile") {
    if (value.fullname.length !== 0 && value.fullname.length < 3) {
      errors.fullname = "Имя слишком короткое";
    } else if (
      value.fullname === "test" ||
      value.fullname === "testtest" ||
      value.fullname === "Test" ||
      value.fullname === "admin" ||
      value.fullname === "name" ||
      value.fullname === "Name" ||
      value.fullname === "Fullname"
    ) {
      errors.fullname = "Недопустимое имя пользователя";
    }
    if (value.address.length !== 0 && value.address.length < 5) {
      errors.address = "Адрес слишком короткий";
    }
    if (value.email.length !== 0 && !emailRegex.test(value.email)) {
      errors.email = "Пожалуйста введите корректный email";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "Недопустимый email!";
    }
    if (value.password.length !== 0 && value.password.length < 8) {
      errors.password = "Пароль должен содержать минимум 8 символов";
    } else if (
      value.password === "12345678" ||
      value.password === "qwerty1" ||
      value.password === "test1234" ||
      value.password === "abcd1234" ||
      value.password === "123456789" ||
      value.password === "1234567890"
    ) {
      errors.password = "Пароль слишком простой!";
    }
    if (value.number.length !== 0 && value.number.length < 5) {
      errors.number = "Некорректный номер телефона";
    } else if (value.number.length !== 0 && !numberRegex.test(value.number)) {
      errors.number = "Некорректный номер телефона";
    }
  } else if (form === "login") {
    if (!value.email) {
      errors.email = "Пожалуйста введите email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Пожалуйста введите корректный email";
    }

    if (!value.password) {
      errors.password = "Пожалуйста введите корректный пароль";
    } else if (value.password.length < 8) {
      errors.password = "Пароль должен содержать минимум 8 символов";
    }
  } else if (form === "contact") {
    if (!value.fullname) {
      errors.fullname = "Пожалуйста введите имя";
    } else if (numberRegex.test(value.fullname)) {
      errors.fullname = "Пожалуйста введите корректное имя";
    } else if (value.fullname && value.fullname.length < 3) {
      errors.fullname = "Пожалуйста введите корректное имя";
    }
    if (!value.email) {
      errors.email = "Пожалуйста введите email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Пожалуйста введите корректный email";
    } else if (
      value.email === "test@gmail.com" ||
      value.email === "test@mail.com" ||
      value.email === "test@hotmail.com" ||
      value.email === "admin@gmail.com"
    ) {
      errors.email = "Неверный email!";
    }
    if (!value.message) {
      errors.message = "Пожалуйста введите сообщение";
    } else if (value.message && value.message.length < 10) {
      errors.message = "Сообщение должно содержать минимум 10 символов";
    }
  } else if (form === "payment") {
    if (!value.firstname) {
      errors.firstname = "Пожалуйста введите имя";
    }
    if (!value.lastname) {
      errors.lastname = "Пожалуйста введите фамилию";
    }
    if (!value.cardNumber || value.cardNumber.length < 16) {
      errors.cardNumber = "Пожалуйста введите корректный код карты";
    }
    if (!value.cvv || value.cvv.length < 3) {
      errors.cvv = "Пожалуйста введите корректный CVV";
    }
    if (!value.month || value.month > 12 || value.month < 1) {
      errors.year = "Пожалуйста введите корректную дату карты";
    }
    if (!value.year || value.year > 28 || value.year < 17) {
      errors.year = "Пожалуйста введите корректный год карты";
    }
  }

  return errors;
};

export default validateForm;
