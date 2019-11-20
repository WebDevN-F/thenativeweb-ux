import { act } from '../../shared/act';
import { assert } from 'assertthat';
import React from 'react';
import ReactDOM from 'react-dom';
import { toArray } from '../../shared/toArray';
import { PoweredBy, ThemeProvider } from '../../../lib';

suite('PoweredBy', (): void => {
  let container: Element;

  setup((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  teardown((): void => {
    document.body.removeChild(container);
  });

  test('renders although no property has been defined.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PoweredBy />
        </ThemeProvider>,
        container
      );
    });

    const poweredBy = container.querySelector('div');

    assert.that(poweredBy!.className).is.containing('PoweredBy');
  });

  test('passes through defined property size.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PoweredBy size='md' />
          <PoweredBy size='lg' />
        </ThemeProvider>,
        container
      );
    });

    const [ medium, large ] = toArray(container.querySelectorAll('[class^=Product]'));

    assert.that(medium.className).is.containing('SizeMd');
    assert.that(large.className).is.containing('SizeLg');
  });

  test('passes through defined property product.', async (): Promise<void> => {
    act((): void => {
      ReactDOM.render(
        <ThemeProvider>
          <PoweredBy product='wolkenkit' />
        </ThemeProvider>,
        container
      );
    });

    const wolkenkit = container.querySelector('[class^=LogoWolkenkit]');

    assert.that(wolkenkit).is.not.null();
  });
});
