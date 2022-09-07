import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import ColourArray from './ColourArray';

export default function AddNewLifeEvent({lifeEvent, setLifeEvent, styles, modal, setModal}:any) {
    const [eventColour, setEventColour] = React.useState('#7C8B84');

    const colourSelection = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();

        console.log(event.currentTarget.style.color);
        setEventColour(event.currentTarget.style.backgroundColor);
    };

    const onLifeEventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const {
            name, value
        }:HTMLInputElement = event.currentTarget;

        setLifeEvent((prevEvent: object) => ({
            ...prevEvent, [name]: value
        }))

    };

    return <>
        <div className={styles.modal} style={{
            bottom: modal ? "0" : "-100vh",
            height: modal ? window.innerHeight*0.4 : 0
        }}>
            <div className={styles.modalhead}> 
                <button className={styles.closebtn} onClick={() => setModal(false)}>
                    <Image src="/static/images/close.svg" width="24px" height="24px" alt="Cancel adding the new event" />
                </button>
                <button className={styles.savebtn} onClick={() => console.log("Items!")}>Save</button>
            </div>

            <input className={styles.titleinput} name="title" value={lifeEvent.title} onChange={onLifeEventChange} placeholder="Event Title" />
            
            <div className={styles.detailrow}>
                <span style={{height: 48, display: 'flex', alignItems: 'center', padding: 4.5}}>
                    <Image src="/static/images/time.svg" width={19} height={19} alt="time" />
                </span>
                <input type="month" name="time" className={styles.timeinput} value={lifeEvent.time} onChange={onLifeEventChange} />
            </div>
            
            <div className={styles.colourinput}> 
                <h6 className={styles.colourtitle} style={{color: eventColour}}>Which colour can you match with this event?</h6>
                <ColourArray colourSelection={colourSelection} />
            </div>
            <div className={styles.description}>
                <span style={{height: 36, display: 'flex', alignItems: 'flex-start', padding: '6.5px 4.5px'}}>
                    <Image src="/static/images/write.svg" width={17} height={18} alt="locker" />
                </span>
                <textarea className={styles.detailinput} onChange={setLifeEvent} value={lifeEvent.description} placeholder="Add Description" maxLength={400} />
                {/* <input type="checkbox" name="public" className={styles.detailinput} value={lifeEvent.public} onChange={onLifeEventChange} /> */}
            </div>
        </div>
    </>
};