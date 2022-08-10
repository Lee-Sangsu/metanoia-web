import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { isModuleNamespaceObject } from 'util/types';

export default function AddNewLifeEvent({lifeEvent, setLifeEvent, styles, modal, setModal}:any) {

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
            height: modal ? window.innerHeight - 72 : 0
        }}>
            <div className={styles.modalhead}> 
                <button className={styles.closebtn} onClick={() => setModal(false)}>
                    <Image src="/static/images/close.svg" width="24px" height="24px" alt="See my life path again" />
                </button>
                <button className={styles.savebtn} onClick={() => console.log("Items!")}>Save</button>

            </div>
            <input className={styles.titleinput} name="title" value={lifeEvent.title} onChange={onLifeEventChange} placeholder="Add Event" />
            <div className={styles.detailrow}>
                <span style={{height: 48, display: 'flex', alignItems: 'center', padding: 4.5}}>
                    <Image src="/static/images/time.svg" width={20} height={20} alt="time" />
                </span>
                <input type="month" name="time" className={styles.detailinput} value={lifeEvent.time} onChange={onLifeEventChange} />
            </div>
            <div className={styles.detailrow}>
                <span style={{height: 48, display: 'flex', alignItems: 'center', padding: 4.5}}>
                    <Image src="/static/images/location.svg" width={16.84} height={20} alt="location" />
                </span>
                <input type="text" name="location" className={styles.detailinput} value={lifeEvent.location} onChange={onLifeEventChange} placeholder="Where did it happen?" />
            </div>
            <div className={styles.detailrow}>
                <span style={{height: 48, display: 'flex', alignItems: 'center', padding: 4.5}}>
                    <Image src="/static/images/locker.svg" width={16} height={20} alt="locker" />
                    <label>Public</label>
                </span>
                {/* <input type="checkbox" name="public" className={styles.detailinput} value={lifeEvent.public} onChange={onLifeEventChange} /> */}
            </div>
            <div className={styles.description}>
                <span style={{height: 72, display: 'flex', alignItems: 'flex-start', padding: '6.5px 4.5px'}}>
                    <Image src="/static/images/write.svg" width={17} height={18} alt="locker" />
                </span>
                <textarea className={styles.detailinput} onChange={setLifeEvent} value={lifeEvent.description} placeholder="Add Description" maxLength={400} />
                {/* <input type="checkbox" name="public" className={styles.detailinput} value={lifeEvent.public} onChange={onLifeEventChange} /> */}
            </div>
        </div>
    </>
};