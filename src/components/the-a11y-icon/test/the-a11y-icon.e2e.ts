import { newE2EPage } from '@stencil/core/testing';

describe('the-a11y-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<the-a11y-icon></the-a11y-icon>');

    const element = await page.find('the-a11y-icon');
    expect(element).toHaveClass('hydrated');
  });
});
