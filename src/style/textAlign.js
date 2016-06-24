import { PropTypes, cloneElement } from 'react';

function TextAlign(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      textAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    render() {
      if (this.props.textAlign !== undefined) {
        const el = super.render();
        const props = { ...super.render().props };

        if (!props.style) props.style = {};
        props.style.textAlign = this.props.textAlign;
        delete props.textAlign;

        return cloneElement(el, props);
      }
      return super.render();
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return TextAlign.apply(null, [[], options[0]]);
  return TextAlign.bind(null, options);
}
