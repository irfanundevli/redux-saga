import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from 'semantic-ui-react';
import { TopMenu } from './TopMenu';

describe('TopMenu Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TopMenu />);
  });

  it('should contain onlu one  menu', () => {
    const result = wrapper.find(Menu);

    expect(result).toHaveLength(1);
  });

  it('should contain at least one menu item', () => {
    const result = wrapper.find(Menu.Item);

    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  describe('TopMenu Menu Item Component', () => {
    it('should contain a Link', () => {
      const result = wrapper.find('Link');

      expect(result.length).toBeGreaterThanOrEqual(1);
    });
  });
});
