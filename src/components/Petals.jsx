import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import petalImg from "../assets/petal.png";

const Petals = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false }, // We handle positioning manually
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 40, // Perfect amount
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    shape: {
                        type: "image",
                        image: { src: petalImg, width: 32, height: 32 }
                    },
                    opacity: {
                        value: 0.9,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 0.5,
                            opacity_min: 0,
                            sync: false
                        }
                    },
                    size: {
                        value: { min: 10, max: 20 },
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: { min: 1, max: 3 }, // Guarantees movement (no suspended petals)
                        direction: "bottom-right",
                        random: false,
                        straight: false,
                        outModes: { default: "out" }
                    },
                    rotate: {
                        value: { min: 0, max: 360 },
                        animation: {
                            enable: true,
                            speed: 2,
                            sync: false
                        }
                    }
                }
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10, // Top layer
                pointerEvents: "none"
            }}
        />
    );
};

export default Petals;