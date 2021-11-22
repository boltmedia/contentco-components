export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff'
      },
      {
        name: 'black',
        value: '#212529'
      },
      {
        name: 'dark-blue',
        value: '#193278'
      },
      {
        name: 'blue',
        value: '#1269db'
      }
    ]
  }
};
