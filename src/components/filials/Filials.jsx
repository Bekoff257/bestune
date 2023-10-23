/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "../../styles/Filials.css"

const Filials = () => {
  return (
    <div className='filials'>
        <div className="container">
            <div className="filials-content">
                <h1>FILIALLARIMIZ</h1>
                <div className="select-wrapper">
                <select>
                    <option value="Viloyatni tanlash">Viloyatni tanlash</option>
                    <option value="Toshkent Viloyati">Toshkent Viloyati</option>
                    <option value="Andijon Viloyati">Andijon Viloyati</option>
                    <option value="Buxoro Viloyati">Buxoro Viloyati</option>
                    <option value="Jizzah Viloyati">Jizzah Viloyati</option>
                    <option value="Qashqadaryo Viloyati">Qashqadaryo Viloyati</option>
                    <option value="Navoiy Viloyati">Navoiy Viloyati</option>
                    <option value="Namangan Viloyati">Namangan Viloyati</option>
                    <option value="Samarqand Viloyati">Samarqand Viloyati</option>
                    <option value="Sirdaryo Viloyati">Sirdaryo Viloyati</option>
                    <option value="Surhandaryo Viloyati">Surhandaryo Viloyati</option>
                    <option value="Farg'ona Viloyati">Farg'ona Viloyati</option>
                    <option value="Xorazm Viloyati">Xorazm Viloyati</option>

                </select>
                </div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a href="https://yandex.com/maps/org/bestune/180481144058/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                Bestune
            </a>
            <a href="https://yandex.com/maps/10335/tashkent/category/sale_of_used_cars/190246757599/?utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                Sale of used cars in Tashkent
            </a>
            <iframe
                src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.207369%2C41.232181&mode=search&oid=180481144058&ol=biz&source=mapframe&utm_source=mapframe&z=16.67"
                width="100%"
                height="600"
                frameBorder="1"
                allowFullScreen={true}
                style={{ position: 'relative' }}
            ></iframe>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Filials