import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

type CursorProps = {
    cursorVariant: "default" | "text";
}

export default function Cursor({ cursorVariant }: CursorProps){
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    
    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove)
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 45,
            y: mousePosition.y - 45,
            height: 50,
            width: 50,
        },
        text: {
            x: mousePosition.x - 45,
            y: mousePosition.y - 45, 
            height: 150,
            width: 150,
        }
    }

    return(
        <motion.div 
            className="z-50 fixed top-0 left-0 h-[50px] w-[50px] rounded-full glass-ring pointer-events-none"
            variants={variants}
            animate={cursorVariant}
            >
        </motion.div>
    );
} 