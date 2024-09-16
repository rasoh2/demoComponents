// Historia de Usuario: Simulador de Semáforo
// Título: Simulador de semáforo automatizado con control manual.

// Como: usuario de una aplicación interactiva,
// quiero: visualizar un semáforo que cambia de colores de forma automática y tener la opción de controlarlo manualmente,
// para: poder entender cómo funcionan los ciclos de un semáforo y poder interactuar con él de manera intuitiva.

// 1. Simulación automática del ciclo del semáforo:
// El semáforo debe comenzar automáticamente cuando la aplicación se inicia, cambiando los colores en el orden correcto: Verde, Amarillo y Rojo.
// Los tiempos de cambio de color deben ser ajustables, pero por defecto deben ser: 5 segundos en verde, 2 segundos en amarillo, y 5 segundos en rojo.

// 2. Control manual del semáforo:
// Debe haber un conjunto de botones (tres) que permitan al usuario cambiar el color del semáforo de manera manual. Los botones deben ser etiquetados como "Verde", "Amarillo" y "Rojo".
// Al hacer clic en un botón, el semáforo debe cambiar inmediatamente a ese color y pausar el ciclo automático.
// Debe existir un botón para restituir el ciclo automático si el usuario lo ha interrumpido manualmente.

// 3. Visualización del semáforo:
// El semáforo debe mostrar tres luces (una por cada color: Verde, Amarillo, Rojo) de manera clara.
// Solo una luz debe estar activa a la vez (en color más brillante), las demás deben aparecer apagadas (en un tono más oscuro).
// El semáforo debe verse en una orientación vertical, simulando la apariencia real de un semáforo.

// 4. Estado inicial:
// El simulador debe arrancar en color rojo, ya que representa el estado inicial de un semáforo.

// BonusTrack: Transformar el svg traffic-light.svg a componente react

export const TrafficLight = () => {
  return (
    <div>TrafficLight</div>
  )
}
