# IMAGE GALLERY - React

## Objetivo del Proyecto

Este proyecto está diseñado para introducirte en el desarrollo con React siguiendo las **mejores prácticas de programación**. No se trata solo de hacer que funcione, sino de aprender a escribir código limpio, mantenible y profesional.

Construirás una galería de imágenes interactiva donde aprenderás:

- Arquitectura de componentes y comunicación entre ellos
- Gestión de estado con hooks
- Testing de componentes y funcionalidades
- Buenas prácticas de Git y organización de repositorio
- Código limpio y principios SOLID aplicados a React

## Descripción de la Aplicación

Una galería de imágenes responsive con las siguientes funcionalidades:

- Visualización en grid responsive
- Imagen destacada (primera posición)
- Eliminación individual de imágenes
- Selección múltiple y eliminación masiva
- Reordenamiento mediante drag-and-drop
- Diseño atractivo y accesible

## Antes de Empezar

### Configuración del Entorno

**1. Verifica tu entorno de desarrollo:**

- Node.js (versión 18 o superior)
- npm (o pnpm)
- git configurado con tu nombre y email
- vscode

**2. Crea el repositorio:**

- Inicializa un repositorio en GitHub
- Añade un README.md descriptivo
- Incluye un .gitignore apropiado para React/Node

**💡 Tip:** Busca "React .gitignore template" para un punto de partida

### Estrategia de Branches

Trabajarás con **Git Flow simplificado**:

- `main`: código estable y funcional
- `feature/nombre-descriptivo`: una rama por cada iteración

**Recursos:**

