import Theme from './Theme';

const theme = new Theme({
  name: 'wolkenkit',
  spaceUnit: 8,

  brandColors: {
    dark: '#2f333b',
    highlight: '#29abe2',
    darkGrey: '#363d45',
    midGrey: '#595c62',
    lightGrey: '#eeeeee',
    white: '#ffffff'
  },

  interactionColors: {
    focus: '#363d45'
  },

  pattern: {
    opacity: 0.05,
    backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAADAFBMVEUAAABi0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f5i0f4O4nZLAAAA/3RSTlMAAQMCizDg8P5A+/0E+fQJ+gb8BxIP9ggFNgrx90gWtuX42umRsRjIEAzmCw4VT+zu6PLK1mh638XVLqSQkuogYBmG7+JaoIDzsusjRBE4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')`
  }
});

export default theme;
