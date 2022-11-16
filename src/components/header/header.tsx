import { component$ } from '@builder.io/qwik';
import { zeroMargin } from "./header.css"

export default component$(() => {
  
  return (
    <header>
      <h1 class={zeroMargin}>Welcome to Qwik!</h1>
    </header>
  );
});
