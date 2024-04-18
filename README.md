# simple-web

### Correr el compilador de tailwindcss

Para empezar te instalas tailwindcss en la carpeta del proyecto.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Configurar las rutas de acceso de la plantilla

Agregue las rutas de acceso a todos los archivos de plantilla en el archivo tailwind.config.js.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Añade las directivas de Tailwind a tu CSS.

Añade las directivas @tailwind para cada una de las capas de Tailwind a tu archivo CSS principal.

```css
/* ./css/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Nota: En este caso no hace falta porque ya esta en el fichero <a href="./css/input.css">input.css</a>

### Iniciar el proceso de compilación de la CLI de Tailwind.

```bash
npx tailwindcss -i ./css/input.css -o ./css/style.css --watch
```
