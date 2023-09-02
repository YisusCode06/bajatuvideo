"use client"
import './downloader.css'
import axios from 'axios';
import ytdl from 'ytdl-core';
import { useState } from 'react';

function paste() {
    // Obtener el elemento input
    const inputElement = document.getElementById("link-youtube") as HTMLInputElement;

    // Verificar si el navegador admite la API Clipboard
    if (navigator.clipboard) {
        navigator.clipboard.readText()
            .then((clipboardText) => {
                // Pegar el contenido del portapapeles en el input
                inputElement.value = clipboardText;
            })
            .catch((error) => {
                console.error('Error al leer el portapapeles:', error);
            });
    } else {
        // Si el navegador no admite la API Clipboard, mostrar un mensaje de error
        console.error('El navegador no admite la API Clipboard.');
    }
}

export default function downloader() {

    return (
        <>
            <div className="download flex justify-evenly">
                <button className="pegar text-white font-bold" onClick={paste}>Pegar</button>
                <input
                    type="text"
                    className="link w-full"
                    id='link-youtube'
                />
            </div>
            <div className="contenedor-formato flex justify-center">
                <select
                    name="formato"
                    id="formato"
                    className="formato"
                >
                    <option value="mp4">MP4</option>
                    <option value="mp3">MP3</option>
                </select>
            </div>
            <div className='contenedor-boton flex justify-center'>
                <button className='btn-descargar text-white font-bold' onClick={()=>{alert("Lo sentimos el sistema esta en fase Beta - Gracias 😘")}}>Descargar</button>
            </div>
        </>
    )
}