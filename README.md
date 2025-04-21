# AgriConnect Frontend

This is the frontend application for AgriConnect - connecting farmers and consumers directly.

## Styling

The app uses a beautiful gradient background with green tones to represent the agricultural theme. The styling is created using TailwindCSS classes and React Native's built-in styling capabilities.

## TypeScript

This project uses TypeScript for type safety. When working with React Native events or other complex types:

- Import proper types from React Native: `import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';`
- Add explicit type annotations to function parameters: `(event: NativeSyntheticEvent<NativeScrollEvent>) => { ... }`
- Always define state types: `const [value, setValue] = useState<string>('');`

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Navigate to the app in your Expo client or simulator. 