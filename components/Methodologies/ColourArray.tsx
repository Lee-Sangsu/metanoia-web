export default function ColourArray({colourSelection}:any) {
    const colourArray: string[] = ["red", "yellow", "blue", "green", "grey", "azure", ""];

    return (<>
    <ul>
        {colourArray.map((colour, index) => <li key={index} onClick={colourSelection} style={{
            backgroundColor: colour
        }}></li>)}
    </ul>
    <style jsx>{`
        ul {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-block: 8px;
            width: 100%;
            list-style:none;
            padding: 0;
        }

        li {
            border-radius: 50%;
            width: 24px;
            height: 24px;
            margin-right: 16px;
        }

        li::marker {
            unicode-bidi: unset;
            font-variant-numeric: unset;
            white-space: unset;
            text-transform: none;
        }
    `}</style>
    </>);
}