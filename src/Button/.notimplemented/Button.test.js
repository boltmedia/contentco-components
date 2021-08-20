import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import ButtonLink from './Button';
import CtaButton from './CtaButton';
import Styles from './Button.module.scss';
import { shallow, mount } from 'enzyme';

describe('Button component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be disabled when props disabled is passed', () => {
    const wrapper = shallow(<Button disabled={true} />);
    expect(wrapper.find('button').prop('disabled')).toBeTruthy();
  });

  it('should have correct type in line with the props', () => {
    const typeClasses = [
      { type: Button.Type.BLUE, expectedClass: Styles.blue },
      { type: Button.Type.DARKBLUE, expectedClass: Styles.darkblue },
      { type: Button.Type.GRAY, expectedClass: Styles.gray },
      { type: Button.Type.WHITE, expectedClass: Styles.white },
      {
        type: Button.Type.WHITE_BLUE_OUTLINE,
        expectedClass: Styles.whiteBlueOutline
      },
      { type: Button.Type.BLUE_OUTLINE, expectedClass: Styles.blueOutline }
    ];

    typeClasses.forEach((o, idx) => {
      const wrapper = shallow(<Button type={o.type} />);
      expect(wrapper.find('button').hasClass(o.expectedClass)).toBeTruthy();
    });
  });

  it('should have correct size in line with the props', () => {
    const sizeClasses = [
      { type: Button.Size.FULLWIDTH, expectedClass: Styles.fullwidth },
      {
        type: Button.Size.FULLWIDTH_LARGE,
        expectedClass: Styles.fullwidthLarge
      },
      { type: Button.Size.LARGE, expectedClass: Styles.large }
    ];

    sizeClasses.forEach((o, idx) => {
      const wrapper = shallow(<Button size={o.type} />);
      expect(wrapper.find('button').hasClass(o.expectedClass)).toBeTruthy();
    });
  });

  it('should correctly render children', () => {
    const text = `This is a test children text`;
    const wrapper = shallow(
      <Button className={`btn`}>
        <span>{text}</span>
      </Button>
    );
    expect(wrapper.find(`span`)).toHaveLength(1);
    expect(wrapper.find(`span`).text()).toEqual(text);
  });
});

describe('ButtonLink component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ButtonLink />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const typeClasses = [
    { type: ButtonLink.Type.BLUE, expectedClass: Styles.blue },
    { type: ButtonLink.Type.DARKBLUE, expectedClass: Styles.darkblue },
    { type: ButtonLink.Type.GRAY, expectedClass: Styles.gray },
    { type: ButtonLink.Type.WHITE, expectedClass: Styles.white },
    {
      type: ButtonLink.Type.WHITE_BLUE_OUTLINE,
      expectedClass: Styles.whiteBlueOutline
    },
    { type: ButtonLink.Type.BLUE_OUTLINE, expectedClass: Styles.blueOutline }
  ];

  typeClasses.forEach((o, idx) => {
    const wrapper = shallow(<ButtonLink type={o.type} />);
    expect(wrapper.find('button').hasClass(o.expectedClass)).toBeTruthy();
  });

  it('should have correct size in line with the props', () => {
    const sizeClasses = [
      { type: ButtonLink.Size.FULLWIDTH, expectedClass: Styles.fullwidth },
      {
        type: ButtonLink.Size.FULLWIDTH_LARGE,
        expectedClass: Styles.fullwidthLarge
      },
      { type: ButtonLink.Size.LARGE, expectedClass: Styles.large }
    ];

    sizeClasses.forEach((o, idx) => {
      const wrapper = shallow(<ButtonLink size={o.type} />);
      expect(wrapper.find('button').hasClass(o.expectedClass)).toBeTruthy();
    });
  });

  it('should passed other props', () => {
    const value = `this is a test props`;
    const wrapper = shallow(
      <ButtonLink id={'linkId'} dataOtherProps={value} />
    );
    const node = wrapper.find('#linkId');

    expect(node).toHaveLength(1);
    expect(node.props().dataOtherProps).toBeTruthy();
    expect(node.props().dataOtherProps).toEqual(value);
  });
});

describe('CtaButton component', () => {
  it('should have correct class base of type props', () => {
    const typeClasses = [
      { type: 'darkblue', expectedClass: Styles.ctaDarkblue },
      { type: 'white', expectedClass: Styles.ctaWhite }
    ];

    typeClasses.forEach((o, idx) => {
      const wrapper = shallow(
        <CtaButton
          id={`ctaBtn`}
          to={`https://google.com`}
          content={`content`}
          type={o.type}
        />
      );
      const node = wrapper.find('#ctaBtn');
      expect(node.hasClass(o.expectedClass)).toBeTruthy();
    });
  });

  it('should have correct node and attributes base on props supplied', () => {
    const wrapper = shallow(
      <CtaButton id={`ctaBtn`} to={`https://google.com`} content={`content`} />
    );
    const node = wrapper.find('#ctaBtn');
    expect(node).toHaveLength(1);
    expect(node.prop('id')).toEqual('ctaBtn');
    expect(node.prop('href')).toEqual('https://google.com');
    expect(node.text()).toEqual('content');
  });
});
