'use client'
import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
interface ImagePickerProps{
    label: string,
    name: string
}


export default function ImagePicker({label,name}:ImagePickerProps){
    const imageInputFieldRef = useRef<HTMLInputElement>(null)
    const [pickedImage,setPickedImage] = useState<string | null>(null);

    function handleClick(){
    imageInputFieldRef.current?.click();
}

 function handleImageChange(event: React.ChangeEvent<HTMLInputElement>){
    const file = event.target.files?.[0];
    if(!file){
        return
    } 
    const fileReader = new FileReader();
    fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
    }
    fileReader.readAsDataURL(file);

 }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>

        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>Please choose image</p>}
        {pickedImage && (
          <Image
            src={pickedImage}
            alt="selected image"
            fill
          />
        )}
            </div>
            <input type='file'  className={classes.input}
            id={name} 
            accept='image/png, image/jpeg' 
            name={name} ref={imageInputFieldRef} onChange={handleImageChange}/>
            <button className={classes.button} type='button' onClick={handleClick}>Pick Image</button>
        </div>
    </div>
}


 