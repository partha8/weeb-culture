import Particles from "react-tsparticles";

export const ParticlesContainer = () => {
  return (
    <Particles
      style={{
        position: "absolute",
        inset: "0",
        zIndex: "0",
      }}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },

        fpsLimit: 120,
        interactivity: {
          resize: true,
        },
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 3,
            random: false,
          },
        },
        retina_detect: true,
      }}
    ></Particles>
  );
};
