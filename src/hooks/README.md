# Route State Management Hooks

This directory contains custom hooks for managing scroll position and component state across route changes.

## useScrollRestoration

Automatically saves and restores scroll position when navigating between routes.

### Usage:
```jsx
import useScrollRestoration from '../hooks/useScrollRestoration';

const MyComponent = () => {
  // Basic usage - uses current route path as key
  useScrollRestoration();
  
  // Custom key for multiple instances on same route
  useScrollRestoration('my-custom-key');
  
  return <div>Your component content</div>;
};
```

### Features:
- Automatically saves scroll position when leaving a route
- Restores scroll position when returning to a route
- Works with browser back/forward buttons
- Handles page refresh scenarios

## usePersistedState

Maintains component state across route changes, similar to useState but persistent.

### Usage:
```jsx
import usePersistedState from '../hooks/usePersistedState';

const MyComponent = () => {
  // Basic usage - state persists across route changes
  const [count, setCount] = usePersistedState(0);
  
  // Custom key for multiple instances
  const [showModal, setShowModal] = usePersistedState(false, 'modal-state');
  
  // Clear persisted state when needed
  const [data, setData, clearData] = usePersistedState(null);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={clearData}>Clear Data</button>
    </div>
  );
};
```

### Features:
- State persists when navigating away and back to a route
- Automatic cleanup when component unmounts
- Optional manual state clearing
- Works with any serializable data type

## RouteWrapper

A wrapper component that provides scroll restoration for any component.

### Usage:
```jsx
import RouteWrapper from '../components/RouteWrapper';

const MyPage = () => (
  <RouteWrapper preserveScroll={true} scrollKey="my-page">
    <div>Your page content</div>
  </RouteWrapper>
);
```

## Implementation Notes

- Scroll positions are stored in memory and persist during the session
- Component states are also stored in memory and cleared on page refresh
- For persistent storage across browser sessions, consider using localStorage
- The hooks are optimized to prevent unnecessary re-renders
- Scroll restoration uses `setTimeout` to ensure DOM is ready before restoring position