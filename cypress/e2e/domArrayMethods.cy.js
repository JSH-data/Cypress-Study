/// <reference types="cypress" />

describe("Second Study", () => {
  beforeEach(() => {
    cy.visit("dom-array-methods/index.html");
    cy.waitRandomPerson();
  });

  //   it("File Open Test", () => {
  //     cy.get("#add-user").should("be.visible");
  //     cy.get("#double").should("be.visible");
  //     cy.get("#show-millionaires").should("be.visible");
  //     cy.get("#sort").should("be.visible");
  //     cy.get("#calculate-wealth").should("be.visible");
  //   });

  //   it("Add User Button Test", () => {
  //     cy.buttonClick("#add-user");
  //     cy.get(".person").should("have.length", 4);
  //   });
  it("Double Money Button Test", () => {
    cy.get(".person").then((elements) => {
      cy.wrap(elements).each((el, i) => {
        cy.wrap(el).invoke("val").as(`text${i}`);
        console.log(cy.get(`@text${i}`));
      });
      //   console.log(test);
    });
  });
  //   it("Show Only Millionaries Button Test");

  //   it("Sort By Richest Button Test");
  //   it("Calculate entire Wealth Button Test");
});
