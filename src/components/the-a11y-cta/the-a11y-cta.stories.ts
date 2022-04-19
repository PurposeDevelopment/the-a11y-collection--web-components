import readme from './readme.md';

export default {
  title: 'Components/TheA11yCta',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'the-a11y-cta.spec.tsx',
      'the-a11y-cta.e2e.ts',
    ],
  },
  argTypes: {
    label: {
      name: 'Label',
      control: {
        type: 'text',
      },
      defaultValue: 'I am a fully accessible button/link',
    },
    icon: {
      name: 'Icon',
      control: {
        type: 'text',
      },
      defaultValue: 'A11y',
    },
    src: {
      name: 'Src',
      control: {
        type: 'text',
      },
    },
    target: {
      name: 'Target',
      control: {
        type: 'select',
        options: ['_blank', '_self'],
      },
    },
  },
};

export const configurable = ({
  label,
  icon,
  src,
  target
}) => {
  return src ? `<the-a11y-cta label="${label}" target="${target}" src="${src}" icon="${icon}"></the-a11y-cta>` : `<the-a11y-cta label="${label}" icon="${icon}"></the-a11y-cta>`;
};
