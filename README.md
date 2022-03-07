# svelte-rerendered


>:warning: This is *not even close* to production ready. I just started working on this.


Svelte rerendered is a component-library for svelte and sveltekit, which provides a declarative API for building 3D Scenes the *svelte way*. 

## Why am I doing this?
There are already a couple svelte libraries which claim to provide such an API. [Svelte-gl]("https://github.com/sveltejs/gl"), [sveltethree]("https://svelthree.dev/") and [svelte-cubed]("https://svelte-cubed.vercel.app/") come to mind. Where all of these fall short however is user interaction, transitions and animations. They instead only focus on more or less static 3D scenes. 


## The Vision 

### Building a Scene
Building a Scene with svelte-rerendered should feel like writing an SVG. You can use predefined Elements, or import your own Meshes. Rerendered doesn't have explicit materials, instead it offers css-like options for styling Elements. This approach is less flexible than using explicit Materials, but is much easier to work with. It also allows for much easier transitioning of attributes.

```jsx
<script>
    import {Scene, PerspectiveCamera, Box} from 'svelte-rerendered'
</script>

<Scene>
    <PerspectiveCamera 
        position={[-2,-2,2]} 
        lookingAt={[0,0,0]}
    />
    <Box 
        position={[0,0,1]} 
        dimensions={[1,0.5,0.5]}
        color="#0000ff"/>
    <Box 
        position={[0,0,-1]}
        color="normal"    
    >
</Scene>
```

For more complex Scenes, you can also extract Elements into other Components. This allows for much more contained and maintainable code.

```jsx
<!--@component 
    File: TwoSpheres.svelte
    This component contains two sphere primitives.
-->
<script>
    import {Sphere} from 'svelte-rerendered'
    export let diameter;
    $: radius = diameter / 2;
</script>

<Sphere color="#000000" {radius}/>
<Sphere color="#ff0000" wireframe radius=3 position={[radius,0,0]}/>
```

```jsx
<!--@component
    The TwoSpheres component can then simply put into the scene
-->
<script>
    import {Scene, PerspectiveCamera} from 'svelte-rerendered'
    import TwoSpheres from './TwoSpheres.svelte'
</script>

<Scene>
    <PerspectiveCamera/>
    <TwoSpheres diameter=6/>
</Scene>
```

Placing a svelte-rerendered primitive outside of a Scene is undefined behaviour.

### User interaction

3D Elements have interaction-events, just like regular html elements. Eg:

```jsx
<Box on:click on:mouseover on:mouseleave etc/>
```

## Documentation & Examples
Will be added once the API has settled in. Currently everything is subject to change.

## Installation
This is not remoteley ready to be used in an actual project. If you really want to use this, clone the repository and build the library using 

```npm run package```