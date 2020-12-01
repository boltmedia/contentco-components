// Generated with util/create-component.js
import React from 'react';
import Select from './Select';

export default {
  title: 'Input/Select',
  component: Select
};

const data = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Orange'
  },

  {
    id: 3,
    name: 'Banana'
  },

  {
    id: 4,
    name: 'Mango'
  }
];

const MultiLevelData = [
  {
    "id": 1,
    "label": "Automotive",
    "specialty": true,
    "children": [

    ]
  },
  {
    "id": 2,
    "label": "Business & Finance",
    "specialty": true,
    "children": [
      {
        "id": 51,
        "label": "Business",
        "specialty": true,
        "children": [
          {
            "id": 105,
            "label": "Entrepreneurship",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 106,
            "label": "Marketing",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 107,
            "label": "Media",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 108,
            "label": "Advertising",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 109,
            "label": "Sales",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 110,
            "label": "Energy and Commodities",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 111,
            "label": "Business Development",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 112,
            "label": "Customer Success",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 113,
            "label": "Corporate Wellness",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 114,
            "label": "Human Resources",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 115,
            "label": "SaaS",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 116,
            "label": "Product Design",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 117,
            "label": "Productivity",
            "specialty": true,
            "children": [

            ]
          }
        ]
      },
      {
        "id": 52,
        "label": "Finance",
        "specialty": true,
        "children": [
          {
            "id": 93,
            "label": "Corporate Finance",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 94,
            "label": "Personal Finance",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 95,
            "label": "Investment Management",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 96,
            "label": "Real Estate / Property",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 97,
            "label": "Banking",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 98,
            "label": "Financial Services",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 99,
            "label": "Capital Markets",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 100,
            "label": "Commercial Real Estate",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 101,
            "label": "Insurance",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 102,
            "label": "Venture Capital & Private Equity",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 103,
            "label": "Investment Banking",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 104,
            "label": "Accounting",
            "specialty": true,
            "children": [

            ]
          }
        ]
      },
      {
        "id": 53,
        "label": "Services",
        "specialty": true,
        "children": [
          {
            "id": 121,
            "label": "Food Services",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 122,
            "label": "Information Services",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 123,
            "label": "Events Services",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 124,
            "label": "Consumer Services",
            "specialty": true,
            "children": [

            ]
          },
          {
            "id": 125,
            "label": "Travel and Tourism Services",
            "specialty": true,
            "children": [

            ]
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "label": "Energy & Manufacturing",
    "specialty": true,
    "children": [
      {
        "id": 73,
        "label": "Manufacturing",
        "specialty": true,
        "children": [

        ]
      },
      {
        "id": 74,
        "label": "Logistics and Supply Chain",
        "specialty": true,
        "children": [

        ]
      },
      {
        "id": 75,
        "label": "Renewable Energy",
        "specialty": true,
        "children": [

        ]
      },
      {
        "id": 76,
        "label": "Emerging Technologies",
        "specialty": true,
        "children": [

        ]
      },
      {
        "id": 77,
        "label": "Oil & Fossil Fuels",
        "specialty": true,
        "children": [

        ]
      }
    ]
  },
];
const Template = (args) => <Select {...args} />;
const initialData = undefined;
export const Default = Template.bind({});
Default.args = {
  label: 'Fruit',
  name: 'description',
  getOptionLabel: ({ name }) => name,
  getOptionValue: ({ id }) => id,
  placeholder: 'Select a fruit',
  defaultValue: initialData,
  options: data
};

export const MultiLevel = Template.bind({});
MultiLevel.args = {
  label: 'Verticals',
  name: 'topics',
  getOptionLabel: ({ label }) => label,
  getOptionValue: ({ id }) => id,
  defaultValue: initialData,
  options: MultiLevelData,
  isMultiLevel: true,
  isMulti: true,
  hideSelectedOptions: false
  //getOptionChildren: ({ children }) => children
};

// TODO: Add more stories for select
