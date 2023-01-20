beforeEach(() => {
  cy.visit('http://it2810-19.idi.ntnu.no/project3/frontend/#/')
})

describe('Open champion page', () => {
  it('Click on champion and open page', () => {
    cy.contains('Zac').click()
    cy.url().should('include', '/Zac')
    cy.contains('the Secret Weapon')
  })
})

describe('Check content on champion page', () => {
  it('Check that champion page contains correct information', () => {
    cy.contains('Janna').click()
    cy.contains("the Storm's Fury")
    cy.contains('Tag:Support, Mage')
    cy.contains("Armed with the power of Runeterra's gales,")
    cy.contains('Eye of the Storm can be used on allied turrets.')
    cy.contains('Save an interrupt ability for when Janna uses her ultimate.')
  })
  it('Check that abilities work', () => {
    cy.contains('Janna').click()
    cy.contains('Tailwind')

    cy.get('#qTab').click()
    cy.contains('Howling Gale')

    cy.get('#wTab').click()
    cy.contains('Zephyr')

    cy.get('#eTab').click()
    cy.contains('Eye Of The Storm')

    cy.get('#rTab').click()
    cy.contains('Monsoon')

    cy.get('#passiveTab').click()
    cy.contains('Tailwind')
  })
})

describe('Navigate to homepage', () => {
  it('Test that navigating back to homepage works', () => {
    cy.contains('Zyra').click()
    cy.contains('Rise of the Thorns')
    cy.get('#backArrow').click()
    cy.url().should('include', '/#/')
    cy.contains('Aatrox')
    cy.contains('Zoe')
    cy.contains('Rise of the Thorns').should('not.exist')
    cy.get('#outlined-basic')
  })
})

describe('Search for champions', () => {
  it('Test that name filter shows the correct champions', () => {
    cy.get('#outlined-basic')
      .type('Ja')
      .should('have.value', 'Ja')

    cy.contains('Janna')
    cy.contains('Jax')
    cy.contains('Jarvan IV')
    cy.contains('Jayce')

    cy.contains('Zac').should('not.exist')
    cy.contains('Jinx').should('not.exist')
    cy.contains('Jhin').should('not.exist')
  })
})

describe('Use tags filter', () => {
  it('Test that writing in field works', () => {
    cy.get('#tagSelect')
      .type('Support')
      .should('have.value', 'Support')
  })
  it('Test that autocomplete works', () => {
    cy.get('#tagSelect').click()
    cy.contains('Marksman')
    cy.contains('Support')
    cy.contains('Assassin')
    cy.contains('Mage')
    cy.contains('Fighter')
    cy.contains('Tank')
  })
  it('Test that tag filter works for "Support"', () => {
    cy.get('#tagSelect').click()
    cy.contains('Support').click({force: true})

    cy.contains('Alistar')
    cy.contains('Janna')
    cy.contains('Yuumi')
    cy.contains('Zyra')

    cy.contains('Caitlyn').should('not.exist')
    cy.contains('Yorick').should('not.exist')
  })
  it('Test that tag filter works for "Assassin"', () => {
    cy.get('#tagSelect').click()
    cy.contains('Assassin').click({force: true})

    cy.contains('Katarina')
    cy.contains('Akali')
    cy.contains('Zed')

    cy.contains('Seraphine').should('not.exist')
    cy.contains('Janna').should('not.exist')
    cy.contains('Zac').should('not.exist')
  })
})

describe('Use resource filter', () => {
  it('Test that writing in field works', () => {
    cy.get('#resourceField')
      .type('Mana')
      .should('have.value', 'Mana')
  })
  it('Test that autocomplete works', () => {
    cy.get('#resourceField').click()
    cy.contains('Blood Well')
    cy.contains('Mana')
    cy.contains('Fury')
    cy.contains('Shield')
    cy.contains('Flow')
    cy.contains('None')
  })
  it('Test that filter works for "Mana', () => {
    cy.get('#resourceField').click()
    cy.contains('Mana').click({force: true})

    cy.contains('Janna')
    cy.contains('Zyra')
    cy.contains('Jinx')

    cy.contains('Katarina').should('not.exist')
    cy.contains('Zac').should('not.exist')
    cy.contains('Kled').should('not.exist')
    cy.contains('Tryndamere').should('not.exist')
  })
  it('Test that filter works for "Health Cost"', () => {
    cy.get('#resourceField').click()
    cy.contains('Health Cost').click({force: true})

    cy.contains('Zac')
    cy.contains('Dr. Mundo')

    cy.contains('Katarina').should('not.exist')
    cy.contains('Janna').should('not.exist')
    cy.contains('Kled').should('not.exist')
    cy.contains('Tryndamere').should('not.exist')
  })
})

describe('Use sorting', () => {
  it('Test text field', () => {
    cy.get('#championsSort').click()
      .type('Attack')
      .should('have.value', 'Attack')
  })
  it('Test autocomplete', () => {
    cy.get('#championsSort').click()
    cy.contains('Alphabetical')
    cy.contains('Attack range')
  })
  it('Test sorting by attack range', () => {
    cy.get('#championsSort').click()
    cy.contains('Attack range').click({force: true})

    cy.get('#championsContainer').children().first().should('contain', 'Akali')
    cy.get('#championsContainer').children().first().should('not.contain', 'Aatrox')
  })
  it('Test alphabetical sorting', () => {
    cy.get('#championsSort').click()
    cy.contains('Alphabetical').click({force: true})
    
    cy.get('#championsContainer').children().first().should('not.contain', 'Akali')
    cy.get('#championsContainer').children().first().should('contain', 'Aatrox')

    // Since alphabetical is default, check that it still works afte change of filter
    cy.get('#championsSort').click()
    cy.contains('Attack range').click({force: true})
    cy.get('#championsSort').click()
    cy.contains('Alphabetical').click({force: true})
    cy.get('#championsContainer').children().first().should('not.contain', 'Akali')
    cy.get('#championsContainer').children().first().should('contain', 'Aatrox')
  })
})