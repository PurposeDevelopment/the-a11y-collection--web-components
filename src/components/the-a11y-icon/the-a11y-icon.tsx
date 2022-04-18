import { Component, Host, h, State, Watch, Prop, Element } from '@stencil/core';
import { fetchSvg } from '../../utils/utils';

@Component({
  tag: 'the-a11y-icon',
  styleUrl: 'the-a11y-icon.css',
  shadow: true,
})
export class TheA11yIcon {
  @Element() el: HTMLElement;

  /**
   * icon to be used
   */
  @Prop({ reflect: true }) icon: string;

  /**
   * title for the icon in case it does not have any label
   */
  @Prop({ reflect: true }) ariaTitle: string;

  @State() svg: string;

  @Watch('icon')
  async getIcon() {
    try {
      this.svg = await fetchSvg(this.icon);
    } catch {
      this.svg = '';
      console.log(`Could not load svg ${this.icon} from icon service.`);
    }
  }

  componentWillLoad() {
    this.getIcon();
  }

  componentDidLoad() {
    if (this.ariaTitle) {
      this.el.setAttribute('title', this.ariaTitle);
      this.el.setAttribute('aria-label', this.ariaTitle);
    }
  }

  render() {
    return (
      <Host>
        <div class='icon-container' innerHTML={this.svg}></div>
      </Host>
    );
  }

}
