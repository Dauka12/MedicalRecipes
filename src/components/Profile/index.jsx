// DoctorProfile.js
import React from 'react';
import './Profile.scss';// Подключаем стили
import photo from './../../assets/img/doctor.jpg'

function DoctorProfile() {
  const doctorData = {
    firstName: 'Талгат',
    lastName: ' ',
    position: 'Айтушник',
    workplace: 'Astana IT University',
    address: 'ул. Пушкина, д. 10',
    photo: photo, // Путь к фото доктора
    // Другие данные о докторе
  };

  return (
    <div className="doctor-profile">
      <div className="doctor-info">
        <div className="doctor-photo" style={{ backgroundImage: `url(${doctorData.photo})` }}></div>
        <div className="doctor-details">
          <h1>{doctorData.firstName} {doctorData.lastName}</h1>
          <p className="doctor-position">{doctorData.position}</p>
          <p><strong>Место обучения:</strong> {doctorData.workplace}</p>
          <p><strong>Адрес:</strong> {doctorData.address}</p>
        </div>
      </div>
      {/* Другие данные о докторе */}
    </div>
  );
}

export default DoctorProfile;
