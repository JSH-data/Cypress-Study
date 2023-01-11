/// <reference types="cypress" />

describe("Second Study", () => {
  beforeEach(() => {
    cy.visit("dom-array-methods/index.html");
    cy.waitRandomPerson();
  });

  it("File Open Test", () => {
    cy.get("#add-user").should("be.visible");
    cy.get("#double").should("be.visible");
    cy.get("#show-millionaires").should("be.visible");
    cy.get("#sort").should("be.visible");
    cy.get("#calculate-wealth").should("be.visible");
  });

  it("Add User Button Test", () => {
    cy.buttonClick("#add-user");
    cy.get(".person").should("have.length", 4);
    cy.buttonClick("#add-user");
    cy.get(".person").should("have.length", 5);
    cy.buttonClick("#add-user");
    cy.get(".person").should("have.length", 6);
    cy.buttonClick("#add-user");
    cy.get(".person").should("have.length", 7);

    cy.buttonClick("#double");
  });

  it("Double Money Button Test", () => {
    cy.get(".person").then((elements) => {
      cy.wrap(elements).each((el, i) => {
        cy.wrap(el)
          .invoke("text")
          .then((text) => {
            cy.wrap(2 * Number(text.split("$")[1].replaceAll(",", ""))).as(
              `textBefore${i}`
            );
          });
      });
    });
    cy.buttonClick("#double");
    cy.get(".person").then((elements) => {
      cy.wrap(elements).each((el, i) => {
        cy.wrap(el)
          .invoke("text")
          .then((text) => {
            cy.wrap(Number(text.split("$")[1].replaceAll(",", ""))).then(
              (textAfter) => {
                cy.get(`@textBefore${i}`).then((textBefore) => {
                  expect(textBefore).to.eq(textAfter);
                });
              }
            );
          });
      });
    });
  });

  it("Show Only Millionaries Button Test", () => {
    cy.buttonClick("#double");
    cy.buttonClick("#show-millionaires");

    cy.get(".person").then((elements) => {
      cy.wrap(elements).each((el, i) => {
        cy.wrap(el)
          .invoke("text")
          .then((text) => {
            expect(Number(text.split("$")[1].replaceAll(",", ""))).to.above(
              1000000
            );
          });
      });
    });
  });

  // it("Sort By Richest Button Test", () => {
  //   cy.buttonClick("#sort");
  //   cy.get(".person").then((elements) => {
  //     cy.wrap(elements.length).as("elementsLength");

  //     cy.wrap(elements).each((el, i) => {
  //       cy.wrap(el)
  //         .invoke("text")
  //         .then((text) => {
  //           cy.wrap(Number(text.split("$")[1].replaceAll(",", ""))).as(
  //             `num${i}`
  //           );
  //         });
  //     });
  //   });

  //   cy.get("@elementsLength").then((len) => {
  //     for (let i = 0; i < len - 1; i++) {
  //       console.log(cy.get(`@num${i}`));
  //     }
  //   });
  // });
  //   it("Calculate entire Wealth Button Test");
});
