import { useRef, useEffect } from 'react'

export default function LifeGraphCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const initialDrawing = (ctx: CanvasRenderingContext2D | null, height: number, width: number, chock: HTMLImageElement) => {
        if (ctx === null) throw new Error('Could not get rendering context.');
        // chock.sizes.
        ctx.beginPath();
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        // Draw Column Line
        ctx.lineWidth = 6;  // used for all paths
        ctx.moveTo(16, 24);
        ctx.lineTo(16, height - 24);
        // Draw Width Line
        ctx.lineWidth = 6;  // used for all paths
        ctx.setLineDash([4, 8, 12, 16]); // Not sure, try it out
        ctx.moveTo(16, (height / 2)-24);
        ctx.lineTo((width-16), (height/2)-24);
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
                await initialDrawing(context, canvas?.height, canvas?.width, chock);
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