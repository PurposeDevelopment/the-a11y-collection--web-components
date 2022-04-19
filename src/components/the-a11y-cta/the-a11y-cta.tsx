import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'the-a11y-cta',
  styleUrl: 'the-a11y-cta.css',
  shadow: true,
})
export class TheA11yCta {
  /**
   * Target source in case of a link.
   */
  @Prop({ reflect: true }) src?: string;

  /**
   * Target attribute for the link.
   */
  @Prop() target: '_blank' | '_self' = '_blank';

  /**
   * Label for the component.
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * Aria title which can be set if the button should not have a label.
   */
  @Prop({ reflect: true }) ariaTitle?: string;

  /**
   * String to generate random icon placed in front of or instead of the label.
   */
  @Prop({ reflect: true }) icon?: string;

  renderInnerHtml() {
    if (!this.icon) {
      return this.label;
    }
    if (this.icon) {
      return `<the-a11y-icon icon=${this.icon}></the-a11y-icon>${this.label || ''}`;
    }
  }

  render() {
    const TagName = this.src ? 'a' : 'button';
    return (
      <Host class={{
        'has-label': this.label !== undefined,
      }}>
        <TagName
          href={this.src}
          onClick={(e) => {
            if (!this.src) {
              e.preventDefault();
              alert('The button has been fired.');
            }
          }}
          target={this.src ? this.target : undefined}
          aria-label={this.label || this.ariaTitle}
          title={!this.label ? this.ariaTitle : undefined}
          innerHTML={this.renderInnerHtml()}
        ></TagName>
      </Host>
    );
  }
}
