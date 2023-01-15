/// <reference types="Cypress" />
describe('Sending Offer Without Value', () => {
      //Testing Send Offer Without Value
      it("Send Offer Without Value", () => {
        cy.visit("https://monstercat-test.netlify.app/")
        cy.get(".offer-button").click();
        cy.get("input").type(0);
        cy.get(".offer-button").click();
        cy.get(".error").should("be.visible");
      })

  })