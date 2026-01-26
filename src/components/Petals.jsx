import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import petalImg from "../assets/petal.png";
import "./Petals.css";

const Petals = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
        particlesRef.current = engine;
        
        // Set initial velocities for all particles
        if (engine.particles && engine.particles.array) {
            engine.particles.array.forEach(particle => {
                if (!particle.originalVelocity) {
                    particle.originalVelocity = {
                        horizontal: particle.velocity?.horizontal || Math.random() * 2 + 1,
                        vertical: particle.velocity?.vertical || Math.random() * 2 + 1
                    };
                }
            });
        }
    }, []);

    const particlesRef = useRef(null);
    const scrollVelocity = useRef(0);
    const targetScrollVelocity = useRef(0);
    const scrollDirection = useRef(0);
    const mousePosition = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef(null);
    const lastUpdateTime = useRef(0);
    const velocityLerp = useRef(0.05);

    // Smooth easing function
    const lerp = (start, end, factor) => {
        return start * (1 - factor) + end * factor;
    };

    // Update particles with smooth transitions
    const updateParticlesSmooth = useCallback((timestamp) => {
        if (!particlesRef.current) return;

        // Smooth the scroll velocity
        scrollVelocity.current = lerp(scrollVelocity.current, targetScrollVelocity.current, velocityLerp.current);
        
        // If velocity is very small, set to 0
        if (Math.abs(scrollVelocity.current) < 0.01) {
            scrollVelocity.current = 0;
        }

        const particles = particlesRef.current.particles;
        if (!particles || !particles.array) return;

        const timeDelta = timestamp - lastUpdateTime.current;
        lastUpdateTime.current = timestamp;

        // Apply scroll effect smoothly
        const scrollEffect = scrollVelocity.current * 0.8;
        const directionMultiplier = scrollDirection.current;

        const updateCount = particles.array.length;
        
        for (let i = 0; i < updateCount; i++) {
            const particle = particles.array[i];
            if (!particle) continue;

            // Ensure original velocity is stored
            if (!particle.originalVelocity) {
                particle.originalVelocity = {
                    horizontal: particle.velocity?.horizontal || 2,
                    vertical: particle.velocity?.vertical || 2
                };
            }

            if (particle.velocity) {
                // Calculate target velocity based on scroll
                const targetVertical = particle.originalVelocity.vertical * 
                    (1 + directionMultiplier * 0.3) + scrollEffect;
                const targetHorizontal = particle.originalVelocity.horizontal * 
                    (1 + (Math.random() * 0.2 - 0.1));

                // Smoothly interpolate to target velocity
                particle.velocity.vertical = lerp(
                    particle.velocity.vertical,
                    targetVertical,
                    0.1 // Smooth transition factor
                );
                particle.velocity.horizontal = lerp(
                    particle.velocity.horizontal,
                    targetHorizontal,
                    0.1
                );

                // Mouse wind effect (very subtle)
                if (mousePosition.current.x && mousePosition.current.y && particle.position) {
                    const dx = particle.position.x - mousePosition.current.x;
                    const dy = particle.position.y - mousePosition.current.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 80) {
                        const force = 0.0005 * (1 - distance / 80);
                        particle.velocity.horizontal += (dx / distance) * force;
                        particle.velocity.vertical += (dy / distance) * force;
                    }
                }

                // Smooth rotation
                if (particle.rotate && particle.rotate.angle !== undefined) {
                    const rotationSpeed = 1.5 + Math.abs(scrollVelocity.current) * 0.08;
                    particle.rotate.angle += rotationSpeed * (timeDelta / 16.67); // Normalize to 60fps
                }
            }
        }

        // Continue animation loop
        animationFrameId.current = requestAnimationFrame(updateParticlesSmooth);
    }, []);

    // Handle wheel events with debouncing
    useEffect(() => {
        let wheelTimeout;
        let isWheeling = false;

        const handleWheel = (event) => {
            if (!isWheeling) {
                isWheeling = true;
                
                const deltaY = event.deltaY;
                const deltaTime = event.timeStamp - (lastUpdateTime.current || event.timeStamp);
                
                // Calculate velocity based on wheel delta and time
                targetScrollVelocity.current = Math.sign(deltaY) * Math.min(Math.abs(deltaY) / 5, 20);
                scrollDirection.current = Math.sign(deltaY);
                
                // Gradually return to zero
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    targetScrollVelocity.current = 0;
                    isWheeling = false;
                }, 150);
                
                // Small burst effect
                setTimeout(() => {
                    targetScrollVelocity.current = targetScrollVelocity.current * 0.3;
                }, 50);
            }
        };

        // Mouse move with throttling
        let mouseMoveTimeout;
        const handleMouseMove = (event) => {
            mousePosition.current = {
                x: (event.clientX / window.innerWidth) * 100,
                y: (event.clientY / window.innerHeight) * 100
            };
            
            // Clear previous timeout
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(() => {
                mousePosition.current.x = 0;
                mousePosition.current.y = 0;
            }, 100);
        };

        // Touch handling
        let touchStartY = 0;
        let touchStartTime = 0;
        
        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
            touchStartTime = Date.now();
        };
        
        const handleTouchMove = (event) => {
            const touchY = event.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            const deltaTime = Date.now() - touchStartTime;
            
            if (deltaTime > 0) {
                targetScrollVelocity.current = (deltaY / deltaTime) * 100;
                scrollDirection.current = Math.sign(deltaY);
                
                touchStartY = touchY;
                touchStartTime = Date.now();
                
                // Clear any existing timeout
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    targetScrollVelocity.current = 0;
                }, 200);
            }
        };

        // Start animation loop
        const startAnimation = () => {
            if (!animationFrameId.current) {
                lastUpdateTime.current = performance.now();
                animationFrameId.current = requestAnimationFrame(updateParticlesSmooth);
            }
        };

        // Add event listeners with passive where possible
        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        
        // Start animation
        startAnimation();

        // Cleanup
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
            clearTimeout(wheelTimeout);
            clearTimeout(mouseMoveTimeout);
            
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [updateParticlesSmooth]);

    // Particle configuration optimized for smoothness
    const particleOptions = {
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: { transparent: true },
        particles: {
            number: {
                value: 65, // INCREASED: More petals overall
                density: {
                    enable: true,
                    area: 600, // DECREASED: Higher density (more particles in smaller area)
                },
            },
            shape: {
                type: "image",
                image: {
                    src: petalImg,
                    width: 38, // SLIGHTLY INCREASED: Bigger petals
                    height: 38,
                },
            },
            opacity: {
                value: { min: 0.5, max: 0.95 }, // INCREASED: Higher minimum and maximum opacity
                random: true,
                anim: {
                    enable: true, // ENABLED: Added opacity animation for more dynamic look
                    speed: 1,
                    opacity_min: 0.4,
                    sync: false,
                },
            },
            size: {
                value: { min: 8, max: 22 }, // INCREASED: Larger petals overall
                random: true,
                anim: {
                    enable: true, // ENABLED: Added size animation
                    speed: 1.5,
                    size_min: 6,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: { min: 1.2, max: 3.5 }, // INCREASED: Slightly faster for more dynamic feel
                direction: "bottom-right",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                },
            },
            rotate: {
                value: { min: 0, max: 360 },
                random: true,
                direction: "clockwise",
                animation: {
                    enable: true,
                    speed: 2.5, // INCREASED: Faster rotation
                    sync: false,
                },
            },
            collisions: {
                enable: false,
            },
            trail: {
                enable: true, // KEPT ENABLED: Adds more visual density
                length: 3, // INCREASED: Longer trails
                fillColor: "#ff3366", // CHANGED: More vibrant color
            },
            // ADDED: New life settings for more dynamic appearance
            life: {
                duration: {
                    sync: false,
                    value: 15 // Longer life for particles
                },
                count: 1,
                delay: {
                    random: {
                        enable: true,
                        minimumValue: 0.5
                    },
                    value: 0
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                repulse: {
                    distance: 50, // INCREASED: Larger repulse area
                    duration: 0.5,
                },
                push: {
                    particles_nb: 2, // INCREASED: More petals on click
                },
                // ADDED: Bubble mode for mouse interaction
                bubble: {
                    distance: 50,
                    size: 15,
                    duration: 2,
                    opacity: 0.8,
                }
            },
        },
        // ADDED: More particles emission for continuous flow
        emitters: {
            direction: "top-right",
            life: {
                count: 0,
                duration: 0.1,
                delay: 0.1
            },
            rate: {
                delay: 0.5,
                quantity: 2 // Continuously emit petals
            },
            size: {
                width: 100,
                height: 100
            },
            position: {
                x: -10,
                y: -10
            }
        },
        retina_detect: true,
        smooth: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10,
                pointerEvents: "auto",
                opacity: 1, // INCREASED: Overall component opacity
            }}
        />
    );
};

export default Petals;