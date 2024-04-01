// DoctorProfile.js
import React from 'react';
import './Profile.scss'; // Подключаем стили

function DoctorProfile() {
  const doctorData = {
    firstName: 'Иван',
    lastName: 'Иванов',
    position: 'Терапевт',
    workplace: 'Городская клиника №1',
    address: 'ул. Пушкина, д. 10',
    photo: 'url_to_photo.jpg', // Путь к фото доктора
    // Другие данные о докторе
  };

  return (
    <div className="doctor-profile">
      <div className="doctor-info">
        <div className="doctor-photo" style={{ backgroundImage: `url(${doctorData.photo})` }}></div>
        <div className="doctor-details">
          <h1>{doctorData.firstName} {doctorData.lastName}</h1>
          <p className="doctor-position">{doctorData.position}</p>
          <p><strong>Место работы:</strong> {doctorData.workplace}</p>
          <p><strong>Адрес:</strong> {doctorData.address}</p>
        </div>
      </div>
      {/* Другие данные о докторе */}
    </div>
  );
}

export default DoctorProfile;
