import { useRef, useEffect } from 'react'
import { constSelector } from 'recoil';

export default function LifeGraphCanvas({canvasRef}:any) {
    // const canvasRef = useRef<HTMLCanvasElement>(null);

    const initialCanvasDrawing = (ctx: CanvasRenderingContext2D | null, height: number, width: number, chock: HTMLImageElement) => {
        // The width of canvas is 100vw.
        if (ctx === null) throw new Error('Could not get rendering context.');
        // chock.sizes.
        ctx.beginPath();
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        // Draw solid column line
        ctx.setLineDash([]);
        ctx.lineWidth = 6;  // used for all paths
        ctx.moveTo(16, 24);
        ctx.lineTo(16, height - 24);
        ctx.stroke();
        // Draw dashed width line
        ctx.lineWidth = 6;  // used for all paths
        ctx.setLineDash([4, 8, 12, 16]); 
        ctx.moveTo(16, (height / 2)-24);
        ctx.lineTo((width)-32, (height/2)-24);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(chock, 0, 8, 32, 36);
        ctx.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef?.current;
        if (canvas === null) {
            throw new Error('Could not get canvas ref.') 
        } else {
            if(window.devicePixelRatio >= 2){        
                canvas.width = canvas.clientWidth*2;
                canvas.height = canvas.clientHeight*2;
            }
            const context: CanvasRenderingContext2D | null = canvas!.getContext('2d');
            const chock = new Image();
            chock.src = "/static/images/chock.svg";
            chock.onload = async () => {
                await initialCanvasDrawing(context, canvas?.height, canvas?.width, chock);
            };
        }
    }, [canvasRef])

    return <>
    <canvas ref={canvasRef} />
        <style jsx>{`
            canvas {
                width: calc(100vw - 16px);
                height: calc(100vh - 357px);
                margin-top: 16px;
                overflow-x: scroll;
                scroll-behavior: smooth;
                pixel
            }
        `}</style>
    </>
};