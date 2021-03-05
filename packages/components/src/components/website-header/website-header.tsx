import { Component, Prop, h } from "@stencil/core";

/**
 * @name Website Header
 * @description The Website Header displays our logo and shows users what U-M Library website that they are using.
 * @status experimental
 * @whenToUse If your website is hosted on lib.umich.edu.
 * @whenNotToUse If your website requires a more complicated U-M website header then you may need to work with the Design System team or build your own.
 * @items Main navigation items.
 * @example
 * <m-website-header name="Example"></m-website-header>
 * 
 * <script>
 *   var header = document.querySelector('m-website-header[name="Example"]')
 *
 *   header.items = [
 *     { label: "Web Components", href: "/web-components" },
 *     { label: "Styles", href: "/styles" }
 *   ]
 * </script>
 * @usedBy
 * - [Design System](https://design-system.lib.umich.edu/)
 */
@Component({
  tag: "m-website-header",
  styleUrl: "website-header.scss",
  shadow: true
})
export class WebsiteHeader {
  /**
   * The user-friendly name of the U-M Library website that uses this Header.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * An array of items for the main navigation. Items have to include mandatory "label" and "href" fields to work.
   */
  @Prop({ reflect: true }) items;

  /**
   * The URL that the logo and name link to.
   */
  @Prop({ reflect: true }) to: string = "/";

  render() {
    return (
      <header class="website-header">
        <div class="website-header__container">
          <div class="website-header__inner-container">
            <a href={this.to} class="website-header__website-home-link">
              <m-logo></m-logo>

              {this.name && (
                <span class="website-header__website-name">{this.name}</span>
              )}
            </a>
          </div>
          {this.items && (
            <nav class="website-header__nav" aria-label="main">
              <ul class="website-header__nav-items">
                {this.items.map(item => (
                  <li class="website-header__nav-item">
                    <a
                      href={item.href}
                      class="website-header__nav-item-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    );
  }
}
