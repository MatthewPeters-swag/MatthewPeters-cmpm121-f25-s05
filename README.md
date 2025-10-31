1. **Primitive Obsession** – Multiple primitive variables (`c`, `a`, `b`) used instead of descriptive variables or objects.
2. **Duplicate Code / Shotgun Surgery** – Repeated UI update logic in each button event handler.
3. **Long Function / Feature Envy** – `setup()` was responsible for too many tasks: DOM creation, element lookup, event registration, and UI updates.
4. **Magic Values** – Hardcoded strings for colors, button IDs, and heading text.
5. **Inconsistent Naming / Lack of Semantic Names** – Variable names like `bI`, `bD`, `ctr` were unclear.

## **Refactoring Patterns Applied**

1. **Replace Magic Number with Symbolic Constant** – Introduced `colors` and `selectors` objects.
2. **Introduce Explaining Variable / Object** – Grouped related constants for clarity.
3. **Extract Method** – Created `updateUI()` to centralize UI updates.
4. **Rename Variable** – Renamed variables for better readability (`c → counter`, `bI → incrementButton`).
5. **Encapsulate Variable** – Counter state is now clearly managed in module scope.

## **Improvements**

- **Readability:** Clear, descriptive variable names and organized constants make the code easier to understand.
- **Maintainability:** Centralized UI update logic reduces repetition; changes only need to be made in one place.
- **Scalability:** The structure makes it easier to add new buttons or behaviors without modifying multiple places.
