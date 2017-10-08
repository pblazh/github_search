import React from 'react';
import { Iterable } from 'immutable'

export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    return newProps
  }, {})

  return <WrappedComponent {...propsJS} />
}

const Clickable = (Component, history, onClick) => props => (
	<section
		onClick={ () => onClick(history, props) }
		role='button'
		tabIndex='0' >
		<Component { ...props } />
	</section>
);

export {
// eslint-disable-next-line import/prefer-default-export
	Clickable,
};
