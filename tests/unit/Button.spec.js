import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Common/Button.vue'

describe('Button.vue', () => {
  it('calls action when button is clicked', () => {
    const action = jest.fn();
    const wrapper = shallowMount(Button, {
      propsData: {
        action
      }
    });
    const btn = wrapper.find('.submit-btn');
    btn.trigger('click');
    expect(action).toHaveBeenCalled();
  });

it('renders html properly when passed props', () => {
    const title = 'Button Title';
    const colorClass = 'green_btn';
    const wrapper = shallowMount(Button, {
      propsData: {
        colorClass, title
      }
    });
    const btn = wrapper.find('.submit-btn');
    expect(btn).toMatchSnapshot();
  })
});