- [Git Branching Strategies](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Conventional Commits](https://www.conventionalcommits.org/)

**Objetivo de aprendizaje:** Familiarizarte con flujos de trabajo profesionales en equipos

## Iteraciones del Proyecto

### Iteración 1: Fundamentos - Estructura y Componentes

**Conceptos clave:**

- Componentes funcionales con TypeScript
- Comunicación padre-hijo con props
- Renderizado condicional y listas
- Separación de responsabilidades

#### Pasos Guiados

**1. Crea tu aplicación React**

```bash
# Usa Vite para una configuración moderna y rápida
npm create vite@latest image-gallery -- --template react-ts
cd image-gallery
npm install
```

**❓ Preguntas para reflexionar:**

- ¿Qué es un componente en React y cuáles son sus partes principales?
- ¿Por qué usar Vite en lugar de Create React App?
- ¿Qué ventajas ofrece TypeScript en React?

**Recursos:**

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

**2. Planifica la arquitectura de componentes**

Antes de escribir código, dibuja o esquematiza:

- ¿Qué componentes necesitas?
- ¿Cuál es la responsabilidad de cada uno?
- ¿Cómo fluyen los datos entre ellos?

**💡 Principio SOLID aplicado:** Single Responsibility Principle

- Un componente = Una responsabilidad clara

**Checklist de diseño:**

- [ ] Identificar componentes necesarios (Gallery, ImageItem)
- [ ] Definir props de cada componente
- [ ] Pensar en la reutilización

**3. Crea la rama de trabajo**

```bash
git checkout -b feature/basic-gallery
```

**💡 Convención de commits:**
Durante toda la iteración, haz commits frecuentes y descriptivos. Por ejemplo:

- `feat: add gallery component structure`
- `feat: create image-item component`
- `refactor: extract image interface`

**4. Define el modelo de datos**

**Objetivo:** Trabajar con TypeScript de forma profesional

Crea una interfaz o tipo `Image` que defina la estructura de tus datos.

**❓ Preguntas:**

- ¿Dónde deberías colocar los tipos en la estructura del proyecto?
- ¿Qué propiedades mínimas necesita una imagen?
- ¿Deberías usar `interface` o `type`?

**Sugerencia de estructura:**

```
src/
  types/
    image.ts
  components/
    Gallery.tsx
    ImageItem.tsx
```

**Recursos:**

- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [React with TypeScript](https://react.dev/learn/typescript)

**💡 Buena práctica:** Usa nombres descriptivos y agrupa tipos relacionados

**5. Implementa el componente Gallery**

**Responsabilidades:**

- Gestionar la lista de imágenes
- Renderizar múltiples ImageItem
- Determinar cuál es la imagen destacada

**Conceptos a aplicar:**

- Uso de `useState` para estado
- Método `.map()` para renderizar listas
- Props drilling

**❓ Desafíos de aprendizaje:**

- ¿Por qué es importante la prop `key` en listas?
- ¿Cuándo usar `useState` vs variables normales?
- ¿Cómo pasas datos a componentes hijos?

**Recursos:**

- [useState Hook](https://react.dev/reference/react/useState)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

**💡 Tips:**

- Usa datos de ejemplo de [picsum.photos](https://picsum.photos)
- Estructura: `https://picsum.photos/id/237/300/200`
- Crea un array con al menos 6-8 imágenes

**6. Implementa el componente ImageItem**

**Responsabilidades:**

- Mostrar UNA imagen
- Aplicar estilos según su estado (destacada o normal)
- Ser reutilizable

**Conceptos:**

- TypeScript para tipar props
- Props destructuring
- Conditional className

**❓ Preguntas:**

- ¿Cómo defines el tipo de las props?
- ¿Cómo aplicas clases CSS condicionalmente?
- ¿Por qué este componente no debe tener lógica de negocio compleja?

**Recursos:**

- [Typing Component Props](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

**7. Implementa la lógica de imagen destacada**

**Desafío:** La primera imagen debe ser visualmente diferente

**Pistas:**

- Piensa en cómo identificar la primera imagen
- ¿Pasarás un índice o un booleano en las props?
- ¿Cómo se verá reflejado en el CSS?

**💡 CSS Tip:** La imagen destacada podría ser más grande, tener un borde especial, etc.

**8. Verificación inicial**

Antes de fusionar, verifica:

```bash
# Ejecuta la aplicación en desarrollo
npm run dev

# Compila para producción sin errores
npm run build
```

**Checklist de calidad:**

- [ ] La aplicación compila sin errores
- [ ] No hay warnings en consola
- [ ] Las imágenes se muestran correctamente
- [ ] La primera imagen tiene estilos diferentes
- [ ] El código está formateado consistentemente

**9. Merge a main**

```bash
# Asegúrate de estar en feature/basic-gallery
git add .
git commit -m "feat: implement basic gallery structure with featured image"
git checkout main
git merge feature/basic-gallery
git push origin main
```

**Recurso:** [Git Merge vs Rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

### Iteración 2: Estilización Profesional

**Conceptos clave:**

- Utility-first CSS con Tailwind
- Componentes UI con shadcn/ui
- Diseño responsivo
- Accesibilidad

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/styles
```

**2. Instala y configura Tailwind CSS**

**Sigue la guía oficial:**

- [Tailwind CSS - Vite Setup](https://tailwindcss.com/docs/guides/vite)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**❓ Preguntas:**

- ¿Qué ventajas ofrece Tailwind sobre CSS tradicional?
- ¿Dónde va la configuración de Tailwind?
- ¿Cómo se integra con el proceso de build de Vite?

**💡 Tip:** Lee la configuración generada para entender qué hace cada parte

**3. Instala y configura shadcn/ui**

**📖 Recursos:**

- [shadcn/ui Installation - Vite](https://ui.shadcn.com/docs/installation/vite)

```bash
npx shadcn-ui@latest init
```

**Objetivo:** Aprender a integrar bibliotecas de componentes en React

**❓ Preguntas:**

- ¿Cómo funciona shadcn/ui comparado con otras librerías?
- ¿Por qué los componentes se copian en lugar de importarse como paquete?

**4. Diseña el layout de la galería**

**Requisitos:**

- Grid responsivo centrado
- Ancho máximo apropiado para tablet
- Espaciado consistente
- Imagen destacada ocupa más espacio

**💡 Conceptos de Tailwind a investigar:**

- Grid system: `grid`, `grid-cols-*`
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Spacing: `gap-*`, `p-*`, `m-*`
- Layout: `container`, `mx-auto`

**Recurso:** [Tailwind Grid Documentation](https://tailwindcss.com/docs/grid-template-columns)

**5. Implementa diseño responsive**

**Especificaciones:**

| Dispositivo         | Columnas | Imagen destacada |
| ------------------- | -------- | ---------------- |
| Desktop (>1024px)   | 5        | 2x2 grid cells   |
| Tablet (768-1024px) | 4        | Mismo tamaño     |
| Mobile (<768px)     | 2        | Mismo tamaño     |

**❓ Desafío:**

- ¿Cómo haces que un elemento ocupe múltiples celdas del grid?
- ¿Cómo aplicas estilos solo en ciertos breakpoints?

**💡 Investiga:** `col-span-*`, `row-span-*`, breakpoints de Tailwind

**Ejemplo de código:**

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {/* Primera imagen con col-span en desktop */}
  <div className="lg:col-span-2 lg:row-span-2">{/* ... */}</div>
</div>
```

**6. Accesibilidad**

**Checklist obligatorio:**

- [ ] Todas las imágenes tienen `alt` text descriptivo
- [ ] Los botones tienen labels claros (aria-label si solo icono)
- [ ] El contraste de colores es adecuado
- [ ] Navegación con teclado funciona correctamente
- [ ] Pruebas con lector de pantalla

**Recursos:**

- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility](https://react.dev/learn/accessibility)

**Herramientas de testing:**

- Extensión Lighthouse en Chrome DevTools
- Lector de pantalla del sistema operativo
- [axe DevTools](https://www.deque.com/axe/devtools/)

**7. Commit y merge**

Haz commits específicos para cada cambio:

```bash
git add .
git commit -m "feat: add tailwind configuration"
git commit -m "feat: implement responsive grid layout"
git commit -m "feat: add accessibility improvements"
git checkout main
git merge feature/styles
```

### Iteración 3: Interactividad - Eventos y Estado

**Conceptos clave:**

- Comunicación hijo → padre mediante callbacks
- Event handling
- Gestión de estado inmutable
- Lifting state up

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/event-handlers
```

**2. Añade botón de eliminación en ImageItem**

**Responsabilidades del componente hijo:**

- Mostrar botón de eliminar
- Llamar a la función callback cuando se hace click
- NO ejecutar la lógica de eliminación (eso es responsabilidad del padre)

**Concepto:** Separation of Concerns

**❓ Preguntas:**

- ¿Por qué el hijo no debe eliminar directamente?
- ¿Qué información debe enviar al padre?
- ¿Cómo prevenir que eventos se propaguen incorrectamente?

**Tipo de props actualizado:**

```typescript
interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
  onDelete: (id: string) => void;
}
```

**Recursos:**

- [Passing Props to Components](https://react.dev/learn/passing-props-to-a-component)
- [Event propagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

**💡 Tip:** Investiga `event.stopPropagation()` y cuándo usarlo

**3. Gestiona la eliminación en Gallery**

**Requisitos:**

- Actualizar el estado de forma inmutable
- Manejar el caso de eliminar la imagen destacada

**Concepto:** Estado inmutable

**❓ Desafíos:**

- ¿Cómo actualizas un array en el estado?
- ¿Por qué no debes mutar el estado directamente?
- ¿Qué pasa si eliminas la imagen destacada?

**Ejemplo de actualización inmutable:**

```typescript
const handleDelete = (id: string) => {
  if (window.confirm("¿Eliminar esta imagen?")) {
    setImages(images.filter((img) => img.id !== id));
  }
};
```

**Recursos:**

- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

**💡 Pista:** El método `filter()` de arrays es tu amigo

**4. Estiliza el botón de eliminar**

**Consideraciones UX:**

- Debe ser claramente visible pero no intrusivo
- Color que indique acción destructiva (rojo)
- Icono reconocible (papelera)
- Hover states

**Sugerencia:** Instala un componente Button de shadcn/ui:

```bash
npx shadcn-ui@latest add button
```

**Recurso:**

- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/) (usado por shadcn/ui)

**5. Refactorización**

Antes de hacer merge, revisa tu código:

**Code Review Checklist:**

- [ ] ¿Hay código duplicado?
- [ ] ¿Los nombres de variables/funciones son descriptivos?
- [ ] ¿Las funciones hacen una sola cosa?
- [ ] ¿Hay magic numbers que deberían ser constantes?
- [ ] ¿El código es fácil de leer sin comentarios?

**Recurso:** [Clean Code principles](https://github.com/ryanmcdermott/clean-code-javascript)

**6. Merge**

```bash
git add .
git commit -m "feat: implement image deletion with confirmation"
git checkout main
git merge feature/event-handlers
```

### Iteración 4: Drag and Drop

**Conceptos clave:**

- Integración de librerías de React ecosystem
- Manejo de eventos complejos
- Actualización de estado basada en índices
- Alternativas: HTML5 Drag and Drop API vs bibliotecas

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/drag-and-drop
```

**2. Evalúa las opciones**

**Opción A: HTML5 Drag and Drop API (nativo)**

- Más ligero (sin dependencias)
- Requiere más código boilerplate
- Tutorial: [React DnD without libraries](https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/)

**Opción B: dnd-kit (recomendado)**

- Biblioteca moderna y mantenida
- Mejor soporte para touch devices
- Accesibilidad incorporada
- [dnd-kit Documentation](https://dndkit.com/)

**💡 Decisión:** Te recomendamos empezar con la opción A para entender los fundamentos, y luego migrar a dnd-kit si encuentras limitaciones.

**3. Implementación con HTML5 API (Opción A)**

**Pasos básicos:**

1. Añade los event handlers necesarios a ImageItem:
   - `onDragStart` - cuando empiezas a arrastrar
   - `onDragOver` - cuando pasas sobre otro elemento
   - `onDrop` - cuando sueltas

2. Gestiona el estado de arrastre en Gallery

**❓ Desafíos:**

- ¿Cómo identificas qué imagen se está arrastrando?
- ¿Cómo sabes dónde se debe soltar?
- ¿Cómo reordenas el array?

**Recurso:** [Using the HTML5 Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

**4. Implementación con dnd-kit (Opción B)**

**Instalación:**

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

**Componentes clave:**

- `<DndContext>` - Provider que envuelve el área arrastrable
- `<SortableContext>` - Define el contenedor sortable
- `useSortable()` - Hook para elementos arrastrables

**Recursos:**

- [dnd-kit Quick Start](https://docs.dndkit.com/introduction/getting-started)
- [Sortable Preset](https://docs.dndkit.com/presets/sortable)

**5. Maneja el estado después del reordenamiento**

**Consideraciones:**

- Actualizar el array de imágenes
- Posiblemente actualizar la imagen destacada
- Mantener la reactividad

**❓ Pregunta crítica:**

- Si siempre la primera imagen es destacada, ¿qué pasa después de reordenar?

**💡 Solución:** La primera posición del array siempre determina la imagen destacada, no necesitas estado adicional.

**6. Estiliza el drag-and-drop**

**UX considerations:**

- Visual feedback mientras arrastras
- Placeholder donde se soltará
- Cursor apropiado
- Animaciones suaves

**Investiga:** Cómo personalizar las animaciones con Tailwind

**7. Merge**

```bash
git add .
git commit -m "feat: implement drag-and-drop reordering"
git checkout main
git merge feature/drag-and-drop
```

### Iteración 5: Selección Múltiple

**Conceptos clave:**

- Estado complejo (Set vs Array)
- Lógica de toggle
- Conditional rendering
- UX patterns para batch operations

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/multiple-selection
```

**2. Diseña el flujo de usuario**

Antes de codificar, piensa:

- ¿Cómo selecciona el usuario una imagen?
- ¿Cómo sabe que está seleccionada?
- ¿Cómo deselecciona?
- ¿Dónde aparece el botón de eliminar múltiples?

**💡 Tip:** Dibuja el flujo en papel

**3. Gestiona el estado de selección**

**❓ Decisión de diseño:** ¿Usar `Set<string>` o `Array<string>`?

**Pros de `Set`:**

- Búsquedas O(1)
- Previene duplicados automáticamente
- `.has()`, `.add()`, `.delete()` son semánticos

**❓ Desafío:**

- ¿Por qué necesitas crear un nuevo Set y no modificar el anterior?

**Recurso:** [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

**4. Implementa la selección visual**

**Requisitos:**

- Indicador claro de imagen seleccionada (borde, overlay, checkmark)
- Click en la imagen para seleccionar/deseleccionar
- No interferir con el drag-and-drop

**❓ Desafío:**

- ¿Cómo manejas múltiples clicks listeners?
- ¿Cómo previenes que el click de selección active el drag?

**Sugerencia de props para ImageItem:**

```typescript
interface ImageItemProps {
  image: Image;
  isFeatured?: boolean;
  isSelected?: boolean;
  onDelete: (id: string) => void;
  onToggleSelect: (id: string) => void;
}
```

**5. Botón de eliminación múltiple**

**UX considerations:**

- Solo visible cuando hay selección
- Muestra cuántas imágenes se eliminarán
- Confirmación clara antes de eliminar
- Feedback después de eliminar

**💡 Ejemplo mensaje:** "¿Eliminar 3 imágenes seleccionadas?"

**6. Implementa la lógica de eliminación batch**

**Requisitos:**

- Eliminar todas las seleccionadas en una operación
- Limpiar el estado de selección después
- Mantener inmutabilidad

**❓ Desafío de rendimiento:**

- ¿Es eficiente este enfoque para 100+ imágenes?
- ¿Cómo optimizarías la búsqueda?

**7. Merge**

```bash
git add .
git commit -m "feat: implement multiple selection and batch deletion"
git checkout main
git merge feature/multiple-selection
```

---

### Iteración 6: Testing Profesional

**Conceptos clave:**

- Testing con Vitest y React Testing Library
- Test doubles (mocks, spies)
- Arrange-Act-Assert pattern
- User-centric testing

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/testing
```

**2. Configuración del entorno de testing**

**Instala las dependencias:**

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Configura `vite.config.ts`:**

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
```

**Crea `src/setupTests.ts`:**

```typescript
import "@testing-library/jest-dom";
```

**Actualiza `package.json`:**

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Recursos:**

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)

**3. Testing de ImageItem Component**

**Crea `src/components/ImageItem.test.tsx`:**

**Tests esenciales:**

**a) Renderizado:**

- Se crea correctamente
- Muestra la imagen con src/alt correctos
- Aplica clase `featured` cuando corresponde
- Aplica clase de selección cuando corresponde

**b) Interactividad:**

- Emite evento de eliminación al hacer click
- Emite evento de selección al hacer click
- `stopPropagation` se llama correctamente

**c) Edge cases:**

- Comportamiento con datos inválidos
- Múltiples clicks rápidos

**Pattern:** Arrange-Act-Assert

```typescript
it('should do something', () => {
  // Arrange: prepara el escenario
  const testData = {...};

  // Act: ejecuta la acción
  component.doSomething(testData);

  // Assert: verifica el resultado
  expect(component.result).toBe(expected);
});
```

**Recurso:** [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

**4. Testing de Gallery Component**

**Tests esenciales:**

**a) Renderizado:**

- Renderiza el número correcto de ImageItems
- Pasa los inputs correctamente a los hijos
- Marca la primera imagen como destacada

**b) Eliminación:**

- Individual funciona
- Múltiple funciona
- Pide confirmación
- Actualiza el UI correctamente

**c) Drag and Drop:**

- Reordena correctamente el array
- Actualiza la imagen destacada si necesario

**d) Selección:**

- Toggle funciona
- Eliminar seleccionadas funciona
- Estado se limpia después de eliminar

**5. Tests de integración**

**Objetivo:** Testear la aplicación completa

**Escenarios:**

1. Usuario carga la app → ve la galería
2. Usuario elimina una imagen → desaparece
3. Usuario reordena → orden cambia
4. Usuario selecciona múltiples → puede eliminarlas

**❓ Diferencia:**

- Tests unitarios: un componente aislado
- Tests de integración: múltiples componentes juntos

**6. Analiza la cobertura**

**Instala herramienta de coverage:**

```bash
npm install -D @vitest/coverage-v8
```

**Ejecuta tests con coverage:**

```bash
npm run test:coverage
```

**Objetivos de cobertura:**

- Statements: >80%
- Branches: >75%
- Functions: >80%
- Lines: >80%

**❓ Reflexiona:**

- ¿Cobertura del 100% significa código perfecto?
- ¿Qué es más importante: cantidad o calidad de tests?

**Recurso:** [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

**7. Refactoriza basándose en los tests**

**Concepto:** Tests como documentación

Si un test es difícil de escribir, probablemente el código está mal diseñado.

**Señales de mal diseño:**

- Necesitas muchos mocks
- Mucha configuración en `beforeEach`
- Tests muy largos
- Tests frágiles (se rompen con cambios pequeños)

**💡 Filosofía de Testing Library:**
"The more your tests resemble the way your software is used, the more confidence they can give you."

**8. Merge**

```bash
git add .
git commit -m "feat: add comprehensive test suite"
git checkout main
git merge feature/testing
```

## 🎓 Criterios de Evaluación

### Código Limpio (30%)

- [ ] Nombres descriptivos y consistentes
- [ ] Funciones pequeñas con responsabilidad única
- [ ] Sin código duplicado
- [ ] Comentarios solo donde añaden valor
- [ ] Estructura de carpetas lógica

### Buenas Prácticas React (25%)

- [ ] Componentes funcionales bien estructurados
- [ ] Hooks usados correctamente
- [ ] Props tipadas con TypeScript
- [ ] Estado inmutable
- [ ] Gestión de efectos secundarios apropiada

### Testing (25%)

- [ ] Cobertura >80%
- [ ] Tests significativos (no solo cobertura)
- [ ] Tests unitarios e integración
- [ ] Edge cases cubiertos
- [ ] Tests mantenibles y legibles

### Git y Organización (20%)

- [ ] Commits atómicos y descriptivos
- [ ] Mensajes siguiendo convenciones
- [ ] Ramas por feature
- [ ] README completo
- [ ] Sin archivos innecesarios en el repo

## Recursos Generales

### Documentación Oficial

- [React](https://react.dev) - Documentación principal
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript handbook
- [Vite](https://vitejs.dev/) - Build tool

### Librerías del Proyecto

- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [dnd-kit](https://dndkit.com/)

### Testing

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Docs](https://testing-library.com/docs/)

### Clean Code

- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 💡 Consejos Finales

### Proceso de Aprendizaje

1. **Lee la documentación oficial** antes de buscar tutoriales
2. **Entiende antes de copiar** - si encuentras código online, asegúrate de entenderlo
3. **Experimenta** - prueba cosas, rompe código, aprende de errores
4. **Refactoriza** - tu primera solución raramente es la mejor

### Cuando Te Atascas

1. Lee el mensaje de error completo
2. Busca en la documentación oficial
3. Usa las DevTools del navegador
4. Divide el problema en partes más pequeñas
5. Escribe un test que reproduzca el problema

### No Uses IA para

- Generar código completo sin entender
- Resolver problemas sin aprender de ellos
- Saltar el proceso de aprendizaje

### Sí Usa IA para

- Explicar conceptos después de leer la documentación
- Revisar tu código y sugerir mejoras
- Generar casos de test adicionales
- Entender mensajes de error complejos

## Checklist Final del Proyecto

Antes de considerar el proyecto terminado:

### Funcionalidad

- [ ] Todas las features implementadas
- [ ] Sin errores en consola
- [ ] Funciona en diferentes navegadores
- [ ] Responsive en mobile, tablet, desktop

### Calidad de Código

- [ ] TypeScript sin errores (`npm run build`)
- [ ] Tests pasando (`npm test`)
- [ ] Cobertura >80% (`npm run test:coverage`)
- [ ] Build de producción exitoso

### Documentación

- [ ] README con instrucciones claras
- [ ] Comentarios en código complejo
- [ ] Commits descriptivos
- [ ] Tipos TypeScript documentados

### Accesibilidad

- [ ] Lighthouse score >90
- [ ] Navegación por teclado funciona
- [ ] Lectores de pantalla funcionan
- [ ] Contraste de colores adecuado

### Performance

- [ ] Imágenes optimizadas
- [ ] Sin re-renders innecesarios
- [ ] Bundle size razonable
- [ ] Lighthouse Performance >90

**¡Éxito en tu aprendizaje!**

Recuerda: el objetivo no es solo completar las tareas, sino **entender profundamente** cómo y por qué funciona cada parte de React.
