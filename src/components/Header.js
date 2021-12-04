import React from 'react'
import ColorHeader from './ColorHeader'
import './Header.css'
const Header = () => {
    return (
        <div className = 'text'>
            <h1>What you'll learn in Chem 1410</h1>
            <p2 className = 'names'>By Joe Khosbayar, Chelsea Park, Varun Pasupuleti, Kimberly Warnagiris</p2>
            <img className = 'image' src = 'https://image.shutterstock.com/image-vector/sketch-word-chemistry-little-people-260nw-1349079017.jpg'></img>
            <div className = 'subtext'>
            <h3>A connection between the course and your life:</h3>
            <li>Chemistry is present in every aspect of life</li>
            <li>Specifically chapter 10 of chem 1410, color is present everywhere you look</li>
            <li>Useful because we now have an understanding of why certain objects look the way they do</li>
            </div>
        </div>
    )
}

export default Header
