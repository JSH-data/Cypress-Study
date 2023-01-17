/// <reference types="cypress" />

describe("HangMan", () => {
  beforeEach(() => {
    cy.visit("hangman/index.html");
  });

  it("HangMan Check", () => {
    cy.get(".game-container").should("be.visible");
  });

  it("HangMan Fail", () => {
    cy.wrap(["q", "w", "e", "r", "t", "y", "u"]).each((el, i) => {
      cy.get("input").type(`${el}`);
    });
    cy.get(".figure-part").each((el) => {
      cy.wrap(el).should("be.visible");
    });
    cy.get("#final-message")
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("Unfortunately you lost. 😕");
      });
  });

  it("HangMan Success", () => {
    cy.wrap(["a", "p", "l", "i", "c", "a", "t", "o", "n"]).each((el, i) => {
      cy.get("input").type(`${el}`);
    });

    cy.get(".figure-part").each((el) => {
      cy.wrap(el).should("not.be.visible");
    });

    cy.get("#final-message")
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("Congratulations! You won! 😃");
      });
  });
});
