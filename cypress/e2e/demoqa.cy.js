describe("Exercício S26 - Testes no DemoQA", () => {

 it("Deve preencher e submeter o formulário 'Text Box' com sucesso", () => {
    cy.visit("/text-box");
    
    const name = "Christopher Lima";
    const email = "chris.lima@inatel.br";
    const currentAddress = "Av. João de Camargo, 510";
    const permanentAddress = "Santa Rita do Sapucaí, MG";

    cy.get("#userName").type(name);
    cy.get("#userEmail").type(email);
    cy.get("#currentAddress").type(currentAddress);
    cy.get("#permanentAddress").type(permanentAddress);
    cy.get("#submit").click();

    cy.get("#output").should("be.visible");
    cy.get("#output #name").should("contain", name);
    cy.get("#output #email").should("contain", email);
    cy.get("#output #currentAddress").should("contain", currentAddress);
    cy.get("#output #permanentAddress").should("contain", permanentAddress);
  });

  it("Deve exibir um erro de formatação no campo de e-mail", () => {
    cy.visit("/text-box");
    const invalidEmail = "email-invalido";
    cy.get("#userName").type("Aluno Testador");
    cy.get("#userEmail").type(invalidEmail);
    cy.get("#submit").click();

    cy.get(".mr-sm-2.field-error.form-control").should("be.visible");
    cy.get('#output').should('not.contain', invalidEmail);
  });

 it("Deve marcar a checkbox 'Home' e verificar a mensagem de sucesso", () => {
    cy.visit("/checkbox");
    
    cy.get('button[title="Toggle"]').click();
    cy.get('label[for="tree-node-desktop"] .rct-checkbox').click();

    cy.get("#result").should("be.visible");
    cy.get("#result").should("contain.text", "You have selected :")
                     .and("contain.text", "desktop");
  });

  it("Deve pesquisar por 'Git Pocket Guide' e encontrá-lo na lista", () => {
    cy.visit("/books");
    cy.get("#searchBox").type("Git Pocket Guide");

    cy.get(".rt-tbody a").should("contain.text", "Git Pocket Guide");
  });

  it("Deve exibir a mensagem 'No rows found' ao pesquisar por um livro inexistente", () => {
    cy.visit("/books");
    cy.get("#searchBox").type("Livro que Nao Existe 12345");

    cy.get(".rt-noData").should("be.visible").and("contain.text", "No rows found");
  });

   it("Deve navegar para a página de detalhes de um livro ao clicar nele", () => {
    cy.visit("/books");
    const bookTitle = "Learning JavaScript Design Patterns";

    cy.contains(bookTitle).click({ force: true });
    cy.url().should("include", "/books?book=");
  });
});