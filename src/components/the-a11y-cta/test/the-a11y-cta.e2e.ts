// import { newE2EPage } from '@stencil/core/testing';

// describe('the-a11y-cta', () => {
//   it('renders', async () => {
//     const page = await newE2EPage();

//     await page.setContent('<the-a11y-cta></the-a11y-cta>');
//     const element = await page.find('the-a11y-cta');
//     expect(element).toHaveClass('hydrated');
//   });

//   it('renders changes to the name data', async () => {
//     const page = await newE2EPage();

//     await page.setContent('<the-a11y-cta></the-a11y-cta>');
//     const component = await page.find('the-a11y-cta');
//     const element = await page.find('the-a11y-cta >>> div');
//     expect(element.textContent).toEqual(`Hello, World! I'm `);

//     component.setProperty('first', 'James');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James`);

//     component.setProperty('last', 'Quincy');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

//     component.setProperty('middle', 'Earl');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
//   });
// });
