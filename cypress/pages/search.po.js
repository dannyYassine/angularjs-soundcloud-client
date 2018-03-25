
export function SearchPageObject() {

    this.type = function (text) {
        cy.get('#search_input')
            .type(text);
    }

}