// import { newSpecPage } from '@stencil/core/testing';
// import { TheA11yCta } from './the-a11y-cta';

// describe('the-a11y-cta', () => {
//   it('renders', async () => {
//     const { root } = await newSpecPage({
//       components: [TheA11yCta],
//       html: '<the-a11y-cta></the-a11y-cta>',
//     });
//     expect(root).toEqualHtml(`
//       <the-a11y-cta>
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm
//           </div>
//         </mock:shadow-root>
//       </the-a11y-cta>
//     `);
//   });

//   it('renders with values', async () => {
//     const { root } = await newSpecPage({
//       components: [TheA11yCta],
//       html: `<the-a11y-cta first="Stencil" last="'Don't call me a framework' JS"></the-a11y-cta>`,
//     });
//     expect(root).toEqualHtml(`
//       <the-a11y-cta first="Stencil" last="'Don't call me a framework' JS">
//         <mock:shadow-root>
//           <div>
//             Hello, World! I'm Stencil 'Don't call me a framework' JS
//           </div>
//         </mock:shadow-root>
//       </the-a11y-cta>
//     `);
//   });
// });
