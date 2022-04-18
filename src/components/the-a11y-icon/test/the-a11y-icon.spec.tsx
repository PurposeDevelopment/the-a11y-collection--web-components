import { newSpecPage } from '@stencil/core/testing';
import { TheA11yIcon } from '../the-a11y-icon';

describe('the-a11a-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheA11yIcon],
      html: `<the-a11y-icon></the-a11y-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <the-a11y-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </the-a11y-icon>
    `);
  });
});
