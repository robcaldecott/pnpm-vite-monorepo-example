import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "@mui/material/Typography";
import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const PageTitle = Template.bind({});
PageTitle.args = {
  children: (
    <Typography variant="h5" component="h1">
      Page title
    </Typography>
  ),
};
