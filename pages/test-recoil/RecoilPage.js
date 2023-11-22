import { Input } from 'antd'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textState } from './atom'
import { countInput } from './selector'


function TextInput() {
    const  [text,setText] = useRecoilState(textState)
    const  handleChange = (e) =>{
        setText(e.target.value)
    }
    return(
        <>
        <Input placeholder='Nhap text' onChange={handleChange}/>
        <br />
        <p>Text is : {text} </p>
        </>
    )
}

function CharacterCount () {
    const length = useRecoilValue(countInput)
    return (
        <p>Do dai chuoi : {length}</p>
    )
}

function RecoilPage() {
  return (
    <>
    <TextInput/>
    <CharacterCount/>
    </>
  )
}

export default RecoilPage

