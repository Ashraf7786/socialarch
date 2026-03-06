import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Ensure initially centered and hidden
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

        let initialized = false;

        const xSetCursor = gsap.quickSetter(cursor, "x", "px");
        const ySetCursor = gsap.quickSetter(cursor, "y", "px");

        const onMouseMove = (e: MouseEvent) => {
            if (!initialized) {
                gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
                initialized = true;
            }

            xSetCursor(e.clientX);
            ySetCursor(e.clientY);

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power3.out"
            });
        };

        const onMouseLeave = () => {
            gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
            initialized = false;
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseleave', onMouseLeave);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    // Handle hover states on interactive elements via event delegation
    useEffect(() => {
        const follower = followerRef.current;
        if (!follower) return;

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, textarea, [role="button"]');

            if (isInteractive) {
                gsap.to(follower, {
                    scale: 1.5,
                    backgroundColor: "rgba(232, 49, 58, 0.1)", // brand-red with opacity
                    duration: 0.3
                });
            } else {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: "transparent",
                    duration: 0.3
                });
            }
        };

        document.addEventListener('mouseover', onMouseOver);

        return () => {
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <div className="hidden md:block">
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-brand-red rounded-full pointer-events-none z-[9999]"
            />
            {/* Follower Ring */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-brand-red rounded-full pointer-events-none z-[9998]"
            />
        </div>
    );
}
