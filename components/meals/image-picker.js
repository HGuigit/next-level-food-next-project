'use client'

import { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from "next/image";

export default function ImagePicker({ label, name }) {

    const inputRef = useRef(name);
    const [imageFile, setImageFile] = useState(null);

    console.log(imageFile);

    function handlePickClick() {
        inputRef.current.click()
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) {
            setImageFile(null)
            return;
        }

        setImageFile(URL.createObjectURL(file));
    }


    return (
      <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
           <div className={styles.preview}>
                    {!imageFile && 'Nenhuma imagem escolhida.'}
                    {imageFile && <Image src={imageFile} alt='Uma imagem escolhida pelo usuário' fill />}
          </div>
          <input
            className={styles.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={inputRef}
            onChange={handleImageChange}
            required
          />
          <button
            onClick={handlePickClick}
            className={styles.button}
            type="button"
          >
            Escolher uma imagem.
          </button>
        </div>
      </div>
    );
}