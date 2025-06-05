# Prototype React Atomic Design

Atomic design is a design approach based on the idea that parts of a product or system should be composed of minimal and reusable elements. This allows designers and developers to work with smaller, more easily reusable components, resulting in faster and more efficient design.

Read more [EN](./book-en.pdf) / [ES](./book-es.pdf)

![Atomic Design](./main.webp)

## Atomic Design Concepts

### 1. **Atoms**

* The most basic and atomic components.
* Indivisible elements, with no complex logic.
* Examples: buttons, inputs, labels (`<Button>`, `<Input>`, `<Label>`), icons, colors, typography.
* Purely presentational, no complex internal state.

### Molecules

* A combination of atoms forming a simple functional component.
* May include some logic but remains a small component.
* Examples: a form field with label + input, a button group, an icon with text.

### Organisms

* Complex components composed of atoms and molecules.
* Contain more advanced logic and a more complete visual structure.
* Examples: complete form, navbar, footer, card with image and description, filterable list.

### Templates

* Structural layouts that define the composition of organisms and other components.
* Contain the page structure but not the actual data or final content.
* Examples:

  * Page layout with header, sidebar, main content, and footer.
  * Generic layouts for pages (e.g., `DashboardTemplate`, `AuthTemplate`).
  * Define visual flow and positioning, but not specific content.

### Pages

* Final components that inject data, content, and specific logic.
* Use templates and provide data to complete the UI.
* Represent actual routes or views.
* Examples: `LoginPage`, `DashboardPage`, `ProfilePage`.

## Composition Flow

* A **Page** uses a **Template**.
* The **Template** contains multiple **Organisms**.
* **Organisms** are made up of **Molecules**.
* **Molecules** are built from **Atoms**.

## Analogy

> Think of building a house:
>
> * **Atoms**: bricks and windows.
> * **Molecules**: a wall with a window and door.
> * **Organisms**: a complete room.
> * **Templates**: the floor plan (shows how rooms are arranged).
> * **Pages**: the finished house with furniture, decoration, and people living inside.

## File Structure

```bash
src/
│
├── assets/               # Images, icons, fonts
├── components/           # Components following Atomic Design
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Icon.tsx
│   ├── molecules/
│   │   ├── FormField.tsx
│   │   ├── Card.tsx
│   │   └── UserAvatar.tsx
│   ├── organisms/
│   │   ├── LoginForm.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── templates/
│   │   ├── AuthTemplate.tsx
│   │   └── DashboardTemplate.tsx
│   └── pages/
│       ├── LoginPage.tsx
│       └── DashboardPage.tsx
│
├── hooks/                # Custom hooks
├── lib/                  # Shared utilities and helpers
├── routes/               # Route definitions (React Router)
├── services/             # API clients, external logic
├── store/                # Global state (Zustand, Redux, etc.)
├── styles/               # Tailwind config, global CSS files
├── App.tsx
├── main.tsx
└── index.html
````
