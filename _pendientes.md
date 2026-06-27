# Pendientes — CupFut Landing

> Ideas buenas pero no críticas para el lanzamiento. Revisar cuando la landing base esté en producción.

---

## 🟡 Prioridad Media

### Sección "Sneak Peek" (Carrusel de screenshots)
Carrusel interactivo con capturas reales de la app: trivias, wallpapers, pase mundialista, modo práctica.
- **Por qué no ahora:** La apertura de sobres ya demuestra el valor visual de la app.

### Social Proof / Testimonios
Testimonios de beta testers o métricas ("500+ preguntas listas", "Beta testing abierto").
- **Por qué no ahora:** Depende de tener beta testers activos.

### Trivia del día widget (conectado a Supabase)
Widget que muestre una trivia real desde la base de datos, cambiando dinámicamente.
- **Por qué no ahora:** Requiere conexión backend y endpoint. Hacer después del formulario waitlist.

### Live Leaderboard simulado
Ranking global con avatares, banderas y puntajes que suben/bajan.
- **Por qué no ahora:** Alto consumo de CPU, complejidad de simulación. Fase 2.

### Contador regresivo al Mundial 2026
Widget decorativo con cuenta regresiva al inicio del torneo.
- **Por qué no ahora:** Bajo impacto visual. Agregar cuando falten detalles.

### Sección FAQ animada (acordeón)
Preguntas frecuentes con expand/collapse animado.
- **Por qué no ahora:** Bueno pero no esencial para el impacto inicial.

---

## 🔧 Prioridad Baja (Infraestructura)

### Vite como bundler
Migrar a Vite para minificar recursos, compilar CSS moderno y gestionar dependencias.
- **Por qué no ahora:** El proyecto es pequeño, vanilla es más rápido para iterar.

### Conexión Supabase (formulario waitlist)
Conectar el formulario a Supabase para guardar leads con fecha y dispositivo de origen.
- **Por qué no ahora:** Primero tener el HTML/CSS/JS del formulario funcionando.

### Google Analytics / Posthog
Configurar eventos: clics en características, scroll depth, conversión del formulario.
- **Por qué no ahora:** Configurar cuando la landing esté en producción.

### Selector "Día de Partido / Día de Descanso"
Switch que cambia el diseño de la landing entre modo estadísticas y modo trivias/historia.
- **Por qué no ahora:** Complejidad innecesaria para el MVP. Concepto interesante para fase 2.

### Modo claro/oscuro toggle
Alternar entre tema oscuro (actual) y tema claro.
- **Por qué no ahora:** El tema oscuro es identidad de marca (#000 + #D4AF37). Innecesario.

---

## ❌ Descartado

| Idea | Razón |
|------|-------|
| **TypeScript** | Overkill total para una landing con JS mínimo. |
| **Efecto de partículas en Hero** | Riesgo de rendimiento en móviles. No aporta lo suficiente. |
| **Lighthouse 95+ como feature** | Es una meta, no una feature. Se consigue solo con buenas prácticas. |

---

> *Documento creado el 27 Jun 2026. Revisar prioridades tras lanzamiento inicial.*
