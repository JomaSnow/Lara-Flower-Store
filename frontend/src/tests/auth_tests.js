import {
  userLogin,
  adminLogin,
  createUser,
  isLogged,
  logout,
} from "@/api/auth_functions";

export async function auth_tests() {
  await userLogin({ email: "user@email.com", password: "joao123" }).then(
    (res) => {
      console.log("userLogin success");
      console.log(res);
    }
  );
  await userLogin({ email: "user@email.com", password: "joao1234" }).then(
    (res) => {
      console.log("userLogin fail wrong password");
      console.log(res);
    }
  );
  await userLogin({ email: "admin@email.com", password: "joao123" }).then(
    (res) => {
      console.log("userLogin admin success");
      console.log(res);
    }
  );
  await adminLogin({ email: "admin@email.com", password: "joao123" }).then(
    (res) => {
      console.log("adminLogin success");
      console.log(res);
    }
  );
  await adminLogin({ email: "user@email.com", password: "joao123" }).then(
    (res) => {
      console.log("adminLogin user fail");
      console.log(res);
    }
  );
  await isLogged().then((res) => {
    console.log("isLogged true");
    console.log(res);
  });
  await logout().then((res) => {
    console.log("logout success");
    console.log(res);
  });
  await logout().then((res) => {
    console.log("logout fail (no token)");
    console.log(res);
  });
  await isLogged().then((res) => {
    console.log("isLogged false");
    console.log(res);
  });
  await createUser({}).then((res) => {
    console.log("createUser fail {required fields}");
    console.log(res);
  });
  await createUser({
    name: "user",
    email: "user@email.com",
    password: "joao123",
    password_confirmation: "joao123",
    dob: "1998-01-18 18:46:19",
    cep: "70375030",
  }).then((res) => {
    console.log("createUser fail {email taken}");
    console.log(res);
  });
  await createUser({
    name: "user",
    email: `user${Math.floor(Math.random() * 10000)}@email.com`,
    password: "joao123",
    password_confirmation: "joao1234",
    dob: "1998-01-18 18:46:19",
    cep: "70375030",
  }).then((res) => {
    console.log("createUser fail {passwords dont match}");
    console.log(res);
  });
  await createUser({
    name: "user",
    email: `user${Math.floor(Math.random() * 10000)}@email.com`,
    password: "joao123",
    password_confirmation: "joao123",
    dob: "1998-01-18 18:46:19",
    cep: "70375030",
  }).then((res) => {
    console.log("createUser success");
    console.log(res);
  });
  await isLogged().then((res) => {
    console.log("isLogged true");
    console.log(res);
  });
  await logout().then((res) => {
    console.log("logout success");
    console.log(res);
  });
  await isLogged().then((res) => {
    console.log("isLogged false");
    console.log(res);
  });
}
