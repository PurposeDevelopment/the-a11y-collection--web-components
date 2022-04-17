import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'the-a11y-cta',
  styleUrl: 'the-a11y-cta.scss',
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
  @Prop({ reflect: true }) target?: string;

  /**
   * Label for the component.
   */
  @Prop({ reflect: true }) label = '';

  /**
   * String to generate random icon placed in front of or instead of the label.
   */
  @Prop({ reflect: true }) icon?: string;

  getIcon() {
    debugger;
    console.log(this.icon);

    if (!this.icon) {
      return this.label;
    };
    if (this.icon) {
      return fetch(`https://api.multiavatar.com/${this.icon}.svg`);
    };
  }

  getLink() {
    return (
      <a
        href={this.src}
        target={this.target}
        aria-label={this.label}
      >{this.label}</a>
    );
  }

  getButton() {
    console.log(this.icon);

    return (
      <button
      aria-label={this.label}
      >
        {this.getIcon.bind(this)}
      </button>
    );
  }

  render() {
    console.log(this.icon);
    return (
      <Host>
        {this.src && this.getLink()}
        {!this.src && this.getButton()}
      </Host>
    );
  }
}
