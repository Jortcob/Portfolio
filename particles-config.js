const particlesConfig = {
  particles: {
      number: {
          value: 80,
          density: {
              enable: true,
              value_area: 800
          }
      },
      color: {
          value: "#3498db" // Azul brillante
      },
      shape: {
          type: "circle",
          stroke: {
              width: 0,
              color: "#000000"
          }
      },
      opacity: {
          value: 0.5,
          random: false
      },
      size: {
          value: 5,
          random: true
      },
      line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff", // Este valor se actualizará dinámicamente
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          },
          onclick: {
              enable: true,
              mode: "push"
          },
          resize: true
      },
      modes: {
          grab: {
              distance: 400,
              line_linked: {
                  opacity: 1
              }
          },
          bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8
          },
          repulse: {
              distance: 200
          },
          push: {
              particles_nb: 4
          },
          remove: {
              particles_nb: 2
          }
      }
  },
  retina_detect: true
};

function initParticles(config) {
  particlesJS('particles-js', config);
}

initParticles(particlesConfig); // Inicializa las partículas con la configuración predeterminada

// Función para actualizar solo el color de las líneas
function updateLineColor(newColor) {
  particlesConfig.particles.line_linked.color = newColor;
  initParticles(particlesConfig); // Vuelve a inicializar las partículas con la nueva configuración
}
