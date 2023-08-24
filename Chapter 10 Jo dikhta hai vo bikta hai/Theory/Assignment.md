Q. Explore all the ways of writing css.
A. There are many ways of writing css  
- Inline : by using the style attribute inside HTML elements 
- Internal : by using a <style> element in the <head> section.
- External : by using a seperate .css file for styling the components.
- Normal Native CSS
- SCSS : Sassy Cascading Style Sheets
- Components Libraries : Material UI, Base UI, Ant, Chakra, Styled Components. 

Q. How do we configure tailwind?
A. Install `tailwindcss` and its peer dependencies via npm, and create your `tailwind.config.js` file.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Add Tailwind to your POSTCSS configuration
Add `tailwindcss` and `autoprefixer` to your `postcss.config.js` file, or wherever PostCSS is configured in your project
``` 
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Configure your template paths
Add the paths to all of your template files in your `tailwind.config.js` file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
Add the Tailwind directives to your CSS
Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Start your build process
Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.
```
npm run dev
``` 
#Start using Tailwind

Q. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
A. In a Tailwind CSS configuration file (`tailwind.config.js`), there are several top-level keys that allow you to customize and extend the default behavior of Tailwind CSS. Here's a breakdown of what each key means:
1. `theme`: The `theme` key is used to customize the default design tokens of your Tailwind CSS project. This includes settings like colors, typography, spacing, breakpoints, and more. By modifying values in the `theme` object, you can create a consistent and customized design system for your project.
For example, you can define your color palette, adjust font sizes, modify spacing scales, and configure responsive breakpoints in this section.
2. `extend`: The `extend` key allows you to extend the default utility classes and add your own custom utility classes to Tailwind CSS. This is useful when you need to create utility classes for specific use cases that are not covered by Tailwind's default classes.
For instance, you can add additional background colors, border styles, shadow variations, or any other custom utility classes that fit your project's requirements.
3. `plugins`: The `plugins` key allows you to integrate third-party plugins into your Tailwind CSS setup. These plugins can add new utility classes, components, or features to your project without modifying the core Tailwind CSS library.
You might use plugins to add things like forms, navigation menus, responsive aspect ratios, and more. Each plugin typically comes with its own configuration options, allowing you to fine-tune its behavior.
4. `content`: The `content` key is used to configure content-related options, particularly for the` @tailwindcss/typography` plugin. This plugin enhances the default typography styling of your project, providing you with a set of responsive typography styles and components.
The `content` section allows you to configure settings like headings, text styles, lists, and more, specific to the typography plugin.

Here's a simple example of how these keys might look in a `tailwind.config.js` file:
```
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#3366FF',
      },
      spacing: {
        '72': '18rem',
      },
    },
  },
  extend: {
    boxShadow: {
      'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  content: {
    typography: {
      /* Typography plugin options here */
    },
  },
};

```
Q. Why do we have .postcssrc file?
A. It takes config which compiles tailwindCSS to Normal CSS