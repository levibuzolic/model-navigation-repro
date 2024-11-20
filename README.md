Reproduction for issue seen when using React Navigation Native Stack with React Native Screens

When calling `navigation.goBack()` from a deeply nested modal navigator, the `POP` state is duplicated, causing a single `goBack()` to navigate back 2 screens instead of 1.

This only occurs when using the old architecture, switching to the new architecture the issue goes away.

The second `POP` action is being incorrectly dispatched from the `onDismissed` of the `ScreenStack`
