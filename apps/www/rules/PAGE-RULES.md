# Code Placement Rule

## Purpose

To maintain the separation of client and server components in a Next.js project, we establish the following rule regarding where code can be written.

## Rule

**Do not write code inside any file located in the `app/**/\*.tsx` directory.\*\*

### Reason

Next.js uses both client and server components. To ensure proper rendering and separation of concerns, code should be written in designated directories.

## Correct Placement

Write your code in the `layers/*.tsx` directory. This will ensure that it is automatically rendered in the web application.

### Where to write

-   Incorrect: `app/login/page.tsx`
-   Correct: `layers/login.tsx`

By adhering to this rule, we can maintain a clean and organized codebase that follows the best practices for Next.js projects.

## Code Example

### Directories:

```
/src
   |—— /app/about/page.tsx
   |—— /layers/about.tsx
```

### `app/about/page.tsx`

```tsx
import About from "@/layers/about";

// Metadata for the About page
export const metadata = {
    title: "About Us",
    description: "Learn more about our company and mission.",
};

// Create the About page component
const AboutPage = () => {
    return (
        <div>
            <About />
        </div>
    );
};

export default AboutPage;
```

### `layers/about.tsx`

```tsx
const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                Welcome to the About page of our web application. Here we share
                our story and mission.
            </p>
        </div>
    );
};

export default About;
```
