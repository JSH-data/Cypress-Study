Cypress.Commands.add("buttonClick", (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add("waitRandomPerson", () => {
  cy.get(".person").should("have.length", 3);
});
