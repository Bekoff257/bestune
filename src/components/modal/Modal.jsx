import { useState } from 'react'
import rule from "../../assests/img/Vector.png"
import ReactInputMask from 'react-input-mask'
import { LiaTimesSolid } from "react-icons/lia"
import "./Modal.css"
import axios from 'axios'


const TOKEN = "6705066356:AAEowjwK84ZjBHHBwU-JWonziwOgB_wL3BA";
const Modal = (props) => {  
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const botToken = TOKEN;

    const closeModal = () => {
        props.setModalOpen(false);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();

        const formData = {
            region: e.target[0].value,
            phone: phone,
            name: name,
            model: e.target[3].value
        }

        axios.post('https://api.telegram.org/bot' + botToken + '/sendMessage', {
            chat_id: '-4087906534',
            text: `Region: ${formData.region}\nFull_Name: ${formData.name}\nPhone: ${formData.phone}\nCar_Model: ${formData.model}`,
        })

        setName('')
        setPhone('')
    }

  const countryArray = [
    {
        name: "Viloyatni tanglang"
    },
    {
        name: 'Toshkent viloyati'
    },
    {
        name: 'Andijon viloyati'
    },
    {
        name: 'Buxoro viloyati'
    },
    {
        name: 'Jizzah viloyati'
    },
    {
        name: 'Qashqadaryo viloyati'
    },
    {
        name: 'Navoiy viloyati'
    },
    {
        name: 'Namangan viloyati'
    },
    {
        name: 'Samarqand viloyati'
    },
    {
        name: 'Sirdaryo viloyati'
    },
    {
        name: 'Surhandaryo viloyati'
    },
    {
        name: "Farg'ona viloyati"
    },
    {
        name: 'Xorazm viloyati'
    },
  ]
  return (
        <div className="modal-wrapper">
        <div className='modal'>
        <div className="container">
                <div className="close-form-btn">
                    <button onClick={() => closeModal()}>
                        <LiaTimesSolid/>
                    </button>
                </div>
            <div className="modal-content">
                <div className="modal-form">
                <form onSubmit={submitFormHandler}>
                    <select>
                        {
                            countryArray.map((item, index) => {
                                return (
                                    <option value={item.name}>{item.name}</option>
                                )
                            })
                        }
                    </select> <br />
                        <ReactInputMask
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            mask="+\9\9\8 (99) 999-99-99"
                        >
                        {() => <input type="text" placeholder="Telefon raqam" required/>}
                    </ReactInputMask> <br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ism Familya' required/> <br />
                    <select>
                        <option value="1">Mashina modeli</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div className="form-submit-btn">
                        <button>Test drive yuborish</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Modal