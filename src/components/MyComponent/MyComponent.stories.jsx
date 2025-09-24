import MyComponent from './MyComponent';

export default {
  title: 'MyComponent',
  component: MyComponent,
  argTypes: {
    caption: { control: 'text' },
    placeholder: { control: 'text' },
    color: { control: 'color' },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  caption: 'Default Caption',
  placeholder: 'Enter text...',
  color: 'black',
};

export const Important = Template.bind({});
Important.args = {
  caption: 'Important Caption',
  placeholder: 'Enter important text...',
  color: 'red',
};

export const Success = Template.bind({});
Success.args = {
  caption: 'Success Caption',
  placeholder: 'Enter success text...',
  color: 'green',
};