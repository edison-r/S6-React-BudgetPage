# 🧱 Sprint 6 – Brutalist Budget Calculator

This project is a budget calculator for freelancers/web development agencies.
Ir allows you to select diferent services and automatically calculate the total price, as qell as generate a quote based on the client's data.

Thisthe first truly **React** website using **TypeScript**.
## Preview (youtube video) 
[![Demo Video](https://github.com/edison-r/S6-React-BudgetPage/blob/main/demo_archives/Demo-image.png)](https://youtu.be/vTAmXKH65SQ)

## Features

### Service Section

- Cards are rendered with the available services.
- Each service has a title, description, features, and price.
- Selecting the card with the checkbox adds it to the total budget.
- The Web card includes two additional options:
  - Number of pages (languages)
  - Number of languages (translations)
- Each additional option adds €50 per unit to the price.

### Calculation Logic

- Prices are defined in a central array (`services.ts`) and are used dynamically in calculations.
- The `calculateTotal` function totals the selected services and the additional Web options.
- The result is updated in real time.

### Customer Form

- The user can enter their name, phone number, and email address.
- Upon submitting the form, the generated quote is saved along with their details.
- Everything is stored in the state of the `Services` component.

### State Structure

- `selectedServices` controls which services and additional options are selected.
- `budgets` stores all quotes submitted by users.

### Featured Components

- `ServiceCard`: Displays each service card with styles and animations.
- `Calculator`: Controls the selection logic and renders the cards.
- `RequestServiceCard`: Connected user form with state.
- `Services`: Orchestrates the entire flow: state, logic, and rendering.

### Animations and UI

- `FramerMotion` is used for smooth animations on cards and forms.
- Background with `backdrop-blur`, inner shadows, and responsive design with Tailwind.


## Getting Started

#### Clone this repository

```bash
git@github.com:edison-r/S6-React-BudgetPage.git
```

#### Install Dependencies
```bash
npm install
```

#### Start Development Server
```bash
npm run server
```

## Project Structure

```
📁 src
├── components/                 ← Reusable and functional UI components
│   ├── Calculator/             ← Budget calculator logic and UI
│   ├── Cards/                  ← Visual cards for services and forms
│   ├── HomeComponents/         ← Main home page sections (Hero, Body, etc.)
│   ├── Sections/               ← Optional layout wrappers for scalable page structure
│   └── SharedComponents/       ← Common components used across different sections (e.g., Logo, Navbar)
├── data/                       ← Static content such as services, features, FAQs...
├── pages/                      ← Individual pages of the app (Home, Services, etc.)
├── routes/                     ← React Router configuration and route management
├── types/                      ← TypeScript interfaces and types for props and state
├── styles/                     ← Global CSS styles and custom variables
├── App.tsx                     ← Root component that defines overall app structure and routes
└── main.tsx                    ← Vite + React entry file for rendering the app

```

## Next Steps / To-do

- Refactor using `useContext` to centralize service state.
- Add annual payment option with a 20% discount.
- Implement the share by URL.
- Add unit tests.
- Add a transition animation from home to services.
- Implement an export to .pdf functionallity.

## Technologies Used

- React + TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Component-based architecture (atomic/organisms)
- Typed with interfaces (types.ts)

[![My Skills](https://skillicons.dev/icons?i=vite,html,css,tailwind,ts,react,figma,vscode,git,github)](https://skillicons.dev)

## My Dev Journal

This has probably been the project where I’ve learned the most so far, not just in terms of code, but also in how to organize it and think ahead.

At first, I had everything pretty much packed into one place: the logic, the UI, the calculator, all working together but a bit chaotic. It worked, but I could already feel it would be hard to scale or maintain. Eventually, I started breaking it down into smaller, more focused components, moving the logic up where needed and making the data flow clearer. Just that change made a huge difference in how I understood the app as a whole.

One of the parts I enjoyed the most was working on the budgets list — especially adding filters, sort buttons, and search. They’re small features, but they really make the app feel more polished and usable.

Another thing I played with was animation. I added a little fade-in effect when the total price updates, and it made the UI feel more alive. I’m also starting to use Tailwind more fluently, and now I can build components quickly and keep everything consistent visually.

What I take away from this sprint is that writing code is one thing, but building an actual product, even a small one, is a whole different challenge. There were lots of times I didn’t fully understand what I was doing, but going step by step, refactoring, and asking questions helped me move forward. I'm proud of the result, but even more of the process. 🚀🍾

## Project Status
![Static Badge](https://img.shields.io/badge/Status-Completed-green?style=flat)
