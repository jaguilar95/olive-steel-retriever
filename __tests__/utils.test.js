const dateFormat = require("../utils/dateFormat");
const validateEmail = require("../utils/validateEmail");

test("reformats current date", () => {
  const date = "2022-07-25T18:47:20.148Z";

  expect(dateFormat(date)).toBe("Jul 25th, 2022 at 13:47 pm");
});

test("checks for email validation", () => {
  const email = "person@email.com";

  expect(validateEmail(email)).toBeTruthy();
});
