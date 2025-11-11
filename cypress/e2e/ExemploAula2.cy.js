describe("Testes da criação, registro e login", () => {

  it.skip("Teste criação de usuário com sucesso", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Vitinho");
    cy.get("#Text1").type("Vitinho");
    cy.get("#username").type("Vitinho");
    cy.get("#password").type("Vitinho");
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", "Registration successful");
  });

  it.skip("Teste criação de usuário com falha", () => {
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get(".btn-link").click();
    cy.get("#firstName").type("Vitinho");
    cy.get("#Text1").type("Vitinho");
    cy.get("#username").type("Vitinho");
    cy.get(".btn-primary").should("be.disabled");
  });

  it.skip("Teste de login com sucesso", () => {
    const infos = criarUser();
    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", infos[0]);
  });

  it("Delete usuário com sucesso", function () {
    const infos = criarUser();
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get(".ng-binding").should("contain.text", infos[0]);
    cy.get("h1.ng-binding").should("contain.text", infos[0]);
    cy.get('a[href="#"]').click();
    cy.get("a.btn").click();
    cy.get("#username").type(infos[0]);
    cy.get("#password").type(infos[1]);
    cy.get(".btn-primary").click();
    cy.get("div.alert").should("contain.text", "Username or password is incorrect");
  });

});

function criarUser() {
  const hora = new Date().getHours().toString();
  const minuto = new Date().getMinutes().toString();
  const seg = new Date().getSeconds().toString();

  const ID = `${hora}${minuto}${seg}ID`;
  const Senha = `${hora}${minuto}${seg}Senha`;
  const infos = [ID, Senha];

  cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login");
  cy.get(".btn-link").click();
  cy.get("#firstName").type(ID);
  cy.get("#Text1").type(ID);
  cy.get("#username").type(ID);
  cy.get("#password").type(Senha);
  cy.get(".btn-primary").click();
  cy.get(".ng-binding").should("contain.text", "Registration successful");

  return infos;
}
