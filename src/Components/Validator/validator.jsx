const Validator = (pesron) => {
  pesron.age = parseInt(pesron.age);
  if (pesron.name.trim().length < 1) {
    return "Enter Name!";
  } else if (pesron.age.length < 0) {
    return "Enter Age!";
  } else if (!Number.isInteger(pesron.age)) {
    return "Age must be number";
  } else if (pesron.age < 1) {
    return "age must be more than 0";
  }
  // console.log("fuck");
  return "true";
};
export default Validator;
